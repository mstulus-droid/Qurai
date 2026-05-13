/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { NarasiAlkitabSeriesNav, NarasiAlkitabSeriesOutro } from "@/components/narasi-alkitab-series-nav";

export const metadata: Metadata = {
  title: "Luqman Sebelum Al-Quran | Qurai",
  description:
    "Luqman sudah terkenal di Arabia sebagai figur kebijaksanaan dari suku 'Ad, dengan koleksi peribahasa yang beredar luas, jauh sebelum Islam. Luqman 31:12-19 mengambil nama dan reputasinya, lalu mengisi ulang hikmahnya dengan konten yang sama sekali berbeda — tauhid dan ketaatan, bukan kebijaksanaan duniawi yang membuatnya terkenal.",
  openGraph: {
    images: [
      {
        url: "/article-images/42-luqman-sebelum-al-quran-illustration.png",
        width: 1672,
        height: 941,
      },
    ],
  },
};

function VerseLink({
  surah,
  ayat,
  children,
}: {
  surah: number;
  ayat: number;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/surat/${surah}#ayat-${ayat}`}
      target="_blank"
      rel="noopener noreferrer"
      className="border-b border-[var(--qurai-gold)] text-[var(--qurai-gold)] opacity-80 transition hover:opacity-100"
    >
      {children}
    </Link>
  );
}

