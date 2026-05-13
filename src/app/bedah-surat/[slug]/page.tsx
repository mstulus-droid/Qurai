import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { bedahSuratItems, getBedahSuratItem } from "@/lib/bedah-surat";

type Section = {
  title: string;
  paragraphs: string[];
};

type EssayContent = {
  lead: string;
  problemMap: string;
  sections: Section[];
  verseRefs: number[];
};

const essays: Record<string, EssayContent> = {
  "al-fatihah": {
    lead:
      "Al-Fatihah sering dibaca sebagai doa paling dasar dalam Islam: pujian, pengakuan, permintaan petunjuk. Tetapi justru karena ia diletakkan sebagai pembuka, struktur pikirannya penting diperiksa. Ia bukan hanya mengajarkan manusia meminta jalan. Ia juga mengajarkan cara membagi manusia.",
    problemMap:
      "Doa pembuka ini membangun tiga kategori manusia: yang diberi nikmat, yang dimurkai, dan yang sesat. Fokusnya ada pada eksklusivitas jalan lurus, citra Tuhan yang menghukum, dan efek pengulangan harian terhadap cara melihat kelompok lain.",
    sections: [
      {
        title: "Doa yang langsung membuat peta",
        paragraphs: [
          "Bagian awal Al-Fatihah tampak sangat umum. Tuhan dipuji sebagai pemelihara semesta, maha pengasih, dan penguasa hari pembalasan. Pada permukaan, ini bahasa devosi yang wajar: manusia kecil, Tuhan besar, hidup akan diadili.",
          "Tetapi titik beratnya mulai berubah ketika doa itu sampai pada permintaan jalan yang lurus. Jalan itu tidak dijelaskan sebagai pencarian terbuka, melainkan sebagai satu jalur yang sudah dipisahkan dari dua kelompok lain: mereka yang dimurkai dan mereka yang sesat.",
          "Di sini Al-Fatihah tidak hanya berbicara tentang spiritualitas. Ia membentuk peta sosial: ada kelompok yang berada di jalur benar, ada kelompok yang menjadi contoh kegagalan, dan ada kelompok yang tersesat dari arah yang dianggap sah.",
        ],
      },
      {
        title: "Satu jalan, banyak manusia",
        paragraphs: [
          "Masalahnya bukan karena sebuah agama percaya dirinya benar. Hampir semua tradisi besar punya klaim kebenaran. Masalahnya muncul ketika pembuka utama sebuah kitab menjadikan kebenaran itu tunggal, eksklusif, dan dibaca berulang sebagai identitas harian.",
          "Jika manusia benar-benar beragam dalam bahasa, sejarah, pengalaman, luka, dan cara memahami makna, mengapa petunjuk ilahi dibingkai seolah hanya ada satu lintasan yang sah? Pertanyaan ini tidak otomatis membatalkan iman, tetapi ia mengguncang klaim bahwa teks ini sedang berbicara sebagai kebijaksanaan universal.",
          "Yang tampak justru pola yang sangat manusiawi: komunitas membangun batas. Di dalam batas ada 'kami' yang diberi nikmat. Di luar batas ada 'mereka' yang salah arah atau dimurkai.",
        ],
      },
      {
        title: "Murka sebagai bahasa Tuhan",
        paragraphs: [
          "Ayat terakhir juga membawa gambaran Tuhan yang emosional. Ada kelompok yang disebut berada di bawah murka. Dalam bahasa keagamaan, ini sering dianggap biasa. Tetapi jika dibaca kritis, ia memindahkan emosi manusia ke dalam citra Tuhan: Tuhan yang menilai, bereaksi, dan marah kepada kelompok tertentu.",
          "Konsep seperti ini kuat secara psikologis. Ia membuat keyakinan terasa serius karena ada ancaman di baliknya. Namun kekuatannya juga problematis: spiritualitas menjadi dibangun bukan hanya di atas pencarian kebenaran, tetapi juga rasa takut salah kelompok.",
          "Ketika Tuhan diperkenalkan sebagai raja hari pembalasan sejak awal, orientasi batin pembaca ikut dibentuk. Ia tidak hanya belajar menyembah. Ia belajar bahwa hidup berjalan menuju pengadilan kosmik.",
        ],
      },
      {
        title: "Pengulangan yang membentuk identitas",
        paragraphs: [
          "Al-Fatihah bukan teks yang dibaca sesekali. Dalam praktik shalat, ia diulang terus-menerus. Itu membuatnya bekerja bukan hanya sebagai doa, tetapi sebagai latihan identitas.",
          "Setiap pengulangan menegaskan kembali tiga hal: ada jalan lurus, ada kelompok yang diberi nikmat, dan ada kelompok yang harus dihindari. Lama-kelamaan, pembagian itu bisa terasa alamiah bahkan sebelum seseorang sempat memeriksanya.",
          "Di titik ini, kritik terhadap Al-Fatihah bukan sekadar kritik terhadap tujuh ayat. Ia menjadi kritik terhadap fondasi psikologis yang ditanamkan oleh teks pembuka: dunia dibagi berdasarkan kedekatannya dengan jalan yang diklaim satu-satunya benar.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Jika Al-Fatihah dibaca sebagai puisi doa, ia ringkas dan kuat. Tetapi jika dibaca sebagai dasar teologi sosial, ia membawa masalah besar: pluralitas manusia tidak diberi ruang yang cukup.",
          "Surat ini membuka kitab bukan dengan pertanyaan, melainkan dengan klasifikasi. Ia tidak mengajak pembaca menjelajahi banyak kemungkinan kebenaran, tetapi mengajaknya meminta agar tetap berada di satu jalan dan dijauhkan dari dua kategori manusia yang gagal.",
          "Bagi pembaca kritis, di situlah persoalannya. Al-Fatihah tidak hanya mengajarkan manusia berdoa. Ia mengajarkan manusia melihat manusia lain dari dalam peta benar, dimurkai, dan sesat.",
        ],
      },
    ],
    verseRefs: [1, 2, 4, 5, 6, 7],
  },
  "al-baqarah": {
    lead:
      "Al-Baqarah adalah surat yang berat karena ia memuat banyak hal sekaligus: identitas komunitas baru, polemik dengan Bani Israel, hukum keluarga, perang, ekonomi, qisas, dan doktrin penggantian ayat. Jika Al-Fatihah adalah pembuka, Al-Baqarah adalah ruangan besar tempat proyek sosial Islam mulai disusun.",
    problemMap:
      "Surat ini memuat hukum keluarga, perang, qisas, riba, polemik Bani Israel, dan doktrin penggantian ayat. Fokusnya ada pada bagaimana hukum sosial abad ke-7 diberi status wahyu yang diklaim berlaku lintas zaman.",
    sections: [
      {
        title: "Surat yang sedang membangun komunitas",
        paragraphs: [
          "Al-Baqarah terasa sangat Madaniyah: ia tidak hanya bicara iman, tetapi juga aturan. Di dalamnya ada cara berpuasa, cara menikah, cara bercerai, cara berutang, cara berperang, dan cara membedakan komunitas sendiri dari komunitas lain.",
          "Karena itu, membaca Al-Baqarah sebagai teks spiritual murni sering membuat banyak bagian tampak janggal. Surat ini lebih tepat dibaca sebagai teks pembentukan masyarakat: siapa yang masuk, siapa yang dicurigai, apa yang boleh, apa yang dilarang, dan siapa yang punya otoritas.",
          "Dari sini muncul persoalan utama: jika aturan-aturan itu diklaim abadi, maka bias sosial abad ke-7 ikut dibawa sebagai hukum ilahi.",
        ],
      },
      {
        title: "Perempuan di bawah hukum laki-laki",
        paragraphs: [
          "Beberapa bagian Al-Baqarah menempatkan laki-laki dalam posisi legal yang lebih kuat. Ayat tentang perceraian menyebut laki-laki memiliki derajat atas perempuan. Ayat utang-piutang memberi bobot kesaksian dua perempuan setara dengan satu laki-laki dalam konteks tertentu.",
          "Pembelaan klasik biasanya mengatakan aturan ini sesuai konteks sosial saat itu. Tetapi pembelaan itu justru membuka pertanyaan yang lebih tajam: apakah ini wahyu yang melampaui zamannya, atau aturan yang terikat pada asumsi sosial zamannya?",
          "Kalau teks ilahi memang hendak menegakkan keadilan universal, mengapa ia tidak memotong bias patriarkal sejak awal? Mengapa ia justru mengabadikan hierarki itu di dalam bahasa hukum?",
        ],
      },
      {
        title: "Perang sebagai kewajiban",
        paragraphs: [
          "Al-Baqarah juga memuat ayat-ayat perang. Ada bagian yang membatasi perang pada pihak yang memerangi terlebih dahulu, tetapi ada pula pernyataan bahwa perang diwajibkan meskipun dibenci.",
          "Di sini, kekerasan tidak sekadar muncul sebagai tragedi sejarah. Ia mendapat bahasa kewajiban. Perang menjadi sesuatu yang dapat dibingkai sebagai jalan ketaatan.",
          "Masalahnya bukan apakah komunitas awal Islam pernah harus mempertahankan diri. Masalahnya adalah ketika perintah perang masuk ke teks suci dan terus dibaca lintas abad, lepas dari situasi politik yang melahirkannya.",
        ],
      },
      {
        title: "Identitas yang dibangun lewat lawan",
        paragraphs: [
          "Bagian panjang tentang Bani Israel memperlihatkan pola yang berulang: kisah-kisah lama diambil, diceritakan ulang, lalu dipakai untuk menjelaskan mengapa komunitas terdahulu gagal dan komunitas baru harus mengambil alih posisi moral.",
          "Secara sastra, ini efektif. Komunitas baru mendapat silsilah makna. Secara sosial, ini berbahaya jika berubah menjadi generalisasi tentang kelompok agama lain.",
          "Ketika satu kelompok terus digambarkan sebagai pengingkar, pembangkang, atau pengkhianat perjanjian, pembaca mudah membawa citra itu dari teks ke manusia nyata. Kritik terhadap teks harus berhenti pada teks dan struktur narasinya, bukan berubah menjadi kebencian terhadap orang Yahudi atau Kristen.",
        ],
      },
      {
        title: "Qisas, riba, dan hukum yang tidak selesai",
        paragraphs: [
          "Al-Baqarah juga memuat qisas: balasan yang setara untuk pembunuhan. Teksnya mencoba memberi struktur pada balas dendam, tetapi tetap bergerak dalam logika pembalasan. Fokusnya belum menjadi rehabilitasi, pencegahan sosial, atau pemulihan korban dalam pengertian modern.",
          "Larangan riba pun menghadirkan persoalan lain. Ia mengecam praktik eksploitasi ekonomi, tetapi tidak selalu memberi batas yang mudah diterapkan antara bunga, keuntungan, risiko, dan transaksi modern. Akibatnya, perdebatan terus berjalan bukan karena manusia kurang taat, melainkan karena teksnya memang tidak memberi sistem ekonomi yang lengkap.",
          "Ini pola yang sering muncul dalam surat ini: aturan terasa tegas ketika dibaca sebagai slogan, tetapi menjadi rumit ketika diterapkan pada dunia yang lebih luas dari masyarakat pertama penerimanya.",
        ],
      },
      {
        title: "Ayat yang diganti",
        paragraphs: [
          "Salah satu ayat paling penting dalam Al-Baqarah adalah ayat tentang penggantian ayat. Teks menyatakan bahwa ayat yang dihapus atau dilupakan akan diganti dengan yang lebih baik atau sepadan.",
          "Secara teologis, ini biasanya dijelaskan sebagai kebijaksanaan bertahap. Tetapi secara kritis, ia menimbulkan pertanyaan sederhana: jika sumbernya mahatahu, mengapa perlu ada revisi dalam pesan yang sama?",
          "Konsep naskh membuat sejarah pewahyuan terlihat seperti proses penyesuaian. Itu bisa masuk akal untuk gerakan manusia yang sedang merespons keadaan. Tetapi ia jauh lebih sulit dijelaskan sebagai firman final dari pengetahuan yang sempurna sejak awal.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Baqarah adalah surat pembentukan otoritas. Ia mengatur tubuh, keluarga, perang, ekonomi, ibadah, dan ingatan kolektif. Justru karena luas, ia memperlihatkan dengan jelas ketegangan antara klaim ilahi dan konteks sosial yang sangat manusiawi.",
          "Bagian-bagian terbaiknya bisa dibaca sebagai upaya menertibkan masyarakat. Bagian-bagian tersulitnya menunjukkan hukum yang bias gender, bahasa perang, generalisasi kelompok lain, dan mekanisme revisi wahyu.",
          "Jika surat ini dibaca sebagai dokumen sejarah komunitas awal, banyak hal menjadi dapat dimengerti. Jika dibaca sebagai hukum universal yang sempurna, pertanyaannya mulai menumpuk.",
        ],
      },
    ],
    verseRefs: [35, 36, 106, 178, 179, 190, 194, 216, 217, 223, 228, 275, 282],
  },
  "ali-imran": {
    lead:
      "Ali Imran banyak bergerak di wilayah perdebatan: tentang Yesus, Ahli Kitab, siapa umat terbaik, bagaimana membaca kekalahan Uhud, dan bagaimana menjaga batas komunitas. Ia bukan surat yang tenang. Ia seperti teks yang sedang berbicara di tengah gesekan teologis dan politik.",
    problemMap:
      "Surat ini bergerak di sekitar Yesus, Ahli Kitab, batas pertemanan, klaim umat terbaik, dan tafsir atas kekalahan Uhud. Fokusnya ada pada cara teks membangun identitas komunitas melalui polemik dengan kelompok lain.",
    sections: [
      {
        title: "Yesus yang dibaca ulang",
        paragraphs: [
          "Ali Imran mengambil figur Yesus yang sudah hidup dalam tradisi Kristen, lalu menempatkannya dalam kerangka Islam. Ia lahir secara ajaib, diberi mukjizat, dan dikaitkan dengan Maryam. Tetapi kesimpulan teologis Kristen ditolak.",
          "Pola ini menciptakan ketegangan. Mukjizat-mukjizat besar diterima karena berguna untuk mengangkat status kenabian Yesus, tetapi makna yang diberikan komunitas Kristen terhadap Yesus dipotong. Hasilnya adalah Yesus yang akrab sekaligus asing.",
          "Pertanyaan kritisnya: apakah ini koreksi ilahi terhadap tradisi Kristen, atau pembacaan ulang dari luar yang mengambil bagian tertentu dan menolak bagian yang tidak cocok dengan teologi baru?",
        ],
      },
      {
        title: "Klaim kitab yang diubah",
        paragraphs: [
          "Surat ini juga menuduh sebagian Ahli Kitab memutar lidah atau menyamarkan isi kitab. Klaim seperti ini penting dalam polemik Islam, karena ia menjelaskan mengapa versi Quran berbeda dari tradisi Yahudi dan Kristen yang lebih tua.",
          "Tetapi sebagai argumen sejarah, klaim itu membutuhkan bukti. Jika Injil atau tradisi sebelumnya diubah secara mendasar, kapan perubahan itu terjadi, oleh siapa, dan naskah mana yang menjadi pembanding?",
          "Tanpa bukti yang dapat diperiksa, tuduhan perubahan kitab bekerja lebih sebagai strategi teologis: jika teks lama tidak cocok dengan teks baru, teks lama dianggap rusak.",
        ],
      },
      {
        title: "Batas pertemanan dan kecurigaan sosial",
        paragraphs: [
          "Ali Imran memuat larangan menjadikan orang kafir sebagai wali atau teman kepercayaan dalam konteks tertentu. Pembelaan kontekstual sering mengatakan ini terkait konflik politik. Tetapi teksnya tetap membawa pola kecurigaan terhadap luar kelompok.",
          "Ketika dibaca lintas zaman, ayat seperti ini mudah berubah dari kewaspadaan politik menjadi jarak sosial. Orang di luar iman tidak lagi dilihat sebagai manusia yang kompleks, melainkan sebagai risiko.",
          "Di sinilah teks agama punya efek sosial yang panjang. Satu ayat yang lahir dalam ketegangan komunitas bisa diwarisi sebagai alasan untuk membatasi kedekatan, persahabatan, bahkan kepercayaan lintas agama.",
        ],
      },
      {
        title: "Umat terbaik dan bahaya superioritas",
        paragraphs: [
          "Ayat tentang umat terbaik memberi identitas yang sangat kuat kepada komunitas Muslim. Mereka diposisikan sebagai kelompok terbaik yang dilahirkan untuk manusia karena menyeru kebaikan, mencegah kemungkaran, dan beriman kepada Allah.",
          "Secara internal, ayat ini bisa memotivasi etika. Tetapi secara kritis, ia juga membawa risiko superioritas. Ketika sebuah komunitas diberi status terbaik oleh teks sucinya sendiri, batas antara tanggung jawab moral dan rasa lebih tinggi menjadi tipis.",
          "Masalahnya bukan dorongan untuk berbuat baik. Masalahnya adalah klaim peringkat spiritual kolektif. Sejarah menunjukkan bahwa klaim seperti ini mudah berubah menjadi cara melihat kelompok lain sebagai lebih rendah.",
        ],
      },
      {
        title: "Uhud dan teologi setelah kekalahan",
        paragraphs: [
          "Bagian tentang Perang Uhud memperlihatkan bagaimana teks menafsirkan kekalahan. Kekalahan tidak dibiarkan sebagai kegagalan strategi semata. Ia diberi makna: ujian, akibat ketidaktaatan, penyaringan iman, dan pelajaran bagi komunitas.",
          "Secara psikologis, ini sangat efektif. Komunitas yang kalah tidak hancur, karena kekalahan diberi tempat dalam rencana Tuhan. Tetapi pola ini juga sangat elastis: menang adalah pertolongan, kalah adalah ujian.",
          "Elastisitas seperti ini membuat klaim teologis sulit diuji. Apa pun hasilnya, narasi bisa disusun setelah kejadian agar tetap mendukung keyakinan awal.",
        ],
      },
      {
        title: "Ayat jelas, ayat samar",
        paragraphs: [
          "Ali Imran juga membedakan ayat yang jelas dan ayat yang samar. Ini penting karena Al-Quran di tempat lain menyebut dirinya sebagai kitab yang jelas. Jika sebagian ayat hanya diketahui maknanya oleh Allah, maka klaim kejelasan itu perlu dibaca lebih hati-hati.",
          "Bagi tradisi tafsir, keberadaan ayat samar membuka ruang kedalaman. Bagi pembaca kritis, ia membuka ruang ketidakpastian yang dapat dipakai untuk menunda pertanyaan sulit.",
          "Sebuah kitab petunjuk yang memuat bagian-bagian tidak jelas mungkin masih bisa bermakna. Tetapi ia tidak lagi sesederhana klaim 'jelas' yang sering diulang dalam dakwah.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Ali Imran adalah surat identitas. Ia menjawab Kristen, menegur Ahli Kitab, membatasi relasi sosial, memberi status tinggi kepada komunitas sendiri, dan menjelaskan kekalahan militer sebagai pelajaran iman.",
          "Sebagai dokumen komunitas yang sedang bertahan di tengah polemik, ia masuk akal. Sebagai wahyu universal yang netral terhadap sejarah, ia jauh lebih sulit dibaca.",
          "Yang terlihat bukan hanya suara langit, melainkan juga suara komunitas yang sedang berdebat, terluka, membangun batas, dan mencari makna dari kemenangan maupun kekalahan.",
        ],
      },
    ],
    verseRefs: [7, 28, 45, 59, 64, 75, 78, 110, 118, 121, 145, 154, 169],
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

export function generateStaticParams() {
  return bedahSuratItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getBedahSuratItem(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title}: ${item.subtitle} | Qurai`,
    description: item.excerpt,
    alternates: {
      canonical: `/bedah-surat/${item.slug}`,
    },
    openGraph: {
      title: `${item.title}: ${item.subtitle} | Qurai`,
      description: item.excerpt,
      url: `/bedah-surat/${item.slug}`,
      type: "article",
      images: ["/brand/qurai-app-icon-dark.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.title}: ${item.subtitle} | Qurai`,
      description: item.excerpt,
      images: ["/brand/qurai-app-icon-dark.png"],
    },
  };
}

