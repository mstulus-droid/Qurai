/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Siapa yang Hampir Disembelih Ibrahim? | Qurai",
  description:
    "Al-Quran tidak menyebut nama anak Ibrahim. Para sahabat senior tidak sepakat. Al-Hajj 22:37 sendiri mengatakan dagingnya tidak sampai kepada Allah. Dan tradisi penyembelihan di Kaaba sudah ada sebelum Islam.",
  openGraph: {
    images: [
      {
        url: "/article-images/10-siapa-yang-hampir-disembelih-ibrahim-illustration.png",
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

export default function KurbanIbrahimArticle() {
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
            As-Saffat 37:107 · Al-Hajj 22:37 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 12 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Siapa yang Hampir Disembelih Ibrahim?
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran tidak menyebut nama anak itu. Para sahabat terdekat Nabi
            tidak sepakat siapa. Dan ayat yang paling sering dikutip soal kurban
            justru mengatakan dagingnya tidak sampai kepada Allah.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/10-siapa-yang-hampir-disembelih-ibrahim-illustration.png"
            alt="Ilustrasi editorial altar batu kuno dengan pisau dan siluet domba di kejauhan"
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
            Sebentar lagi Idul Adha. Hewan-hewan akan disembelih atas nama
            peristiwa yang kata Al-Quran melibatkan Ibrahim dan anaknya.
          </p>

          <p>Anaknya yang mana?</p>

          <p>
            <VerseLink surah={37} ayat={102}>
              As-Saffat 37:102
            </VerseLink>{" "}
            hanya menyebut <em>ya bunayya</em>, wahai anakku. Tidak ada nama.
            Dan karena seluruh ritual ini berdiri di atas klaim bahwa ia
            mereplikasi peristiwa spesifik yang melibatkan orang spesifik,
            ketidakhadiran nama itu bukan detail kecil.
          </p>

          <p>Para sahabat senior Nabi tidak sepakat soal ini.</p>

          <p>
            Umar ibn Khattab, Ali ibn Abi Thalib, Abdullah ibn Mas'ud,
            Al-Abbas, keempatnya berpendapat anak yang dimaksud adalah Ishaq.
            Abdullah ibn Umar berpendapat Ismail. Imam As-Sa'labi
            mendokumentasikan perdebatan ini dalam tafsirnya tanpa kesimpulan.
          </p>

          <p>
            Orang-orang ini mendengar langsung dari Muhammad. Mereka hadir saat
            tradisi itu dibentuk. Mereka tidak sepakat soal siapa yang hampir
            disembelih dalam kisah yang menjadi dasar ritual yang diulang tiap
            tahun oleh lebih dari satu miliar orang.
          </p>

          <p>
            Ketidakjelasan itu berlanjut ke ayat berikutnya.{" "}
            <VerseLink surah={37} ayat={107}>
              As-Saffat 37:107
            </VerseLink>{" "}
            menyebut Allah menggantikan sang anak dengan <em>dzibhin azhim</em>,
            sembelihan yang besar. Kata <em>azhim</em> berarti agung atau besar.
            Tapi Al-Quran tidak menyebutkan jenis hewannya, tidak menjelaskan
            dari mana asalnya, tidak menceritakan bagaimana Ibrahim
            menemukannya.
          </p>

          <p>
            Sebagai perbandingan, Kejadian 22:13 dalam Alkitab jauh lebih
            konkret: seekor domba jantan yang tanduknya tersangkut di semak
            belukar, ditemukan Abraham sendiri di belakangnya. Ada hewannya, ada
            kondisinya, ada cara menemukannya. Narasi yang sama tapi versi
            Alkitab memberi detail yang memungkinkan pembaca membayangkan
            kejadiannya.
          </p>

          <p>
            Versi Al-Quran menyisakan pertanyaan yang tidak dijawab, lalu umat
            Islam hari ini menyembelih kambing dan sapi atas nama "sembelihan
            yang besar" itu, tanpa teks yang menjelaskan kenapa kambing atau
            sapi yang dimaksud.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kitab yang lengkap, tapi butuh penjelasan dari luar
          </h2>

          <p>
            <VerseLink surah={16} ayat={89}>
              An-Nahl 16:89
            </VerseLink>{" "}
            menyebut Al-Quran sebagai <em>tibyaanan likulli syai</em>, penjelasan
            bagi segala sesuatu.{" "}
            <VerseLink surah={6} ayat={114}>
              Al-An'am 6:114
            </VerseLink>{" "}
            menyebutnya <em>mufasshal</em>, terperinci. Tapi untuk memahami
            kisah Ibrahim saja, pembaca harus keluar dari teks dan merujuk ke
            tafsir ulama, hadis-hadis, kisah-kisah Israeliyat, bahkan ke
            Alkitab.
          </p>

          <p>
            Kalau Al-Quran memang terperinci dan lengkap, mengapa justru
            sumber-sumber eksternalnya yang mengisi kekosongan itu?
          </p>

          <p>
            Ada ayat yang secara tidak langsung menjawab pertanyaan ini, tapi
            jawabannya tidak menggembirakan.{" "}
            <VerseLink surah={5} ayat={101}>
              Al-Maidah 5:101
            </VerseLink>{" "}
            mengatakan: "Janganlah kamu menanyakan hal-hal yang jika diterangkan
            kepadamu akan menyusahkan kamu." Ayat ini ada, tertulis, dan secara
            eksplisit mendorong untuk tidak menggali lebih dalam. Dalam konteks
            epistemologi modern, itu adalah lampu merah terhadap pertanyaan
            kritis, bukan undangan untuk berpikir.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dagingnya tidak sampai
          </h2>

          <p>
            <VerseLink surah={22} ayat={37}>
              Al-Hajj 22:37
            </VerseLink>{" "}
            mengatakan: "Daging-daging unta dan darahnya sekali-kali tidak dapat
            mencapai keridhaan Allah, tetapi ketakwaan dari kamulah yang dapat
            mencapainya."
          </p>

          <p>
            Cukup jelas. Hasil fisik dari ritual penyembelihan tidak sampai
            kepada Allah. Yang sampai adalah takwa.
          </p>

          <p>Kalau begitu, mengapa tidak cukup sedekah?</p>

          <p>
            Uang yang dipakai membeli hewan kurban, kalau diberikan langsung
            kepada yang membutuhkan, secara praktis lebih efisien. Tidak ada
            infrastruktur penyembelihan, tidak ada risiko distribusi daging yang
            tidak merata, tidak ada ketergantungan pada kapasitas logistik
            panitia kurban. Dan berdasarkan ayat itu sendiri, ekspresi ketakwaan
            lewat jalur itu sama validnya.
          </p>

          <p>
            Realitas di lapangan juga bicara. Daging kurban sering berlebih di
            satu tempat dan kurang di tempat lain. Redistribusi yang tidak
            merata membuat sebagian daging terbuang sementara sebagian komunitas
            tidak mendapat jatah. Bantuan yang datang setahun sekali tidak
            menyelesaikan kemiskinan yang ada 365 hari. Kalau tujuannya membantu
            yang miskin, ritual ini adalah cara yang jauh memutar untuk
            mencapainya.
          </p>

          <p>
            22:37 seperti mempertanyakan kegunaan ritualnya sendiri, lalu teks
            berlanjut seolah tidak terjadi apa-apa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Cara dua tradisi menangani kisah yang sama
          </h2>

          <p>
            Tradisi Kristen menangani kisah yang sama dengan cara berbeda.
            Pengorbanan Ibrahim dibaca sebagai prefigurasi, bayangan awal dari
            pengorbanan Yesus, sebuah narasi yang dibangun menuju satu titik
            final sehingga pengulangan ritual tidak diperlukan. Dari sisi
            konsistensi naratif internal, strukturnya lebih bisa dilacak: ada
            nama yang eksplisit, ada konteks yang koheren, ada penjelasan
            mengapa kisahnya tidak perlu diulang setiap tahun.
          </p>

          <p>
            Ini bukan penilaian tentang mana yang lebih benar secara historis.
            Alkitab punya masalah dokumentasi dan kronologinya sendiri yang
            tidak kalah rumit. Yang berbeda adalah cara dua tradisi menangani
            kisah yang sama dan konsekuensi praktis yang muncul dari perbedaan
            itu. Tradisi yang memilih menggenapi narasi secara final tidak perlu
            membangun ritual tahunan di atas fondasi yang tokoh sentralnya saja
            masih diperdebatkan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Sebelum Ibrahim ada di sana
          </h2>

          <p>
            Penyembelihan hewan di sekitar Kaaba sudah berlangsung sebelum
            Muhammad lahir. Suku Quraish melakukannya sebagai persembahan kepada
            Hubal dan dewa-dewa Arab lainnya. Ibn Hisham mencatat ini dalam
            Sirah Nabawiyah. Lokasinya, waktunya, mekanisme ritualnya sudah ada.
          </p>

          <p>
            Islam memberikan narasi Ibrahim sebagai asal-usulnya. Apakah itu
            rekonstruksi historis yang akurat atau legitimasi teologis untuk
            praktik yang sudah berjalan, jawabannya tidak ada di dalam teks.
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
                { surah: 37, ayat: 102, label: "As-Saffat 102" },
                { surah: 37, ayat: 107, label: "As-Saffat 107" },
                { surah: 16, ayat: 89, label: "An-Nahl 89" },
                { surah: 6, ayat: 114, label: "Al-An'am 114" },
                { surah: 5, ayat: 101, label: "Al-Maidah 101" },
                { surah: 22, ayat: 37, label: "Al-Hajj 37" },
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
