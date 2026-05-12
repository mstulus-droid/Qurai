/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { NarasiAlkitabSeriesNav, NarasiAlkitabSeriesOutro } from "@/components/narasi-alkitab-series-nav";

export const metadata: Metadata = {
  title: "Ya Bunayya | Qurai",
  description:
    "Hud 11:42 menceritakan anak Nuh yang menolak naik kapal dan tenggelam. Namanya tidak disebut. Ibn Katsir menyebutnya Kanaan, At-Tabari menyebutnya Yam. Dalam kisah banjir yang lebih tua, anak seperti ini tidak ada sama sekali. Al-Baqarah 2:247-249 menggabungkan cara seleksi prajurit Gideon dengan kisah Talut dan Jalut menjadi satu narasi.",
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

export default function YaBunayyaArticle() {
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
          <NarasiAlkitabSeriesNav current={1} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Hud 11:42 · Yunus 10:92 · Al-Baqarah 2:247 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Ya Bunayya
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran memperkenalkan karakter baru ke dalam kisah-kisah yang
            sudah beredar — anak Nuh yang tidak ada dalam narasi sebelumnya,
            detail Firaun yang tidak ada di tempat lain, cara seleksi prajurit
            dari satu kisah yang masuk ke kisah lain.
          </p>
        </header>

        <ArticleAudio slug="ya-bunayya" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Seri ini memeriksa kisah-kisah dalam Al-Quran yang punya
            versi lebih tua — dan melihat apa yang berbeda. Bukan untuk
            menentukan mana yang benar, tapi untuk memeriksa bagaimana
            narasi bergerak dan berubah ketika berpindah dari satu komunitas
            ke komunitas lain. Bagian pertama: tiga kasus di mana Al-Quran
            memperkenalkan detail yang tidak ada dalam kisah yang lebih tua.
          </p>

          <p>
            <VerseLink surah={11} ayat={42}>Hud 11:42</VerseLink> mencatat
            momen itu: Nuh memanggil anaknya dari jauh, menyebutnya{" "}
            <em>ya bunayya</em>, wahai anakku, dan memintanya naik kapal.
            Anaknya menjawab ia akan berlindung ke gunung. Gelombang
            memisahkan mereka.{" "}
            <VerseLink surah={11} ayat={43}>Hud 11:43</VerseLink> mencatat
            ia tenggelam bersama yang lain.
          </p>

          <p>
            Yang disebut hanya <em>ya bunayya</em>. Tidak ada nama.
          </p>

          <p>
            Dan ternyata para mufasir pun tidak sepakat. Ibn Katsir
            menyebutnya Kanaan. At-Tabari menyebutnya Yam. Dua nama berbeda
            dari dua otoritas berbeda, tanpa dasar dalam kisah yang lebih tua.
          </p>

          <p>
            Karena dalam kisah banjir Nuh yang lebih tua, anak seperti ini
            tidak ada. Di sana ada tiga anak Nuh yang masuk ke kapal, semuanya
            selamat. Tidak ada yang ditinggal, tidak ada yang menolak, tidak
            ada dialog di tepi air saat banjir datang.
          </p>

          <p>
            Al-Quran memperkenalkan karakter baru ke dalam kisah. Karakter
            itu tidak punya nama, dan para mufasir yang paling otoritatif pun
            tidak tahu harus mengisinya dengan apa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Jasad yang dijaga
          </h2>

          <p>
            <VerseLink surah={10} ayat={92}>Yunus 10:92</VerseLink> menyatakan
            Allah menyelamatkan tubuh Firaun: "Kami selamatkan badanmu hari
            ini agar kamu menjadi pelajaran bagi orang-orang yang datang
            sesudahmu."
          </p>

          <p>
            Tidak ada kisah Musa yang lebih tua yang menyebut ini. Dalam
            narasi yang beredar sebelumnya, Firaun tenggelam — itu akhirnya.
            Tidak ada keterangan tentang jasad yang diselamatkan, tidak ada
            fungsi jasad itu sebagai tanda bagi generasi mendatang.
          </p>

          <p>
            Al-Quran menambahkan detail ini tanpa konteks lebih lanjut. Untuk
            siapa jasad itu menjadi pelajaran? Kapan? Frasa "orang-orang yang
            datang sesudahmu" dibiarkan mengapung tanpa referensi yang bisa
            dipegang.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua kisah yang menjadi satu
          </h2>

          <p>
            <VerseLink surah={2} ayat={247}>Al-Baqarah 2:247</VerseLink>{" "}
            memperkenalkan Talut: seorang yang dipilih Allah sebagai raja
            karena kekuatan fisik dan ilmu yang diberikan kepadanya. Kaum
            Israel keberatan. Talut tetap menjadi raja dan memimpin pasukan
            melawan Jalut.
          </p>

          <p>
            <VerseLink surah={2} ayat={249}>Al-Baqarah 2:249</VerseLink>{" "}
            menceritakan cara memilih prajurit: mereka yang minum air sungai
            langsung dengan mulut tidak boleh ikut, mereka yang mengambil
            dengan telapak tangan boleh. Hampir persis cara Gideon memilih
            tiga ratus prajuritnya dalam kisah yang lebih tua — hanya saja
            dalam versi itu yang melanjutkan perjalanan justru yang minum
            dengan cara tertentu, bukan yang ditolak.
          </p>

          <p>
            Kisah Gideon adalah kisah seorang hakim Israel yang diperintahkan
            Allah memilih pasukan kecil melawan musuh yang jauh lebih besar.
            Kisah Talut adalah kisah raja pertama Israel yang menghadapi Jalut
            — dan Jalut kemudian dibunuh bukan oleh Talut, tapi oleh Dawud.
            Dalam kisah yang lebih tua, ini adalah dua kisah dari dua tokoh
            berbeda di dua zaman berbeda.
          </p>

          <p>
            Dalam Al-Baqarah, cara seleksi dari satu kisah masuk ke dalam
            kisah lain, dan keduanya mengalir menjadi satu narasi tanpa jeda.
          </p>
          <NarasiAlkitabSeriesOutro current={1} />
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 11, ayat: 42, label: "Hud 42" },
                { surah: 11, ayat: 43, label: "Hud 43" },
                { surah: 10, ayat: 92, label: "Yunus 92" },
                { surah: 2, ayat: 247, label: "Al-Baqarah 247" },
                { surah: 2, ayat: 249, label: "Al-Baqarah 249" },
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

        <ArticleRecommendations currentSlug="ya-bunayya" />
      </article>
    </main>
  );
}
