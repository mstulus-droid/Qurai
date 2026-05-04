"use client";

import { useState } from "react";
import { GIT_INFO } from "@/lib/git-info";
import type { SurahStats } from "@/lib/quran-data";

interface CommitInfoPopupProps {
  children: React.ReactNode;
  surahStats?: SurahStats[];
}

// Get color based on value position in range (0-100%) for heatmap effect
function getHeatmapColor(value: number, min: number, max: number): string {
  if (max === min) {
    return value > 0 ? "bg-orange-950/20 text-orange-300" : "bg-[color-mix(in_srgb,var(--qurai-text)_6%,transparent)] text-[var(--qurai-quiet)]";
  }
  
  // Normalize to 0-1 range
  const ratio = (value - min) / (max - min);
  
  if (value === 0) {
    return "bg-[color-mix(in_srgb,var(--qurai-text)_6%,transparent)] text-[var(--qurai-quiet)]";
  }
  
  // Gradient: green (low) -> yellow -> orange -> red (high)
  if (ratio < 0.25) {
    return "bg-[color-mix(in_srgb,var(--qurai-green)_14%,transparent)] text-[var(--qurai-green)]";
  } else if (ratio < 0.5) {
    return "bg-lime-950/20 text-lime-300";
  } else if (ratio < 0.75) {
    return "bg-[color-mix(in_srgb,var(--qurai-gold)_16%,transparent)] text-[var(--qurai-gold)]";
  } else if (ratio < 0.9) {
    return "bg-orange-950/20 text-orange-300";
  } else {
    return "bg-red-950/20 text-red-300";
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

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
        aria-label="Lihat informasi versi"
        title="Klik untuk melihat versi"
      >
        {children}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-[2px] transition-opacity"
            aria-hidden="true"
          />

          {/* Popup */}
          <div className="qurai-card fixed left-1/2 top-1/2 z-[101] flex max-h-[85vh] w-[min(95vw,56rem)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[1.25rem]">
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[var(--qurai-border)] px-5 py-3">
              <span className="w-8"></span>
              <span className="flex-1 text-center text-sm font-semibold text-[var(--qurai-green)]">
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
            <div className="flex-1 overflow-auto">
              {/* Stats Table */}
              {surahStats && surahStats.length > 0 && (
                <div className="border-b border-[var(--qurai-border)]">
                  <div className="overflow-auto max-h-[60vh]">
                    <table className="w-full text-xs border-collapse">
                      <thead className="sticky top-0 z-20">
                        <tr className="bg-[color-mix(in_srgb,var(--qurai-green)_10%,var(--qurai-surface-strong))]">
                          <th className="border-b border-[var(--qurai-border)] px-3 py-2 text-left font-semibold text-[var(--qurai-green)]">
                            No
                          </th>
                          <th className="border-b border-[var(--qurai-border)] px-3 py-2 text-left font-semibold text-[var(--qurai-green)]">
                            Surat
                          </th>
                          <th className="border-b border-[var(--qurai-border)] px-2 py-2 text-center font-semibold text-[var(--qurai-green)]">
                            <span title="Logical Fallacies">
                              LF
                            </span>
                          </th>
                          <th className="border-b border-[var(--qurai-border)] px-2 py-2 text-center font-semibold text-[var(--qurai-green)]">
                            <span title="Scientific Errors">
                              SE
                            </span>
                          </th>
                          <th className="border-b border-[var(--qurai-border)] px-2 py-2 text-center font-semibold text-[var(--qurai-green)]">
                            <span title="Moral Concerns">
                              MC
                            </span>
                          </th>
                          <th className="border-b border-[var(--qurai-border)] px-2 py-2 text-center font-semibold text-[var(--qurai-green)]">
                            <span title="Contradiction">
                              CD
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--qurai-border)]">
                        {surahStats.map((stat) => (
                          <tr key={stat.id} className="hover:bg-[color-mix(in_srgb,var(--qurai-green)_7%,transparent)]">
                            <td className="px-3 py-1.5 text-[var(--qurai-muted)]">
                              {stat.id}
                            </td>
                            <td className="px-3 py-1.5 font-medium text-[var(--qurai-text)]">
                              {stat.nameLatin}
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 font-medium ${getHeatmapColor(
                                  stat.logicalFallaciesPercent,
                                  lfStats.min,
                                  lfStats.max
                                )}`}
                              >
                                {stat.logicalFallaciesPercent}%
                              </span>
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 font-medium ${getHeatmapColor(
                                  stat.scientificErrorsPercent,
                                  seStats.min,
                                  seStats.max
                                )}`}
                              >
                                {stat.scientificErrorsPercent}%
                              </span>
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 font-medium ${getHeatmapColor(
                                  stat.moralConcernsPercent,
                                  mcStats.min,
                                  mcStats.max
                                )}`}
                              >
                                {stat.moralConcernsPercent}%
                              </span>
                            </td>
                            <td className="px-2 py-1.5 text-center">
                              <span
                                className={`inline-block rounded px-1.5 py-0.5 font-medium ${getHeatmapColor(
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
                  <div className="border-t border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-surface-strong)_72%,transparent)] px-4 py-3 text-[11px] text-[var(--qurai-muted)]">
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
              <div className="bg-[color-mix(in_srgb,var(--qurai-surface-strong)_72%,transparent)] px-5 py-3">
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
                className="fixed inset-0 z-[102] bg-black/35 backdrop-blur-[1px]"
                aria-hidden="true"
              />
              <div className="qurai-card fixed left-1/2 top-1/2 z-[103] w-[min(90vw,20rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl p-4">
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
      )}
    </>
  );
}
