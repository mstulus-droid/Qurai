/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Alif Lam Mim | Qurai",
  description:
    "Dua puluh sembilan surah dimulai dengan huruf yang tidak ada yang bisa menjelaskan maknanya setelah empat belas abad. Al-Qur'an menyebut dirinya dalam bahasa Arab yang jelas, tapi ada kata-kata di dalamnya yang tidak bisa dipahami dari dalam bahasa Arab saja. Al-Qari'ah, sijjin, saqar: istilah-istilah yang Al-Qur'an sendiri mempertanyakan, lalu tidak sepenuhnya menjawab.",
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

export default function AlifLamMimArticle() {
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
            Al-Baqarah 2:1 · Al-Qari'ah 101:1 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Alif Lam Mim
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Dua puluh sembilan surah dimulai dengan huruf yang tidak ada yang
            bisa menjelaskan maknanya setelah empat belas abad. Al-Qur'an
            menyebut dirinya dalam bahasa Arab yang jelas, tapi ada
            kata-kata di dalamnya yang tidak bisa dipahami dari dalam bahasa
            Arab saja.
          </p>
        </header>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Al-Baqarah dimulai dengan tiga huruf:{" "}
            <VerseLink surah={2} ayat={1}>Alif Lam Mim</VerseLink>.
          </p>

          <p>
            Tidak ada terjemahan resminya. Tidak ada penjelasan dalam surah itu
            sendiri. Tidak ada hadis sahih yang mengklarifikasi maksudnya. Para
            sahabat senior berbeda pendapat. Tradisi tafsir dari Kufah, Basrah,
            Madinah, dan Mekah menghasilkan jawaban yang saling bertentangan.
          </p>

          <p>Empat belas abad kemudian, konsensus belum ada.</p>

          <p>
            Dan Al-Baqarah bukan satu-satunya. Dua puluh sembilan surah, hampir
            seperempat dari total 114, dimulai dengan huruf-huruf yang tidak ada
            yang bisa menjelaskan maknanya dengan pasti.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kitabun mubin yang tidak bisa dibuka
          </h2>

          <p>
            <VerseLink surah={43} ayat={3}>Az-Zukhruf 43:3</VerseLink>{" "}
            menyatakan:{" "}
            <em>
              "Sesungguhnya Kami menjadikannya Al-Qur'an dalam bahasa Arab,
              agar kamu memahaminya."
            </em>
          </p>

          <p>
            <VerseLink surah={12} ayat={2}>Yusuf 12:2</VerseLink> mengulang
            klaim yang sama.
          </p>

          <p>
            Di antara surah-surah yang dimulai dengan huruf yang tidak bisa
            dipahami itu: Surah Yusuf sendiri, dibuka dengan Alif Lam Ra.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang ditanya tapi tidak dijawab
          </h2>

          <p>
            Ada pola lebih spesifik. Di beberapa tempat, Al-Qur'an menggunakan
            konstruksi retoris yang sama: <em>"Dan tahukah kamu apakah X itu?"</em>
          </p>

          <p>
            <VerseLink surah={101} ayat={1}>Al-Qari'ah 101:1–3</VerseLink>:{" "}
            <em>
              "Al-Qari'ah. Apakah al-Qari'ah itu? Dan tahukah kamu apakah
              al-Qari'ah itu?"
            </em>{" "}
            Ayat-ayat berikutnya menggambarkan efeknya tapi tidak menjawab apa
            al-Qari'ah itu.
          </p>

          <p>
            <VerseLink surah={83} ayat={7}>Al-Mutaffifin 83:7–8</VerseLink>:{" "}
            <em>
              "Sesungguhnya catatan orang-orang yang durhaka tersimpan dalam
              sijjin. Dan tahukah kamu apakah sijjin itu?"
            </em>{" "}
            Ayat berikutnya mendefinisikan sijjin sebagai{" "}
            <em>kitabun marqum</em>, buku yang tertulis. Tapi itu
            mendefinisikan isi sijjin, bukan apa sijjin itu sendiri.
          </p>

          <p>
            <VerseLink surah={74} ayat={26}>Al-Muddathir 74:26–27</VerseLink>{" "}
            melakukan hal yang sama dengan saqar. Deskripsi efeknya ada.
            Penjelasan tentang apa itu tidak ada.
          </p>

          <p>
            Dalam ketiga kasus, Al-Qur'an sendiri yang mempersoalkan
            istilahnya, lalu tidak memberikan jawaban yang menyelesaikan
            pertanyaan itu.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Bukan bahasa Arab
          </h2>

          <p>
            Al-Qur'an berulang kali menyatakan diturunkan dalam bahasa Arab
            yang jelas. Tapi di dalam Al-Qur'an ada kata-kata yang asal-usulnya
            bukan Arab.
          </p>

          <p>
            <em>Sijjil</em> di{" "}
            <VerseLink surah={11} ayat={82}>Hud 11:82</VerseLink>, batu yang
            dilempar ke kaum Lut, kemungkinan besar dipinjam dari bahasa Persia{" "}
            <em>sang-gil</em>, batu dan tanah liat. Para ahli yang menelusuri
            lebih jauh menemukan kemungkinan akar Aramaic. Yang jelas: kata itu
            tidak bisa ditafsirkan dari dalam morfologi Arab.
          </p>

          <p>
            <em>Barzakh</em> di{" "}
            <VerseLink surah={23} ayat={100}>Al-Mu'minun 23:100</VerseLink>,
            penghalang antara kematian dan kebangkitan, kemungkinan juga dari
            bahasa Persia.
          </p>

          <p>
            Kata pinjaman sendiri bukan masalah, semua bahasa meminjam.
            Masalahnya ada pada klaim bahwa Al-Qur'an dalam bahasa Arab yang
            jelas sebagai basis otoritasnya, sementara kata-kata itu tidak bisa
            dipahami dari dalam bahasa Arab saja.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Empat belas abad tanpa jawaban
          </h2>

          <p>
            Kalau ketidakjelasan itu disengaja, ada masalah lain: Al-Qur'an
            tidak menyajikan dirinya sebagai teks esoteris untuk kalangan
            khusus. Klaim sentralnya adalah aksesibilitas, petunjuk untuk semua
            manusia, dalam bahasa yang bisa dipahami.
          </p>

          <p>
            Kalau seseorang membuka Al-Qur'an dan menemukan Alif Lam Mim di
            halaman pertama, ia tidak bisa mengandalkan Al-Qur'an itu sendiri
            untuk mengerti apa maksudnya. Harus keluar dari Al-Qur'an, membuka
            tafsir, membaca pendapat yang saling bertolak belakang, dan pada
            akhirnya memilih salah satu tanpa tahu mana yang benar.
          </p>

          <p>
            Dua puluh sembilan surah. Alif Lam Mim di halaman pertama. Satu
            jawaban yang tidak ada.
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
                { surah: 2, ayat: 1, label: "Al-Baqarah 1" },
                { surah: 12, ayat: 2, label: "Yusuf 2" },
                { surah: 43, ayat: 3, label: "Az-Zukhruf 3" },
                { surah: 101, ayat: 1, label: "Al-Qari'ah 1" },
                { surah: 83, ayat: 7, label: "Al-Mutaffifin 7" },
                { surah: 74, ayat: 26, label: "Al-Muddathir 26" },
                { surah: 11, ayat: 82, label: "Hud 82" },
                { surah: 23, ayat: 100, label: "Al-Mu'minun 100" },
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
