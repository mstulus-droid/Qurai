/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Gua, Anjing, dan Naskah yang Sudah Ada Sembilan Puluh Tahun Sebelumnya | Qurai",
  description:
    "Kisah Ashabul Kahfi di Al-Quran punya pendahulu yang bisa dilacak: naskah Syriac abad ke-6, ditulis Jacob of Sarug, dengan detail yang sama persis — termasuk anjing di depan gua dan koin yang sudah tidak berlaku.",
  openGraph: {
    images: [
      {
        url: "/article-images/13-gua-anjing-dan-naskah-yang-sudah-ada-sembilan-puluh-tahun-sebelumnya-illustration.png",
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

export default function AshabAlKahfiArticle() {
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
            Al-Kahf 18:22 · Al-Kahf 18:9 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 11 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Gua, Anjing, dan Naskah yang Sudah Ada Sembilan Puluh Tahun
            Sebelumnya
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Kahf memperkenalkan kisah Ashabul Kahfi sebagai wahyu dan
            keajaiban dari Allah. Tapi di ayat yang sama, Al-Quran merekam bahwa
            audiens sudah punya tiga versi berbeda tentang berapa jumlah
            pemudanya.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/13-gua-anjing-dan-naskah-yang-sudah-ada-sembilan-puluh-tahun-sebelumnya-illustration.png"
            alt="Ilustrasi editorial gua malam dengan anjing, koin kuno, dan naskah tua"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="ashabul-kahfi" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={18} ayat={9}>
              Al-Kahf 18:9
            </VerseLink>{" "}
            memperkenalkan kisah Ashabul Kahfi sebagai{" "}
            <em>"tanda-tanda Kami yang mengherankan"</em>, sebuah keajaiban
            yang Allah ceritakan kepada Muhammad sebagai wahyu. Tiga belas ayat
            kemudian, di{" "}
            <VerseLink surah={18} ayat={22}>
              18:22
            </VerseLink>
            , surah yang sama mencatat bahwa orang-orang sudah berdebat tentang
            berapa jumlah para pemuda itu:
          </p>

          <p>
            <em>
              "Sebagian berkata: mereka bertiga, anjing mereka yang keempat.
              Sebagian berkata: mereka berlima, anjing mereka yang keenam.
              Sebagian lagi berkata: mereka bertujuh, anjing mereka yang
              kedelapan."
            </em>
          </p>

          <p>
            Kalau ini wahyu baru dari Tuhan yang mengetahui segala sesuatu,
            mengapa Al-Quran perlu merekam bahwa audiens sudah punya tiga versi
            berbeda tentang berapa orangnya?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Cerita yang sudah punya versi
          </h2>

          <p>
            Legenda "Tujuh Pemuda Efesus" sudah beredar luas di dunia Kristen
            sebelum Muhammad lahir. Versi paling terkenal ditulis oleh Jacob of
            Sarug, seorang uskup Suriah, sekitar tahun 521 M, hampir sembilan
            puluh tahun sebelum Al-Kahf diwahyukan. Naskahnya beredar dalam
            bahasa Yunani, Latin, dan Syriac di seluruh Timur Tengah, termasuk
            jalur perdagangan yang menghubungkan Arabia dengan Levant.
          </p>

          <p>
            Kisahnya: tujuh pemuda Kristen di kota Efesus melarikan diri ke
            sebuah gua untuk menghindari penganiayaan Kaisar Decius pada tahun
            250 M. Mereka tertidur dan baru terbangun dua ratus tahun kemudian,
            di zaman ketika Kristen sudah menjadi agama resmi kekaisaran.
            Mereka ditemani seekor anjing. Ketika salah satu dari mereka turun
            ke kota untuk membeli makanan, koin yang ia bawa sudah sangat kuno
            dan tidak lagi berlaku di pasar.
          </p>

          <p>
            Al-Kahf menceritakan hal yang sama. Pemuda-pemuda beriman melarikan
            diri ke gua untuk menghindari penguasa yang zalim. Allah
            menidurkan mereka berabad-abad. Mereka ditemani anjing, yang
            disebut secara spesifik di{" "}
            <VerseLink surah={18} ayat={18}>
              18:18
            </VerseLink>{" "}
            sedang merentangkan kakinya di depan pintu gua. Ketika salah satu
            dari mereka dikirim membeli makanan di{" "}
            <VerseLink surah={18} ayat={19}>
              18:19
            </VerseLink>
            , ia diminta berhati-hati agar tidak dicurigai karena membawa koin
            yang sudah ketinggalan zaman.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kenapa anjingnya penting
          </h2>

          <p>
            Tema "orang yang tidur sangat lama lalu terbangun di zaman berbeda"
            memang muncul di banyak tradisi. Rip Van Winkle tidur dua puluh
            tahun. Epimenides dari Kreta dalam mitologi Yunani tidur lima puluh
            tujuh tahun. Kalau yang sama hanya tema besarnya, itu masih bisa
            dijelaskan sebagai motif universal yang berkembang secara paralel di
            berbagai kebudayaan.
          </p>

          <p>Anjing adalah soal yang berbeda.</p>

          <p>
            Tidak ada alasan naratif yang mengharuskan para pemuda itu punya
            seekor anjing. Anjing itu tidak berperan apa-apa dalam kisah. Ia
            tidak menyelamatkan siapapun, tidak memberikan petunjuk, tidak
            membangunkan mereka. Al-Kahf 18:18 hanya menyebutnya duduk
            merentangkan kaki di depan pintu gua, seolah sedang berjaga. Lalu
            kisah berlanjut tanpa menyebut anjing itu lagi.
          </p>

          <p>
            Ini persis yang dilakukan Jacob of Sarug dalam naskahnya. Anjing yang
            sama, posisi yang sama, fungsi naratif yang sama: tidak ada, tapi
            ada.
          </p>

          <p>
            Satu detail yang tidak punya fungsi plot, muncul di dua naskah dari
            dua tradisi yang berbeda. Kalau ini kebetulan, kebetulan itu sangat
            spesifik.
          </p>

          <p>
            Koin yang sudah tidak berlaku menambah satu lapis lagi. Ini bukan
            motif "tidur panjang" yang generik. Ini detail ekonomi yang konkret:
            seseorang yang terbangun setelah berabad-abad membawa mata uang yang
            sudah tidak dikenali pedagang di pasar. Detail itu ada di versi
            Jacob of Sarug, dan muncul lagi di Al-Kahf 18:19 sebagai bagian
            dari instruksi kepada pemuda yang akan pergi membeli makanan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Wahyu yang tidak tahu berapa orangnya
          </h2>

          <p>
            <VerseLink surah={18} ayat={25}>
              Al-Kahf 18:25
            </VerseLink>{" "}
            menyebut mereka tidur selama tiga ratus sembilan tahun. Naskah Syriac
            menyebut dua ratus tahun, tapi versi-versi lain dari legenda yang
            sama menyebutkan angka yang berbeda-beda, tergantung siapa yang
            menceritakannya dan di mana.
          </p>

          <p>Yang menarik bukan perbedaan angkanya.</p>

          <p>
            Yang menarik adalah bahwa audiens Arabia abad ke-7 sudah cukup
            familiar dengan kisah ini untuk berdebat tentang detailnya secara
            aktif. Al-Kahf 18:22 tidak hanya merekam tiga versi berbeda soal
            jumlah pemuda, ia juga merespons perdebatan itu dengan cara yang
            tidak biasa untuk sebuah wahyu:{" "}
            <em>"katakanlah, Tuhanku lebih mengetahui jumlah mereka."</em>
          </p>

          <p>Tuhan tahu, tapi tidak memberitahu.</p>

          <p>
            Sebuah kisah yang diperkenalkan sebagai{" "}
            <em>"tanda-tanda Kami yang mengherankan"</em> di 18:9, yang
            diklaim diceritakan{" "}
            <em>"dengan sebenarnya"</em> di{" "}
            <VerseLink surah={18} ayat={13}>
              18:13
            </VerseLink>
            , berakhir dengan menyerahkan pertanyaan paling dasar tentang
            narasinya kepada pengetahuan yang tidak diungkapkan. Sementara di
            luar sana, tiga jawaban berbeda sudah beredar.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Bagaimana cerita itu sampai ke Mekah
          </h2>

          <p>
            Kota Efesus berada di pantai barat Anatolia. Mekah di semenanjung
            Arabia. Jaraknya ribuan kilometer, dan legenda itu tidak bisa
            berjalan sendiri.
          </p>

          <p>
            Tapi jalurnya ada. Kafilah pedagang Arab sering melintas ke Suriah
            dan Levant, wilayah yang menjadi pusat penyebaran naskah-naskah Syriac.
            Komunitas Kristen Arab yang tinggal di perbatasan Arabia sudah
            mengenal cerita-cerita itu sejak lama. Legenda Tujuh Pemuda Efesus
            bukan naskah akademik yang tersimpan di perpustakaan biara. Ia adalah
            cerita yang diceritakan ulang, di jalan, di pasar, di antara
            orang-orang yang bepergian jauh.
          </p>

          <p>
            Dan ada satu jalur yang lebih langsung dari itu.
          </p>

          <p>
            Waraqah bin Naufal adalah pendeta Kristen, sepupu Khadijah, istri
            Muhammad. Ia fasih membaca naskah-naskah Syriac, dan ia adalah orang
            pertama yang memvalidasi pengalaman Muhammad sebagai nabi. Ibn
            Hisham mencatatnya dalam Sirah Nabawiyah. Naskah Jacob of Sarug
            tersedia dalam bahasa yang Waraqah baca, di wilayah yang terhubung
            langsung dengan jaringan sosialnya.
          </p>

          <p>
            Seberapa besar pengaruh Waraqah terhadap bentuk awal narasi Islam
            adalah pertanyaan yang lebih luas dari kasus Ashabul Kahfi saja,
            dan dibahas lebih jauh dalam artikel{" "}
            <Link
              href="/artikel/waraqah-dan-wahyu"
              className="border-b border-[var(--qurai-gold)] text-[var(--qurai-gold)] opacity-80 transition hover:opacity-100"
            >
              Waraqah bin Naufal dan Asal-Usul Wahyu
            </Link>
            . Tapi dalam konteks ini, satu hal cukup jelas: naskah dengan detail
            yang sama sudah ada, orang yang bisa membacanya ada di lingkaran
            dalam Muhammad, dan Al-Quran tidak mengklaim mengadaptasi naskah itu.
          </p>

          <p>
            Al-Quran mengklaim menceritakannya{" "}
            <em>"dengan sebenarnya."</em>
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
                { surah: 18, ayat: 9, label: "Al-Kahf 9" },
                { surah: 18, ayat: 13, label: "Al-Kahf 13" },
                { surah: 18, ayat: 18, label: "Al-Kahf 18" },
                { surah: 18, ayat: 19, label: "Al-Kahf 19" },
                { surah: 18, ayat: 22, label: "Al-Kahf 22" },
                { surah: 18, ayat: 25, label: "Al-Kahf 25" },
                { surah: 11, ayat: 49, label: "Hud 49" },
                { surah: 12, ayat: 3, label: "Yusuf 3" },
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

        <ArticleRecommendations currentSlug="ashabul-kahfi" />
      </article>
    </main>
  );
}
