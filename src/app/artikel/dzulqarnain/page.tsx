/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleRecommendations } from "@/components/article-recommendations";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Dzulqarnain dan Teks yang Sudah Ada Sebelumnya | Qurai",
  description:
    "Orang Yahudi menguji Muhammad dengan satu pertanyaan: ceritakan Dzulqarnain. Jawabannya ada di Al-Kahf. Masalahnya — jawaban itu bukan milik Muhammad seorang.",
  openGraph: {
    images: [
      {
        url: "/article-images/01-dzulqarnain-dan-teks-yang-sudah-ada-sebelumnya-illustration.png",
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

export default function DzulqarnainArticle() {
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
            Al-Kahf 18:83–98 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Dzulqarnain dan Teks yang Sudah Ada Sebelumnya
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Orang Yahudi menguji Muhammad dengan satu pertanyaan: ceritakan
            Dzulqarnain. Jawabannya ada di Al-Kahf. Masalahnya — jawaban itu
            bukan milik Muhammad seorang.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/01-dzulqarnain-dan-teks-yang-sudah-ada-sebelumnya-illustration.png"
            alt="Ilustrasi editorial medali kuno di atas latar kain gelap"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="dzulqarnain" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Orang Yahudi di Madinah punya cara untuk menguji Muhammad. Salah
            satunya: tanyakan sesuatu yang mereka sudah tahu jawabannya. Kalau
            jawabannya tepat, mungkin dia memang nabi. Kalau tidak — atau kalau
            jawabannya terasa terlalu akrab — itu cerita lain.
          </p>

          <p>
            Pertanyaan tentang Dzulqarnain masuk kategori itu.{" "}
            <VerseLink surah={18} ayat={83}>
              Al-Kahf 18:83
            </VerseLink>{" "}
            sendiri mengakui ini: <em>"Mereka bertanya kepadamu tentang
            Dzulqarnain."</em> Artinya cerita sudah beredar sebelum ayat ini
            turun. Orang-orang yang bertanya tahu kerangkanya. Mereka ingin
            lihat versi mana yang Muhammad pegang.
          </p>

          <p>
            Versi yang muncul di{" "}
            <VerseLink surah={18} ayat={83}>
              ayat 83–98
            </VerseLink>{" "}
            terasa sangat dekat dengan naskah Syriac yang sudah ada. Terlalu dekat
            untuk diabaikan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Siapa Dzulqarnain?
          </h2>

          <p>
            Ini pertanyaan yang belum selesai dijawab oleh ulama Islam sendiri —
            dan itu sudah menjadi masalah pertama. Kalau ini wahyu dari Tuhan
            yang Maha Tahu, seharusnya tidak ada perdebatan soal identitas tokoh
            yang baru saja diceritakan-Nya.
          </p>

          <p>
            Mayoritas ulama klasik menyebut Dzulqarnain sebagai Alexander Agung
            (Aleksandros dari Makedonia). Alasannya tidak mengada-ada: koin
            Alexander memang menggambarkan dia dengan tanduk — simbol keturunan
            Zeus-Ammon. Julukan "bertanduk dua" sudah dikenal dalam tradisi
            Syriac dan Arab jauh sebelum Islam.
          </p>

          <p>
            Tapi Alexander adalah penyembah berhala yang membantai puluhan ribu
            orang dalam ekspedisi militernya. Bagaimana Quran bisa memuji dia
            sebagai hamba Allah yang bertaqwa?
          </p>

          <p>
            Ulama modern tidak bisa menerima itu. Maulana Abul Kalam Azad lalu
            mengajukan Cyrus Agung dari Persia — lebih "saleh", lebih toleran,
            lebih dapat diterima secara teologis. Tapi tidak ada satu pun bukti
            arkeologi yang menghubungkan Cyrus dengan julukan "bertanduk dua".
            Relief di Pasargadae yang sering dikutip sebagai bukti? Itu figur
            pelindung standar dalam arsitektur Persia — bukan potret Cyrus.
          </p>

          <p>
            Jadi ada dua kandidat. Keduanya bermasalah. Dan Quran tidak
            memberikan cukup petunjuk untuk memutuskan yang mana.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Teks yang mendahului
          </h2>

          <p>
            <em>Syriac Alexander Legend</em> menceritakan perjalanan seorang
            raja ke timur dan barat, matahari terbenam di lautan gelap,
            pembangunan tembok untuk menahan Gog dan Magog, dan sang raja yang
            digambarkan saleh dan bertaqwa.
          </p>

          <p>
            Kerangka narasi ini sudah ada jauh sebelum Al-Kahf dikompilasi. Mar
            Jacob dari Sěrûgh, teolog Kristen Syriac yang hidup 451–521 M,
            sudah menulis versi puitis tentang Alexander membangun tembok
            Gog-Magog lebih dari satu abad sebelumnya. Bukan cerita yang
            kebetulan muncul bersamaan — ini tradisi yang panjang, beredar di
            komunitas Kristen Syriac di wilayah yang sama.
          </p>

          <p>
            <VerseLink surah={18} ayat={83}>
              Al-Kahf 18:83–98
            </VerseLink>{" "}
            menceritakan hal yang persis sama, beat by beat.
          </p>

          <p>
            Kesamaannya bukan samar-samar. Strukturnya identik. Termasuk satu
            detail yang secara sains mustahil:{" "}
            <VerseLink surah={18} ayat={86}>
              ayat 86
            </VerseLink>{" "}
            menyebut Dzulqarnain menemukan matahari terbenam{" "}
            <em>"di mata air yang berlumpur."</em>
          </p>

          <blockquote className="border-l-2 border-[var(--qurai-gold)] py-1 pl-5 text-[var(--qurai-muted)] sm:pl-7">
            <p className="font-serif-reading italic">
              "Hingga apabila dia telah sampai di tempat terbenamnya matahari,
              dia mendapati (matahari) terbenam di dalam mata air yang berlumpur
              hitam."
            </p>
            <footer className="mt-3 font-mono text-[0.65rem] uppercase text-[var(--qurai-quiet)] not-italic">
              <VerseLink surah={18} ayat={86}>
                Al-Kahf 18:86
              </VerseLink>
            </footer>
          </blockquote>

          <p>
            Dalam naskah Syriac aslinya deskripsinya lebih spesifik: lautan
            berbau busuk di ujung samudra, teksturnya digambarkan "seperti
            nanah." Detail itu berubah dalam transmisi — dari laut berbau busuk
            menjadi mata air berlumpur — tapi asal-usulnya dari sumber yang
            sama. Dan kesalahan kosmologisnya diwarisi utuh: matahari yang
            terbenam di dalam badan air, dalam bentuk apapun, tidak
            mencerminkan cara kerja alam semesta.
          </p>

          <p>
            Kalau ini wahyu, mengapa ia mewarisi kesalahan kosmologi dari naskah
            manusia sebelumnya?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pengakuan yang terpendam di dalam kitab
          </h2>

          <p>
            Ada detail yang sering luput: Quran sendiri menyebut bahwa kisah ini
            turun sebagai respons atas pertanyaan —{" "}
            <VerseLink surah={18} ayat={83}>
              "mereka bertanya kepadamu tentang Dzulqarnain"
            </VerseLink>
            . Ini berarti cerita sudah beredar di kalangan Yahudi dan Kristen
            Arab sebelum ada "wahyu". Muhammad ditantang untuk menjawab sesuatu
            yang lawan bicaranya sudah kenal.
          </p>

          <p>
            Dan jawaban yang diberikan identik dengan naskah yang sudah ada di
            tangan mereka.
          </p>

          <p>
            Ada pula hadis yang mencatat Muhammad sendiri ragu apakah Dzulqarnain
            itu nabi atau bukan. Ini ganjil. Kalau Tuhan yang mewahyukan kisah
            ini, mengapa nabinya tidak tahu status tokoh yang baru saja
            dikisahkan Tuhan kepadanya?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tembok yang tidak ada
          </h2>

          <p>
            <VerseLink surah={18} ayat={92}>
              Ayat 92–98
            </VerseLink>{" "}
            mendeskripsikan Dzulqarnain membangun tembok dari besi dan tembaga
            untuk mengurung Ya'juj dan Ma'juj (Gog dan Magog). Tembok ini —
            menurut Quran — masih ada sampai Hari Kiamat tiba.
          </p>

          <blockquote className="border-l-2 border-[var(--qurai-gold)] py-1 pl-5 text-[var(--qurai-muted)] sm:pl-7">
            <p className="font-serif-reading italic">
              "Maka mereka tidak bisa mendakinya dan mereka tidak bisa (pula)
              melubanginya."
            </p>
            <footer className="mt-3 font-mono text-[0.65rem] uppercase text-[var(--qurai-quiet)] not-italic">
              <VerseLink surah={18} ayat={97}>
                Al-Kahf 18:97
              </VerseLink>
            </footer>
          </blockquote>

          <p>
            Tidak ada tembok seperti itu. Para arkeolog sudah menelusuri semua
            kandidat — Tembok Besar China, Benteng Derbent di Kaukasus, berbagai
            konstruksi Persia dan Romawi. Tidak ada yang cocok: bukan bahannya,
            bukan lokasinya, bukan skalanya, bukan fungsinya.
          </p>

          <p>
            Tembok itu ada dalam naskah Syriac. Tidak ada di tanah.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang tersisa
          </h2>

          <p>
            Kisah Dzulqarnain punya tiga masalah yang susah diabaikan secara
            bersamaan.
          </p>

          <p>
            Pertama, identitas tokohnya tidak jelas — dan ketidakjelasan itu
            tidak seharusnya ada kalau ini benar wahyu ilahi.
          </p>

          <p>
            Kedua, strukturnya identik dengan naskah Kristen berbahasa Syriac yang
            sudah beredar sebelumnya. Bukan mirip — identik. Termasuk detail
            yang salah secara sains.
          </p>

          <p>
            Ketiga, Muhammad sendiri tampak tidak yakin dengan detail cerita ini,
            termasuk status tokoh yang katanya baru saja diwahyukan kepadanya.
          </p>

          <p>
            Ulama modern terus berusaha menambal ini. Tapi setiap teori baru
            membuka pertanyaan yang tidak lebih kecil dari sebelumnya. Musa
            Cerantonio — seorang mualaf Australia yang mahir membaca naskah Aramaic
            — akhirnya meninggalkan Islam setelah membandingkan Alexander Romance
            dengan Quran secara langsung. Bukan karena emosi, tapi karena
            naskah-naskahnya terlalu identik untuk disebut kebetulan.
          </p>

          <p>
            Pertanyaan yang tersisa sederhana: kalau wahyu tidak bisa membedakan
            antara seorang pagan penyembah berhala dengan tokoh saleh yang
            fiktif, apa yang membuat kita yakin bagian lainnya berbeda?
          </p>

          <p>
            Orang Yahudi yang mengajukan pertanyaan itu mungkin sudah tahu
            jawabannya sejak awal.
          </p>

          <p className="text-[0.95rem] italic text-[var(--qurai-quiet)]">
            Naskah Syriac yang menjadi dasar perbandingan di artikel ini
            tersedia untuk dibaca. Hubungi kami kalau ingin salinannya.
          </p>
        </div>

        

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer>
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[83, 86, 92, 93, 94, 96, 97, 98].map((ayat) => (
                <Link
                  key={ayat}
                  href={`/surat/18#ayat-${ayat}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[color-mix(in_srgb,var(--qurai-gold)_30%,transparent)] bg-[color-mix(in_srgb,var(--qurai-gold)_6%,transparent)] px-3 py-1.5 font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_12%,transparent)]"
                >
                  Al-Kahf {ayat}
                </Link>
              ))}
            </div>
          </div>
        </footer>

        <ArticleShare />

        <ArticleRecommendations currentSlug="dzulqarnain" />
      </article>
    </main>
  );
}
