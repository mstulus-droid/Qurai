"use client";

import { useEffect, useState } from "react";

const siteOrigin = "https://qurai.rhadzor.id";
const saweriaUrl = process.env.NEXT_PUBLIC_SAWERIA_URL || "https://saweria.co/";

function makeShareUrl(
  service: "whatsapp" | "x" | "facebook",
  url: string,
  title: string,
) {
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

function NativeShareIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      <path d="M16 5l-4-4-4 4" />
      <path d="M12 1v14" />
      <path d="M5 11v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12.04 2.25a9.66 9.66 0 0 0-8.2 14.77L2.75 21.75l4.84-1.08A9.66 9.66 0 1 0 12.04 2.25Zm0 1.72a7.94 7.94 0 1 1-3.86 14.88l-.29-.16-2.8.62.63-2.72-.18-.3A7.94 7.94 0 0 1 12.04 3.97Zm-3.12 3.9c-.18 0-.47.07-.72.34-.25.28-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.89 3.02 4.68 4.11 2.31.91 2.79.73 3.29.68.5-.04 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.18-.53-.32-.27-.13-1.62-.8-1.87-.89-.25-.09-.43-.13-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.01-.22-.52-.45-.45-.61-.46h-.52Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.81-5.97 6.81H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.84L7.08 4.13H5.11l11.97 15.64Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.23 0-1.62.77-1.62 1.56v1.91h2.76l-.44 2.91h-2.32V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L10.9 5.03" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07l1.22-1.22" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function SaweriaIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M7 8h10v9a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8Z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M9 4c.6.42.6 1.08 0 1.5" />
      <path d="M12 3c.7.55.7 1.45 0 2" />
      <path d="M15 4c.6.42.6 1.08 0 1.5" />
    </svg>
  );
}

export function ArticleShare({ title }: { title?: string }) {
  const [copied, setCopied] = useState(false);
  const [articleUrl, setArticleUrl] = useState(siteOrigin);
  const [shareTitle, setShareTitle] = useState(title || "Artikel Qurai");

  useEffect(() => {
    const syncShareContext = window.setTimeout(() => {
      setArticleUrl(window.location.href);
      setShareTitle(title || document.title.replace(" | Qurai", ""));
    }, 0);

    return () => window.clearTimeout(syncShareContext);
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

  const shareButtonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--qurai-border)] text-[var(--qurai-muted)] transition hover:border-[var(--qurai-gold)] hover:bg-[color-mix(in_srgb,var(--qurai-gold)_10%,transparent)] hover:text-[var(--qurai-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--qurai-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--qurai-bg)]";

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
            title="Bagikan"
            aria-label="Bagikan artikel"
            className={shareButtonClass}
          >
            <NativeShareIcon />
          </button>
          <a
            href={makeShareUrl("whatsapp", articleUrl, shareTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title="Bagikan ke WhatsApp"
            aria-label="Bagikan ke WhatsApp"
            className={`${shareButtonClass} hover:border-[var(--qurai-green)] hover:bg-[color-mix(in_srgb,var(--qurai-green)_10%,transparent)] hover:text-[var(--qurai-green)]`}
          >
            <WhatsAppIcon />
          </a>
          <a
            href={makeShareUrl("x", articleUrl, shareTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title="Bagikan ke X"
            aria-label="Bagikan ke X"
            className={shareButtonClass}
          >
            <XIcon />
          </a>
          <a
            href={makeShareUrl("facebook", articleUrl, shareTitle)}
            target="_blank"
            rel="noopener noreferrer"
            title="Bagikan ke Facebook"
            aria-label="Bagikan ke Facebook"
            className={shareButtonClass}
          >
            <FacebookIcon />
          </a>
          <button
            type="button"
            onClick={copyLink}
            title={copied ? "Tautan tersalin" : "Salin tautan"}
            aria-label={copied ? "Tautan tersalin" : "Salin tautan"}
            className={`${shareButtonClass} ${copied ? "border-[var(--qurai-green)] text-[var(--qurai-green)]" : ""}`}
          >
            {copied ? <CheckIcon /> : <LinkIcon />}
          </button>
        </div>
      </div>

      <div className="mt-6 border-t border-[var(--qurai-border)] pt-6">
        <div className="relative overflow-hidden rounded-[0.9rem] border border-[color-mix(in_srgb,var(--qurai-gold)_42%,var(--qurai-border))] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--qurai-gold)_10%,var(--qurai-surface)),var(--qurai-surface-strong)_58%,color-mix(in_srgb,var(--qurai-green)_12%,var(--qurai-surface)))] p-5 shadow-[0_24px_70px_-54px_rgba(0,0,0,0.78)]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-[52ch]">
              <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-gold)]">
                Dukung Qurai
              </p>
              <p className="mt-2 font-serif-reading text-[1.25rem] italic leading-snug text-[var(--qurai-text)]">
                Jadilah bagian kecil dari riset berikutnya.
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--qurai-muted)]">
                Kalau tulisan ini membantumu berpikir lebih jernih, dukunganmu
                membuat arsip Qurai bisa terus ditulis, dirawat, dan dibuka
                untuk pembaca lain.
              </p>
            </div>
            <a
              href={saweriaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--qurai-gold)] bg-[var(--qurai-gold)] px-5 py-3 font-mono text-[0.62rem] uppercase text-[var(--qurai-bg)] shadow-[0_14px_34px_-24px_var(--qurai-gold)] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[var(--qurai-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--qurai-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--qurai-bg)]"
            >
              <SaweriaIcon />
              Dukung via Saweria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
