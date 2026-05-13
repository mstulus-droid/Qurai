/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Dari Tanah Liat | Qurai",
  description:
    "Al-Quran menggambarkan penciptaan Adam dari tanah liat secara spesifik dan langsung. Tiga mufasir klasik terbesar membaca ini sebagai literal. Genetika populasi dan bukti kromosom menunjukkan manusia tidak pernah turun dari dua individu.",
  openGraph: {
    images: [
      {
        url: "/article-images/17-evolusi-dan-quran-illustration.png",
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

export default function EvolusiDanQuranArticle() {
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
            Al-Imran 3:59 · Al-Hijr 15:26 &nbsp;·&nbsp; 11 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Dari Tanah Liat
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran menggambarkan penciptaan Adam dengan material yang spesifik
            dan mekanisme yang jelas. Tafsir klasik membacanya secara literal.
            Kromosom manusia dan genetika populasi menunjukkan sesuatu yang
            berbeda.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/17-evolusi-dan-quran-illustration.png"
            alt="Ilustrasi editorial figur tanah liat, fosil, dan diagram kromosom di meja studi"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="evolusi-dan-quran" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={3} ayat={59}>
              Al-Imran 3:59
            </VerseLink>{" "}
            menggunakan analogi yang spesifik: penciptaan Isa dibandingkan
            langsung dengan penciptaan Adam. Bukan karena keduanya lahir dari
            perempuan tanpa ayah, tapi karena keduanya adalah produk perintah
            langsung Allah. "Allah menciptakan Adam dari tanah, kemudian Allah
            berfirman kepadanya: 'Jadilah!' Maka jadilah dia."
          </p>

          <p>
            <VerseLink surah={15} ayat={26}>
              Al-Hijr 15:26
            </VerseLink>{" "}
            menambahkan detail materialnya:{" "}
            <em>
              "Dan sesungguhnya Kami telah menciptakan manusia dari tanah liat
              kering yang berasal dari lumpur hitam yang diberi bentuk."
            </em>{" "}
            <VerseLink surah={55} ayat={14}>
              Ar-Rahman 55:14
            </VerseLink>{" "}
            mengulangi gambaran yang sama dengan metafora tembikar. Tanah liat,
            diberi bentuk, jadilah.
          </p>

          <p>
            Bukan deskripsi samar tentang proses yang berlangsung jutaan tahun.
            Ini gambaran material yang spesifik, dengan bahan yang disebutkan
            dan mekanisme yang jelas.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang sebenarnya diklaim evolusi
          </h2>

          <p>
            Sebelum membahas ketegangan antara keduanya, perlu ada kejelasan
            tentang apa yang sebenarnya diklaim teori evolusi. Kesalahpahaman
            di sini sangat umum dan sangat mudah dimanfaatkan untuk mengaburkan
            diskusinya.
          </p>

          <p>
            Evolusi tidak mengklaim bahwa manusia "berasal dari kera." Yang
            diklaim adalah bahwa manusia dan kera besar, seperti simpanse dan
            gorila, memiliki leluhur bersama yang sudah punah jutaan tahun
            lalu. Hubungan ini serupa dengan hubungan antara anjing dan rubah,
            atau antara ikan dan katak. Kita tidak berasal satu dari yang lain.
            Kita bercabang dari akar yang sama.
          </p>

          <p>
            Satu hal lagi yang sering disalahpahami: kata "teori" dalam sains
            tidak berarti tebakan atau dugaan yang belum terbukti. Teori
            gravitasi, teori kuman, teori atom, semuanya "teori" dalam
            pengertian ilmiah, yaitu penjelasan yang didukung bukti dari banyak
            arah berbeda dan sudah diuji berulang kali. Tidak ada ahli biologi
            di dunia yang memperdebatkan fakta dasar bahwa evolusi terjadi.
            Debat yang ada di kalangan ilmuwan hanya tentang detail
            mekanismenya, bukan apakah prosesnya nyata.
          </p>

          <p>
            Kita bahkan bisa mengamati evolusi secara langsung. Bakteri yang
            awalnya bisa dibunuh oleh antibiotik berevolusi menjadi resistan
            dalam hitungan tahun, kadang bulan. Ini bukan metafora atau
            analogi. Ini proses yang terdokumentasi di laboratorium dan di
            klinik di seluruh dunia.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kromosom yang tidak bisa diabaikan
          </h2>

          <p>
            Salah satu bukti paling konkret untuk asal-usul bersama manusia dan
            kera besar bisa dilihat langsung dari kromosom.
          </p>

          <p>
            Manusia punya 46 kromosom. Simpanse, gorila, dan orangutan semuanya
            punya 48. Kalau keduanya berevolusi dari leluhur bersama, ada yang
            perlu dijelaskan: ke mana dua kromosom itu pergi?
          </p>

          <p>
            Jawabannya terdokumentasi dengan jelas dalam urutan DNA. Kromosom
            nomor 2 pada manusia, ketika dibandingkan dengan kromosom kera
            besar, terlihat persis seperti dua kromosom kera yang menyatu ujung
            ke ujung. Di tengah kromosom 2 manusia, ada sisa{" "}
            <em>centromere</em> yang tidak aktif, yaitu bekas pusat kromosom
            lama yang tidak berfungsi lagi setelah penggabungan. Di bagian yang
            sama, ada <em>telomeric sequences</em>, urutan DNA yang normalnya
            hanya ada di ujung kromosom, bukan di tengah. Keberadaannya di
            tengah kromosom 2 hanya bisa dijelaskan oleh satu hal: dua
            kromosom terpisah yang menyatu di titik itu.
          </p>

          <p>
            Bukti ini tidak bergantung pada interpretasi. Urutan basa DNA sudah
            diurutkan dan tersedia secara publik. Siapapun dengan akses ke
            database genetik bisa memeriksanya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Masalah populasi
          </h2>

          <p>
            Di luar kromosom, ada masalah lain yang berasal dari genetika
            populasi dan bersifat matematis.
          </p>

          <p>
            Keberagaman genetik yang ada di antara manusia hidup hari ini
            memerlukan populasi leluhur minimum sekitar 10.000 hingga 15.000
            individu. Angka ini bukan tebakan, tapi hasil perhitungan dari
            seberapa banyak variasi genetik yang ditemukan dalam DNA manusia
            modern. Kalau seluruh umat manusia benar-benar turun dari dua
            individu, variasi yang kita observasi sekarang tidak akan mungkin
            ada.
          </p>

          <p>
            Di sini argumen "Mitochondrial Eve" yang sering dikemukakan untuk
            mendukung Adam dan Hawa perlu diperiksa lebih dekat.
          </p>

          <p>
            Mitochondrial Eve memang nyata sebagai konsep genetik. Ia adalah
            perempuan paling <em>recent</em> dari mana semua manusia hidup saat
            ini bisa melacak DNA mitokondria mereka melalui garis maternal.
            Tapi ia bukan perempuan pertama dan bukan satu-satunya perempuan di
            zamannya. Ia hidup di antara ribuan perempuan lain yang juga punya
            keturunan. Yang membedakannya hanya matematika: di suatu titik
            dalam rantai keturunan perempuan-perempuan lain itu, ada yang hanya
            punya anak laki-laki, sehingga garis mitokondrianya terputus.
            Y-Chromosomal Adam, yang sering dipasangkan dengannya, diperkirakan
            hidup puluhan ribu tahun setelah Mitochondrial Eve. Keduanya bukan
            pasangan suami-istri dan keduanya hidup di tengah populasi yang
            jauh lebih besar.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Satu catatan dari hadis
          </h2>

          <p>
            Shahih Bukhari dan Muslim memuat deskripsi fisik Adam: tingginya 60
            hasta, atau sekitar 27 meter. Sekitar setinggi gedung delapan
            lantai.
          </p>

          <p>
            Masalah di sini bukan soal apakah Allah bisa menciptakan manusia
            raksasa. Masalahnya adalah apakah makhluk seperti itu bisa
            berfungsi secara biologis. Dalam fisika ada prinsip yang disebut{" "}
            <em>square-cube law</em>: kalau tinggi badan digandakan, massa
            tubuh meningkat delapan kali lipat. Tulang yang bisa menopang
            manusia setinggi 1,8 meter tidak bisa menopang makhluk setinggi 27
            meter tanpa perubahan struktural yang sangat mendasar. Jantung
            manusia tidak bisa memompa darah ke otak yang ada 27 meter di
            atasnya tanpa tekanan yang akan merusak pembuluh darah di bagian
            tubuh yang lebih rendah.
          </p>

          <p>
            Tidak ada fosil yang menunjukkan keberadaan manusia berukuran ini,
            di mana pun, pada periode waktu apa pun.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Jalan tengah yang tidak tersedia dalam Al-Quran
          </h2>

          <p>
            Sebagian Muslim kontemporer mencoba menemukan posisi tengah:
            menerima evolusi sebagai proses yang Allah gunakan, tapi
            mempertahankan Adam dan Hawa sebagai pasangan pertama yang
            diciptakan khusus di akhir proses itu.
          </p>

          <p>
            Masalahnya adalah Al-Quran tidak menyediakan ruang untuk posisi itu
            tanpa kerja interpretasi yang cukup besar.
          </p>

          <p>
            Al-Imran 3:59 menggunakan penciptaan Adam dari tanah sebagai
            analogi untuk kelahiran Isa yang ajaib. Perbandingan itu hanya
            bekerja kalau keduanya memang sama-sama penciptaan langsung tanpa
            proses alami.{" "}
            <VerseLink surah={7} ayat={189}>
              Al-A'raf 7:189
            </VerseLink>{" "}
            menyatakan semua manusia diciptakan dari <em>nafsin wahidah</em>,
            satu jiwa, dan dalam tafsir klasik ini secara konsisten
            diidentifikasi sebagai Adam. At-Tabari, Al-Baghawi, Ibnu Katsir,
            semua membaca ayat ini sebagai pernyataan tentang nenek moyang
            literal, bukan simbolis.{" "}
            <VerseLink surah={32} ayat={7}>
              As-Sajdah 32:7–8
            </VerseLink>{" "}
            menegaskan ulang: manusia pertama dari tanah, keturunannya dari air
            yang hina.
          </p>

          <p>
            Kalau Adam adalah metafora, tradisi tafsir 1.400 tahun perlu
            dijelaskan ulang secara menyeluruh. Dan kalau Adam adalah literal,
            genetika populasi manusia tidak bisa dijelaskan.
          </p>

          <p>
            Kedua ujung itu tidak bisa dipegang sekaligus tanpa melepaskan
            salah satu.
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
                { surah: 3, ayat: 59, label: "Al-Imran 59" },
                { surah: 15, ayat: 26, label: "Al-Hijr 26" },
                { surah: 55, ayat: 14, label: "Ar-Rahman 14" },
                { surah: 7, ayat: 189, label: "Al-A'raf 189" },
                { surah: 32, ayat: 7, label: "As-Sajdah 7" },
                { surah: 32, ayat: 8, label: "As-Sajdah 8" },
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

        <ArticleRecommendations currentSlug="evolusi-dan-quran" />
      </article>
    </main>
  );
}
