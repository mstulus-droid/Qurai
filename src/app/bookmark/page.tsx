import { NavLink } from "@/components/nav-link";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { getDatabaseErrorInfo } from "@/lib/db";
import { getBookmarks } from "@/lib/quran-data";
import { getCurrentUserId } from "@/lib/supabase/server";

export const metadata = {
  title: "Bookmark | Qurai",
};

export default async function BookmarkPage() {
  const userId = await getCurrentUserId();
  let bookmarks;

  try {
    bookmarks = userId ? await getBookmarks(userId) : [];
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  return (
    <main className="qurai-page px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-5">
        <section className="qurai-hero rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="qurai-label">
                Bookmark
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Ayat-ayat yang kamu simpan
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--qurai-muted)] sm:text-base">
                Kembali ke ayat yang pernah kamu tandai tanpa perlu mengulang pencarian dari awal.
              </p>
            </div>
            <NavLink
              href={userId ? "/" : "/auth/login?next=/bookmark"}
              className="qurai-control inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold"
            >
              {userId ? "Kembali ke beranda" : "Login Google"}
            </NavLink>
          </div>
        </section>

        <section className="qurai-card rounded-[2rem] p-5 sm:p-8">
          <div className="qurai-muted-card mb-5 rounded-[1.25rem] px-4 py-3 text-sm">
            {bookmarks.length > 0
              ? `${bookmarks.length} ayat tersimpan di bookmark.`
              : userId
                ? "Belum ada bookmark. Buka detail ayat lalu simpan bookmark dari sana."
                : "Login Google untuk melihat bookmark lintas device milikmu."}
          </div>

          <div className="grid gap-4">
            {bookmarks.map((bookmark) => (
              <NavLink
                key={bookmark.id}
                href={`/ayat/${bookmark.id}`}
                className="qurai-reading-card block rounded-[1.5rem] p-4 transition hover:border-[var(--qurai-border-strong)] sm:p-5"
              >
                <p className="text-sm font-semibold text-[var(--qurai-muted)]">
                  {bookmark.surahNameIndonesian} • Ayat {bookmark.ayahNumber}
                </p>
                <p className="qurai-arabic-text font-arabic mt-3 text-right text-2xl leading-[1.9] sm:text-3xl">
                  {bookmark.arabicText}
                </p>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
