/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Dari Mana Datangnya Pisau Itu? | Qurai",
  description:
    "Yusuf 12:31 menceritakan para wanita yang mengiris tangan karena terpesona Yusuf. Adegan itu tidak ada di Kitab Kejadian. Tapi ada di Bereshit Rabbah, kompilasi legenda Yahudi abad ke-5. Al-Qur'an menyebut kisah ini 'ahsanal qasas' — kisah yang paling baik.",
  alternates: {
    canonical: "/artikel/surat-yusuf-dan-midrash",
  },
  openGraph: {
    title: "Dari Mana Datangnya Pisau Itu? | Qurai",
    description:
      "Yusuf 12:31 menceritakan para wanita yang mengiris tangan karena terpesona Yusuf. Adegan itu ada di Bereshit Rabbah.",
    url: "/artikel/surat-yusuf-dan-midrash",
    type: "article",
    images: [
      {
        url: "/article-images/28-surat-yusuf-dan-midrash-illustration.png",
        width: 1672,
        height: 941,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dari Mana Datangnya Pisau Itu? | Qurai",
    description:
      "Yusuf 12:31 menceritakan para wanita yang mengiris tangan karena terpesona Yusuf. Adegan itu ada di Bereshit Rabbah.",
    images: ["/article-images/28-surat-yusuf-dan-midrash-illustration.png"],
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

export default function SuratYusufDanMidrashArticle() {
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
            Yusuf 12:3 · Yusuf 12:31 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 11
            menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Dari Mana Datangnya Pisau Itu?
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Yusuf 12:31 menceritakan para wanita yang mengiris tangan karena
            terpesona Yusuf. Adegan itu tidak ada di Kitab Kejadian. Tapi ada
            di Bereshit Rabbah, kompilasi legenda Yahudi abad ke-5. Al-Qur'an
            menyebut kisah ini <em>ahsanal qasas</em>, kisah yang paling baik.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/28-surat-yusuf-dan-midrash-illustration.png"
            alt="Ilustrasi editorial pisau jamuan, buah, dan manuskrip kuno di meja gelap"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={12} ayat={31}>Yusuf 12:31</VerseLink> menceritakan
            adegan yang cukup dramatis: istri pembesar Mesir mengundang para
            wanita kota ke sebuah jamuan. Ia menyiapkan makanan dan memberi
            masing-masing tamu sebuah pisau. Lalu ia menyuruh Yusuf keluar di
            hadapan mereka.
          </p>

          <p>
            <em>
              "Ketika para wanita itu melihatnya, mereka mengagumi
              (keindahan)nya dan memotong tangan-tangan mereka sendiri."
            </em>
          </p>

          <p>
            Pisau, jamuan, tangan terluka. Sang istri yang akhirnya bisa
            membuktikan alasannya di depan para pengkritiknya.
          </p>

          <p>
            Detail itu tidak ada dalam catatan tertua yang kita punya tentang
            kisah Yusuf. Kitab Kejadian pasal 39, yang sudah ada ribuan tahun
            sebelumnya, hanya mencatat: istri Potifar menggoda Yusuf berulang
            kali, Yusuf menolak, suatu hari bajunya tertarik dan ia melarikan
            diri, istri itu memfitnahnya dengan baju itu sebagai bukti, Yusuf
            dipenjara.
          </p>

          <p>
            Tidak ada jamuan. Tidak ada pisau. Tidak ada tangan yang terluka.
          </p>

          <p>Jadi dari mana detail itu datang?</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa itu Midrash
          </h2>

          <p>
            Di luar Alkitab ada tradisi literatur Yahudi lain yang disebut
            Midrash. Bagi pembaca yang belum familiar: Midrash bukan kitab
            suci. Ia bukan bagian dari Taurat maupun Perjanjian Lama. Midrash
            adalah kumpulan cerita, tafsir, dan legenda yang dikembangkan oleh
            rabi-rabi Yahudi untuk keperluan pengajaran dan ceramah di sinagog.
          </p>

          <p>
            Cara kerjanya seperti ini: Alkitab seringkali bercerita dengan
            sangat ringkas. Kisah besar diceritakan dalam beberapa halaman,
            dengan sedikit dialog dan nyaris tanpa detail psikologis. Para rabi
            kemudian mengembangkan kisah-kisah itu, mengisi celah naratif dengan
            dialog yang dibayangkan, latar belakang tokoh, dan adegan-adegan
            baru yang memperkuat pesan moral. Hasilnya dikumpulkan, diajarkan,
            dan beredar luas di komunitas Yahudi selama berabad-abad.
          </p>

          <p>
            Salah satu kompilasi Midrash yang paling penting adalah Bereshit
            Rabbah, elaborasi atas Kitab Kejadian. Kompilasi ini diperkirakan
            disusun sekitar abad ke-5 Masehi, dua abad sebelum Al-Qur'an.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Adegan yang sama, sumber yang berbeda
          </h2>

          <p>
            Di Bereshit Rabbah 87, kisah Yusuf dikembangkan jauh melampaui
            versi Kejadian. Istri Potifar, dalam tradisi Midrash ia diberi nama
            Zuleikha, mendengar para wanita bangsawan kota mengejeknya karena
            jatuh cinta pada pelayannya sendiri.
          </p>

          <p>
            Zuleikha kemudian mengundang mereka semua ke pesta. Ia menyiapkan
            hidangan dan memberi masing-masing tamu pisau untuk mengupas buah.
            Di tengah pesta itu, ia memerintahkan Yusuf masuk ke ruangan.
          </p>

          <p>
            Para wanita itu kehilangan konsentrasi sepenuhnya. Mereka mengiris
            tangan mereka sendiri tanpa sadar. Zuleikha lalu berkata: kalau
            kalian seperti ini hanya dengan sekali melihat, bayangkan aku yang
            harus bersamanya setiap hari.
          </p>

          <p>
            Jamuan. Pisau. Buah. Tangan terluka. Istri yang membuktikan
            alasannya.
          </p>

          <p>
            Identik dengan{" "}
            <VerseLink surah={12} ayat={31}>Yusuf 12:31</VerseLink>.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Bukan kebetulan motif naratif
          </h2>

          <p>
            Kesamaan ini bukan soal tema umum yang bisa muncul di banyak
            tradisi secara kebetulan. Adegan pisau adalah detail yang sangat
            spesifik, tidak muncul dalam sumber mana pun sebelum Midrash, dan
            kemudian muncul di Al-Qur'an dua abad kemudian dengan urutan yang
            sama.
          </p>

          <p>
            Tidak ada di catatan tertua yang kita miliki. Ada di Bereshit
            Rabbah abad ke-5. Ada di Al-Qur'an abad ke-7.
          </p>

          <p>
            Jawaban yang biasa diberikan oleh ulama Muslim adalah bahwa
            Al-Qur'an membawa versi yang lebih akurat dari kisah Yusuf, sesuai
            dengan kejadian aslinya, sementara catatan sebelumnya adalah versi
            yang sudah berubah. Tapi penjelasan itu memunculkan pertanyaan yang
            lebih besar: mengapa versi "yang lebih akurat" itu persis cocok
            dengan elaborasi naratif yang dibuat rabi-rabi manusia pada abad
            ke-5?
          </p>

          <p>
            Kalau Al-Qur'an memiliki akses ke kejadian aslinya yang
            sesungguhnya, hasilnya seharusnya berbeda dari karya manusia mana
            pun. Tapi hasilnya justru identik dengan Bereshit Rabbah.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Konteks yang membuat ini masuk akal
          </h2>

          <p>
            Konteks historisnya relevan. Madinah pada abad ke-7 adalah kota
            dengan komunitas Yahudi yang besar dan aktif. Setidaknya ada tiga
            suku Yahudi yang mendiaminya: Banu Qaynuqa, Banu Nadhir, dan Banu
            Qurayzah. Komunitas-komunitas ini membawa serta tradisi intelektual
            mereka, termasuk cerita-cerita Midrash yang selama berabad-abad
            sudah menjadi bagian dari cara mereka memahami dan menceritakan
            teks-teks lama.
          </p>

          <p>
            Tradisi itu tidak hanya tersimpan dalam gulungan. Ia diceritakan,
            didiskusikan, dan beredar sebagai tradisi lisan yang hidup. Dalam
            lingkungan seperti itu, kisah Yusuf versi Midrash, lengkap dengan
            adegan pisau dan jamuan Zuleikha, bisa jadi sudah lama menjadi
            cerita yang dikenal di sekitar.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pola yang lebih luas
          </h2>

          <p>
            Adegan pisau bukan satu-satunya titik paralel. Dialog panjang
            antara Yusuf dan istri Potifar yang ada di Al-Qur'an juga tidak
            ditemukan dalam catatan tertua kisah ini, tapi ada dalam elaborasi
            Midrash. Kisah Ibrahim yang menghancurkan patung-patung ayahnya,
            yang diceritakan di{" "}
            <VerseLink surah={21} ayat={51}>Al-Anbiya 21:51–70</VerseLink>,
            juga tidak muncul dalam Kejadian tapi ada secara rinci di Bereshit
            Rabbah 38. Polanya konsisten: detail yang absen dari sumber tertua
            kita tapi hadir dalam Midrash, muncul di Al-Qur'an.
          </p>

          <p>
            <VerseLink surah={12} ayat={3}>Yusuf 12:3</VerseLink> menyebut
            kisah ini sebagai <em>ahsanal qasas</em>, kisah yang paling baik.
          </p>

          <p>
            Dari sisi sastra, Surat Yusuf memang kisah yang paling kohesif
            dalam Al-Qur'an. Alurnya utuh, karakternya berkembang, emosinya
            terasa. Tapi "kisah terbaik" yang diklaim sebagai wahyu ilahi itu
            mengandung adegan yang tidak bisa ditelusuri ke sumber mana pun
            kecuali karya naratif manusia yang ditulis dua abad sebelumnya.
          </p>

          <p>
            Al-Qur'an tidak menyebut Bereshit Rabbah. Tapi adegan itu ada di
            sana.
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
                { surah: 12, ayat: 3, label: "Yusuf 3" },
                { surah: 12, ayat: 31, label: "Yusuf 31" },
                { surah: 21, ayat: 51, label: "Al-Anbiya 51" },
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
