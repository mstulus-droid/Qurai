/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Yang Lebih Baik Daripadanya | Qurai",
  description:
    "Al-Anfal 8:65 dan 8:66 adalah dua ayat berurutan tentang kapasitas tempur yang sama. Yang pertama menetapkan rasio 1:10. Yang berikutnya merevisinya menjadi 1:2 karena ternyata ada kelemahan yang tidak diantisipasi. Al-Baqarah 2:106 menyebut penggantinya 'lebih baik', yang berarti yang diganti lebih rendah kualitasnya.",
  openGraph: {
    images: [
      {
        url: "/article-images/24-yang-lebih-baik-daripadanya-illustration.png",
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

export default function YangLebihBaikDaripadanyaArticle() {
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
            Al-Anfal 8:65 · An-Nur 24:2 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Yang Lebih Baik Daripadanya
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Anfal 8:65 menetapkan satu Muslim bisa mengalahkan sepuluh orang
            kafir. Ayat berikutnya merevisi itu menjadi dua. Dua ayat
            berurutan, dalam surah yang sama. Al-Baqarah 2:106 menjelaskan
            mekanismenya: ketika ayat dibatalkan, Allah mengirim yang "lebih
            baik daripadanya." Kata itu mengandung sesuatu yang sulit diabaikan.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/24-yang-lebih-baik-daripadanya-illustration.png"
            alt="Ilustrasi editorial papan strategi kuno dengan rasio batu yang direvisi"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={8} ayat={65}>
              Al-Anfal 8:65
            </VerseLink>{" "}
            menetapkan standar: dua puluh orang beriman yang sabar bisa
            mengalahkan dua ratus orang kafir. Satu banding sepuluh.
          </p>

          <p>
            Ayat berikutnya,{" "}
            <VerseLink surah={8} ayat={66}>
              8:66
            </VerseLink>
            , merevisi angka itu. Seratus orang beriman bisa mengalahkan dua
            ratus. Satu banding dua.
          </p>

          <p>
            Alasannya diberikan secara eksplisit dalam teks: Allah mengetahui
            ada kelemahan di antara mereka, maka Ia meringankan beban.
          </p>

          <p>
            Dua ayat berurutan, dalam surah yang sama, membahas kapasitas
            tempur yang sama. Yang pertama menetapkan rasio 1:10. Yang kedua
            menurunkannya menjadi 1:2 karena kondisi di lapangan tidak memenuhi
            standar awal. Keduanya ada di mushaf sampai hari ini, tidak ada
            yang dihapus, dan keduanya secara formal dianggap firman Allah.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang bisa diganti dengan yang lebih baik
          </h2>

          <p>
            <VerseLink surah={2} ayat={106}>
              Al-Baqarah 2:106
            </VerseLink>{" "}
            menjelaskan mekanismenya secara terbuka:{" "}
            <em>
              "Ayat mana saja yang Kami nasakhkan, atau Kami jadikan manusia
              lupa kepadanya, Kami datangkan yang lebih baik daripadanya atau
              yang sebanding dengannya."
            </em>
          </p>

          <p>Dua hal dari kalimat itu tidak mudah diabaikan.</p>

          <p>
            Yang pertama: "yang lebih baik daripadanya." Kalau pengganti lebih
            baik dari yang diganti, berarti yang diganti lebih rendah
            kualitasnya. Ada hierarki di antara ayat-ayat. Ada yang lebih baik
            dan ada yang kurang baik, dan yang kurang baik itu dikirimkan lebih
            dahulu sebelum akhirnya diganti.
          </p>

          <p>
            Yang kedua, lebih jauh dari itu: "atau Kami jadikan manusia lupa
            kepadanya." Bukan sekadar pembatalan formal. Allah secara aktif
            menyebabkan orang lupa pada ayat tertentu. Kalau itu benar, ada
            bagian dari wahyu yang sengaja dihilangkan dari ingatan, dan tidak
            ada jaminan bahwa apa yang tersisa di mushaf hari ini adalah
            keseluruhan dari yang pernah diturunkan.
          </p>

          <p>
            Para ulama sudah bergulat dengan ini cukup lama. As-Suyuti dalam
            Al-Itqan mencatat bahwa para sarjana tidak sepakat soal berapa ayat
            yang sudah dibatalkan. Ada yang menghitung 5. Ada yang menghitung
            214. Ada yang 238. Angka-angka itu bukan perkiraan longgar, tapi
            hasil kajian dari para ahli tafsir terkemuka yang tidak bisa
            mencapai kesimpulan yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Satu ayat yang tidak diikuti
          </h2>

          <p>
            Di antara semua yang dihasilkan oleh naskh, konsekuensi paling
            konkret ada di hukum zina.
          </p>

          <p>
            <VerseLink surah={24} ayat={2}>
              An-Nur 24:2
            </VerseLink>{" "}
            menetapkan seratus kali dera untuk pezina, laki-laki dan perempuan.
            Tidak ada pengecualian berdasarkan status pernikahan. Teksnya
            spesifik dan tidak ambigu.
          </p>

          <p>
            Tapi hukum fikih Islam selama empat belas abad tidak mengikuti ayat
            itu untuk pezina yang sudah menikah. Yang diterapkan adalah rajam,
            hukuman mati dengan dilempari batu, yang dasar tekstualnya bukan
            dari Al-Quran melainkan dari hadis. Bukan karena Q 24:2 dianggap
            tidak sahih. Ayat itu masih ada di mushaf, masih dibaca, masih
            diakui. Tapi ketika bertemu dengan hadis yang menyatakan sesuatu
            yang berbeda, hadis yang diikuti.
          </p>

          <p>
            Ini adalah kasus di mana perintah eksplisit Al-Quran tentang
            hukuman tidak diterapkan selama berabad-abad karena ada perkataan
            Muhammad di luar teks Al-Quran yang menetapkan sesuatu yang
            berbeda.
          </p>

          <p>
            Kemudian ada riwayat dari Aisyah dalam Sunan Ibn Majah yang
            menambahkan persoalan lain. Ia menceritakan bahwa ada ayat tentang
            rajam yang tertulis di atas selembar kertas di bawah tempat
            tidurnya. Rasulullah wafat. Semua orang sibuk mengurus
            kematiannya. Seekor kambing masuk ke ruangan dan memakan kertas
            itu.
          </p>

          <p>
            Riwayat itu dikutip secara serius dalam literatur hadis dan dalam
            diskusi tentang naskh di kalangan ulama. Kalau diterima,
            implikasinya adalah sebuah ayat Al-Quran hilang karena dimakan
            kambing, sementara{" "}
            <VerseLink surah={15} ayat={9}>
              Q 15:9
            </VerseLink>{" "}
            menyatakan bahwa Allah sendiri yang menurunkan Al-Quran dan Allah
            sendiri yang menjaganya.
          </p>

          <p>
            Kalau tidak diterima, maka seluruh dasar hukum rajam yang
            mengesampingkan Q 24:2, perintah yang masih bisa dibaca di mushaf
            sampai hari ini, berdiri tanpa fondasi yang bisa diperiksa di
            dalam Al-Quran.
          </p>

          <p>
            Tidak ada cara untuk memilih satu dari dua jalur itu tanpa
            menyisakan pertanyaan yang tidak selesai di jalur yang lain.
          </p>

          <p>
            Dan pertanyaan yang sama ada di tempat yang lebih luas: apakah 5
            ayat yang sudah tidak berlaku, atau 214, atau 238, tidak ada yang
            tahu pasti. Tidak ada mekanisme di dalam teks Al-Quran sendiri yang
            memberi tahu pembaca mana yang sudah digantikan dan mana yang masih
            berlaku. Yang ada adalah penilaian manusia tentang mana yang
            membatalkan mana, dan penilaian itu berbeda dari satu ulama ke
            ulama yang lain.
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
                { surah: 8, ayat: 65, label: "Al-Anfal 65" },
                { surah: 2, ayat: 106, label: "Al-Baqarah 106" },
                { surah: 24, ayat: 2, label: "An-Nur 2" },
                { surah: 15, ayat: 9, label: "Al-Hijr 9" },
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
