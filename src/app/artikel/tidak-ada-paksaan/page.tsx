/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Tidak Ada Paksaan | Qurai",
  description:
    "Al-Baqarah 2:256 menyatakan tidak ada paksaan dalam agama. Al-Kahfi 18:29 menyebutkan percaya atau tidak percaya adalah pilihan terbuka. Tapi fiqh klasik dari empat mazhab besar menetapkan hukuman mati bagi yang keluar. Dan teks sendiri menempatkan orang yang pura-pura beriman di tingkatan neraka paling bawah.",
  openGraph: {
    images: [
      {
        url: "/article-images/15-tidak-ada-paksaan-illustration.png",
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

export default function TidakAdaPaksaanArticle() {
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
            Al-Baqarah 2:256 · An-Nisa 4:89 &nbsp;·&nbsp; Mei 2026
            &nbsp;·&nbsp; 10 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Tidak Ada Paksaan
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Satu ayat menyatakan tidak ada paksaan dalam agama. Ayat lain
            memerintahkan eksekusi bagi yang berpaling. Fiqh klasik dari empat
            mazhab besar tidak menemukan kontradiksi di antara keduanya.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/15-tidak-ada-paksaan-illustration.png"
            alt="Ilustrasi editorial rantai putus, teks hukum, batu, dan dua arah jalan"
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
            <VerseLink surah={2} ayat={256}>
              Al-Baqarah 2:256
            </VerseLink>{" "}
            adalah ayat yang hampir selalu muncul ketika seseorang ingin
            membuktikan bahwa Islam adalah agama yang toleran:{" "}
            <em>la ikraha fi'd-din</em>, tidak ada paksaan dalam agama.
          </p>

          <p>Ayat itu nyata dan tidak perlu ditafsirkan ulang. Tapi teks tidak berhenti di situ.</p>

          <p>
            <VerseLink surah={4} ayat={89}>
              An-Nisa 4:89
            </VerseLink>{" "}
            berbicara tentang orang-orang yang berpaling dari Islam setelah
            masuk: <em>"Tangkap dan bunuhlah mereka di mana saja kamu jumpai
            mereka."</em> Dan Shahih Bukhari memuat hadis dengan atribusi
            langsung ke Muhammad: <em>man baddala dinahu faqtuluh</em>,
            barangsiapa mengganti agamanya, bunuhlah. Dua posisi itu ada dalam
            satu sistem, dan tidak ada mekanisme dalam sistem itu sendiri untuk
            menyelesaikan ketegangan antara keduanya.
          </p>

          <p>
            Sebelum sampai ke fiqh, ada satu ayat lain yang jarang masuk ke
            dalam perdebatan ini.{" "}
            <VerseLink surah={18} ayat={29}>
              Al-Kahfi 18:29
            </VerseLink>{" "}
            berbunyi: <em>"Barangsiapa mau, berimanlah. Dan barangsiapa mau,
            kafirlah."</em> Ayat itu bahkan lebih eksplisit dari 2:256. Bukan
            sekadar tidak ada paksaan, tapi pilihan itu disebut secara langsung
            dan terbuka: percaya atau tidak percaya, keduanya diserahkan kepada
            manusia.
          </p>

          <p>Kalau begitu, dari mana hukuman mati itu datang?</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang ada di kitab fiqh
          </h2>

          <p>
            Jawabannya bukan dari Al-Quran secara eksplisit, tapi dari fiqh
            klasik yang dibangun di atasnya.
          </p>

          <p>
            Para imam empat mazhab besar, Hanafi, Maliki, Syafi'i, dan Hanbali,
            semuanya menetapkan hukuman mati bagi laki-laki yang murtad. Ibnu
            Qudamah dalam <em>Al-Mughni</em> mendokumentasikan ini tanpa catatan
            kaki berisi keberatan. Imam Syafi'i dalam <em>Al-Umm</em> membahas
            prosedurnya secara rinci. Ibnu Hazm menyebutnya sebagai{" "}
            <em>ijma'</em>, konsensus ulama, bukan pendapat satu mazhab yang
            bisa diabaikan oleh mazhab lain.
          </p>

          <p>
            Argumen yang sering muncul untuk menyelamatkan 2:256 adalah bahwa
            hukuman murtad bukan soal keyakinan, tapi soal pengkhianatan
            politik. Murtad di masa awal Islam, kata argumen itu, setara dengan
            membelot dari negara di masa perang, bukan sekadar pindah agama
            secara spiritual.
          </p>

          <p>
            Argumen itu punya preseden historis. Perang-perang riddah setelah
            kematian Muhammad memang punya dimensi politik yang kuat. Tapi
            argumen itu jatuh ketika dihadapkan pada mekanisme hukum yang
            sebenarnya.
          </p>

          <p>
            Dalam fiqh Syafi'i, seorang murtad diberi tiga hari untuk bertobat
            sebelum hukuman dilaksanakan. Proses itu bukan untuk menyelidiki
            apakah ia membantu musuh atau menyebarkan informasi militer. Yang
            diperiksa adalah apakah ia mau mengucapkan syahadat lagi. Yang
            diadili adalah keyakinannya. Bukan tindakannya, bukan dampak
            politisnya, bukan relasinya dengan negara musuh.
          </p>

          <p>Iman itu sendiri yang diadili.</p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kasus yang tercatat
          </h2>

          <p>
            Pada 2013, Meriam Ibrahim, seorang perempuan hamil di Sudan, divonis
            mati. Dasar hukumnya: ia dianggap murtad karena menikah dengan pria
            Kristen dan menolak mengakui dirinya Muslim. Ia melahirkan anaknya
            di dalam penjara dengan kaki dirantai, menunggu eksekusi. Ia
            akhirnya dibebaskan bukan karena ada perubahan dalam sistemnya, tapi
            karena tekanan diplomatik dari negara-negara Barat cukup keras untuk
            membuat pemerintah Sudan perlu merespons.
          </p>

          <p>
            Yousef Nadarkhani, pendeta Iran, menghabiskan bertahun-tahun dalam
            sel menunggu hukuman gantung setelah berpindah dari Islam ke
            Kristen. Raif Badawi di Arab Saudi divonis 10 tahun penjara dan
            1.000 cambukan bukan karena membantu musuh negara, tapi karena
            mengelola blog yang mempertanyakan otoritas agama.
          </p>

          <p>
            Pew Research Center pada 2013 menerbitkan survei terhadap Muslim di
            berbagai negara. Di Mesir, 86 persen responden mendukung hukuman
            mati untuk murtad. Di Yordania, 82 persen. Di Pakistan, 76 persen.
            Afghanistan, 79 persen. Angka-angka itu bukan hasil dari rezim
            ekstremis yang memaksakan pandangan kepada rakyat. Itu adalah
            pandangan yang dipegang mayoritas dalam populasi tersebut.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Yang tidak pernah masuk berita
          </h2>

          <p>
            Yang lebih sulit dihitung adalah kasus-kasus yang tidak pernah
            terekspos.
          </p>

          <p>
            Di banyak negara, dan bahkan di komunitas diaspora di negara-negara
            Barat, ada orang-orang yang sudah tidak percaya tapi tidak bisa
            mengatakan itu kepada siapapun. Bukan karena malu atau tidak berani
            secara emosional. Karena kalkulasi yang sangat rasional: hubungan
            dengan keluarga, keberlangsungan pernikahan, pekerjaan di komunitas
            yang sama, dan dalam sejumlah kasus, keselamatan fisik. Mereka pergi
            shalat Jumat. Mereka berpuasa di bulan Ramadan. Mereka hadir di
            pernikahan dan pemakaman dengan ritual yang tidak lagi mereka yakini,
            dan mereka melakukannya setiap tahun karena pilihan lainnya terlalu
            mahal.
          </p>

          <p>
            Al-Quran sendiri punya kata untuk kondisi ini: <em>munafik</em>,
            orang yang menampilkan keimanan yang tidak ada di dalam hatinya. Dan
            teks tidak memperlakukan kemunafikan dengan ringan.{" "}
            <VerseLink surah={4} ayat={145}>
              An-Nisa 4:145
            </VerseLink>{" "}
            menempatkan orang-orang munafik di <em>darkil asfal minan nar</em>,
            tingkatan paling bawah dari neraka, lebih dalam dari posisi orang
            kafir biasa.
          </p>

          <p>
            Sistemnya menciptakan kondisi yang secara struktural memproduksi
            kemunafikan, lalu menempatkan kemunafikan itu sebagai dosa yang
            lebih berat dari kekafiran terang-terangan.
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
                { surah: 2, ayat: 256, label: "Al-Baqarah 256" },
                { surah: 4, ayat: 89, label: "An-Nisa 89" },
                { surah: 18, ayat: 29, label: "Al-Kahfi 29" },
                { surah: 4, ayat: 137, label: "An-Nisa 137" },
                { surah: 4, ayat: 145, label: "An-Nisa 145" },
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
