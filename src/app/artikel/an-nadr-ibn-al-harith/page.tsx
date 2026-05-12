/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import { ArticleRecommendations } from "@/components/article-recommendations";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Orang yang Tidak Bisa Ditebus | Qurai",
  description:
    "Dari tujuh puluh tawanan Badar, hanya dua yang dieksekusi tanpa tebusan. An-Nadr ibn al-Harith bukan pemimpin militer. Ia ancaman naratif — orator yang menantang klaim Al-Quran di majelis yang sama.",
  openGraph: {
    images: [
      {
        url: "/article-images/11-orang-yang-tidak-bisa-ditebus-illustration.png",
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

export default function AnNadrIbnAlHarithArticle() {
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
            Al-Anfal 8:31 · Al-Baqarah 2:23 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Orang yang Tidak Bisa Ditebus
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Dari tujuh puluh tawanan Badar, hanya dua yang dieksekusi tanpa
            tebusan. An-Nadr ibn al-Harith bukan pemimpin militer. Ia ancaman
            naratif, seorang orator yang secara sistematis menantang klaim
            Al-Quran di majelis yang sama.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/11-orang-yang-tidak-bisa-ditebus-illustration.png"
            alt="Ilustrasi editorial kantong tebusan, gulungan tertutup, dan pedang di jalan gurun"
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
            Tujuh puluh orang Quraisy ditangkap hidup-hidup setelah Perang
            Badar. Sebagian besar dibebaskan dengan tebusan yang besarnya bisa
            dinegosiasikan. Keluarga An-Nadr ibn al-Harith menawarkan tebusan
            tertinggi di antara semua tawanan. Muhammad menjawab singkat, seperti
            yang dicatat Al-Waqidi: "Aku tidak membutuhkan tebusan darimu."
          </p>

          <p>
            An-Nadr kemudian dipenggal di as-Safra', sebelum rombongan tawanan
            bahkan sampai ke Madinah.
          </p>

          <p>
            Dari tujuh puluh tawanan itu, hanya dua yang dieksekusi tanpa
            proses: An-Nadr dan Uqbah ibn Abi Mu'ayt. Bukan pemimpin militer
            tertinggi, bukan yang paling banyak membunuh di medan perang. Abu
            Sufyan, yang jauh lebih berbahaya secara strategis, tidak ada di
            antara tawanan itu, tapi ketika ia kemudian masuk dalam jangkauan
            kekuasaan Muslim bertahun-tahun kemudian, ia diberi amnesti dan hidup
            cukup lama sebagai pemimpin senior.
          </p>

          <p>An-Nadr berbeda. Ia bukan ancaman militer. Ia ancaman naratif.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Persaingan di majelis
          </h2>

          <p>
            Selama bertahun-tahun Muhammad berdakwah di Mekah, An-Nadr
            menjalankan strategi yang sederhana. Setiap kali Muhammad selesai
            bercerita tentang kaum-kaum terdahulu yang binasa, tentang 'Ad,
            Tsamud, atau Firaun, An-Nadr berdiri dan berkata kepada audiens yang
            sama: "Demi Allah, aku bisa bercerita lebih baik. Kemarilah, aku
            ceritakan kisah Rustam dan Isfandiyar."
          </p>

          <p>
            Ia pedagang yang sering ke Persia dan Hirah. Ia hafal epik-epik
            kerajaan Sasanid, legenda-legenda yang tidak kalah dramatis. Dan
            ceritanya cukup menarik untuk membuat sebagian audiens memilih
            tinggal mendengarkan An-Nadr daripada mengikuti Muhammad.
          </p>

          <p>Al-Quran merespons. Lebih dari sekali.</p>

          <p>
            <VerseLink surah={8} ayat={31}>
              Al-Anfal 8:31
            </VerseLink>{" "}
            mencatat persis apa yang dikatakan lawan Muhammad:{" "}
            <em>
              "Kami telah mendengar. Kalau kami mau, niscaya kami dapat
              mengatakan seperti ini. Ini tidak lain hanyalah dongeng-dongeng
              orang dahulu kala."
            </em>{" "}
            <VerseLink surah={68} ayat={15}>
              Al-Qalam 68:15
            </VerseLink>{" "}
            menyebut reaksi serupa ketika ayat-ayat dibacakan:{" "}
            <em>"Ini adalah dongeng-dongeng orang-orang dahulu."</em>{" "}
            <VerseLink surah={25} ayat={5}>
              Al-Furqan 25:5
            </VerseLink>{" "}
            bahkan lebih spesifik:{" "}
            <em>
              "Dongeng-dongeng orang-orang dahulu, dimintanya supaya dituliskan,
              maka dibacakanlah dongeng itu kepadanya setiap pagi dan petang."
            </em>
          </p>

          <p>
            Kata <em>asatir al-awwalin</em>, dongeng orang-orang terdahulu,
            muncul berkali-kali dalam Al-Quran sebagai tuduhan yang perlu
            dibantah. Bukan sembarang orang yang mengucapkannya. An-Nadr tahu
            tradisi narasi Arab dari dalam, ia tahu dari mana cerita-cerita itu
            bisa berasal, dan ia cukup fasih untuk menyampaikan argumen itu
            kepada audiens yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tantangan yang tidak selesai dijawab dengan kata
          </h2>

          <p>
            Al-Quran memiliki konsep <em>i'jaz</em>, kemukjizatan linguistik.
            Ayat-ayatnya tidak bisa ditandingi.{" "}
            <VerseLink surah={2} ayat={23}>
              Al-Baqarah 2:23-24
            </VerseLink>{" "}
            secara eksplisit menantang siapapun untuk membuat satu surah yang
            semisal, lalu menyatakan bahwa mereka tidak akan mampu.{" "}
            <VerseLink surah={17} ayat={88}>
              Al-Isra' 17:88
            </VerseLink>{" "}
            lebih jauh lagi: meskipun manusia dan jin bersatu, mereka tidak bisa
            membuat yang sepertinya.
          </p>

          <p>
            An-Nadr mengambil tantangan itu secara praktis. Bukan dalam bentuk
            formal tertulis, tapi ia duduk di audiens yang sama, lalu berdiri
            dan menceritakan sesuatu yang menghibur, dramatis, dan menurut
            sebagian pendengar tidak kalah menarik.
          </p>

          <p>
            Kalau klaim <em>i'jaz</em> itu kuat secara intelektual, respons yang
            tepat terhadap An-Nadr adalah membiarkan audiens memilih dan melihat
            hasilnya. Kalau tidak ada yang bisa menandingi Al-Quran, kemampuan
            narasi An-Nadr justru akan membuktikan keistimewaan itu secara
            empiris, di depan publik yang sama.
          </p>

          <p>Tapi An-Nadr tidak dibiarkan hidup untuk membuktikan itu.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Eksekusi yang tidak menunggu Madinah
          </h2>

          <p>
            Ibn Ishaq mencatat dialog kecil sebelum eksekusi. An-Nadr berkata
            kepada Mus'ab ibn Umair yang ada di sana: "Kalau orang Quraisy
            menjadikanmu tawanan, aku tidak akan membunuhmu." Mus'ab menjawab:
            "Kamu tidak seperti aku, kamu menentang Allah dan Rasul-Nya."
          </p>

          <p>
            Eksekusi dilakukan oleh Ali bin Abi Thalib. Tidak ada sidang. Tidak
            ada konsultasi dengan para sahabat senior, sebagaimana terjadi dengan
            tawanan lain yang nasibnya dibahas bersama. Keputusan itu sudah
            bulat sebelum rombongan tiba di Madinah, jauh dari kemungkinan
            intervensi.
          </p>

          <p>
            Uqbah ibn Abi Mu'ayt, satu-satunya tawanan lain yang juga dieksekusi
            di Badar, bukan tokoh militer. Ia dieksekusi karena pernah meludahi
            Muhammad di Mekah dan menghina secara personal.
          </p>

          <p>
            Tapi di Mekah, sebelum kekuatan ada di tangannya, Muhammad
            menghadapi hinaan-hinaan semacam itu dengan diam. Ibn Mas'ud
            meriwayatkan dalam Shahih Bukhari: suatu hari ketika Muhammad sedang
            sujud di dekat Ka'bah, seseorang menaruh isi perut unta di atas
            punggungnya. Ia tidak bergerak. Tetap sujud sampai Fatima datang dan
            membersihkannya.
          </p>

          <p>
            <VerseLink surah={73} ayat={10}>
              Al-Muzammil 73:10
            </VerseLink>
            , turun di periode Mekah, memerintahkan: "Bersabarlah terhadap apa
            yang mereka katakan, dan tinggalkanlah mereka dengan cara yang baik."
            Kesabaran itu bukan pilihan teologis. Ia adalah kondisi seseorang
            yang belum punya pasukan.
          </p>

          <p>
            Setelah Badar, kondisi itu berubah. Uqbah meminta pengampunan.
            Muhammad tidak memberinya.
          </p>

          <p>
            Dua orang yang dieksekusi dari tujuh puluh tawanan: seorang kritikus
            sastra yang menantang klaim Al-Quran, dan seorang yang pernah
            meludah ke wajah Muhammad. Semua yang lain, termasuk yang membunuh
            Muslim di medan perang, pulang dengan tebusan.
          </p>

          <p>
            Tradisi Islam membingkai eksekusi An-Nadr sebagai hukuman yang wajar
            karena ia "menyakiti Nabi" melebihi sekadar pertempuran. Tapi
            kategori itu tidak menganalisis, ia menyimpulkan. Yang dilakukan
            An-Nadr di Mekah adalah berdiri di hadapan audiens yang sama dan
            berkata: ceritaku lebih menarik dari ceritanya. Bahwa tindakan itu
            masuk kategori kejahatan mematikan, sementara membunuh orang di
            medan perang tergolong kejahatan yang bisa ditebus dengan uang,
            adalah hierarki yang menceritakan banyak hal tentang apa yang
            benar-benar dianggap berbahaya.
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
                { surah: 8, ayat: 31, label: "Al-Anfal 31" },
                { surah: 68, ayat: 15, label: "Al-Qalam 15" },
                { surah: 25, ayat: 5, label: "Al-Furqan 5" },
                { surah: 83, ayat: 13, label: "Al-Muthaffifin 13" },
                { surah: 16, ayat: 24, label: "An-Nahl 24" },
                { surah: 2, ayat: 23, label: "Al-Baqarah 23" },
                { surah: 17, ayat: 88, label: "Al-Isra' 88" },
                { surah: 73, ayat: 10, label: "Al-Muzammil 10" },
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

        <ArticleRecommendations currentSlug="an-nadr-ibn-al-harith" />
      </article>
    </main>
  );
}
