"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { GIT_INFO } from "@/lib/git-info";
import type { SurahStats } from "@/lib/quran-data";

interface CommitInfoPopupProps {
  children: React.ReactNode;
  surahStats?: SurahStats[];
}

// Get color based on value position in range (0-100%) for heatmap effect
function getHeatmapColor(value: number, min: number, max: number): string {
  if (max === min) {
    return value > 0 ? "bg-orange-600 text-white" : "bg-[var(--qurai-surface-strong)] text-[var(--qurai-muted)] ring-1 ring-[var(--qurai-border)]";
  }
  
  // Normalize to 0-1 range
  const ratio = (value - min) / (max - min);
  
  if (value === 0) {
    return "bg-[var(--qurai-surface-strong)] text-[var(--qurai-muted)] ring-1 ring-[var(--qurai-border)]";
  }
  
  // Gradient: green (low) -> yellow -> orange -> red (high)
  if (ratio < 0.25) {
    return "bg-emerald-600 text-white";
  } else if (ratio < 0.5) {
    return "bg-lime-600 text-white";
  } else if (ratio < 0.75) {
    return "bg-amber-500 text-slate-950";
  } else if (ratio < 0.9) {
    return "bg-orange-600 text-white";
  } else {
    return "bg-red-600 text-white";
  }
}

// Calculate min and max for a specific column from stats
function getColumnStats(stats: SurahStats[], key: keyof SurahStats) {
  const values = stats.map((s) => s[key] as number);
  const nonZeroValues = values.filter((v) => v > 0);
  
  if (nonZeroValues.length === 0) {
    return { min: 0, max: 100 };
  }
  
  return {
    min: Math.min(...nonZeroValues),
    max: Math.max(...values),
  };
}

