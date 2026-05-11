"use client";

import { useEffect, useState } from "react";

const siteOrigin = "https://qurai.rhadzor.id";
const saweriaUrl = process.env.NEXT_PUBLIC_SAWERIA_URL || "https://saweria.co/";

function makeShareUrl(service: "whatsapp" | "x" | "facebook", url: string, title: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} - Qurai`);

  if (service === "whatsapp") {
    return `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
  }

  if (service === "x") {
    return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  }

  return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
}

export function ArticleShare({ title }: { title?: string }) {
  const [copied, setCopied] = useState(false);
  const [articleUrl, setArticleUrl] = useState(siteOrigin);
  const [shareTitle, setShareTitle] = useState(title || "Artikel Qurai");

  useEffect(() => {
    setArticleUrl(window.location.href);
    setShareTitle(title || document.title.replace(" | Qurai", ""));
  }, [title]);

  async function shareNative() {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      await navigator.share({
        title: shareTitle,
        text: `${shareTitle} - Qurai`,
        url: articleUrl,
      });
    } else {
      await copyLink();
    }
  }

  async function copyLink() {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(articleUrl);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="mt-16 border-y border-[var(--qurai-border)] py-7">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Bagikan artikel
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--qurai-muted)]">
            Bantu tulisan ini menemukan pembaca yang tepat.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={shareNative}
            className="border border-[var(--qurai-border)] px-3 py-2 font-mono text-[0.62rem] uppercase text-[var(--qurai-muted)] transition hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
          >
            Share
          </button>
          <a
            href={makeShareUrl("whatsapp", articleUrl, shareTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--qurai-border)] px-3 py-2 font-mono text-[0.62rem] uppercase text-[var(--qurai-muted)] transition hover:border-[var(--qurai-green)] hover:text-[var(--qurai-green)]"
          >
            WhatsApp
          </a>
          <a
            href={makeShareUrl("x", articleUrl, shareTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--qurai-border)] px-3 py-2 font-mono text-[0.62rem] uppercase text-[var(--qurai-muted)] transition hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
          >
            X
          </a>
          <a
            href={makeShareUrl("facebook", articleUrl, shareTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--qurai-border)] px-3 py-2 font-mono text-[0.62rem] uppercase text-[var(--qurai-muted)] transition hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
          >
            Facebook
          </a>
          <button
            type="button"
            onClick={copyLink}
            className="border border-[var(--qurai-border)] px-3 py-2 font-mono text-[0.62rem] uppercase text-[var(--qurai-muted)] transition hover:border-[var(--qurai-gold)] hover:text-[var(--qurai-gold)]"
          >
            {copied ? "Tersalin" : "Salin link"}
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-[var(--qurai-border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[48ch] text-sm leading-7 text-[var(--qurai-muted)]">
          Kalau tulisan Qurai berguna, dukungan kecil membantu riset dan
          penulisan berikutnya tetap berjalan.
        </p>
        <a
          href={saweriaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center border border-[var(--qurai-gold)] px-4 py-3 font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] transition hover:bg-[var(--qurai-gold)] hover:text-[var(--qurai-bg)]"
        >
          Dukung via Saweria
        </a>
      </div>
    </section>
  );
}
