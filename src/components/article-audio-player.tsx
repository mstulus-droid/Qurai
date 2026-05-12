"use client";

import { useRef, useState } from "react";
import type { ArticleAudioTrack } from "@/lib/article-audio";

type ArticleAudioPlayerProps = {
  title: string;
  tracks: ArticleAudioTrack[];
};

function formatTrackLabel(index: number, total: number) {
  return total > 1 ? `Bagian ${index + 1} dari ${total}` : "Audio artikel";
}

export function ArticleAudioPlayer({ title, tracks }: ArticleAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const currentTrack = tracks[trackIndex];

  if (!currentTrack) {
    return null;
  }

  function playTrack(nextIndex: number) {
    setTrackIndex(nextIndex);
    window.setTimeout(() => {
      void audioRef.current?.play();
    }, 0);
  }

  return (
    <section className="mb-14 border-y border-[var(--qurai-border)] py-5">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Dengarkan artikel
          </p>
          <p className="mt-1 text-xs leading-6 text-[var(--qurai-muted)]">
            Narasi Bahasa Indonesia dibuat dengan AI.
          </p>
        </div>
        <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-gold)]">
          {formatTrackLabel(trackIndex, tracks.length)}
        </p>
      </div>

      <audio
        ref={audioRef}
        controls
        preload="metadata"
        src={currentTrack.src}
        title={title}
        className="w-full"
        onEnded={() => {
          if (trackIndex + 1 < tracks.length) {
            playTrack(trackIndex + 1);
          }
        }}
      >
        <track kind="captions" />
      </audio>

      {tracks.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tracks.map((track, index) => (
            <button
              key={track.src}
              type="button"
              onClick={() => playTrack(index)}
              className={`border px-3 py-1.5 font-mono text-[0.58rem] uppercase transition ${
                index === trackIndex
                  ? "border-[var(--qurai-gold)] bg-[color-mix(in_srgb,var(--qurai-gold)_12%,transparent)] text-[var(--qurai-gold)]"
                  : "border-[var(--qurai-border)] text-[var(--qurai-quiet)] hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
