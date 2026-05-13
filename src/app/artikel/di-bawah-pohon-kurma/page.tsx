/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { NarasiAlkitabSeriesNav, NarasiAlkitabSeriesOutro } from "@/components/narasi-alkitab-series-nav";

export const metadata: Metadata = {
  title: "Di Bawah Pohon Kurma | Qurai",
  description:
    "Maryam 19:23 menempatkan Maryam di bawah pohon kurma saat melahirkan. Detail itu tidak ada dalam kisah Isa yang dikenal, tapi ada dalam naskah Kristen yang beredar di Arabia. Ali Imran 3:35-37 tentang Maryam di Bait Suci hampir identik dengan naskah abad ke-2. Maryam 19:29 menempatkan bayi Isa berbicara dari buaian.",
  openGraph: {
    images: [
      {
        url: "/article-images/41-di-bawah-pohon-kurma-illustration.png",
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

export default function DiBawahPohonKurmaArticle() {
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
          <NarasiAlkitabSeriesNav current={3} />
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            Maryam 19:23 · Ali Imran 3:37 · Maryam 19:29 &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Di Bawah Pohon Kurma
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Tiga detail tentang Maryam dan Isa dalam Al-Quran — pohon kurma
            saat melahirkan, masa kecil di Bait Suci, bayi yang berbicara —
            masing-masing punya padanan dalam naskah-naskah Kristen yang
            beredar di Arabia sebelum Islam.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/41-di-bawah-pohon-kurma-illustration.png"
            alt="Ilustrasi editorial pohon kurma, kain kosong, mata air, dan fragmen naskah Kristen kuno"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="di-bawah-pohon-kurma" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Bagian ketiga dari seri ini beralih dari nama-nama yang salah
            zaman ke pola yang berbeda: detail-detail yang datang dari
            naskah tertentu. Dua bagian sebelumnya memperlihatkan kisah yang
            bergerak dan nama yang tidak cocok waktunya. Bagian ini
            memperlihatkan sesuatu yang lebih spesifik — detail yang bisa
            dilacak ke sumber yang masih ada.
          </p>

          <p>
            <VerseLink surah={19} ayat={23}>Maryam 19:23</VerseLink>{" "}
            menempatkan Maryam di bawah pohon kurma saat persalinan. Ia
            bersandar pada batangnya, merasakan sakitnya, berkata lebih baik
            ia mati. Ayat{" "}
            <VerseLink surah={19} ayat={25}>19:25</VerseLink> memerintahkan
            ia menggoyang batang pohon itu, dan kurma masak berjatuhan
            untuknya.
          </p>

          <p>
            Detail ini tidak ada dalam kisah kelahiran Isa yang beredar
            luas. Bethlehem, palungan, para gembala, bintang di timur —
            semua itu ada dalam riwayat yang dikenal. Pohon kurma tidak ada
            di sana.
          </p>

          <p>
            Tapi dalam sebuah naskah Kristen yang beredar di komunitas
            Kristen Timur — Injil Pseudo-Matius — ada adegan dalam
            perjalanan ke Mesir: Maryam kelelahan, duduk di bawah pohon
            kurma, pohon itu membungkuk memberikan buah kepadanya, dan
            sumber air muncul di akarnya. Unsur-unsurnya sama: Maryam yang
            kelelahan, pohon kurma, pohon yang merespons.
          </p>

          <p>
            Naskah itu bukan berasal dari satu tempat yang jauh. Ia beredar
            di komunitas-komunitas Kristen di kawasan Arabia dan sekitarnya
            pada abad ke-6 dan ke-7.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Maryam di Bait Suci
          </h2>

          <p>
            <VerseLink surah={3} ayat={35}>Ali Imran 3:35</VerseLink>{" "}
            menceritakan istri Imran yang bernazar menyerahkan kandungannya
            kepada Bait Suci sebelum Maryam lahir.{" "}
            <VerseLink surah={3} ayat={37}>Ali Imran 3:37</VerseLink>{" "}
            menceritakan Maryam dibesarkan di sana, dijaga Zakaria, malaikat
            membawa makanan untuknya. Zakaria bertanya dari mana makanan itu.
            Maryam menjawab: dari Allah.
          </p>

          <p>
            Detail ini tidak ada dalam kitab-kitab yang lebih tua yang
            diterima komunitas Yahudi. Maryam sebagai tokoh historis tidak
            muncul dalam catatan resmi Yahudi sama sekali.
          </p>

          <p>
            Tapi ada dalam Protoevangelium Yakobus, sebuah naskah dari
            sekitar abad ke-2 yang beredar luas di komunitas Kristen.
            Di sana: Hanna yang mandul berdoa, janjinya untuk menyerahkan
            anak kepada Bait Suci, kelahiran Maryam, Maryam yang dibesarkan
            di Bait Suci, dan malaikat yang membawa makanan untuknya.
          </p>

          <p>
            Urutan kejadiannya sama. Bukan hanya kesamaan umum tentang
            seorang perempuan di Bait Suci — urutan spesifiknya, dari janji
            sebelum lahir, penyerahan ke Bait Suci, hingga makanan dari
            sumber yang tidak diketahui, semuanya ada di kedua tempat.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Bayi yang berbicara
          </h2>

          <p>
            <VerseLink surah={19} ayat={29}>Maryam 19:29</VerseLink>{" "}
            menceritakan Maryam yang menunjuk bayinya ketika orang-orang
            mempertanyakan kehamilannya. Lalu{" "}
            <VerseLink surah={19} ayat={30}>19:30</VerseLink>: Isa berbicara
            dari buaian, mendeklarasikan dirinya sebagai hamba Allah,
            penerima kitab, dan nabi.
          </p>

          <p>
            Bayi yang berbicara bukan motif dalam riwayat-riwayat Isa yang
            diterima komunitas Kristen mainstream. Tapi dalam Injil Masa
            Kecil Isa — naskah yang beredar di kalangan Kristen tertentu
            di Arabia dan Mesir — ada kisah-kisah tentang Isa yang melakukan
            hal-hal luar biasa sejak sangat muda, jauh sebelum dewasa.
          </p>

          <p>
            Komunitas-komunitas Kristen yang ada di sekitar jazirah Arabia
            pada abad ke-6 dan ke-7 tidak semuanya membaca naskah yang sama.
            Beberapa membawa naskah yang tidak masuk ke dalam koleksi
            resmi gereja barat. Detail pohon kurma, detail Maryam di Bait
            Suci, detail bayi yang berbicara — ketiganya ada dalam naskah
            yang beredar di komunitas-komunitas itu.
          </p>

          <p>
            Bukan berarti Al-Quran mengutip dari naskah-naskah itu secara
            langsung. Kisah bisa bergerak melalui percakapan, melalui
            komunitas, melalui riwayat lisan yang tidak tercatat. Tapi
            detail-detail itu ada di suatu tempat sebelum Al-Quran, dan
            tempat paling dekat yang bisa dilacak adalah naskah-naskah
            Kristen yang beredar di kawasan itu.
          </p>
          <NarasiAlkitabSeriesOutro current={3} />
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 19, ayat: 23, label: "Maryam 23" },
                { surah: 19, ayat: 25, label: "Maryam 25" },
                { surah: 19, ayat: 29, label: "Maryam 29" },
                { surah: 19, ayat: 30, label: "Maryam 30" },
                { surah: 3, ayat: 35, label: "Ali Imran 35" },
                { surah: 3, ayat: 37, label: "Ali Imran 37" },
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

        <ArticleRecommendations currentSlug="di-bawah-pohon-kurma" />
      </article>
    </main>
  );
}