export default function LuqmanSebelumAlQuranArticle() {
  return (
    <main className="qurai-page min-h-screen bg-fixed">
      <ArticleNav backHref="/artikel" backLabel="Artikel" />

      <article className="mx-auto w-[min(740px,calc(100%_-_1.4rem))] pb-32 pt-32 sm:w-[min(740px,calc(100%_-_2rem))] sm:pt-40">
        <header className="mb-14">
          <Link
            href="/artikel"
            className="mb-8 inline-block font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] transition hover:text-[var(--qurai-gold)]"
          >
            ← Artikel
          </Link>
          <NarasiAlkitabSeriesNav current={4} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Luqman 31:12 · 31:13 &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Luqman Sebelum Al-Quran
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Luqman bukan tokoh baru ketika namanya muncul di surah ke-31. Ia
            sudah dikenal luas di Arabia sebagai ahli hikmah legendaris.
            Al-Quran mengambil nama dan reputasi itu, lalu mengisi ulang
            hikmahnya dengan konten yang berbeda.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/42-luqman-sebelum-al-quran-illustration.png"
            alt="Ilustrasi editorial kursi hikmah kosong dengan tablet peribahasa dan kafilah di kejauhan"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="luqman-sebelum-al-quran" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Bagian keempat dan terakhir dari seri ini berbeda dari tiga
            sebelumnya.
          </p>

          <p>
            Tiga bagian sebelumnya memeriksa kisah yang bergerak dan berubah:
            detail baru yang muncul dalam narasi lama, nama-nama yang salah
            zaman, unsur-unsur yang bisa dilacak ke naskah yang beredar di
            Arabia. Pola itu tentang konten yang berpindah. Bagian ini
            tentang sesuatu yang lain: figur yang sudah ada, sudah punya
            nama dan reputasi, lalu diambil dan diisi ulang.
          </p>

          <p>
            Luqman bukan tokoh baru ketika namanya muncul di{" "}
            <VerseLink surah={31} ayat={12}>Luqman 31:12</VerseLink>. Ia
            sudah dikenal luas di Arabia sebagai figur kebijaksanaan
            legendaris, dikaitkan dengan suku 'Ad yang hidup di masa lampau
            yang jauh. Ada koleksi ucapannya yang beredar luas, disebut
            Amthal Luqman, kumpulan peribahasa yang dikaitkan kepadanya dan
            dikenal oleh orang-orang Arab jauh sebelum Islam.
          </p>

          <p>
            Beberapa peneliti juga membandingkan cerita-cerita tentang Luqman
            dengan fabel-fabel Aesop dan menemukan kesamaan yang mencolok.
            Ada kemungkinan kedua tradisi ini datang dari sumber kebijaksanaan
            yang lebih tua yang beredar di kawasan yang sama — Arabia, Persia,
            dan Mediterania — dan berkembang menjadi dua koleksi berbeda yang
            masing-masing dikaitkan dengan satu figur terkenal.
          </p>

          <p>
            Yang pasti: Luqman yang beredar di Arabia sebelum Islam adalah
            figur kebijaksanaan duniawi. Nasihat-nasihatnya tentang
            kehidupan, tentang cara menghadapi manusia, tentang sabar
            menunggu waktu yang tepat, tentang mengenali kawan yang setia.
            Bukan tentang teologi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Isi yang berbeda
          </h2>

          <p>
            <VerseLink surah={31} ayat={12}>Luqman 31:12</VerseLink>{" "}
            menyebutkan Allah memberikan hikmah kepada Luqman, dan hikmah itu
            adalah rasa syukur kepada Allah. Hikmah pertama yang Luqman
            sampaikan kepada anaknya, dicatat dalam{" "}
            <VerseLink surah={31} ayat={13}>31:13</VerseLink>: jangan
            menyekutukan Allah. Itu adalah kezaliman yang besar. Kemudian
            berlanjut ke{" "}
            <VerseLink surah={31} ayat={14}>31:14</VerseLink> tentang
            berbuat baik kepada orang tua,{" "}
            <VerseLink surah={31} ayat={18}>31:18</VerseLink> tentang tidak
            berjalan dengan angkuh, dan{" "}
            <VerseLink surah={31} ayat={19}>31:19</VerseLink> tentang
            merendahkan suara.
          </p>

          <p>
            Semua nasihat itu berputar pada monoteisme dan ketaatan kepada
            Allah. Kebijaksanaan yang dikenal dari Luqman — tentang
            kehidupan praktis, tentang cara bertahan dan membaca situasi —
            tidak ada di sini.
          </p>

          <p>
            Al-Quran mempertahankan nama Luqman. Mempertahankan bingkai
            bahwa ia adalah penerima hikmah, bahwa ia menyampaikan hikmah
            itu kepada anaknya. Tapi isi hikmahnya diganti sepenuhnya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Cara narasi bekerja
          </h2>

          <p>
            Mengapa nama Luqman dipertahankan?
          </p>

          <p>
            Karena nama itu sudah membawa bobot. Ketika Al-Quran menyebut
            Luqman, pendengar abad ke-7 di Arabia sudah punya gambaran:
            figur bijaksana, dihormati, ahli dalam kebenaran. Reputasi itu
            sudah ada dan tidak perlu dibangun dari nol. Yang dilakukan
            kemudian adalah mengisi figur yang sudah dipercaya itu dengan
            konten baru.
          </p>

          <p>
            Ini adalah cara narasi bekerja ketika bergerak melalui
            komunitas-komunitas yang berbeda. Nama-nama yang sudah dikenal
            dipertahankan karena nama-nama itu membuka pintu. Maryam sudah
            dikenal. Isa sudah dikenal. Ibrahim sudah dikenal. Luqman sudah
            dikenal. Semua nama itu sudah beredar di Arabia dengan makna
            dan bobot masing-masing sebelum Al-Quran datang.
          </p>

          <p>
            Empat bagian dari seri ini memeriksa empat pola yang berbeda.
            Kisah baru yang masuk ke dalam narasi yang sudah ada. Nama yang
            membawa kronologi yang mustahil. Detail yang bisa dilacak ke
            naskah yang beredar di komunitas-komunitas tertentu. Dan figur
            yang sudah punya reputasi, lalu diisi ulang dengan bingkai baru.
          </p>

          <p>
            Keempat pola itu adalah ciri khas cerita yang bergerak melalui
            komunitas-komunitas yang membawa pengetahuan parsial mereka
            sendiri, keperluan teologis mereka sendiri, dan nama-nama yang
            sudah mereka percaya.
          </p>
          <NarasiAlkitabSeriesOutro current={4} />
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 31, ayat: 12, label: "Luqman 12" },
                { surah: 31, ayat: 13, label: "Luqman 13" },
                { surah: 31, ayat: 14, label: "Luqman 14" },
                { surah: 31, ayat: 18, label: "Luqman 18" },
                { surah: 31, ayat: 19, label: "Luqman 19" },
              ].map(({ surah, ayat, label }) => (
                <Link
                  key={`${surah}-${ayat}`}
                  href={`/surat/${surah}#ayat-${ayat}`}
                  className="border border-[color-mix(in_srgb,var(--qurai-gold)_30%,transparent)] bg-[color-mix(in_srgb,var(--qurai-gold)_6%,transparent)] px-3 py-1.5 font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_12%,transparent)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/artikel"
            className="font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] transition hover:text-[var(--qurai-gold)]"
          >
            ← Semua artikel
          </Link>
        </footer>

        <ArticleShare />

        <ArticleRecommendations currentSlug="luqman-sebelum-al-quran" />
      </article>
    </main>
  );
}
