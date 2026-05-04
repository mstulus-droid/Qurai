"use client";

import { useEffect, useRef, useState } from "react";

export function HomeStickySection({
  controls,
  list,
  hideList,
}: {
  controls: React.ReactNode;
  list: React.ReactNode;
  hideList?: boolean;
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
            <div className="border-t border-[var(--qurai-border-strong)] bg-[var(--qurai-green-deep)] px-4 py-3 text-center font-mono text-xs font-semibold uppercase text-[#f3f1e8] sm:px-5">
              Daftar Surat
            </div>
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
