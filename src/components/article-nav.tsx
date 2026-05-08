"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemedWordmark, ThemeToggle } from "./theme-toggle";

type Props = {
  backHref?: string;
  backLabel?: string;
};

export function ArticleNav({ backHref, backLabel }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setIsScrolled(window.scrollY > 32);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <nav
      aria-label="Navigasi utama"
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-8 border-b px-5 py-4 transition duration-300 sm:px-10 lg:px-14 ${
        isScrolled
          ? "border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg)_84%,transparent)] backdrop-blur-[18px]"
          : "border-transparent"
      }`}
    >
      <Link
        href="/about"
        aria-label="Qurai"
        className="relative block h-[36px] w-[clamp(104px,12vw,150px)]"
      >
        <ThemedWordmark sizes="150px" className="object-contain object-left" />
      </Link>
      <div className="flex items-center gap-4 sm:gap-[clamp(1.2rem,3vw,2.5rem)]">
        <div className="hidden items-center gap-[clamp(1.2rem,3vw,2.5rem)] font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] sm:flex">
          <Link href="/" className="transition hover:text-[var(--qurai-green)]">
            Bedah Quran
          </Link>
          {backHref ? (
            <Link
              href={backHref}
              className="transition hover:text-[var(--qurai-gold)]"
            >
              {backLabel ?? "Artikel"}
            </Link>
          ) : (
            <span className="text-[var(--qurai-gold)]">Artikel</span>
          )}
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
