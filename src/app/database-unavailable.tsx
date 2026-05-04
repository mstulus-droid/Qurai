import Link from "next/link";

type DatabaseUnavailableProps = {
  title: string;
  summary: string;
  detail: string;
};

export function DatabaseUnavailable({
  title,
  summary,
  detail,
}: DatabaseUnavailableProps) {
  return (
    <main className="qurai-page px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-5">
        <section className="qurai-card rounded-[2rem] p-6 backdrop-blur sm:p-8">
          <p className="qurai-label text-[var(--qurai-gold)]">
            Qurai Dev Notice
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--qurai-text)] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--qurai-muted)] sm:text-lg">
            {summary}
          </p>

          <div className="qurai-reading-card mt-6 rounded-[1.5rem] p-5 text-sm leading-7">
            <p className="font-semibold text-[var(--qurai-text)]">Detail runtime</p>
            <p className="mt-2 break-words text-[var(--qurai-muted)]">{detail}</p>
          </div>

          <div className="qurai-muted-card mt-6 rounded-[1.5rem] p-5">
            <p className="qurai-label">
              Yang perlu dicek
            </p>
            <div className="mt-3 space-y-2 text-sm leading-7 text-[var(--qurai-muted)]">
              <p>1. Kalau pakai Supabase, `DATABASE_URL` harus ke host `.pooler.supabase.com` dengan port `6543`, bukan `5432`.</p>
              <p>2. Pastikan `DATABASE_POOL_MAX=1` ada di environment yang sedang dipakai aplikasi.</p>
              <p>3. Kalau ini terjadi di website online, ubah Environment Variables di Vercel lalu redeploy.</p>
              <p>4. Setelah `.env.local` diubah, restart `npm run dev`.</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="qurai-control-active inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
            >
              Coba buka beranda
            </Link>
            <Link
              href="/sinkronisasi"
              className="qurai-control inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
            >
              Buka halaman sinkronisasi
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
