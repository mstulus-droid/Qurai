/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleRecommendations } from "@/components/article-recommendations";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten | Qurai",
  description:
    "Al-Quran melarang babi atas nama kebersihan. Hadis sahih menganjurkan urin unta sebagai obat. Secara medis, yang dilarang lebih aman dari yang dianjurkan.",
  openGraph: {
    images: [
      {
        url: "/article-images/02-babi-matang-kencing-unta-illustration.png",
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

export default function BabiDanKencingUntaArticle() {
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
            Al-Baqarah 2:173 · Al-Maidah 5:3 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 7 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran melarang babi atas nama kebersihan. Hadis sahih menganjurkan
            urin unta sebagai obat. Secara medis, yang dilarang lebih aman dari
            yang dianjurkan.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/02-babi-matang-kencing-unta-illustration.png"
            alt="Ilustrasi editorial botol cairan amber di depan kandang unta"
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
            Ketika seseorang mempertanyakan larangan babi dalam Islam, ada
            jawaban yang hampir selalu muncul: babi itu kotor, bawa parasit,
            Allah tahu yang terbaik untuk kesehatan manusia. Argumen ini punya
            dasar historis yang masuk akal — di zaman tanpa refrigerator dan
            inspeksi veteriner, daging babi yang kurang matang memang bisa
            bermasalah.
          </p>

          <p>
            Tapi kemudian ada{" "}
            <strong className="font-medium text-[var(--qurai-text)]">
              Sahih Bukhari 5686
            </strong>{" "}
            dan{" "}
            <strong className="font-medium text-[var(--qurai-text)]">
              Sahih Muslim 1671
            </strong>
            . Dua koleksi hadis paling otoritatif dalam Islam. Keduanya mencatat
            hal yang sama: Muhammad menyuruh sekelompok orang yang sakit untuk
            meminum campuran air kencing dan susu unta.
          </p>

          <p>Kencing unta. Sebagai obat.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang dilarang vs. yang dianjurkan
          </h2>

          <p>
            <VerseLink surah={2} ayat={173}>
              Al-Baqarah 2:173
            </VerseLink>{" "}
            melarang bangkai, darah, daging babi, dan hewan yang disembelih
            bukan atas nama Allah.{" "}
            <VerseLink surah={5} ayat={3}>
              Al-Maidah 5:3
            </VerseLink>{" "}
            menegaskan hal yang sama. Larangan ini jelas, dan alasan yang paling
            sering dikemukakan adalah kesehatan: babi kotor, berbahaya, perlu
            dihindari.
          </p>

          <p>
            Sekarang bandingkan dua hal ini secara medis, bukan secara
            teologis.
          </p>

          <p>
            Daging babi yang dimasak matang: Trichinella spiralis, parasit yang
            paling sering dikutip sebagai alasan larangan, mati pada suhu 58°C.
            Bakteri berbahaya mati sebelum itu. WHO tidak punya larangan untuk
            daging babi matang. Miliaran orang mengonsumsinya setiap hari tanpa
            insiden.
          </p>

          <p>
            Urin unta mentah: mengandung E. coli, Salmonella, dan yang paling
            serius, MERS-CoV. MERS (Middle East Respiratory Syndrome) adalah
            virus corona dengan angka kematian sekitar 35 persen — jauh lebih
            tinggi dari Covid-19. WHO secara eksplisit memperingatkan orang
            untuk tidak mengonsumsi urin atau produk unta yang tidak
            dipasteurisasi. Bukan opini, ini kebijakan kesehatan resmi yang
            lahir dari wabah nyata.
          </p>

          <p>
            Situasinya sederhana: yang dilarang lebih aman dari yang dianjurkan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Masalah dengan argumen "hikmah medis"
          </h2>

          <p>
            Kalau alasan larangan babi adalah kesehatan, standar yang sama
            seharusnya berlaku ke urin unta. Sesuatu yang lebih berbahaya
            seharusnya dilarang lebih keras, bukan malah direkomendasikan sebagai
            terapi.
          </p>

          <p>
            Ada beberapa cara untuk merespons ini, dan masing-masing punya
            konsekuensinya sendiri.
          </p>

          <p>
            Cara pertama: akui bahwa rekomendasi kencing unta adalah kesalahan
            Muhammad. Ini mengakui bahwa Muhammad bisa keliru dalam soal medis —
            lalu pertanyaannya adalah bagian mana lain dari ajarannya yang
            mungkin juga keliru.
          </p>

          <p>
            Cara kedua: larangan babi bukan soal kesehatan, tapi soal ketaatan
            murni pada perintah Allah. Kalau ini yang dimaksud, seluruh bangunan
            apologetik "hikmah medis Islam" runtuh. Karena jika larangan itu
            bukan tentang kesehatan, maka argumentasi kesehatannya tidak berlaku
            dari awal.
          </p>

          <p>
            Cara ketiga: ada hikmah yang belum kita ketahui untuk kencing unta.
            Mungkin saja. Tapi posisi ini meminta kita menunggu penjelasan yang
            belum datang sambil mengabaikan data medis yang sudah ada — data dari
            organisasi yang justru muncul karena kematian-kematian nyata akibat
            MERS.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Klaim wahyu yang memperumit segalanya
          </h2>

          <p>
            <VerseLink surah={53} ayat={3}>
              An-Najm 53:3-4
            </VerseLink>{" "}
            menyatakan Muhammad tidak berbicara dari keinginan sendiri — semua
            yang dia ucapkan adalah wahyu. Kalau itu benar, rekomendasi kencing
            unta juga termasuk. Bukan kekeliruan manusia biasa yang bisa
            dimaklumi, tapi bagian dari sistem ajaran yang diklaim bersumber dari
            Allah.
          </p>

          <p>
            Dan di sisi lain, Allah yang sama ini di{" "}
            <VerseLink surah={9} ayat={108}>
              At-Taubah 9:108
            </VerseLink>{" "}
            menyatakan menyukai mereka yang mensucikan diri. Kebersihan sebagai
            prinsip. Tapi prinsip itu tampak tidak diterapkan secara konsisten
            ketika yang direkomendasikan adalah produk limbah dari hewan.
          </p>

          <p>
            Yang membuat ini lebih menarik: pertanyaan ini jarang muncul secara
            terbuka. Hadis kencing unta ada di Bukhari dan Muslim — dua kitab
            yang dihafalkan jutaan santri di seluruh dunia. Tapi ia hampir tidak
            pernah disandingkan dengan diskusi larangan babi, padahal keduanya
            bicara soal hal yang sama: apa yang boleh dan tidak boleh masuk ke
            dalam tubuh.
          </p>

          <p>
            Pilihan standar mana yang dipakai seharusnya tidak bergantung pada
            apa yang ingin dibuktikan.
          </p>
        </div>

        

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer>
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 2, ayat: 173, label: "Al-Baqarah 173" },
                { surah: 5, ayat: 3, label: "Al-Maidah 3" },
                { surah: 9, ayat: 108, label: "At-Taubah 108" },
                { surah: 53, ayat: 3, label: "An-Najm 3" },
                { surah: 74, ayat: 4, label: "Al-Muddatsir 4" },
              ].map(({ surah, ayat, label }) => (
                <Link
                  key={`${surah}-${ayat}`}
                  href={`/surat/${surah}#ayat-${ayat}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[color-mix(in_srgb,var(--qurai-gold)_30%,transparent)] bg-[color-mix(in_srgb,var(--qurai-gold)_6%,transparent)] px-3 py-1.5 font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_12%,transparent)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>

        <ArticleShare />

        <ArticleRecommendations currentSlug="babi-dan-kencing-unta" />
      </article>
    </main>
  );
}
