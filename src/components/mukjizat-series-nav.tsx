import Link from "next/link";

const SERIES = [
  { bagian: 1, slug: "sapi-yang-melenguh", title: "Sapi yang Melenguh" },
  { bagian: 2, slug: "tongkat-ikan-dan-kulit", title: "Tongkat, Ikan, dan Kulit yang Berbicara" },
  { bagian: 3, slug: "maidah", title: "Ma'idah" },
];

export function MukjizatSeriesNav({ current }: { current: number }) {
  return (
    <div className="mb-6 border-l-2 border-[color-mix(in_srgb,var(--qurai-gold)_35%,transparent)] pl-4">
      <p className="mb-2.5 font-mono text-[0.55rem] uppercase tracking-widest text-[var(--qurai-gold)] opacity-60">
        Seri: Mukjizat Al-Qur'an
      </p>
      <div className="flex flex-col gap-1.5">
        {SERIES.map((part) =>
          part.bagian === current ? (
            <span
              key={part.slug}
              className="font-mono text-[0.62rem] text-[var(--qurai-text)]"
            >
              {part.bagian}. {part.title}
            </span>
          ) : (
            <Link
              key={part.slug}
              href={`/artikel/${part.slug}`}
              className="font-mono text-[0.62rem] text-[var(--qurai-quiet)] transition hover:text-[var(--qurai-gold)]"
            >
              {part.bagian}. {part.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
