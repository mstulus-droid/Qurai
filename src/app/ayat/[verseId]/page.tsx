import { NavLink } from "@/components/nav-link";
import { notFound } from "next/navigation";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { getDatabaseErrorInfo } from "@/lib/db";
import {
  getVerseById,
  getVerseNeighbors,
  isVerseBookmarked,
} from "@/lib/quran-data";
import { BookmarkButton } from "@/app/bookmark/bookmark-button";
import { ReadingProgress } from "@/app/reading-progress";
import { VerseReaderCard } from "./verse-reader-card";

type PageProps = {
  params: Promise<{ verseId: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { verseId } = await params;
  let verse = null;

  try {
    verse = await getVerseById(Number(verseId));
  } catch {
    return {
      title: "Database bermasalah | Qurai",
    };
  }

  if (!verse) {
    return {
      title: "Ayat tidak ditemukan | Qurai",
    };
  }

  return {
    title: `${verse.surahNameIndonesian} Ayat ${verse.ayahNumber} | Qurai`,
  };
}

export default async function VerseDetailPage({ params }: PageProps) {
  const { verseId } = await params;
  const parsedId = Number(verseId);
  let verse;

  try {
    verse = await getVerseById(parsedId);
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  if (!verse) {
    notFound();
  }

  let neighbors;
  let bookmarked;

  try {
    [neighbors, bookmarked] = await Promise.all([
      getVerseNeighbors(parsedId),
      isVerseBookmarked(parsedId),
    ]);
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  return (
    <main
      id="verse-reading-root"
      className="qurai-page px-4 py-6 sm:px-8 sm:py-8 lg:px-12"
    >
      <ReadingProgress targetId="verse-reading-root" />
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        <section className="qurai-hero rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {verse.surahNameIndonesian} Ayat {verse.ayahNumber}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <NavLink
                href={`/surat/${verse.surahId}#ayat-${verse.ayahNumber}`}
                aria-label="Kembali ke surat utuhnya"
                title="Kembali ke surat utuhnya"
                className="qurai-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12h10" strokeLinecap="round" />
                </svg>
              </NavLink>
              <NavLink
                href="/"
                aria-label="Kembali ke home"
                title="Kembali ke home"
                className="qurai-icon-button inline-flex h-11 w-11 items-center justify-center rounded-full"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
                  <path d="M4 11.5L12 5l8 6.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 10.5V19h11v-8.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </NavLink>
              <BookmarkButton verseId={verse.id} isBookmarked={bookmarked} iconOnly />
            </div>
          </div>
        </section>

        <VerseReaderCard
          arabicText={verse.arabicText}
          translation={verse.translation}
          catatanDepag={verse.catatanDepag}
          topic={verse.topic}
          asbabunNuzul={verse.asbabunNuzul}
          critique={verse.critique}
          logicalFallacies={verse.logicalFallacies}
          moralConcerns={verse.moralConcerns}
          scientificErrors={verse.scientificErrors}
          contradictions={verse.contradictions}
          previousVerseId={neighbors.previousVerseId}
          nextVerseId={neighbors.nextVerseId}
        />
      </div>
    </main>
  );
}
