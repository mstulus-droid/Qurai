import { NavLink } from "@/components/nav-link";
import { ThemedWordmark, ThemeToggle } from "@/components/theme-toggle";
import { redirect } from "next/navigation";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { HomeFooter } from "@/app/home-footer";
import { getDatabaseErrorInfo } from "@/lib/db";
import { HomeClientWrapper } from "./home-client-wrapper";
import {
  type SurahListItem,
  type VerseRecord,
  getSurahs,
  getVersesBySurahId,
  getSurahsStats,
} from "@/lib/quran-data";

type HomePageProps = {
  searchParams?: Promise<{
    q?: string;
    surah?: string;
    ayat?: string;
  }>;
};

type RevelationKind = "makkiyah" | "madaniyah" | null;

function classifyRevelation(place: string): RevelationKind {
  const normalized = place.trim().toLowerCase();
  if (!normalized) return null;
  if (normalized.includes("makk") || normalized.includes("mekk") || normalized.includes("mecca")) {
    return "makkiyah";
  }
  if (normalized.includes("madin") || normalized.includes("medin")) {
    return "madaniyah";
  }
  return null;
}

function RevelationBadge({ kind, size = "md" }: { kind: RevelationKind; size?: "sm" | "md" }) {
  if (!kind) return null;
  const isMakkiyah = kind === "makkiyah";
  const sizeClasses =
    size === "sm"
      ? "gap-0.5 rounded-full px-1.5 py-0 text-[8px] tracking-[0.1em]"
      : "gap-1 rounded-full px-2 py-0.5 text-[10px] tracking-[0.14em]";
  const dotSize = size === "sm" ? "h-1 w-1" : "h-1.5 w-1.5";
  return (
    <span
      className={`revelation-badge inline-flex shrink-0 items-center font-semibold uppercase ${sizeClasses} ${
        isMakkiyah ? "revelation-badge-makkiyah" : "revelation-badge-madaniyah"
      }`}
    >
      <span
        className={`rounded-full ${dotSize} ${
          isMakkiyah ? "bg-[var(--qurai-gold)]" : "bg-[var(--qurai-green)]"
        }`}
        aria-hidden
      />
      {isMakkiyah ? "Makkiyah" : "Madaniyah"}
    </span>
  );
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = searchParams ? await searchParams : undefined;
  const surah = params?.surah?.trim() ?? "";
  const ayat = params?.ayat?.trim() ?? "";
  const selectedSurahId = Number(surah);
  const selectedAyahNumber = Number(ayat);
  const hasSelectedSurah = Number.isFinite(selectedSurahId) && selectedSurahId > 0;
  const hasSelectedAyah = Number.isFinite(selectedAyahNumber) && selectedAyahNumber > 0;
  let surahs: SurahListItem[];
  let ayahOptions: VerseRecord[] = [];
  let surahStats = [];
  try {
    [surahs, ayahOptions, surahStats] = await Promise.all([
      getSurahs(),
      hasSelectedSurah ? getVersesBySurahId(selectedSurahId) : Promise.resolve([]),
      getSurahsStats(),
    ]);
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  if (hasSelectedSurah && hasSelectedAyah) {
    const matchedVerse = ayahOptions.find((item) => item.ayahNumber === selectedAyahNumber);
    if (matchedVerse) {
      redirect(`/ayat/${matchedVerse.id}`);
    }
  }

  if (hasSelectedSurah && !hasSelectedAyah) {
    redirect(`/surat/${selectedSurahId}`);
  }

  return (
    <main className="qurai-shell flex min-h-screen flex-col px-4 py-5 text-[var(--qurai-text)] sm:px-6 sm:py-8 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4">
        <section className="px-1 pt-1">
          <div className="flex items-start justify-between gap-4">
            <div className="w-[68px]" aria-hidden="true" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <NavLink href="/about" aria-label="Tentang Qurai">
                <div className="relative block h-[72px] w-[260px] drop-shadow-[0_24px_58px_rgba(46,176,62,0.16)] sm:h-[88px] sm:w-[320px]">
                  <ThemedWordmark
                    priority
                    sizes="(max-width: 640px) 260px, 320px"
                    className="object-contain"
                  />
                </div>
              </NavLink>
            </div>
            <ThemeToggle />
          </div>
        </section>

        <HomeClientWrapper
          selectedSurah={hasSelectedSurah ? String(selectedSurahId) : ""}
          selectedAyat={hasSelectedAyah ? String(selectedAyahNumber) : ""}
          surahs={surahs.map((surah) => ({
            id: surah.id,
            nameLatin: surah.nameLatin,
            meaning: surah.meaning,
          }))}
          surahStats={surahStats}
          list={
            <div className="divide-y divide-[var(--qurai-border)]">
              {surahs.map((surah) => {
                const kind = classifyRevelation(surah.revelationPlace);
                return (
                  <NavLink
                    key={surah.id}
                    href={`/surat/${surah.id}`}
                    className="block px-4 py-3 transition hover:bg-[color-mix(in_srgb,var(--qurai-green)_10%,transparent)] sm:px-5"
                  >
                    <div className="hidden grid-cols-[64px_minmax(0,1fr)_minmax(140px,auto)] items-center gap-4 md:grid">
                      <span className="font-mono text-sm font-semibold text-[var(--qurai-quiet)]">
                        {surah.id}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-lg font-semibold text-[var(--qurai-text)]">
                          {surah.nameLatin}
                          <span className="ml-1 text-sm font-normal text-[var(--qurai-muted)]">
                            ({surah.meaning})
                          </span>
                        </p>
                        <div className="mt-0.5 flex items-center gap-2">
                          {kind ? <RevelationBadge kind={kind} size="sm" /> : null}
                          <span className="text-sm text-[var(--qurai-muted)]">{surah.verseCount} ayat</span>
                        </div>
                      </div>
                      <div className="min-w-0 text-right">
                        <p className="qurai-arabic-text font-arabic truncate text-3xl">
                          {surah.nameArabic}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 md:hidden">
                      <span className="w-7 shrink-0 font-mono text-sm font-semibold text-[var(--qurai-quiet)]">
                        {surah.id}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-semibold text-[var(--qurai-text)]">
                          {surah.nameLatin}
                          <span className="ml-1 text-xs font-normal text-[var(--qurai-muted)]">
                            ({surah.meaning})
                          </span>
                        </p>
                        <div className="mt-0.5 flex items-center gap-2">
                          {kind ? <RevelationBadge kind={kind} size="sm" /> : null}
                          <span className="text-xs text-[var(--qurai-muted)]">{surah.verseCount} ayat</span>
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="qurai-arabic-text font-arabic truncate text-3xl">
                          {surah.nameArabic}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          }
        />

        <div className="mt-auto">
          <HomeFooter />
        </div>
      </div>
    </main>
  );
}
