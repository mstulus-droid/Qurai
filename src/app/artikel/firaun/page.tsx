/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleRecommendations } from "@/components/article-recommendations";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Satu Firaun, Tiga Ribu Tahun | Qurai",
  description:
    "Al-Quran menyebut Firaun lebih dari tujuh puluh kali sebagai nama pribadi, tapi Pharaoh adalah gelar untuk lebih dari tiga ratus penguasa Mesir selama tiga ribu tahun. Al-Qashash 28:38 menempatkan Haman sebagai pejabat istana Firaun, padahal nama itu berasal dari pejabat Persia sekitar seribu tahun lebih muda.",
  openGraph: {
    images: [
      {
        url: "/article-images/38-firaun-illustration.png",
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

export default function FiraunArticle() {
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
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Al-Qashash 28:38 · Yunus 10:92 &nbsp;·&nbsp; 7 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Satu Firaun, Tiga Ribu Tahun
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran memperlakukan "Firaun" sebagai nama pribadi, tapi Pharaoh
            adalah gelar untuk lebih dari tiga ratus penguasa Mesir. Haman,
            pejabat di istana Firaun dalam Al-Quran, adalah nama pejabat
            Persia dari seribu tahun kemudian.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/38-firaun-illustration.png"
            alt="Ilustrasi editorial relief hieroglif gelap dengan figur raja Mesir kuno yang misterius"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="firaun" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Al-Quran menyebut Firaun lebih dari tujuh puluh kali. Selalu
            "Firaun," tidak pernah "al-Firaun." Tidak pernah dengan gelar.
            Tidak pernah dengan nama pribadi. Selalu satu kata itu,
            diperlakukan sebagai nama orang.
          </p>

          <p>
            "Pharaoh" bukan nama orang. Ia gelar, setara dengan "Raja" atau
            "Kaisar," yang dipakai oleh lebih dari tiga ratus penguasa Mesir
            selama tiga ribu tahun lebih. Seperti menyebut "Caesar" seolah itu
            satu manusia yang memerintah Roma dari awal sampai akhir.
          </p>

          <p>
            Musa hidup, kalau kisahnya historis, di suatu titik dalam rentang
            panjang itu. Identitas firaun yang mana, dari dinasti mana, tidak
            diketahui bahkan oleh sejarawan modern setelah dua abad penggalian.
            Yang pasti: bukan satu orang bernama "Firaun."
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Haman di istana yang salah
          </h2>

          <p>
            <VerseLink surah={28} ayat={38}>Al-Qashash 28:38</VerseLink>{" "}
            menempatkan Haman sebagai pejabat di istana Firaun. Firaun
            memerintahnya membangun menara tinggi agar bisa naik dan melihat
            Tuhan Musa.
          </p>

          <p>
            Haman adalah nama pejabat Persia. Ia muncul dalam kitab Ester
            sebagai menteri Raja Ahasyweros (Xerxes I), dalam konteks
            Kekaisaran Akhemenid sekitar abad ke-5 SM. Itu sekitar seribu
            tahun setelah periode Musa yang paling konservatif pun.
          </p>

          <p>
            Tidak ada pejabat Mesir kuno yang bernama demikian dalam catatan
            yang tersedia dari mana pun. Yang ada adalah satu pejabat Persia
            dengan nama itu, dari era dan tempat yang berbeda sama sekali.
          </p>

          <p>
            Dua tokoh dari dua peradaban berbeda, dipisahkan hampir seribu
            tahun, muncul bersamaan di satu istana.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tubuh yang sudah ada di museum
          </h2>

          <p>
            <VerseLink surah={10} ayat={92}>Yunus 10:92</VerseLink> sering
            dikutip sebagai bukti keajaiban:{" "}
            <em>
              "Maka pada hari ini Kami selamatkan badanmu supaya kamu dapat
              menjadi pelajaran bagi orang-orang yang datang sesudahmu."
            </em>{" "}
            Argumennya: Al-Quran memprediksi mumi Firaun akan ditemukan,
            ribuan tahun sebelum arkeologi modern.
          </p>

          <p>
            Tapi pengawetan jenazah firaun bukan keajaiban dan bukan prediksi.
            Ini kebijakan negara Mesir yang berlangsung tiga ribu tahun. Semua
            firaun diawetkan, bukan hanya yang diklaim tenggelam. Ramesses II,
            yang sering disebut sebagai kandidat Firaun Musa, memiliki
            kandungan garam dalam tubuhnya karena proses mumifikasi
            menggunakan natron, garam alami Mesir. Bukan karena tenggelam.
          </p>

          <p>
            Tubuh yang "diselamatkan" itu sudah ada di museum Kairo jauh
            sebelum ayat itu dikaitkan dengannya.
          </p>

          <p>
            Tiga ribu tahun sejarah Mesir menghasilkan nama-nama yang
            terdokumentasi: Khufu, Thutmosis, Ramesses, Hatshepsut, Akhenaten.
            Ratusan nama, dari ratusan raja, dari puluhan dinasti.
          </p>

          <p>
            Al-Quran tidak menyebut satu pun dari mereka. Yang ada hanya
            "Firaun," satu nama untuk semuanya.
          </p>
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 28, ayat: 38, label: "Al-Qashash 38" },
                { surah: 10, ayat: 92, label: "Yunus 92" },
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

        <ArticleRecommendations currentSlug="firaun" />
      </article>
    </main>
  );
}
