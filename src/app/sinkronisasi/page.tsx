import Link from "next/link";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { getDatabaseErrorInfo } from "@/lib/db";
import { getSyncOverview } from "@/lib/excel-sync";
import { SyncForm } from "./sync-form";

export const metadata = {
  title: "Sinkronisasi Excel | Qurai",
};

function formatDate(value: string | null) {
  if (!value) {
    return "Tidak diketahui";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function SyncPage() {
  let overview;

  try {
    overview = await getSyncOverview();
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  return (
    <main className="qurai-page px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        <section className="qurai-hero rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="qurai-label">
                Sinkronisasi
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Perbarui database dari file Excel
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--qurai-muted)] sm:text-base">
                Alurnya sekarang sederhana: edit file Excel, lalu klik tombol sinkronisasi ini untuk mengirim perubahan ke Supabase.
              </p>
            </div>
            <Link href="/" className="text-sm font-semibold text-[var(--qurai-green)]">
              Kembali ke beranda
            </Link>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="qurai-card rounded-[2rem] p-6">
            <p className="qurai-label text-[var(--qurai-gold)]">
              Sumber Data
            </p>
            <div className="mt-5 space-y-4">
              <div className="qurai-muted-card rounded-[1.25rem] p-4">
                <p className="text-sm text-[var(--qurai-muted)]">Nama file</p>
                <p className="mt-1 text-lg font-semibold text-[var(--qurai-text)]">
                  {overview.excelFileName}
                </p>
              </div>
              <div className="qurai-muted-card rounded-[1.25rem] p-4">
                <p className="text-sm text-[var(--qurai-muted)]">Lokasi file</p>
                <p className="mt-1 break-all text-sm leading-7 text-[var(--qurai-text)]">
                  {overview.excelPath}
                </p>
              </div>
              <div className="qurai-muted-card rounded-[1.25rem] p-4">
                <p className="text-sm text-[var(--qurai-muted)]">Terakhir diubah</p>
                <p className="mt-1 text-lg font-semibold text-[var(--qurai-text)]">
                  {formatDate(overview.excelUpdatedAt)}
                </p>
              </div>
            </div>
          </div>

          <div className="qurai-card rounded-[2rem] p-6">
            <p className="qurai-label">
              Database
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-[var(--qurai-border-strong)] bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] p-4">
                <p className="text-sm text-[var(--qurai-muted)]">Surat aktif</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--qurai-green)]">
                  {overview.databaseSurahCount}
                </p>
              </div>
              <div className="rounded-[1.25rem] border border-[var(--qurai-border-strong)] bg-[color-mix(in_srgb,var(--qurai-green)_12%,transparent)] p-4">
                <p className="text-sm text-[var(--qurai-muted)]">Ayat aktif</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--qurai-green)]">
                  {overview.databaseVerseCount}
                </p>
              </div>
            </div>

            <div className="qurai-muted-card mt-6 rounded-[1.5rem] p-5">
              <p className="text-sm leading-7 text-[var(--qurai-muted)]">
                Klik tombol di bawah setiap kali kamu selesai mengedit file Excel.
                Proses ini akan mengganti isi tabel surat, ayat, dan analisis dengan versi terbaru dari file itu.
              </p>
              <div className="mt-5">
                <SyncForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