export function CommitInfoPopup({ children, surahStats }: CommitInfoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCommitDetail, setShowCommitDetail] = useState(false);

  // Calculate column stats for heatmap coloring
  const lfStats = surahStats ? getColumnStats(surahStats, "logicalFallaciesPercent") : { min: 0, max: 100 };
  const seStats = surahStats ? getColumnStats(surahStats, "scientificErrorsPercent") : { min: 0, max: 100 };
  const mcStats = surahStats ? getColumnStats(surahStats, "moralConcernsPercent") : { min: 0, max: 100 };
  const kontraStats = surahStats ? getColumnStats(surahStats, "contradictionsPercent") : { min: 0, max: 100 };

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // Extract first line of commit message (the title)
  const commitTitle = GIT_INFO.message.split('\n')[0];
  const popupContent = isOpen ? (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 z-[1000] bg-black/50 backdrop-blur-[2px] transition-opacity"
        aria-hidden="true"
      />

      {/* Popup */}
      <div className="fixed inset-x-2 bottom-3 top-16 z-[1001] mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] text-[var(--qurai-text)] shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:inset-x-6 sm:bottom-6 sm:top-20">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-[var(--qurai-border)] px-4 py-3 sm:px-5">
          <span className="w-8"></span>
          <span className="flex-1 text-center text-sm font-semibold text-[var(--qurai-text)]">
            Statistik Analisis Surat
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-[var(--qurai-muted)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_10%,transparent)] hover:text-[var(--qurai-green)]"
            aria-label="Tutup"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {/* Stats Table */}
          {surahStats && surahStats.length > 0 && (
            <div className="flex min-h-0 flex-1 flex-col border-b border-[var(--qurai-border)]">
              <div className="min-h-0 flex-1 overflow-auto">
                <table className="w-full table-fixed border-collapse text-[10px] sm:table-auto sm:min-w-[640px] sm:text-xs">
                  <colgroup>
                    <col className="w-7 sm:w-auto" />
                    <col className="w-[5.6rem] sm:w-auto" />
                    <col className="w-10 sm:w-auto" />
                    <col className="w-10 sm:w-auto" />
                    <col className="w-10 sm:w-auto" />
                    <col className="w-10 sm:w-auto" />
                  </colgroup>
                  <thead className="sticky top-0 z-20">
                    <tr className="bg-[var(--qurai-green-deep)]">
                      <th className="border-b border-[var(--qurai-border)] px-1 py-2 text-left font-semibold text-white sm:px-3">
                        No
                      </th>
                      <th className="border-b border-[var(--qurai-border)] px-1 py-2 text-left font-semibold text-white sm:px-3">
                        Surat
                      </th>
                      <th className="border-b border-[var(--qurai-border)] px-0.5 py-2 text-center font-semibold text-white sm:px-2">
                        <span title="Logical Fallacies">
                          LF
                        </span>
                      </th>
                      <th className="border-b border-[var(--qurai-border)] px-0.5 py-2 text-center font-semibold text-white sm:px-2">
                        <span title="Scientific Errors">
                          SE
                        </span>
                      </th>
                      <th className="border-b border-[var(--qurai-border)] px-0.5 py-2 text-center font-semibold text-white sm:px-2">
                        <span title="Moral Concerns">
                          MC
                        </span>
                      </th>
                      <th className="border-b border-[var(--qurai-border)] px-0.5 py-2 text-center font-semibold text-white sm:px-2">
                        <span title="Contradiction">
                          CD
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--qurai-border)]">
                    {surahStats.map((stat) => (
                      <tr key={stat.id} className="hover:bg-[color-mix(in_srgb,var(--qurai-green)_9%,transparent)]">
                        <td className="px-1 py-1 text-[var(--qurai-muted)] sm:px-3 sm:py-1.5">
                          {stat.id}
                        </td>
                        <td className="truncate px-1 py-1 font-semibold text-[var(--qurai-text)] sm:px-3 sm:py-1.5">
                          <span className="sm:hidden">{stat.nameLatin.slice(0, 8)}</span>
                          <span className="hidden sm:inline">{stat.nameLatin}</span>
                        </td>
                        <td className="px-0.5 py-1 text-center sm:px-2 sm:py-1.5">
                          <span
                            className={`inline-block min-w-8 rounded px-1 py-0.5 font-bold tabular-nums sm:min-w-10 sm:px-1.5 ${getHeatmapColor(
                              stat.logicalFallaciesPercent,
                              lfStats.min,
                              lfStats.max
                            )}`}
                          >
                            {stat.logicalFallaciesPercent}%
                          </span>
                        </td>
                        <td className="px-0.5 py-1 text-center sm:px-2 sm:py-1.5">
                          <span
                            className={`inline-block min-w-8 rounded px-1 py-0.5 font-bold tabular-nums sm:min-w-10 sm:px-1.5 ${getHeatmapColor(
                              stat.scientificErrorsPercent,
                              seStats.min,
                              seStats.max
                            )}`}
                          >
                            {stat.scientificErrorsPercent}%
                          </span>
                        </td>
                        <td className="px-0.5 py-1 text-center sm:px-2 sm:py-1.5">
                          <span
                            className={`inline-block min-w-8 rounded px-1 py-0.5 font-bold tabular-nums sm:min-w-10 sm:px-1.5 ${getHeatmapColor(
                              stat.moralConcernsPercent,
                              mcStats.min,
                              mcStats.max
                            )}`}
                          >
                            {stat.moralConcernsPercent}%
                          </span>
                        </td>
                        <td className="px-0.5 py-1 text-center sm:px-2 sm:py-1.5">
                          <span
                            className={`inline-block min-w-8 rounded px-1 py-0.5 font-bold tabular-nums sm:min-w-10 sm:px-1.5 ${getHeatmapColor(
                              stat.contradictionsPercent,
                              kontraStats.min,
                              kontraStats.max
                            )}`}
                          >
                            {stat.contradictionsPercent}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="shrink-0 border-t border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_72%,transparent)] px-3 py-2 text-[10px] text-[var(--qurai-muted)] sm:px-4">
                {/* Scale */}
                <div className="flex items-center justify-center gap-2">
                  <span className="font-medium">Rendah</span>
                  <span className="inline-flex gap-0.5">
                    <span className="inline-block h-4 w-4 rounded-sm bg-[color-mix(in_srgb,var(--qurai-green)_22%,transparent)]"></span>
                    <span className="inline-block h-4 w-4 rounded-sm bg-lime-100"></span>
                    <span className="inline-block h-4 w-4 rounded-sm bg-[color-mix(in_srgb,var(--qurai-gold)_24%,transparent)]"></span>
                    <span className="inline-block h-4 w-4 rounded-sm bg-orange-100"></span>
                    <span className="inline-block h-4 w-4 rounded-sm bg-red-100"></span>
                  </span>
                  <span className="font-medium">Tinggi</span>
                </div>
                {/* Abbreviations */}
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                  <span><span className="font-medium">LF</span> = Logical Fallacies</span>
                  <span><span className="font-medium">SE</span> = Scientific Errors</span>
                  <span><span className="font-medium">MC</span> = Moral Concerns</span>
                  <span><span className="font-medium">CD</span> = Contradiction</span>
                </div>
              </div>
            </div>
          )}

          {/* Version Info - At Bottom */}
          <div className="shrink-0 bg-[color-mix(in_srgb,var(--qurai-surface-strong)_72%,transparent)] px-4 py-2">
            <button
              onClick={() => setShowCommitDetail(true)}
              className="text-xs text-[var(--qurai-muted)] transition hover:text-[var(--qurai-green)]"
              title="Klik untuk melihat detail commit"
            >
              Versi: <span className="font-mono">{GIT_INFO.hash}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Commit Detail Popup */}
      {showCommitDetail && (
        <>
          <div
            onClick={() => setShowCommitDetail(false)}
            className="fixed inset-0 z-[1002] bg-black/35 backdrop-blur-[1px]"
            aria-hidden="true"
          />
          <div className="qurai-card fixed left-1/2 top-1/2 z-[1003] w-[min(90vw,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--qurai-muted)]">Detail Commit</span>
              <button
                type="button"
                onClick={() => setShowCommitDetail(false)}
                className="rounded-full p-1 text-[var(--qurai-muted)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_10%,transparent)] hover:text-[var(--qurai-green)]"
                aria-label="Tutup"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="mt-3">
              <p className="text-sm font-medium text-[var(--qurai-text)]">
                {commitTitle}
              </p>
              <p className="mt-1 text-xs text-[var(--qurai-muted)]">
                {formatDate(GIT_INFO.date)}
              </p>
              <p className="mt-2 text-xs text-[var(--qurai-muted)]">
                Branch: <span className="font-mono">{GIT_INFO.branch}</span>
              </p>
              <p className="text-xs text-[var(--qurai-muted)]">
                Hash: <span className="font-mono">{GIT_INFO.hash}</span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full cursor-pointer"
        aria-label="Lihat informasi versi"
        title="Klik untuk melihat versi"
      >
        {children}
      </button>

      {popupContent ? createPortal(popupContent, document.body) : null}
    </>
  );
}
