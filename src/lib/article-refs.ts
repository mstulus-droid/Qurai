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
