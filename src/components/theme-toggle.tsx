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

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleToggle() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  }

  const isLight = theme === "light";

  return (
    <button
      className="theme-toggle shrink-0"
      type="button"
      onClick={handleToggle}
      aria-label={isLight ? "Ganti ke mode gelap" : "Ganti ke mode terang"}
      aria-pressed={isLight}
    />
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
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    const syncTheme = () => {
      const nextTheme = document.body.classList.contains("light-mode") ? "light" : "dark";
      setTheme(nextTheme);
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <Image
      src={`/brand/qurai-wordmark-${theme}.png`}
      alt="Qurai"
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
