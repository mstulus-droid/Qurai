"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.localStorage.getItem("qurai-theme") === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light-mode", theme === "light");
  document.documentElement.classList.toggle("dark-mode", theme === "dark");
  document.body.classList.toggle("light-mode", theme === "light");
  document.body.classList.toggle("dark-mode", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("qurai-theme", theme);
}

export function ThemeController() {
  useEffect(() => {
    applyTheme(getStoredTheme());
  }, []);

  return null;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  const isLight = theme === "light";

  return (
    <button
      suppressHydrationWarning
      className="theme-toggle shrink-0"
      type="button"
      onClick={handleToggle}
      aria-label={isLight ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
      aria-pressed={isLight}
    >
      <span className="theme-toggle-knob" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle-icon theme-toggle-icon-sun"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" strokeLinecap="round" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle-icon theme-toggle-icon-moon"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 14.4A7.6 7.6 0 0 1 9.6 4a8 8 0 1 0 10.4 10.4Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

export function ThemedWordmark({
  priority,
  className,
  sizes,
}: {
  priority?: boolean;
  className?: string;
  sizes: string;
}) {
  return (
    <>
      <Image
        src="/brand/qurai-wordmark-dark.png"
        alt="Qurai"
        fill
        priority={priority}
        sizes={sizes}
        className={`theme-asset-dark ${className ?? ""}`}
      />
      <Image
        src="/brand/qurai-wordmark-light.png"
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className={`theme-asset-light ${className ?? ""}`}
      />
    </>
  );
}

export function ThemedMark({
  className,
  sizes,
}: {
  className?: string;
  sizes: string;
}) {
  return (
    <>
      <Image
        src="/brand/qurai-mark-dark.png"
        alt=""
        fill
        sizes={sizes}
        className={`theme-asset-dark ${className ?? ""}`}
      />
      <Image
        src="/brand/qurai-mark-light.png"
        alt=""
        fill
        sizes={sizes}
        className={`theme-asset-light ${className ?? ""}`}
      />
    </>
  );
}
