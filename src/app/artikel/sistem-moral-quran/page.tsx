/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleRecommendations } from "@/components/article-recommendations";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Etika Abad Ke-7 yang Dianggap Abadi | Qurai",
  description:
    "Al-Quran mengklaim universalisme moral — semua manusia setara di hadapan Allah. Tapi di kitab yang sama ada perintah bunuh orang kafir, legalitas pukul istri, dan perbudakan seksual. Dua klaim itu tidak bisa berdiri bersamaan.",
  openGraph: {
    images: [
      {
        url: "/article-images/03-etika-abad-ke-7-yang-dianggap-abadi-illustration.png",
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

export default function SistemMoralQuranArticle() {
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
            At-Tawbah 9:5 · An-Nisa 4:34 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp;
            14 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Etika Abad Ke-7 yang Dianggap Abadi
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran mengklaim universalisme moral: semua manusia setara di
            hadapan Allah. Tapi di kitab yang sama ada perintah bunuh orang
            kafir, legalitas memukul istri, dan perbudakan seksual. Dua klaim
            itu tidak bisa berdiri bersamaan.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/03-etika-abad-ke-7-yang-dianggap-abadi-illustration.png"
            alt="Ilustrasi editorial seorang penulis tua di ruang bercahaya"
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
            <VerseLink surah={49} ayat={13}>
              Al-Hujurat 49:13
            </VerseLink>{" "}
            menyatakan bahwa Allah menciptakan manusia dari seorang laki-laki
            dan perempuan, menjadikan mereka berbangsa-bangsa, dan bahwa yang
            paling mulia di antara mereka hanya yang paling bertakwa.{" "}
            <VerseLink surah={2} ayat={143}>
              Al-Baqarah 2:143
            </VerseLink>{" "}
            menyebut umat Islam sebagai "umat yang adil dan pilihan."{" "}
            <VerseLink surah={5} ayat={32}>
              Al-Maidah 5:32
            </VerseLink>{" "}
            membandingkan membunuh satu orang dengan membunuh seluruh umat
            manusia.
          </p>

          <p>
            Ini klaim universalisme yang kuat. Masalahnya, di kitab yang sama
            ada ayat-ayat lain yang menarik ke arah yang berlawanan — dan
            perbedaannya bukan soal interpretasi tepi, tapi soal Al-Quran yang
            cukup eksplisit.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Siapa yang boleh dibunuh
          </h2>

          <p>
            <VerseLink surah={9} ayat={5}>
              At-Tawbah 9:5
            </VerseLink>{" "}
            cukup eksplisit: setelah bulan-bulan haram berakhir, orang musyrik
            boleh dibunuh di mana saja, ditangkap, dikepung, diintai.
            Satu-satunya jalan keluar adalah masuk Islam — bertaubat, mendirikan
            shalat, menunaikan zakat. Hadis Sahih Bukhari (Vol. 1, Book 2, No.
            25) tidak meninggalkan banyak ruang untuk reinterpretasi: "Aku
            diperintahkan untuk memerangi manusia sampai mereka mengucapkan La
            ilaha illa Allah."
          </p>

          <p>
            Argumen konteks perang yang biasa dipakai untuk ayat ini punya satu
            masalah: frasa "di mana saja kamu jumpai mereka" bukan bahasa yang
            terbatas pada satu situasi geografis atau historis tertentu.{" "}
            <VerseLink surah={2} ayat={191}>
              Al-Baqarah 2:191
            </VerseLink>{" "}
            menggunakan frasa yang sama: "bunuhlah mereka di mana saja kamu
            jumpai mereka."
          </p>

          <p>
            <VerseLink surah={4} ayat={89}>
              An-Nisa 4:89
            </VerseLink>{" "}
            bicara soal mereka yang keluar dari Islam: "tawan dan bunuhlah
            mereka di mana saja kamu jumpai mereka."
          </p>

          <p>
            <VerseLink surah={47} ayat={4}>
              Muhammad 47:4
            </VerseLink>{" "}
            soal pertemuan di medan perang: "pancunglah batang leher mereka."
          </p>

          <p>
            Ini bukan satu ayat yang bisa dianggap pengecualian.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Siapa yang dianggap paling rendah
          </h2>

          <p>
            <VerseLink surah={98} ayat={6}>
              Al-Bayyinah 98:6
            </VerseLink>{" "}
            menyebut orang kafir dari Ahli Kitab dan musyrik sebagai
            "seburuk-buruk makhluk." Bukan dalam konteks perang, bukan sebagai
            peringatan taktis — ini pernyataan kategoris tentang nilai manusia,
            yang berdiri berlawanan langsung dengan klaim universalisme di
            surat-surat lain.
          </p>

          <p>
            <VerseLink surah={5} ayat={51}>
              Al-Maidah 5:51
            </VerseLink>{" "}
            melarang orang beriman menjadikan Yahudi atau Nasrani sebagai
            pemimpin. Siapa yang melakukannya "termasuk golongan mereka."
          </p>

          <p>
            <VerseLink surah={3} ayat={28}>
              Ali Imran 3:28
            </VerseLink>{" "}
            melarang mengambil orang kafir sebagai wali — dengan satu
            pengecualian: jika dilakukan untuk "memelihara diri dari sesuatu
            yang ditakuti dari mereka." Artinya bergaul dengan non-Muslim untuk
            perlindungan diri dianggap boleh, tapi persahabatan genuinely tidak.
          </p>

          <p>
            <VerseLink surah={9} ayat={30}>
              At-Tawbah 9:30
            </VerseLink>{" "}
            mengutuk Yahudi yang menyebut Uzair anak Allah dan Nasrani yang
            menyebut Isa anak Allah — lalu menggambarkan keduanya sebagai
            "meniru perkataan orang-orang kafir terdahulu." Dua masalah di sini:
            mayoritas Yahudi tidak pernah menyembah Uzair sebagai anak Tuhan,
            dan trinitas Kristen bukan klaim bahwa ada tiga Tuhan yang terpisah.
            Keduanya misrepresentasi teologi yang cukup dasar.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Perempuan dalam sistem ini
          </h2>

          <p>
            <VerseLink surah={4} ayat={34}>
              An-Nisa 4:34
            </VerseLink>{" "}
            adalah ayat yang paling sering diperdebatkan. Ayat ini menyebut
            laki-laki sebagai pemimpin atas perempuan, dan mengizinkan suami
            untuk menasihati, memisahkan di tempat tidur, lalu memukul istri
            yang dianggap tidak taat. Kata "wadribuhunna" dalam bahasa Arab
            adalah bentuk imperative dari "daraba" — memukul. Tidak ada dalam
            ayat aslinya kata yang membatasi intensitas.
          </p>

          <p>
            Hadis yang menemani ayat ini cukup jelas soal bagaimana ini
            dipahami secara historis. Sunan Abu Dawud (Book 11, No. 2142)
            mencatat bahwa seorang laki-laki tidak akan ditanya mengapa ia
            memukul istrinya. Sunan Ibn Majah (Book 9, No. 1986) mencatat
            bahwa larangan memukul perempuan yang sempat ada kemudian dicabut
            setelah Umar melaporkan para wanita mulai "berani" kepada suami
            mereka.
          </p>

          <p>
            Inferioritas legal perempuan dikodifikasi di dua tempat.{" "}
            <VerseLink surah={2} ayat={282}>
              Al-Baqarah 2:282
            </VerseLink>{" "}
            menetapkan bahwa kesaksian satu laki-laki setara dua perempuan —
            dengan justifikasi bahwa perempuan mudah lupa.{" "}
            <VerseLink surah={4} ayat={11}>
              An-Nisa 4:11
            </VerseLink>{" "}
            menetapkan waris: satu bagian laki-laki setara dua bagian
            perempuan.
          </p>

          <p>
            Kemudian ada konsep bidadari.{" "}
            <VerseLink surah={55} ayat={72}>
              Ar-Rahman 55:72
            </VerseLink>{" "}
            menggambarkan bidadari yang dipingit dalam rumah.{" "}
            <VerseLink surah={56} ayat={35}>
              Al-Waqiah 56:35-37
            </VerseLink>{" "}
            menyebut mereka diciptakan langsung sebagai gadis-gadis perawan,
            penuh cinta, sebaya umurnya.{" "}
            <VerseLink surah={78} ayat={33}>
              An-Naba 78:33
            </VerseLink>{" "}
            menambah "gadis-gadis remaja yang sebaya." Hadis At-Tirmidhi
            mencatat setiap penghuni surga mendapat 72 istri. Tidak ada
            equivalent reward untuk perempuan Muslim yang disebutkan dengan
            spesifisitas yang sama. Dalam gambaran surga ini, perempuan ada
            sebagai reward bagi laki-laki yang beriman, bukan sebagai subyek
            yang sendiri mendapat ganjaran.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Perbudakan
          </h2>

          <p>
            <VerseLink surah={4} ayat={24}>
              An-Nisa 4:24
            </VerseLink>{" "}
            mengizinkan hubungan seksual dengan budak yang dimiliki meskipun
            mereka sudah bersuami sebelum ditawan.{" "}
            <VerseLink surah={23} ayat={6}>
              Al-Mu'minun 23:5-6
            </VerseLink>{" "}
            mengkonfirmasi: hubungan dengan istri atau budak yang dimiliki tidak
            tercela.{" "}
            <VerseLink surah={4} ayat={36}>
              An-Nisa 4:36
            </VerseLink>{" "}
            menyuruh "berbuat baik" kepada budak — sebuah perintah yang secara
            implisit menerima institusi perbudakan sebagai hal yang normal.
          </p>

          <p>
            Argumen yang sering muncul: Islam memperbaiki kondisi budak
            dibanding sistem yang sebelumnya. Ini mungkin benar secara historis.
            Tapi memperbaiki kondisi sebuah sistem bukan sama dengan
            menghapusnya. Dan ketika kitab yang diklaim sebagai guidance ilahi
            yang universal dan abadi melegalkan hubungan seksual dengan
            tawanan, pertanyaannya bukan lagi soal seberapa baik sistem itu
            dibanding yang lebih buruk.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Hukuman
          </h2>

          <p>
            <VerseLink surah={5} ayat={38}>
              Al-Maidah 5:38
            </VerseLink>{" "}
            memerintahkan potong tangan untuk pencuri, tanpa membedakan nilai
            barang yang dicuri.{" "}
            <VerseLink surah={24} ayat={2}>
              An-Nur 24:2
            </VerseLink>{" "}
            memerintahkan 100 cambukan untuk zina. Hadis Sahih Bukhari (Vol. 8,
            Book 82, No. 803) mencatat rajam sampai mati untuk zina yang terbukti
            lewat empat pengakuan. Sunan Abu Dawud (Book 38, No. 4447) mencatat
            hukuman mati untuk hubungan homoseksual.
          </p>

          <p>
            Yang perlu dicatat: hukuman rajam untuk zina berdampingan dengan
            izin poligami yang tidak simetris — laki-laki boleh empat istri,
            perempuan tidak. Dan tidak ada dalam sistem ini konsep rehabilitasi
            atau second chance, hanya retribusi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yahudi secara khusus
          </h2>

          <p>
            <VerseLink surah={2} ayat={65}>
              Al-Baqarah 2:65
            </VerseLink>{" "}
            dan{" "}
            <VerseLink surah={5} ayat={60}>
              Al-Maidah 5:60
            </VerseLink>{" "}
            menyebut sebagian orang Yahudi "dijadikan kera dan babi" sebagai
            hukuman atas pelanggaran aturan Sabtu. Bukan metafora yang
            diperdebatkan — beberapa ulama Islam memang memahaminya secara
            literal.
          </p>

          <p>
            <VerseLink surah={4} ayat={155}>
              An-Nisa 4:155-157
            </VerseLink>{" "}
            memuat akusasi kolektif: Yahudi melanggar perjanjian, mengingkari
            ayat Allah, membunuh nabi-nabi. Collective guilt yang dialamatkan ke
            seluruh kelompok, lintas generasi.
          </p>

          <p>
            Sahih Muslim (Book 41, No. 6985) lebih jauh: "Hari kiamat tidak
            akan datang sampai Muslim memerangi Yahudi dan membunuh mereka.
            Sampai Yahudi bersembunyi di balik batu dan pohon, dan batu serta
            pohon akan berkata: Wahai Muslim, ada Yahudi di belakangku,
            datang dan bunuhlah dia." Ini ada di koleksi paling otoritatif
            dalam Islam, bukan hadis tepi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang tersisa dari klaim universalisme
          </h2>

          <p>
            Al-Hujurat 49:13 menyatakan semua manusia setara kecuali dalam
            ketakwaan. Tapi dalam sistem yang sama: orang kafir adalah
            seburuk-buruk makhluk, perempuan bersaksi setengah dari laki-laki,
            hubungan seksual dengan tawanan perang dihalalkan, ada perintah
            eksplisit untuk membunuh mereka yang menolak masuk Islam.
          </p>

          <p>
            Ini bukan soal satu atau dua ayat yang bisa dianggap "disalahpahami."
            Ini pola yang konsisten di seluruh Al-Quran — sistem yang membagi
            dunia menjadi in-group dan out-group, dengan perlakuan yang sangat
            berbeda untuk masing-masing.
          </p>

          <p>
            Pertanyaan yang relevan bukan apakah ini sesuai standar Arabia abad
            ke-7 — mungkin memang sesuai. Pertanyaannya adalah apakah sistem
            moral seperti ini bisa diklaim sebagai universal dan abadi. Karena
            kalau ukurannya cuma "lebih baik dari standar Arabia abad ke-7,"
            standar itu sangat mudah dilampaui oleh hampir semua sistem etika
            modern.
          </p>

          <p>
            Dan jika jawabannya adalah "ini harus dipahami dalam konteks
            historis," maka itu sendiri sudah merupakan pengakuan bahwa sistem
            ini bukan panduan yang timeless — melainkan produk dari zamannya.
          </p>
        </div>

        

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer>
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 9, ayat: 5, label: "At-Tawbah 5" },
                { surah: 4, ayat: 34, label: "An-Nisa 34" },
                { surah: 98, ayat: 6, label: "Al-Bayyinah 6" },
                { surah: 2, ayat: 282, label: "Al-Baqarah 282" },
                { surah: 4, ayat: 24, label: "An-Nisa 24" },
                { surah: 5, ayat: 38, label: "Al-Maidah 38" },
                { surah: 24, ayat: 2, label: "An-Nur 2" },
                { surah: 2, ayat: 65, label: "Al-Baqarah 65" },
                { surah: 5, ayat: 60, label: "Al-Maidah 60" },
                { surah: 4, ayat: 11, label: "An-Nisa 11" },
                { surah: 47, ayat: 4, label: "Muhammad 4" },
              ].map(({ surah, ayat, label }) => (
                <Link
                  key={`${surah}-${ayat}`}
                  href={`/surat/${surah}#ayat-${ayat}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[color-mix(in_srgb,var(--qurai-gold)_30%,transparent)] bg-[color-mix(in_srgb,var(--qurai-gold)_6%,transparent)] px-3 py-1.5 font-mono text-[0.62rem] uppercase text-[var(--qurai-gold)] transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_12%,transparent)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>

        <ArticleShare />

        <ArticleRecommendations currentSlug="sistem-moral-quran" />
      </article>
    </main>
  );
}
