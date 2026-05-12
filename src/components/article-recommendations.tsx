import Link from "next/link";
import { articles } from "@/lib/articles";

function hashSlug(slug: string) {
  return [...slug].reduce(
    (hash, char) => (hash * 31 + char.charCodeAt(0)) % 1000003,
    7,
  );
}

export function ArticleRecommendations({ currentSlug }: { currentSlug: string }) {
  const recommendationPool = articles.filter((article) => article.slug !== currentSlug);
  const seed = hashSlug(currentSlug);
  const recommendations = recommendationPool
    .map((article, index) => ({
      article,
      sortKey: hashSlug(`${currentSlug}-${article.slug}-${index}-${seed}`),
    }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .slice(0, 2)
    .map(({ article }) => article);

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
                Artikel {article.number} · {article.surah} · {article.readTime}
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
