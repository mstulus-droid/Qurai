/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { MukjizatSeriesNav, MukjizatSeriesOutro } from "@/components/mukjizat-series-nav";

export const metadata: Metadata = {
  title: "Ma'idah | Qurai",
  description:
    "Al-Ma'idah 5:115 menjanjikan meja makan dari langit, tapi Al-Qur'an tidak pernah mengkonfirmasi meja itu turun. Saba 34:12 memberikan durasi angin Sulaiman yang berbeda dari Al-Anbiya 21:81. Saba 34:10 memerintahkan gunung bertasbih bersama Daud, tanpa keterangan apakah itu literal atau kiasan.",
  openGraph: {
    images: [
      {
        url: "/article-images/35-maidah-illustration.png",
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

export default function MaidahArticle() {
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
          <MukjizatSeriesNav current={3} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Al-Ma'idah 5:115 · Saba 34:10 &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Ma'idah
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Allah menjanjikan meja makan dari langit dengan ancaman hukuman
            terberat bagi yang tidak percaya setelah melihatnya. Al-Qur'an
            tidak pernah menceritakan apakah meja itu turun.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/35-maidah-illustration.png"
            alt="Ilustrasi editorial meja makan menggantung di bawah cahaya langit gelap"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="maidah" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Bagian ketiga dan terakhir dari seri ini. Dua bagian sebelumnya
            membahas patung bersuara, manusia yang berubah menjadi kera,
            kebangkitan mayat, dua versi tongkat Musa, Yunus dalam perut
            ikan, dan kulit yang bersaksi. Bagian ini: meja makan dari
            langit yang tidak pernah dikonfirmasi turun, angin Sulaiman yang
            ukurannya berbeda di dua surah, dan gunung-gunung yang diperintah
            bertasbih bersama Daud.
          </p>

          <p>
            <VerseLink surah={5} ayat={112}>Al-Ma'idah 5:112</VerseLink>: para
            murid Isa bertanya, apakah Tuhanmu bisa menurunkan meja makan dari
            langit untuk kami?
          </p>

          <p>
            Isa memperingatkan mereka: bertakwalah kepada Allah jika kamu
            beriman. Mereka tidak berhenti.{" "}
            <VerseLink surah={5} ayat={113}>Al-Ma'idah 5:113–114</VerseLink>:{" "}
            kami ingin makan darinya, kami ingin hati kami mantap, kami ingin
            menjadi saksi.
          </p>

          <p>
            Isa berdoa. Dan{" "}
            <VerseLink surah={5} ayat={115}>Al-Ma'idah 5:115</VerseLink> adalah
            jawaban Allah:{" "}
            <em>
              "Sesungguhnya Aku akan menurunkannya kepada kamu. Tapi siapa
              yang kafir setelah itu di antara kamu, maka sesungguhnya Aku
              akan menyiksanya dengan siksaan yang tidak pernah Aku timpakan
              kepada seorang pun di seluruh alam."
            </em>
          </p>

          <p>Di situ narasi berhenti.</p>

          <p>
            Al-Qur'an tidak menyatakan meja itu turun. Tidak ada ayat yang
            mengkonfirmasi kedatangannya. Tidak ada keterangan tentang hari
            raya yang Isa minta ditetapkan. Tidak ada catatan tentang siapa
            yang makan dari meja itu atau siapa yang kemudian kafir dan
            menerima hukuman yang dijanjikan.
          </p>

          <p>
            Para mufassir terbagi. Sebagian menyatakan meja itu turun dan
            menjadi hari raya bagi pengikut Isa. Sebagian mengatakan Isa
            mencabut permintaan itu setelah mendengar beratnya ancaman, karena
            ia khawatir umatnya tidak mampu menanggung konsekuensinya. Satu
            posisi berpijak pada inferensi dari konteks umum. Posisi lain
            berpijak pada inferensi yang berbeda. Keduanya tidak berpijak pada
            ayat yang menyatakannya secara eksplisit.
          </p>

          <p>
            Surah ini dinamai Al-Ma'idah — meja. Tapi resolusi dari kisah
            meja itu tidak ada di dalam surah yang menanggung namanya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Angin yang dua kali disebutkan berbeda
          </h2>

          <p>
            <VerseLink surah={21} ayat={81}>Al-Anbiya 21:81</VerseLink>{" "}
            menyatakan Allah menundukkan angin bagi Sulaiman, angin yang
            bertiup ke negeri yang diberkahi.
          </p>

          <p>
            <VerseLink surah={34} ayat={12}>Saba 34:12</VerseLink> lebih
            spesifik: angin itu perjalanan paginya sebulan dan perjalanan
            sorenya sebulan.
          </p>

          <p>
            Dua ayat untuk satu subjek yang sama, dengan dua tingkat
            kedetailan yang berbeda. Al-Anbiya menyebut angin tanpa ukuran.
            Saba memberikan durasi yang sangat konkret. Keduanya tidak
            bertentangan secara logis, tapi memberikan gambar yang berbeda:
            satu abstrak, satu operasional.
          </p>

          <p>
            Yang lebih menarik ada di sisa ayat Saba 34:12: dan Kami alirkan
            untuknya sumber tembaga cair, dan dari antara jin ada yang bekerja
            di hadapannya. Detail ini sangat teknis — angin berukuran, logam
            cair, angkatan kerja supranatural. Kerajaan dengan sumber daya
            seperti itu seharusnya meninggalkan jejak arkeologis yang bisa
            diverifikasi. Tradisi Sulaiman dalam Al-Qur'an tidak terhubung
            dengan catatan manapun di luar naskah-naskah yang bergantung pada
            tradisi yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Gunung yang diperintah atau digambarkan
          </h2>

          <p>
            <VerseLink surah={34} ayat={10}>Saba 34:10</VerseLink>:{" "}
            <em>
              "Hai gunung-gunung, bertasbihlah bersama Daud, dan demikian pula
              burung-burung."
            </em>
          </p>

          <p>
            <VerseLink surah={21} ayat={79}>Al-Anbiya 21:79</VerseLink>{" "}
            mengulang klaim yang sama: gunung-gunung bertasbih bersama Daud.
          </p>

          <p>
            Para mufassir berbeda pendapat tentang apakah ini literal atau
            kiasan. Sebagian membacanya sebagai metafora untuk keindahan suara
            Daud yang seolah membuat alam bergema. Sebagian membacanya sebagai
            kejadian fisik: gunung-gunung secara harfiah mengeluarkan suara
            tasbih mengikuti Daud.
          </p>

          <p>
            Al-Qur'an tidak menyediakan penanda untuk membedakan keduanya.
            Bahasa yang dipakai untuk perintah kepada gunung sama dengan bahasa
            yang dipakai untuk perintah kepada manusia di tempat lain dalam
            kitab yang sama. Kalau ini kiasan, Al-Qur'an tidak menandainya
            sebagai kiasan. Kalau ini literal, ada peristiwa geologis dan
            akustik berskala besar di zaman Daud yang tidak tercatat oleh
            sumber manapun di luar tradisi ini.
          </p>

          <p>
            Ketiga narasi — meja yang tidak dikonfirmasi turun, angin yang
            ukurannya berbeda di dua surah, gunung yang mungkin berbicara
            atau mungkin tidak — berbagi satu pola: klaim yang sangat konkret
            di satu sisi, dan ketidakjelasan resolusi di sisi yang lain. Al-Quran
            tidak menawarkan cara untuk menentukan mana yang mana.
          </p>
          <MukjizatSeriesOutro current={3} />
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 5, ayat: 112, label: "Al-Ma'idah 112" },
                { surah: 5, ayat: 115, label: "Al-Ma'idah 115" },
                { surah: 21, ayat: 81, label: "Al-Anbiya 81" },
                { surah: 34, ayat: 12, label: "Saba 12" },
                { surah: 34, ayat: 10, label: "Saba 10" },
                { surah: 21, ayat: 79, label: "Al-Anbiya 79" },
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

        <ArticleRecommendations currentSlug="maidah" />
      </article>
    </main>
  );
}
