import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { bedahSuratItems, getBedahSuratItem } from "@/lib/bedah-surat";
import { getEssay } from "@/data/bedah-surat";
import {
  getSurahs,
  getVersesBySurahId,
  type SurahListItem,
  type VerseRecord,
} from "@/lib/quran-data";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { getDatabaseErrorInfo } from "@/lib/db";
import { VersePreviewLink } from "./verse-preview-link";
import { SurahShortcutSidebar } from "./surah-shortcut-sidebar";

// Maps surah display name → surah number. Add a new entry whenever a new bedah surat essay is added.
const SURAH_NAME_MAP: Record<string, number> = {
  "Al-Fatihah": 1, "Al-Baqarah": 2, "Ali Imran": 3, "An-Nisa": 4,
  "Al-Ma'idah": 5, "Al-An'am": 6, "Al-A'raf": 7, "Al-Anfal": 8,
  "At-Taubah": 9, "Yunus": 10, "Hud": 11, "Yusuf": 12,
  "Ar-Ra'd": 13, "Ibrahim": 14, "Al-Hijr": 15, "An-Nahl": 16,
  "Al-Isra": 17, "Al-Kahf": 18, "Maryam": 19, "Taha": 20,
  "Al-Anbiya": 21, "Al-Hajj": 22, "Al-Mu'minun": 23, "An-Nur": 24,
  "Al-Furqan": 25, "Asy-Syu'ara": 26, "An-Naml": 27, "Al-Qasas": 28,
  "Al-'Ankabut": 29, "Ar-Rum": 30, "Luqman": 31, "As-Sajdah": 32,
  "Al-Ahzab": 33, "Saba": 34, "Fatir": 35, "Ya Sin": 36,
  "As-Saffat": 37, "Sad": 38, "Az-Zumar": 39, "Gafir": 40,
  "Fussilat": 41, "Asy-Syura": 42, "Az-Zukhruf": 43, "Ad-Dukhan": 44,
  "Al-Jasiyah": 45, "Al-Ahqaf": 46, "Muhammad": 47, "Al-Fath": 48,
  "Al-Hujurat": 49, "Qaf": 50, "Az-Zariyat": 51, "At-Tur": 52,
  "An-Najm": 53, "Al-Qamar": 54, "Ar-Rahman": 55, "Al-Waqi'ah": 56,
  "Al-Hadid": 57, "Al-Mujadilah": 58, "Al-Hasyr": 59, "Al-Mumtahanah": 60,
  "As-Saff": 61, "Al-Jumu'ah": 62, "Al-Munafiqun": 63, "At-Taghabun": 64,
  "At-Talaq": 65, "At-Tahrim": 66, "Al-Mulk": 67,
  "Al-Qalam": 68, "Al-Haqqah": 69, "Al-Ma'arij": 70,
  "Nuh": 71, "Al-Jinn": 72, "Al-Muzzammil": 73, "Al-Muddassir": 74, "Al-Qiyamah": 75,
  "Al-Insan": 76, "Al-Mursalat": 77, "An-Naba": 78, "An-Nazi'at": 79, "Abasa": 80,
};

const SURAH_NAMES = Object.keys(SURAH_NAME_MAP);
const NAMES_PATTERN = SURAH_NAMES.map((n) =>
  n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
).join("|");
const VERSE_SPLIT_RE = new RegExp(
  `((?:${NAMES_PATTERN}) \\d+:\\d+(?:-\\d+)?)`,
  "g",
);
const VERSE_MATCH_RE = new RegExp(
  `^(${NAMES_PATTERN}) (\\d+):(\\d+)(?:-(\\d+))?$`,
);

function renderVerseLinks(text: string, previewVerses: VerseRecord[]) {
  const parts = text.split(VERSE_SPLIT_RE);

  return parts.map((part, index) => {
    const match = part.match(VERSE_MATCH_RE);

    if (!match) {
      return part;
    }

    const surah = Number(match[2]);
    const startAyat = Number(match[3]);
    const endAyat = match[4] ? Number(match[4]) : startAyat;
    const verses = previewVerses
      .filter(
        (verse) =>
          verse.surahId === surah &&
          verse.ayahNumber >= startAyat &&
          verse.ayahNumber <= endAyat,
      )
      .map((verse) => ({
        ayahNumber: verse.ayahNumber,
        translation: verse.translation,
      }));

    return (
      <VersePreviewLink
        key={`${part}-${index}`}
        label={part}
        surah={surah}
        startAyat={startAyat}
        endAyat={endAyat}
        verses={verses}
      />
    );
  });
}

export async function generateStaticParams() {
  return bedahSuratItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getBedahSuratItem(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title}: ${item.subtitle} | Qurai`,
    description: item.excerpt,
    alternates: {
      canonical: `/bedah-surat/${item.slug}`,
    },
    openGraph: {
      title: `${item.title}: ${item.subtitle} | Qurai`,
      description: item.excerpt,
      url: `/bedah-surat/${item.slug}`,
      type: "article",
      images: ["/brand/qurai-app-icon-dark.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title}: ${item.subtitle} | Qurai`,
      description: item.excerpt,
      images: ["/brand/qurai-app-icon-dark.png"],
    },
  };
}

export default async function BedahSuratDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBedahSuratItem(slug);
  const essay = await getEssay(slug);

  if (!item || !essay) {
    notFound();
  }

  let previewVerses: VerseRecord[] = [];
  let surahs: SurahListItem[] = [];

  try {
    [previewVerses, surahs] = await Promise.all([
      getVersesBySurahId(item.surahNumber),
      getSurahs(),
    ]);
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  return (
    <main className="qurai-page min-h-screen bg-fixed">
      <ArticleNav backHref="/bedah-surat" backLabel="Bedah Surat" />

      <div className="mx-auto grid w-[min(1120px,calc(100%_-_1.4rem))] grid-cols-1 gap-10 pb-32 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-40 xl:grid-cols-[minmax(0,740px)_240px] xl:items-start xl:justify-center">
      <article className="mx-auto w-full max-w-[740px] xl:mx-0">
        <header className="mb-14">
          <Link
            href="/bedah-surat"
            className="mb-8 inline-block font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] transition hover:text-[var(--qurai-gold)]"
          >
            ← Bedah Surat
          </Link>
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            QS {item.number} &nbsp;·&nbsp; {item.range} &nbsp;·&nbsp;{" "}
            {item.classification} &nbsp;·&nbsp; {item.readTime}
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            {item.title}: {item.subtitle}
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            {essay.lead}
          </p>
        </header>

        <div className="mb-14 rounded-[1.25rem] border border-[var(--qurai-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--qurai-gold)_12%,var(--qurai-surface)),var(--qurai-surface-strong)_58%,color-mix(in_srgb,var(--qurai-green)_12%,var(--qurai-surface)))] p-6 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.72)] sm:p-8">
          <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)]">
            Peta Masalah
          </p>
          <p className="mt-4 font-serif-reading text-[1.25rem] italic leading-relaxed text-[var(--qurai-text)]">
            {essay.problemMap}
          </p>
        </div>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          {essay.sections.map((section) => (
            <section key={section.title} className="space-y-7">
              <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{renderVerseLinks(paragraph, previewVerses)}</p>
              ))}
            </section>
          ))}
        </div>

        <ArticleShare title={`${item.title}: ${item.subtitle}`} />
      </article>
      <SurahShortcutSidebar surahs={surahs} currentSurahNumber={item.surahNumber} />
      </div>
    </main>
  );
}
