"use client";

import { useEffect, useRef, useState } from "react";
import { CommitInfoPopup } from "@/components/commit-info-popup";
import type { SurahStats } from "@/lib/quran-data";

export function HomeStickySection({
  controls,
  list,
  hideList,
  surahStats,
}: {
  controls: React.ReactNode;
  list: React.ReactNode;
  hideList?: boolean;
  surahStats?: SurahStats[];
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`flex flex-col ${hideList ? "flex-1" : ""}`}>
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
      <div className="sticky top-0 z-20">
        <div
          className={`qurai-surface overflow-hidden transition-all duration-200 ${
            isStuck ? "rounded-none" : "rounded-[1.75rem]"
          }`}
        >
          {controls}
          {!hideList ? (
            <CommitInfoPopup surahStats={surahStats}>
              <span className="block w-full border-t border-[var(--qurai-border-strong)] bg-[var(--qurai-green-deep)] px-4 py-3 text-center font-mono text-xs font-semibold uppercase text-[#f3f1e8] transition hover:bg-[color-mix(in_srgb,var(--qurai-green-deep)_88%,black)] sm:px-5">
                Daftar Surat
              </span>
            </CommitInfoPopup>
          ) : null}
        </div>
      </div>
      <div
        className={`qurai-surface overflow-hidden transition-all duration-200 ${
          hideList ? "hidden" : ""
        } ${
          isStuck
            ? "mt-0 rounded-[1.75rem] rounded-t-none"
            : "mt-4 rounded-[1.75rem] rounded-t-none"
        }`}
      >
        {list}
      </div>
    </div>
  );
}
