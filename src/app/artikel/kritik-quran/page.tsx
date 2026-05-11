/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";

export const metadata: Metadata = {
  title: "Apa yang Terlihat Setelah Teks Diperiksa | Qurai",
  description:
    "Al-Quran disusun bukan secara kronologis. Kompilasi menunjukkan variasi dan kehilangan materi. Ada kontradiksi internal yang tidak diselesaikan oleh doktrin abrogasi. Ada klaim ilmiah yang salah. Ada tantangan sastra tanpa kriteria. Semua ini bisa diperiksa dari teks.",
  openGraph: {
    images: [
      {
        url: "/article-images/08-apa-yang-terlihat-setelah-teks-diperiksa-illustration.png",
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

export default function KritikQuranArticle() {
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
            Al-Baqarah 2:23 · Al-Hijr 15:9 &nbsp;·&nbsp; Mei 2026 &nbsp;·&nbsp; 14 menit
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            Apa yang Terlihat Setelah Teks Diperiksa
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            Al-Quran disusun bukan secara kronologis. Proses kompilasi menunjukkan
            variasi dan kehilangan materi. Ada kontradiksi internal yang tidak
            diselesaikan oleh doktrin abrogasi. Ada klaim ilmiah yang bermasalah.
            Semua ini bisa diperiksa dari teks.
          </p>
        </header>

        <figure className="mb-14 overflow-hidden rounded-[1.25rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] shadow-[0_24px_70px_-42px_rgba(0,0,0,0.7)]">
          <Image
            src="/article-images/08-apa-yang-terlihat-setelah-teks-diperiksa-illustration.png"
            alt="Ilustrasi editorial kaca pembesar di atas halaman manuskrip"
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
            Ada perbedaan antara membaca Al-Quran sebagai teks suci dan membacanya
            sebagai objek historis. Yang pertama adalah praktik keimanan. Yang kedua
            adalah metode keilmuan. Artikel ini memilih yang kedua — bukan untuk
            menyerang keyakinan siapapun, tapi untuk memeriksa apa yang ada dalam
            teks dan dalam sejarahnya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Masalah struktur
          </h2>

          <p>
            Al-Quran disusun berdasarkan panjang surah, bukan urutan kronologis
            turunnya wahyu. Surah Al-Baqarah dengan 286 ayat ditempatkan di depan,
            meskipun sebagian besar turun di Madinah, setelah hijrah. Wahyu pertama
            yang diterima Muhammad — "Iqra'" di awal Al-Alaq — ada di surah ke-96.
            Siapapun yang ingin memahami perkembangan ajaran Islam secara kronologis
            harus merujuk ke sumber eksternal hanya untuk mengetahui urutan turunnya.
          </p>

          <p>
            Tidak ada alur naratif yang koheren di dalamnya. Kisah Musa tersebar di
            lebih dari 30 surah berbeda, dengan detail yang kadang berbeda di tiap
            kemunculan. Dalam Al-Baqarah saja, topik berpindah dari orang beriman
            dan kafir, ke seruan menyembah Allah, ke kisah Adam, ke Bani Israel, ke
            Musa dan Isa, ke kritik terhadap Yahudi dan Nasrani, ke kisah Ibrahim —
            semuanya dalam satu surah, tanpa transisi yang jelas.
          </p>

          <p>
            Pengulangan adalah karakteristik yang paling mencolok. Ancaman neraka
            dan janji surga diulang ratusan kali. "Maka nikmat Tuhanmu yang mana
            yang kamu dustakan?" muncul 31 kali dalam satu surah. Kisah Nuh muncul
            di setidaknya 15 surah berbeda. Ini bukan pengulangan retoris yang
            memperkuat satu argumen — ini pengulangan yang sama, dengan variasi
            minimal, dalam konteks berbeda.
          </p>

          <p>
            Satu pola yang menarik adalah ayat-ayat yang dimulai dengan "mereka
            bertanya kepadamu tentang...": tentang bulan sabit (
            <VerseLink surah={2} ayat={189}>
              2:189
            </VerseLink>
            ), tentang khamar (
            <VerseLink surah={2} ayat={219}>
              2:219
            </VerseLink>
            ), tentang roh (
            <VerseLink surah={17} ayat={85}>
              17:85
            </VerseLink>
            ). Tanpa hadis atau sirah, pembaca tidak tahu siapa yang bertanya dan
            dalam konteks apa. Al-Quran merespons pertanyaan yang tidak ada di dalam
            teks itu sendiri.
          </p>

          <p>
            Semua ini bisa dijelaskan dengan argumen bahwa Al-Quran memang tidak
            dirancang sebagai narasi linear. Tapi kalau itu yang dimaksud, maka klaim
            bahwa Al-Quran adalah panduan lengkap yang mandiri perlu dimaknai ulang —
            karena teks yang membutuhkan begitu banyak penjelasan eksternal untuk
            dipahami sulit disebut cukup dengan sendirinya.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kompilasi dan apa yang hilang
          </h2>

          <p>
            Al-Quran tidak dikompilasi menjadi satu teks semasa Muhammad hidup.
            Wahyu tersebar dalam berbagai media — tulang, pelepah kurma, hafalan
            para sahabat — dan tidak ada supervisi langsung dari Muhammad atas teks
            final. Setelah kematiannya, banyak penghafal tewas dalam Perang Riddah,
            mendorong Umar bin Khattab mendesak Abu Bakar untuk mengkompilasi teks
            sebelum lebih banyak yang hilang.
          </p>

          <p>
            Pada masa Utsman, sekitar dua dekade setelah wafatnya Muhammad,
            perselisihan tentang bacaan Al-Quran mendorong kompilasi versi standar.
            Semua mushaf lain diperintahkan untuk dibakar. Yang tersisa hanya mushaf
            Utsmani.
          </p>

          <p>
            Masalahnya: sahabat-sahabat senior masing-masing memiliki mushaf dengan
            jumlah surah yang berbeda. Mushaf Ibn Mas'ud — yang Muhammad sendiri
            merekomendasikan bacaannya — hanya memiliki 111 surah, tidak termasuk
            Al-Fatihah, Al-Falaq, dan An-Nas. Mushaf Ubay ibn Ka'b memiliki 116
            surah, termasuk dua surah yang tidak ada dalam mushaf Utsmani.
          </p>

          <p>
            Aisyah meriwayatkan bahwa Surah Al-Ahzab pada masa Muhammad dibaca
            sebanyak 200 ayat. Dalam mushaf Utsmani, surah itu hanya berisi 73 ayat.
            Umar bin Khattab bersaksi bahwa ayat tentang rajam pernah ada dalam
            Al-Quran tapi tidak ada dalam teks yang sekarang. Al-Quran sendiri
            mengklaim dalam{" "}
            <VerseLink surah={15} ayat={9}>
              Al-Hijr 15:9
            </VerseLink>{" "}
            bahwa Allah yang menjaga kelestariannya. Tapi kalau bukti historis
            menunjukkan adanya perbedaan versi, kehilangan materi, dan standardisasi
            yang dilakukan secara politis — maka klaim itu perlu diperiksa lebih
            cermat dari yang biasanya dilakukan.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Kontradiksi dalam teks
          </h2>

          <p>
            Al-Quran memberikan jawaban yang berbeda untuk beberapa pertanyaan
            mendasar.
          </p>

          <p>
            Tentang berapa lama langit dan bumi diciptakan:{" "}
            <VerseLink surah={7} ayat={54}>
              Al-A'raf 7:54
            </VerseLink>{" "}
            menyatakan enam hari. Tapi{" "}
            <VerseLink surah={41} ayat={9}>
              Fussilat 41:9
            </VerseLink>{" "}
            menyebut dua hari untuk bumi,{" "}
            <VerseLink surah={41} ayat={10}>
              41:10
            </VerseLink>{" "}
            empat hari untuk gunung dan makanan, dan{" "}
            <VerseLink surah={41} ayat={11}>
              41:11-12
            </VerseLink>{" "}
            dua hari untuk langit — total delapan hari. Muslim memiliki berbagai
            penjelasan, tapi penjumlahan angkanya tetap tidak selesai.
          </p>

          <p>
            Tentang urutan penciptaan:{" "}
            <VerseLink surah={2} ayat={29}>
              Al-Baqarah 2:29
            </VerseLink>{" "}
            menempatkan bumi diciptakan lebih dulu, lalu langit.{" "}
            <VerseLink surah={79} ayat={27}>
              An-Nazi'at 79:27-30
            </VerseLink>{" "}
            menempatkan langit lebih dulu, lalu bumi dihamparkan setelahnya.
          </p>

          <p>
            Tentang identitas Iblis:{" "}
            <VerseLink surah={2} ayat={34}>
              Al-Baqarah 2:34
            </VerseLink>{" "}
            menempatkan Iblis dalam kelompok malaikat yang diperintahkan sujud —
            konteks ayat jelas menunjukkan dia ada di antara mereka.{" "}
            <VerseLink surah={18} ayat={50}>
              Al-Kahf 18:50
            </VerseLink>{" "}
            menyebutnya dari golongan jin, bukan malaikat. Kedua klaim ini tidak
            bisa sekaligus benar.
          </p>

          <p>
            Tentang Firaun:{" "}
            <VerseLink surah={28} ayat={40}>
              Al-Qasas 28:40
            </VerseLink>{" "}
            menyatakan dia dan bala tentaranya ditenggelamkan.{" "}
            <VerseLink surah={10} ayat={90}>
              Yunus 10:90
            </VerseLink>{" "}
            mencatat Firaun hampir tenggelam dan mengaku beriman. Lalu{" "}
            <VerseLink surah={10} ayat={92}>
              10:92
            </VerseLink>{" "}
            menyatakan tubuhnya diselamatkan sebagai pelajaran. Tiga ayat yang
            perlu dibaca dengan sangat hati-hati untuk tidak saling bertentangan.
          </p>

          <p>
            Tentang keluarga Nuh:{" "}
            <VerseLink surah={21} ayat={76}>
              Al-Anbiya 21:76
            </VerseLink>{" "}
            menyatakan Allah menyelamatkan Nuh dan keluarganya dari bencana besar.{" "}
            <VerseLink surah={11} ayat={42}>
              Hud 11:42-43
            </VerseLink>{" "}
            menceritakan anaknya yang menolak naik bahtera dan akhirnya tenggelam.
            Muslim biasanya menjelaskan ini dengan argumen bahwa anak yang durhaka
            bukan bagian dari "keluarga" dalam arti teologis — tapi itu interpretasi
            yang ditambahkan dari luar teks.
          </p>

          <p>
            Tentang paksaan dalam agama:{" "}
            <VerseLink surah={2} ayat={256}>
              Al-Baqarah 2:256
            </VerseLink>{" "}
            menyatakan tidak ada paksaan.{" "}
            <VerseLink surah={9} ayat={29}>
              At-Taubah 9:29
            </VerseLink>{" "}
            memerintahkan memerangi Ahli Kitab sampai mereka membayar jizyah
            dalam keadaan tunduk. Doktrin nasikh-mansukh mengatakan ayat
            At-Taubah membatalkan ayat Al-Baqarah — tapi kalau itu yang berlaku,
            maka "tidak ada paksaan" sudah tidak berlaku lagi.
          </p>

          <p>
            Tentang apakah Allah menyesatkan orang:{" "}
            <VerseLink surah={9} ayat={115}>
              At-Taubah 9:115
            </VerseLink>{" "}
            menyatakan Allah tidak menyesatkan suatu kaum setelah memberi petunjuk.{" "}
            <VerseLink surah={14} ayat={4}>
              Ibrahim 14:4
            </VerseLink>{" "}
            dan{" "}
            <VerseLink surah={39} ayat={23}>
              Az-Zumar 39:23
            </VerseLink>{" "}
            menyatakan Allah menyesatkan siapa yang Dia kehendaki dan memberi
            petunjuk kepada siapa yang Dia kehendaki.
          </p>

          <p>
            Tentang syafaat:{" "}
            <VerseLink surah={2} ayat={47}>
              Al-Baqarah 2:47-48
            </VerseLink>{" "}
            menyatakan tidak ada syafaat yang diterima pada hari kiamat.{" "}
            <VerseLink surah={2} ayat={255}>
              Ayat 2:255
            </VerseLink>{" "}
            dan{" "}
            <VerseLink surah={20} ayat={109}>
              Taha 20:109
            </VerseLink>{" "}
            menyatakan syafaat bisa terjadi dengan izin Allah.
          </p>

          <p>
            Tentang khamar:{" "}
            <VerseLink surah={2} ayat={219}>
              Al-Baqarah 2:219
            </VerseLink>{" "}
            menyatakan khamar memiliki dosa besar dan beberapa manfaat bagi manusia.{" "}
            <VerseLink surah={5} ayat={90}>
              Al-Maidah 5:90
            </VerseLink>{" "}
            melarangnya secara total sebagai perbuatan setan. Doktrin abrogasi
            menjelaskan bahwa yang kedua membatalkan yang pertama. Tapi ini
            menimbulkan pertanyaan yang lebih mendasar: jika firman Allah bisa
            membatalkan firman Allah sebelumnya, apa artinya klaim bahwa kalam
            ini sempurna dan tidak berubah?
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Klaim ilmiah yang bermasalah
          </h2>

          <p>
            Beberapa ayat Al-Quran membuat klaim tentang alam fisik.{" "}
            <VerseLink surah={23} ayat={12}>
              Al-Mu'minun 23:12-14
            </VerseLink>{" "}
            menggambarkan perkembangan embrio dalam urutan: nutfah, lalu gumpalan
            darah, lalu segumpal daging, lalu tulang, lalu tulang dibungkus daging.
            Embriologi modern menunjukkan bahwa tulang dan otot berkembang bersamaan
            dari lapisan mesoderm yang sama — bukan tulang dulu baru dibungkus daging.
            Embrio juga tidak pernah melewati fase "gumpalan darah" dalam pengertian
            literal.
          </p>

          <p>
            <VerseLink surah={86} ayat={5}>
              At-Tariq 86:5-7
            </VerseLink>{" "}
            menyatakan air mani berasal dari antara tulang sulbi dan tulang dada.
            Sperma diproduksi di testis. Apologetik yang mengklaim ini merujuk pada
            asal-usul embriologis gonad tidak didukung konteks ayatnya.
          </p>

          <p>
            <VerseLink surah={67} ayat={5}>
              Al-Mulk 67:5
            </VerseLink>{" "}
            menyatakan bintang-bintang dijadikan alat pelempar setan. Bintang
            adalah benda langit masif yang jaraknya bisa ratusan tahun cahaya —
            bukan proyektil.{" "}
            <VerseLink surah={21} ayat={32}>
              Al-Anbiya 21:32
            </VerseLink>{" "}
            menyebut langit sebagai "atap yang terpelihara." Tidak ada atap di
            atas Bumi; ini adalah kosmologi kuno yang sama ditemukan di banyak
            tradisi Timur Tengah kuno.
          </p>

          <p>
            <VerseLink surah={21} ayat={31}>
              Al-Anbiya 21:31
            </VerseLink>{" "}
            dan{" "}
            <VerseLink surah={16} ayat={15}>
              An-Nahl 16:15
            </VerseLink>{" "}
            menyatakan gunung-gunung dipancang agar bumi tidak bergoncang bersama
            manusia. Secara geologis, gunung terbentuk dari aktivitas tektonik —
            proses yang sama yang menyebabkan gempa bumi. Daerah pegunungan seperti
            Himalaya dan Andes adalah zona seismik paling aktif di planet ini.
          </p>

          <p>
            <VerseLink surah={78} ayat={6}>
              An-Naba 78:6-7
            </VerseLink>{" "}
            menyebut bumi sebagai hamparan dan gunung sebagai pasak.{" "}
            <VerseLink surah={25} ayat={61}>
              Al-Furqan 25:61
            </VerseLink>{" "}
            dan{" "}
            <VerseLink surah={71} ayat={16}>
              Nuh 71:16
            </VerseLink>{" "}
            menggunakan istilah yang mengimplikasikan bulan memiliki cahaya sendiri.
            Bulan hanya memantulkan cahaya matahari.
          </p>

          <p>
            <VerseLink surah={51} ayat={49}>
              Adz-Dzariyat 51:49
            </VerseLink>{" "}
            menyatakan segala sesuatu diciptakan berpasangan. Bakteri, archaea, dan
            banyak protista bereproduksi aseksual. Hydra berkembang biak dengan tunas.
            Virus tidak memiliki jenis kelamin.{" "}
            <VerseLink surah={16} ayat={68}>
              An-Nahl 16:68-69
            </VerseLink>{" "}
            menyebut lebah makan dari "tiap-tiap macam buah-buahan." Lebah
            mengumpulkan nektar dari bunga, bukan makan buah.
          </p>

          <p>
            Setiap klaim yang salah ini bisa dimaknai secara metaforis atau
            allegoris. Tapi metode itu juga bisa diterapkan ke hampir semua klaim
            apa pun — yang membuatnya bukan metode yang bisa memverifikasi atau
            memfalsifikasi apapun secara jujur.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Tantangan tanpa kriteria
          </h2>

          <p>
            <VerseLink surah={2} ayat={23}>
              Al-Baqarah 2:23
            </VerseLink>{" "}
            menantang siapapun untuk membuat satu surah yang semisal dengan Al-Quran.{" "}
            <VerseLink surah={17} ayat={88}>
              Al-Isra 17:88
            </VerseLink>{" "}
            menyatakan manusia dan jin bersama-sama tidak akan bisa membuat yang
            serupa.
          </p>

          <p>
            Masalahnya bukan pada klaim keunggulannya — tapi pada tidak adanya
            kriteria objektif. Apa artinya "semisal"? Dari segi gaya bahasa? Konten?
            Ritme? Makna? Tidak dijelaskan. Dan siapa yang memutuskan apakah suatu
            karya memenuhi tantangan itu? Muslim yang sudah percaya Al-Quran tak
            tertandingi — yang membuat tantangan ini tidak bisa difalsifikasi dari
            luar sistem.
          </p>

          <p>
            Jika ada yang membuat karya yang sangat mirip Al-Quran, responsnya
            adalah "itu meniru." Jika karyanya sangat berbeda, responsnya adalah
            "itu tidak seperti Al-Quran." Tidak ada kondisi yang bisa membuktikan
            tantangan ini terpenuhi — kecuali bagi seseorang yang sudah memutuskan
            sebelumnya bahwa itu tidak mungkin.
          </p>

          <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
            Apa yang tersisa
          </h2>

          <p>
            Semua ini tidak menghasilkan satu kesimpulan yang bersih. Orang yang
            membawa keimanan ke dalam membaca Al-Quran akan menemukan penjelasan
            untuk setiap poin di atas — dan penjelasan itu konsisten dari dalam
            sistem kepercayaannya sendiri. Doktrin nasikh-mansukh, metafora,
            konteks historis, dan asbabun nuzul adalah alat yang sudah berabad-abad
            dipakai untuk merespons pertanyaan ini, dan semuanya punya logika
            internalnya.
          </p>

          <p>
            Yang sulit adalah bahwa alat-alat itu hanya bekerja dari dalam. Seseorang
            yang datang tanpa keimanan sebelumnya akan melihat pola yang berbeda dari
            teks yang sama. Kedua orang itu menggunakan bukti yang sama, tapi tiba
            di tempat yang berbeda. Itulah yang membuat pertanyaan ini tetap terbuka
            — dan layak diajukan.
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
                { surah: 15, ayat: 9, label: "Al-Hijr 9" },
                { surah: 7, ayat: 54, label: "Al-A'raf 54" },
                { surah: 41, ayat: 9, label: "Fussilat 9" },
                { surah: 2, ayat: 256, label: "Al-Baqarah 256" },
                { surah: 9, ayat: 29, label: "At-Taubah 29" },
                { surah: 14, ayat: 4, label: "Ibrahim 4" },
                { surah: 2, ayat: 34, label: "Al-Baqarah 34" },
                { surah: 23, ayat: 12, label: "Al-Mu'minun 12" },
                { surah: 86, ayat: 5, label: "At-Tariq 5" },
                { surah: 67, ayat: 5, label: "Al-Mulk 5" },
                { surah: 21, ayat: 31, label: "Al-Anbiya 31" },
                { surah: 51, ayat: 49, label: "Adz-Dzariyat 49" },
                { surah: 2, ayat: 23, label: "Al-Baqarah 23" },
                { surah: 17, ayat: 88, label: "Al-Isra 88" },
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
