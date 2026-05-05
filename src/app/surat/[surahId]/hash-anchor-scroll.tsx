"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function scrollToCurrentHash() {
  const id = window.location.hash.slice(1);

  if (!id) {
    return;
  }

  const target = document.getElementById(decodeURIComponent(id));
  if (!target) {
    return;
  }

  target.scrollIntoView({ block: "start", behavior: "auto" });
}

export function HashAnchorScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const timeouts = [0, 80, 220, 520].map((delay) =>
      window.setTimeout(scrollToCurrentHash, delay),
    );

    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, [pathname]);

  return null;
}
