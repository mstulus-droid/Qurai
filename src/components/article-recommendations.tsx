import Link from "next/link";

const articles = [
  {
    slug: "dzulqarnain",
    number: "01",
    title: "Dzulqarnain dan Teks yang Sudah Ada Sebelumnya",
    excerpt:
      "Kisah Al-Kahf yang terlalu dekat dengan legenda Alexander berbahasa Syriac.",
    meta: "Al-Kahf 18:83-98 · 8 menit",
  },
  {
    slug: "babi-dan-kencing-unta",
    number: "02",
    title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten",
    excerpt:
      "Ketika argumen kesehatan untuk larangan babi bertemu hadis urin unta.",
    meta: "Al-Baqarah 2:173 · 7 menit",
  },
  {
    slug: "sistem-moral-quran",
    number: "03",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
    excerpt:
      "Klaim moral universal yang berdampingan dengan perang, pukulan, dan perbudakan.",
    meta: "At-Tawbah 9:5 · 14 menit",
  },
  {
    slug: "waraqah-dan-wahyu",
    number: "04",
    title: "Waraqah bin Naufal dan Asal-Usul Wahyu",
    excerpt:
      "Orang pertama yang memvalidasi pengalaman Muhammad dan pertanyaan tentang sumber narasi awal.",
    meta: "Al-An'am 6:19 · 10 menit",
  },
  {
    slug: "wahyu-konvenien",
    number: "05",
    title: "Ketika Wahyu Mengikuti Kepentingan Pribadi Nabi",
    excerpt:
      "Pola ayat yang turun tepat saat Muhammad menghadapi kebutuhan personal.",
    meta: "Al-Ahzab 33:50 · 12 menit",
  },
];

export function ArticleRecommendations({ currentSlug }: { currentSlug: string }) {
  const currentIndex = articles.findIndex((article) => article.slug === currentSlug);
  const startIndex = currentIndex >= 0 ? currentIndex + 1 : 0;
  const recommendations = [0, 1].map(
    (offset) => articles[(startIndex + offset) % articles.length],
  );

  return (
    <section className="mt-20 border-y border-[var(--qurai-border)] py-8">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Bacaan selanjutnya
          </p>
        </div>
        <Link
          href="/artikel"
          className="hidden font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] transition hover:text-[var(--qurai-gold)] sm:block"
        >
          Semua artikel
        </Link>
      </div>

      <div className="grid gap-[1px] overflow-hidden border border-[var(--qurai-border)] bg-[var(--qurai-border)] sm:grid-cols-2">
        {recommendations.map((article) => (
          <Link
            key={article.slug}
            href={`/artikel/${article.slug}`}
            className="group flex min-h-56 flex-col justify-between bg-[color-mix(in_srgb,var(--qurai-surface)_84%,var(--qurai-bg))] p-5 transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_8%,var(--qurai-surface))] sm:p-6"
          >
            <div>
              <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)]">
                Artikel {article.number} · {article.meta}
              </p>
              <h3 className="font-serif-reading mt-4 text-[1.35rem] leading-tight text-[var(--qurai-text)]">
                {article.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--qurai-muted)]">
                {article.excerpt}
              </p>
            </div>
            <span className="mt-7 font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] transition group-hover:text-[var(--qurai-gold)]">
              Baca lanjut →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
