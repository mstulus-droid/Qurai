/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Bumi yang Dihamparkan | Qurai",
  description:
    "Al-Quran menggunakan lima kata berbeda untuk menggambarkan bumi sebagai permukaan yang dihamparkan. Tafsir al-Jalalayn pada abad ke-15 mengakui ini secara eksplisit — bumi datar, bukan bola — meski para mufasir itu sudah tahu ada klaim sebaliknya dari astronomi Yunani.",
  openGraph: {
    images: [
      {
        url: "/article-images/14-bumi-yang-dihamparkan-illustration.png",
        width: 1792,
        height: 1024,
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

export default function BumiDatarArticle() {
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
            Al-Ghasyiyah 88:20 · Al-Kahf 18:86 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Bumi yang Dihamparkan
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran menggunakan lima kata berbeda untuk menggambarkan bumi
            sebagai permukaan yang dibentangkan. Tafsir al-Jalalayn mengakui
            ini secara eksplisit, dan mereka sudah tahu ada klaim sebaliknya
            dari astronomi Yunani.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/14-bumi-yang-dihamparkan-illustration.png"
            alt="Ilustrasi editorial diagram kosmologi bumi terhampar di atas perkamen tua"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={88} ayat={20}>
              Al-Ghasyiyah 88:20
            </VerseLink>{" "}
            mengajukan pertanyaan: "Dan bumi bagaimana ia <em>sutihat</em>?"
            Kata itu berasal dari akar <em>sataha</em>, yang dalam bahasa Arab
            merujuk pada tindakan meratakan permukaan seperti atap. <em>Sath</em>{" "}
            adalah atap datar.
          </p>

          <p>Satu kata bisa dianggap pilihan diksi yang kebetulan. Tapi Al-Quran tidak berhenti di situ.</p>

          <p>
            <VerseLink surah={71} ayat={19}>
              Nuh 71:19
            </VerseLink>{" "}
            menyebut bumi <em>bisaatan</em>, permadani yang digelar di lantai.{" "}
            <VerseLink surah={2} ayat={22}>
              Al-Baqarah 2:22
            </VerseLink>{" "}
            menyebutnya <em>firashan</em>, kasur yang dihamparkan.{" "}
            <VerseLink surah={20} ayat={53}>
              Ta-Ha 20:53
            </VerseLink>{" "}
            menggunakan <em>mahdan</em>, alas tidur datar yang dibentangkan.{" "}
            <VerseLink surah={15} ayat={19}>
              Al-Hijr 15:19
            </VerseLink>{" "}
            memakai <em>madadna</em>, direntangkan dengan menarik ke segala
            arah. Lima kata dengan akar berbeda, dari surat berbeda, dari
            periode pewahyuan yang berbeda pula, dan semuanya merujuk pada
            tindakan yang sama: membentangkan sesuatu hingga rata.
          </p>

          <p>
            Kata-kata itu tidak ambigu dalam bahasa Arab. Semuanya punya makna
            teknis yang spesifik, dan makna teknisnya adalah datar.
          </p>

          <p>
            Argumen yang biasa muncul adalah bahwa Al-Quran berbicara tentang
            pengalaman lokal, kerataan yang dirasakan manusia berdiri di
            permukaan bumi, bukan pernyataan kosmologis tentang bentuk bumi
            secara keseluruhan. Tapi argumen itu kesulitan ketika berhadapan
            dengan konteksnya. Ayat-ayat ini bukan deskripsi pengalaman seorang
            manusia yang sedang berjalan. Ini adalah pernyataan tentang
            bagaimana Allah menciptakan dan mengatur bumi untuk manusia. Skalanya
            adalah skala Allah, bukan skala pejalan kaki di padang pasir.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pengakuan dari dalam
          </h2>

          <p>
            Yang membuat terminologi itu lebih dari sekadar soal pilihan kata
            adalah cara para mufasir terkemuka dalam tradisi Islam membacanya.
          </p>

          <p>
            Tafsir al-Jalalayn ditulis oleh dua ulama: Jalaluddin al-Mahalli
            yang wafat tahun 1459 M, dan muridnya Jalaluddin as-Suyuthi yang
            wafat tahun 1505 M. Tafsir ini ringkas, padat, dan sampai hari ini
            dipakai sebagai teks pengantar tafsir di banyak pesantren. Ketika
            membahas <em>sutihat</em> di Al-Ghasyiyah 88:20, mereka menulis:
            "Ini secara literal menunjukkan bahwa bumi itu datar, yang merupakan
            pendapat mayoritas ulama syariat, dan bukan berbentuk bola seperti
            yang diklaim para astronom."
          </p>

          <p>Kalimat terakhir itu perlu dicermati dengan tenang. Mereka tidak menulis ini dalam kevakuman. Mereka tahu ada klaim lain.</p>

          <p>
            Pengetahuan tentang bumi yang berbentuk bola sudah ada di dunia
            Islam jauh sebelum al-Jalalayn lahir. Gerakan penerjemahan
            besar-besaran di era Abbasiyah pada abad ke-8 hingga ke-10 M
            membawa teks-teks Ptolemy, Aristoteles, dan astronom Yunani lainnya
            ke dalam bahasa Arab. Para ilmuwan Muslim tidak hanya
            menerjemahkan, mereka mengembangkan. Al-Biruni pada abad ke-11 M
            menghitung keliling bumi menggunakan metode trigonometri, dan
            hasilnya tidak jauh dari nilai sebenarnya. Ibnu Rusyd, Ibnu Sina,
            al-Farabi, semuanya tahu bumi bulat.
          </p>

          <p>
            Ketika al-Jalalayn menulis tafsirnya empat abad setelah al-Biruni,
            mereka berada di tengah tradisi intelektual yang sudah mengenal
            kosmologi bola. Mereka tetap memilih bacaan literal. Bukan karena
            tidak tahu lebih baik, tapi karena itulah yang mereka baca dalam
            teksnya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Ketika aturannya tidak bekerja
          </h2>

          <p>
            Masalah yang ditimbulkan oleh kosmologi ini tidak berhenti di
            tataran teologis. Ia masuk ke dalam hukum praktis yang dijalankan
            setiap hari.
          </p>

          <p>
            <VerseLink surah={2} ayat={187}>
              Al-Baqarah 2:187
            </VerseLink>{" "}
            menetapkan batas waktu puasa dengan formula yang tampak sederhana:
            dari terbit hingga terbenam matahari. Formula itu jelas, tidak
            ambigu, dan bekerja dengan baik di Semenanjung Arab. Di lintang
            sekitar 21 derajat utara tempat Mekah berada, terbit dan terbenam
            matahari terjadi setiap hari, dengan variasi panjang siang yang
            masih dalam batas wajar.
          </p>

          <p>
            Di Aberdeen, Skotlandia, jarak antara Isya dan Subuh pada bulan
            Juni hanya sekitar empat setengah jam. Seseorang yang mengikuti
            batas waktu tekstual harus bangun pukul setengah empat dini hari
            untuk Subuh, lalu menjalankan seharian penuh tanpa makan minum. Itu
            masih bisa dijalani, walaupun berat.
          </p>

          <p>
            Di lingkaran kutub, kondisinya berbeda sama sekali. Selama
            berminggu-minggu di musim panas, matahari tidak pernah terbenam.
            Selama berminggu-minggu di musim dingin, matahari tidak pernah
            terbit. Kondisi eksekusi perintah itu tidak terpenuhi. Tidak ada
            momen terbit, tidak ada momen terbenam.
          </p>

          <p>
            Para ulama kontemporer menawarkan berbagai jalan keluar: gunakan
            waktu kota terdekat yang masih mengalami terbit dan terbenam normal,
            gunakan waktu Mekah, atau bagi 24 jam menjadi proporsi yang
            mencerminkan waktu Madinah. Semua solusi itu masuk akal sebagai
            adaptasi praktis. Tapi semuanya adalah adaptasi yang dibuat setelah
            fakta geografis diketahui dan masalahnya muncul. Tidak satu pun ada
            di dalam teks, karena teks tidak membayangkan ada manusia yang
            tinggal di tempat seperti itu.
          </p>

          <p>
            Hal yang sama berlaku untuk kiblat.{" "}
            <VerseLink surah={2} ayat={149}>
              Al-Baqarah 2:149
            </VerseLink>{" "}
            memerintahkan menghadap Ka'bah dalam shalat,{" "}
            <em>fa walli wajhaka shatra al-masjid al-haram</em>. Di sebagian
            besar dunia, perintah itu memiliki jawaban yang jelas: ada arah
            spesifik yang bisa ditentukan dengan kompas atau kalkulasi. Tapi di
            titik antipode Mekah, sebuah titik di Pasifik Selatan antara
            Selandia Baru dan ujung selatan Amerika, semua arah kompas secara
            bersamaan mengarah ke Ka'bah dan membelakanginya. Tidak ada jawaban
            yang bisa diberikan, karena soalnya tidak memiliki solusi pada
            geometri bola.
          </p>

          <p>
            Aturan-aturan itu berfungsi sempurna di dunia di mana bumi datar
            dan Ka'bah berada di tengahnya. Di dunia itu tidak ada kutub, tidak
            ada antipode, tidak ada titik di mana arah kiblat menjadi paradoks.
            Perintahnya dibuat untuk dunia itu.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Sampai ke tempat matahari terbenam
          </h2>

          <p>
            Al-Kahfi menceritakan kisah Dzulqarnain, seorang penguasa besar
            yang melakukan perjalanan ke tiga penjuru: barat, timur, dan antara
            keduanya. Perjalanan pertamanya ke barat berakhir di satu titik yang
            digambarkan dengan sangat konkret.
          </p>

          <p>
            <VerseLink surah={18} ayat={86}>
              Al-Kahfi 18:86
            </VerseLink>
            : "Hingga ketika ia mencapai tempat matahari terbenam{" "}
            (<em>maghrib ash-shams</em>), ia mendapatinya terbenam di mata air
            berlumpur panas (<em>fi 'aynin hamiatun</em>)."
          </p>

          <p>
            Teks tidak mengatakan Dzulqarnain melihat matahari terbenam di
            cakrawala dari kejauhan. Teks mengatakan ia <em>mencapai</em> tempat
            matahari terbenam, dan di sana ia <em>mendapati</em> matahari itu
            terbenam ke dalam mata air berlumpur panas. Ada lokasi fisik yang ia
            tuju. Ada sesuatu yang ia temukan di sana: sebuah mata air, dan di
            dalam mata air itu matahari turun.
          </p>

          <p>
            Upaya paling umum untuk menyelamatkan ayat ini adalah dengan
            membacanya sebagai perspektif subjektif Dzulqarnain, bukan
            pernyataan objektif tentang alam semesta. Ia hanya melihat matahari
            seperti tenggelam ke lautan saat senja, kata penjelasan itu,
            sebagaimana siapapun yang berdiri di pantai bisa merasakannya.
          </p>

          <p>
            Tapi teks tidak mendukung pembacaan itu. Kata yang dipakai bukan
            "sepertinya" atau "seolah-olah." Dan yang lebih penting: Dzulqarnain
            tidak sekadar menyaksikan pemandangan senja dari pantai. Ia{" "}
            <em>mencapai</em> titik itu. Ia <em>sampai ke sana</em>. Teks
            memposisikannya sebagai seseorang yang berhasil menempuh perjalanan
            ke ujung barat dunia, dan di ujung itu ada mata air bersuhu panas
            dan berlumpur, dan ke dalamnya matahari terbenam.
          </p>

          <p>Di sana ada Dzulqarnain. Di sana ada mata airnya. Dan di sana matahari turun.</p>
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
                { surah: 88, ayat: 20, label: "Al-Ghasyiyah 20" },
                { surah: 71, ayat: 19, label: "Nuh 19" },
                { surah: 2, ayat: 22, label: "Al-Baqarah 22" },
                { surah: 20, ayat: 53, label: "Ta-Ha 53" },
                { surah: 15, ayat: 19, label: "Al-Hijr 19" },
                { surah: 18, ayat: 86, label: "Al-Kahfi 86" },
                { surah: 2, ayat: 187, label: "Al-Baqarah 187" },
                { surah: 2, ayat: 149, label: "Al-Baqarah 149" },
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
