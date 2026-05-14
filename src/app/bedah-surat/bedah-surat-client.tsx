"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SurahListItem } from "@/lib/quran-data";
import type { BedahSuratItem } from "@/lib/bedah-surat";

type Urutan = "mushaf" | "turun";
type Arah = "naik" | "turun";

type Props = {
  surahs: SurahListItem[];
  availableItems: BedahSuratItem[];
};

function normalizePlace(place: string) {
  const normalized = place.toLowerCase();
  if (normalized.includes("makk") || normalized.includes("mekk") || normalized.includes("mecca")) {
    return "Makkiyah";
  }
  if (normalized.includes("madin") || normalized.includes("medin")) {
    return "Madaniyah";
  }
  return place || "Tidak diketahui";
}

function sortLabel(mode: Urutan) {
  return mode === "mushaf" ? "Urutan surat" : "Urutan turunnya surat";
}

export function BedahSuratClient({ surahs, availableItems }: Props) {
  const [mode, setMode] = useState<Urutan>("mushaf");
  const [direction, setDirection] = useState<Arah>("naik");
  const [noticeSurah, setNoticeSurah] = useState<SurahListItem | null>(null);
  const noticeRef = useRef<HTMLDivElement>(null);

  const availableByNumber = useMemo(() => {
    return new Map(availableItems.map((item) => [item.surahNumber, item]));
  }, [availableItems]);

  const sortedSurahs = useMemo(() => {
    const list = surahs.slice().sort((left, right) => {
      const leftValue = mode === "mushaf" ? left.id : left.revelationOrder || 999;
      const rightValue = mode === "mushaf" ? right.id : right.revelationOrder || 999;
      return direction === "naik" ? leftValue - rightValue : rightValue - leftValue;
    });

    return list;
  }, [surahs, mode, direction]);

  useEffect(() => {
    if (!noticeSurah) {
      return;
    }

    function closeOnOutsidePointer(event: PointerEvent) {
      const target = event.target;
      if (target instanceof Node && noticeRef.current?.contains(target)) {
        return;
      }

      setNoticeSurah(null);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer, true);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer, true);
    };
  }, [noticeSurah]);

  return (
    <div>
      <div className="mb-7 flex flex-col gap-4 border-b border-[var(--qurai-border)] pb-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex font-mono text-[0.68rem] uppercase text-[var(--qurai-quiet)]">
          {[
            { key: "mushaf" as const, label: "Urut Surat" },
            { key: "turun" as const, label: "Urut Turun" },
          ].map((tab) => {
            const active = mode === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setMode(tab.key)}
                className={`relative shrink-0 px-0 py-3 transition first:mr-7 ${
                  active ? "text-[var(--qurai-text)]" : "hover:text-[var(--qurai-green)]"
                }`}
              >
                {tab.label}
                {active ? (
                  <span className="absolute inset-x-0 bottom-[-17px] h-px bg-[var(--qurai-gold)]" />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-quiet)]">
            {sortLabel(mode)}
          </p>
          <button
            type="button"
            onClick={() => setDirection((value) => (value === "naik" ? "turun" : "naik"))}
            className="inline-flex h-9 items-center gap-2 border border-[var(--qurai-border)] bg-[var(--qurai-surface)] px-3 font-mono text-[0.58rem] uppercase text-[var(--qurai-text)] transition hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
          >
            Urut: {direction === "naik" ? "Naik" : "Turun"}
            <span aria-hidden>{direction === "naik" ? "↑" : "↓"}</span>
          </button>
        </div>
      </div>

      {mode === "turun" ? (
        <div className="mb-7 border border-[color-mix(in_srgb,var(--qurai-green)_24%,var(--qurai-border))] bg-[color-mix(in_srgb,var(--qurai-green)_8%,var(--qurai-surface))] px-5 py-4 text-sm leading-7 text-[var(--qurai-muted)]">
          Tampilan ini mengikuti urutan kronologis turunnya surat berdasarkan
          data urutan wahyu di arsip Qurai. Urutan turunnya surat adalah wilayah
          kajian yang memiliki perbedaan pendapat, terutama karena sebagian
          surat turun bertahap.
        </div>
      ) : null}

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {sortedSurahs.map((surah, index) => {
          const item = availableByNumber.get(surah.id);
          const orderNumber = mode === "mushaf" ? surah.id : surah.revelationOrder || index + 1;
          const placeLabel = normalizePlace(surah.revelationPlace);
          const content = (
            <div
              className="qurai-surah-card qurai-shine-hover group flex min-h-[92px] items-center gap-4 border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface)_82%,var(--qurai-bg))] px-4 py-4 transition hover:border-[color-mix(in_srgb,var(--qurai-green)_42%,var(--qurai-border))] hover:bg-[color-mix(in_srgb,var(--qurai-green)_7%,var(--qurai-surface))]"
            >
              <div className="grid h-12 w-12 shrink-0 rotate-45 place-items-center bg-[color-mix(in_srgb,var(--qurai-text)_5%,transparent)] text-[var(--qurai-text)] transition group-hover:bg-[var(--qurai-green)] group-hover:text-[var(--qurai-ink)] group-hover:shadow-[0_14px_34px_-28px_var(--qurai-green)]">
                <span className="-rotate-45 font-mono text-sm font-semibold">
                  {orderNumber}
                </span>
              </div>
              <div className="grid min-w-0 flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <div className="min-w-0 self-center">
                    <h2 className="truncate text-[0.98rem] font-semibold text-[var(--qurai-text)] transition group-hover:text-[var(--qurai-gold)]">
                      {surah.nameLatin}
                    </h2>
                    <p className="mt-0.5 truncate text-xs text-[var(--qurai-muted)] transition group-hover:text-[var(--qurai-green)]">
                      {surah.meaning}
                    </p>
                </div>
                <div className="flex min-w-[5.4rem] shrink-0 flex-col items-end justify-center gap-2">
                  <p className="font-arabic text-xl leading-none text-[var(--qurai-text)] transition group-hover:text-[var(--qurai-gold)]">
                    {surah.nameArabic}
                  </p>
                  <span className="font-mono text-[0.56rem] uppercase text-[var(--qurai-quiet)] transition group-hover:text-[var(--qurai-green)]">
                    {placeLabel}
                  </span>
                </div>
              </div>
            </div>
          );

          return item ? (
            <Link key={surah.id} href={`/bedah-surat/${item.slug}`}>
              {content}
            </Link>
          ) : (
            <button
              key={surah.id}
              type="button"
              onClick={() => setNoticeSurah(surah)}
              className="text-left"
              aria-label={`${surah.nameLatin} belum dibedah`}
            >
              {content}
            </button>
          );
        })}
      </div>

      {noticeSurah ? (
        <div
          ref={noticeRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby="bedah-surat-notice-title"
          className="fixed inset-x-4 bottom-5 z-[70] mx-auto max-w-md border border-[color-mix(in_srgb,var(--qurai-gold)_42%,var(--qurai-border))] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_96%,transparent)] p-5 shadow-[0_28px_80px_-36px_rgba(0,0,0,0.9)] backdrop-blur"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)]">
                Belum tersedia
              </p>
              <p
                id="bedah-surat-notice-title"
                className="mt-2 font-serif-reading text-[1.18rem] italic leading-snug text-[var(--qurai-text)]"
              >
                Bedah {noticeSurah.nameLatin} belum masuk arsip.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--qurai-muted)]">
                Surat ini sudah ada di peta kerja Qurai. Nanti saat naskahnya
                selesai, kartu ini akan langsung membuka pembacaan lengkapnya.
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
    </div>
  );
}
