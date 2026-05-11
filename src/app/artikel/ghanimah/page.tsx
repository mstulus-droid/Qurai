/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Seperlima untuk Allah, Empat Perlima untuk Kalian | Qurai",
  description:
    "Al-Anfal 8:1 menyatakan ghanimah milik Allah dan Rasul sepenuhnya. Al-Anfal 8:41, beberapa puluh ayat kemudian, membagi empat perlima untuk pejuang. Sistem seperlima itu sudah ada sebelum Islam, dalam tradisi Arab pra-Islam disebut mirbā'. Yang berubah bukan angkanya.",
  alternates: {
    canonical: "/artikel/ghanimah",
  },
  openGraph: {
    title: "Seperlima untuk Allah, Empat Perlima untuk Kalian | Qurai",
    description:
      "Al-Anfal 8:1 menyatakan ghanimah milik Allah dan Rasul sepenuhnya. Al-Anfal 8:41 membagi empat perlima untuk pejuang.",
    url: "/artikel/ghanimah",
    type: "article",
    images: [
      {
        url: "/article-images/27-ghanimah-illustration.png",
        width: 1672,
        height: 941,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seperlima untuk Allah, Empat Perlima untuk Kalian | Qurai",
    description:
      "Al-Anfal 8:1 menyatakan ghanimah milik Allah dan Rasul sepenuhnya. Al-Anfal 8:41 membagi empat perlima untuk pejuang.",
    images: ["/article-images/27-ghanimah-illustration.png"],
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

export default function GhanimahArticle() {
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
            Al-Anfal 8:1 · Al-Anfal 8:41 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp;
            8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Seperlima untuk Allah, Empat Perlima untuk Kalian
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Anfal 8:1 menyatakan ghanimah milik Allah dan Rasul sepenuhnya.
            Al-Anfal 8:41, beberapa puluh ayat kemudian, membagi empat perlima
            untuk pejuang. Sistem seperlima itu sudah ada sebelum Islam, dalam
            tradisi Arab pra-Islam disebut mirbā'. Yang berubah bukan angkanya.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/27-ghanimah-illustration.png"
            alt="Ilustrasi editorial pembagian harta rampasan menjadi satu bagian kecil dan empat bagian besar"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={8} ayat={41}>Al-Anfal 8:41</VerseLink> mengatur
            pembagian harta rampasan perang dengan presisi yang tidak lazim
            untuk kitab suci: seperlima untuk Allah, Rasul, kerabat Nabi, anak
            yatim, fakir miskin, dan musafir. Empat perlima sisanya untuk para
            pejuang, dengan rincian lebih lanjut: prajurit kaki mendapat satu
            bagian, penunggang kuda mendapat tiga bagian, satu untuk orangnya
            dan dua untuk kudanya.
          </p>

          <p>Ini bukan prinsip etis yang bisa ditafsirkan luas. Ini pembukuan.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua ayat dalam satu surah, dua versi berbeda
          </h2>

          <p>
            Tapi tiga puluh ayat sebelumnya, di{" "}
            <VerseLink surah={8} ayat={1}>8:1</VerseLink>, Al-Qur'an menyatakan
            sesuatu yang berbeda.{" "}
            <em>
              "Mereka bertanya kepadamu tentang ghanimah. Katakanlah, ghanimah
              itu untuk Allah dan Rasul."
            </em>{" "}
            Tidak ada pembagian. Tidak ada prajurit yang disebut. Ghanimah
            sepenuhnya milik Allah dan Rasul.
          </p>

          <p>
            Kemudian 8:41 datang dan mengubah distribusinya: empat perlima
            untuk pejuang.
          </p>

          <p>
            Para ulama menjelaskan ini sebagai proses penyempurnaan: 8:1 turun
            lebih dulu, 8:41 datang kemudian sebagai ketentuan yang lebih
            lengkap. Penjelasan itu bisa masuk akal sebagai kronologi
            legislasi. Tapi dalam kerangka wahyu yang diklaim sudah sempurna
            sejak azali, "penyempurnaan" adalah kata lain untuk koreksi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Angka yang sudah ada sebelumnya
          </h2>

          <p>
            Sistem seperlima untuk pemimpin sendiri bukan ciptaan Islam. Dalam
            masyarakat Arab pra-Islam, pemimpin suku berhak atas{" "}
            <em>mirbā'</em>, yakni seperempat dari harta rampasan. Sebagian
            tradisi menyebut seperlima. Islam mengambil angka itu dan
            memberikannya wadah baru: bukan lagi hak adat pemimpin suku,
            melainkan perintah langsung dari Allah, dengan daftar penerimanya
            yang lebih luas.
          </p>

          <p>Angkanya sama. Justifikasinya yang berbeda.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Badr dan ketentuan yang tidak diterapkan
          </h2>

          <p>
            Yang membuat kasus ghanimah lebih konkret adalah catatan
            penerapannya sendiri. Di Pertempuran Badr, pertempuran yang disebut
            secara eksplisit dalam 8:41 sebagai konteks turunnya ayat, Nabi
            tidak mengambil seperlima. Ia membagi langsung seluruh ghanimah
            kepada para pejuang. Di pertempuran lain, ia menerapkan formula
            yang berbeda lagi.
          </p>

          <p>
            Para ahli fiqh yang mencoba merekonstruksi praktik ini mencatat
            bahwa pengelolaan harta rampasannya tidak menurut satu pola,
            melainkan bervariasi. Badr sendiri, pertempuran yang disebut dalam
            ayat itu sebagai momen wahyu turun, adalah pertempuran di mana
            ketentuan itu tidak diterapkan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Insentif yang cukup terperinci untuk disebut insidental
          </h2>

          <p>
            Para apologist menyebut ghanimah sebagai insentif insidental:
            penghasilan tambahan di samping motivasi spiritual, bukan alasan
            utama berperang. Tapi ketentuan rincinya ada di dalam Al-Qur'an
            sendiri, termasuk{" "}
            <VerseLink surah={8} ayat={69}>8:69</VerseLink> yang secara
            eksplisit memperbolehkan pejuang menikmati hasilnya:{" "}
            <em>"Makanlah dari ghanimah yang halal lagi baik."</em>
          </p>

          <p>Hampir seluruh satu surah didedikasikan untuk mengatur distribusinya.</p>

          <p>Sebuah sistem yang cukup terperinci untuk disebut insidental.</p>
        </div>

        

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 8, ayat: 1, label: "Al-Anfal 1" },
                { surah: 8, ayat: 41, label: "Al-Anfal 41" },
                { surah: 8, ayat: 69, label: "Al-Anfal 69" },
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
