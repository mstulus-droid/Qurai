/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";

export const metadata: Metadata = {
  title: "Kaaba, Allah, dan Apa yang Ada Sebelumnya | Qurai",
  description:
    "Kaaba punya sejarah panjang sebagai kuil politeistik. Nama Allah muncul jauh sebelum Islam. Ritual haji sudah berlangsung berabad-abad sebelum Muhammad. Ini bukan tuduhan — ini catatan historis yang bisa diperiksa.",
  openGraph: {
    images: [
      {
        url: "/article-images/07-kaaba-allah-dan-apa-yang-ada-sebelumnya-illustration.png",
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

export default function WarisanPaganArabArticle() {
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
            An-Najm 53:19 · Al-Ankabut 29:61 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Kaaba, Allah, dan Apa yang Ada Sebelumnya
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Kaaba punya sejarah panjang sebagai kuil politeistik. Nama Allah muncul
            jauh sebelum Islam. Ritual haji sudah berlangsung berabad-abad sebelum
            Muhammad. Ini bukan tuduhan — ini catatan historis yang bisa diperiksa.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/07-kaaba-allah-dan-apa-yang-ada-sebelumnya-illustration.png"
            alt="Ilustrasi editorial bangunan kubus gelap di halaman ziarah kuno"
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
            Sebelum Islam, Kaaba sudah ada. Ibn Ishaq dalam <em>Sirat Rasul Allah</em>{" "}
            mencatat bahwa tempat itu adalah pusat ziarah Arab dengan 360 patung —
            masing-masing mewakili dewa suku yang berbeda. Ini bukan catatan dari
            musuh Islam; ini sumber biografi Muhammad yang paling awal dan paling
            dihormati.
          </p>

          <p>
            Hisham ibn al-Kalbi dalam <em>Book of Idols</em> mendokumentasikan setidaknya
            empat struktur serupa di tempat lain di Arabia — menunjukkan bahwa "Kaaba"
            bukan arsitektur yang unik, tapi format kuil yang umum di kalangan
            suku-suku Arab. Yang di Mekkah hanya yang paling terkenal.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Ritual yang tidak berubah
          </h2>

          <p>
            Salah satu pertanyaan yang jarang diajukan secara langsung adalah:
            seberapa banyak dari ritual haji yang ada sebelum Islam, dan seberapa
            banyak yang benar-benar baru? Jawabannya cukup mengejutkan. Thawaf
            mengelilingi Kaaba tujuh kali sudah dilakukan sebelum Muhammad.
            Ziarah musiman ke Mekkah sudah berlangsung berabad-abad. Ihram —
            pakaian tak berjahit yang membedakan jamaah dari kehidupan biasa —
            adalah format ritual yang dikenal luas di berbagai tradisi pra-Islam.
          </p>

          <p>
            Ini bisa dibaca dua cara. Satu: Islam datang untuk membersihkan
            ritual-ritual yang sudah ada dari unsur kesyirikan dan mengembalikannya
            ke bentuk Abrahamik yang asli — ini narasi resmi. Dua: Islam mengadopsi
            praktik-praktik yang sudah mengakar karena itu satu-satunya cara agar
            agama baru bisa diterima oleh masyarakat yang sudah hidup dengan
            ritual-ritual itu selama generasi. Kedua bacaan ini sama-sama bisa
            dipertahankan, tergantung dari mana seseorang memulai.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tiga dewi dan satu ayat yang tidak bisa dihindari
          </h2>

          <p>
            <VerseLink surah={53} ayat={19}>
              An-Najm 53:19-23
            </VerseLink>{" "}
            menyebut tiga nama: Al-Lat, Al-Uzza, dan Manat. Ayat itu
            mempertanyakan logika orang yang menganggap ketiga sosok ini sebagai
            "putri Allah" sementara menginginkan anak laki-laki untuk diri mereka
            sendiri.
          </p>

          <p>
            Yang menarik bukan bantahannya — tapi kenyataan bahwa Al-Quran merasa
            perlu menyebut dan mendebat ketiga sosok ini secara langsung. Al-Lat
            punya kuil di Ta'if. Al-Uzza disimbolkan dengan tiga pohon akasia di
            Nakhlah. Manat adalah dewi nasib yang disembah di pesisir Laut Merah.
            Ketiganya bukan mitos yang jauh — mereka bagian dari lanskap religius
            tempat Muhammad lahir dan tumbuh.
          </p>

          <p>
            Bahwa Al-Quran merespons mereka secara eksplisit justru mengkonfirmasi
            seberapa nyata kehadiran mereka. Kitab yang mengklaim datang dari Tuhan
            yang satu harus berhadapan langsung dengan saingannya — karena saingan
            itu ada dan relevan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Allah sebelum Islam
          </h2>

          <p>
            Nama "Allah" bukan ciptaan Islam. Secara linguistik, ia bisa ditelusuri
            ke <em>Ilum</em> dalam tradisi Mesopotamia, <em>El</em> dan <em>Eloah</em>{" "}
            dalam tradisi Ibrani dan Ugarit, <em>Elaha</em> dalam bahasa Aram, dan
            <em> Alaha</em> dalam Suryani Kristen — bahasa yang dipakai Gereja Kristen
            Arab jauh sebelum Muhammad.
          </p>

          <p>
            Yang lebih relevan adalah bagaimana orang Arab pra-Islam memahami Allah.
            Konsepnya bisa digambarkan sebagai "Tuhan Tertinggi yang sudah mundur" —
            pencipta yang tidak terlibat langsung dalam urusan sehari-hari, sementara
            dewa-dewi yang lebih kecil mengisi fungsi praktis dalam kehidupan manusia.
            Ini adalah pola yang dikenal luas di seluruh Timur Tengah kuno.
          </p>

          <p>
            <VerseLink surah={29} ayat={61}>
              Al-Ankabut 29:61
            </VerseLink>{" "}
            mencatat hal ini secara langsung: kalau kamu tanya kepada mereka siapa
            yang menciptakan langit dan bumi, mereka akan menjawab "Allah." Artinya,
            orang-orang yang Al-Quran sebut sebagai musyrik itu sudah mengakui Allah
            sebagai pencipta — mereka hanya juga menyembah yang lain di sampingnya.
            Islam bukan memperkenalkan nama itu; Islam memperkenalkan eksklusivitasnya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Hubal dan Allah
          </h2>

          <p>
            Hubungan antara Hubal — dewa utama di Kaaba sebelum Islam — dan Allah
            adalah salah satu pertanyaan yang paling sering dihindari. Ibn Ishaq
            mencatat bahwa Hubal adalah patung terbesar di Kaaba Quraisy. Dalam
            Perang Uhud, pihak Quraisy berseru "Hubal, bangkitlah!" dan pihak Muslim
            menjawab "Allah lebih tinggi." Ini bukan pertempuran dua kelompok yang
            tidak saling mengenal — ini dua kelompok dari komunitas yang sama,
            bertempur dengan nama yang berbeda untuk tuhan mereka masing-masing.
          </p>

          <p>
            Beberapa sarjana berpendapat bahwa "Allah" mungkin awalnya adalah sebutan
            generik untuk dewa utama suatu suku — jadi Allah-nya Quraisy bisa jadi
            Hubal, Allah-nya suku lain adalah figur lain. Ini posisi akademis, bukan
            tuduhan. Implikasinya: Islam mungkin tidak memperkenalkan sosok yang
            sepenuhnya asing, tapi mengidentifikasi ulang siapa yang berhak disebut
            sebagai satu-satunya yang layak disembah.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kosmologi yang dipinjam
          </h2>

          <p>
            Gambar alam semesta dalam tafsir Islam klasik menunjukkan kesamaan yang
            dekat dengan kosmologi Mesopotamia. Tujuh langit dan tujuh bumi, pemisahan
            air tawar dan air asin, penciptaan dari air — ini semua konsep yang sudah
            ada dalam tradisi Babilonia sebelum Islam. Kisah penciptaan dalam Enuma
            Elish berbagi struktur yang sangat mirip.
          </p>

          <p>
            Yang lebih spesifik: tafsir klasik atas{" "}
            <VerseLink surah={68} ayat={1}>
              Al-Qalam 68:1
            </VerseLink>{" "}
            — yang dimulai dengan huruf "Nun" — oleh At-Tabari, Al-Qurtubi, dan Ibn
            Kathir menjelaskan bahwa Nun adalah nama ikan raksasa yang menopang bumi.
            Konsep ini, makhluk laut raksasa sebagai fondasi dunia, adalah warisan
            langsung dari tradisi Semit kuno yang mendahului Islam berabad-abad.
          </p>

          <p>
            Ini bukan masalah kecil jika klaimnya adalah wahyu supernatural yang
            melampaui pengetahuan zamannya. Kosmologi yang keliru secara ilmiah dan
            yang identik dengan mitologi yang sudah beredar di wilayah itu sulit
            diterima sebagai bukti pengetahuan yang berasal dari luar sejarah manusia.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Abraham di Mekkah
          </h2>

          <p>
            Klaim bahwa Ibrahim dan Ismail membangun Kaaba adalah fondasi legitimasi
            Islam sebagai agama Abrahamik. Masalahnya: tidak ada bukti arkeologis
            yang mengaitkan keduanya dengan Mekkah. Sumber-sumber Yahudi dan Kristen
            tidak menempatkan Ibrahim di sana. Referensi tertulis pertama tentang
            kaitan Ibrahim-Mekkah muncul dari dalam tradisi Islam sendiri — artinya,
            setelah Islam sudah ada.
          </p>

          <p>
            Ini bukan fenomena yang unik untuk Islam. Roma mengklaim keturunan dari
            Aeneas dari Troya. Banyak dinasti dan agama membangun legitimasi dengan
            menghubungkan diri ke figur yang dihormati di masa lalu. Pertanyaannya
            bukan apakah ini terjadi — tapi apakah klaim historisnya bisa diverifikasi
            secara independen. Dalam kasus Ibrahim-Mekkah, sampai sekarang belum bisa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Gerakan yang sudah ada sebelum Muhammad
          </h2>

          <p>
            Satu detail yang sering hilang dari narasi mainstream adalah adanya gerakan
            Hanif — sekelompok orang Arab yang sudah meninggalkan politeisme dan mencari
            "agama Ibrahim yang asli" sebelum Islam. Waraqah ibn Nawfal, orang pertama
            yang memvalidasi pengalaman Muhammad, adalah salah satunya. Zaid ibn Amr
            menolak penyembahan patung dan menghindari daging yang dipersembahkan
            kepada berhala. Umayyah ibn Abi Salt menulis puisi tentang monoteisme
            sebelum Muhammad menyatakan kenabiannya.
          </p>

          <p>
            Kehadiran gerakan ini menunjukkan bahwa kebutuhan akan monoteisme Arab
            yang khas — bukan Yahudi, bukan Kristen, tapi juga bukan politeisme lama
            — sudah ada sebelum Muhammad. Ada yang melihat ini sebagai bukti bahwa
            Islam adalah kelanjutan natural dari evolusi religius Arabia, bukan
            intervensi yang datang dari luar sejarah. Ada juga yang melihatnya
            sebaliknya: bahwa "wahyu" yang datang kepada Muhammad menjawab kebutuhan
            yang sudah siap menunggunya.
          </p>

          <p>
            Kedua pembacaan itu tidak bisa sekaligus benar. Tapi keduanya perlu
            diajukan — dan fakta bahwa yang kedua jarang masuk dalam pembahasan
            populer tentang asal-usul Islam adalah sesuatu yang patut diperhatikan.
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
                { surah: 53, ayat: 19, label: "An-Najm 19" },
                { surah: 29, ayat: 61, label: "Al-Ankabut 61" },
                { surah: 68, ayat: 1, label: "Al-Qalam 1" },
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
