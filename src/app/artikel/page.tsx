import type { Metadata } from "next";
import Link from "next/link";
import { ThemedWordmark } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Artikel | Qurai",
  description:
    "Analisis mendalam tentang teks, sejarah, dan pertanyaan yang jarang diajukan.",
};

const articles = [
  {
    slug: "dzulqarnain",
    number: "01",
    title: "Dzulqarnain dan Teks yang Sudah Ada Sebelumnya",
    excerpt:
      "Orang Yahudi menguji Muhammad dengan satu pertanyaan: ceritakan Dzulqarnain. Jawabannya ada di Al-Kahf. Masalahnya - jawaban itu bukan milik Muhammad seorang.",
    surah: "Al-Kahf 18:83–98",
    date: "Mei 2026",
    readTime: "8 menit",
  },
];

export default function ArtikelPage() {
  return (
    <main className="qurai-page min-h-screen">
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-8 border-b border-[var(--qurai-border)] bg-[color-mix(in_srgb,var(--qurai-bg)_84%,transparent)] px-5 py-4 backdrop-blur-[18px] sm:px-10 lg:px-14">
        <Link
          href="/about"
          aria-label="Qurai"
          className="relative block h-[36px] w-[clamp(104px,12vw,150px)]"
        >
          <ThemedWordmark sizes="150px" className="object-contain object-left" />
        </Link>
        <div className="hidden items-center gap-[clamp(1.2rem,3vw,2.5rem)] font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] sm:flex">
          <Link href="/" className="transition hover:text-[var(--qurai-green)]">
            Bedah Quran
          </Link>
          <span className="text-[var(--qurai-gold)]">Artikel</span>
        </div>
      </nav>

      <div className="mx-auto w-[min(1120px,calc(100%_-_1.4rem))] px-0 pb-24 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-36">
        <div className="mb-16 sm:mb-20">
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            02 / Artikel
          </p>
          <h1 className="font-serif-reading text-[2.4rem] italic leading-tight text-[var(--qurai-text)] sm:text-[3.2rem]">
            Analisis Mendalam
          </h1>
          <p className="mt-5 max-w-[58ch] text-sm leading-8 text-[var(--qurai-muted)]">
            Esai panjang yang menelusuri satu topik secara utuh — sejarah,
            logika, dan apa yang tersisa setelah semuanya diperiksa.
          </p>
        </div>

        <div className="grid gap-[1px] border border-[var(--qurai-border)] bg-[var(--qurai-border)]">
          {articles.map((article) => (
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
              <div className="shrink-0 self-center font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] transition group-hover:text-[var(--qurai-gold)]">
                Baca →
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="border-t border-[var(--qurai-border)] px-5 py-7 font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] sm:px-10 lg:px-14">
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
