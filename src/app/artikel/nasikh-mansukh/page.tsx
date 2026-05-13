/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Nasikh-Mansukh: Ketika Wahyu Butuh Koreksi | Qurai",
  description:
    "Al-Baqarah 2:106 mengakui bahwa ada ayat yang diganti dengan yang 'lebih baik.' Tapi kalau ada yang lebih baik, artinya yang lama kurang baik. Dan wahyu yang kurang baik dari entitas yang diklaim mahatahu adalah kontradiksi yang tidak bisa diselesaikan hanya dengan menamainya kebijaksanaan bertahap.",
  alternates: {
    canonical: "/artikel/nasikh-mansukh",
  },
  openGraph: {
    title: "Nasikh-Mansukh: Ketika Wahyu Butuh Koreksi | Qurai",
    description:
      "Al-Baqarah 2:106 mengakui bahwa ada ayat yang diganti dengan yang 'lebih baik.' Tapi kalau ada yang lebih baik, artinya yang lama kurang baik.",
    url: "/artikel/nasikh-mansukh",
    type: "article",
    images: [
      {
        url: "/article-images/26-nasikh-mansukh-illustration.png",
        width: 1672,
        height: 941,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasikh-Mansukh: Ketika Wahyu Butuh Koreksi | Qurai",
    description:
      "Al-Baqarah 2:106 mengakui bahwa ada ayat yang diganti dengan yang 'lebih baik.' Tapi kalau ada yang lebih baik, artinya yang lama kurang baik.",
    images: ["/article-images/26-nasikh-mansukh-illustration.png"],
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

export default function NasikhMansukhArticle() {
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
            Al-Mujadilah 58:12 · Al-Baqarah 2:106 &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Nasikh-Mansukh: Ketika Wahyu Butuh Koreksi
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Baqarah 2:106 mengakui bahwa ada ayat yang diganti dengan yang
            "lebih baik." Tapi kalau ada yang lebih baik, artinya yang lama
            kurang baik. Dan wahyu yang kurang baik dari entitas yang diklaim
            mahatahu adalah kontradiksi yang tidak bisa diselesaikan hanya
            dengan menamainya kebijaksanaan bertahap.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/26-nasikh-mansukh-illustration.png"
            alt="Ilustrasi editorial manuskrip palimpsest dengan koreksi hukum di meja scriptorium gelap"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <ArticleAudio slug="nasikh-mansukh" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={58} ayat={12}>
              Al-Mujadilah 58:12
            </VerseLink>{" "}
            memerintahkan setiap Muslim yang ingin berbicara secara pribadi
            dengan Nabi untuk terlebih dahulu bersedekah. Ketentuan ini berlaku
            tanpa penjelasan tambahan.
          </p>

          <p>
            Satu ayat kemudian,{" "}
            <VerseLink surah={58} ayat={13}>58:13</VerseLink> mencabut perintah
            itu. Alasan pembatalannya dicantumkan langsung:{" "}
            <em>
              "Apakah kamu takut akan (menjadi miskin) karena kamu memberikan
              sedekah sebelum pembicaraan dengan Rasul?"
            </em>
          </p>

          <p>
            Konsekuensi ekonomi dari ketentuan pertama rupanya tidak
            diantisipasi. Maka ayat kedua turun untuk memperbaiki keadaan.
          </p>

          <p>
            Kalau pembuat ketentuan itu tahu sejak awal bahwa sedekah wajib
            akan memberatkan umat, ketentuan itu tidak perlu dibuat lebih dulu.
            Tapi ia dibuat, diberlakukan, lalu dicabut dengan alasan yang persis
            menunjukkan bahwa konsekuensinya tidak terprediksi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Doktrin yang mengakui revisinya sendiri
          </h2>

          <p>
            Doktrin yang menaungi kasus semacam ini adalah nasikh-mansukh,
            penghapus dan yang dihapus. Al-Qur'an sendiri menyebut prinsip ini
            di{" "}
            <VerseLink surah={2} ayat={106}>Al-Baqarah 2:106</VerseLink>:{" "}
            <em>
              "Ayat mana saja yang Kami nasakhkan, atau Kami jadikan manusia
              lupa kepadanya, Kami datangkan yang lebih baik daripadanya atau
              yang sebanding dengannya."
            </em>
          </p>

          <p>
            Pernyataan itu membawa masalahnya sendiri. Kalau ada ayat pengganti
            "yang lebih baik," artinya ada ayat yang kurang baik. Wahyu yang
            butuh penggantian adalah wahyu yang tidak optimal. Dan wahyu yang
            tidak optimal dari entitas yang diklaim mahatahu adalah hal yang
            tidak bisa diselesaikan hanya dengan menamainya kebijaksanaan
            bertahap.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Satu ayat, seratus dua puluh empat pembatalan
          </h2>

          <p>
            Kasus paling dramatis adalah{" "}
            <VerseLink surah={9} ayat={5}>At-Taubah 9:5</VerseLink>, yang
            dikenal dalam literatur tafsir klasik sebagai "ayat pedang":
          </p>

          <p>
            <em>
              "Apabila sudah habis bulan-bulan Haram itu, maka bunuhlah
              orang-orang musyrikin itu di mana saja kamu jumpai mereka, dan
              tangkaplah mereka. Kepunglah mereka dan intailah di tempat
              pengintaian..."
            </em>
          </p>

          <p>
            Ibn Kathir dalam tafsirnya mencatat bahwa ayat ini membatalkan
            sekitar 124 ayat yang sebelumnya memerintahkan toleransi,
            koeksistensi, dan pendekatan damai terhadap non-Muslim. Satu ayat,
            ratusan ketentuan sebelumnya jadi gugur.
          </p>

          <p>
            Kalau pendekatan damai itu adalah rencana ilahi yang sudah
            ditetapkan, mengapa kemudian diganti secara menyeluruh? Kalau
            memang akan diganti, mengapa diturunkan lebih dulu?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Argumen gradualisme dan masalahnya
          </h2>

          <p>
            Argumen yang lazim menjawab pertanyaan itu adalah gradualisme: wahyu
            turun bertahap sesuai kondisi masyarakat. Pengharaman khamar sering
            dijadikan contoh. Pertama diakui sebagai rezeki dalam{" "}
            <VerseLink surah={16} ayat={67}>An-Nahl 16:67</VerseLink>, lalu
            dinyatakan memiliki manfaat sekaligus mudarat di{" "}
            <VerseLink surah={2} ayat={219}>Al-Baqarah 2:219</VerseLink>,
            kemudian dilarang dikonsumsi menjelang shalat di{" "}
            <VerseLink surah={4} ayat={43}>An-Nisa 4:43</VerseLink>, dan
            akhirnya diharamkan total di{" "}
            <VerseLink surah={5} ayat={90}>Al-Maidah 5:90–91</VerseLink>.
          </p>

          <p>Empat tahap. Dua dekade lebih.</p>

          <p>
            Tapi argumen gradualisme mengandaikan bahwa kondisi dan respons
            masyarakat tidak diketahui sebelumnya, bahwa hasilnya tidak bisa
            diprediksi sampai dicoba lebih dulu. Entitas yang tahu segalanya
            seharusnya tahu sejak awal seberapa lama proses itu butuh dan apa
            yang akan berhasil. Wahyu yang meraba-raba jalannya sendiri sebelum
            sampai pada ketentuan final lebih tepat disebut eksperimen daripada
            perencanaan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kitab yang sempurna dan ayat yang dibatalkan
          </h2>

          <p>
            Seluruh doktrin ini menjadi lebih rumit karena Al-Qur'an sendiri
            mengklaim tidak ada yang terlewat di dalamnya.{" "}
            <VerseLink surah={6} ayat={38}>Al-An'am 6:38</VerseLink> menyatakan{" "}
            <em>"Tiadalah Kami alpakan sesuatupun di dalam Al-Kitab."</em>{" "}
            <VerseLink surah={5} ayat={3}>Al-Maidah 5:3</VerseLink> menyatakan
            bahwa agama telah disempurnakan.
          </p>

          <p>
            Dua klaim itu sulit dipertahankan bersamaan dengan nasikh-mansukh.
            Kalau kitab itu sudah sempurna, mengapa ada yang perlu dibatalkan?
            Kalau ada yang perlu dibatalkan, kesempurnaan itu di bagian mana?
          </p>

          <p>
            Para ulama berbeda pendapat tentang berapa banyak ayat yang termasuk
            mansukh. Ibn Hazm menyebut sekitar 214, sebagian lain menyebut hanya
            beberapa. Ketidaksepakatan selama lebih dari seribu tahun itu berarti
            tidak ada cara bagi pembaca biasa untuk tahu dari kitab itu sendiri
            ayat mana yang masih berlaku dan mana yang sudah tidak.
          </p>

          <p>
            Al-Baqarah 2:106 menjanjikan pengganti yang lebih baik. Tapi
            Al-Qur'an tidak menyertakan daftar yang sudah diganti.
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
                { surah: 58, ayat: 12, label: "Al-Mujadilah 12" },
                { surah: 58, ayat: 13, label: "Al-Mujadilah 13" },
                { surah: 2, ayat: 106, label: "Al-Baqarah 106" },
                { surah: 9, ayat: 5, label: "At-Taubah 5" },
                { surah: 16, ayat: 67, label: "An-Nahl 67" },
                { surah: 2, ayat: 219, label: "Al-Baqarah 219" },
                { surah: 4, ayat: 43, label: "An-Nisa 43" },
                { surah: 5, ayat: 90, label: "Al-Maidah 90" },
                { surah: 6, ayat: 38, label: "Al-An'am 38" },
                { surah: 5, ayat: 3, label: "Al-Maidah 3" },
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

        <ArticleRecommendations currentSlug="nasikh-mansukh" />
      </article>
    </main>
  );
}
