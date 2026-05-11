/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Pengetahuan yang Tidak Melampaui Zamannya | Qurai",
  description:
    "At-Tariq 86:5-7 mengklaim sperma berasal dari antara tulang sulbi dan tulang dada — salah secara anatomis, tapi konsisten dengan teori Galen abad ke-2. Gunung diklaim mencegah gempa di tempat gunung justru menjadi zona gempa paling aktif. Klaim 'mukjizat ilmiah' yang tidak melampaui pengetahuan yang sudah ada.",
  alternates: {
    canonical: "/artikel/mukjizat-ilmiah",
  },
  openGraph: {
    title: "Pengetahuan yang Tidak Melampaui Zamannya | Qurai",
    description:
      "At-Tariq 86:5-7, teori Galen, gunung, dan klaim mukjizat ilmiah yang tidak melampaui pengetahuan zamannya.",
    url: "/artikel/mukjizat-ilmiah",
    type: "article",
    images: ["/brand/qurai-app-icon-dark.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengetahuan yang Tidak Melampaui Zamannya | Qurai",
    description:
      "At-Tariq 86:5-7, teori Galen, gunung, dan klaim mukjizat ilmiah yang tidak melampaui pengetahuan zamannya.",
    images: ["/brand/qurai-app-icon-dark.png"],
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

export default function MukjizatIlmiahArticle() {
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
            At-Tariq 86:5 · An-Nahl 16:15 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Pengetahuan yang Tidak Melampaui Zamannya
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            At-Tariq 86:5–7 mengklaim sperma berasal dari antara tulang sulbi
            dan tulang dada. Gunung diklaim mencegah gempa di tempat gunung
            justru menjadi zona gempa paling aktif. Klaim "mukjizat ilmiah"
            yang tidak melampaui pengetahuan yang sudah ada.
          </p>
        </header>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={86} ayat={5}>At-Tariq 86:5–7</VerseLink>{" "}
            mengajukan pertanyaan tentang asal-usul manusia, lalu menjawabnya
            sendiri:
          </p>

          <p>
            <em>
              "Hendaklah manusia memperhatikan dari apakah dia diciptakan? Dia
              diciptakan dari air yang terpancar, yang keluar dari antara tulang
              sulbi dan tulang dada."
            </em>
          </p>

          <p>
            Sulbi adalah tulang belakang. Tara'ib adalah tulang dada atau
            tulang rusuk bagian depan. Ayat ini mengklaim bahwa cairan pembawa
            kehidupan berasal dari ruang antara keduanya.
          </p>

          <p>
            Sperma diproduksi di testis, organ yang terletak di luar rongga
            tubuh, bukan di antara tulang punggung dan dada. Secara anatomis,
            tidak ada kelenjar reproduktif di lokasi yang disebutkan. Testis
            justru berada di luar karena spermatogenesis membutuhkan suhu yang
            sedikit lebih rendah dari suhu inti tubuh.
          </p>

          <p>
            Tapi klaim lokasi itu bukan hal yang aneh untuk abad ke-7. Galen,
            dokter Yunani abad ke-2 yang karyanya menjadi rujukan medis standar
            di dunia Mediterania dan Timur Tengah selama berabad-abad, memiliki
            teori bahwa semen berasal dari sumsum tulang belakang. Tradisi medis
            Hippocratic sebelumnya punya varian yang sama. Pengetahuan itu
            beredar luas, diajarkan, dan diterima sebagai kebenaran di wilayah
            yang sama di mana Al-Qur'an turun.
          </p>

          <p>
            At-Tariq 86:5–7 mencerminkan pengetahuan anatomi yang tersedia di
            abad ke-7. Bukan pengetahuan yang melampaui zamannya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Gunung yang tidak mencegah apa pun
          </h2>

          <p>
            <VerseLink surah={16} ayat={15}>An-Nahl 16:15</VerseLink> dan{" "}
            <VerseLink surah={21} ayat={31}>Al-Anbiya 21:31</VerseLink> membuat
            klaim yang sama:
          </p>

          <p>
            <em>
              "Dan Dia menancapkan gunung-gunung di bumi supaya bumi itu tidak
              goncang bersama kamu."
            </em>
          </p>

          <p>Klaim kausalnya eksplisit: gunung ada agar bumi tidak berguncang.</p>

          <p>
            Geologi modern menjelaskan pembentukan gunung dari bawah, dari
            tumbukan lempeng tektonik, tekanan dari dalam kerak bumi, aktivitas
            vulkanik. Gunung bukan pasak yang menahan bumi dari luar, melainkan
            produk dari gaya yang sama yang menggerakkan lempeng bumi. Himalaya
            terbentuk karena tumbukan lempeng India dan Eurasia, dan proses
            tumbukan itulah yang menyebabkan gempa.
          </p>

          <p>
            Fakta ini bisa diverifikasi dengan peta sederhana: Himalaya, Andes,
            dan busur kepulauan di sekitar Samudra Pasifik adalah zona gempa
            paling aktif di dunia. Jepang, negara yang sebagian besar
            wilayahnya bergunung, mencatat ribuan gempa setiap tahun.
          </p>

          <p>
            Kosmologi Yunani dan Mesopotamia kuno memiliki gambaran gunung
            sebagai pasak atau penyangga bumi jauh sebelum abad ke-7. Al-Qur'an
            mengikuti gambaran yang sudah beredar, bukan mendahului pengetahuan
            yang akan datang.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Bintang dan yang bukan bintang
          </h2>

          <p>
            <VerseLink surah={37} ayat={6}>As-Saffat 37:6–10</VerseLink> dan{" "}
            <VerseLink surah={67} ayat={5}>Al-Mulk 67:5</VerseLink> memuat
            klaim yang identik:
          </p>

          <p>
            <em>
              "Sesungguhnya Kami telah menghias langit yang dekat dengan
              bintang-bintang, dan telah menjadikannya alat-alat pelempar
              setan."
            </em>
          </p>

          <p>
            Dua surah berbeda, klaim yang sama: bintang-bintang dilempar sebagai
            proyektil untuk mengusir setan.
          </p>

          <p>
            Bintang adalah bola gas dengan reaksi fusi nuklir yang sedang
            berjalan. Matahari, bintang terdekat, berdiameter sekitar 1,4 juta
            kilometer. Yang terlihat sebagai "bintang jatuh" adalah meteor,
            batuan kecil yang terbakar di atmosfer karena gesekan. Dua objek
            yang berbeda secara fundamental, satu kosmik dan masif, satu kecil
            dan sementara.
          </p>

          <p>
            Yang membuat ini lebih dari sekadar kesalahan terminologi:
            konfusinya tidak acak. Dalam kosmologi pra-Islam, fenomena cahaya di
            langit malam seringkali diperlakukan dalam satu kategori. Al-Qur'an
            mewarisi kategori itu dan memberikannya fungsi supranatural yang
            spesifik.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pola yang lebih besar
          </h2>

          <p>
            Klaim apologetik modern tentang "mukjizat ilmiah" sering mengutip{" "}
            <VerseLink surah={21} ayat={30}>Al-Anbiya 21:30</VerseLink> sebagai
            deskripsi Big Bang, atau{" "}
            <VerseLink surah={51} ayat={47}>Az-Zariyat 51:47</VerseLink> sebagai
            pernyataan ekspansi alam semesta.
          </p>

          <p>
            Tidak ada penafsir klasik yang membaca ayat-ayat itu sebagai
            kosmologi ilmiah. Pembacaan seperti itu baru muncul di abad ke-20,
            setelah Georges Lemaître dan Edwin Hubble membuat penemuan mereka
            dari observasi independen. Selama lebih dari seribu tahun
            sebelumnya, ulama-ulama besar Islam membaca ayat yang sama dengan
            tafsir yang sama sekali berbeda.
          </p>

          <p>
            Polanya konsisten: sains menemukan sesuatu, lalu ayat yang
            sebelumnya dipahami dengan cara lain tiba-tiba "mengandung" penemuan
            itu. Kalau pengetahuan itu sudah ada dalam Al-Qur'an sejak awal,
            tidak perlu menunggu ilmuwan Barat untuk mengidentifikasinya.
          </p>

          <p>
            Sementara itu, klaim anatomis tentang sulbi dan tara'ib tidak perlu
            menunggu siapa pun untuk disebut salah. Cukup membuka atlas anatomi.
          </p>
        </div>

        <ArticleShare />

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { surah: 86, ayat: 5, label: "At-Tariq 5–7" },
                { surah: 16, ayat: 15, label: "An-Nahl 15" },
                { surah: 21, ayat: 31, label: "Al-Anbiya 31" },
                { surah: 37, ayat: 6, label: "As-Saffat 6–10" },
                { surah: 67, ayat: 5, label: "Al-Mulk 5" },
                { surah: 21, ayat: 30, label: "Al-Anbiya 30" },
                { surah: 51, ayat: 47, label: "Az-Zariyat 47" },
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
