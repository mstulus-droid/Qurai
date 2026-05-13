"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiteMobileMenu } from "./site-mobile-menu";
import { ThemedWordmark, ThemeToggle } from "./theme-toggle";

type Props = {
  backHref?: string;
  backLabel?: string;
  currentLabel?: string;
};

export function ArticleNav({ backHref, backLabel, currentLabel }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isBedahSurat = currentLabel === "Bedah Surat" || backHref === "/bedah-surat";
  const isArtikel =
    currentLabel === "Artikel" ||
    backHref === "/artikel" ||
    backLabel === "Artikel" ||
    (!backHref && !currentLabel);
  const activeItem = isBedahSurat ? "bedah-surat" : isArtikel ? "artikel" : null;

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
        <div className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-3 sm:flex sm:justify-between sm:gap-4">
          <div className="sm:hidden">
            <SiteMobileMenu active={activeItem} />
          </div>
          <Link
            href="/about"
            aria-label="Qurai"
            className="relative mx-auto block h-[36px] w-[clamp(104px,34vw,150px)] sm:mx-0 sm:w-[clamp(104px,12vw,150px)]"
          >
            <ThemedWordmark sizes="150px" className="object-contain object-center sm:object-left" />
          </Link>
          <div className="flex items-center justify-end gap-4 sm:gap-[clamp(1.2rem,3vw,2.5rem)]">
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
          <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
