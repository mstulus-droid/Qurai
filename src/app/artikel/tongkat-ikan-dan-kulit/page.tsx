/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { MukjizatSeriesNav, MukjizatSeriesOutro } from "@/components/mukjizat-series-nav";

export const metadata: Metadata = {
  title: "Tongkat, Ikan, dan Kulit yang Berbicara | Qurai",
  description:
    "Ta Ha 20:20 dan Al-A'raf 7:107 menyebut tongkat Musa dengan dua kata berbeda untuk peristiwa yang sama. Al-Anbiya 21:87 menempatkan Yunus berdoa dari dalam perut ikan. Fussilat 41:20-21 memperlihatkan kulit yang bersaksi melawan pemiliknya. Tiga narasi dengan celah yang berbeda-beda.",
  openGraph: {
    images: [
      {
        url: "/article-images/34-tongkat-ikan-dan-kulit-illustration.png",
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

export default function TongkatIkanDanKulitArticle() {
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
          <MukjizatSeriesNav current={2} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Ta Ha 20:20 · Al-Anbiya 21:87 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Tongkat, Ikan, dan Kulit yang Berbicara
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Dua surah menyebut tongkat Musa dengan kata yang berbeda untuk
            momen yang sama. Yunus berdoa dari dalam perut ikan dengan kalimat
            teologis yang koheren. Kulit bersaksi melawan kehendak pemiliknya.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/34-tongkat-ikan-dan-kulit-illustration.png"
            alt="Ilustrasi editorial tongkat, ikan, dan fragmen kulit simbolik di atas batu gelap"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Bagian kedua dari seri ini. Bagian sebelumnya: patung yang
            bersuara, manusia yang dihukum menjadi kera, dan mayat yang hidup
            kembali. Bagian ini: dua versi tongkat Musa yang tidak sepenuhnya
            konsisten, Yunus yang berdoa dari dalam perut ikan, dan tubuh
            yang bersaksi melawan pemiliknya.
          </p>

          <p>
            Di{" "}
            <VerseLink surah={20} ayat={18}>Ta Ha 20:18</VerseLink>, Musa
            mendeskripsikan tongkatnya sendiri: ia bersandar padanya, ia
            memukul daun dengan tongkat itu untuk domba-dombanya. Kata yang
            dipakai <em>asa</em>. Dua ayat kemudian,{" "}
            <VerseLink surah={20} ayat={20}>Ta Ha 20:20</VerseLink>, tongkat itu
            dilempar dan menjadi ular. Kata yang dipakai: <em>hayyah</em>.
          </p>

          <p>
            <VerseLink surah={7} ayat={107}>Al-A'raf 7:107</VerseLink>{" "}
            menceritakan momen yang sama, tongkat dilempar di hadapan Firaun,
            dengan kata yang berbeda lagi: <em>thu'ban</em>, ular besar.
          </p>

          <p>
            Para mufassir menjelaskan ini dengan menyebut bahwa <em>hayyah</em>{" "}
            dan <em>thu'ban</em> keduanya benar karena ular itu sekaligus
            gesit dan besar. Penjelasan itu bisa diterima. Tapi satu hal
            lebih sulit diabaikan: di Ta Ha, setelah tongkat itu menjadi ular,
            Allah memerintahkan Musa mengambilnya kembali dan menambahkan{" "}
            <em>"jangan takut."</em>
          </p>

          <p>
            Karena Musa ketakutan.{" "}
            <VerseLink surah={20} ayat={21}>Ta Ha 20:21</VerseLink>{" "}
            mencatatnya secara eksplisit. Nabi yang sedang dalam misi ilahi,
            yang baru mendapat perintah langsung, lari dari tongkatnya sendiri
            yang berubah jadi ular. Al-A'raf tidak mencatat ketakutan itu.
            Surah-surah lain yang menceritakan momen yang sama juga tidak.
            Hanya Ta Ha.
          </p>

          <p>
            Dua narasi tentang peristiwa yang sama, dengan detail yang tidak
            sepenuhnya konsisten, dan tidak ada penanda dalam Al-Quran tentang
            mana yang lebih akurat.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Doa dari dalam lambung
          </h2>

          <p>
            <VerseLink surah={37} ayat={142}>As-Saffat 37:142</VerseLink>{" "}
            menyatakan Yunus ditelan ikan besar setelah ia meninggalkan
            kapalnya.{" "}
            <VerseLink surah={21} ayat={87}>Al-Anbiya 21:87</VerseLink>{" "}
            mencatat doanya dari dalam kegelapan:{" "}
            <em>
              "Tidak ada Tuhan selain Engkau. Maha Suci Engkau. Sesungguhnya
              aku termasuk orang-orang yang zalim."
            </em>
          </p>

          <p>
            Berapa lama ia di dalam ikan tidak disebutkan. As-Saffat 37:143–144
            menambahkan bahwa kalau bukan karena ia termasuk orang yang
            bertasbih, ia akan tinggal di dalam perut ikan sampai hari
            kebangkitan.
          </p>

          <p>
            Dari perspektif biologis, kondisi di dalam lambung mamalia laut
            tidak mendukung kelangsungan hidup manusia: suhu tubuh mamalia
            sekitar 37–38 derajat, enzim pencernaan aktif, tidak ada oksigen.
            Bertahan cukup lama untuk menyusun dan mengucapkan doa teologis
            yang koheren membutuhkan kondisi yang tidak dijelaskan.
          </p>

          <p>
            Tapi yang lebih menarik dari soal biologisnya adalah apa yang
            dibangun narasi itu. Doa Yunus menjadi salah satu formula doa
            yang paling banyak dikutip dalam tradisi Islam, disebut dalam
            banyak konteks kesulitan ekstrem. Al-Qur'an tidak menjelaskan
            mekanisme keselamatannya. Yang dibangun adalah model: bahwa
            tasbih di titik paling gelap bisa menjadi jalan keluar. Al-Quran
            tidak menawarkan penjelasan kausal. Ia menawarkan formula.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tubuh yang tidak tunduk
          </h2>

          <p>
            <VerseLink surah={36} ayat={65}>Yasin 36:65</VerseLink>:{" "}
            <em>
              "Pada hari ini Kami tutup mulut mereka, dan tangan mereka akan
              berbicara kepada Kami, dan kaki mereka akan bersaksi tentang apa
              yang telah mereka kerjakan."
            </em>
          </p>

          <p>
            <VerseLink surah={41} ayat={20}>Fussilat 41:20–21</VerseLink>{" "}
            mengembangkan ini menjadi dialog. Para pendosa bertanya kepada
            kulit mereka: mengapa kamu bersaksi melawan kami? Kulit menjawab:
            Allah yang membuat kami berbicara. Ia yang menciptakan segala
            sesuatu.
          </p>

          <p>
            Ada implikasi yang lebih dalam dari sekadar pertanyaan tentang
            bagaimana kulit bisa bicara. Sistem pertanggungjawaban dalam
            Al-Qur'an dibangun di atas satu asumsi: setiap orang menanggung
            akibat dari pilihannya sendiri. Tidak ada dosa warisan, tidak ada
            mekanisme kolektif. Seseorang dihukum karena apa yang ia lakukan.
          </p>

          <p>
            Kalau anggota tubuh bisa bersaksi secara independen dari kehendak
            orang itu, berarti ada bagian dari "diri" yang tidak dikontrol
            oleh kehendak sadar. Kulit yang berbicara melawan pemiliknya
            adalah entitas yang memiliki informasi dan kemampuan berbeda dari
            pemiliknya, dan menggunakannya bertentangan dengan keinginan
            pemilik itu.
          </p>

          <p>
            Al-Qur'an tidak menyelesaikan implikasi itu. Ia menyatakan tubuh
            bersaksi, lalu melanjutkan ke deskripsi hukuman. Pertanyaan
            tentang kepemilikan atas perbuatan sendiri ketika tubuh bertindak
            sebagai saksi independen dibiarkan terbuka.
          </p>
          <MukjizatSeriesOutro current={2} />
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 20, ayat: 18, label: "Ta Ha 18" },
                { surah: 20, ayat: 20, label: "Ta Ha 20" },
                { surah: 7, ayat: 107, label: "Al-A'raf 107" },
                { surah: 37, ayat: 142, label: "As-Saffat 142" },
                { surah: 21, ayat: 87, label: "Al-Anbiya 87" },
                { surah: 36, ayat: 65, label: "Yasin 65" },
                { surah: 41, ayat: 20, label: "Fussilat 20" },
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

        <ArticleRecommendations currentSlug="tongkat-ikan-dan-kulit" />
      </article>
    </main>
  );
}
