"use client";

import { useEffect, useState } from "react";
import {
  SurahDisplayMenuButton,
  SurahHeaderThemeToggle,
} from "./surah-display-shell";

type SurahStickyTitleProps = {
  surahNumber: number;
  title: string;
  targetId?: string;
};

const SHOW_AFTER_SCROLL_Y = 220;

export function SurahStickyTitle({
  surahNumber,
  title,
  targetId = "surah-header",
}: SurahStickyTitleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL_Y);
    }

    const visibilityTimer = window.setTimeout(updateVisibility, 0);
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.clearTimeout(visibilityTimer);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  function scrollToHeader() {
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-0 z-[70] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="border-b border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg-soft)_88%,transparent)] px-5 py-2 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.75)] backdrop-blur sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-[3rem_minmax(0,1fr)_3.5rem] items-center gap-2 text-center">
          <SurahDisplayMenuButton />
          <button
            type="button"
            onClick={scrollToHeader}
            className="pointer-events-auto block w-full truncate text-base font-semibold text-[var(--qurai-text)]"
          >
            {surahNumber} : {title}
          </button>
          <SurahHeaderThemeToggle />
        </div>
      </div>
    </div>
  );
}
