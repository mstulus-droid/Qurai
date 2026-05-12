/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleRecommendations } from "@/components/article-recommendations";
import { ArticleAudio } from "@/components/article-audio";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Ketika Wahyu Mengikuti Kepentingan Pribadi Nabi | Qurai",
  description:
    "Ada pola di ayat-ayat Madaniyah: wahyu turun tepat saat Muhammad menghadapi masalah personal — konflik rumah tangga, ketertarikan seksual, kritik publik, atau kebutuhan finansial. Pola ini bisa diperiksa langsung dari Al-Quran.",
  openGraph: {
    images: [
      {
        url: "/article-images/05-ketika-wahyu-mengikuti-kepentingan-pribadi-nabi-illustration.png",
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

export default function WahyuKonvenienArticle() {
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
            Al-Ahzab 33:50 · At-Tahrim 66:1 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 12 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Ketika Wahyu Mengikuti Kepentingan Pribadi Nabi
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Ada pola di ayat-ayat Madaniyah: wahyu turun tepat saat Muhammad
            menghadapi masalah personal — konflik rumah tangga, ketertarikan pada
            perempuan tertentu, kritik publik, atau kebutuhan finansial. Pola ini
            bisa diperiksa langsung dari Al-Quran.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/05-ketika-wahyu-mengikuti-kepentingan-pribadi-nabi-illustration.png"
            alt="Ilustrasi editorial monumen kepalan tangan batu"
            width={1792}
            height={1024}
            priority
            sizes="(max-width: 768px) calc(100vw - 1.4rem), 740px"
            className="h-auto w-full"
          />
        </figure>

        <ArticleAudio slug="wahyu-konvenien" />

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          <p>
            Ada satu cara membaca Al-Quran yang jarang dilakukan secara sistematis:
            menelusuri kapan sebuah ayat turun dan apa yang sedang terjadi di
            kehidupan Muhammad saat itu. Kalau dibaca kronologis, ada pola yang
            cukup konsisten — terutama di ayat-ayat Madaniyah — di mana wahyu
            muncul pada momen-momen yang sangat spesifik untuk menyelesaikan
            masalah yang sedang Muhammad hadapi secara personal. Bukan selalu
            masalah komunitas atau umat.
          </p>

          <p>
            Ini bukan pola yang tersembunyi. Ini tersedia di Al-Quran — dan bisa
            diperiksa.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pernikahan yang berlaku khusus untuk Muhammad
          </h2>

          <p>
            <VerseLink surah={33} ayat={50}>
              Al-Ahzab 33:50
            </VerseLink>{" "}
            adalah salah satu ayat yang paling eksplisit. Ayat itu membuka daftar
            panjang perempuan yang halal untuk Muhammad — termasuk yang
            "menyerahkan dirinya kepada Nabi kalau Nabi mau mengawininya." Lalu
            diakhiri dengan kalimat yang sering tidak dikutip: "sebagai
            pengkhususan bagimu, bukan untuk orang mukmin yang lain."
          </p>

          <p>
            Itu bunyi aslinya, bukan tafsiran.
          </p>

          <p>
            Muslim laki-laki dibatasi empat istri dengan syarat keadilan di antara
            mereka. Muhammad menikahi lebih dari itu dan mendapat pengecualian
            formal dari aturan yang dia sendiri terapkan untuk orang lain.{" "}
            <VerseLink surah={33} ayat={51}>
              Ayat berikutnya, 33:51
            </VerseLink>
            , melanjutkan: dia boleh menangguhkan giliran istri mana saja yang dia
            mau, memanggil yang dia inginkan, tanpa kewajiban jadwal yang adil
            yang berlaku untuk Muslim lain.
          </p>

          <p>
            Kasus yang lebih rumit ada di{" "}
            <VerseLink surah={33} ayat={37}>
              33:37
            </VerseLink>
            . Ini ayat tentang Zainab binti Jahsy — perempuan yang saat itu masih
            istri Zaid, anak angkat Muhammad. Al-Quran mencatat bahwa
            Muhammad "menyembunyikan di dalam hatinya apa yang Allah akan
            menyatakannya" — pengakuan tekstual bahwa ada sesuatu yang
            disembunyikan sebelum pernikahan terjadi. Setelah Zaid menceraikan
            Zainab, Muhammad menikahinya, dan ayat ini turun untuk menjustifikasi
            pernikahan itu sekaligus menghapus tabu adopsi Arab.
          </p>

          <p>
            Wahyu sebagai justifikasi setelah kejadian, bukan panduan sebelumnya.
          </p>

          <p>
            <VerseLink surah={66} ayat={1}>
              At-Tahrim 66:1
            </VerseLink>{" "}
            punya konteks yang lebih domestik. Muhammad pernah berjanji tidak akan
            mendekati Maria al-Qibtiyah — budaknya — setelah Hafshah mendapati
            mereka berdua. Ayat ini turun menegurnya: "Hai Nabi, mengapa kamu
            mengharamkan apa yang Allah halalkan bagimu?" Efeknya adalah
            membatalkan janji Muhammad pada istrinya dengan otoritas ilahi.
          </p>

          <p>
            <VerseLink surah={33} ayat={53}>
              Al-Ahzab 33:53
            </VerseLink>{" "}
            menutup keistimewaan ini dari sisi lain: larangan menikahi
            janda-janda Muhammad setelah dia meninggal. Selamanya. Aturan ini
            tidak berlaku untuk nabi-nabi sebelumnya, tapi berlaku permanen bagi
            perempuan-perempuan yang menikah dengan Muhammad.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Harta rampasan dan siapa yang mengontrol distribusinya
          </h2>

          <p>
            <VerseLink surah={8} ayat={1}>
              Al-Anfal 8:1
            </VerseLink>{" "}
            menyatakan bahwa harta rampasan perang adalah milik Allah dan Rasul.{" "}
            <VerseLink surah={8} ayat={41}>
              Ayat 8:41
            </VerseLink>{" "}
            kemudian membagi teknisnya: seperlima untuk Muhammad dan
            distribusinya, selebihnya untuk pasukan. Ini menciptakan insentif
            ekonomi yang nyata dari setiap aktivitas militer.
          </p>

          <p>
            <VerseLink surah={59} ayat={6}>
              Al-Hasyr 59:6-7
            </VerseLink>{" "}
            menambahkan kategori kedua: fai', harta yang diperoleh tanpa
            pertempuran langsung. Ini sepenuhnya di bawah kontrol Muhammad tanpa
            aturan pembagian yang sama.{" "}
            <VerseLink surah={9} ayat={103}>
              At-Taubah 9:103
            </VerseLink>{" "}
            memberikan otoritas pengumpulan zakat. Dalam satu paket, ini adalah
            kontrol finansial dari segala arah — dari harta perang sampai harta
            damai, dari rampasan sampai distribusi amal wajib. Semua melewati
            satu tangan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Mengkritik Muhammad dan konsekuensinya
          </h2>

          <p>
            <VerseLink surah={33} ayat={6}>
              Al-Ahzab 33:6
            </VerseLink>{" "}
            menempatkan Muhammad "lebih utama dari diri mereka sendiri" bagi
            orang-orang beriman.{" "}
            <VerseLink surah={33} ayat={57}>
              Ayat 33:57
            </VerseLink>{" "}
            menyamakan menyakiti Muhammad dengan menyakiti Allah, diikuti ancaman
            laknat di dunia dan akhirat — tanpa definisi jelas tentang apa yang
            termasuk "menyakiti."
          </p>

          <p>
            <VerseLink surah={9} ayat={61}>
              At-Taubah 9:61
            </VerseLink>{" "}
            merespons tuduhan bahwa Muhammad mudah dipengaruhi. Alih-alih
            menjawab substansi kritik, ayat itu mengancam kritikus dengan "siksa
            yang pedih."{" "}
            <VerseLink surah={49} ayat={2}>
              Al-Hujurat 49:2
            </VerseLink>{" "}
            mengatur bahwa tidak boleh ada suara yang lebih keras dari suara
            Muhammad — dengan ancaman hapusnya seluruh pahala amal, hanya karena
            nada bicara.
          </p>

          <p>
            Efek kumulatifnya adalah lingkungan di mana kritik terhadap Muhammad
            identik dengan dosa — bukan secara sosial, tapi secara teologis.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Ketaatan tanpa syarat
          </h2>

          <p>
            <VerseLink surah={4} ayat={59}>
              An-Nisa 4:59
            </VerseLink>{" "}
            mewajibkan ketaatan kepada Allah, Rasul, dan pemimpin.{" "}
            <VerseLink surah={4} ayat={80}>
              Ayat 4:80
            </VerseLink>{" "}
            menyatakan langsung: mentaati Rasul adalah mentaati Allah.{" "}
            <VerseLink surah={4} ayat={65}>
              Ayat 4:65
            </VerseLink>{" "}
            melangkah lebih jauh: iman seseorang belum dianggap sah sampai dia
            menjadikan Muhammad hakim atas semua perselisihan, dan menerima
            keputusannya tanpa keberatan apapun — bukan hanya secara eksternal,
            tapi "dalam hatinya."
          </p>

          <p>
            <VerseLink surah={49} ayat={1}>
              Al-Hujurat 49:1
            </VerseLink>{" "}
            melarang mendahului Allah dan Rasul dalam keputusan apapun. Ini
            otoritas yang melampaui ketaatan biasa — ia menuntut tidak ada jarak
            sama sekali antara kehendak seseorang dan kehendak Muhammad.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Aturan khusus untuk istri-istrinya
          </h2>

          <p>
            <VerseLink surah={33} ayat={30}>
              Al-Ahzab 33:30
            </VerseLink>{" "}
            menetapkan bahwa dosa istri-istri Muhammad akan dihukum dua kali
            lipat dari Muslim biasa.{" "}
            <VerseLink surah={33} ayat={32}>
              Ayat 33:32
            </VerseLink>{" "}
            mengatur cara mereka berbicara — jangan terlalu lembut, jangan sampai
            memberi kesan pada "orang yang ada penyakit hatinya."
          </p>

          <p>
            <VerseLink surah={66} ayat={3}>
              At-Tahrim 66:3-5
            </VerseLink>{" "}
            mencatat konflik antara Hafshah dan Aisyah, lalu mengeluarkan
            ancaman: kalau mereka "bantu-membantu menyusahkan Nabi," Allah,
            Jibril, dan malaikat adalah penolongnya. Dan jika Muhammad menceraikan
            mereka semua, Allah akan memberinya "istri-istri yang lebih baik."
          </p>

          <p>
            Otoritas ilahi digunakan di dalam konflik rumah tangga. Ini yang
            membuat pola ini sulit diabaikan begitu saja.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Legitimasi kekerasan dan penyelesaian skor personal
          </h2>

          <p>
            <VerseLink surah={33} ayat={26}>
              Al-Ahzab 33:26-27
            </VerseLink>{" "}
            mencatat pembunuhan pria Bani Qurayzah dan perbudakan perempuan
            beserta anak-anak mereka sebagai kemenangan yang diberikan Allah —
            termasuk "tanah-tanah, rumah-rumah dan harta benda mereka."
          </p>

          <p>
            <VerseLink surah={9} ayat={63}>
              At-Taubah 9:63
            </VerseLink>{" "}
            menetapkan neraka kekal bagi siapapun yang menentang Muhammad.{" "}
            <VerseLink surah={111} ayat={1}>
              Al-Masad 111
            </VerseLink>{" "}
            mengutuk Abu Lahab beserta istrinya secara personal — satu-satunya
            musuh Muhammad yang namanya disebut langsung dalam Al-Quran. Dosa
            istrinya: membawa duri. Hukumannya: api yang bergejolak, tali dari
            sabut di leher.
          </p>

          <p>
            Vendetta pribadi diabadikan sebagai wahyu ilahi.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Pengelolaan citra setelah kejadian
          </h2>

          <p>
            <VerseLink surah={80} ayat={1}>
              Abasa 80:1-10
            </VerseLink>{" "}
            adalah teguran kepada Muhammad karena bermuka masam pada Abdullah ibn
            Umm Maktum, orang buta miskin yang datang saat Muhammad sedang
            melayani pemuka Quraisy. Ayat ini sering dikutip sebagai bukti bahwa
            Al-Quran mau "menegur" Muhammad — yang memang benar.
          </p>

          <p>
            Tapi ada yang menarik dalam struktur tegurannya. Ayat itu dimulai
            dengan: "tidak ada (celaan) atasmu kalau dia tidak membersihkan
            diri." Kesalahan diakui tapi langsung dikemas ulang — Muhammad bukan
            bersikap diskriminatif, hanya salah prioritas. Citra tetap terlindungi
            dalam tegurannya sendiri.
          </p>

          <p>
            <VerseLink surah={9} ayat={43}>
              At-Taubah 9:43
            </VerseLink>{" "}
            punya struktur serupa: "Allah memaafkanmu" — diucapkan sebelum
            tegurannya datang. Ini berbeda dengan bagaimana kesalahan pengikut
            biasa direspons dalam Al-Quran yang sama, di mana ancaman langsung
            mengikuti kesalahan tanpa pemaafan preemptive.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Otoritas hukum yang menutup lingkaran
          </h2>

          <p>
            <VerseLink surah={4} ayat={105}>
              An-Nisa 4:105
            </VerseLink>{" "}
            menetapkan Muhammad sebagai hakim dengan otoritas wahyu.{" "}
            <VerseLink surah={5} ayat={49}>
              Al-Maidah 5:49
            </VerseLink>{" "}
            mewajibkannya memutuskan "menurut apa yang diturunkan Allah." Tapi
            siapa yang menentukan apa yang diturunkan Allah dalam setiap kasus?
            Muhammad sendiri. Pengadil dan referensinya adalah orang yang sama.
          </p>

          <p>
            <VerseLink surah={68} ayat={4}>
              Al-Qalam 68:4
            </VerseLink>{" "}
            menyempurnakan gambaran ini: "Dan sesungguhnya kamu benar-benar
            berbudi pekerti yang agung."
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tentang pola itu sendiri
          </h2>

          <p>
            Tidak ada kesimpulan sederhana di sini. Ada posisi yang masuk akal
            bahwa ini memang cara Allah memimpin komunitas yang baru terbentuk —
            dengan aturan spesifik yang responsif terhadap situasi nyata di
            lapangan. Bahwa apa yang terlihat seperti "kebetulan" adalah memang
            kehendak yang terencana.
          </p>

          <p>
            Tapi ada juga pertanyaan yang tidak mudah dihindari: kalau wahyu
            datang dari sumber yang transcendent dan tidak terikat kepentingan
            manusia, mengapa begitu banyak di antaranya muncul tepat saat
            Muhammad membutuhkan justifikasi untuk sesuatu yang sudah dia
            lakukan — atau ingin dia lakukan?
          </p>

          <p>
            Mengidentifikasi pola bukan hal yang sama dengan menyimpulkan
            penjelasannya. Tapi pola itu ada, dan mengabaikannya tidak membuat
            pertanyaannya pergi.
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
                { surah: 33, ayat: 50, label: "Al-Ahzab 50" },
                { surah: 33, ayat: 51, label: "Al-Ahzab 51" },
                { surah: 33, ayat: 37, label: "Al-Ahzab 37" },
                { surah: 66, ayat: 1, label: "At-Tahrim 1" },
                { surah: 66, ayat: 3, label: "At-Tahrim 3" },
                { surah: 8, ayat: 41, label: "Al-Anfal 41" },
                { surah: 59, ayat: 6, label: "Al-Hasyr 6" },
                { surah: 33, ayat: 57, label: "Al-Ahzab 57" },
                { surah: 4, ayat: 80, label: "An-Nisa 80" },
                { surah: 4, ayat: 65, label: "An-Nisa 65" },
                { surah: 33, ayat: 26, label: "Al-Ahzab 26" },
                { surah: 80, ayat: 1, label: "Abasa 1" },
                { surah: 9, ayat: 43, label: "At-Taubah 43" },
                { surah: 111, ayat: 1, label: "Al-Masad 1" },
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

        <ArticleRecommendations currentSlug="wahyu-konvenien" />
      </article>
    </main>
  );
}
