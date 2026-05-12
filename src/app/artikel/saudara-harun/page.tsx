/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { NarasiAlkitabSeriesNav, NarasiAlkitabSeriesOutro } from "@/components/narasi-alkitab-series-nav";

export const metadata: Metadata = {
  title: "Saudara Harun | Qurai",
  description:
    "Maryam 19:28 menyebut Maryam ibu Isa sebagai saudara perempuan Harun — saudara Musa yang hidup sekitar 1300 tahun sebelumnya. Taha 20:85 menyebut Al-Samiri, nama yang berasal dari wilayah yang belum ada di masa Musa. At-Taubah 9:30 mengaitkan keyakinan kepada kelompok yang tidak memiliki keyakinan itu.",
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

export default function SaudaraHarunArticle() {
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
          <NarasiAlkitabSeriesNav current={2} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Maryam 19:28 · Taha 20:85 · At-Taubah 9:30 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Saudara Harun
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Ada nama-nama dalam Al-Quran yang tidak cocok dengan waktunya.
            Maryam disebut saudara orang yang hidup tiga belas abad
            sebelumnya. Al-Samiri menyandang nama dari wilayah yang belum
            ada. Keyakinan dikaitkan kepada kelompok yang tidak memilikinya.
          </p>
        </header>

        <ArticleAudio slug="saudara-harun" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Bagian kedua dari seri ini bergerak dari kasus kisah yang berubah
            ke kasus yang berbeda: nama dan referensi yang tidak bisa ada di
            zamannya. Bukan karena Al-Quran salah menceritakan kejadian, tapi
            karena nama-nama yang dipakai membawa beban kronologis yang tidak
            bisa diabaikan.
          </p>

          <p>
            <VerseLink surah={19} ayat={28}>Maryam 19:28</VerseLink> mencatat
            penduduk yang menegur Maryam setelah kelahiran Isa:{" "}
            <em>ya ukhta Harun</em>, wahai saudara perempuan Harun. Harun
            yang mana? Al-Quran hanya mengenal satu Harun yang menonjol:
            saudara Musa, yang hidup sekitar 1200 SM. Maryam ibu Isa hidup
            di awal abad pertama masehi. Selisihnya sekitar tiga belas abad.
          </p>

          <p>
            Pertanyaan itu pernah diajukan secara langsung. Catatan dalam
            Sunan Abu Dawud menceritakan Mughirah bin Syu'bah, yang ditanya
            oleh orang-orang Najran tentang ayat ini. Ia tidak bisa menjawab,
            lalu bertanya kepada Muhammad. Jawabannya: orang-orang dulu
            menamai anak-anak mereka dengan nama nabi dan orang-orang saleh.
          </p>

          <p>
            Itu penjelasan untuk kebiasaan pemberian nama. Bukan penjelasan
            mengapa Al-Quran menyebut Maryam sebagai <em>ukhta Harun</em>{" "}
            seolah keduanya hidup sezaman, tanpa kualifikasi apapun yang
            membedakan Harun ini dari Harun saudara Musa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Nama yang tidak bisa ada
          </h2>

          <p>
            <VerseLink surah={20} ayat={85}>Taha 20:85</VerseLink> menyebut
            Al-Samiri sebagai orang yang membuat patung anak sapi saat Musa
            pergi ke bukit.{" "}
            <VerseLink surah={20} ayat={95}>Taha 20:95</VerseLink> mencatat
            Musa menghadapinya langsung: "Apa urusanmu, wahai Samiri?"
          </p>

          <p>
            Al-Samiri. Nama itu berasal dari akar kata yang sama dengan
            Samaria.
          </p>

          <p>
            Samaria sebagai wilayah baru muncul sekitar 880 SM, ketika raja
            Omri membangunnya sebagai ibu kota kerajaan Israel utara. Itu
            sekitar tiga sampai lima abad setelah masa Musa, tergantung
            dari penghitungan kronologi mana yang dipakai.
          </p>

          <p>
            Seorang "orang Samari" di masa Musa adalah kemustahilan historis
            karena Samaria belum ada. Para mufasir klasik menyadari masalah
            ini. Beberapa menafsirkan Al-Samiri bukan sebagai identitas etnis
            tapi sebagai nama pribadi. Beberapa lain membiarkannya tanpa
            komentar. Tapi nama itu ada di dalam ayat, dan nama itu berasal
            dari satu tempat yang tidak bisa ada di masa itu.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Klaim yang tidak terdokumentasikan
          </h2>

          <p>
            <VerseLink surah={9} ayat={30}>At-Taubah 9:30</VerseLink>{" "}
            menyatakan bahwa orang-orang Yahudi berkata Uzair adalah putra
            Allah.
          </p>

          <p>
            Tidak ada catatan tentang keyakinan ini dalam literatur Yahudi
            manapun. Uzair — Ezra dalam sebutan yang lebih dikenal — memang
            dihormati tinggi dalam tradisi Yahudi. Ia dianggap sebagai sosok
            yang memulihkan Taurat setelah pembuangan di Babilonia, dan
            penghormatan itu cukup besar sehingga sebagian riwayat Yahudi
            menyatakan kalau Musa tidak ada, Ezra yang layak menerima Taurat.
          </p>

          <p>
            Tapi penghormatan itu tidak pernah berkembang menjadi klaim
            keilahian. Tidak ada naskah Yahudi, baik yang ditulis sebelum
            maupun sesudah abad ke-7, yang mencatat bahwa Uzair dianggap
            putra Allah.
          </p>

          <p>
            Ayat itu mengaitkan sebuah keyakinan kepada kelompok yang tidak
            mempunyai keyakinan itu. Mungkin ada komunitas tertentu yang
            tidak tercatat yang memang punya pandangan seperti ini. Mungkin
            ini adalah salah pembacaan atas penghormatan Yahudi terhadap
            Ezra. Tapi tidak ada bukti untuk salah satunya.
          </p>
          <NarasiAlkitabSeriesOutro current={2} />
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 19, ayat: 28, label: "Maryam 28" },
                { surah: 20, ayat: 85, label: "Taha 85" },
                { surah: 20, ayat: 95, label: "Taha 95" },
                { surah: 20, ayat: 96, label: "Taha 96" },
                { surah: 9, ayat: 30, label: "At-Taubah 30" },
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

        <ArticleRecommendations currentSlug="saudara-harun" />
      </article>
    </main>
  );
}
