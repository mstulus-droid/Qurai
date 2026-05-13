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
  const listRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLAnchorElement>(null);
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
            const href = availableItem
              ? `/bedah-surat/${availableItem.slug}`
              : `/surat/${surah.id}`;

            return (
              <Link
                key={surah.id}
                ref={isCurrent ? currentRef : undefined}
                href={href}
                onPointerEnter={() => setHoverIndex(index)}
                style={{ opacity: getOpacity(index, hoverIndex, isCurrent) }}
                className={`grid grid-cols-[2.35rem_minmax(0,1fr)] items-center gap-2 rounded-[0.7rem] px-2 text-left transition-all duration-200 ease-out ${
                  isFocused ? "py-2.5" : "py-1.5"
                } ${
                  isCurrent
                    ? "bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] text-[var(--qurai-green)]"
                    : "text-[var(--qurai-muted)] hover:bg-[color-mix(in_srgb,var(--qurai-gold)_6%,transparent)] hover:text-[var(--qurai-text)]"
                }`}
              >
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
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
