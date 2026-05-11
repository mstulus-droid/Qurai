/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Ketika Langit Masih Asap | Qurai",
  description:
    "Al-Fussilat 41:9-12 menempatkan bumi selesai diciptakan sebelum langit dan bintang-bintang ada. Masalahnya: bumi tersusun dari elemen berat yang hanya bisa terbentuk di dalam inti bintang. Tanpa bintang terlebih dahulu, tidak ada material untuk membentuk planet sama sekali.",
  openGraph: {
    images: [
      {
        url: "/article-images/25-ketika-langit-masih-asap-illustration.png",
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

export default function KetikaLangitMasihAsapArticle() {
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
            Fussilat 41:9 · Al-Baqarah 2:29 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Ketika Langit Masih Asap
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Fussilat 41:11 menyebut langit dalam keadaan "asap" setelah
            bumi selesai diciptakan dan dilengkapi. Komentator modern membaca
            ini sebagai petunjuk nebula primordial. Tapi justru bacaan itu yang
            membuat masalah kronologisnya paling tajam.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/25-ketika-langit-masih-asap-illustration.png"
            alt="Ilustrasi editorial bumi purba di bawah langit kosmik berasap"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={41} ayat={9}>
              Al-Fussilat 41:9–10
            </VerseLink>{" "}
            menceritakan penciptaan bumi dalam dua hari, lengkap dengan
            gunung-gunung yang dipancangkan dan "makanan" yang disiapkan di
            dalamnya, empat hari total. Baru setelah itu, ayat{" "}
            <VerseLink surah={41} ayat={11}>
              11
            </VerseLink>{" "}
            beralih: "Kemudian Dia menuju ke langit yang masih berupa asap."
            Langit itu kemudian dibentuk menjadi tujuh lapis dan dihiasi
            "lampu-lampu" — yang dalam tradisi tafsir selalu dipahami sebagai
            bintang-bintang.
          </p>

          <p>
            <VerseLink surah={2} ayat={29}>
              Al-Baqarah 2:29
            </VerseLink>{" "}
            mengulang urutannya dengan lebih singkat: bumi untuk kamu, kemudian
            Dia menuju ke langit.
          </p>

          <p>
            Urutan itu konsisten di kedua ayat. Bumi lebih dulu. Langit dan
            bintang-bintang belakangan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kimia yang tidak bisa diabaikan
          </h2>

          <p>
            Sesaat setelah Big Bang, alam semesta hanya terdiri dari hidrogen,
            helium, dan sejumlah sangat kecil litium. Besi, silikon, oksigen,
            karbon, nikel, magnesium — tidak satu pun yang tersedia. Elemen-
            elemen berat terbentuk di dalam inti bintang melalui fusi nuklir.
            Ketika bintang-bintang besar kehabisan bahan bakar dan meledak
            dalam supernova, elemen-elemen itu tersebar ke ruang angkasa. Dari
            debu supernova itulah planet-planet, termasuk bumi, kemudian
            mengeras.
          </p>

          <p>
            Bumi tersusun dari elemen-elemen berat itu. Inti besi dan nikel.
            Mantel silikon dan oksigen. Kerak yang penuh dengan aluminium,
            kalsium, sodium. Semuanya produk bintang.
          </p>

          <p>
            Kalau bintang belum ada ketika bumi dibentuk, tidak ada material
            untuk membentuk bumi. Tidak ada gunung. Tidak ada makanan. Tidak
            ada planet sama sekali.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua akun yang berbeda
          </h2>

          <p>
            <VerseLink surah={79} ayat={27}>
              An-Nazi'at 79:27–30
            </VerseLink>{" "}
            menyajikan urutan yang tampak terbalik dari Q 41. Teks berkata:
            Allah membangun dan meninggikan langit, menyempurnakannya,
            menggelapkan malamnya, dan mengeluarkan cahayanya. Setelah itu
            (ba'da dzalika) bumi dihamparkan.
          </p>

          <p>
            Para komentator klasik sudah lama menangani ketegangan antara dua
            urutan ini. Harmonisasi yang paling umum: Q 79:30 berbicara soal
            penghamparannya, menjadikannya layak huni, bukan soal penciptaan
            awalnya. Penciptaan materi bumi lebih dulu, baru penyelesaiannya
            setelah langit.
          </p>

          <p>
            Harmonisasi itu bisa dipertahankan secara tekstual. Tapi ia tidak
            menyelesaikan masalah yang lebih mendasar. Bahkan kalau yang
            dimaksud hanya "penghamparannya," bumi dalam bentuk apapun tetap
            membutuhkan elemen berat yang hanya bisa ada setelah generasi
            pertama bintang meledak. Menggeser terminologi dari "diciptakan" ke
            "dihamparkan" tidak mengubah kimia yang dibutuhkan.
          </p>

          <p>
            <VerseLink surah={21} ayat={30}>
              Al-Anbiya 21:30
            </VerseLink>{" "}
            menambahkan satu detail lagi: langit dan bumi awalnya menyatu,
            lalu dipisahkan. Air dijadikan dasar segala yang hidup. Teks itu
            sering dikutip sebagai petunjuk Big Bang. Tapi kalau Big Bang
            adalah acuannya, kronologi Q 41 justru berlawanan dengan
            kosmologi yang sama: dalam Big Bang, bintang-bintang ada jauh
            sebelum planet berbatu seperti bumi terbentuk.
          </p>

          <p>
            Komentator modern yang membaca "dukhan" di Q 41:11 sebagai nebula
            primordial secara tidak sengaja membuat masalah kronologisnya
            semakin tajam. Dalam teori nebula, awan gas adalah yang pertama ada.
            Dari nebula bintang-bintang terbentuk, dari sisa materialnya
            planet-planet terbentuk, bumi adalah produk akhir. Tapi dalam Q 41,
            "dukhan" muncul setelah bumi sudah selesai diciptakan dan
            dilengkapi. Kalau "dukhan" memang nebula primordial, teks itu
            menempatkan nebula setelah produk akhirnya sudah ada.
          </p>
        </div>

        <ArticleShare />

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 41, ayat: 9, label: "Fussilat 9" },
                { surah: 2, ayat: 29, label: "Al-Baqarah 29" },
                { surah: 79, ayat: 27, label: "An-Nazi'at 27" },
                { surah: 21, ayat: 30, label: "Al-Anbiya 30" },
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
      </article>
    </main>
  );
}
