/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Allah di Mekah, Allah di Madinah | Qurai",
  description:
    "Al-Quran menyebut anggur sebagai rezeki di Mekah, lalu menyebutnya perbuatan setan di Madinah. Perubahan itu bukan satu-satunya. Dari toleransi ke perintah membunuh, dari kesetaraan ke hierarki — semuanya berkorelasi dengan satu hal: kekuasaan.",
  openGraph: {
    images: [
      {
        url: "/article-images/12-allah-di-mekah-allah-di-madinah-illustration.png",
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

export default function AllahMekahMadinahArticle() {
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
            At-Taubah 9:29 · An-Nahl 16:67 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 13 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Allah di Mekah, Allah di Madinah
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran menyebut anggur sebagai rezeki di Mekah, lalu menyebutnya
            perbuatan setan di Madinah. Perubahan itu bukan satu-satunya. Dari
            toleransi ke perintah membunuh, dari kesetaraan ke hierarki,
            semuanya berkorelasi dengan satu hal: kekuasaan.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/12-allah-di-mekah-allah-di-madinah-illustration.png"
            alt="Ilustrasi editorial dua kota historis dihubungkan jalan manuskrip dari anggur ke palu hukum"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="allah-mekah-madinah" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={16} ayat={67}>
              An-Nahl 16:67
            </VerseLink>{" "}
            menyebut anggur sebagai rezeki yang baik dan tanda kebesaran Allah
            bagi orang yang memikirkan. Tidak ada larangan, tidak ada
            peringatan. Anggur adalah nikmat.
          </p>

          <p>Ayat itu turun di Mekah.</p>

          <p>
            Dua belas tahun kemudian, di Madinah,{" "}
            <VerseLink surah={5} ayat={90}>
              Al-Maidah 5:90
            </VerseLink>{" "}
            menyebut anggur sebagai perbuatan setan yang harus dihindari.
            Pelarangannya tidak tiba-tiba. Sebelum itu ada{" "}
            <VerseLink surah={2} ayat={219}>
              Al-Baqarah 2:219
            </VerseLink>
            : ada dosa besar tapi ada manfaatnya. Lalu{" "}
            <VerseLink surah={4} ayat={43}>
              An-Nisa 4:43
            </VerseLink>
            : jangan shalat dalam keadaan mabuk. Baru kemudian larangan total.
          </p>

          <p>Tiga ayat dalam empat tahun, masing-masing memperketat yang sebelumnya.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Legislator yang sabar
          </h2>

          <p>
            Apologetika Islam menyebut ini sebagai strategi bertahap: Allah
            menyesuaikan perintah dengan kesiapan masyarakat. Tapi pernyataan
            itu membuka masalah yang lebih besar dari yang diselesaikannya.
            Kalau standar moral bisa diturunkan bertahap karena manusia belum
            siap, maka wahyu tidak sedang mengungkapkan kebenaran ilahi yang
            absolut. Ia sedang bernegosiasi dengan realitas sosial.
          </p>

          <p>
            Kasus khamar menarik bukan karena larangannya, tapi karena
            prosesnya terlalu mirip dengan cara seorang legislator pragmatis
            bekerja. Legislator yang bijak tidak langsung melarang kebiasaan
            yang sudah mengakar. Ia pertama-tama menanamkan keraguan. Lalu
            membatasi praktik di waktu-waktu tertentu. Lalu baru melarang penuh
            ketika kapasitas untuk menegakkan larangan sudah tersedia.
          </p>

          <p>
            Di Mekah, ketika komunitas Muslim adalah minoritas yang rentan,
            Al-Quran berbunyi: anggur itu rezeki. Di Madinah, ketika komunitas
            itu punya kekuatan untuk menegakkan hukum, Al-Quran berbunyi:
            anggur itu perbuatan setan.
          </p>

          <p>
            Pola yang sama muncul jauh lebih tajam ketika menyangkut pertanyaan
            yang lebih besar: apakah orang boleh menolak Islam?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tidak ada paksaan, lalu ada paksaan
          </h2>

          <p>
            <VerseLink surah={2} ayat={256}>
              Al-Baqarah 2:256
            </VerseLink>{" "}
            adalah ayat yang paling sering dikutip untuk membuktikan toleransi
            Islam: <em>"Tidak ada paksaan dalam agama."</em>
          </p>

          <p>
            <VerseLink surah={10} ayat={99}>
              Yunus 10:99
            </VerseLink>{" "}
            bahkan lebih eksplisit:{" "}
            <em>
              "Apakah kamu hendak memaksa manusia supaya mereka semua menjadi
              beriman?"
            </em>
          </p>

          <p>
            Lalu{" "}
            <VerseLink surah={4} ayat={89}>
              An-Nisa 4:89
            </VerseLink>{" "}
            turun di Madinah:{" "}
            <em>
              "Jika mereka berpaling, tawan dan bunuhlah mereka di mana saja
              kamu menemuinya."
            </em>
          </p>

          <p>
            Tradisi Islam menyelesaikan kontradiksi ini dengan konsep
            nasikh-mansukh: ayat-ayat Madinah yang lebih keras membatalkan
            ayat-ayat Mekah yang lebih lunak. Ayat toleransi dibatalkan oleh
            ayat pedang.
          </p>

          <p>
            Tapi solusi itu lebih mengungkap daripada menyembunyikan. Kalau
            ayat bisa membatalkan ayat, wahyu berubah sesuai keadaan. Dan kalau
            wahyu berubah sesuai keadaan, pertanyaan yang wajar adalah: keadaan
            siapa?
          </p>

          <p>
            Komunitas Muslim di Mekah tidak punya pasukan. Di Madinah, mereka
            punya. Dan di sana perintahnya berubah.
          </p>

          <p>
            Perubahan itu tidak hanya menyangkut non-Muslim secara umum. Ada
            satu kelompok yang mengalami perubahan perlakuan paling dramatis,
            dan bersamaan dengan itu, punya alasan historis yang spesifik.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tetangga yang berubah menjadi musuh
          </h2>

          <p>
            Ketika Muhammad tiba di Madinah pada 622 M, salah satu kelompok
            yang ia harapkan bisa menerimanya adalah komunitas Yahudi setempat.
            Mereka monoteistik, mereka punya tradisi kenabian, dan mereka tahu
            kitab-kitab suci yang Muhammad rujuk dalam wahyunya.
          </p>

          <p>Mereka menolak.</p>

          <p>
            Bukan karena tidak tahu, tapi justru karena tahu. Mereka bisa
            membandingkan klaim Muhammad dengan tradisi mereka sendiri dan
            menemukan ketidakcocokan.
          </p>

          <p>
            Di Mekah,{" "}
            <VerseLink surah={29} ayat={46}>
              Al-Ankabut 29:46
            </VerseLink>{" "}
            mengajarkan:{" "}
            <em>
              "Janganlah kamu berdebat dengan Ahli Kitab, melainkan dengan cara
              yang paling baik."
            </em>{" "}
            Ayat itu turun saat komunitas Yahudi masih berada di kejauhan,
            belum menjadi aktor politik yang nyata.
          </p>

          <p>
            Di Madinah, setelah penolakan itu menjadi nyata dan komunitas
            Yahudi menjadi kompetitor dalam perebutan pengaruh,{" "}
            <VerseLink surah={9} ayat={30}>
              At-Taubah 9:30
            </VerseLink>{" "}
            turun dengan nada yang sangat berbeda:{" "}
            <em>
              "Orang-orang Yahudi berkata: Uzair itu putra Allah. Dilaknati
              Allah mereka, bagaimana mereka sampai berpaling?"
            </em>
          </p>

          <p>
            Dari "debatlah dengan cara terbaik" ke "dilaknati Allah mereka" ada
            jarak yang tidak kecil. Dan jarak itu bisa diukur cukup tepat
            dengan seberapa jauh hubungan politik antara komunitas Muslim dan
            komunitas Yahudi Madinah memburuk antara 622 dan 627 M, ketika tiga
            suku Yahudi utama Madinah satu per satu diusir atau dihancurkan.
          </p>

          <p>
            <VerseLink surah={9} ayat={29}>
              At-Taubah 9:29
            </VerseLink>{" "}
            menyempurnakan postur ini: perangi Ahli Kitab sampai mereka
            membayar jizyah dalam keadaan tunduk.
          </p>

          <p>Bukan debat. Bukan dakwah. Pajak dan kerendahan.</p>

          <p>
            Perubahan dari Mekah ke Madinah tidak hanya menyangkut hubungan
            dengan orang luar. Di dalam komunitas itu sendiri, struktur yang
            terbentuk di Madinah meninggalkan tanda yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Setara di surga, tidak setara di pengadilan
          </h2>

          <p>
            <VerseLink surah={33} ayat={35}>
              Al-Ahzab 33:35
            </VerseLink>{" "}
            berbicara tentang kesetaraan spiritual dengan cukup eksplisit:
            laki-laki dan perempuan yang Muslim, yang mukmin, yang taat, yang
            sabar, semuanya disebut setara di hadapan Allah dan dijanjikan
            ampunan dan pahala yang sama.
          </p>

          <p>
            Tapi ayat-ayat Madinah yang mengatur kehidupan praktis bergerak ke
            arah yang berbeda.
          </p>

          <p>
            <VerseLink surah={4} ayat={34}>
              An-Nisa 4:34
            </VerseLink>{" "}
            menetapkan laki-laki sebagai <em>qawwam</em>, pemimpin atau
            pengelola, atas perempuan. Dasar yang disebutkan adalah dua hal:
            laki-laki lebih unggul, dan laki-laki memberi nafkah. Ayat itu
            berlanjut dengan mengizinkan pemukulan sebagai langkah terakhir
            dalam mendisiplinkan istri yang tidak taat.
          </p>

          <p>
            <VerseLink surah={4} ayat={11}>
              An-Nisa 4:11
            </VerseLink>{" "}
            membagi warisan: bagian anak laki-laki dua kali lipat bagian anak
            perempuan.
          </p>

          <p>
            <VerseLink surah={2} ayat={282}>
              Al-Baqarah 2:282
            </VerseLink>
            , dalam konteks pencatatan utang, menetapkan bahwa kesaksian dua
            perempuan setara dengan kesaksian satu laki-laki. Alasan yang
            diberikan di dalam ayat itu sendiri: supaya kalau satu lupa, yang
            lain bisa mengingatkan.
          </p>

          <p>
            Pernyataan tentang kesetaraan spiritual di Al-Ahzab 33:35 tidak
            dicabut. Ia tetap ada di dalam Al-Quran. Tapi ia berdampingan dengan
            sistem hukum yang membangun hierarki berdasarkan jenis kelamin di
            hampir setiap domain kehidupan yang diatur. Sebuah kitab yang
            menyatakan kesetaraan sambil melembagakan ketidaksetaraan tidak
            sedang mengalami pertumbuhan. Ia sedang mengakomodasi dua hal yang
            tidak bisa berdiri bersama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang berubah bukan hanya perintah
          </h2>

          <p>
            Dari Mekah ke Madinah, bukan hanya hukum yang berubah. Cara
            Al-Quran menggambarkan Allah juga berubah.
          </p>

          <p>
            Surah-surah Mekah dipenuhi Ar-Rahman dan Ar-Rahim.{" "}
            <VerseLink surah={21} ayat={107}>
              Al-Anbiya 21:107
            </VerseLink>{" "}
            menyebut Muhammad sebagai <em>rahmatan lil 'alamin</em>, rahmat
            bagi semesta.{" "}
            <VerseLink surah={6} ayat={108}>
              Al-An'am 6:108
            </VerseLink>{" "}
            melarang memaki sesembahan orang lain.
          </p>

          <p>
            Di Madinah,{" "}
            <VerseLink surah={48} ayat={29}>
              Al-Fath 48:29
            </VerseLink>{" "}
            menggambarkan sahabat Muhammad sebagai{" "}
            <em>asyidda'u 'alal kuffar</em>, keras terhadap orang kafir.
            At-Taubah 9:29 memerintahkan perang terhadap Ahli Kitab sampai
            mereka membayar jizyah dalam keadaan tunduk. At-Taubah 9:30
            mengutuk keyakinan Yahudi dan Nasrani: dilaknati Allah mereka.
          </p>

          <p>
            Korelasi antara kapasitas kekuasaan dan skala perintah ilahi
            terlalu konsisten untuk tidak diperhatikan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang tersisa dari argumen "kontekstual"
          </h2>

          <p>
            Sarjana reformis Muslim modern, termasuk Fazlur Rahman dan Abdullah
            Saeed, berpendapat bahwa hukum-hukum keras Madinah harus dipahami
            sebagai solusi kontekstual untuk masalah abad ke-7. Yang universal
            adalah prinsip Mekah: keadilan, kasih sayang, kebebasan beragama.
            Hukum pidana, jizyah, aturan warisan yang timpang, semuanya adalah
            ekspresi prinsip itu dalam konteks spesifik yang tidak harus
            diterapkan hari ini.
          </p>

          <p>
            Argumen itu secara hermeneutis lebih canggih dari literalisme. Tapi
            ia juga mengakui premis yang justru ingin dihindari: sebagian besar
            dari Al-Quran adalah produk situasional, bukan universal.
          </p>

          <p>
            Dan kalau begitu, siapa yang memutuskan mana yang universal dan
            mana yang kontekstual? Al-Quran sendiri tidak menjelaskan ini.
            Jawabannya ada pada pembacanya, bukan pada kitabnya. Dan pembaca yang
            berbeda akan menarik garis itu di tempat yang berbeda, sesuai
            kebutuhan masing-masing.
          </p>

          <p>
            At-Taubah adalah salah satu surah terakhir yang turun. Dalam
            kronologi wahyu, ia adalah kata terakhir Al-Quran tentang hubungan
            dengan non-Muslim. Isinya bukan toleransi. Isinya adalah pajak,
            penaklukan, dan perintah membunuh.
          </p>

          <p>
            Kalau yang belakangan membatalkan yang sebelumnya, maka kata
            terakhir itu yang berlaku.
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
                { surah: 16, ayat: 67, label: "An-Nahl 67" },
                { surah: 2, ayat: 219, label: "Al-Baqarah 219" },
                { surah: 4, ayat: 43, label: "An-Nisa 43" },
                { surah: 5, ayat: 90, label: "Al-Maidah 90" },
                { surah: 2, ayat: 256, label: "Al-Baqarah 256" },
                { surah: 10, ayat: 99, label: "Yunus 99" },
                { surah: 4, ayat: 89, label: "An-Nisa 89" },
                { surah: 29, ayat: 46, label: "Al-Ankabut 46" },
                { surah: 9, ayat: 29, label: "At-Taubah 29" },
                { surah: 9, ayat: 30, label: "At-Taubah 30" },
                { surah: 33, ayat: 35, label: "Al-Ahzab 35" },
                { surah: 4, ayat: 34, label: "An-Nisa 34" },
                { surah: 4, ayat: 11, label: "An-Nisa 11" },
                { surah: 2, ayat: 282, label: "Al-Baqarah 282" },
                { surah: 21, ayat: 107, label: "Al-Anbiya 107" },
                { surah: 6, ayat: 108, label: "Al-An'am 108" },
                { surah: 48, ayat: 29, label: "Al-Fath 29" },
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

        <ArticleRecommendations currentSlug="allah-mekah-madinah" />
      </article>
    </main>
  );
}
