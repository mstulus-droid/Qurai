"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { toggleBookmark, type BookmarkActionState } from "./actions";

type BookmarkButtonProps = {
  verseId: number;
  isBookmarked: boolean;
  iconOnly?: boolean;
};

const initialState: BookmarkActionState = {
  status: "idle" as const,
  message: "",
};

function SubmitButton({
  isBookmarked,
  iconOnly,
}: {
  isBookmarked: boolean;
  iconOnly: boolean;
}) {
  const { pending } = useFormStatus();

  if (iconOnly) {
    return (
      <button
        type="submit"
        disabled={pending}
        aria-label={isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
        title={isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
          isBookmarked
            ? "border border-[var(--qurai-border-strong)] bg-[color-mix(in_srgb,var(--qurai-green)_28%,transparent)] text-[var(--qurai-text)] hover:bg-[color-mix(in_srgb,var(--qurai-green)_36%,transparent)]"
            : "qurai-icon-button"
        } disabled:cursor-not-allowed disabled:opacity-70`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
          <path
            d="M7 5.5h10a1 1 0 0 1 1 1V20l-6-3.5L6 20V6.5a1 1 0 0 1 1-1z"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isBookmarked ? "currentColor" : "none"}
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      type="submit"
      disabled={pending}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        isBookmarked
          ? "border border-[var(--qurai-gold)] bg-[color-mix(in_srgb,var(--qurai-gold)_12%,transparent)] text-[var(--qurai-gold)] hover:bg-[color-mix(in_srgb,var(--qurai-gold)_18%,transparent)]"
          : "qurai-control text-[var(--qurai-text)]"
      } disabled:cursor-not-allowed disabled:opacity-70`}
    >
      {pending ? "Memproses..." : isBookmarked ? "Hapus bookmark" : "Simpan bookmark"}
    </button>
  );
}

export function BookmarkButton({
  verseId,
  isBookmarked,
  iconOnly = false,
}: BookmarkButtonProps) {
  const [state, action] = useActionState(toggleBookmark, initialState);

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="verseId" value={verseId} />
      <SubmitButton isBookmarked={isBookmarked} iconOnly={iconOnly} />
      {!iconOnly && state.status !== "idle" ? (
        <p className="text-sm text-[var(--qurai-muted)]">{state.message}</p>
      ) : null}
    </form>
  );
}
