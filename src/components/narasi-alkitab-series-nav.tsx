import Link from "next/link";

const SERIES = [
  { bagian: 1, slug: "ya-bunayya", title: "Ya Bunayya" },
  { bagian: 2, slug: "saudara-harun", title: "Saudara Harun" },
  { bagian: 3, slug: "di-bawah-pohon-kurma", title: "Di Bawah Pohon Kurma" },
  { bagian: 4, slug: "luqman-sebelum-al-quran", title: "Luqman Sebelum Al-Quran" },
];

const OUTRO_TEXT = [
  "Bagian kedua memeriksa nama-nama yang tidak bisa ada di zamannya: Maryam yang disebut saudara Harun, Al-Samiri yang menyandang nama dari wilayah yang belum ada di masa Musa, dan klaim tentang keyakinan Yahudi yang tidak terdokumentasikan.",
  "Bagian ketiga menelusuri kisah-kisah tentang Maryam dan Isa yang punya kesamaan mencolok dengan naskah-naskah Kristen yang beredar di Arabia sebelum Islam — pohon kurma saat melahirkan, Maryam di Bait Suci, dan bayi yang berbicara dari buaian.",
  "Bagian keempat dan terakhir: Luqman, figur kebijaksanaan Arabia yang sudah dikenal jauh sebelum Islam, dan apa yang Al-Quran lakukan dengan nama yang sudah dipercaya itu.",
  "Empat bagian dari seri ini memeriksa empat pola berbeda: kisah baru dalam narasi yang lebih tua, nama yang salah zaman, detail dari naskah yang beredar di komunitas-komunitas Arabia, dan figur yang diisi ulang dengan konten baru.",
];

export function NarasiAlkitabSeriesNav({ current }: { current: number }) {
  return (
    <div className="mb-6 border-l-2 border-[color-mix(in_srgb,var(--qurai-gold)_35%,transparent)] pl-4">
      <p className="mb-2.5 font-mono text-[0.55rem] uppercase tracking-widest text-[var(--qurai-gold)] opacity-60">
        Seri: Narasi Alkitab
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

export function NarasiAlkitabSeriesOutro({ current }: { current: number }) {
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
