import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleNav } from "@/components/article-nav";

export const metadata: Metadata = {
  title: "Artikel | Qurai",
  description:
    "Analisis mendalam tentang teks, sejarah, dan pertanyaan yang jarang diajukan.",
};

type ArticleItem = {
  slug: string;
  number: string;
  title: string;
  excerpt: string;
  surah: string;
  date: string;
  readTime: string;
  image?: {
    src: string;
    alt: string;
  };
};

const articles: ArticleItem[] = [
  {
    slug: "dzulqarnain",
    number: "01",
    title: "Dzulqarnain dan Teks yang Sudah Ada Sebelumnya",
    excerpt:
      "Orang Yahudi menguji Muhammad dengan satu pertanyaan: ceritakan Dzulqarnain. Jawabannya ada di Al-Kahf. Masalahnya, jawaban itu bukan milik Muhammad seorang.",
    surah: "Al-Kahf 18:83–98",
    date: "Mei 2026",
    readTime: "8 menit",
    image: {
      src: "/article-images/01-dzulqarnain-dan-teks-yang-sudah-ada-sebelumnya-illustration.png",
      alt: "Ilustrasi editorial medali kuno di atas latar kain gelap",
    },
  },
  {
    slug: "babi-dan-kencing-unta",
    number: "02",
    title: "Babi Matang, Kencing Unta, dan Standar yang Tidak Konsisten",
    excerpt:
      "Al-Quran melarang babi atas nama kebersihan. Hadis sahih menganjurkan urin unta sebagai obat. Secara medis, yang dilarang lebih aman dari yang dianjurkan.",
    surah: "Al-Baqarah 2:173 · Al-Maidah 5:3",
    date: "Mei 2026",
    readTime: "7 menit",
    image: {
      src: "/article-images/02-babi-matang-kencing-unta-illustration.png",
      alt: "Ilustrasi editorial botol cairan amber di depan kandang unta",
    },
  },
  {
    slug: "sistem-moral-quran",
    number: "03",
    title: "Etika Abad Ke-7 yang Dianggap Abadi",
    excerpt:
      "Al-Quran mengklaim semua manusia setara di hadapan Allah. Di kitab yang sama ada perintah bunuh orang kafir, legalitas memukul istri, dan perbudakan seksual. Dua klaim itu tidak bisa berdiri bersamaan.",
    surah: "At-Tawbah 9:5 · An-Nisa 4:34",
    date: "Mei 2026",
    readTime: "14 menit",
    image: {
      src: "/article-images/03-etika-abad-ke-7-yang-dianggap-abadi-illustration.png",
      alt: "Ilustrasi editorial seorang penulis tua di ruang bercahaya",
    },
  },
  {
    slug: "waraqah-dan-wahyu",
    number: "04",
    title: "Waraqah bin Naufal dan Asal-Usul Wahyu",
    excerpt:
      "Orang pertama yang memvalidasi pengalaman Muhammad adalah sepupu isterinya — seorang pendeta Kristen yang hafal kitab suci Ibrani. Bertanya siapa yang sebenarnya membentuk narasi awal Islam bukan pertanyaan yang mudah dijawab.",
    surah: "Al-An'am 6:19 · Yunus 10:37",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/04-waraqah-bin-naufal-dan-asal-usul-wahyu-illustration.png",
      alt: "Ilustrasi editorial figur tua berjanggut di lanskap gurun",
    },
  },
  {
    slug: "wahyu-konvenien",
    number: "05",
    title: "Ketika Wahyu Mengikuti Kepentingan Pribadi Nabi",
    excerpt:
      "Ada pola di ayat-ayat Madaniyah: wahyu turun tepat saat Muhammad menghadapi masalah personal — konflik rumah tangga, ketertarikan pada perempuan tertentu, kritik publik, atau kebutuhan finansial. Pola ini bisa diperiksa langsung dari teks.",
    surah: "Al-Ahzab 33:50 · At-Tahrim 66:1",
    date: "Mei 2026",
    readTime: "12 menit",
    image: {
      src: "/article-images/05-ketika-wahyu-mengikuti-kepentingan-pribadi-nabi-illustration.png",
      alt: "Ilustrasi editorial monumen kepalan tangan batu",
    },
  },
  {
    slug: "lempar-jumrah",
    number: "06",
    title: "Ritual yang Tidak Ada dalam Al-Quran",
    excerpt:
      "Al-Quran cukup detail soal haji — ihram, wukuf, thawaf, sa'i, kurban. Tapi lempar jumrah tidak disebut satu kali pun. Seluruh dasarnya berasal dari hadis dan tradisi Arab yang sudah ada sebelum Islam.",
    surah: "Al-Baqarah 2:196 · Al-Hajj 22:27",
    date: "Mei 2026",
    readTime: "7 menit",
    image: {
      src: "/article-images/06-ritual-yang-tidak-ada-dalam-al-quran-illustration.png",
      alt: "Ilustrasi editorial kerumunan ritual di dekat dinding batu monumental",
    },
  },
  {
    slug: "warisan-pagan-arab",
    number: "07",
    title: "Kaaba, Allah, dan Apa yang Ada Sebelumnya",
    excerpt:
      "Kaaba punya sejarah panjang sebagai kuil politeistik. Nama Allah muncul jauh sebelum Islam. Ritual haji sudah berlangsung berabad-abad sebelum Muhammad. Ini bukan tuduhan — ini catatan historis yang bisa diperiksa.",
    surah: "An-Najm 53:19 · Al-Ankabut 29:61",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/07-kaaba-allah-dan-apa-yang-ada-sebelumnya-illustration.png",
      alt: "Ilustrasi editorial bangunan kubus gelap di halaman ziarah kuno",
    },
  },
  {
    slug: "kritik-quran",
    number: "08",
    title: "Apa yang Terlihat Setelah Teks Diperiksa",
    excerpt:
      "Al-Quran disusun bukan secara kronologis. Proses kompilasi menunjukkan variasi dan kehilangan materi. Ada kontradiksi internal yang tidak diselesaikan oleh doktrin abrogasi. Ada klaim ilmiah yang bermasalah.",
    surah: "Al-Baqarah 2:23 · Al-Hijr 15:9",
    date: "Mei 2026",
    readTime: "14 menit",
    image: {
      src: "/article-images/08-apa-yang-terlihat-setelah-teks-diperiksa-illustration.png",
      alt: "Ilustrasi editorial kaca pembesar di atas halaman manuskrip",
    },
  },
  {
    slug: "preservasi-quran",
    number: "09",
    title: 'Mitos "Preservasi Sempurna" Al-Quran',
    excerpt:
      "Manuskrip Sana'a memuat teks yang dihapus dan ditulisi ulang. 4.000 varian terdokumentasikan dari 14 manuskrip tertua. Seperempat kosakata Al-Quran bukan dari Arab. Kronologi pembentukannya tidak cocok dengan narasi 22 tahun pewahyuan.",
    surah: "Yusuf 12:2 · Al-Hijr 15:9",
    date: "Mei 2026",
    readTime: "15 menit",
    image: {
      src: "/article-images/09-mitos-preservasi-sempurna-al-quran-illustration.png",
      alt: "Ilustrasi editorial fragmen manuskrip tua diperiksa dengan kaca pembesar",
    },
  },
  {
    slug: "kurban-ibrahim",
    number: "10",
    title: "Siapa yang Hampir Disembelih Ibrahim?",
    excerpt:
      "Al-Quran tidak menyebut nama anak Ibrahim. Para sahabat terdekat Nabi tidak sepakat siapa. Al-Hajj 22:37 sendiri mengatakan daging dan darahnya tidak sampai kepada Allah. Dan penyembelihan di Kaaba sudah ada jauh sebelum Islam.",
    surah: "As-Saffat 37:107 · Al-Hajj 22:37",
    date: "Mei 2026",
    readTime: "12 menit",
    image: {
      src: "/article-images/10-siapa-yang-hampir-disembelih-ibrahim-illustration.png",
      alt: "Ilustrasi editorial altar batu kuno dengan pisau dan siluet domba di kejauhan",
    },
  },
  {
    slug: "an-nadr-ibn-al-harith",
    number: "11",
    title: "Orang yang Tidak Bisa Ditebus",
    excerpt:
      "Dari tujuh puluh tawanan Badar, hanya dua yang dieksekusi tanpa tebusan. An-Nadr ibn al-Harith bukan pemimpin militer. Ia ancaman naratif, seorang orator yang secara sistematis menantang klaim Al-Quran di majelis yang sama.",
    surah: "Al-Anfal 8:31 · Al-Baqarah 2:23",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/11-orang-yang-tidak-bisa-ditebus-illustration.png",
      alt: "Ilustrasi editorial kantong tebusan, gulungan tertutup, dan pedang di jalan gurun",
    },
  },
  {
    slug: "allah-mekah-madinah",
    number: "12",
    title: "Allah di Mekah, Allah di Madinah",
    excerpt:
      "Al-Quran menyebut anggur sebagai rezeki di Mekah, lalu menyebutnya perbuatan setan di Madinah. Dari toleransi ke perintah membunuh, dari kesetaraan ke hierarki — semuanya berkorelasi dengan satu hal: kekuasaan.",
    surah: "At-Taubah 9:29 · An-Nahl 16:67",
    date: "Mei 2026",
    readTime: "13 menit",
    image: {
      src: "/article-images/12-allah-di-mekah-allah-di-madinah-illustration.png",
      alt: "Ilustrasi editorial dua kota historis dihubungkan jalan manuskrip dari anggur ke palu hukum",
    },
  },
  {
    slug: "ashabul-kahfi",
    number: "13",
    title: "Gua, Anjing, dan Naskah yang Sudah Ada Sembilan Puluh Tahun Sebelumnya",
    excerpt:
      "Kisah Ashabul Kahfi di Al-Quran punya pendahulu yang bisa dilacak: naskah Syriac abad ke-6, ditulis Jacob of Sarug, dengan detail yang sama persis — termasuk anjing di depan gua dan koin yang sudah tidak berlaku.",
    surah: "Al-Kahf 18:22 · Al-Kahf 18:9",
    date: "Mei 2026",
    readTime: "11 menit",
    image: {
      src: "/article-images/13-gua-anjing-dan-naskah-yang-sudah-ada-sembilan-puluh-tahun-sebelumnya-illustration.png",
      alt: "Ilustrasi editorial gua malam dengan anjing, koin kuno, dan naskah tua",
    },
  },
  {
    slug: "bumi-datar",
    number: "14",
    title: "Bumi yang Dihamparkan",
    excerpt:
      "Al-Quran menggunakan lima kata berbeda untuk menggambarkan bumi sebagai permukaan yang dibentangkan. Tafsir al-Jalalayn pada abad ke-15 mengakui ini secara eksplisit: bumi datar, bukan bola. Para mufasir itu tahu ada klaim sebaliknya dari astronomi Yunani, dan tetap memilih bacaan literal.",
    surah: "Al-Ghasyiyah 88:20 · Al-Kahf 18:86",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/14-bumi-yang-dihamparkan-illustration.png",
      alt: "Ilustrasi editorial diagram kosmologi bumi terhampar di atas perkamen tua",
    },
  },
  {
    slug: "tidak-ada-paksaan",
    number: "15",
    title: "Tidak Ada Paksaan",
    excerpt:
      "Al-Baqarah 2:256 menyatakan tidak ada paksaan dalam agama. Al-Kahfi 18:29 menyebutkan percaya atau tidak percaya adalah pilihan terbuka. Tapi fiqh klasik dari empat mazhab besar menetapkan hukuman mati bagi yang keluar, dan mekanisme hukumnya menguji iman, bukan tindakan.",
    surah: "Al-Baqarah 2:256 · An-Nisa 4:89",
    date: "Mei 2026",
    readTime: "10 menit",
  },
  {
    slug: "nikah-mutah",
    number: "16",
    title: "Kata yang Satu Ini",
    excerpt:
      "Tiga mufasir klasik terbesar sepakat bahwa An-Nisa 4:24 berbicara tentang nikah mut'ah. Tidak ada ayat Quran yang membatalkannya. Yang melarangnya adalah Umar bin Khattab, dan Umar sendiri yang mencatatkan pengakuan itu dalam Shahih Muslim.",
    surah: "An-Nisa 4:24 · Al-Tahrim 66:1",
    date: "Mei 2026",
    readTime: "10 menit",
  },
];

