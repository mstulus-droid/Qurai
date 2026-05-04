"use client";

import { useState } from "react";
import { parseNotes } from "@/lib/parse-notes";
import { MarkdownText } from "@/components/markdown-text";

type VerseAnalysisDisclosuresProps = {
  critique: string;
  logicalFallacies: string;
  moralConcerns: string;
  scientificErrors: string;
  contradictions: string;
};

type PanelKey = "critique" | "fallacies" | "morals" | "science" | "contradictions" | null;

export function VerseAnalysisDisclosures({
  critique,
  logicalFallacies,
  moralConcerns,
  scientificErrors,
  contradictions,
}: VerseAnalysisDisclosuresProps) {
  const [openPanel, setOpenPanel] = useState<PanelKey>(null);

  const items = [
    critique
      ? {
          key: "critique" as const,
          label: "Critique",
          content: critique,
          icon: <span className="text-lg leading-none">✍️</span>,
          buttonClass:
            "border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] text-[var(--qurai-muted)] hover:border-[var(--qurai-border-strong)] hover:text-[var(--qurai-green)]",
          panelClass: "bg-[color-mix(in_srgb,var(--qurai-surface-strong)_82%,transparent)] text-[var(--qurai-muted)] ring-[var(--qurai-border)]",
        }
      : null,
    logicalFallacies
      ? {
          key: "fallacies" as const,
          label: "Logical Fallacy",
          content: logicalFallacies,
          icon: <span className="text-lg leading-none">🤔</span>,
          buttonClass:
            "border-[var(--qurai-gold)] bg-[color-mix(in_srgb,var(--qurai-gold)_10%,transparent)] text-[var(--qurai-gold)] hover:bg-[color-mix(in_srgb,var(--qurai-gold)_16%,transparent)]",
          panelClass: "bg-[color-mix(in_srgb,var(--qurai-gold)_8%,var(--qurai-surface))] text-[var(--qurai-muted)] ring-[var(--qurai-border)]",
        }
      : null,
    moralConcerns
      ? {
          key: "morals" as const,
          label: "Moral Concern",
          content: moralConcerns,
          icon: <span className="text-lg leading-none">😈</span>,
          buttonClass:
            "border-rose-400/35 bg-rose-950/10 text-rose-300 hover:bg-rose-950/20",
          panelClass: "bg-rose-950/10 text-[var(--qurai-muted)] ring-rose-400/25",
        }
      : null,
    scientificErrors
      ? {
          key: "science" as const,
          label: "Scientific Error",
          content: scientificErrors,
          icon: <span className="text-lg leading-none">🔬</span>,
          buttonClass:
            "border-cyan-400/35 bg-cyan-950/10 text-cyan-300 hover:bg-cyan-950/20",
          panelClass: "bg-cyan-950/10 text-[var(--qurai-muted)] ring-cyan-400/25",
        }
      : null,
    contradictions
      ? {
          key: "contradictions" as const,
          label: "Contradiction",
          content: contradictions,
          icon: <span className="text-lg leading-none">⚡</span>,
          buttonClass:
            "border-violet-400/35 bg-violet-950/10 text-violet-300 hover:bg-violet-950/20",
          panelClass: "bg-violet-950/10 text-[var(--qurai-muted)] ring-violet-400/25",
        }
      : null,
  ].filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="mt-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((item) => {
          if (!item) {
            return null;
          }

          const isOpen = openPanel === item.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setOpenPanel((current) => (current === item.key ? null : item.key))}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${item.buttonClass} ${
                isOpen ? "ring-2 ring-current/20" : ""
              }`}
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        if (!item || openPanel !== item.key) {
          return null;
        }

        const notes = parseNotes(item.content);

        return (
          <div
            key={item.key}
            className={`mt-4 rounded-[1.25rem] p-4 text-sm leading-7 ring-1 ${item.panelClass}`}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]">
              {item.label}
              {notes.length > 1 ? (
                <span className="ml-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-current/15 px-1.5 text-[10px] font-bold tabular-nums">
                  {notes.length}
                </span>
              ) : null}
            </p>
            {notes.length === 1 ? (
              <div className="whitespace-pre-wrap text-[var(--qurai-muted)]"><MarkdownText text={notes[0]} /></div>
            ) : (
              <ol className="list-decimal space-y-2 pl-4 text-[var(--qurai-muted)]">
                {notes.slice(0, 5).map((note, idx) => (
                  <li key={idx} className="whitespace-pre-wrap"><MarkdownText text={note} /></li>
                ))}
              </ol>
            )}
          </div>
        );
      })}
    </div>
  );
}
