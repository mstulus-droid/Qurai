import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";

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
      "Orang Yahudi menguji Muhammad dengan satu pertanyaan: ceritakan Dzulqarnain. Jawabannya ada di Al-Kahf. Masalahnya, jawaban itu bukan milik Muhammad seorang.",
    surah: "Al-Kahf 18:83–98",
    date: "Mei 2026",
    readTime: "8 menit",
  },
  {
    slug: "babi-dan-kencing-unta",
    number: "02",
    title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten",
    excerpt:
      "Al-Quran melarang babi atas nama kebersihan. Hadis sahih menganjurkan urin unta sebagai obat. Secara medis, yang dilarang lebih aman dari yang dianjurkan.",
    surah: "Al-Baqarah 2:173 · Al-Maidah 5:3",
    date: "Mei 2026",
    readTime: "7 menit",
  },
  {
    slug: "sistem-moral-quran",
    number: "03",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
    excerpt:
      "Al-Quran mengklaim semua manusia setara di hadapan Allah. Di kitab yang sama ada perintah bunuh orang kafir, legalitas memukul istri, dan perbudakan seksual. Dua klaim itu tidak bisa berdiri bersamaan.",
    surah: "At-Tawbah 9:5 · An-Nisa 4:34",
    date: "Mei 2026",
    readTime: "14 menit",
  },
  {
    slug: "waraqah-dan-wahyu",
    number: "04",
    title: "Waraqah bin Naufal dan Asal-Usul Wahyu",
    excerpt:
      "Orang pertama yang memvalidasi pengalaman Muhammad adalah sepupu isterinya — seorang pendeta Kristen yang hafal kitab suci Ibrani. Bertanya siapa yang sebenarnya membentuk narasi awal Islam bukan pertanyaan yang mudah dijawab.",
    surah: "Al-An'am 6:19 · Yunus 10:37",
    date: "Mei 2026",
    readTime: "10 menit",
  },
  {
    slug: "wahyu-konvenien",
    number: "05",
    title: "Ketika Wahyu Mengikuti Kepentingan Pribadi Nabi",
    excerpt:
      "Ada pola di ayat-ayat Madaniyah: wahyu turun tepat saat Muhammad menghadapi masalah personal — konflik rumah tangga, ketertarikan pada perempuan tertentu, kritik publik, atau kebutuhan finansial. Pola ini bisa diperiksa langsung dari teks.",
    surah: "Al-Ahzab 33:50 · At-Tahrim 66:1",
    date: "Mei 2026",
    readTime: "12 menit",
  },
  {
    slug: "lempar-jumrah",
    number: "06",
    title: "Ritual yang Tidak Ada dalam Al-Quran",
    excerpt:
      "Al-Quran cukup detail soal haji — ihram, wukuf, thawaf, sa'i, kurban. Tapi lempar jumrah tidak disebut satu kali pun. Seluruh dasarnya berasal dari hadis dan tradisi Arab yang sudah ada sebelum Islam.",
    surah: "Al-Baqarah 2:196 · Al-Hajj 22:27",
    date: "Mei 2026",
    readTime: "7 menit",
  },
  {
    slug: "warisan-pagan-arab",
    number: "07",
    title: "Kaaba, Allah, dan Apa yang Ada Sebelumnya",
    excerpt:
      "Kaaba punya sejarah panjang sebagai kuil politeistik. Nama Allah muncul jauh sebelum Islam. Ritual haji sudah berlangsung berabad-abad sebelum Muhammad. Ini bukan tuduhan — ini catatan historis yang bisa diperiksa.",
    surah: "An-Najm 53:19 · Al-Ankabut 29:61",
    date: "Mei 2026",
    readTime: "10 menit",
  },
];

export default function ArtikelPage() {
  return (
    <main className="qurai-page flex min-h-screen flex-col bg-fixed">
      <ArticleNav />

      <div className="mx-auto flex-1 w-[min(1120px,calc(100%_-_1.4rem))] px-0 pb-24 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-36">
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
