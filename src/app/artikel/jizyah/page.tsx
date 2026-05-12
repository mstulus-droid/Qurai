/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Wa Hum Saghirun | Qurai",
  description:
    "At-Tawbah 9:29 memerintahkan non-Muslim membayar jizyah 'wa hum saghirun' — sementara mereka dalam keadaan hina. Kata saghirun bukan interpretasi kemudian, ia ada di dalam ayat sebagai kondisi yang menyertai pembayaran. Al-Baqarah 2:256 menyatakan tidak ada paksaan dalam agama, tapi sistem yang menetapkan penghinaan bagi yang tidak berpindah agama bekerja dengan mekanisme yang berbeda.",
  openGraph: {
    images: [
      {
        url: "/article-images/32-jizyah-illustration.png",
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

export default function JizyahArticle() {
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
            At-Tawbah 9:29 · Al-Baqarah 2:256 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 7 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Wa Hum Saghirun
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            At-Tawbah 9:29 memerintahkan non-Muslim membayar jizyah{" "}
            <em>wa hum saghirun</em>, sementara mereka dalam keadaan hina.
            Frasa itu bukan tambahan dari tradisi — ia ada di dalam ayat,
            sebagai kondisi yang menyertai kewajiban membayar.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/32-jizyah-illustration.png"
            alt="Ilustrasi editorial pembayaran koin jizyah di meja batu dengan sosok tertunduk"
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
            <VerseLink surah={9} ayat={29}>At-Tawbah 9:29</VerseLink>{" "}
            memerintahkan perang terhadap Ahli Kitab yang tidak beriman sampai
            mereka membayar jizyah <em>wa hum saghirun</em>, sementara mereka
            dalam keadaan hina.
          </p>

          <p>
            Dua kata terakhir itu yang jarang dibahas. Jizyah sebagai sistem
            pembayaran sering dijelaskan sebagai pajak perlindungan, biaya
            administrasi untuk yang tidak ikut militer, mekanisme fiskal yang
            lazim di abad ke-7. Semua penjelasan itu mungkin akurat sebagian.
            Tapi <em>wa hum saghirun</em> bukan tentang fiskal. Itu tentang
            kondisi psikologis yang diwajibkan.
          </p>

          <p>
            Kata <em>saghir</em> dalam bahasa Arab berarti kecil, hina,
            direndahkan. Para fuqaha klasik tidak mengabaikan frasa itu. Ibn
            Qayyim al-Jawziyyah dalam <em>Ahkam Ahl al-Dhimmah</em>{" "}
            mendokumentasikan apa yang dikembangkan fiqh dari dua kata itu:
            pembayar jizyah harus datang sendiri, tidak boleh diwakilkan, dalam
            kondisi yang menunjukkan subordinasi. Tujuannya eksplisit dalam
            literatur itu, yakni memastikan non-Muslim merasakan kehinaan
            (<em>al-saghār</em>) yang diperintahkan ayat.
          </p>

          <p>
            Ini bukan ekses interpretasi yang menyimpang. Ini pembacaan langsung
            dari kata yang ada di dalam ayat.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Perlindungan dengan syarat penghinaan
          </h2>

          <p>
            Pembelaan standar untuk jizyah adalah pertukaran yang wajar:
            non-Muslim membayar, negara melindungi. Kalau dilihat dari
            strukturnya saja, itu tidak berbeda jauh dari kontrak administrasi.
          </p>

          <p>
            Masalahnya ada di kata <em>saghirun</em> itu. Kalau jizyah memang
            hanya transaksi fiskal, mengapa Al-Qur'an secara eksplisit
            menetapkan kondisi psikologis pembayarnya? Kontrak pajak tidak
            biasanya menetapkan bahwa salah satu pihak harus merasa hina saat
            membayar.
          </p>

          <p>
            Frasa itu bukan detail yang bisa diabaikan. Ia ada di dalam Al-Quran,
            dalam satu kalimat yang sama dengan kewajiban membayar, sebagai
            kondisi yang menyertai pembayaran itu.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tidak ada paksaan, tapi ada harga
          </h2>

          <p>
            <VerseLink surah={2} ayat={256}>Al-Baqarah 2:256</VerseLink>{" "}
            menyatakan tidak ada paksaan dalam agama.
          </p>

          <p>
            Jizyah tidak memaksa konversi secara langsung. Tidak ada ayat yang
            memerintahkan pembunuhan bagi yang menolak berpindah agama. Tapi
            sistem yang menetapkan beban ekonomi berbeda berdasarkan agama,
            dengan kondisi penghinaan yang dilegalkan bagi yang tidak berpindah,
            adalah tekanan struktural dengan mekanisme yang tidak berbeda dari
            paksaan, hanya lebih halus.
          </p>

          <p>
            Non-Muslim di bawah sistem ini menghadapi pilihan: tetap dengan
            keyakinan mereka dan membayar pajak khusus dalam kondisi yang secara
            eksplisit merendahkan, atau berpindah agama dan lepas dari beban
            itu. Tidak ada kekerasan langsung. Tapi menyebutnya sebagai tidak
            ada tekanan berarti mengabaikan apa yang dikerjakan tekanan
            struktural.
          </p>

          <p>
            9:29 dan 2:256 ada dalam kitab yang sama. Keduanya diklaim wahyu
            dari sumber yang sama.
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
                { surah: 9, ayat: 29, label: "At-Tawbah 29" },
                { surah: 2, ayat: 256, label: "Al-Baqarah 256" },
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

        <ArticleRecommendations currentSlug="jizyah" />
      </article>
    </main>
  );
}
