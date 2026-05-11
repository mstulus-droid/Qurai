/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Mitos \"Preservasi Sempurna\" Al-Quran | Qurai",
  description:
    "Ribuan varian tekstual sudah terdokumentasikan. Seperempat kosakata Al-Quran bukan dari Arab. Kronologi pembentukannya menunjuk ke proses yang jauh lebih panjang dari 22 tahun. Ini hasil penelitian manuskrip yang bisa diverifikasi.",
  openGraph: {
    images: [
      {
        url: "/article-images/09-mitos-preservasi-sempurna-al-quran-illustration.png",
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

export default function PreservasiQuranArticle() {
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
            Yusuf 12:2 · Al-Hijr 15:9 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 15
            menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Mitos "Preservasi Sempurna" Al-Quran
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Ribuan varian tekstual sudah terdokumentasikan. Seperempat kosakata
            Al-Quran bukan dari Arab. Kronologi pembentukannya menunjuk ke
            proses yang jauh lebih panjang dari 22 tahun. Ini hasil penelitian
            manuskrip yang bisa diverifikasi.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/09-mitos-preservasi-sempurna-al-quran-illustration.png"
            alt="Ilustrasi editorial fragmen manuskrip tua diperiksa dengan kaca pembesar"
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
            Islam membuat klaim yang cukup berani: Al-Quran adalah
            satu-satunya kitab suci yang terpelihara sempurna tanpa perubahan
            satu huruf pun sejak diturunkan. Klaim ini sering dijadikan
            argumen keunggulan Islam atas agama lain. Tapi penelitian manuskrip
            modern menunjukkan cerita yang berbeda.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Manuskrip Sana'a: ketika tembok bicara
          </h2>

          <p>
            Tahun 1972, pekerja bangunan di Masjid Agung Sana'a, Yaman, secara
            tidak sengaja menemukan ribuan fragmen Al-Quran kuno yang
            tersembunyi di dalam dinding. Dating karbon menunjukkan usia abad
            ke-7 hingga ke-8 — artinya ini kontemporer dengan masa formatif
            Islam sendiri.
          </p>

          <p>
            Yang membuat temuan ini tidak nyaman adalah isinya. Fragmen-fragmen
            itu memuat varian yang berbeda dari Mushaf Utsmani yang kita kenal:
            urutan surah yang berbeda, ayat-ayat yang tidak ada di teks
            standar, ribuan variasi kata. Dan ada yang lebih mengusik — beberapa
            halaman adalah <em>palimpsest</em>: teks lama dihapus, lalu
            ditulisi ulang. Itu bukan tanda preservasi. Itu tanda revisi.
          </p>

          <p>
            Jika Al-Quran terpelihara sempurna, manuskrip tertua yang kita
            punya seharusnya identik dengan yang kita baca sekarang.
            Kenyataannya tidak.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tujuh qira'at: variasi yang disebut mukjizat
          </h2>

          <p>
            Islam ortodoks mengakui tujuh cara baca (qira'at) yang sah, dan
            menyebutnya kemudahan dari Allah. Tapi beberapa perbedaan di antara
            qira'at ini bukan soal pelafalan — melainkan soal makna.
          </p>

          <p>
            Ambil{" "}
            <VerseLink surah={2} ayat={238}>
              Q 2:238
            </VerseLink>{" "}
            misalnya. Sebagian qira'at membaca "shalat wustha" (shalat tengah),
            sebagian lain membaca "shalat asr." Ini bukan variasi fonetik —
            ini perbedaan dalam identifikasi ibadah yang diperintahkan. Atau{" "}
            <VerseLink surah={5} ayat={6}>
              Q 5:6
            </VerseLink>
            : perbedaan antara <em>arjulakum</em> dan <em>arjulikum</em>{" "}
            menentukan apakah kaki harus dibasuh atau diusap dalam wudhu.
            Perbedaan ini sampai hari ini jadi perdebatan fiqh di antara
            mazhab.
          </p>

          <p>
            Dan di{" "}
            <VerseLink surah={33} ayat={6}>
              Q 33:6
            </VerseLink>
            , satu qira'at memuat frasa "wa huwa abun lahum" (dan dia bapak
            bagi mereka) setelah "istri-istrinya adalah ibu mereka" — menambahkan
            status Muhammad sebagai bapak spiritual umat. Qira'at lain tidak
            memuat frasa itu. Ini bukan variasi pelafalan. Ini perbedaan teks.
          </p>

          <p>
            Kalau variasi tidak mengubah makna, mengapa hukum berubah tergantung
            qira'at yang dipakai?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dr. Dan Brubaker dan 4.000 varian
          </h2>

          <p>
            Dan Brubaker adalah spesialis manuskrip Al-Quran yang menghabiskan
            bertahun-tahun membandingkan 14 manuskrip tertua (abad ke-7 hingga
            ke-10) dengan teks standar saat ini. Hasilnya: lebih dari 4.000
            varian tekstual.
          </p>

          <p>
            Bukan cuma soal titik dan harakat. Brubaker mendokumentasikan
            perbedaan ejaan yang mengubah arti, perbedaan urutan ayat dan surah,
            dan penambahan atau pengurangan teks. Ini bukan klaim fringe — ini
            hasil analisis paleografi dan kodikologi yang metodis, dipublikasikan
            dan bisa diverifikasi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Al-Quran bukan bahasa Arab murni
          </h2>

          <p>
            Christoph Luxenberg, sarjana Semitik yang bekerja dengan nama
            samaran karena alasan keamanan, menerbitkan analisis pada 2000
            dengan argumen yang sederhana tapi konsekuensinya jauh: sekitar
            25–30% kosakata Al-Quran bukan dari Arab, melainkan dari
            Syro-Aramaic.
          </p>

          <p>
            Bukan kata-kata pinggiran. Kata-kata inti: "Quran" sendiri
            kemungkinan dari <em>qeryana</em> (Syriac) yang berarti bacaan
            liturgi, "salah" dari <em>slota</em> (Aramaic) doa liturgi, "zakat"
            dari <em>zakuta</em> (Aramaic) kebenaran atau kemurnian, "furqan"
            dari <em>purqana</em> (Syriac) pembebasan.
          </p>

          <p>
            Al-Quran di{" "}
            <VerseLink surah={12} ayat={2}>
              Yusuf 12:2
            </VerseLink>{" "}
            menyebut dirinya wahyu "dalam bahasa Arab yang jelas." Tapi kalau
            seperempat kosakatanya bukan Arab asli, klaim itu perlu diperiksa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Huruf-huruf yang tidak ada yang tahu
          </h2>

          <p>
            29 surah dimulai dengan kombinasi huruf yang maknanya tidak pernah
            dijelaskan secara memuaskan — Alif Lam Mim, Ya Sin, Ha Mim, dan
            seterusnya. Ulama sepanjang sejarah menyebutnya "hanya Allah yang
            tahu maknanya," dan itu sudah berlangsung 1.400 tahun.
          </p>

          <p>
            Luxenberg mengajukan bacaan lain: huruf-huruf itu adalah singkatan
            liturgi dari tradisi Kristen Syro-Aramaic. "Ya Sin" misalnya, ia
            baca sebagai bentuk Aramaic dari "Yasu" — Yesus. Hipotesis ini
            kontroversial dan belum diterima luas. Tapi pertanyaan dasarnya
            tidak mudah diabaikan: mengapa teks wahyu memuat hal-hal yang
            generasi terbaik penerimanya pun tidak bisa jelaskan?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kapan Al-Quran benar-benar terbentuk?
          </h2>

          <p>
            Tradisi Islam menyatakan bahwa Khalifah Utsman, sekitar 652 M,
            mengompilasi Al-Quran dalam satu mushaf standar dan membakar semua
            varian yang beredar. Tapi bukti kontemporer untuk peristiwa ini
            sulit ditemukan.
          </p>

          <p>
            Tidak ada dokumen dari masa Utsman yang mengonfirmasi kronologi ini.
            Varian tekstual terus muncul berabad-abad setelah masa hidupnya.
            Manuskrip tertua yang ada tidak secara jelas mendukung eksistensi
            satu "Mushaf Utsmani" yang tunggal. Dan koin serta prasasti dari
            era awal Islam tidak memuat referensi Quranic hingga abad ke-8.
          </p>

          <p>
            Koin adalah data yang keras — tidak bisa direvisi setelah dicetak.
            Koin Islam dari 661 hingga 685 M tidak memuat referensi agama yang
            spesifik. Frasa "Muhammad rasul Allah" baru muncul sekitar
            685–692 M. Formula Quranic muncul bertahap setelahnya, dengan
            standardisasi lebih lengkap di abad ke-8.
          </p>

          <p>
            Kalau Al-Quran sudah dibakukan sejak 652 M, mengapa formulanya
            tidak muncul di koin negara Islam selama beberapa dekade
            setelahnya?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Struktur Al-Quran di bawah analisis redaksi
          </h2>

          <p>
            Salah satu prinsip dasar ilmu Al-Quran adalah pembedaan antara
            surah Makkiyah dan Madaniyah. Tapi ketika teks diperiksa lebih
            teliti, pembedaan ini tidak selalu koheren.
          </p>

          <p>
            Ada surah yang dikategorikan Makkiyah tapi memuat referensi
            peristiwa Madinah. Ada yang dikategorikan Madaniyah tapi temanya
            lebih cocok dengan periode Mekah. Perubahan kiblat yang disebut di{" "}
            <VerseLink surah={2} ayat={144}>
              Al-Baqarah 2:144
            </VerseLink>{" "}
            muncul di tengah surah panjang tanpa penanda editorial yang jelas.
            Dan perintah hukum yang katanya turun bertahap tidak mengikuti
            urutan kronologis yang diklaim.
          </p>

          <p>
            Analisis redaksi menemukan setidaknya tiga lapisan komposisi yang
            berbeda dalam teks Al-Quran. Lapisan pertama: doa-doa pendek dan
            litani, bahasanya paling dekat dengan Aramaic, punya kesamaan kuat
            dengan tradisi liturgi Kristen dan Yahudi. Lapisan kedua:
            narasi-narasi biblikal yang diperluas dengan polemik terhadap
            Kristen dan Yahudi. Lapisan ketiga: hukum-hukum sosial dan politik
            dengan bahasa Arab yang lebih terstandardisasi.
          </p>

          <p>
            Kalau ini teks tunggal yang diturunkan dalam 22 tahun,
            lapisan-lapisan itu perlu penjelasan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Perbandingan dengan dokumentasi Perjanjian Baru
          </h2>

          <p>
            Klaim bahwa Al-Quran lebih terpelihara dari Alkitab cukup umum
            diangkat. Dari sisi dokumentasi manuskrip, posisinya justru
            terbalik.
          </p>

          <p>
            Perjanjian Baru punya lebih dari 5.800 manuskrip Yunani yang sudah
            dikatalogkan, dari abad ke-2 hingga ke-15. Fragmen P52, bagian dari
            Injil Yohanes, memiliki dating sekitar 125 M — hanya 25–30 tahun
            setelah penulisan teks aslinya. Codex Sinaiticus dan Vaticanus dari
            abad ke-4 memuat teks yang hampir lengkap. Dan semua varian
            dipublikasikan secara terbuka dalam edisi kritis yang bisa diakses
            siapa saja.
          </p>

          <p>
            Al-Quran punya kurang dari 50 manuskrip lengkap sebelum abad
            ke-10. Manuskrip tertua bersifat fragmentaris dan statusnya masih
            diperdebatkan. Akses peneliti independen ke koleksi manuskrip
            Al-Quran di beberapa negara dibatasi. Varian yang ditemukan tidak
            selalu dipublikasikan dengan transparan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang tersisa
          </h2>

          <p>
            Ribuan varian tekstual sudah terdokumentasikan — bukan oleh orang
            yang membenci Islam, tapi oleh sarjana manuskrip yang kerjanya
            memang membandingkan teks. Substrat linguistik Al-Quran jauh lebih
            kompleks dari klaim "bahasa Arab yang jelas." Kronologi pembentukan
            teksnya, kalau mengikuti bukti numismatik dan paleografis, menunjuk
            ke proses yang jauh lebih panjang dari 22 tahun pewahyuan.
          </p>

          <p>
            <VerseLink surah={15} ayat={9}>
              Al-Hijr 15:9
            </VerseLink>{" "}
            menyatakan Allah yang menjaga kelestarian "adz-dzikr" ini. Tapi
            kalau teksnya memang melewati semua proses seperti yang data
            tunjukkan — revisi, variasi, standardisasi bertahap — klaim "tidak
            berubah satu huruf pun" itu klaim apa sebenarnya?
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
                { surah: 12, ayat: 2, label: "Yusuf 2" },
                { surah: 2, ayat: 238, label: "Al-Baqarah 238" },
                { surah: 5, ayat: 6, label: "Al-Maidah 6" },
                { surah: 33, ayat: 6, label: "Al-Ahzab 6" },
                { surah: 2, ayat: 144, label: "Al-Baqarah 144" },
                { surah: 15, ayat: 9, label: "Al-Hijr 9" },
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
