/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Tentang Kawin Kontrak | Qurai",
  description:
    "An-Nisa 4:24 menggunakan kata istamta'tum, akar kata yang sama dengan mut'ah. Tiga mufasir klasik terbesar mengakui ayat ini tentang nikah mut'ah. Yang melarangnya bukan Muhammad, tapi Umar — dan Umar sendiri yang mengatakannya, dalam Shahih Muslim.",
  openGraph: {
    images: [
      {
        url: "/article-images/16-nikah-mutah-illustration.png",
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

export default function NikahMutahArticle() {
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
            An-Nisa 4:24 · Al-Tahrim 66:1 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Tentang Kawin Kontrak
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Tiga mufasir klasik terbesar sepakat bahwa An-Nisa 4:24 berbicara
            tentang nikah mut'ah. Tidak ada ayat Quran yang membatalkannya.
            Yang melarangnya adalah Umar, dan Umar sendiri yang mencatatkan
            pengakuan itu dalam Shahih Muslim.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/16-nikah-mutah-illustration.png"
            alt="Ilustrasi editorial kontrak perkawinan, cincin, dan kantong koin di meja gelap"
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
            <VerseLink surah={4} ayat={24}>
              An-Nisa 4:24
            </VerseLink>{" "}
            memuat satu kata yang menjadi akar dari seluruh kontroversi:{" "}
            <em>istamta'tum</em>. "Dan yang telah kamu nikmati (
            <em>istamta'tum</em>) di antara mereka, maka berikanlah kepada
            mereka maharnya sebagai suatu kewajiban." Kata itu berasal dari
            akar yang sama dengan <em>mut'ah</em>: menikmati, memanfaatkan,
            menggunakan dalam batas waktu tertentu.
          </p>

          <p>
            Bukan kebetulan linguistik. Tiga mufasir besar Islam klasik membaca
            ayat ini dengan kesimpulan yang sama.
          </p>

          <p>
            At-Tabari dalam <em>Jami' al-Bayan</em>, yang sampai hari ini
            dianggap sebagai induk semua tafsir, mencatat bahwa para mufasir
            sepakat ayat ini tentang nikah mut'ah. Ibnu Katsir, yang tafsirnya
            masih diajarkan di pesantren dan madrasah di seluruh dunia, menulis:
            "Yakni mahar yang kamu relakan untuk mereka karena kamu telah
            menikmati mereka dalam nikah mut'ah." Tafsir al-Jalalayn, teks
            pengantar tafsir yang dipakai selama berabad-abad, menyatakan hal
            yang sama: "Ayat ini bicara tentang nikah mut'ah yang pernah
            dihalalkan."
          </p>

          <p>
            "Yang pernah dihalalkan." Kata <em>pernah</em> itu yang membuka
            semua persoalan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang tercatat dalam koleksi hadis Sunni sendiri
          </h2>

          <p>
            Shahih Bukhari 5119 memuat kesaksian langsung: "Kami melakukan
            nikah mut'ah dengan segenggam kurma dan tepung sebagai mahar."
            Shahih Muslim 1405 lebih spesifik: Rasulullah memberikan izin
            melakukan nikah mut'ah selama tiga hari dalam Perang Hunain.
          </p>

          <p>
            Kedua koleksi itu bukan milik Syiah. Bukhari dan Muslim adalah dua
            koleksi hadis paling otoritatif dalam tradisi Sunni, dua dari{" "}
            <em>Kutub as-Sittah</em>. Praktik mut'ah tercatat bukan dalam
            sumber-sumber yang bisa diklaim bias, tapi dalam corpus yang paling
            dijaga oleh Muslim Sunni sendiri.
          </p>

          <p>
            Praktik itu ada. Yang menjadi pertanyaan adalah kapan dan bagaimana
            ia berhenti.
          </p>

          <p>
            Shahih Bukhari dalam Kitab at-Tafsir mencatat bahwa nikah mut'ah
            masih dipraktikkan pada masa Abu Bakr dan awal masa Umar. Ini
            penting karena di tempat lain dalam koleksi yang sama, ada klaim
            bahwa Muhammad sendiri yang melarang mut'ah "sampai hari kiamat"
            (Muslim 1406). Kalau larangan itu datang dari Muhammad, mengapa
            praktik itu masih berjalan selama kepemimpinan dua khalifah pertama
            setelahnya, dan tidak ada satu pun catatan tentang protes atau
            hukuman?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kesaksian Umar
          </h2>

          <p>
            Kunci dari seluruh diskusi ini ada di Shahih Muslim 1407.
          </p>

          <p>
            Umar bin Khattab berkata: "Ada dua mut'ah yang berlaku di zaman
            Rasulullah, dan aku melarang keduanya: mut'ah haji dan mut'ah
            pernikahan."
          </p>

          <p>
            <em>Ana nahaytuhuma.</em> Aku yang melarang keduanya.
          </p>

          <p>
            Bukan: "Muhammad melarang dan aku tegaskan kembali larangannya."
            Bukan: "Wahyu datang kepada Muhammad lalu aku lanjutkan perintah
            itu." Umar menggunakan kata ganti orang pertama tunggal, dengan
            tegas, tanpa klausa yang mengembalikan keputusan itu kepada Nabi.
          </p>

          <p>
            Dan hadis ini ada di Shahih Muslim, koleksi yang diakui
            otoritasnya oleh ulama Sunni selama lebih dari seribu tahun, bukan
            di sumber Syiah yang bisa diklaim tidak dapat dipercaya.
          </p>

          <p>
            Kalau Muhammad sudah melarang mut'ah "sampai hari kiamat" dalam
            sebuah pidato publik, tidak ada cara untuk menjelaskan mengapa
            praktik itu masih berjalan sampai masa Umar. Dan tidak ada cara
            untuk menjelaskan mengapa Umar mengklaim keputusan itu sebagai
            miliknya, bukan sebagai pelaksanaan dari larangan yang sudah ada.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Masalah yang tidak bisa diselesaikan dari dalam teks
          </h2>

          <p>
            <VerseLink surah={4} ayat={24}>
              An-Nisa 4:24
            </VerseLink>{" "}
            tidak pernah di-nasakh oleh ayat lain dalam Quran.
          </p>

          <p>
            Al-Quran memuat jejak abrogasi yang bisa dilacak. Larangan khamr
            tidak datang dalam satu langkah:{" "}
            <VerseLink surah={2} ayat={219}>
              Al-Baqarah 2:219
            </VerseLink>{" "}
            mengatakan dalam khamr ada dosa besar dan ada manfaat bagi manusia,
            tapi dosanya lebih besar. Kemudian{" "}
            <VerseLink surah={5} ayat={90}>
              Al-Maidah 5:90
            </VerseLink>{" "}
            datang dengan pernyataan yang lebih tegas: khamr adalah perbuatan
            setan, maka jauhilah. Prosesnya bertahap, dan jejaknya ada dalam
            teks. Larangan zina ada di ayatnya:{" "}
            <VerseLink surah={17} ayat={32}>
              Al-Isra 17:32
            </VerseLink>
            . Ketika Allah melarang sesuatu yang penting, larangannya masuk ke
            dalam teks.
          </p>

          <p>Untuk mut'ah, tidak ada ayat yang membatalkan 4:24.</p>

          <p>
            Ada satu preseden yang relevan.{" "}
            <VerseLink surah={66} ayat={1}>
              Al-Tahrim 66:1
            </VerseLink>{" "}
            diturunkan ketika Muhammad melarang dirinya sendiri dari sesuatu
            yang halal, dan Allah merespons langsung dalam teks: "Wahai Nabi,
            mengapa engkau mengharamkan apa yang Allah halalkan bagimu?" Allah
            turun tangan mengoreksi, dan koreksinya tercatat. Kalau mut'ah
            benar-benar diharamkan melalui wahyu, kita bisa berharap ada
            respons yang serupa dalam teks.
          </p>

          <p>
            Yang ada hanya tidak ada.
          </p>

          <p>
            Para ulama Sunni yang melarang mut'ah berargumen bahwa hadis sahih
            bisa me-nasakh Quran. Tapi ini melanggar hierarki yang mereka
            sendiri tetapkan: Quran adalah sumber tertinggi, dan tidak ada yang
            berdiri di atasnya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua tradisi, satu sumber yang sama
          </h2>

          <p>
            Perpecahan Sunni-Syiah punya banyak dimensi politik dan teologis
            yang rumit. Tapi dalam kasus mut'ah, garisnya jelas. Syiah
            mengikuti apa yang tertulis di 4:24 dan atribusi larangan kepada
            Umar yang ada di Muslim 1407. Iran mengakui dan melegalkan nikah
            mut'ah, disebut <em>sigheh</em>, berdasarkan argumen bahwa tidak
            ada dalil Quran yang melarangnya dan yang melarang adalah seorang
            khalifah, bukan Nabi.
          </p>

          <p>
            Sunni melarang mut'ah, tapi dalil Quran yang eksplisit tidak ada.
            Pelarangannya berdiri di atas hadis yang bermasalah secara internal
            dan di atas kesaksian Umar sendiri yang secara eksplisit mengklaim
            larangan itu sebagai keputusannya.
          </p>

          <p>
            Tradisi yang paling keras menyatakan diri mengikuti Quran dan
            Sunnah Nabi, bukan pendapat manusia, dalam kasus ini mengikuti
            keputusan seorang manusia yang tidak mengklaim meneruskan perintah
            Nabi. Dan manusia itu sendiri yang menuliskan pengakuannya, dalam
            koleksi hadis yang paling mereka percaya.
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
                { surah: 4, ayat: 24, label: "An-Nisa 24" },
                { surah: 2, ayat: 219, label: "Al-Baqarah 219" },
                { surah: 5, ayat: 90, label: "Al-Maidah 90" },
                { surah: 17, ayat: 32, label: "Al-Isra 32" },
                { surah: 66, ayat: 1, label: "Al-Tahrim 1" },
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
      </article>
    </main>
  );
}
