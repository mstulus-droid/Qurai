/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { MukjizatSeriesNav } from "@/components/mukjizat-series-nav";

export const metadata: Metadata = {
  title: "Sapi yang Melenguh | Qurai",
  description:
    "Ta Ha 20:88 menceritakan patung anak sapi buatan Samiri yang mengeluarkan suara seperti lembu hidup. Al-Baqarah 2:73 memerintahkan mayat dipukul dengan bagian sapi untuk hidup kembali. Al-A'raf 7:166 mengubah manusia menjadi kera sebagai hukuman. Tiga narasi yang meninggalkan celah kausal tanpa penjelasan.",
  openGraph: {
    images: [
      {
        url: "/article-images/33-sapi-yang-melenguh-illustration.png",
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

export default function SapiYangMelenguhArticle() {
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
          <MukjizatSeriesNav current={1} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Ta Ha 20:88 · Al-Baqarah 2:73 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Sapi yang Melenguh
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Patung logam yang bersuara, manusia yang berubah jadi kera,
            mayat yang hidup kembali setelah dipukul daging sapi. Al-Qur'an
            memberikan narasi yang sangat spesifik tapi meninggalkan celah
            kausal yang tidak diisi.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/33-sapi-yang-melenguh-illustration.png"
            alt="Ilustrasi editorial patung anak sapi logam bersuara di perkemahan gurun malam"
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
            <VerseLink surah={20} ayat={88}>Ta Ha 20:88</VerseLink> mencatat
            bahwa Samiri mengeluarkan dari cetakannya seekor anak sapi yang
            bertubuh dan bersuara,{" "}
            <em>lahu khuwaar</em>. Suara itu bukan metafora.{" "}
            <VerseLink surah={7} ayat={148}>Al-A'raf 7:148</VerseLink>{" "}
            mengulang detail yang sama: patung anak sapi dari perhiasan kaum
            Musa, dan patung itu mengeluarkan suara.
          </p>

          <p>
            Pertanyaannya bukan apakah mukjizat bisa terjadi. Pertanyaannya
            adalah dari mana suara itu berasal.
          </p>

          <p>
            Al-Qur'an menyatakan Samiri yang membuat patung itu. Tapi logam
            padat tidak memproduksi suara biologis dari dirinya sendiri. Kalau
            suaranya berasal dari Allah sebagai ujian bagi kaum Musa,
            Al-Qur'an tidak menyatakannya. Kalau suaranya bagian dari tipu
            daya Samiri, Al-Qur'an tidak menjelaskan bagaimana seorang manusia
            bisa melakukan itu. Yang tersisa hanyalah fakta bahwa patung itu
            bersuara, tanpa kausalitas yang ditawarkan.
          </p>

          <p>
            Musa, dalam Al-A'raf, langsung menghancurkan patung itu dan
            menghukum Samiri. Tapi pertanyaan tentang mekanisme suaranya tidak
            pernah dijawab dalam ayat manapun.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kera sebagai hukuman
          </h2>

          <p>
            <VerseLink surah={2} ayat={65}>Al-Baqarah 2:65</VerseLink> dan{" "}
            <VerseLink surah={7} ayat={166}>Al-A'raf 7:166</VerseLink>{" "}
            menceritakan sekelompok orang yang melanggar larangan hari Sabat
            dengan menangkap ikan, lalu Allah mengubah mereka menjadi kera
            yang hina.
          </p>

          <p>
            Ada masalah biologis yang jelas: transformasi spesies tidak bisa
            terjadi pada individu dewasa. Tapi ada masalah lain yang lebih
            dalam dari sekadar biologi.
          </p>

          <p>
            Kalau kera adalah bentuk hukuman — bentuk kehinaan yang
            ditetapkan secara ilahi — maka ada hierarki implisit yang
            menempatkan kera sebagai makhluk yang lebih rendah dari manusia
            dalam skala moral. Kera bukan sekadar berbeda; kera adalah
            degradasi. Kehinaan itu yang membuat transformasinya menjadi
            hukuman.
          </p>

          <p>
            Implikasi itu tidak berhenti di abad ke-7. Ketika teori evolusi
            muncul dan menyatakan manusia bernenek moyang sama dengan primata,
            intuisi bahwa kera = hina, kera = bentuk turun derajat, sudah
            tertanam dalam kerangka bacaan ini. Al-Qur'an tidak bicara tentang
            evolusi. Tapi framing transformasi ke kera sebagai hukuman
            membangun sebuah hierarki yang sangat sulit dilepaskan saat
            seseorang kemudian membaca tentang asal-usul spesies.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pukul mayat dengan sapi
          </h2>

          <p>
            <VerseLink surah={2} ayat={67}>Al-Baqarah 2:67–73</VerseLink>{" "}
            adalah kisah yang paling spesifik secara mekanis. Ada seseorang
            yang terbunuh. Kaum Musa berselisih siapa pelakunya. Allah
            memerintahkan mereka menyembelih sapi betina, kemudian memukul
            mayat itu dengan salah satu bagian dari sapi yang sama. Mayat itu
            hidup kembali, cukup lama untuk menyebutkan siapa pembunuhnya,
            lalu mati lagi.
          </p>

          <p>
            Al-Quran memberikan instruksi yang sangat konkret: harus sapi betina,
            bukan tua bukan muda, kuning tua warnanya, belum pernah digunakan
            membajak, tidak ada belang. Enam ayat dihabiskan untuk
            menspesifikasi hewan yang harus disembelih. Satu ayat untuk
            prosedur kebangkitannya.
          </p>

          <p>
            Yang tidak ada adalah penjelasan tentang kaitan antara daging sapi
            dan kebangkitan sementara. Mengapa instrumen kebangkitannya harus
            sapi yang sama? Apa hubungan antara memukul mayat dengan daging
            dan kemampuan mayat itu bicara? Kalau tujuannya hanya mengungkap
            pelaku, Allah bisa mengungkapnya langsung tanpa prosedur ini. Al-Quran
            memilih prosedur yang sangat spesifik tapi tidak menawarkan
            penjelasan mengapa prosedur itu yang dipilih.
          </p>

          <p>
            Dalam tradisi tafsir, narasi ini sering dibaca sebagai bukti
            kekuasaan Allah yang melampaui hukum alam. Itu mungkin benar
            dalam kerangka teologinya sendiri. Tapi ada perbedaan antara
            mukjizat yang melampaui penjelasan dan narasi yang tidak
            menawarkan penjelasan sama sekali.
          </p>

          <p>
            Ketiga cerita ini berdiri sendiri di tiga surah berbeda. Tapi
            polanya sama: detail yang sangat konkret, mekanisme yang
            dibiarkan terbuka.
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
                { surah: 20, ayat: 88, label: "Ta Ha 88" },
                { surah: 7, ayat: 148, label: "Al-A'raf 148" },
                { surah: 2, ayat: 65, label: "Al-Baqarah 65" },
                { surah: 7, ayat: 166, label: "Al-A'raf 166" },
                { surah: 2, ayat: 67, label: "Al-Baqarah 67" },
                { surah: 2, ayat: 73, label: "Al-Baqarah 73" },
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
