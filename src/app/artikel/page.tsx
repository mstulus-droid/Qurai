import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artikel | Qurai",
  description:
    "Analisis mendalam tentang naskah, sejarah, dan pertanyaan yang jarang diajukan.",
  alternates: {
    canonical: "/artikel",
  },
  openGraph: {
    title: "Artikel | Qurai",
    description:
      "Analisis mendalam tentang naskah, sejarah, dan pertanyaan yang jarang diajukan.",
    url: "/artikel",
    type: "website",
    images: ["/brand/qurai-app-icon-dark.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artikel | Qurai",
    description:
      "Analisis mendalam tentang naskah, sejarah, dan pertanyaan yang jarang diajukan.",
    images: ["/brand/qurai-app-icon-dark.png"],
  },
};

export default function ArtikelPage() {
  return (
    <main className="qurai-page flex min-h-screen flex-col bg-fixed">
      <ArticleNav />

      <div className="mx-auto flex-1 w-[min(1120px,calc(100%_-_1.4rem))] px-0 pb-24 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-36">
        <div className="mb-16 sm:mb-20">
          <h1 className="font-serif-reading text-[2.4rem] italic leading-tight text-[var(--qurai-text)] sm:text-[3.2rem]">
            Ruang Analisis
          </h1>
          <p className="mt-5 max-w-[58ch] text-sm leading-8 text-[var(--qurai-muted)]">
            Esai yang menguji klaim, riwayat, dan logika internal sebuah topik
            sampai titik paling terang yang bisa dicapai.
          </p>
        </div>

        <div className="grid gap-[1px] border border-[var(--qurai-border)] bg-[var(--qurai-border)]">
          {articles.slice().reverse().map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="group flex flex-col gap-6 bg-[var(--qurai-surface)] p-7 transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_8%,var(--qurai-surface))] sm:flex-row sm:items-start sm:gap-10 sm:p-9"
            >
              <div className="shrink-0">
                <span className="font-mono text-[0.6rem] uppercase text-[var(--qurai-gold)]">
                  {article.number}
                </span>
              </div>
              <div className="flex-1">
                <p className="mb-3 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
                  {article.surah} &nbsp;·&nbsp; {article.date} &nbsp;·&nbsp;{" "}
                  {article.readTime}
                </p>
                <h2 className="font-serif-reading text-[1.5rem] italic leading-snug text-[var(--qurai-text)] transition group-hover:text-[var(--qurai-gold)] sm:text-[1.85rem]">
                  {article.title}
                </h2>
                <p className="mt-4 max-w-[62ch] text-sm leading-8 text-[var(--qurai-muted)]">
                  {article.excerpt}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-3 self-stretch sm:w-44 sm:items-end lg:w-52">
                {article.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[0.65rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] sm:w-44 lg:w-52">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 3.5rem), 208px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}
                <div className="mt-auto font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] transition group-hover:text-[var(--qurai-gold)]">
                  Baca →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-auto border-t border-[var(--qurai-border)] px-5 py-7 font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] sm:px-10 lg:px-14">
        Bagian dari{" "}
        <Link
          href="https://rhadzor.id"
          className="text-[var(--qurai-muted)] transition hover:text-[var(--qurai-green)]"
        >
          rhadzor.id
        </Link>
      </footer>
    </main>
  );
}
