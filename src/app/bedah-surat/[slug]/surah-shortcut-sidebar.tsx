"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { bedahSuratItems } from "@/lib/bedah-surat";
import type { SurahListItem } from "@/lib/quran-data";

type Props = {
  surahs: SurahListItem[];
  currentSurahNumber: number;
};

function getOpacity(index: number, hoverIndex: number | null, isCurrent: boolean) {
  if (isCurrent) return 1;
  if (hoverIndex === null) return 0.13;

  const distance = Math.abs(index - hoverIndex);
  if (distance === 0) return 1;
  if (distance === 1) return 0.9;
  if (distance === 2) return 0.78;
  if (distance === 3) return 0.66;
  if (distance === 4) return 0.48;
  if (distance === 5) return 0.38;
  return 0.13;
}

export function SurahShortcutSidebar({ surahs, currentSurahNumber }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [noticeSurah, setNoticeSurah] = useState<SurahListItem | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLAnchorElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);
  const availableByNumber = new Map(
    bedahSuratItems.map((bedahItem) => [bedahItem.surahNumber, bedahItem]),
  );

  useEffect(() => {
    const list = listRef.current;
    const current = currentRef.current;

    if (!list || !current) return;

    const listRect = list.getBoundingClientRect();
    const currentTop = current.offsetTop;
    const targetTop = currentTop - listRect.height / 2 + current.offsetHeight / 2;
    list.scrollTop = Math.max(0, targetTop);
  }, [currentSurahNumber]);

  useEffect(() => {
    if (!noticeSurah) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;
      if (target instanceof Node && noticeRef.current?.contains(target)) {
        return;
      }

      setNoticeSurah(null);
    }

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => document.removeEventListener("pointerdown", handlePointerDown, true);
  }, [noticeSurah]);

  return (
    <aside className="relative hidden w-60 xl:block">
      <div className="fixed top-28 bottom-4 w-60 overflow-hidden">
        <div className="px-2 pb-3">
          <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)] opacity-70">
            Shortcut Surat
          </p>
        </div>
        <div
          ref={listRef}
          className="scrollbar-hide h-[calc(100vh_-_11rem)] overflow-y-auto overscroll-contain py-1"
          onPointerLeave={() => setHoverIndex(null)}
        >
          {surahs.map((surah, index) => {
            const availableItem = availableByNumber.get(surah.id);
            const isCurrent = surah.id === currentSurahNumber;
            const isFocused = isCurrent || hoverIndex === index;
            const className = `grid w-full grid-cols-[2.35rem_minmax(0,1fr)] items-center gap-2 rounded-[0.7rem] px-2 text-left transition-all duration-200 ease-out ${
              isFocused ? "py-2.5" : "py-1.5"
            } ${
              isCurrent
                ? "bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] text-[var(--qurai-green)]"
                : "text-[var(--qurai-muted)] hover:bg-[color-mix(in_srgb,var(--qurai-gold)_6%,transparent)] hover:text-[var(--qurai-text)]"
            }`;
            const content = (
              <>
                <span
                  className={`font-mono tabular-nums transition-all duration-200 ease-out ${
                    isFocused ? "text-[0.72rem]" : "text-[0.62rem]"
                  }`}
                >
                  {surah.id.toString().padStart(3, "0")}
                </span>
                <span className="min-w-0">
                  <span
                    className={`block truncate font-medium transition-all duration-200 ease-out ${
                      isFocused ? "text-base" : "text-sm"
                    }`}
                  >
                    {surah.nameLatin}
                  </span>
                </span>
              </>
            );

            if (!availableItem) {
              return (
                <button
                  key={surah.id}
                  type="button"
                  onClick={() => setNoticeSurah(surah)}
                  onPointerEnter={() => setHoverIndex(index)}
                  style={{ opacity: getOpacity(index, hoverIndex, isCurrent) }}
                  className={className}
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={surah.id}
                ref={isCurrent ? currentRef : undefined}
                href={`/bedah-surat/${availableItem.slug}`}
                onPointerEnter={() => setHoverIndex(index)}
                style={{ opacity: getOpacity(index, hoverIndex, isCurrent) }}
                className={className}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
      {noticeSurah ? (
        <div
          ref={noticeRef}
          role="status"
          className="fixed right-6 bottom-6 z-[70] w-80 border border-[color-mix(in_srgb,var(--qurai-gold)_42%,var(--qurai-border))] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_96%,transparent)] p-5 shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)] backdrop-blur"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)]">
                Belum tersedia
              </p>
              <p className="mt-2 font-serif-reading text-[1.08rem] italic leading-snug text-[var(--qurai-text)]">
                Bedah {noticeSurah.nameLatin} belum masuk arsip.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--qurai-muted)]">
                Surat ini sudah ada di peta kerja Qurai. Saat naskahnya selesai,
                shortcut ini akan langsung membuka pembacaan lengkapnya.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setNoticeSurah(null)}
              className="shrink-0 border border-[var(--qurai-border)] px-3 py-1.5 font-mono text-[0.58rem] uppercase text-[var(--qurai-muted)] transition hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
            >
              Tutup
            </button>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
