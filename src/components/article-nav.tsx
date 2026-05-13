"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemedWordmark, ThemeToggle } from "./theme-toggle";

type Props = {
  backHref?: string;
  backLabel?: string;
  currentLabel?: string;
};

function ArticleMenu({
  isBedahSurat,
  isArtikel,
}: {
  isBedahSurat: boolean;
  isArtikel: boolean;
}) {
  return (
    <details className="home-menu relative">
      <summary
        className="home-menu-trigger inline-grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_82%,transparent)] text-[var(--qurai-text)] shadow-[0_16px_38px_-28px_rgba(0,0,0,0.55)] transition hover:border-[var(--qurai-border-strong)] hover:text-[var(--qurai-green)]"
        aria-label="Buka menu"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M5 7h14M5 12h14M5 17h14"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      </summary>
      <div className="absolute right-0 top-12 z-30 min-w-40 overflow-hidden rounded-xl border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface)_94%,transparent)] p-1 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.72)] backdrop-blur">
        <Link
          href="/"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
        >
          Bedah Quran
        </Link>
        {isBedahSurat ? (
          <span className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--qurai-green)]">
            Bedah Surat
          </span>
        ) : (
          <Link
            href="/bedah-surat"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
          >
            Bedah Surat
          </Link>
        )}
        {isArtikel ? (
          <span className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--qurai-green)]">
            Artikel
          </span>
        ) : (
          <Link
            href="/artikel"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
          >
            Artikel
          </Link>
        )}
        <Link
          href="/about"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
        >
          Tentang
        </Link>
      </div>
    </details>
  );
}

export function ArticleNav({ backHref, backLabel, currentLabel = "Artikel" }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isBedahSurat = currentLabel === "Bedah Surat" || backHref === "/bedah-surat";
  const isArtikel =
    currentLabel === "Artikel" ||
    backHref === "/artikel" ||
    backLabel === "Artikel";

  useEffect(() => {
    const sync = () => setIsScrolled(window.scrollY > 32);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <nav
      aria-label="Navigasi utama"
      className={`fixed inset-x-0 top-0 z-50 border-b px-4 py-5 transition duration-300 sm:px-6 sm:py-8 lg:px-10 ${
        isScrolled
          ? "border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg)_84%,transparent)] backdrop-blur-[18px]"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <Link
          href="/about"
          aria-label="Qurai"
          className="relative block h-[36px] w-[clamp(104px,12vw,150px)]"
        >
          <ThemedWordmark sizes="150px" className="object-contain object-left" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-[clamp(1.2rem,3vw,2.5rem)]">
          <div className="hidden items-center gap-[clamp(1.2rem,3vw,2.5rem)] font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] sm:flex">
            <Link href="/" className="transition hover:text-[var(--qurai-gold)]">
              Bedah Quran
            </Link>
            {isBedahSurat ? (
              <span className="font-semibold text-[var(--qurai-green)]">Bedah Surat</span>
            ) : (
              <Link
                href="/bedah-surat"
                className="transition hover:text-[var(--qurai-gold)]"
              >
                Bedah Surat
              </Link>
            )}
            {isArtikel ? (
              <span className="font-semibold text-[var(--qurai-green)]">Artikel</span>
            ) : (
              <Link href="/artikel" className="transition hover:text-[var(--qurai-gold)]">
                Artikel
              </Link>
            )}
          </div>
          <div className="sm:hidden">
            <ArticleMenu isBedahSurat={isBedahSurat} isArtikel={isArtikel} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
