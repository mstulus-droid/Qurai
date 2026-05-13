"use client";

import Link from "next/link";
import {
  type CSSProperties,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export type VersePreviewItem = {
  ayahNumber: number;
  translation: string;
};

type Props = {
  label: string;
  surah: number;
  startAyat: number;
  endAyat?: number;
  verses: VersePreviewItem[];
};

function clampTranslation(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function VersePreviewLink({
  label,
  surah,
  startAyat,
  endAyat,
  verses,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState<CSSProperties>({});
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popoverId = useId();
  const finalAyat = endAyat ?? startAyat;
  const count = Math.max(1, finalAyat - startAyat + 1);
  const isRange = count > 1;

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setIsOpen(false), 240);
  }

  function openPreview() {
    clearCloseTimer();
    setIsOpen(true);
  }

  function positionPopover() {
    const button = buttonRef.current;
    const popover = popoverRef.current;

    if (!button || !popover) return;

    const gap = 10;
    const margin = 16;
    const trigger = button.getBoundingClientRect();
    const width = Math.min(352, window.innerWidth - margin * 2);
    const measuredHeight = popover.getBoundingClientRect().height;
    const height = measuredHeight || 240;
    const spaces = {
      top: trigger.top - margin,
      bottom: window.innerHeight - trigger.bottom - margin,
      left: trigger.left - margin,
      right: window.innerWidth - trigger.right - margin,
    };
    const placement =
      spaces.top >= height + gap
        ? "top"
        : spaces.bottom >= height + gap
          ? "bottom"
          : spaces.right >= width + gap
            ? "right"
            : spaces.left >= width + gap
              ? "left"
              : Object.entries(spaces).sort((a, b) => b[1] - a[1])[0][0];

    let top = trigger.bottom + gap;
    let left = trigger.left + trigger.width / 2 - width / 2;

    if (placement === "top") {
      top = trigger.top - height - gap;
    } else if (placement === "right") {
      top = trigger.top + trigger.height / 2 - height / 2;
      left = trigger.right + gap;
    } else if (placement === "left") {
      top = trigger.top + trigger.height / 2 - height / 2;
      left = trigger.left - width - gap;
    }

    top = Math.min(Math.max(margin, top), window.innerHeight - height - margin);
    left = Math.min(Math.max(margin, left), window.innerWidth - width - margin);

    setPopoverStyle({
      position: "fixed",
      top,
      left,
      width,
    });
  }

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        !buttonRef.current?.contains(target) &&
        !popoverRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    function handleViewportChange() {
      positionPopover();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("scroll", handleViewportChange, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("scroll", handleViewportChange, true);
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    if (isOpen) {
      positionPopover();
    }
  }, [isOpen, label, verses.length]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <span
      className="relative inline-block"
      onPointerEnter={openPreview}
      onPointerLeave={scheduleClose}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-describedby={isOpen ? popoverId : undefined}
        className="border-b border-[var(--qurai-gold)] text-[var(--qurai-gold)] opacity-80 transition hover:opacity-100"
        onClick={() => {
          clearCloseTimer();
          setIsOpen((current) => !current);
        }}
      >
        {label}
      </button>

      {isOpen ? (
        <span
          ref={popoverRef}
          id={popoverId}
          role="dialog"
          style={popoverStyle}
          className="z-[80] block max-h-[min(28rem,calc(100vh_-_2rem))] overflow-auto rounded-[1rem] border border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg-soft)_96%,transparent)] p-4 text-left font-sans shadow-[0_24px_70px_-34px_rgba(0,0,0,0.78)] backdrop-blur"
          onPointerEnter={openPreview}
          onPointerLeave={scheduleClose}
        >
          <span className="block font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)]">
            {label}
          </span>
          <span className="mt-3 block space-y-3">
            {verses.length > 0 ? (
              verses.map((verse) => (
                <span key={verse.ayahNumber} className="block">
                  <span className="block font-mono text-[0.62rem] text-[var(--qurai-green)]">
                    {surah}:{verse.ayahNumber}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-[var(--qurai-muted)]">
                    {clampTranslation(verse.translation)}
                  </span>
                </span>
              ))
            ) : (
              <span className="block text-sm leading-6 text-[var(--qurai-muted)]">
                Arti ayat belum tersedia di preview.
              </span>
            )}
          </span>
          <Link
            href={`/surat/${surah}#ayat-${startAyat}`}
            className="mt-4 inline-flex border border-[color-mix(in_srgb,var(--qurai-gold)_32%,transparent)] bg-[color-mix(in_srgb,var(--qurai-gold)_8%,transparent)] px-3 py-2 font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_14%,transparent)]"
          >
            {isRange ? "Buka rangkaian" : "Buka ayat"}
          </Link>
        </span>
      ) : null}
    </span>
  );
}
