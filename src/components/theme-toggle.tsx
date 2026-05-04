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
      <span className="theme-toggle-sky" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle-bg-icon theme-toggle-cloud"
          fill="currentColor"
        >
          <path d="M19.35 10.04A7.49 7.49 0 0 0 4.97 8.1 5.99 5.99 0 0 0 6 20h13a5 5 0 0 0 .35-9.96Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle-bg-icon theme-toggle-stars"
          fill="currentColor"
        >
          <path d="M12 .59 15.09 7l6.91 1-5 4.87L18.18 20 12 16.75 5.82 20 7 12.87 2 8l6.91-1L12 .59Z" />
        </svg>
      </span>
      <span className="theme-toggle-knob" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle-icon theme-toggle-icon-sun"
          fill="currentColor"
        >
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Zm0-14a1 1 0 0 0 1-1V2a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1Zm10 6h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2ZM5 12a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1Zm12.95 4.54a1 1 0 0 0-1.41 1.41l1.41 1.42a1 1 0 0 0 1.42-1.42l-1.42-1.41ZM6.05 4.63a1 1 0 0 0-1.42 1.42l1.42 1.41a1 1 0 0 0 1.41-1.41L6.05 4.63Zm11.9 2.83 1.42-1.41a1 1 0 0 0-1.42-1.42l-1.41 1.42a1 1 0 1 0 1.41 1.41ZM6.05 16.54l-1.42 1.41a1 1 0 1 0 1.42 1.42l1.41-1.42a1 1 0 1 0-1.41-1.41Z" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="theme-toggle-icon theme-toggle-icon-moon"
          fill="currentColor"
        >
          <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 22 14.05a1 1 0 0 0-.36-1.05Z" />
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
