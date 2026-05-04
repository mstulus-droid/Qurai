/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";

export const metadata: Metadata = {
  title: "Waraqah bin Naufal dan Asal-Usul Wahyu | Qurai",
  description:
    "Orang pertama yang memvalidasi pengalaman Muhammad adalah sepupu isterinya — seorang pendeta Kristen yang hafal kitab suci Ibrani. Bertanya siapa yang sebenarnya membentuk narasi awal Islam bukan pertanyaan yang mudah dijawab.",
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
      className="border-b border-[var(--qurai-gold)] text-[var(--qurai-gold)] opacity-80 transition hover:opacity-100"
    >
      {children}
    </Link>
  );
}

export default function WaraqahDanWahyuArticle() {
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
            Al-An'am 6:19 · Yunus 10:37 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Waraqah bin Naufal dan Asal-Usul Wahyu
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Orang pertama yang memvalidasi pengalaman Muhammad adalah sepupu isterinya — seorang
            pendeta Kristen yang hafal kitab suci Ibrani. Pertanyaan tentang siapa yang sebenarnya
            membentuk narasi awal Islam lebih sulit dijawab dari yang biasanya diakui.
          </p>
        </header>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Setelah Muhammad turun dari Gua Hira dalam keadaan gemetar, Khadijah membawanya ke satu
            orang: Waraqah bin Naufal. Bukan ke tokoh agama Mekkah yang lain. Bukan ke sesepuh
            Quraisy. Ke Waraqah — sepupunya sendiri, yang sudah tua, nyaris buta, dan memeluk Kristen
            setelah meninggalkan paganisme Arab.
          </p>

          <p>
            Waraqah mendengar ceritanya, lalu berkata: pengalaman itu adalah Namus — malaikat yang
            sama yang datang kepada Musa. Dari sudut pandang sejarah, ini momen yang menarik. Orang
            pertama yang mengidentifikasi pengalaman Muhammad sebagai wahyu nubuat bukan malaikat,
            bukan Allah langsung, tapi seorang sarjana kitab suci Kristen berbahasa Ibrani.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Siapa Waraqah sebenarnya
          </h2>

          <p>
            Sumber-sumber Islam klasik menggambarkan Waraqah sebagai orang yang meninggalkan
            agama leluhur, mempelajari Injil, dan menulis teks Ibrani — atau menurut riwayat lain,
            teks Arab dari Injil. Dia bukan tokoh pinggiran. Dia adalah orang yang Khadijah percaya
            untuk menilai apakah suaminya baru saja menerima sesuatu yang nyata atau sedang mengalami
            gangguan.
          </p>

          <p>
            Waraqah meninggal tidak lama setelah pertemuan itu. Dalam catatan Bukhari, Muhammad
            pernah menyatakan bahwa dia melihat Waraqah dalam mimpi mengenakan pakaian putih —
            tanda keselamatan. Ini bukan detail yang ringan: seorang Kristen yang belum masuk Islam
            ditempatkan dalam visi positif oleh Muhammad sendiri.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kerangka yang sudah ada sebelumnya
          </h2>

          <p>
            Al-Quran berulang kali menegaskan bahwa dirinya bukan teks yang dibuat-buat.{" "}
            <VerseLink surah={10} ayat={37}>
              Yunus 10:37
            </VerseLink>{" "}
            menyatakan Al-Quran tidak mungkin dikarang selain oleh Allah — ia adalah konfirmasi dari
            apa yang sudah ada sebelumnya dan penjelasan atas kitab-kitab terdahulu.{" "}
            <VerseLink surah={17} ayat={105}>
              Al-Isra 17:105
            </VerseLink>{" "}
            menambahkan bahwa Al-Quran diturunkan dengan kebenaran.{" "}
            <VerseLink surah={41} ayat={42}>
              Fussilat 41:42
            </VerseLink>{" "}
            menegaskan tidak ada kebatilan yang bisa masuk ke dalamnya dari arah manapun.
          </p>

          <p>
            Klaim-klaim ini punya implikasi langsung: kalau ada bagian dari narasi Al-Quran yang
            berasal dari sumber manusia yang bisa diidentifikasi, klaim di atas runtuh. Dan Waraqah
            adalah figur yang membuat pertanyaan itu tidak bisa dihindari.
          </p>

          <p>
            Bukan karena ada bukti dia "mendiktekan" sesuatu. Melainkan karena kerangka
            konseptual dalam wahyu awal — malaikat yang datang, tradisi nabi-nabi sebelumnya,
            posisi Muhammad dalam garis Ibrahim-Musa-Isa — adalah kerangka yang persis ada dalam
            tradisi yang Waraqah kuasai. Dan orang yang pertama kali memberi label pada pengalaman
            Muhammad menggunakan kerangka itu.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tuduhan yang sudah ada sejak awal
          </h2>

          <p>
            Al-Quran sendiri merekam bahwa orang-orang Mekkah waktu itu sudah mengajukan versi
            tuduhan ini.{" "}
            <VerseLink surah={6} ayat={19}>
              Al-An'am 6:19
            </VerseLink>{" "}
            muncul dalam konteks di mana Muhammad diminta membuktikan kenabian — dan responsnya
            adalah bahwa Al-Quran diwahyukan untuk memperingatkan. Tapi teks ini tidak merespons
            tuduhan tentang sumber manusia secara langsung.
          </p>

          <p>
            Konteks historisnya lebih luas: Muhammad tinggal di Mekkah yang merupakan simpul
            perdagangan lintas budaya. Dia sudah melakukan perjalanan dagang ke Syam setidaknya
            dua kali sebelum kenabian — ke wilayah yang secara keagamaan didominasi Kristen. Ada
            riwayat pertemuannya dengan Bahira, seorang rahib Kristen, saat masih remaja. Ada
            Khadijah sendiri, yang jaringan dagangnya melampaui batas Arabia.
          </p>

          <p>
            Semua ini bukan bukti bahwa wahyu tidak terjadi. Tapi ini adalah konteks yang perlu
            ada di dalam diskusi — dan yang sering tidak ada.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tentang kitab yang terjaga
          </h2>

          <p>
            <VerseLink surah={56} ayat={77}>
              Al-Waqi'ah 56:77-80
            </VerseLink>{" "}
            menyebut Al-Quran sebagai bacaan yang mulia, tersimpan dalam kitab yang terpelihara,
            tidak disentuh kecuali oleh yang disucikan, diturunkan dari Tuhan semesta alam. Ini
            adalah klaim tentang integritas dan kemurnian sumber.
          </p>

          <p>
            Klaim integritas sumber memang bisa diuji dari dua arah. Pertama: apakah teks ini
            konsisten secara internal? Kedua: apakah narasinya berasal dari tradisi yang bisa
            dilacak? Pertanyaan kedua ini yang membuat Waraqah relevan — bukan sebagai "penulis
            asli", tapi sebagai titik kontak yang bisa diidentifikasi antara Muhammad dan tubuh
            pengetahuan yang kemudian membentuk cara wahyu itu dipahami dan dinarasikan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang tidak bisa diselesaikan dengan mudah
          </h2>

          <p>
            Apologetik standar mengatakan: Waraqah hanya mengkonfirmasi, bukan menciptakan. Dan
            itu benar — tidak ada teks yang mencatat Waraqah mendiktekan sesuatu. Tapi mengkonfirmasi
            pengalaman dengan menggunakan kerangka interpretif tertentu juga membentuk cara
            pengalaman itu dipahami, diceritakan, dan diteruskan.
          </p>

          <p>
            Kalau seseorang yang baru pertama kali mengalami sesuatu yang membingungkan, dan
            orang pertama yang dia temui mengatakan "itu adalah X, sama seperti yang dialami tokoh
            Y" — narasi X dan Y itu akan menjadi cara pengalaman tadi dipahami, bahkan oleh
            orang yang mengalaminya sendiri. Ini bukan pemalsuan. Ini cara kerja interpretasi manusia
            yang normal.
          </p>

          <p>
            Masalahnya adalah Al-Quran tidak mengklaim berasal dari proses interpretasi manusia
            yang normal. Ia mengklaim berasal langsung dari Allah, tanpa perantara yang bisa
            mempengaruhi konten atau framing-nya.
          </p>

          <p>
            Apakah Waraqah mempengaruhi framing wahyu awal? Tidak ada yang tahu pasti. Tapi
            pertanyaan itu sah, dan fakta bahwa ia hampir tidak pernah diajukan secara serius dalam
            diskusi mainstream tentang asal-usul Islam patut diperhatikan sendiri.
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
                { surah: 6, ayat: 19, label: "Al-An'am 19" },
                { surah: 10, ayat: 37, label: "Yunus 37" },
                { surah: 17, ayat: 105, label: "Al-Isra 105" },
                { surah: 41, ayat: 42, label: "Fussilat 42" },
                { surah: 56, ayat: 77, label: "Al-Waqi'ah 77" },
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