export default function ArtikelPage() {
  return (
    <main className="qurai-page flex min-h-screen flex-col bg-fixed">
      <ArticleNav />

      <div className="mx-auto flex-1 w-[min(1120px,calc(100%_-_1.4rem))] px-0 pb-24 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-36">
        <div className="mb-16 sm:mb-20">
          <h1 className="font-serif-reading text-[2.4rem] italic leading-tight text-[var(--qurai-text)] sm:text-[3.2rem]">
            Ruang Analisis
          </h1>
          <p className="mt-5 max-w-[58ch] text-sm leading-8 text-[var(--qurai-muted)]">
            Esai yang menguji klaim, riwayat, dan logika internal sebuah topik
            sampai titik paling terang yang bisa dicapai.
          </p>
        </div>

        <div className="grid gap-[1px] border border-[var(--qurai-border)] bg-[var(--qurai-border)]">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikel/${article.slug}`}
              className="group flex flex-col gap-6 bg-[var(--qurai-surface)] p-7 transition hover:bg-[color-mix(in_srgb,var(--qurai-gold)_8%,var(--qurai-surface))] sm:flex-row sm:items-start sm:gap-10 sm:p-9"
            >
              <div className="shrink-0">
                <span className="font-mono text-[0.6rem] uppercase text-[var(--qurai-gold)]">
                  {article.number}
                </span>
              </div>
              <div className="flex-1">
                <p className="mb-3 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
                  {article.surah} &nbsp;·&nbsp; {article.date} &nbsp;·&nbsp;{" "}
                  {article.readTime}
                </p>
                <h2 className="font-serif-reading text-[1.5rem] italic leading-snug text-[var(--qurai-text)] transition group-hover:text-[var(--qurai-gold)] sm:text-[1.85rem]">
                  {article.title}
                </h2>
                <p className="mt-4 max-w-[62ch] text-sm leading-8 text-[var(--qurai-muted)]">
                  {article.excerpt}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-3 self-stretch sm:w-44 sm:items-end lg:w-52">
                {article.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[0.65rem] border border-[var(--qurai-border)] bg-[var(--qurai-surface-strong)] sm:w-44 lg:w-52">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="(max-width: 640px) calc(100vw - 3.5rem), 208px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}
                <div className="mt-auto font-mono text-[0.7rem] uppercase text-[var(--qurai-quiet)] transition group-hover:text-[var(--qurai-gold)]">
                  Baca →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="mt-auto border-t border-[var(--qurai-border)] px-5 py-7 font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] sm:px-10 lg:px-14">
        Bagian dari{" "}
        <Link
          href="https://rhadzor.id"
          className="text-[var(--qurai-muted)] transition hover:text-[var(--qurai-green)]"
        >
          rhadzor.id
        </Link>
      </footer>
    </main>
  );
}
