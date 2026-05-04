"use client";

import { useState, useTransition, useCallback } from "react";
import Link from "next/link";
import { HomeControls } from "./home-controls";
import { HomeStickySection } from "./home-sticky-section";
import { searchVersesAction, type ScoredVerseRecord } from "./actions";
import { HighlightedText } from "@/app/highlighted-text";


type SurahOption = {
  id: number;
  nameLatin: string;
  meaning: string;
};

type HomeClientWrapperProps = {
  selectedSurah: string;
  selectedAyat: string;
  surahs: SurahOption[];
  list: React.ReactNode;
};

function CompactResultCard({
  verse,
  query,
}: {
  verse: ScoredVerseRecord;
  query: string;
}) {
  const ratio =
    verse.maxScore > 0 ? Math.max(0.04, verse.score / verse.maxScore) : 0;
  const percent = Math.round(ratio * 100);

  return (
    <Link
      href={`/ayat/${verse.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-[1.25rem] border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_82%,transparent)] p-3 transition hover:border-[var(--qurai-border-strong)] sm:p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="truncate text-xs font-semibold text-[var(--qurai-muted)]">
          {verse.surahNameIndonesian} • Ayat {verse.ayahNumber}
        </p>
        {verse.maxScore > 0 ? (
          <span
            className="shrink-0 font-mono text-[10px] font-semibold uppercase text-[var(--qurai-green)]"
            aria-label={`Relevansi ${percent} persen`}
          >
            {percent}%
          </span>
        ) : null}
      </div>

      {verse.maxScore > 0 ? (
        <div className="mt-1.5 similarity-track">
          <div
            className="similarity-fill"
            style={{ width: `${percent}%` }}
          />
        </div>
      ) : null}

      <p className="qurai-arabic-text font-arabic mt-2 line-clamp-2 text-right text-xl leading-[1.8] sm:text-2xl">
        {verse.arabicText}
      </p>
      <p className="font-serif-reading mt-2 line-clamp-3 text-sm leading-6 text-[var(--qurai-text)]">
        <HighlightedText text={verse.translation} query={query} />
      </p>
      {verse.critique ? (
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[var(--qurai-muted)]">
          <HighlightedText text={verse.critique} query={query} />
        </p>
      ) : null}
    </Link>
  );
}

export function HomeClientWrapper({
  selectedSurah,
  selectedAyat,
  surahs,
  list,
}: HomeClientWrapperProps) {
  const [openPanel, setOpenPanel] = useState<"search" | "jump" | null>(null);
  const [results, setResults] = useState<ScoredVerseRecord[] | null>(null);
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearch = useCallback(async (q: string) => {
    setQuery(q);

    startTransition(async () => {
      const results = await searchVersesAction(q);
      setResults(results);
    });
  }, []);

  function handleResetSearch() {
    setResults(null);
    setQuery("");
  }

  const hasResults = results !== null;

  return (
    <div className="flex flex-1 flex-col gap-4">
      <HomeStickySection
        hideList={hasResults || openPanel !== null}
        controls={
          <HomeControls
            openPanel={openPanel}
            onPanelChange={(panel) => {
              setOpenPanel(panel);
              if (!panel) {
                handleResetSearch();
              }
            }}
            selectedSurah={selectedSurah}
            selectedAyat={selectedAyat}
            surahs={surahs}
            onSearch={handleSearch}
            onResetSearch={handleResetSearch}
            isSearching={isPending}
          />
        }
        list={list}
      />

      {hasResults ? (
        <section className="qurai-surface flex-1 rounded-[1.75rem] p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-[var(--qurai-text)]">
              {results.length} ayat untuk &quot;{query}&quot;
            </h2>
            <button
              type="button"
              onClick={handleResetSearch}
              className="qurai-control rounded-full px-3 py-1.5 text-xs font-semibold transition"
            >
              Tutup
            </button>
          </div>

          {results.length > 0 ? (
            <div className="mt-3 flex flex-col gap-2">
              {results.map((verse) => (
                <CompactResultCard
                  key={verse.id}
                  verse={verse}
                  query={query}
                />
              ))}
            </div>
          ) : (
            <div className="mt-3 rounded-[1.25rem] border border-dashed border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_72%,transparent)] px-4 py-4 text-sm text-[var(--qurai-muted)]">
              Tidak ada ayat yang cocok dengan kata kunci ini.
            </div>
          )}
        </section>
      ) : null}
    </div>
  );
}
