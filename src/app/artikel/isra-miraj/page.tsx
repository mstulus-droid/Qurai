/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleRecommendations } from "@/components/article-recommendations";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Malam yang Diceritakan Berbeda | Qurai",
  description:
    "Al-Isra 17:1 hanya menyebut perjalanan dari Mekah ke Yerusalem. Tidak ada tujuh lapis langit, tidak ada pertemuan dengan para nabi. Masjid Al-Aqsa sebagai bangunan fisik selesai dibangun tujuh puluh tahun setelah Muhammad meninggal. Aisyah bersaksi bahwa tubuh Muhammad tidak beranjak malam itu.",
  openGraph: {
    images: [
      {
        url: "/article-images/37-isra-miraj-illustration.png",
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

export default function IsraMirajArticle() {
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
            Al-Isra 17:1 · An-Najm 53:13 &nbsp;·&nbsp; 8 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Malam yang Diceritakan Berbeda
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Isra 17:1 hanya menyebut perjalanan dari Mekah ke Yerusalem.
            Masjid Al-Aqsa sebagai bangunan fisik selesai dibangun tujuh puluh
            tahun setelah Muhammad meninggal. Aisyah bersaksi bahwa tubuh
            Muhammad tidak beranjak malam itu.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/37-isra-miraj-illustration.png"
            alt="Ilustrasi editorial langit berbintang di atas reruntuhan kota kuno malam hari"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="isra-miraj" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            <VerseLink surah={17} ayat={1}>Al-Isra 17:1</VerseLink> menyebut
            satu perjalanan: dari Masjid Al-Haram di Mekah ke Masjid Al-Aqsa
            di Yerusalem. Itu saja.
          </p>

          <p>
            Tidak ada tujuh lapis langit. Tidak ada pertemuan dengan Ibrahim di
            langit keenam dan Musa di langit kelima. Tidak ada tawar-menawar
            tentang salat dari lima puluh kali menjadi lima. Semua detail yang
            kita kenal sebagai Mi'raj tidak ada dalam ayat itu.
          </p>

          <p>
            Yang kita sebut "Isra Mi'raj" adalah dua peristiwa berbeda yang
            disatukan dalam satu narasi. Isra ada di Al-Quran. Mi'raj tidak.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tempat yang belum ada
          </h2>

          <p>
            Perjalanan itu diklaim terjadi sekitar tahun 621 Masehi. Di tahun
            itu, di Bukit Bait Suci (<em>Temple Mount</em>) Yerusalem, yang ada
            adalah reruntuhan. Kuil yang dibangun Herodes sudah dihancurkan
            tentara Romawi pada tahun 70 Masehi, hampir enam ratus tahun
            sebelumnya.
          </p>

          <p>
            Masjid Al-Aqsa sebagai bangunan fisik dibangun antara tahun 691 dan
            715 Masehi oleh khalifah Umayyah, Abd al-Malik bin Marwan dan
            putranya Al-Walid I. Tujuh puluh tahun setelah Muhammad meninggal.
          </p>

          <p>
            "Masjid Al-Aqsa" di Al-Isra 17:1 dipahami oleh sebagian sarjana
            sebagai istilah generik untuk tempat suci yang jauh, bukan nama
            bangunan yang sudah berdiri. Tapi begitu tempat itu
            diidentifikasikan dengan kompleks fisik di Yerusalem, ada masalah
            kronologis yang tidak bisa diabaikan. Bangunan yang dikunjungi
            belum dibangun ketika kunjungan itu diklaim terjadi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Mimpi atau perjalanan
          </h2>

          <p>
            Di dalam khazanah Islam sendiri, tidak pernah ada konsensus tentang
            sifat perjalanan itu.
          </p>

          <p>
            Muawiyah bin Abi Sufyan menyebut Isra sebagai <em>ru'ya</em>,
            mimpi. Ibn Abbas dalam satu riwayat mengatakan perjalanan itu
            dilakukan "dengan ruh". Kelompok sahabat lain mempertahankan
            perjalanan fisik. Perbedaan ini sudah ada sejak generasi pertama.
          </p>

          <p>
            Aisyah meninggalkan keterangan yang paling langsung: tubuh Muhammad
            tidak beranjak malam itu. Yang berjalan adalah ruhnya.
          </p>

          <p>
            Kalau ini perjalanan fisik, setidaknya satu orang yang tidur di
            rumah yang sama seharusnya tahu ia pergi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua klaim, satu ayat
          </h2>

          <p>
            Satu argumen yang sering diajukan untuk membuktikan perjalanan
            fisik bertumpu pada kata <em>bi abdihi</em> di Al-Isra 17:1.{" "}
            <em>'Abd</em> merujuk pada manusia seutuhnya, bukan ruh saja.
            Karena itu, perjalanan itu pasti melibatkan tubuh fisik.
          </p>

          <p>
            Tapi ayat yang sama hanya menyebut perjalanan sampai Yerusalem.
            Tidak ada kelanjutan ke langit.
          </p>

          <p>
            Kalau <em>bi abdihi</em> membuktikan korporealitas perjalanan, ia
            membuktikannya untuk Isra saja. Untuk Mi'raj, tidak ada ayat yang
            setara.{" "}
            <VerseLink surah={53} ayat={13}>An-Najm 53:13–18</VerseLink>{" "}
            menggambarkan sesuatu yang dilihat Muhammad, tapi tidak secara
            eksplisit menyebut perjalanan ke langit atau lokasi di mana
            penglihatan itu terjadi.
          </p>

          <p>
            Dua perjalanan, satu bukti tekstual yang sebenarnya hanya relevan
            untuk salah satunya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tahun Kesedihan
          </h2>

          <p>
            Peristiwa ini diklaim terjadi di <em>'am al-huzn</em>, Tahun
            Kesedihan. Dalam rentang beberapa bulan, Khadijah dan Abu Thalib
            meninggal. Muhammad kehilangan istri pertamanya dan pelindung
            utamanya bersamaan. Upaya dakwah di Thaif baru saja berakhir
            dengan pengusiran.
          </p>

          <p>
            Narasi tentang perjalanan supranatural ke langit, dilantik langsung
            oleh Allah, bertemu semua nabi besar, tidak muncul di masa puncak.
            Ia muncul tepat di titik terendah.
          </p>

          <p>
            Riwayat paling lengkap tentang Mi'raj muncul dalam koleksi hadis,
            dari beberapa sahabat dengan detail yang tidak selalu konsisten. Di
            langit mana Musa ditemui, berapa kali salat dinegosiasikan, siapa
            yang mendampingi di setiap tingkatan, semuanya ada variasinya di
            antara riwayat yang berbeda.
          </p>

          <p>
            Al-Isra 17:1 adalah satu kalimat tentang satu malam. Yang tumbuh
            di atasnya jauh lebih besar dari apa yang tertulis di sana.
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
                { surah: 17, ayat: 1, label: "Al-Isra 1" },
                { surah: 53, ayat: 13, label: "An-Najm 13" },
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

        <ArticleRecommendations currentSlug="isra-miraj" />
      </article>
    </main>
  );
}
