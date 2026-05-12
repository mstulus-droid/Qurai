/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Bulan yang Terbelah | Qurai",
  description:
    "Al-Qamar 54:1 tidak menyebut siapa yang melihat, kapan, atau di mana. Hadis mengisi kekosongan itu dua abad kemudian. Dan di surah Al-Isra yang sama tempat Muhammad ditantang menunjukkan mukjizat, ada ayat yang menjelaskan mengapa Allah tidak mengirimkan tanda fisik — seolah belah bulan tidak pernah terjadi.",
  openGraph: {
    images: [
      {
        url: "/article-images/19-bulan-yang-terbelah-illustration.png",
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

export default function BulanYangTerbelahArticle() {
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
            Al-Qamar 54:1 · Al-Isra 17:59 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 9 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Bulan yang Terbelah
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Qamar 54:1 tidak menyebut siapa yang melihat, kapan, atau di
            mana. Hadis mengisi kekosongan itu dua abad kemudian. Dan di surah
            Al-Isra, di tempat Muhammad ditantang menunjukkan mukjizat, ada ayat
            yang menjelaskan mengapa Allah tidak mengirimkan tanda fisik, seolah
            belah bulan tidak pernah terjadi.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/19-bulan-yang-terbelah-illustration.png"
            alt="Ilustrasi editorial orang-orang duduk menyaksikan bulan terbelah di kiri dan kanan gunung"
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
            <VerseLink surah={54} ayat={1}>
              Al-Qamar 54:1-2
            </VerseLink>{" "}
            dimulai dengan satu kalimat pendek:
          </p>

          <p>
            <em>
              "Saat (hari kiamat) sudah dekat, bulan pun telah terbelah."
            </em>
          </p>

          <p>
            Kalimat itu berdiri sendiri tanpa konteks. Tidak ada yang
            diceritakan siapa yang melihat, kapan tepatnya, di mana, atau dalam
            kondisi apa. Surah itu berlanjut seolah tidak ada yang perlu dijelaskan
            lebih lanjut.
          </p>

          <p>
            Hadis dalam Shahih Bukhari kemudian mengisi ruang itu. Menurut
            riwayat yang disandarkan pada Anas bin Malik, Abdullah bin Mas'ud,
            dan Ibn Abbas, Muhammad membelah bulan di hadapan orang-orang
            Quraisy di Makkah. Bulan kelihatan terpisah di kanan dan kiri
            gunung Hira sebelum kembali menyatu. Orang-orang yang
            menyaksikannya menyebut kejadian itu sihir.
          </p>

          <p>
            Bukhari mulai mengompilasinya sekitar dua abad setelah Muhammad
            meninggal.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Separuh dunia sedang menatap langit
          </h2>

          <p>
            Pada abad ke-7, tradisi pengamatan langit sudah lama matang di
            banyak tempat.
          </p>

          <p>
            Babilonia sudah mendokumentasikan pergerakan bulan dan gerhana dalam
            tablet tanah liat sejak ribuan tahun sebelumnya. Catatan mereka
            cukup detail untuk dilacak mundur oleh astronom modern hari ini.
            Cina punya observatorium dan tradisi pencatatan yang tidak pernah
            putus. India punya Jyotisha, sistem astronomi yang sudah mengakar
            berabad-abad. Byzantium mewarisi tabel-tabel Ptolemy. Persia adalah
            salah satu pusat pembelajaran dunia, dengan akses ke tradisi
            astronomi Yunani dan India sekaligus.
          </p>

          <p>
            Ini bukan peradaban yang ceroboh soal langit. Mereka tahu apa yang
            sedang mereka lihat, dan mereka mencatatnya.
          </p>

          <p>
            Kalau bulan benar-benar terbelah dua pada suatu malam di abad ke-7,
            separuh bumi sedang menghadapnya. Fenomena itu akan tampak dengan
            mata telanjang dari pantai barat Afrika sampai ujung Asia Timur.
            Tidak ada yang perlu punya teleskop. Tidak ada yang perlu jadi ahli.
            Siapa pun yang sedang di luar malam itu akan melihatnya.
          </p>

          <p>Tidak satu pun dari semua peradaban itu mencatat apa-apa.</p>

          <p>
            Bukan karena mereka tidak peduli. Gerhana matahari total 6 April 648
            M, yang jauh lebih lokal sifatnya, tercatat secara independen oleh
            sumber Byzantium, Cina, dan Armenia. Peristiwa langit yang jauh
            lebih kecil dari itu pun meninggalkan jejak lintas budaya. Belah
            bulan tidak meninggalkan jejak di mana pun di luar semenanjung Arab.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang sebenarnya dilihat orang Makkah
          </h2>

          <p>Ada masalah lain, yang lebih dekat dengan ayat-ayatnya sendiri.</p>

          <p>
            Para mufasir klasik tidak sepakat soal apa yang dimaksud Q 54:1.
            Sebagian membacanya sebagai peristiwa historis yang sudah terjadi di
            masa Muhammad. Tapi sebagian lain, termasuk beberapa sahabat,
            membacanya dalam bingkai eskatologi: bulan <em>akan</em> terbelah
            sebagai tanda hari kiamat, bukan sesuatu yang sudah dilakukan
            Muhammad di depan orang Makkah. Kedua bacaan itu punya pendukung
            dalam tradisi tafsir, dan perdebatannya tidak pernah selesai.
          </p>

          <p>Yang menarik adalah ayat langsung sesudahnya.</p>

          <p>
            <em>
              "Dan jika mereka melihat suatu tanda, mereka berpaling dan
              berkata, 'Ini sihir yang terus-menerus.'"
            </em>
          </p>

          <p>
            Kata "sihir" di sini terasa ganjil kalau peristiwa itu betul-betul
            terjadi secara harfiah. Sihir biasanya mengacu pada sesuatu yang
            terlihat nyata tapi sebenarnya tidak, tipuan yang mengecoh persepsi.
            Seseorang yang menyaksikan bulan terbelah dua di langit malam tidak
            akan menyebutnya sihir. Ia akan menyebutnya pertanda kehancuran,
            atau hal paling mengerikan yang pernah ia lihat.
          </p>

          <p>
            Orang yang menyebut sesuatu "sihir" biasanya sedang meragukan
            kenyataannya. Sedang bertanya-tanya apakah apa yang mereka lihat
            benar-benar ada, atau hanya tampaknya begitu.
          </p>

          <p>
            Kalau memang itu yang terjadi, ada pertanyaan yang tidak punya
            jawaban: ke mana perginya catatan orang-orang Quraisy itu sendiri,
            dari mereka yang terpaksa mengakui melihat sesuatu meski menolak
            penjelasan Muhammad? Dari pedagang yang melintas malam itu? Dari
            siapa pun yang kebetulan ada di sekitar Ka'bah?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Dua upaya menutup kekosongan
          </h2>

          <p>
            Cheraman Perumal adalah nama yang sering muncul dalam diskusi ini.
            Seorang raja Kerala yang konon menyaksikan bulan terbelah dari
            India, lalu berlayar ke Arab untuk menemui Muhammad. Kisah itu
            beredar sebagai bukti bahwa ada orang di luar Arab yang melihat
            kejadian tersebut.
          </p>

          <p>
            Masalahnya mulai dari kronologi. Tidak ada tanggal yang bisa
            menempatkan Cheraman Perumal sezaman dengan Muhammad.
            Sumber-sumber berbeda menaruhnya di abad ke-4 M, ada yang di abad
            ke-9 M, keduanya jauh dari awal abad ke-7. Kisah ini pertama muncul
            dalam catatan Malayalam yang ditulis lama setelah masa Muhammad, dan
            tidak ada sumber primer India yang mengkonfirmasinya.
          </p>

          <p>
            Upaya kedua datang dari era luar angkasa. Sejak NASA mulai memotret
            permukaan bulan, ada yang menunjuk retakan bernama Rima Ariadaeus
            sebagai "bekas belahan." Rima Ariadaeus adalah rille, celah panjang
            akibat tektonik bulan di masa purba, sekitar 300 kilometer
            panjangnya, dan tidak membentang membelah bulan dari satu sisi ke
            sisi lain. Ia adalah satu dari banyak retakan serupa di permukaan
            bulan. NASA tidak pernah mengkaitkannya dengan kisah ini, tapi
            narasi "NASA membuktikan belah bulan" terus beredar, dan koreksinya
            jarang sampai ke orang yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Satu ayat yang tidak seharusnya perlu ada
          </h2>

          <p>
            Di surah Al-Isra, ada satu adegan yang cukup spesifik. Orang-orang
            Quraisy menantang Muhammad menunjukkan tanda fisik yang bisa dilihat:
            buat mata air memancar dari tanah, buat kebun dengan sungai mengalir
            di dalamnya, jatuhkan langit dalam serpihan, hadirkan Allah dan
            malaikat, punyai rumah dari emas, atau naik ke langit dan bawa surat
            yang bisa mereka baca (
            <VerseLink surah={17} ayat={90}>
              Q 17:90-93
            </VerseLink>
            ). Daftar itu panjang dan konkret. Muhammad tidak memenuhi satu pun.
          </p>

          <p>
            <VerseLink surah={17} ayat={59}>
              Ayat 59
            </VerseLink>{" "}
            di surah yang sama kemudian menjelaskan mengapa:
          </p>

          <p>
            <em>
              "Tidak ada yang menghalangi Kami untuk mengirim tanda-tanda
              kecuali bahwa orang-orang terdahulu mendustakannya."
            </em>
          </p>

          <p>
            Kalau belah bulan benar-benar sudah terjadi, ayat ini tidak perlu
            ada. Allah baru saja mengirimkan tanda fisik yang jauh melampaui
            semua yang ada dalam daftar tuntutan itu. Tapi Al-Isra di sini
            berperilaku seolah tidak ada tanda fisik yang pernah diberikan,
            seolah pertanyaan itu masih terbuka, masih perlu dijawab.
          </p>

          <p>
            Surah Al-Isra tidak tahu soal belah bulan. Atau lebih tepatnya: surah
            itu berperilaku seolah tidak tahu.
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
                { surah: 54, ayat: 1, label: "Al-Qamar 1" },
                { surah: 17, ayat: 59, label: "Al-Isra 59" },
                { surah: 17, ayat: 90, label: "Al-Isra 90" },
                { surah: 29, ayat: 50, label: "Al-Ankabut 50" },
                { surah: 6, ayat: 37, label: "Al-An'am 37" },
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
