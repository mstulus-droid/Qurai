"use client";

import { useNavigation } from "./navigation-provider";
import { ThemedMark } from "@/components/theme-toggle";

export function NavigationLoading() {
  const { isNavigating } = useNavigation();

  if (!isNavigating) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/35 backdrop-blur-[2px]">
      <div className="relative flex flex-col items-center">
        <div className="absolute -inset-10 rounded-full bg-[color-mix(in_srgb,var(--qurai-green)_20%,transparent)] blur-3xl" />
        <div className="qurai-loader-mark relative h-20 w-20">
          <ThemedMark
            sizes="80px"
            className="object-contain opacity-75 drop-shadow-[0_12px_32px_rgba(99,207,77,0.24)]"
          />
        </div>
      </div>
    </div>
  );
}
