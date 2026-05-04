export type ArticleRef = {
  slug: string;
  title: string;
};

const REFS: Array<{
  surah: number;
  ayatStart: number;
  ayatEnd: number;
  slug: string;
  title: string;
}> = [
  {
    surah: 18,
    ayatStart: 83,
    ayatEnd: 98,
    slug: "dzulqarnain",
    title: "Dzulqarnain dan Teks yang Sudah Ada Sebelumnya",
  },
  {
    surah: 2,
    ayatStart: 173,
    ayatEnd: 173,
    slug: "babi-dan-kencing-unta",
    title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten",
  },
  {
    surah: 5,
    ayatStart: 3,
    ayatEnd: 3,
    slug: "babi-dan-kencing-unta",
    title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten",
  },
  {
    surah: 53,
    ayatStart: 3,
    ayatEnd: 4,
    slug: "babi-dan-kencing-unta",
    title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten",
  },
  // Artikel: Etika Abad Ke-7 yang Dianggap Abadi
  {
    surah: 9,
    ayatStart: 5,
    ayatEnd: 5,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 9,
    ayatStart: 30,
    ayatEnd: 30,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 2,
    ayatStart: 191,
    ayatEnd: 191,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 2,
    ayatStart: 65,
    ayatEnd: 65,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 2,
    ayatStart: 282,
    ayatEnd: 282,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 4,
    ayatStart: 11,
    ayatEnd: 11,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 4,
    ayatStart: 24,
    ayatEnd: 24,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 4,
    ayatStart: 34,
    ayatEnd: 34,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 4,
    ayatStart: 36,
    ayatEnd: 36,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 4,
    ayatStart: 89,
    ayatEnd: 89,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 4,
    ayatStart: 155,
    ayatEnd: 157,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 5,
    ayatStart: 38,
    ayatEnd: 38,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 5,
    ayatStart: 51,
    ayatEnd: 51,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 5,
    ayatStart: 60,
    ayatEnd: 60,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 3,
    ayatStart: 28,
    ayatEnd: 28,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 23,
    ayatStart: 5,
    ayatEnd: 6,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 24,
    ayatStart: 2,
    ayatEnd: 2,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 47,
    ayatStart: 4,
    ayatEnd: 4,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 55,
    ayatStart: 72,
    ayatEnd: 72,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 56,
    ayatStart: 35,
    ayatEnd: 37,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 78,
    ayatStart: 33,
    ayatEnd: 33,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
  {
    surah: 98,
    ayatStart: 6,
    ayatEnd: 6,
    slug: "sistem-moral-quran",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
  },
];

export function getArticleForVerse(
  surahId: number,
  ayahNumber: number,
): ArticleRef | null {
  const match = REFS.find(
    (r) =>
      r.surah === surahId &&
      ayahNumber >= r.ayatStart &&
      ayahNumber <= r.ayatEnd,
  );
  return match ? { slug: match.slug, title: match.title } : null;
}
