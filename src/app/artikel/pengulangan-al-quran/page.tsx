/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Yang Diulang Tiga Puluh Satu Kali | Qurai",
  description:
    "Hampir 40 persen Surah Ar-Rahman terdiri dari satu frasa yang diulang 31 kali tanpa variasi. Kisah Nabi Hud diceritakan di lima surah berbeda dengan frasa yang hampir identik, tanpa menambah detail baru. Al-Qur'an menyebut dirinya tibyan li kulli syai' — tapi sebagian besar ruangnya diisi dengan cerita yang sudah pernah diceritakan di tempat lain dalam kitab yang sama.",
  openGraph: {
    images: [
      {
        url: "/article-images/30-pengulangan-al-quran-illustration.png",
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

export default function PengulanganAlQuranArticle() {
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
            Ar-Rahman 55:13 · An-Nahl 16:89 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Yang Diulang Tiga Puluh Satu Kali
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Hampir 40 persen Surah Ar-Rahman terdiri dari satu frasa yang
            diulang 31 kali tanpa variasi. Kisah Nabi Hud diceritakan di lima
            surah berbeda dengan frasa yang hampir identik, tanpa menambah
            detail baru. Al-Qur'an menyebut dirinya <em>tibyan li kulli
            syai'</em> — penjelasan atas segala sesuatu.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/30-pengulangan-al-quran-illustration.png"
            alt="Ilustrasi editorial manuskrip dengan pola pengulangan emas di meja studi gelap"
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
            Surah Ar-Rahman terdiri dari 78 ayat. Di dalamnya, satu frasa
            muncul 31 kali tanpa variasi:
          </p>

          <p>
            <em>
              "Maka nikmat Tuhanmu yang manakah yang kamu berdua dustakan?"
            </em>
          </p>

          <p>
            Setiap kali ada deskripsi nikmat atau gambaran azab, frasa itu
            datang lagi, identik, kata per kata. 31 dari 78 ayat adalah kalimat
            yang sama.
          </p>

          <p>
            Ada tafsir yang membaca pengulangan itu sebagai ajakan merenungkan
            kembali setiap nikmat yang baru saja disebutkan. Tapi dalam tradisi
            balagha, retorika Arab klasik, pengulangan punya kriteria tersendiri
            untuk disebut keindahan atau cacat.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Takrar dan standar yang sudah ada
          </h2>

          <p>
            Para ulama balagha Arab, dari Ibnu Qutaibah sampai Al-Jahiz,
            membahas takrar, pengulangan dalam Al-Quran. Kesimpulan umumnya:
            pengulangan yang kuat mengandung variasi redaksi, perkembangan
            makna, atau pergeseran konteks. Pengulangan mekanis, frasa identik
            tanpa modifikasi, lebih dekat ke kecacatan daripada keunggulan
            dalam standar itu.
          </p>

          <p>
            Al-Qur'an diklaim sebagai puncak keindahan bahasa Arab, I'jaz yang
            tidak bisa ditandingi manusia. Tapi standar keindahan yang sama
            itu, yang menghasilkan Mu'allaqat, memandang takrar secara
            selektif. Frasa identik 31 kali dalam 78 ayat adalah sesuatu yang
            membutuhkan justifikasi, bukan sesuatu yang dengan sendirinya
            menjadi argumen untuk keunggulan.
          </p>

          <p>
            Ar-Rahman bukan satu-satunya kasus.{" "}
            <VerseLink surah={77} ayat={15}>Surah Al-Mursalat</VerseLink>{" "}
            memiliki frasa "Kecelakaan besarlah pada hari itu bagi orang-orang
            yang mendustakan" yang muncul 10 kali dalam 50 ayat. Polanya sama:
            interval reguler, frasa identik, tanpa variasi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Lima versi cerita yang sama
          </h2>

          <p>
            Kisah Nabi Hud dan kaum 'Ad diceritakan di Al-A'raf, Hud,
            Al-Mu'minun, Asy-Syu'ara, dan Al-Ahqaf. Lima surah, satu narasi.
          </p>

          <p>
            <VerseLink surah={7} ayat={65}>Al-A'raf 7:65</VerseLink> dan{" "}
            <VerseLink surah={11} ayat={50}>Hud 11:50</VerseLink> membuka
            cerita itu dengan kalimat yang hampir identik:{" "}
            <em>
              "Dan kepada kaum 'Ad Kami utus saudara mereka, Hud. Ia berkata:
              Hai kaumku, sembahlah Allah, sekali-kali tidak ada Tuhan bagimu
              selain-Nya."
            </em>{" "}
            Alurnya sama di kelima surah itu: Hud diutus, kaum menolak, azab
            datang, Hud dan pengikutnya selamat.
          </p>

          <p>
            Kisah Musa muncul di 36 surah berbeda. Pertemuannya dengan Firaun
            diceritakan ulang minimal dua belas kali. Adegan Musa melihat api
            di gunung ada di Al-A'raf, Taha, dan Al-Qasas, dengan frasa yang
            hampir identik di ketiga versi itu.
          </p>

          <p>
            Pengulangan yang produktif biasanya menambah sesuatu: detail baru,
            perspektif berbeda, aspek yang diperluas. Kisah Hud di lima surah
            itu tidak menambah detail baru tentang kaum 'Ad. Tidak ada
            informasi geografis yang lebih presisi, tidak ada karakter baru,
            tidak ada perspektif narasi yang bergeser. Yang berubah hanya
            surahnya.
          </p>

          <p>
            Pola seperti ini adalah ciri khas transmisi lisan. Epos oral
            seperti Iliad mengandung pengulangan formula serupa, kalimat yang
            digunakan kembali hampir kata per kata setiap kali situasi yang
            sama muncul. Ketika wahyu lisan dikompilasi dalam bentuk tertulis,
            pengulangan itu ikut terbawa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kitab yang mengklaim kelengkapannya sendiri
          </h2>

          <p>
            <VerseLink surah={16} ayat={89}>An-Nahl 16:89</VerseLink>{" "}
            menyatakan Al-Qur'an adalah <em>tibyan li kulli syai'</em>,
            penjelasan atas segala sesuatu.
          </p>

          <p>
            Klaim itu dan pola pengulangannya sulit diletakkan bersamaan. Kitab
            yang diklaim menjelaskan segala sesuatu menghabiskan sebagian besar
            ruangnya untuk menceritakan kembali kisah yang sudah pernah
            diceritakan di tempat lain dalam kitab yang sama, dengan
            kata-kata yang sama.
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
                { surah: 55, ayat: 13, label: "Ar-Rahman 13" },
                { surah: 77, ayat: 15, label: "Al-Mursalat 15" },
                { surah: 7, ayat: 65, label: "Al-A'raf 65" },
                { surah: 11, ayat: 50, label: "Hud 50" },
                { surah: 26, ayat: 123, label: "Asy-Syu'ara 123" },
                { surah: 46, ayat: 21, label: "Al-Ahqaf 21" },
                { surah: 16, ayat: 89, label: "An-Nahl 89" },
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

        <ArticleRecommendations currentSlug="pengulangan-al-quran" />
      </article>
    </main>
  );
}
