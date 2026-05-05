"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

type DisplayPrefs = {
  topicThemes: boolean;
  translation: boolean;
  depagNotes: boolean;
  analysisButtons: boolean;
  furtherReading: boolean;
};

const STORAGE_KEY = "qurai-surah-display-prefs";

const defaultPrefs: DisplayPrefs = {
  topicThemes: true,
  translation: true,
  depagNotes: true,
  analysisButtons: true,
  furtherReading: true,
};

const options: Array<{
  key: keyof DisplayPrefs;
  label: string;
}> = [
  { key: "topicThemes", label: "Tema" },
  { key: "translation", label: "Arti ayat" },
  { key: "depagNotes", label: "Catatan Depag" },
  { key: "analysisButtons", label: "Tombol analisa" },
  { key: "furtherReading", label: "Bacaan lanjut" },
];

const SurahDisplayPrefsContext = createContext<{
  prefs: DisplayPrefs;
  activeCount: number;
  togglePref: (key: keyof DisplayPrefs) => void;
} | null>(null);

function readPrefs() {
  if (typeof window === "undefined") {
    return defaultPrefs;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return defaultPrefs;
    }

    const parsed = JSON.parse(raw) as Partial<DisplayPrefs>;
    return {
      topicThemes: parsed.topicThemes ?? defaultPrefs.topicThemes,
      translation: parsed.translation ?? defaultPrefs.translation,
      depagNotes: parsed.depagNotes ?? defaultPrefs.depagNotes,
      analysisButtons: parsed.analysisButtons ?? defaultPrefs.analysisButtons,
      furtherReading: parsed.furtherReading ?? defaultPrefs.furtherReading,
    };
  } catch {
    return defaultPrefs;
  }
}

export function SurahDisplayShell({
  children,
}: {
  children: ReactNode;
}) {
  const [prefs, setPrefs] = useState<DisplayPrefs>(defaultPrefs);
  const hasLoadedPrefs = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      hasLoadedPrefs.current = true;
      setPrefs(readPrefs());
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasLoadedPrefs.current) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  const activeCount = useMemo(
    () => options.filter((option) => prefs[option.key]).length,
    [prefs],
  );
  const isReadingOnly = useMemo(
    () => options.every((option) => !prefs[option.key]),
    [prefs],
  );

  function togglePref(key: keyof DisplayPrefs) {
    setPrefs((current) => ({
      ...current,
      [key]: !current[key],
    }));
  }

  return (
    <SurahDisplayPrefsContext.Provider value={{ prefs, activeCount, togglePref }}>
      <div
        className="mx-auto flex max-w-6xl flex-col gap-5"
        data-show-topic-themes={prefs.topicThemes}
        data-show-translation={prefs.translation}
        data-show-depag-notes={prefs.depagNotes}
        data-show-analysis-buttons={prefs.analysisButtons}
        data-show-further-reading={prefs.furtherReading}
        data-reading-only={isReadingOnly}
      >
        {children}
      </div>
    </SurahDisplayPrefsContext.Provider>
  );
}

export function SurahDisplayMenuButton() {
  const context = useContext(SurahDisplayPrefsContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node | null;
      if (target && menuRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  if (!context) {
    return null;
  }

  const { prefs, activeCount, togglePref } = context;

  return (
    <div ref={menuRef} className="pointer-events-auto relative justify-self-start">
      <button
        type="button"
        className="qurai-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full"
        aria-label="Atur tampilan surat"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen ? (
        <div className="surah-display-menu">
          <div className="flex items-center justify-between gap-3 border-b border-[var(--qurai-border)] px-4 py-3">
            <p className="qurai-label text-[0.68rem]">Tampilan</p>
            <span className="font-mono text-[0.64rem] text-[var(--qurai-muted)]">
              {activeCount}/{options.length}
            </span>
          </div>
          <div className="space-y-2 p-3">
            {options.map((option) => {
              const checked = prefs[option.key];

              return (
                <button
                  key={option.key}
                  type="button"
                  className="surah-display-switch"
                  aria-pressed={checked}
                  onClick={() => togglePref(option.key)}
                >
                  <span>{option.label}</span>
                  <span className="surah-display-switch-track" aria-hidden="true">
                    <span className="surah-display-switch-thumb" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function SurahHeaderThemeToggle() {
  return (
    <div className="pointer-events-auto justify-self-end">
      <ThemeToggle />
    </div>
  );
}
