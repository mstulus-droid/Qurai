import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { bedahSuratItems } from "@/lib/bedah-surat";
import { getDatabaseErrorInfo } from "@/lib/db";
import { getSurahs } from "@/lib/quran-data";
import { BedahSuratClient } from "./bedah-surat-client";

export const metadata: Metadata = {
  title: "Bedah Surat | Qurai",
  description:
    "Seri pembacaan kritis per surat: isi utama, konteks turunnya, pola argumen, dan pertanyaan yang muncul dari teks.",
  alternates: {
    canonical: "/bedah-surat",
  },
  openGraph: {
    title: "Bedah Surat | Qurai",
    description:
      "Seri pembacaan kritis per surat: isi utama, konteks turunnya, pola argumen, dan pertanyaan yang muncul dari teks.",
    url: "/bedah-surat",
    type: "website",
    images: ["/brand/qurai-app-icon-dark.png"],
  },
};

export default async function BedahSuratPage() {
  let surahs = [];

  try {
    surahs = await getSurahs();
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  return (
    <main className="qurai-page flex min-h-screen flex-col bg-fixed">
      <ArticleNav currentLabel="Bedah Surat" />

      <div className="mx-auto flex-1 w-[min(1120px,calc(100%_-_1.4rem))] px-0 pb-24 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-36">
        <div className="mb-12 sm:mb-14">
          <h1 className="font-serif-reading text-[2.4rem] italic leading-tight text-[var(--qurai-text)] sm:text-[3.2rem]">
            Bedah Surat
          </h1>
          <p className="mt-5 max-w-[58ch] text-sm leading-8 text-[var(--qurai-muted)]">
            Pembacaan satu surat sebagai bangunan gagasan: isi utama, pola
            argumen, konteks turunnya, dan pertanyaan yang muncul dari teks.
          </p>
        </div>

        <BedahSuratClient surahs={surahs} availableItems={bedahSuratItems} />
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
