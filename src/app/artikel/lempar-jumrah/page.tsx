/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Ritual yang Tidak Ada dalam Al-Quran | Qurai",
  description:
    "Al-Quran cukup detail soal haji — ihram, wukuf, thawaf, sa'i, kurban. Tapi lempar jumrah tidak disebut satu kali pun. Seluruh dasarnya berasal dari hadis dan tradisi Arab yang sudah ada sebelum Islam.",
  openGraph: {
    images: [
      {
        url: "/article-images/06-ritual-yang-tidak-ada-dalam-al-quran-illustration.png",
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

export default function LemparJumrahArticle() {
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
            Al-Baqarah 2:196 · Al-Hajj 22:27 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 7 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Ritual yang Tidak Ada dalam Al-Quran
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran cukup detail soal haji — ihram, wukuf, thawaf, sa'i, kurban.
            Tapi lempar jumrah tidak disebut satu kali pun. Seluruh dasarnya berasal
            dari hadis dan tradisi Arab yang sudah ada sebelum Islam.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/06-ritual-yang-tidak-ada-dalam-al-quran-illustration.png"
            alt="Ilustrasi editorial kerumunan ritual di dekat dinding batu monumental"
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
            Kalau ada satu ibadah yang paling banyak dibahas Al-Quran secara
            teknis, itu haji.{" "}
            <VerseLink surah={2} ayat={196}>
              Al-Baqarah 2:196-203
            </VerseLink>{" "}
            adalah bagian terpanjang — menyebut ihram, larangan mencukur kepala
            sebelum hewan kurban sampai ke tempat penyembelihan, fidyah, thawaf,
            wukuf di Arafah, hingga hari-hari tasyrik.{" "}
            <VerseLink surah={22} ayat={27}>
              Al-Hajj 22:27-37
            </VerseLink>{" "}
            mengulang perintah haji dengan tambahan soal kurban dan manasik umum.{" "}
            <VerseLink surah={5} ayat={2}>
              Al-Maidah 5:2
            </VerseLink>{" "}
            menyebut larangan berburu saat ihram.
          </p>

          <p>
            Tapi dalam semua ayat ini — dan dalam seluruh Al-Quran — satu ritual
            tidak pernah muncul: lempar jumrah.
          </p>

          <p>
            Bukan soal tafsiran atau cara membaca. Kata "jumrah", perintah melempar
            batu, atau apapun yang merujuk pada ritual itu tidak ada di teks.
            Seluruh dasarnya berasal dari hadis dan tradisi lisan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tradisi yang lebih tua dari Islam
          </h2>

          <p>
            Secara historis, praktik melempar batu di Mina sudah ada sebelum Islam.
            Ini bukan tuduhan dari luar — ini catatan historis yang diakui banyak
            sarjana, termasuk dari dalam tradisi Islam sendiri. Ritual itu
            dikaitkan dengan praktik pagan Arab sebelum periode kenabian.
          </p>

          <p>
            Yang menarik bukan fakta bahwa tradisi itu sudah ada sebelumnya. Yang
            menarik adalah bahwa ketika Al-Quran membahas haji dengan cukup rinci
            — sampai ke soal fidyah dan kapan boleh mencukur kepala — ritual ini
            tidak pernah disebutkan sama sekali. Padahal ini salah satu dari sedikit
            manasik haji yang melibatkan tindakan fisik yang spesifik dan berulang.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Setan yang non-fisik dan batu yang fisik
          </h2>

          <p>
            Argumen resmi untuk lempar jumrah adalah simbolisme perlawanan terhadap
            setan — mengikuti Ibrahim yang melempar batu saat digoda iblis di Mina.
            Ini narasi yang sudah mapan dan diterima luas.
          </p>

          <p>
            Tapi ada pertanyaan teologis yang tidak mudah dijawab di sini. Dalam
            akidah Islam, setan adalah makhluk non-fisik yang bisa menggoda pikiran
            siapapun dari mana saja, kapan saja. Kalau begitu, apa artinya batu
            fisik yang dilempar ke tiang di satu lokasi spesifik di Arab, sekali
            setahun, hanya oleh orang yang mampu bayar ongkos haji?
          </p>

          <p>
            Kalau jawabannya adalah "simbolisme" — itu argumen yang bisa diterima.
            Tapi simbolisme itu tidak ada di Al-Quran. Dan simbol wajib yang tidak
            punya dasar teks dalam kitab yang diklaim lengkap dan sempurna adalah
            posisi yang perlu dijelaskan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dari padang pasir ke gedung bertingkat
          </h2>

          <p>
            Perubahan paling kasat mata dari ritual ini adalah infrastrukturnya.
            Yang dulu dilakukan di batu-batu kecil di padang sekarang dilakukan di
            kompleks Jamarat berlantai lima — lengkap dengan eskalator, sistem
            pendingin, dan manajemen kerumunan senilai miliaran dolar. Tiang
            semulanya berbentuk pilar kecil sekarang diperlebar jadi dinding
            elips panjang supaya orang tidak berdesak dari segala sudut.
          </p>

          <p>
            Infrastruktur itu ada karena alasan yang sangat nyata: keselamatan.
            Kerumunan jutaan orang di ruang terbatas adalah masalah logistik yang
            serius. Tapi perluasan skala besar-besaran ini juga menunjukkan sesuatu
            yang lebih mendasar — ritual yang dirancang untuk kondisi dan jumlah
            jamaah abad ke-7 sekarang harus dimodifikasi terus-menerus agar bisa
            dijalankan sama sekali.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Risiko yang nyata dan berulang
          </h2>

          <p>
            Tragedi Mina 2015 menewaskan lebih dari 2.400 orang dalam satu insiden
            terinjak-injak. Ini bukan kejadian pertama. Kecelakaan serupa terjadi
            pada 1990, 1994, 1998, 2001, 2003, 2004, 2006 — dan itu hanya yang
            tercatat dengan jumlah korban signifikan. Setiap musim haji ada yang
            cedera atau meninggal di sini.
          </p>

          <p>
            Ribuan orang kehilangan nyawa untuk ritual yang tidak ada dasar
            Quraninya. Ini bukan argumen bahwa ritual itu harus dihentikan — tapi
            ini pertanyaan yang masuk akal untuk diajukan: seberapa besar risiko
            yang bisa diterima atas nama sesuatu yang seluruh dasarnya berasal dari
            tradisi, bukan teks?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang tersisa dari pertanyaan itu
          </h2>

          <p>
            Ada posisi yang lazim dalam fikih Islam: hadis adalah sumber hukum yang
            sah, dan tidak semua kewajiban harus ada di Al-Quran secara eksplisit.
            Ini argumen yang konsisten secara internal. Tapi kalau posisi itu
            diterima, maka klaim bahwa Al-Quran adalah panduan lengkap yang tidak
            membutuhkan tambahan perlu dikaji ulang — karena dalam kasus ini, yang
            wajib justru tidak ada di sana.
          </p>

          <p>
            Al-Quran cukup spesifik untuk menyebut kapan seorang jamaah boleh
            mencukur kepalanya. Tapi tidak cukup spesifik untuk menyebut ritual
            yang jutaan orang lakukan setiap tahun — dan sebagian di antaranya
            tidak pulang karenanya.
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
                { surah: 2, ayat: 196, label: "Al-Baqarah 196" },
                { surah: 22, ayat: 27, label: "Al-Hajj 27" },
                { surah: 5, ayat: 2, label: "Al-Maidah 2" },
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
