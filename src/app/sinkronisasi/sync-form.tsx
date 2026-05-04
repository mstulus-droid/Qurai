"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { runExcelSync, type SyncActionState } from "./actions";

const initialState: SyncActionState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full border border-[var(--qurai-border-strong)] bg-[color-mix(in_srgb,var(--qurai-green)_24%,transparent)] px-5 py-3 text-sm font-semibold text-[var(--qurai-text)] transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_34%,transparent)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Menyinkronkan..." : "Sinkronkan dari Excel"}
    </button>
  );
}

export function SyncForm() {
  const [state, formAction] = useActionState(runExcelSync, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <SubmitButton />
      {state.status !== "idle" ? (
        <p
          className={`rounded-[1rem] px-4 py-3 text-sm leading-7 ${
            state.status === "success"
              ? "border border-[var(--qurai-border-strong)] bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] text-[var(--qurai-text)]"
              : "border border-rose-400/35 bg-rose-950/10 text-rose-200"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