export default async function BedahSuratDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getBedahSuratItem(slug);
  const essay = essays[slug];

  if (!item || !essay) {
    notFound();
  }

  return (
    <main className="qurai-page min-h-screen bg-fixed">
      <ArticleNav backHref="/bedah-surat" backLabel="Bedah Surat" />

      <article className="mx-auto w-[min(740px,calc(100%_-_1.4rem))] pb-32 pt-32 sm:w-[min(740px,calc(100%_-_2rem))] sm:pt-40">
        <header className="mb-14">
          <Link
            href="/bedah-surat"
            className="mb-8 inline-block font-mono text-[0.62rem] uppercase text-[var(--qurai-quiet)] transition hover:text-[var(--qurai-gold)]"
          >
            ← Bedah Surat
          </Link>
          <p className="mb-4 font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
            QS {item.number} &nbsp;·&nbsp; {item.range} &nbsp;·&nbsp;{" "}
            {item.classification} &nbsp;·&nbsp; {item.readTime}
          </p>
          <h1 className="font-serif-reading text-[2.2rem] italic leading-[1.22] text-[var(--qurai-text)] sm:text-[2.85rem]">
            {item.title}: {item.subtitle}
          </h1>
          <p className="font-serif-reading mt-6 text-[1.12rem] italic leading-relaxed text-[var(--qurai-muted)] sm:text-[1.22rem]">
            {essay.lead}
          </p>
        </header>

        <div className="mb-14 rounded-[1.25rem] border border-[var(--qurai-border)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--qurai-gold)_12%,var(--qurai-surface)),var(--qurai-surface-strong)_58%,color-mix(in_srgb,var(--qurai-green)_12%,var(--qurai-surface)))] p-6 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.72)] sm:p-8">
          <p className="font-mono text-[0.58rem] uppercase text-[var(--qurai-gold)]">
            Peta Masalah
          </p>
          <p className="mt-4 font-serif-reading text-[1.25rem] italic leading-relaxed text-[var(--qurai-text)]">
            {essay.problemMap}
          </p>
        </div>

        <div className="ornament-divider mb-14" aria-hidden />

        <div className="font-serif-reading space-y-7 text-[1.08rem] leading-[1.92] text-[var(--qurai-muted)] sm:text-[1.18rem]">
          {essay.sections.map((section) => (
            <section key={section.title} className="space-y-7">
              <h2 className="font-serif-reading pt-6 text-[1.55rem] font-normal text-[var(--qurai-text)] sm:text-[1.75rem]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="ornament-divider mt-16 mb-12" aria-hidden />

        <footer>
          <div>
            <p className="font-mono text-[0.6rem] uppercase text-[var(--qurai-quiet)]">
              Ayat yang dirujuk
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {essay.verseRefs.map((ayat) => (
                <VerseLink key={ayat} surah={item.surahNumber} ayat={ayat}>
                  {item.title} {ayat}
                </VerseLink>
              ))}
            </div>
          </div>
        </footer>

        <ArticleShare title={`${item.title}: ${item.subtitle}`} />
      </article>
    </main>
  );
}
