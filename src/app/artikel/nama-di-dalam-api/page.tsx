/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Nama di Dalam Api | Qurai",
  description:
    "Shahih Bukhari 4971 mencatat urutan yang spesifik: Abu Lahab menolak Muhammad di bukit Safa, lalu wahyu turun sebagai respons. Dari sekian banyak musuh Muhammad, hanya satu yang dikutuk dengan namanya dalam Al-Quran. Paman kandungnya sendiri.",
  openGraph: {
    images: [
      {
        url: "/article-images/20-nama-di-dalam-api-illustration.png",
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

export default function NamaDiDalamApiArticle() {
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
            Al-Masad 111:1 · Asy-Syu'ara 26:214 &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Nama di Dalam Api
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Shahih Bukhari 4971 mencatat urutan yang spesifik: Abu Lahab menolak
            Muhammad di bukit Safa, lalu wahyu turun sebagai respons. Dari
            sekian banyak musuh Muhammad, hanya satu yang dikutuk dengan namanya
            dalam Al-Quran. Paman kandungnya sendiri.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/20-nama-di-dalam-api-illustration.png"
            alt="Ilustrasi editorial Abu Lahab dan istrinya di dekat api dengan kayu bakar dan tali sabut"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="nama-di-dalam-api" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={111} ayat={1}>
              Surah ke-111
            </VerseLink>{" "}
            terdiri dari lima ayat. Ia adalah satu-satunya tempat dalam
            Al-Quran di mana seseorang dikutuk langsung dengan namanya:
          </p>

          <p>
            <em>
              "Binasalah kedua tangan Abu Lahab dan benar-benar binasa dia!
              Tidaklah berguna baginya hartanya dan apa yang dia usahakan. Kelak
              dia akan masuk ke dalam api yang bergejolak. Dan (begitu pula)
              istrinya, pembawa kayu bakar. Di lehernya ada tali dari sabut."
            </em>
          </p>

          <p>
            Orang itu adalah Abd al-'Uzza bin Abd al-Muttalib, paman kandung
            Muhammad. Tapi Al-Quran menyebutnya dengan julukannya: Abu Lahab,
            bapak api.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang tercatat di Bukhari
          </h2>

          <p>
            Shahih Bukhari 4971 memuat riwayat dari Ibn Abbas tentang bagaimana
            surah ini turun.
          </p>

          <p>
            Setelah turun{" "}
            <VerseLink surah={26} ayat={214}>
              Al-Shu'ara 26:214
            </VerseLink>
            , "Dan berilah peringatan kepada kerabatmu yang terdekat," Muhammad
            naik ke bukit Safa dan memanggil seluruh klan Quraisy. Mereka
            berkumpul. Muhammad bertanya: kalau aku bilang ada pasukan berkuda
            di balik bukit ini yang hendak menyerang kalian, kalian percaya?
          </p>

          <p>
            Mereka menjawab: ya, karena kami tidak pernah mendapatimu berdusta.
          </p>

          <p>
            Lalu Muhammad menyampaikan peringatannya tentang azab. Abu Lahab
            berdiri dan berkata:{" "}
            <em>Tabban laka! Alihadzā jama'tanā?</em> Celakalah engkau. Untuk
            inikah engkau mengumpulkan kami?
          </p>

          <p>
            <em>
              "Maka turunlah ayat: 'Celakalah kedua tangan Abu Lahab.'"
            </em>
          </p>

          <p>
            Urutan itu dicatat dengan sangat spesifik di dalam koleksi hadis
            yang paling dipercaya dalam tradisi Sunni. Penolakan terjadi. Lalu
            wahyu turun sebagai respons.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Satu-satunya nama
          </h2>

          <p>
            Al-Quran punya banyak musuh yang disebutkan dalam Al-Quran. Abu Jahl,
            salah satu penentang paling keras yang ikut memimpin pasukan Quraisy
            di Badar, tidak pernah disebut namanya dalam satu ayat pun. Para
            pemimpin yang memboikot Muhammad selama tiga tahun di Shi'b Abi
            Talib juga tidak. Kaum munafik di Madinah yang dicurigai Muhammad
            mendapat banyak ayat tersendiri, tapi identitasnya tidak pernah
            dikonfirmasi langsung oleh Al-Quran.
          </p>

          <p>Hanya satu orang yang dikutuk dengan nama.</p>

          <p>
            Bukan orang asing. Paman kandung. Yang penolakannya bukan di medan
            perang atau di balik tembok, tapi di depan muka seluruh keluarga
            besar, di bukit Safa, di tengah suku sendiri.
          </p>

          <p>
            Abu Lahab juga melakukan hal-hal lain yang lebih berbahaya secara
            strategis. Menurut riwayat dalam Tafsir Ibn Kathir, ia
            memerintahkan dua putranya untuk menceraikan putri-putri Muhammad,
            Ruqayyah dan Umm Kulthum, setelah dakwah dimulai. Ia mengikuti
            Muhammad ke pasar Dhul-Majaz dan berteriak kepada kerumunan: jangan
            dengarkan dia, dia pembohong. Kampanye itu jauh lebih merusak dari
            sekadar menolak di satu pertemuan keluarga.
          </p>

          <p>
            Al-Quran memang menyatakan di tempat lain bahwa keimanan harus
            melampaui ikatan darah, bahwa seorang mukmin tidak akan berpihak
            pada mereka yang menentang Allah meski mereka ayah, anak, atau
            saudara kandung sendiri (
            <VerseLink surah={58} ayat={22}>
              Q 58:22
            </VerseLink>
            ). Tapi menetapkan nama seseorang dalam wahyu, sebagai individu
            spesifik yang sudah dikutuk secara ilahi, adalah sesuatu yang
            berbeda dari prinsip umum itu.
          </p>

          <p>Tapi bukan kampanye pasar itu yang menghasilkan surah.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Istrinya ikut dikutuk
          </h2>

          <p>
            Ummu Jamil, istri Abu Lahab, adalah saudara perempuan Abu Sufyan.
            Ia disebut dalam surah yang sama: pembawa kayu bakar, dengan tali
            sabut di lehernya.
          </p>

          <p>
            Menurut Tafsir Al-Qurthubi dan Ibn Kathir, Ummu Jamil sering
            meletakkan duri di jalan yang biasa dilalui Muhammad. Ia punya
            kalung berharga dan dilaporkan pernah berkata: aku akan menjual ini
            dan menggunakan hasilnya untuk melawan Muhammad.
          </p>

          <p>
            Dalam tradisi penafsiran, "pembawa kayu bakar" dibaca dua cara:
            literal, ia memang meletakkan kayu berduri di jalan; atau kiasan,
            ia adalah penyebar fitnah yang menyulut permusuhan. Tafsir
            Al-Qurthubi mencatat kedua bacaan itu tanpa memilih.
          </p>

          <p>
            Yang menarik adalah keputusan untuk memasukkan istri seseorang
            dalam kutukan yang sama. Abu Lahab sudah cukup sebagai target. Ummu
            Jamil disebut secara terpisah, dengan hukumannya sendiri, dalam
            kitab yang akan dibaca berabad-abad kemudian.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pertanyaan tentang kapan
          </h2>

          <p>
            John Burton, dalam kajiannya tentang kronologi kompilasi Al-Quran,
            mengajukan pertanyaan yang tidak mendapat jawaban memuaskan:
            mengapa mengutuk anggota keluarga sendiri secara terbuka pada tahap
            paling awal dakwah?
          </p>

          <p>
            Dalam masyarakat Arab yang sangat mengutamakan ikatan klan,
            mengutuk paman dengan nama bisa mengasingkan banyak orang yang
            masih netral. Ini bukan langkah yang menguntungkan di awal gerakan
            yang masih rapuh.
          </p>

          <p>
            Burton mencatat kemungkinan bahwa surah ini disempurnakan atau
            ditempatkan dalam urutan Al-Quran setelah kematian Abu Lahab,
            sekitar 624 M, tidak lama setelah Badar. Abu Lahab tidak ikut ke
            Badar. Putra-putranya ditawan. Ia mati beberapa hari kemudian
            karena penyakit menular, dan jenazahnya dibiarkan tiga hari karena
            keluarganya takut tertular. Akhirnya jasadnya ditimbun batu dari
            jauh.
          </p>

          <p>
            Kematian seperti itu, dalam konteks orang yang sudah dikutuk, mudah
            dibaca sebagai bukti bahwa kutukan terpenuhi. Tapi ada perbedaan
            antara prediksi yang kemudian terpenuhi, dan narasi yang disusun
            setelah kejadiannya untuk terlihat seperti prediksi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Nama yang tidak pernah ada di Al-Quran
          </h2>

          <p>
            Abd al-'Uzza adalah namanya. Arwa binti Harb adalah nama istrinya.
          </p>

          <p>
            Al-Quran tidak menggunakan nama-nama itu. Yang dipakai adalah
            julukan: Abu Lahab, bapak nyala api. Dan julukan itu terasa terlalu
            pas untuk surah tentang neraka, tentang api yang bergejolak, tentang
            hukuman yang menyala.
          </p>

          <p>
            Apakah julukan itu memang sudah dikenal sebelum surah ini turun,
            atau kitab yang kemudian membentuk cara kita membaca orangnya, tidak
            ada yang bisa memastikan. Tapi nama itu sekarang melekat selamanya,
            dalam kitab yang dibaca lebih dari satu miliar orang, sebagai
            sinonim untuk orang yang paling celaka.
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
                { surah: 111, ayat: 1, label: "Al-Masad 1" },
                { surah: 26, ayat: 214, label: "Asy-Syu'ara 214" },
                { surah: 58, ayat: 22, label: "Al-Mujadila 22" },
                { surah: 9, ayat: 113, label: "At-Tawbah 113" },
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

        <ArticleRecommendations currentSlug="nama-di-dalam-api" />
      </article>
    </main>
  );
}
