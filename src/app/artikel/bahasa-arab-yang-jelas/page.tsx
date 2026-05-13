/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Bahasa Arab yang Jelas | Qurai",
  description:
    "Az-Zumar menyebut Al-Quran sebagai kitab berbahasa Arab tanpa kebengkokan. Al-Fatihah, doa yang dibaca tujuh belas kali sehari, menggunakan kata sirat yang bukan dari bahasa Arab. Al-Suyuti sendiri mendokumentasikan lebih dari seratus kata asing. Dan 29 surah masih dibuka dengan huruf yang tidak ada yang bisa jelaskan setelah empat belas abad.",
  openGraph: {
    images: [
      {
        url: "/article-images/36-bahasa-arab-yang-jelas-illustration.png",
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

export default function BahasaArabYangJelasArticle() {
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
            Az-Zumar 39:28 · Al-Fatihah 1:6 &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Bahasa Arab yang Jelas
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Az-Zumar menyebut Al-Quran sebagai kitab berbahasa Arab tanpa
            kebengkokan. Al-Fatihah, doa yang dibaca tujuh belas kali sehari,
            menggunakan kata yang bukan berasal dari bahasa Arab sama sekali.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/36-bahasa-arab-yang-jelas-illustration.png"
            alt="Ilustrasi editorial manuskrip multibahasa di meja studi gelap"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="bahasa-arab-yang-jelas" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={39} ayat={28}>Az-Zumar 39:28</VerseLink> menyebut
            Al-Quran sebagai{" "}
            <em>qur'anan arabiyyan ghayra dhi 'iwajin</em>, kitab berbahasa
            Arab yang tidak ada kebengkokan di dalamnya. Az-Zumar bukan
            satu-satunya.{" "}
            <VerseLink surah={26} ayat={195}>Ash-Shu'ara 26:195</VerseLink>{" "}
            memilih frasa <em>bi lisanin arabiyyin mubin</em>, bahasa Arab yang
            jelas.{" "}
            <VerseLink surah={12} ayat={2}>Yusuf 12:2</VerseLink> memberi
            alasannya: supaya kalian memahami.
          </p>

          <p>Klaim ini diulang-ulang. Jelas. Tidak ambigu.</p>

          <p>
            Dan kata pertama dalam doa yang dibaca tujuh belas kali sehari oleh
            lebih dari satu miliar orang adalah{" "}
            <VerseLink surah={1} ayat={6}>
              <em>ihdina as-sirata al-mustaqim</em>
            </VerseLink>
            , tunjukkan kami jalan yang lurus. Kata <em>sirat</em> dalam doa
            itu bukan berasal dari bahasa Arab sama sekali.
          </p>

          <p>
            <em>Sirat</em> adalah kata Latin. <em>Strata</em>, jalan yang
            diratakan. Masuk ke Arab melalui bahasa Yunani atau Aram. Satu kata
            pinjaman di jantung ritual harian Islam.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua ratus tujuh puluh lima kata
          </h2>

          <p>
            Peneliti bahasa Arthur Jeffery dalam{" "}
            <em>The Foreign Vocabulary of the Quran</em> (1938) mengidentifikasi
            sekitar 275 kata dalam Al-Quran yang berasal dari bahasa lain. Ini
            bukan tuduhan dari luar. Al-Suyuti sendiri, ulama abad ke-15 yang
            menulis <em>Al-Itqan fi 'Ulum Al-Quran</em>, menghitung lebih dari
            100 kata asing dan mendokumentasikan asal-usulnya satu per satu.
          </p>

          <p>
            <em>Firdaus</em>, kata untuk surga, berasal dari kata Persia{" "}
            <em>pairidaeza</em>, taman berpagar. Masuk ke Arab melalui bahasa
            Yunani <em>paradeisos</em>, kata yang sama yang menjadi "paradise"
            dalam bahasa Inggris. Muncul di{" "}
            <VerseLink surah={23} ayat={11}>Al-Mu'minun 23:11</VerseLink>{" "}
            sebagai imbalan tertinggi orang beriman.
          </p>

          <p>
            <em>Furqan</em>, kata untuk pembeda atau kitab suci, berasal dari
            Aram <em>purqana</em>. Muncul di{" "}
            <VerseLink surah={25} ayat={1}>Al-Furqan 25:1</VerseLink>, nama
            surahnya sendiri adalah kata Aram.
          </p>

          <p>
            <em>Sakinah</em>, kata untuk ketenangan ilahi, berasal dari Ibrani{" "}
            <em>shekinah</em>, istilah khusus dalam teologi Yahudi untuk
            kehadiran Tuhan. Muncul di{" "}
            <VerseLink surah={2} ayat={248}>Al-Baqarah 2:248</VerseLink> dan
            beberapa surah lain. <em>Hawariyyun</em>, kata untuk rasul-rasul
            Isa (
            <VerseLink surah={3} ayat={52}>Ali 'Imran 3:52</VerseLink>), dari
            bahasa Etiopia <em>hawaryat</em>. <em>Mishkat</em>, lubang lampu
            dalam ayat cahaya yang terkenal (
            <VerseLink surah={24} ayat={35}>An-Nur 24:35</VerseLink>), juga
            dari Etiopia. <em>Malakut</em>, kerajaan Allah (
            <VerseLink surah={6} ayat={75}>Al-An'am 6:75</VerseLink>), dari
            Aram <em>malkutha</em>. <em>Istabrak</em>, kain sutra tebal di
            surga (
            <VerseLink surah={18} ayat={31}>Al-Kahf 18:31</VerseLink>), dari
            Persia <em>stabraq</em>. <em>Zanjabil</em>, jahe minuman surga (
            <VerseLink surah={76} ayat={17}>Al-Insan 76:17</VerseLink>), dari
            Persia <em>zangabil</em>.
          </p>

          <p>
            Semua bahasa hadir: Aram, Ibrani, Persia, Etiopia, Yunani, Latin.
            Arabia abad ke-7 adalah persimpangan perdagangan dan budaya, dan
            kosakata yang digunakan masyarakatnya mencerminkan itu. Tidak ada
            yang aneh dari sudut pandang linguistik biasa.
          </p>

          <p>Yang aneh adalah Al-Quran sendiri mengklaim sebaliknya.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kata-kata yang tidak dipahami siapapun
          </h2>

          <p>
            Tapi masalah kosakata masih bisa diperdebatkan dengan argumen bahwa
            kata-kata sudah terarabkan sebelum Islam. Yang lebih sulit dijelaskan
            adalah kata-kata yang tidak dipahami oleh siapapun, termasuk
            orang-orang yang hidup paling dekat dengan wahyu itu.
          </p>

          <p>
            <VerseLink surah={80} ayat={28}>'Abasa 80</VerseLink> menyebut
            berbagai tanaman: zaitun, kurma, kebun rimbun, buah-buahan, dan dua
            kata lagi: <em>qadb</em> di ayat 28 dan{" "}
            <VerseLink surah={80} ayat={31}>
              <em>'abb</em>
            </VerseLink>{" "}
            di ayat 31. Keduanya muncul dalam daftar yang sama, dalam surah
            yang sama, dalam konteks yang sama, tapi tidak ada ulama yang
            sepakat apa artinya. Sebagian besar terjemahan modern memilih
            "rumput" atau "makanan ternak" untuk <em>'abb</em>, tapi itu lebih
            perkiraan daripada kepastian.
          </p>

          <p>
            <em>Kalala</em> lebih konsekuensial. Kata ini muncul dua kali di
            An-Nisa, pada{" "}
            <VerseLink surah={4} ayat={12}>ayat 12</VerseLink> dan{" "}
            <VerseLink surah={4} ayat={176}>176</VerseLink>, keduanya dalam
            konteks hukum waris. Tidak ada yang tahu pasti apa yang dimaksud{" "}
            <em>kalala</em>. Apakah seseorang yang mati tanpa anak? Tanpa anak
            dan tanpa orang tua? Tanpa keturunan langsung sama sekali?
            Perdebatan ini bukan akademis. Definisi yang berbeda menghasilkan
            pembagian warisan yang berbeda, dan hukum waris Islam sampai hari
            ini mewarisi ambiguitas itu langsung dari kitab.
          </p>

          <p>
            Dan ada <em>samad</em> di{" "}
            <VerseLink surah={112} ayat={2}>Al-Ikhlas 112:2</VerseLink>, surah
            yang katanya merangkum inti tauhid Islam, setara sepertiga Al-Quran
            menurut hadis. <em>Allahu as-samad</em>. Terjemahan paling umum:
            "Allah tempat bergantung." Tapi dalam kamus Arab klasik,{" "}
            <em>samad</em> bisa berarti padat dan tidak berongga, bisa berarti
            tujuan, bisa berarti yang tidak makan dan tidak tidur. Makna
            spesifiknya diperdebatkan, dan yang diperdebatkan adalah kata yang
            mendefinisikan sifat paling fundamental Tuhan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            I'rab yang tidak sesuai kaidah
          </h2>

          <p>
            Kemudian ada yang lebih teknis: kesalahan gramatikal yang sudah
            diidentifikasi sejak berabad-abad lalu.
          </p>

          <p>
            Di{" "}
            <VerseLink surah={20} ayat={63}>Ta Ha 20:63</VerseLink>, dua
            penyihir Firaun disebut dengan kata <em>hadhani</em>. Dalam kaidah
            Arab klasik, kata ganti dual dalam posisi objek seharusnya{" "}
            <em>hadhayni</em>. Bukan perbedaan dialek atau variasi stilistik.
            Ini kesalahan i'rab, kasus gramatikal yang dalam bahasa Arab
            ditunjukkan oleh bunyi akhir kata dan memiliki fungsi sintaksis yang
            jelas.
          </p>

          <p>
            <VerseLink surah={5} ayat={69}>Al-Ma'idah 5:69</VerseLink>{" "}
            menggunakan <em>as-sabi'una</em> dalam posisi yang seharusnya{" "}
            <em>as-sabi'ina</em>. Ali Dashti, senator Iran dan ahli bahasa Arab
            yang menulis <em>Twenty Three Years</em>, mencatat lebih dari
            seratus kasus seperti ini. Para pendukung Al-Quran punya respons
            standar: ini adalah qira'at yang berbeda, atau dialek yang sah.
            Tapi qira'at berbeda tidak menghapus fakta bahwa ada bentuk yang
            secara gramatikal tidak sesuai kaidah. Dan perdebatan tentang
            qira'at sendiri mengakui bahwa naskahnya punya variasi yang perlu
            dijelaskan.
          </p>

          <p>
            Al-Qurtubi, mufassir abad ke-13 yang karyanya masih jadi rujukan
            standar, menulis tentang huruf-huruf muqatta'at di awal 29 surah,
            Alif Lam Mim, Kaf Ha Ya 'Ain Sad, Ha Mim, Ya Sin, dan seterusnya:{" "}
            <em>
              "yang benar adalah bahwa ini adalah rahasia Allah yang tidak
              diketahui oleh seorang pun kecuali Dia."
            </em>
          </p>

          <p>
            Ibn Abbas, sepupu Muhammad yang dianggap otoritas tafsir paling
            awal, berkata hal yang sama tentang Alif Lam Mim:{" "}
            <em>
              "Allah lebih mengetahui apa yang Dia maksudkan dengan itu."
            </em>
          </p>

          <p>
            Sebuah kitab yang mengklaim dirinya jelas dan tanpa kebengkokan, di
            mana dua puluh sembilan surahnya dibuka dengan sesuatu yang
            pengikutnya sendiri, dari generasi pertama sampai abad ke-21, tidak
            bisa jelaskan.
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
                { surah: 39, ayat: 28, label: "Az-Zumar 28" },
                { surah: 26, ayat: 195, label: "Ash-Shu'ara 195" },
                { surah: 12, ayat: 2, label: "Yusuf 2" },
                { surah: 1, ayat: 6, label: "Al-Fatihah 6" },
                { surah: 23, ayat: 11, label: "Al-Mu'minun 11" },
                { surah: 25, ayat: 1, label: "Al-Furqan 1" },
                { surah: 2, ayat: 248, label: "Al-Baqarah 248" },
                { surah: 3, ayat: 52, label: "Ali 'Imran 52" },
                { surah: 24, ayat: 35, label: "An-Nur 35" },
                { surah: 6, ayat: 75, label: "Al-An'am 75" },
                { surah: 18, ayat: 31, label: "Al-Kahf 31" },
                { surah: 76, ayat: 17, label: "Al-Insan 17" },
                { surah: 80, ayat: 28, label: "'Abasa 28" },
                { surah: 80, ayat: 31, label: "'Abasa 31" },
                { surah: 4, ayat: 12, label: "An-Nisa 12" },
                { surah: 4, ayat: 176, label: "An-Nisa 176" },
                { surah: 112, ayat: 2, label: "Al-Ikhlas 2" },
                { surah: 20, ayat: 63, label: "Ta Ha 63" },
                { surah: 5, ayat: 69, label: "Al-Ma'idah 69" },
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

        <ArticleRecommendations currentSlug="bahasa-arab-yang-jelas" />
      </article>
    </main>
  );
}
