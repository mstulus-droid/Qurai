"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ActiveItem = "quran" | "bedah-surat" | "artikel" | null;

type Props = {
  active: ActiveItem;
};

const links = [
  { key: "quran", href: "/", label: "Bedah Quran" },
  { key: "bedah-surat", href: "/bedah-surat", label: "Bedah Surat" },
  { key: "artikel", href: "/artikel", label: "Artikel" },
  { key: "about", href: "/about", label: "Tentang" },
] as const;

export function SiteMobileMenu({ active }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleScroll() {
      setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="home-menu relative">
      <button
        type="button"
        className="home-menu-trigger inline-grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_82%,transparent)] text-[var(--qurai-text)] shadow-[0_16px_38px_-28px_rgba(0,0,0,0.55)] transition hover:border-[var(--qurai-border-strong)] hover:text-[var(--qurai-green)]"
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M5 7h14M5 12h14M5 17h14"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen ? (
        <div className="absolute left-0 top-12 z-30 min-w-40 overflow-hidden rounded-xl border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface)_94%,transparent)] p-1 shadow-[0_24px_70px_-34px_rgba(0,0,0,0.72)] backdrop-blur">
          {links.map((item) => {
            const isActive = item.key === active;

            if (isActive) {
              return (
                <span
                  key={item.key}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--qurai-green)]"
                >
                  {item.label}
                </span>
              );
            }

            return (
              <Link
                key={item.key}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] hover:text-[var(--qurai-green)]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
