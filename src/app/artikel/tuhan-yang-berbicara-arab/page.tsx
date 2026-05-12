/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Tuhan yang Berbicara Arab | Qurai",
  description:
    "Q 12:2 menyebutkan alasan spesifik mengapa Al-Quran diturunkan dalam bahasa Arab: 'agar kamu memahaminya.' Kalimat itu bukan sekadar konteks — ia mendefinisikan siapa yang dimaksud sebagai 'kamu'. Dan di surah yang sama tempat Allah mengklaim mengutus Muhammad untuk semesta alam, Al-Quran itu dikirim dalam satu bahasa yang hanya dimengerti satu kelompok manusia.",
  openGraph: {
    images: [
      {
        url: "/article-images/21-tuhan-yang-berbicara-arab-illustration.png",
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

export default function TuhanYangBerbicaraArabArticle() {
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
            Yusuf 12:2 · Al-Anbiya 21:107 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 11 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Tuhan yang Berbicara Arab
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Q 12:2 menyebutkan alasan spesifik mengapa Al-Quran diturunkan
            dalam bahasa Arab: "agar kamu memahaminya." Kalimat itu bukan
            sekadar konteks — ia mendefinisikan siapa yang dimaksud sebagai
            "kamu." Dan di kitab yang sama tempat Allah mengklaim mengutus
            Muhammad untuk semesta alam, Al-Quran itu dikirim dalam satu bahasa
            yang hanya dimengerti satu kelompok manusia.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/21-tuhan-yang-berbicara-arab-illustration.png"
            alt="Ilustrasi editorial naskah Arab yang memudar ke aksara lain di depan majelis gurun"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="tuhan-yang-berbicara-arab" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={12} ayat={2}>
              Yusuf 12:2
            </VerseLink>{" "}
            memberi tahu kita mengapa Al-Quran berbahasa Arab:
          </p>

          <p>
            <em>
              "Sesungguhnya Kami menurunkannya berupa Al-Quran berbahasa Arab,
              agar kamu memahaminya."
            </em>
          </p>

          <p>
            Alasan itu diulang.{" "}
            <VerseLink surah={26} ayat={195}>
              Asy-Syu'ara 26:195
            </VerseLink>{" "}
            menyebutnya "dalam bahasa Arab yang jelas."
            <VerseLink surah={20} ayat={113}>
              {" "}
              Thaha 20:113
            </VerseLink>{" "}
            mengulang frasa yang sama. Tiga kali dalam ayat yang berbeda,
            sifat Arab dari wahyu itu tidak diperlakukan sebagai kebetulan
            atau keterbatasan teknis, tapi sebagai bagian dari desain.
          </p>

          <p>
            Frasa "agar kamu memahaminya" menentukan siapa yang dimaksud
            sebagai audiens utama. Bukan umat manusia secara keseluruhan.
            Bukan semua yang akan hidup sampai hari kiamat. Yang bisa
            memahaminya secara langsung, tanpa perantara terjemahan, adalah
            penutur bahasa Arab.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pertanyaan dari dalam Al-Quran
          </h2>

          <p>
            <VerseLink surah={41} ayat={44}>
              Al-Fussilat 41:44
            </VerseLink>{" "}
            mengangkat kemungkinan yang menarik:
          </p>

          <p>
            <em>
              "Dan jika Kami jadikan Al-Quran itu suatu bacaan dalam selain
              bahasa Arab, tentulah mereka mengatakan: 'Mengapa tidak
              dijelaskan ayat-ayatnya?'"
            </em>
          </p>

          <p>
            Hipotesisnya berbicara soal keberatan Arab. Kalau bukan bahasa
            Arab, orang Arab akan protes: kenapa tidak jelas. Kekhawatiran
            yang diantisipasi adalah kekhawatiran pendengar Arab. Tidak ada
            antisipasi serupa untuk orang Cina yang tidak mengerti, untuk
            orang Persia yang harus bergantung pada terjemahan, untuk
            siapa pun di luar Semenanjung Arab.
          </p>

          <p>
            Al-Quran itu sendiri, dalam satu ayat, memperlihatkan di mana pusat
            gravitasinya berada.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Klaim universal, pengiriman partikular
          </h2>

          <p>
            <VerseLink surah={21} ayat={107}>
              Al-Anbiya 21:107
            </VerseLink>{" "}
            menyatakan:{" "}
            <em>
              "Dan tiadalah Kami mengutus kamu, melainkan untuk menjadi
              rahmat bagi semesta alam."
            </em>
          </p>

          <p>
            <VerseLink surah={34} ayat={28}>
              Saba 34:28
            </VerseLink>{" "}
            mengulangi klaim yang sama:{" "}
            <em>
              "Dan Kami tidak mengutus kamu, melainkan kepada umat manusia
              seluruhnya."
            </em>
          </p>

          <p>
            Dua ayat itu berdiri di samping Q 12:2 tanpa menyelesaikan
            tegangan di antara keduanya. Misi universal. Kitab dalam satu
            bahasa. Ritual berorientasi satu kota. Nabi dari satu suku.
          </p>

          <p>
            Kalau misi itu memang untuk semesta alam, pilihan bahasa
            tunggal menciptakan masalah struktural yang tidak pernah
            terpecahkan. Akses ke wahyu ilahi yang "asli" menjadi hak
            istimewa satu kelompok linguistik. Semua orang lain bekerja
            dengan salinan yang diterjemahkan, yang dianggap secara teologis
            inferior karena terjemahan Al-Quran bukan Al-Quran itu sendiri.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Hierarki yang masuk ke sistem pahala
          </h2>

          <p>
            Ada hadis yang mencatat bahwa doa di Masjidil Haram bernilai
            100.000 kali lebih besar dari doa di tempat lain. Satu doa di
            sana setara dengan hampir tiga bulan doa tanpa henti di tempat
            lain.
          </p>

          <p>
            Prinsip yang mengalikan pahala adalah lokasi geografis, bukan
            kualitas niat atau kedalaman iman. Seorang Muslim yang lahir
            di Mekah dan bisa berjalan ke Masjidil Haram setiap hari
            mengakumulasi pahala dengan kecepatan yang tidak bisa disamai
            oleh Muslim di Jawa atau Lagos, berapapun sungguh-sungguhnya
            mereka beribadah.
          </p>

          <p>
            Keunggulan geografis itu dikunci di satu tempat di Semenanjung
            Arab. Bukan karena keunggulan spiritual pendudukknya. Hanya
            karena lokasinya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Sistem mawali
          </h2>

          <p>
            Dalam kekhalifahan Umayyah, Muslim non-Arab disebut mawali,
            klien atau bekas budak. Mereka tetap membayar jizyah seperti
            non-Muslim untuk beberapa waktu setelah masuk Islam, karena
            administrasi tidak tahu cara lain menangani orang yang sudah
            berislam tapi bukan Arab.
          </p>

          <p>
            Universalisme yang diklaim tidak pernah menghasilkan kesetaraan
            yang konsisten dalam praktik. Gerakan Abbasiyah yang menggulingkan
            Umayyah sebagian besar digerakkan oleh mawali Persia yang lelah
            dengan diskriminasi yang dibungkus argumentasi agama.
          </p>

          <p>
            Ini bukan anomali sejarah yang bisa dipisahkan dari Al-Qurannya.
            Struktur teologis yang menempatkan Arab sebagai bahasa wahyu,
            Mekah sebagai pusat ibadah, dan nabi Arab sebagai perantara
            terakhir, menghasilkan hierarki yang sangat logis untuk
            diinstitusionalisasikan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Surga orang gurun
          </h2>

          <p>
            Deskripsi surga dalam Al-Quran berulang dalam satu tema besar:
            oasis. Air mengalir, keteduhan pohon, buah dalam jangkauan.
            <VerseLink surah={56} ayat={15}>
              {" "}
              Al-Waqi'ah 56:15-21
            </VerseLink>{" "}
            menggambarkan sofa bersusun, piala berkeliling, buah yang tidak
            pernah habis.{" "}
            <VerseLink surah={76} ayat={13}>
              Al-Insan 76:13-14
            </VerseLink>{" "}
            menyebutkan bersandar di kursi dengan naungan dekat dan buah
            menunduk dalam jangkauan.
          </p>

          <p>
            Buah yang disebutkan berulang adalah kurma, delima, anggur.
            Semua buah Mediterania-Arab. Kemewahan yang digambarkan adalah
            kemewahan yang spesifik untuk masyarakat gurun: air yang
            melimpah, keteduhan, makanan yang tidak perlu dicari.
          </p>

          <p>
            Deskripsi itu tidak salah dalam konteksnya. Tapi teks yang
            mengklaim berbicara kepada semesta alam seharusnya bisa
            menggambarkan kebahagiaan yang melampaui satu ekologi tertentu.
            Bagi orang yang tinggal di tepi danau besar dan tidak pernah
            merasakan haus, atau orang yang hutan dan keteduhan adalah
            latar sehari-hari, gambaran itu tidak mengaktifkan kerinduan
            yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Indonesia sebagai cermin
          </h2>

          <p>
            Indonesia adalah tempat untuk melihat ini paling jelas. Negara
            dengan populasi Muslim terbesar di dunia. Bahasa Arab bukan
            bagian dari kehidupan sehari-hari untuk hampir semua orang di
            sana.
          </p>

          <p>
            Jutaan anak belajar membaca Al-Quran dalam arti yang sangat
            spesifik: melafalkan simbol dengan benar tanpa memahami artinya.
            Hafalan tanpa pengertian dianggap valid, bahkan bernilai lebih
            tinggi dari sekedar membaca terjemahan. Orang yang hafal 30 juz
            dalam bahasa yang tidak ia mengerti dihormati lebih dari orang
            yang memahami isinya dalam bahasa ibunya.
          </p>

          <p>
            Arabisasi terus berjalan. Nama Arab menggantikan nama Jawa,
            Sunda, Batak. Cara berpakaian Arab menggantikan pakaian lokal.
            Dialek Arab tertentu ikut masuk ke dalam praktik keagamaan,
            meski tidak ada hubungannya dengan doktrin. Semua ini terjadi
            di negara yang secara kultural tidak punya hubungan sejarah
            dengan Semenanjung Arab, dan yang tradisi islamnya selama
            berabad-abad berkembang dengan caranya sendiri.
          </p>

          <p>
            Kalau begitu, apa yang sebenarnya diutamakan: memahami pesan,
            atau melafalkan bahasa yang tepat?
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
                { surah: 41, ayat: 44, label: "Fussilat 44" },
                { surah: 21, ayat: 107, label: "Al-Anbiya 107" },
                { surah: 34, ayat: 28, label: "Saba 28" },
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

        <ArticleRecommendations currentSlug="tuhan-yang-berbicara-arab" />
      </article>
    </main>
  );
}
