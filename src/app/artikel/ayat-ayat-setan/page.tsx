/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Ayat-ayat Setan | Qurai",
  description:
    "At-Tabari mencatat bahwa sebelum insiden Gharaniq, Muhammad berharap dalam hatinya ada sesuatu yang mendamaikannya dengan kaumnya. Itu bukan deskripsi penerima wahyu yang pasif. Dan Al-Hajj 22:52 ada di dalam Al-Quran sampai hari ini, mengakui bahwa setan bisa menyusup ke proses wahyu sebelum Allah menghilangkannya.",
  openGraph: {
    images: [
      {
        url: "/article-images/18-ayat-ayat-setan-illustration.png",
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

export default function AyatAyatSetanArticle() {
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
            An-Najm 53:19 · Al-Hajj 22:52 &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Ayat-ayat Setan
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            At-Tabari mencatat bahwa sebelum insiden Gharaniq, Muhammad berharap
            dalam hatinya ada sesuatu yang mendamaikannya dengan kaumnya. Itu
            bukan deskripsi penerima wahyu yang pasif. Dan Al-Hajj 22:52 ada di
            dalam Al-Quran sampai hari ini, mengakui bahwa setan bisa menyusup
            ke proses wahyu sebelum Allah menghilangkannya.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/18-ayat-ayat-setan-illustration.png"
            alt="Ilustrasi editorial fragmen berhala kuno dan naskah yang tertutup bayangan tinta"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="ayat-ayat-setan" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Di antara semua catatan sejarah Islam awal, ada satu detail yang
            sulit diabaikan. At-Tabari, dalam{" "}
            <em>Tarikh al-Rusul wa al-Muluk</em>, menulis bahwa ketika Muhammad
            melihat kaumnya terus berpaling, ia{" "}
            <em>
              "berharap dalam hatinya bahwa sesuatu akan datang kepadanya dari
              Allah yang akan mendamaikannya dengan kaumnya."
            </em>
          </p>

          <p>
            Frasa itu bukan narasi At-Tabari sendiri. Itu deskripsi kondisi
            mental Muhammad sebelum insiden yang kemudian dikenal sebagai{" "}
            <em>Gharaniq</em>, atau dalam terjemahan Barat: Ayat-Ayat Setan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang terjadi di dekat Ka'bah
          </h2>

          <p>
            Tahun kelima kenabian, sekitar 615 M. Muhammad membaca Surah
            An-Najm di dekat Ka'bah, di hadapan campuran pengikutnya dan
            orang-orang Quraisy yang belum bersedia meninggalkan agama nenek
            moyang mereka. Tiga dewi utama mereka, Al-Lat, Al-Uzza, dan Manat,
            disebut dalam{" "}
            <VerseLink surah={53} ayat={19}>
              ayat 19-20
            </VerseLink>{" "}
            dengan nada penolakan: apakah pantas menganggap mereka sebagai
            anak-anak Allah?
          </p>

          <p>
            Lalu, menurut catatan At-Tabari, Ibn Sa'd, Al-Waqidi, dan Ibn
            Ishaq, muncul dua kalimat yang tidak ada dalam An-Najm hari
            ini:
          </p>

          <p>
            <em>
              "Tilka al-gharaniq al-'ula, wa inna shafa'atahunna la-turja."
            </em>
          </p>

          <p>
            Mereka, dewi-dewi itu, adalah burung-burung yang tinggi terbangnya.
            Dan syafaat mereka memang layak diharapkan.
          </p>

          <p>
            Orang-orang Quraisy sujud bersama Muhammad. Untuk pertama kalinya
            sejak ia mulai berdakwah, tidak ada konflik. At-Tabari mencatat:
            tidak ada satu orang pun di masjid, baik mukmin maupun kafir, yang
            tidak ikut sujud.
          </p>

          <p>Kabar menyebar. Eksperimen damai itu berlangsung singkat.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Penarikan kembali dan ayat yang tersisa
          </h2>

          <p>
            Beberapa waktu kemudian, Muhammad mengumumkan bahwa dua kalimat itu
            bukan dari Allah. Setan yang memasukkannya. Ayat-ayat pengganti
            turun sebagai koreksi, menegaskan bahwa dewi-dewi itu hanyalah
            nama tanpa dasar (
            <VerseLink surah={53} ayat={21}>
              Q 53:21-23
            </VerseLink>
            ). Dan satu ayat lagi muncul di Surah Al-Hajj, seolah memberi
            penjelasan sistematis:
          </p>

          <p>
            <em>
              "Dan Kami tidak mengutus sebelum kamu seorang rasul pun dan tidak
              (pula) seorang nabi, melainkan apabila ia mempunyai suatu
              keinginan, setan memasukkan godaan-godaan terhadap keinginannya
              itu, kemudian Allah menghilangkan apa yang dimasukkan oleh setan
              itu."
            </em>{" "}
            (
            <VerseLink surah={22} ayat={52}>
              Q 22:52
            </VerseLink>
            )
          </p>

          <p>
            Ayat ini menarik karena ia bukan hanya membela Muhammad. Ia membuka
            prinsip umum: semua nabi dan rasul rentan terhadap sisipan setan
            dalam proses penerimaan wahyu. Dan Allah-lah yang kemudian
            "membersihkan" sisipan itu.
          </p>

          <p>
            Artinya, menurut Al-Quran sendiri, ada jeda di antara kedua proses
            itu. Ada rentang waktu di mana sisipan setan sudah ada dalam wahyu
            sebelum dikoreksi. Berapa lama? Tidak ada yang tahu. Siapa yang
            memutuskan mana yang sudah dikoreksi dan mana yang belum? Tidak
            dijelaskan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Masalah dengan penyangkalan
          </h2>

          <p>
            Ulama-ulama kemudian, termasuk Ibn Taymiyyah, menolak keaslian
            cerita ini. Argumennya: riwayat-riwayat yang mencatatnya lemah
            secara sanad, dan isinya bertentangan dengan prinsip kemurnian
            wahyu.
          </p>

          <p>
            Tapi ada masalah dengan penolakan semacam itu. Cerita ini dicatat
            oleh beberapa sejarawan Islam awal yang berbeda, secara independen,
            dengan detail yang konsisten. Ibn Ishaq menulis di abad ke-8,
            Al-Waqidi juga di abad ke-8, Ibn Sa'd, murid Al-Waqidi, di awal
            abad ke-9, dan At-Tabari di abad ke-9 hingga awal abad ke-10.
            Mereka tidak berkoordinasi untuk merusak nama nabi mereka sendiri.
          </p>

          <p>
            Dalam sejarah, detail yang memalukan justru lebih sulit dibuat-buat.
            Kalau seseorang ingin memalsukan riwayat, ia akan membuat sesuatu
            yang heroik, bukan sesuatu yang membuat nabinya terlihat tertipu.
            Kriteria kemaluan (<em>criterion of embarrassment</em>) adalah salah
            satu alat yang dipakai sejarawan untuk menilai keaslian suatu
            laporan: makin memalukan bagi pihak yang berkepentingan, makin kecil
            kemungkinan laporan itu direkayasa.
          </p>

          <p>
            Dan ada{" "}
            <VerseLink surah={22} ayat={52}>
              Al-Hajj 22:52
            </VerseLink>{" "}
            itu sendiri. Kalau insiden Gharaniq tidak pernah terjadi, tidak ada
            penjelasan yang masuk akal mengapa ayat itu perlu ada dalam
            Al-Quran. Ia menjawab pertanyaan yang sangat spesifik tentang nabi
            yang pernah menyampaikan sesuatu yang ternyata bukan dari Allah.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Polanya lebih luas dari satu insiden
          </h2>

          <p>
            Yang lebih menarik dari perdebatan keaslian insiden ini adalah
            polanya.
          </p>

          <p>
            At-Tabari sendiri yang mencatat konteks psikologisnya: Muhammad{" "}
            <em>berharap</em> ada jalan damai. Keinginan itu ada sebelum kalimat
            Gharaniq muncul. Frasa "berharap dalam hatinya" bukan deskripsi
            penerima wahyu yang pasif menunggu instruksi. Itu deskripsi
            seseorang yang sangat menginginkan sesuatu, yang mungkin kemudian
            memproyeksikan keinginannya sendiri sebagai pesan dari luar.
          </p>

          <p>
            Pola serupa muncul di tempat lain. Ketika Muhammad menikahi Zainab,
            mantan istri anak angkatnya Zaid, yang secara sosial sangat
            kontroversial, turunlah{" "}
            <VerseLink surah={33} ayat={37}>
              Al-Ahzab 33:37
            </VerseLink>{" "}
            yang secara eksplisit menyebut Zaid dan melegitimasi pernikahan itu.
            Ketika ada ketegangan soal istrinya Maria dan konflik dengan Hafshah,
            turunlah{" "}
            <VerseLink surah={66} ayat={1}>
              At-Tahrim 66:1-5
            </VerseLink>
            . Ketika ada tekanan soal jumlah istri yang ia miliki, turunlah ayat
            yang memberinya pengecualian dari aturan yang ia tetapkan sendiri (
            <VerseLink surah={33} ayat={50}>
              Q 33:50
            </VerseLink>
            ).
          </p>

          <p>
            Dalam semua kasus itu, wahyu turun tepat ketika Muhammad
            membutuhkan legitimasi untuk keputusan yang sudah ia buat atau
            sedang ia pertimbangkan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua ayat dalam satu kitab
          </h2>

          <p>
            Pertanyaannya bukan apakah peristiwa Gharaniq itu benar-benar
            terjadi persis seperti yang dicatat At-Tabari. Sejarah selalu
            mengandung ketidakpastian tentang detail.
          </p>

          <p>
            Pertanyaannya adalah: apa yang kita lakukan dengan{" "}
            <VerseLink surah={22} ayat={52}>
              Al-Hajj 22:52
            </VerseLink>
            ?
          </p>

          <p>
            Ayat itu ada di dalam Al-Quran. Ia mengakui bahwa setan bisa
            menyusup ke dalam proses wahyu nabi mana pun, termasuk Muhammad.
            Dan ia tidak memberi kriteria apa pun untuk membedakan bagian mana
            yang sudah "dibersihkan" dari bagian yang belum.
          </p>

          <p>
            <VerseLink surah={15} ayat={9}>
              Al-Hijr 15:9
            </VerseLink>{" "}
            menjanjikan bahwa Allah memelihara Al-Quran.{" "}
            <VerseLink surah={22} ayat={52}>
              Al-Hajj 22:52
            </VerseLink>{" "}
            mengakui bahwa setan bisa menyisip dulu sebelum Allah
            menghilangkannya.
          </p>

          <p>Kedua ayat itu ada dalam kitab yang sama.</p>
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
                { surah: 53, ayat: 21, label: "An-Najm 21" },
                { surah: 22, ayat: 52, label: "Al-Hajj 52" },
                { surah: 15, ayat: 9, label: "Al-Hijr 9" },
                { surah: 33, ayat: 37, label: "Al-Ahzab 37" },
                { surah: 33, ayat: 50, label: "Al-Ahzab 50" },
                { surah: 66, ayat: 1, label: "At-Tahrim 1" },
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

        <ArticleRecommendations currentSlug="ayat-ayat-setan" />
      </article>
    </main>
  );
}
