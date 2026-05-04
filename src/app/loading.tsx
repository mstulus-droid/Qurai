import { ThemedMark } from "@/components/theme-toggle";

export default function Loading() {
  return (
    <div className="qurai-page flex min-h-screen items-center justify-center px-6 py-16">
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute -inset-10 rounded-full bg-[color-mix(in_srgb,var(--qurai-green)_16%,transparent)] blur-3xl" />
        <div className="qurai-loader-mark relative h-24 w-24">
          <ThemedMark
            sizes="96px"
            className="object-contain opacity-75 drop-shadow-[0_12px_32px_rgba(99,207,77,0.24)]"
          />
        </div>
      </div>
    </div>
  );
}
