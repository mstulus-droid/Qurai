/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Mengapa Wahyu Turun | Qurai",
  description:
    "Untuk banyak ayat Al-Quran, konteks turunnya tidak tunggal. Ada dua versi tentang At-Tahrim 66:1 dalam literatur hadis sahih: satu tentang madu, satu tentang persetubuhan dengan budak. Keduanya tidak bisa benar sekaligus.",
  openGraph: {
    images: [
      {
        url: "/article-images/22-mengapa-wahyu-turun-illustration.png",
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

export default function MengapaWahyuTurunArticle() {
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
            At-Tahrim 66:1 · Al-Ahzab 33:59 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Mengapa Wahyu Turun
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Untuk banyak ayat, konteks turunnya tidak tunggal. Ada dua versi
            tentang At-Tahrim 66:1 dalam literatur hadis sahih: satu tentang
            madu dan bau napas, satu tentang persetubuhan dengan budak dan
            rahasia yang dibocorkan. Mereka bukan sudut pandang berbeda dari
            satu peristiwa. Keduanya tidak bisa benar sekaligus.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/22-mengapa-wahyu-turun-illustration.png"
            alt="Ilustrasi editorial gulungan riwayat yang terbelah di meja gelap"
            width={1672}
            height={941}
            priority
            className="h-auto w-full object-cover"
          />
        </figure>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Setiap kali ada ayat yang terasa ambigu atau sulit dipahami dalam
            isolasi, jawabannya hampir selalu sama: lihat asbabun nuzul.
            Ketahui sebabnya, dan teksnya akan menjadi jelas.
          </p>

          <p>
            Yang jarang dibicarakan adalah bahwa untuk banyak ayat, sebabnya
            tidak tunggal. Ada beberapa versi yang saling bertentangan,
            masing-masing diriwayatkan oleh perawi yang dianggap terpercaya,
            dan tidak bisa direkonsiliasi sebagai perspektif berbeda dari satu
            peristiwa yang sama. Mereka adalah narasi yang saling menggantikan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Madu atau Maria
          </h2>

          <p>
            <VerseLink surah={66} ayat={1}>
              At-Tahrim 66:1
            </VerseLink>{" "}
            membuka dengan teguran langsung kepada Muhammad:{" "}
            <em>
              "Hai Nabi, mengapa kamu mengharamkan apa yang Allah halalkan
              bagimu?"
            </em>
          </p>

          <p>
            Sesuatu yang halal dilarang sendiri oleh Muhammad. Wahyu turun
            mengoreksinya. Itu yang kita tahu dari teksnya. Tapi apa yang
            terjadi sebelumnya, ada dua versi dalam literatur hadis sahih, dan
            keduanya tidak bisa benar sekaligus.
          </p>

          <p>
            Versi dari Aisyah, yang masuk dalam Shahih Bukhari: Muhammad minum
            madu di rumah Hafshah. Aisyah bersekongkol dengan beberapa istri
            lain untuk mengatakan napasnya berbau maghafir, sejenis getah yang
            baunya tidak sedap. Muhammad tidak nyaman dan bersumpah tidak akan
            minum madu lagi. Wahyu turun menegurnya karena mengharamkan makanan
            yang baik tanpa alasan.
          </p>

          <p>
            Versi dari Ibn Abbas, yang beredar dalam literatur hadis dengan
            rantai periwayatan yang juga dianggap kuat: Muhammad bersetubuh
            dengan Maria al-Qibtiyah, budak perempuan pemberian dari raja
            Mesir, pada hari yang seharusnya menjadi giliran Hafshah. Hafshah
            marah dan merasa dilangkahi. Muhammad bersumpah tidak akan
            mendekati Maria lagi, dan meminta Hafshah merahasiakan kejadian
            itu. Hafshah membocorkannya kepada Aisyah. Dari sana konflik
            meluas hingga melibatkan hampir semua istri. Wahyu turun menghadapi
            keseluruhan situasi itu.
          </p>

          <p>
            Satu versi bercerita tentang madu dan bau napas. Satu bercerita
            tentang persetubuhan dengan budak dan rahasia yang dibocorkan.
            Mereka bukan sudut pandang berbeda dari satu kejadian. Mereka
            adalah dua peristiwa yang sepenuhnya berbeda.
          </p>

          <p>
            Dan implikasinya jauh dari sekadar akademis. Dalam versi madu,
            teguran itu ringan: jangan membuat sumpah yang tidak perlu soal
            makanan. Dalam versi Maria, yang dihadapi wahyu adalah pertanyaan
            tentang keadilan di antara istri-istri, status budak dalam rumah
            tangga nabi, dan apakah sumpah yang dibuat dalam situasi seperti
            itu mengikat secara hukum. Dua pemahaman yang sama sekali berbeda
            tentang apa yang diatur oleh surah yang sama.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Siapa yang dilindungi
          </h2>

          <p>
            <VerseLink surah={33} ayat={59}>
              Al-Ahzab 33:59
            </VerseLink>{" "}
            adalah ayat yang hari ini menjadi salah satu dasar paling sering
            dikutip untuk kewajiban menutup tubuh bagi perempuan Muslim.
            Bunyinya:{" "}
            <em>
              "Hendaklah mereka mengulurkan jilbabnya ke seluruh tubuh mereka.
              Yang demikian itu supaya mereka lebih mudah untuk dikenal, karena
              itu mereka tidak diganggu."
            </em>
          </p>

          <p>
            Alasan yang diberikan teks sendiri adalah identifikasi: supaya
            dikenal, supaya tidak diganggu.
          </p>

          <p>
            Ubay bin Ka'b meriwayatkan konteks yang spesifik. Di Madinah,
            perempuan merdeka dan budak perempuan berpakaian serupa. Laki-laki
            mengganggu perempuan di malam hari, dan ketika ditegur, mereka
            beralasan tidak bisa membedakan mana yang merdeka dan mana yang
            budak. Ayat ini turun sebagai solusi: perempuan merdeka harus
            berpakaian berbeda dari budak supaya bisa dikenali.
          </p>

          <p>
            Kalau riwayat itu benar, jilbab bukan tentang kesalehan atau
            perlindungan universal berbasis gender. Ia adalah penanda kelas.
            Perempuan merdeka diperintahkan berpakaian berbeda dari budak
            supaya tidak salah sasaran. Budak perempuan, dalam logika itu,
            tidak mendapat perlindungan yang sama.
          </p>

          <p>
            Versi kedua bercerita tentang sesuatu yang berbeda sepenuhnya:
            istri-istri Nabi sendiri yang diganggu saat keluar malam untuk
            buang hajat, dengan pelaku yang beralasan tidak mengenali siapa
            mereka.
          </p>

          <p>
            Versi ketiga membawa Umar ke dalam gambar. Ia berulang kali
            menyarankan agar istri-istri Nabi mengenakan penutup yang lebih
            lengkap. Wahyu turun mengkonfirmasi sarannya.
          </p>

          <p>
            Implikasi dari versi ketiga berbeda lagi. Bukan peristiwa eksternal
            yang memicu wahyu, tapi usulan dari salah satu sahabat senior yang
            kemudian mendapat legitimasi ilahi. Ada beberapa ayat lain dalam
            Al-Quran yang para mufasir klasik juga kaitkan dengan "keinginan
            Umar yang kemudian dikonfirmasi wahyu," dan keberadaan pola itu
            sudah lama menjadi pertanyaan yang tidak mudah dijawab.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Menengadah ke langit
          </h2>

          <p>
            <VerseLink surah={2} ayat={144}>
              Al-Baqarah 2:144
            </VerseLink>{" "}
            mengandung detail yang tidak biasa. Sebelum mengumumkan perubahan
            arah shalat dari Yerusalem ke Mekah, ayat itu berkata:{" "}
            <em>"Sungguh Kami (sering) melihat mukamu menengadah ke langit."</em>
          </p>

          <p>Muhammad sering melihat ke atas. Menunggu sesuatu.</p>

          <p>
            Ibn Abbas meriwayatkan bahwa Muhammad secara pribadi ingin
            menghadap Ka'bah. Yerusalem bukan pilihannya dari awal, dan ia
            berharap wahyu akan datang mengubah arah itu. Perubahan itu
            kemudian terjadi. Allah mengabulkan apa yang Muhammad harapkan.
          </p>

          <p>
            Versi lain menempatkan peristiwa ini dalam konteks yang lebih
            politis. Orang-orang Yahudi Madinah menyindir bahwa Muhammad masih
            mengikuti tradisi mereka dengan menghadap Yerusalem. Perubahan
            kiblat adalah cara memutus identitas Muslim dari identitas Yahudi,
            respons terhadap tekanan sosial yang sangat konkret.
          </p>

          <p>
            Dua bacaan itu membawa implikasi yang berbeda tentang bagaimana
            wahyu bekerja. Dalam versi Ibn Abbas, praktik ibadah berubah karena
            Muhammad pribadi menginginkannya, dan keinginan itu dikabulkan.
            Dalam versi politik, arah kiblat ditentukan oleh dinamika komunal
            di Madinah.
          </p>

          <p>
            Tidak ada cara untuk mengetahui mana yang benar. Dan karena tidak
            ada cara untuk mengetahuinya, semua penafsiran yang bergantung pada
            konteks ini berdiri di atas fondasi yang tidak bisa diverifikasi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Teks terjaga, konteks tidak
          </h2>

          <p>
            <VerseLink surah={15} ayat={9}>
              Al-Hijr 15:9
            </VerseLink>{" "}
            menyatakan:{" "}
            <em>
              "Sesungguhnya Kami-lah yang menurunkan Al-Quran, dan sesungguhnya
              Kami benar-benar memeliharanya."
            </em>
          </p>

          <p>
            Klaim itu biasanya dipahami sebagai jaminan bahwa huruf-hurufnya
            tidak akan berubah. Dan memang, manuskrip Al-Quran tertua
            menunjukkan konsistensi tekstual yang relatif tinggi.
          </p>

          <p>Tapi teks dan konteksnya bukan satu paket yang sama.</p>

          <p>
            Pertanyaan kapan ayat ini turun, di Mekah atau Madinah, untuk
            siapa, sebagai respons terhadap peristiwa apa, dijawab oleh
            literatur yang dikompilasi dua sampai tiga abad setelah Muhammad
            meninggal. Tidak ada mekanisme yang setara dengan preservasi
            tekstual untuk menjaga konteks. Yang ada adalah ribuan riwayat
            yang saling bertentangan, dengan perawi yang sama-sama dianggap
            terpercaya, tersebar dalam koleksi hadis yang disusun oleh manusia
            berdasarkan penilaian manusia.
          </p>

          <p>
            Al-Wahidi, salah satu otoritas asbabun nuzul yang paling dihormati
            dalam tradisi klasik, sering menyajikan beberapa versi kontradiktif
            untuk satu ayat tanpa memilih mana yang benar. Ia tidak bisa
            memilih, karena kriteria untuk memilih tidak tersedia.
          </p>

          <p>
            Yang tersisa adalah keputusan mufasir. Dan keputusan itu selalu
            membawa sesuatu dari luar teks, agenda mazhab, kebutuhan
            kontekstualisasi, atau preferensi teologis yang sudah ada sebelum
            ayat itu dibuka.
          </p>

          <p>
            Paradoksnya ada di sana dan tidak pergi: untuk memahami teks yang
            diklaim dijaga sempurna, seseorang bergantung pada konteks yang
            tidak pernah dijaga.
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
                { surah: 66, ayat: 1, label: "At-Tahrim 1" },
                { surah: 33, ayat: 59, label: "Al-Ahzab 59" },
                { surah: 2, ayat: 144, label: "Al-Baqarah 144" },
                { surah: 15, ayat: 9, label: "Al-Hijr 9" },
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
