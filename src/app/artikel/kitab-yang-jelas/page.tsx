/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Kitab yang Jelas | Qurai",
  description:
    "Al-Kautsar adalah surah paling pendek dalam Al-Quran. Ayat ketiganya hampir tidak punya arti tanpa mengetahui kata penghinaan yang tidak disebutkan di dalamnya. Al-Quran menyebut dirinya 'kitabun mubeen', tapi tidak ada pembaca yang bisa memahaminya sendirian.",
  openGraph: {
    images: [
      {
        url: "/article-images/23-kitab-yang-jelas-illustration.png",
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

export default function KitabYangJelasArticle() {
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
            Al-Kautsar 108:3 · Al-Anfal 8:5 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Kitab yang Jelas
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Kautsar, surah paling pendek dalam Al-Quran, adalah balasan
            terhadap satu penghinaan yang tidak disebutkan di dalamnya.
            Al-Anfal 8:5-7 merujuk ke Perang Badar tanpa menyebut kata
            "Badar" sama sekali. Al-Quran menyebut dirinya "kitabun mubeen",
            kitab yang jelas. Tapi tidak ada pembaca yang bisa memahaminya
            sendirian.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/23-kitab-yang-jelas-illustration.png"
            alt="Ilustrasi editorial manuskrip tua yang dihubungkan ke fragmen pusat"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <ArticleAudio slug="kitab-yang-jelas" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Al-Kautsar terdiri dari tiga ayat, yang paling pendek dalam
            Al-Quran. Ayat ketiganya:{" "}
            <VerseLink surah={108} ayat={3}>
              <em>
                "Sesungguhnya orang-orang yang membencimu dialah yang terputus."
              </em>
            </VerseLink>
          </p>

          <p>
            Di dalamnya, kalimat itu tidak memberi tahu siapa yang dimaksud,
            apa yang mereka lakukan, mengapa mereka "terputus," atau apa
            hubungannya dengan dua ayat sebelumnya tentang telaga dan kurban.
            Ia berdiri sendiri tanpa penjelasan.
          </p>

          <p>
            Yang menjelaskan adalah literatur tafsir: seorang pria, ada yang
            menyebut Al-Ash bin Wa'il, ada yang menyebut Abu Lahab atau yang
            lain, mengejek Muhammad setelah kematian putranya. Ejekan itu
            menggunakan satu kata:{" "}
            <em>abtar</em>. Dalam masyarakat Arab patriarkal,{" "}
            <em>abtar</em> adalah penghinaan berat. Orang yang tidak punya
            keturunan laki-laki. Orang yang namanya tidak akan dilanjutkan.
            Orang yang terputus dari masa depan.
          </p>

          <p>
            Seluruh surah itu adalah balasan terhadap satu kata penghinaan itu.
            Ia membalikkan label kepada penghinanya: bukan kamu yang terputus,
            dialah yang terputus.
          </p>

          <p>
            Tanpa mengetahui bahwa kata <em>abtar</em> dilontarkan kepada
            Muhammad, tanpa tahu oleh siapa dan dalam konteks apa, ayat ketiga
            itu hampir tidak punya arti. Ia adalah kalimat penutup dari
            percakapan yang tidak ada di dalam surahnya sendiri.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Badar tanpa Badar
          </h2>

          <p>
            <VerseLink surah={8} ayat={5}>
              Al-Anfal 8:5–7
            </VerseLink>{" "}
            adalah contoh yang lebih ekstrem. Al-Quran berkata: Allah menyuruhmu
            keluar dari rumahmu dengan kebenaran, dan sebagian orang beriman
            tidak menyukainya. Mereka membantahmu seolah dihalau ke arah
            kematian. Allah menjanjikan salah satu dari dua golongan untukmu,
            tapi kamu menginginkan golongan yang tidak bersenjata.
          </p>

          <p>
            Bagi siapa pun yang tidak tahu sejarah Islam awal, ayat-ayat itu
            hampir tidak bisa diinterpretasikan. Keluar dari rumah menuju ke
            mana? Dua golongan yang mana? Golongan yang tidak bersenjata adalah
            yang mana dan mengapa itu relevan?
          </p>

          <p>
            Semua itu merujuk ke Perang Badar: Muhammad dan para pengikutnya
            berangkat untuk mencegat karavan dagang Quraisy yang kaya, tapi
            bertemu dengan pasukan militer Quraisy yang datang melindungi
            karavan itu. "Dua golongan" adalah pilihan antara karavan yang
            tidak bersenjata penuh atau pasukan yang datang berperang. Sebagian
            pengikut Muhammad ingin karavan. Muhammad memilih menghadapi
            pasukan.
          </p>

          <p>Tidak satu kata pun dari narasi itu ada di dalam Al-Quran.</p>

          <p>
            Ayat-ayat itu tidak bercerita tentang Badar. Mereka merujuk ke
            Badar, mengasumsikan pembaca sudah tahu, dan mengomentari keputusan
            yang diambil di sana. Ayat-ayat itu tidak memberikan cukup informasi
            untuk dimengerti sama sekali tanpa cerita yang tidak ada di
            dalamnya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kitabun mubeen
          </h2>

          <p>
            Al-Quran menyebut dirinya{" "}
            <VerseLink surah={12} ayat={1}>
              <em>kitabun mubeen</em>
            </VerseLink>{" "}
            di beberapa tempat. Di pembuka Surah Yusuf, di pembuka Al-Hijr, di
            Al-Naml, di Al-Qashash. Kata <em>mubeen</em> artinya jelas,
            gamblang, terang. Kitab yang menjelaskan dirinya sendiri.
          </p>

          <p>
            Paradoksnya ada di antara klaim itu dan apa yang kita lihat ketika
            membacanya.
          </p>

          <p>
            Tidak ada pembaca yang baru pertama membuka Al-Quran bisa memahami
            Al-Kautsar 108:3 tanpa tafsir. Tidak ada yang bisa membaca Al-Anfal
            8:5–7 dan tahu ini tentang keputusan taktis di Badar. Tidak ada
            yang bisa membaca{" "}
            <VerseLink surah={48} ayat={10}>
              Al-Fath 48:10
            </VerseLink>
            , "orang-orang yang berjanji setia kepadamu sesungguhnya berjanji
            kepada Allah, tangan Allah di atas tangan mereka," dan tahu bahwa
            ini tentang Bay'at al-Ridwan di Hudaybiyyah, sebuah momen politik
            yang sangat spesifik.
          </p>

          <p>
            Tradisi Islam menyelesaikan masalah ini dengan membangun aparatus
            eksternal yang besar: asbabun nuzul, sirah, hadis, tafsir. Semuanya
            dibutuhkan untuk menjelaskan apa yang Al-Quran sendiri tidak jelaskan.
            Literatur itu tebal, dan bertambah tebal dari generasi ke generasi,
            karena semakin jauh pembaca dari Arabia abad ke-7, semakin banyak
            yang perlu dijelaskan.
          </p>

          <p>
            Satu cara untuk membaca ini adalah bahwa <em>mubeen</em> tidak
            dimaksudkan sebagai jelas dalam arti mandiri, tapi jelas bagi
            audiens aslinya. Mereka tahu kata <em>abtar</em> dimaksudkan kepada
            siapa. Mereka tahu dua golongan di Badar. Mereka tahu siapa yang
            berjanji di Hudaybiyyah dan dalam kondisi apa.
          </p>

          <p>
            Tapi kalau memang begitu, kitab itu dirancang untuk pembaca spesifik
            di Arabia abad ke-7, bukan untuk semua manusia di semua zaman.
            Keduanya tidak bisa benar sekaligus: kitab yang jelas untuk semua
            orang, atau kitab yang hanya jelas bagi orang yang sudah tahu semua
            konteksnya.
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
                { surah: 108, ayat: 3, label: "Al-Kautsar 3" },
                { surah: 8, ayat: 5, label: "Al-Anfal 5" },
                { surah: 12, ayat: 1, label: "Yusuf 1" },
                { surah: 48, ayat: 10, label: "Al-Fath 10" },
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

        <ArticleRecommendations currentSlug="kitab-yang-jelas" />
      </article>
    </main>
  );
}
