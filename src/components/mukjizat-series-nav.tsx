import Link from "next/link";

const SERIES = [
  { bagian: 1, slug: "sapi-yang-melenguh", title: "Sapi yang Melenguh" },
  { bagian: 2, slug: "tongkat-ikan-dan-kulit", title: "Tongkat, Ikan, dan Kulit yang Berbicara" },
  { bagian: 3, slug: "maidah", title: "Ma'idah" },
];

const OUTRO_TEXT = [
  "Bagian kedua: dua versi tongkat Musa yang tidak sepenuhnya konsisten, Yunus yang berdoa dari dalam perut ikan, dan kulit yang bersaksi melawan pemiliknya di hari kiamat.",
  "Bagian ketiga dan terakhir: meja makan dari langit yang dijanjikan Allah tapi tidak pernah dikonfirmasi turun, angin Sulaiman yang ukurannya berbeda di dua surah, dan gunung-gunung yang mungkin atau mungkin tidak benar-benar berbicara.",
  "Ketiga bagian dari seri ini memeriksa pola yang sama: klaim sangat konkret, mekanisme tidak dijelaskan. Bagian pertama: sapi, kera, dan kebangkitan mayat. Bagian kedua: tongkat, ikan, dan kulit. Bagian ini: meja, angin, dan gunung.",
];

export function MukjizatSeriesNav({ current }: { current: number }) {
  return (
    <div className="mb-6 border-l-2 border-[color-mix(in_srgb,var(--qurai-gold)_35%,transparent)] pl-4">
      <p className="mb-2.5 font-mono text-[0.55rem] uppercase tracking-widest text-[var(--qurai-gold)] opacity-60">
        Seri: Kisah dan Celah
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
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

export function MukjizatSeriesOutro({ current }: { current: number }) {
  const next = SERIES.find((s) => s.bagian === current + 1);
  return (
    <div className="border-t border-[var(--qurai-border)] pt-6">
      <p className="font-mono text-[0.68rem] leading-relaxed text-[var(--qurai-quiet)]">
        {OUTRO_TEXT[current - 1]}
      </p>
      {next && (
        <Link
          href={`/artikel/${next.slug}`}
          className="mt-3 inline-block font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] opacity-80 transition hover:opacity-100"
        >
          Lanjut ke Bagian {next.bagian}: {next.title} →
        </Link>
      )}
    </div>
  );
}
