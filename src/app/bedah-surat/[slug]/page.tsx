import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleNav } from "@/components/article-nav";
import { ArticleShare } from "@/components/article-share";
import { bedahSuratItems, getBedahSuratItem } from "@/lib/bedah-surat";
import {
  getSurahs,
  getVersesBySurahId,
  type SurahListItem,
  type VerseRecord,
} from "@/lib/quran-data";
import { DatabaseUnavailable } from "@/app/database-unavailable";
import { getDatabaseErrorInfo } from "@/lib/db";
import { VersePreviewLink } from "./verse-preview-link";
import { SurahShortcutSidebar } from "./surah-shortcut-sidebar";

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
      "Al-Fatihah biasanya dibaca sebagai doa paling dasar dalam Islam: memuji Tuhan, mengakui ketergantungan manusia, lalu meminta petunjuk. Justru karena dibaca terus-menerus, bagian akhirnya layak diperiksa. Surat ini tidak hanya mengajarkan orang meminta jalan. Ia juga mengajarkan cara membagi manusia.",
    problemMap:
      "Doa pembuka ini membangun tiga kategori manusia: yang diberi nikmat, yang dimurkai, dan yang sesat. Fokusnya ada pada eksklusivitas jalan lurus, citra Tuhan yang menghukum, dan efek pengulangan harian terhadap cara melihat kelompok lain.",
    sections: [
      {
        title: "Doa yang langsung membuat peta",
        paragraphs: [
          "Bagian awal Al-Fatihah tampak sangat umum. Tuhan dipuji sebagai pemelihara semesta, maha pengasih, dan penguasa hari pembalasan. Pada permukaan, ini bahasa devosi yang wajar: manusia kecil, Tuhan besar, hidup akan diadili.",
          "Tetapi titik beratnya berubah ketika doa itu sampai pada Al-Fatihah 1:6-7. Jalan lurus tidak digambarkan sebagai pencarian terbuka, melainkan sebagai satu jalur yang dibedakan dari dua kelompok lain: yang dimurkai dan yang sesat.",
          "Di sini Al-Fatihah tidak hanya berbicara tentang spiritualitas. Ia membentuk peta sosial: ada kelompok yang berada di jalur benar, ada kelompok yang menjadi contoh kegagalan, dan ada kelompok yang tersesat dari arah yang dianggap sah.",
        ],
      },
      {
        title: "Satu jalan, banyak manusia",
        paragraphs: [
          "Masalahnya bukan karena sebuah agama merasa ajarannya benar. Hampir semua tradisi punya klaim seperti itu. Masalahnya muncul ketika pembuka utama sebuah kitab membuat kebenaran itu terasa tunggal, eksklusif, dan diulang sebagai identitas harian.",
          "Jika manusia benar-benar beragam dalam bahasa, sejarah, pengalaman, luka, dan cara memahami makna, mengapa petunjuk ilahi dibingkai seolah hanya ada satu lintasan yang sah? Pertanyaan ini tidak otomatis membatalkan iman, tetapi ia mengguncang klaim bahwa teks ini sedang berbicara sebagai kebijaksanaan universal.",
          "Yang tampak justru pola yang sangat manusiawi: komunitas membangun batas. Di dalam batas ada 'kami' yang diberi nikmat. Di luar batas ada 'mereka' yang salah arah atau dimurkai.",
        ],
      },
      {
        title: "Murka sebagai bahasa Tuhan",
        paragraphs: [
          "Al-Fatihah 1:7 juga membawa gambaran Tuhan yang emosional. Ada kelompok yang disebut berada di bawah murka. Dalam bahasa agama, ini sering dianggap biasa. Tetapi jika dibaca kritis, ia memindahkan bahasa emosi manusia ke citra Tuhan: Tuhan yang menilai, bereaksi, dan marah kepada kelompok tertentu.",
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
          "Jika Al-Fatihah dibaca sebagai puisi doa, ia ringkas dan kuat. Tetapi jika dibaca sebagai dasar cara melihat masyarakat, ia membawa masalah besar: keragaman manusia tidak diberi ruang yang cukup.",
          "Surat ini membuka kitab bukan dengan pertanyaan, melainkan dengan klasifikasi. Ia tidak mengajak pembaca menjelajahi banyak kemungkinan kebenaran, tetapi mengajaknya meminta agar tetap berada di satu jalan dan dijauhkan dari dua kategori manusia yang gagal.",
          "Bagi pembaca kritis, di situlah persoalannya. Al-Fatihah tidak hanya mengajarkan manusia berdoa. Ia mengajarkan manusia melihat manusia lain dari dalam peta benar, dimurkai, dan sesat.",
        ],
      },
    ],
    verseRefs: [1, 2, 4, 5, 6, 7],
  },
  "al-baqarah": {
    lead:
      "Al-Baqarah adalah surat yang berat karena isinya sangat banyak: identitas komunitas baru, polemik dengan Bani Israel, hukum keluarga, perang, ekonomi, qisas, dan gagasan bahwa ayat bisa diganti. Jika Al-Fatihah adalah pembuka, Al-Baqarah adalah ruangan besar tempat proyek sosial Islam mulai disusun.",
    problemMap:
      "Surat ini memuat hukum keluarga, perang, qisas, riba, polemik Bani Israel, dan doktrin penggantian ayat. Fokusnya ada pada bagaimana hukum sosial abad ke-7 diberi status wahyu yang diklaim berlaku lintas zaman.",
    sections: [
      {
        title: "Surat yang sedang membangun komunitas",
        paragraphs: [
          "Al-Baqarah terasa sangat Madaniyah: ia tidak hanya bicara iman, tetapi juga aturan. Di dalamnya ada cara berpuasa, menikah, bercerai, berutang, berperang, dan membedakan komunitas sendiri dari komunitas lain.",
          "Karena itu, membaca Al-Baqarah sebagai teks spiritual murni sering membuat banyak bagian tampak janggal. Surat ini lebih tepat dibaca sebagai teks pembentukan masyarakat: siapa yang masuk, siapa yang dicurigai, apa yang boleh, apa yang dilarang, dan siapa yang punya otoritas.",
          "Dari sini muncul persoalan utama: jika aturan-aturan itu diklaim abadi, maka bias sosial abad ke-7 ikut dibawa sebagai hukum ilahi.",
        ],
      },
      {
        title: "Perempuan di bawah hukum laki-laki",
        paragraphs: [
          "Beberapa bagian Al-Baqarah menempatkan laki-laki dalam posisi hukum yang lebih kuat. Al-Baqarah 2:228 menyebut laki-laki punya satu derajat di atas perempuan dalam konteks perceraian. Al-Baqarah 2:282 memberi bobot kesaksian dua perempuan setara dengan satu laki-laki dalam urusan utang tertentu.",
          "Pembelaan klasik biasanya mengatakan aturan ini sesuai konteks sosial saat itu. Tetapi pembelaan itu justru membuka pertanyaan yang lebih tajam: apakah ini wahyu yang melampaui zamannya, atau aturan yang terikat pada asumsi sosial zamannya?",
          "Kalau teks ilahi memang hendak menegakkan keadilan universal, mengapa ia tidak memotong bias patriarkal sejak awal? Mengapa ia justru mengabadikan hierarki itu di dalam bahasa hukum?",
        ],
      },
      {
        title: "Perang sebagai kewajiban",
        paragraphs: [
          "Al-Baqarah juga memuat ayat-ayat perang. Al-Baqarah 2:190 membatasi perang pada pihak yang memerangi terlebih dahulu, tetapi Al-Baqarah 2:216 menyebut perang diwajibkan meskipun dibenci.",
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
          "Al-Baqarah 2:178-179 memuat qisas: balasan yang setara untuk pembunuhan. Teksnya mencoba memberi struktur pada balas dendam, tetapi tetap bergerak dalam logika pembalasan. Fokusnya belum menjadi rehabilitasi, pencegahan sosial, atau pemulihan korban dalam pengertian modern.",
          "Larangan riba dalam Al-Baqarah 2:275 menghadirkan persoalan lain. Ia mengecam praktik eksploitasi ekonomi, tetapi tidak memberi batas yang mudah diterapkan antara bunga, keuntungan, risiko, dan transaksi modern. Perdebatan terus berjalan bukan hanya karena manusia kurang taat, melainkan karena teksnya memang tidak memberi sistem ekonomi yang lengkap.",
          "Ini pola yang sering muncul dalam surat ini: aturan terasa tegas ketika dibaca sebagai slogan, tetapi menjadi rumit ketika diterapkan pada dunia yang lebih luas dari masyarakat pertama penerimanya.",
        ],
      },
      {
        title: "Ayat yang diganti",
        paragraphs: [
          "Salah satu ayat paling penting dalam Al-Baqarah adalah Al-Baqarah 2:106. Teks itu menyatakan bahwa ayat yang dihapus atau dilupakan akan diganti dengan yang lebih baik atau sepadan.",
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
      "Ali Imran banyak bergerak di wilayah perdebatan: tentang Isa, Ahli Kitab, siapa umat terbaik, bagaimana membaca kekalahan Uhud, dan bagaimana menjaga batas komunitas. Ia bukan surat yang tenang. Ia seperti teks yang sedang berbicara di tengah gesekan teologis dan politik.",
    problemMap:
      "Surat ini bergerak di sekitar Isa, Ahli Kitab, batas pertemanan, klaim umat terbaik, dan tafsir atas kekalahan Uhud. Fokusnya ada pada cara teks membangun identitas komunitas melalui polemik dengan kelompok lain.",
    sections: [
      {
        title: "Isa yang dibaca ulang",
        paragraphs: [
          "Ali Imran 3:45-59 mengambil figur Isa yang sudah dikenal dalam tradisi Kristen, lalu menempatkannya dalam kerangka Islam. Ia lahir secara ajaib, diberi mukjizat, dan dikaitkan dengan Maryam. Tetapi kesimpulan teologis komunitas Kristen ditolak.",
          "Pola ini menciptakan ketegangan. Mukjizat besar diterima karena berguna untuk mengangkat status kenabian Isa, tetapi makna yang diberikan komunitas Kristen terhadap Isa dipotong. Hasilnya adalah Isa yang akrab sekaligus asing bagi dua tradisi.",
          "Pertanyaan kritisnya bukan tradisi mana yang harus dibela. Pertanyaannya lebih sederhana: apakah ini koreksi sejarah, atau pembacaan ulang dari komunitas baru yang mengambil bagian tertentu dan menolak bagian yang tidak cocok dengan teologinya?",
        ],
      },
      {
        title: "Klaim kitab yang diubah",
        paragraphs: [
          "Ali Imran 3:78 menuduh sebagian Ahli Kitab memutar lidah atau menyamarkan isi kitab. Klaim seperti ini penting dalam polemik Islam, karena ia menjelaskan mengapa versi Quran berbeda dari tradisi Yahudi dan Kristen yang lebih tua.",
          "Tetapi sebagai argumen sejarah, klaim itu tetap butuh bukti. Jika kitab atau tradisi sebelumnya diubah secara mendasar, kapan perubahan itu terjadi, oleh siapa, dan naskah mana yang dipakai sebagai pembanding?",
          "Tanpa bukti yang bisa diperiksa, tuduhan perubahan kitab bekerja lebih sebagai strategi polemik: kalau teks lama tidak cocok dengan teks baru, teks lama dianggap rusak. Cara berpikir seperti ini tidak hanya ada dalam Islam; banyak tradisi agama memakai pola serupa ketika berhadapan dengan teks lain.",
        ],
      },
      {
        title: "Batas pertemanan dan kecurigaan sosial",
        paragraphs: [
          "Ali Imran 3:28 dan Ali Imran 3:118 memuat larangan menjadikan orang luar kelompok sebagai wali atau teman kepercayaan dalam konteks tertentu. Pembelaan kontekstual sering mengatakan ini terkait konflik politik. Tetapi teksnya tetap membawa pola kecurigaan terhadap luar kelompok.",
          "Ketika dibaca lintas zaman, ayat seperti ini mudah berubah dari kewaspadaan politik menjadi jarak sosial. Orang di luar iman tidak lagi dilihat sebagai manusia yang kompleks, melainkan sebagai risiko.",
          "Di sinilah teks agama punya efek sosial yang panjang. Satu ayat yang lahir dalam ketegangan komunitas bisa diwarisi sebagai alasan untuk membatasi kedekatan, persahabatan, bahkan kepercayaan lintas agama.",
        ],
      },
      {
        title: "Umat terbaik dan bahaya superioritas",
        paragraphs: [
          "Ali Imran 3:110 memberi identitas yang sangat kuat kepada komunitas Muslim. Mereka diposisikan sebagai kelompok terbaik yang dilahirkan untuk manusia karena menyeru kebaikan, mencegah kemungkaran, dan beriman kepada Allah.",
          "Secara internal, ayat ini bisa memotivasi etika. Tetapi secara kritis, ia juga membawa risiko superioritas. Ketika sebuah komunitas diberi status terbaik oleh teks sucinya sendiri, batas antara tanggung jawab moral dan rasa lebih tinggi menjadi tipis.",
          "Masalahnya bukan dorongan untuk berbuat baik. Masalahnya adalah klaim peringkat spiritual kolektif. Sejarah menunjukkan bahwa klaim seperti ini mudah berubah menjadi cara melihat kelompok lain sebagai lebih rendah.",
        ],
      },
      {
        title: "Uhud dan teologi setelah kekalahan",
        paragraphs: [
          "Bagian tentang Perang Uhud, terutama sekitar Ali Imran 3:121-154, memperlihatkan bagaimana teks menafsirkan kekalahan. Kekalahan tidak dibiarkan sebagai kegagalan strategi semata. Ia diberi makna: ujian, akibat ketidaktaatan, penyaringan iman, dan pelajaran bagi komunitas.",
          "Secara psikologis, ini sangat efektif. Komunitas yang kalah tidak hancur, karena kekalahan diberi tempat dalam rencana Tuhan. Tetapi pola ini juga sangat elastis: menang adalah pertolongan, kalah adalah ujian.",
          "Elastisitas seperti ini membuat klaim teologis sulit diuji. Apa pun hasilnya, narasi bisa disusun setelah kejadian agar tetap mendukung keyakinan awal.",
        ],
      },
      {
        title: "Ayat jelas, ayat samar",
        paragraphs: [
          "Ali Imran 3:7 membedakan ayat yang jelas dan ayat yang samar. Ini penting karena Al-Quran di tempat lain menyebut dirinya sebagai kitab yang jelas. Jika sebagian ayat hanya diketahui maknanya oleh Allah, maka klaim kejelasan itu perlu dibaca lebih hati-hati.",
          "Bagi tradisi tafsir, keberadaan ayat samar membuka ruang kedalaman. Bagi pembaca kritis, ia membuka ruang ketidakpastian yang dapat dipakai untuk menunda pertanyaan sulit.",
          "Sebuah kitab petunjuk yang memuat bagian-bagian tidak jelas mungkin masih bisa bermakna. Tetapi ia tidak lagi sesederhana klaim 'jelas' yang sering diulang dalam dakwah.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Ali Imran adalah surat identitas. Ia menjawab tradisi Kristen, menegur Ahli Kitab, membatasi relasi sosial, memberi status tinggi kepada komunitas sendiri, dan menjelaskan kekalahan militer sebagai pelajaran iman.",
          "Sebagai dokumen komunitas yang sedang bertahan di tengah polemik, ia masuk akal. Sebagai wahyu universal yang netral terhadap sejarah, ia jauh lebih sulit dibaca.",
          "Yang terlihat bukan hanya suara langit, melainkan juga suara komunitas yang sedang berdebat, terluka, membangun batas, dan mencari makna dari kemenangan maupun kekalahan.",
        ],
      },
    ],
    verseRefs: [7, 28, 45, 59, 64, 75, 78, 110, 118, 121, 145, 154, 169],
  },
  "an-nisa": {
    lead:
      "An-Nisa' sering disebut surat perempuan, tetapi isinya jauh lebih luas: keluarga, anak yatim, poligami, warisan, konflik rumah tangga, relasi dengan Ahli Kitab, kemunafikan, perang, dan klaim tentang Isa. Justru karena namanya dekat dengan perempuan, surat ini perlu dibaca dengan mata yang tidak buru-buru hormat.",
    problemMap:
      "Surat ini memuat hukum warisan, poligami, relasi suami-istri, otoritas laki-laki, hukuman seksual, perang, polemik terhadap Ahli Kitab, dan penolakan penyaliban Isa. Fokusnya ada pada bagaimana struktur patriarkal dan batas komunitas diberi status hukum ilahi.",
    sections: [
      {
        title: "Perempuan sebagai turunan dan objek hukum",
        paragraphs: [
          "An-Nisa 4:1 membuka dengan gagasan manusia berasal dari satu jiwa dan pasangannya diciptakan darinya. Dalam pembacaan tradisional, ini sering dikaitkan dengan Adam dan Hawa. Masalahnya, narasi seperti ini mudah membentuk hierarki: laki-laki sebagai asal, perempuan sebagai turunan.",
          "Jika dibaca dari pengetahuan modern tentang manusia, asal-usul seperti itu tidak bekerja sebagai penjelasan biologis. Ia lebih dekat dengan mitos asal-usul yang menata relasi sosial: keluarga, keturunan, dan posisi perempuan di dalamnya.",
          "Dari awal, surat ini sudah membawa persoalan: apakah ia sedang membebaskan perempuan, atau justru menempatkan perempuan dalam kerangka hukum yang dibangun dari sudut pandang laki-laki?",
        ],
      },
      {
        title: "Yatim, poligami, dan pintu yang miring",
        paragraphs: [
          "An-Nisa 4:3 sering dipakai sebagai dasar poligami. Ayat itu muncul dalam konteks kekhawatiran terhadap anak yatim, tetapi solusi yang dibuka adalah menikahi perempuan dua, tiga, atau empat, dengan syarat adil.",
          "Pembelaan umum mengatakan ayat ini membatasi praktik lama. Itu mungkin benar secara historis, tetapi tidak menghapus masalah utamanya: mengapa jalan keluar dari problem perlindungan sosial justru membuka akses laki-laki atas lebih banyak perempuan?",
          "Lebih jauh, An-Nisa 4:129 kemudian mengakui bahwa manusia tidak akan mampu berlaku adil sepenuhnya di antara istri-istri. Di sini, sistemnya tampak tahu syaratnya nyaris mustahil, tetapi pintunya tetap dibiarkan terbuka.",
        ],
      },
      {
        title: "Warisan dan matematika hierarki",
        paragraphs: [
          "Bagian warisan dalam An-Nisa 4:7-14 dan An-Nisa 4:176 adalah salah satu bagian hukum paling terkenal. Di sana, perempuan memang diberi bagian, tetapi struktur dasarnya tetap hierarkis: bagian laki-laki setara dua bagian perempuan dalam beberapa konfigurasi.",
          "Secara sejarah, pemberian hak waris kepada perempuan bisa dianggap langkah maju dibanding tradisi yang menyingkirkan mereka. Tetapi pertanyaan kritisnya: mengapa langkah itu berhenti pada setengah, bukan kesetaraan?",
          "Ketika pembagian seperti ini disebut ketetapan Allah, bias sosial zaman itu ikut naik kelas menjadi norma suci. Ia tidak lagi tampak sebagai kompromi historis, melainkan sebagai desain moral yang harus dipertahankan.",
        ],
      },
      {
        title: "Otoritas suami dan disiplin tubuh",
        paragraphs: [
          "An-Nisa 4:34 menjadi pusat persoalan. Laki-laki disebut sebagai pemimpin atas perempuan, lalu istri yang dikhawatirkan nusyuz diberi tahapan nasihat, pisah ranjang, dan pukulan atau tindakan disipliner yang oleh banyak tafsir klasik dibaca secara literal.",
          "Upaya modern sering mencoba melunakkan makna ayat ini. Tetapi fakta bahwa ayatnya perlu terus dilunakkan menunjukkan ada ketegangan besar antara teks dan etika kesetaraan hari ini.",
          "Masalahnya bukan hanya satu kata. Masalahnya adalah struktur: laki-laki diberi posisi pengelola, perempuan ditempatkan sebagai pihak yang dapat didisiplinkan. Ini bukan bahasa kemitraan setara.",
        ],
      },
      {
        title: "Ahli Kitab, Isa, dan batas kebenaran",
        paragraphs: [
          "An-Nisa juga bergerak ke wilayah polemik teologis. Dalam An-Nisa 4:157-159, klaim penyaliban Isa ditolak: mereka tidak membunuh dan tidak menyalibnya, tetapi diserupakan bagi mereka. Ini bukan detail kecil; ia membatalkan salah satu pusat iman Kristen.",
          "An-Nisa 4:171 kemudian menegur Ahli Kitab agar tidak berlebihan dan menolak gagasan trinitas. Dengan begitu, surat ini tidak hanya mengatur komunitas Muslim, tetapi juga mengoreksi tradisi lain dari posisi otoritasnya sendiri.",
          "Sebagai polemik, ini bisa dimengerti. Sebagai sejarah, klaim seperti ini menuntut bukti yang lebih kuat daripada sekadar pernyataan wahyu yang datang belakangan.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "An-Nisa' adalah surat hukum dan batas. Ia memberi bentuk pada keluarga, harta, tubuh, loyalitas, dan kebenaran teologis. Tetapi bentuk itu sangat dipengaruhi dunia patriarkal dan konflik komunitas.",
          "Jika dibaca sebagai dokumen sosial abad ke-7, banyak bagiannya bisa dipahami sebagai negosiasi dengan keadaan. Jika dibaca sebagai hukum moral final, bagian-bagian seperti poligami, warisan setengah, otoritas suami, dan koreksi atas tradisi lain menjadi jauh lebih sulit diterima.",
          "Nama surat ini mungkin perempuan, tetapi pusat kendalinya tetap laki-laki, komunitas sendiri, dan otoritas wahyu yang tidak membuka banyak ruang untuk disanggah.",
        ],
      },
    ],
    verseRefs: [1, 3, 7, 11, 12, 14, 34, 56, 89, 101, 129, 157, 159, 171, 176],
  },
  "al-maidah": {
    lead:
      "Al-Ma'idah terasa seperti surat penegasan. Banyak bagiannya berbicara tentang kontrak, makanan, wudu, hukuman, batas dengan Ahli Kitab, dan kesetiaan komunitas. Ia bukan hanya mengajarkan ritual; ia sedang membangun pagar sosial dan hukum.",
    problemMap:
      "Surat ini memuat aturan makanan, wudu, klaim penyempurnaan agama, relasi dengan Ahli Kitab, hukuman pidana, kisah Bani Israel, dan dialog Isa tentang hidangan dari langit. Fokusnya ada pada ritual, batas komunitas, dan kerasnya hukuman yang diberi legitimasi wahyu.",
    sections: [
      {
        title: "Agama yang disempurnakan lewat aturan",
        paragraphs: [
          "Al-Ma'idah 5:1-3 membuka dengan bahasa kontrak, hewan halal-haram, dan larangan tertentu dalam kondisi ihram. Lalu muncul ayat yang terkenal: hari ini agama telah disempurnakan.",
          "Secara devosional, kalimat itu memberi rasa final. Tetapi secara kritis, menarik bahwa kesempurnaan agama muncul di tengah daftar aturan makanan dan batas ritual. Kesempurnaan di sini terasa sangat legal: tubuh, makanan, dan kepatuhan menjadi pusat.",
          "Jika agama sempurna berarti sistem moral yang paling matang, mengapa bentuknya begitu banyak berupa daftar larangan dan pembeda kelompok?",
        ],
      },
      {
        title: "Batas dengan Ahli Kitab",
        paragraphs: [
          "Al-Ma'idah 5:5 membuka ruang makan dari sembelihan Ahli Kitab dan menikahi perempuan mereka. Di permukaan, ini tampak lebih longgar dibanding ayat-ayat yang keras.",
          "Tetapi surat yang sama juga memuat banyak polemik terhadap Yahudi dan Kristen: tuduhan melanggar perjanjian, menyembunyikan kebenaran, dan menyimpang dalam memahami Isa. Jadi kedekatan sosial dibuka, tetapi kecurigaan teologis tetap kuat.",
          "Hasilnya ambivalen: orang luar bisa disentuh dalam urusan makanan dan nikah, tetapi tetap ditempatkan di bawah koreksi doktrinal komunitas Muslim.",
        ],
      },
      {
        title: "Hukuman yang tubuhnya terlalu nyata",
        paragraphs: [
          "Al-Ma'idah 5:33 dan Al-Ma'idah 5:38 adalah bagian paling keras: hukuman bagi perusuh atau musuh sosial, serta pemotongan tangan bagi pencuri. Ini bukan sekadar nasihat moral, tetapi kekerasan legal yang diarahkan pada tubuh.",
          "Pembelaan klasik biasanya menekankan efek jera dan syarat penerapan yang ketat. Tetapi tetap saja, teks menjadikan mutilasi dan hukuman ekstrem sebagai bagian dari imajinasi keadilan.",
          "Dari perspektif hukum modern, keadilan tidak cukup hanya membuat orang takut. Ia harus proporsional, dapat diperiksa, memberi ruang rehabilitasi, dan tidak menjadikan tubuh manusia sebagai panggung hukuman.",
        ],
      },
      {
        title: "Taat, dengar, dan jangan terlalu bertanya",
        paragraphs: [
          "Al-Ma'idah 5:7 mengingatkan perjanjian ketika orang beriman berkata mendengar dan taat. Lalu pada bagian lain, Al-Ma'idah 5:101 memperingatkan agar tidak menanyakan hal-hal yang jika dijelaskan justru menyusahkan.",
          "Pola ini penting: ketaatan diberi nilai tinggi, sementara pertanyaan tertentu dibuat mencurigakan atau berbahaya. Bagi komunitas yang sedang dibentuk, ini bisa menjaga disiplin. Bagi pembaca kritis, ini bisa menutup ruang pemeriksaan.",
          "Agama yang terlalu sering meminta 'dengar dan taat' mudah berubah dari pencarian moral menjadi budaya patuh.",
        ],
      },
      {
        title: "Isa, hidangan, dan koreksi yang ganjil",
        paragraphs: [
          "Akhir surat membawa kisah hidangan dari langit dan dialog Isa. Al-Ma'idah 5:110 memuat mukjizat yang sebagian terasa dekat dengan tradisi apokrif, seperti membuat burung dari tanah liat lalu hidup.",
          "Al-Ma'idah 5:116 kemudian menampilkan Allah bertanya kepada Isa apakah ia menyuruh manusia menjadikan dirinya dan ibunya sebagai dua tuhan selain Allah. Bagi banyak pembaca Kristen, ini terasa seperti salah sasaran terhadap doktrin mereka.",
          "Di sini terlihat pola polemik: tradisi lain dikoreksi, tetapi kadang dengan representasi yang tidak sepenuhnya sesuai dengan cara tradisi itu memahami dirinya sendiri.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Ma'idah adalah surat batas: batas makanan, batas tubuh, batas komunitas, batas pertanyaan, batas relasi dengan Ahli Kitab. Ia memberi rasa tatanan, tetapi tatanan itu datang dengan harga: kepatuhan kuat dan hukuman keras.",
          "Bagian-bagian yang lebih etis, seperti dorongan berlaku adil dalam Al-Ma'idah 5:8, tetap penting. Namun ia berdampingan dengan hukuman tubuh, polemik tajam, dan struktur ketaatan.",
          "Karena itu, surat ini paling masuk akal dibaca sebagai dokumen komunitas yang sedang memantapkan hukum, bukan sebagai puncak final moralitas manusia.",
        ],
      },
    ],
    verseRefs: [1, 3, 5, 6, 7, 8, 13, 33, 38, 51, 64, 72, 73, 101, 110, 112, 116],
  },
  "al-anam": {
    lead:
      "Al-An'am adalah surat Makkiyah yang panjang dan argumentatif. Ia membela tauhid lewat langit, bumi, hidup-mati, makanan, sejarah umat, dan kritik terhadap berhala. Tetapi berkali-kali, pertanyaan manusia dijawab dengan pola tertutup: Allah tahu, Allah menyesatkan, dan yang menolak dianggap sudah terkunci.",
    problemMap:
      "Surat ini memuat argumen kosmologis, penciptaan manusia dari tanah, klaim wahyu sebagai peringatan, penolakan mukjizat, hati yang tertutup, polemik makanan, kritik syirik, dan ketegangan takdir. Fokusnya ada pada bagaimana bukti alam dipakai untuk menuntut iman sambil ruang skeptis dipersempit.",
    sections: [
      {
        title: "Alam sebagai bukti yang terlalu cepat",
        paragraphs: [
          "Al-An'am 6:1-3 membuka dengan langit, bumi, gelap, terang, dan manusia dari tanah. Seperti banyak surat Makkiyah, alam dipakai sebagai panggung pembuktian: karena dunia ada, maka Allah benar dan wahyu ini benar.",
          "Masalahnya, rasa kagum pada alam tidak otomatis membuktikan klaim teologis tertentu. Langit dan bumi bisa membuat manusia bertanya, tetapi surat ini melompat dari pertanyaan kosmik ke kesimpulan doktrinal yang sudah ditentukan.",
          "Argumen seperti ini kuat bagi orang yang sudah percaya. Bagi orang yang belum menerima premisnya, ia lebih terasa sebagai retorika daripada pembuktian.",
        ],
      },
      {
        title: "Mukjizat yang selalu bisa ditolak",
        paragraphs: [
          "Al-An'am 6:7-9 membayangkan seandainya kitab tertulis turun di atas kertas atau malaikat datang, penolak tetap akan menyebutnya sihir atau tetap tidak percaya. Ini membuat posisi skeptis hampir mustahil menang.",
          "Kalau bukti tidak diberikan, mereka disalahkan karena tidak percaya. Kalau bukti diberikan, teks sudah menyiapkan alasan bahwa mereka tetap akan menolak. Dengan begitu, masalah bukti digeser menjadi masalah moral penolak.",
          "Pola ini menutup kemungkinan evaluasi jujur: ketidakpercayaan selalu dibaca sebagai keras kepala, bukan sebagai akibat bukti yang belum memadai.",
        ],
      },
      {
        title: "Hati yang ditutup dan tanggung jawab manusia",
        paragraphs: [
          "Al-An'am 6:25 menyebut ada penutup pada hati dan sumbatan pada telinga sebagian orang. Di beberapa bagian lain, petunjuk dan kesesatan juga dikaitkan dengan kehendak Allah.",
          "Di sinilah masalah teologisnya tajam. Jika akses memahami kebenaran berada di bawah kendali Allah, mengapa manusia dihukum seolah akses itu sepenuhnya berada di tangannya sendiri?",
          "Surat ini menuntut iman, tetapi juga menggambarkan sebagian manusia seperti sudah dikunci dari dalam. Itu membuat konsep ujian moral menjadi tidak stabil.",
        ],
      },
      {
        title: "Makanan, identitas, dan koreksi adat",
        paragraphs: [
          "Bagian tengah dan akhir Al-An'am banyak berbicara tentang hewan, tanaman, pantangan, dan aturan makanan. Surat ini mengkritik cara kaum musyrik membuat halal-haram berdasarkan tradisi mereka sendiri.",
          "Tetapi kritik terhadap adat itu kemudian diganti dengan otoritas wahyu sendiri. Al-An'am 6:145 menyusun batas makanan, sementara Al-An'am 6:146 menyebut sebagian larangan atas Yahudi sebagai balasan.",
          "Masalahnya bukan bahwa komunitas butuh aturan makan. Masalahnya adalah ketika makanan menjadi alat identitas moral: siapa taat, siapa mengada-ada, siapa dihukum, dan siapa dianggap mengikuti jalan lurus.",
        ],
      },
      {
        title: "Wahyu untuk wilayah tertentu",
        paragraphs: [
          "Al-An'am 6:155-157 menyebut kitab ini diturunkan agar orang tidak berkata bahwa kitab hanya diturunkan kepada dua golongan sebelumnya atau bahwa mereka tidak tahu cara membacanya. Ini memperlihatkan konteks geografis dan komunitas yang jelas.",
          "Surat ini berbicara kepada masyarakat yang merasa berada setelah Yahudi dan Kristen, tetapi belum memiliki kitab sendiri. Dalam konteks sejarah, itu masuk akal. Dalam klaim universal, ia menimbulkan pertanyaan: mengapa wahyu final turun dalam satu bahasa, wilayah, dan momen tertentu?",
          "Universalitasnya harus selalu melewati pintu lokalitas. Itulah ketegangan besar Al-An'am.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-An'am adalah surat yang ingin membuat dunia terlihat penuh tanda. Tetapi tanda-tanda itu tidak dibiarkan terbuka; semuanya diarahkan ke satu kesimpulan yang sudah diputuskan.",
          "Ketika skeptisisme muncul, surat ini sering membacanya sebagai penolakan moral, bukan pertanyaan yang sah. Ketika soal takdir muncul, manusia tetap dihukum meski petunjuk digambarkan berada di tangan Allah.",
          "Akhirnya, Al-An'am memperlihatkan pola teologi tertutup: alam bicara, wahyu memutuskan, dan yang tidak menerima dianggap bukan belum yakin, melainkan bermasalah.",
        ],
      },
    ],
    verseRefs: [1, 2, 7, 8, 9, 19, 20, 25, 39, 59, 100, 108, 125, 145, 146, 148, 153, 155, 157, 158, 160, 165],
  },
  "al-araf": {
    lead:
      "Al-A'raf adalah surat yang penuh panggung: Adam dan Iblis, surga-neraka, penghuni tempat tinggi, rangkaian nabi, Musa dan Firaun, Bani Israel, dan penutup tentang manusia yang dibiarkan sesat. Ia bergerak seperti sejarah besar yang semua jalurnya mengarah pada satu pesan: terima wahyu atau masuk pola kehancuran.",
    problemMap:
      "Surat ini memuat huruf misterius, kehancuran kota, timbangan amal, Adam-Iblis, aurat, rangkaian kisah nabi, hukuman kolektif, Musa-Firaun, Bani Israel, manusia yang diciptakan untuk neraka, dan Allah yang menyesatkan. Fokusnya ada pada ancaman sejarah, determinisme, dan penyederhanaan manusia menjadi pihak yang menerima atau menolak.",
    sections: [
      {
        title: "Pembukaan dengan kota-kota yang jatuh",
        paragraphs: [
          "Al-A'raf dibuka dengan huruf muqattaah, lalu segera mengarahkan pembaca pada peringatan dan kehancuran kota-kota. Al-A'raf 7:4-5 memberi gambaran komunitas yang dihukum tiba-tiba.",
          "Sebagai retorika, ini efektif: pembaca dibuat merasa sejarah penuh contoh hukuman. Tetapi secara etis, kehancuran kolektif selalu membawa pertanyaan tentang individu di dalam komunitas itu.",
          "Apakah semua orang di kota yang dihancurkan sama bersalahnya? Surat ini tidak terlalu tertarik pada pertanyaan itu. Ia memakai kota sebagai simbol moral, bukan kumpulan manusia yang kompleks.",
        ],
      },
      {
        title: "Adam, Iblis, dan dosa yang dipentaskan",
        paragraphs: [
          "Al-A'raf 7:11-25 mengulang kisah Adam dan Iblis. Iblis menolak sujud, diberi waktu, lalu menggoda manusia. Setelah itu, aurat terbuka dan manusia turun ke bumi dalam permusuhan.",
          "Kisah ini menjelaskan dunia sebagai arena godaan. Tetapi ia juga menciptakan pertanyaan: mengapa Iblis diberi izin beroperasi jika hasilnya sudah diketahui? Mengapa manusia ditempatkan dalam ujian dengan penggoda kosmik yang sengaja dibiarkan bekerja?",
          "Di sini kejahatan tidak hanya muncul dari manusia. Ia menjadi bagian dari panggung yang diizinkan oleh Tuhan.",
        ],
      },
      {
        title: "Rangkaian nabi yang berakhir sama",
        paragraphs: [
          "Nuh, Hud, Salih, Luth, Shu'ayb, dan Musa muncul dalam pola yang nyaris berulang: nabi datang, kaum menolak, ancaman muncul, lalu hukuman datang. Secara sastra, repetisi ini membangun tekanan.",
          "Namun repetisi itu juga menyederhanakan sejarah. Kompleksitas politik, ekonomi, dan budaya setiap komunitas diringkas menjadi satu masalah: mereka tidak menerima utusan.",
          "Akibatnya, sejarah berubah menjadi moralitas satu warna. Menerima nabi berarti selamat; menolak berarti pantas dihancurkan.",
        ],
      },
      {
        title: "Musa, Firaun, dan mukjizat sebagai kekuasaan",
        paragraphs: [
          "Bagian Musa dan Firaun memperlihatkan pertarungan tanda: tongkat, tangan putih, sihir, tulah, laut, dan gunung. Mukjizat berfungsi sebagai bukti sekaligus alat penaklukan.",
          "Tetapi pola itu tetap menyisakan pertanyaan. Jika Firaun melihat tanda luar biasa namun tetap menolak, apakah itu kebebasan moral, keras kepala politik, atau bagian dari skenario yang sejak awal diarahkan?",
          "Surat ini tidak membiarkan pertanyaan itu terbuka. Penolakan dibaca sebagai kesombongan, lalu hukuman menjadi wajar.",
        ],
      },
      {
        title: "Manusia yang sudah disiapkan untuk neraka",
        paragraphs: [
          "Al-A'raf 7:179 adalah salah satu ayat paling keras: banyak jin dan manusia diciptakan untuk neraka, punya hati tapi tidak memahami, mata tapi tidak melihat, telinga tapi tidak mendengar, lalu disamakan dengan ternak bahkan lebih sesat.",
          "Ayat ini menggabungkan determinisme dan dehumanisasi. Jika mereka diciptakan untuk neraka, tanggung jawab moral mereka menjadi sulit dipertahankan. Jika mereka disamakan dengan ternak, martabat manusia ikut direndahkan berdasarkan keyakinan.",
          "Al-A'raf 7:186 menambah persoalan: siapa yang disesatkan Allah tidak memiliki pemberi petunjuk. Surat ini menutup ruang keluar justru sambil menuntut manusia bertanggung jawab.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-A'raf adalah surat besar tentang pola. Ia mengajarkan pembaca melihat sejarah sebagai rangkaian penerimaan dan penolakan terhadap wahyu. Tetapi pola itu terlalu rapi untuk kehidupan manusia yang sebenarnya berantakan.",
          "Bagian-bagian paling kuatnya secara retoris justru paling problematik secara etis: hukuman kolektif, izin bagi Iblis, pengulangan kehancuran, dan manusia yang disebut diciptakan untuk neraka.",
          "Jika dibaca sebagai peringatan komunitas, surat ini sangat efektif. Jika dibaca sebagai keadilan universal, ia meninggalkan terlalu banyak manusia di bawah bayang hukuman yang sudah disiapkan.",
        ],
      },
    ],
    verseRefs: [1, 4, 5, 8, 9, 11, 16, 20, 22, 27, 30, 59, 65, 73, 80, 85, 103, 107, 130, 163, 172, 179, 182, 186, 187, 203],
  },
  "al-anfal": {
    lead:
      "Al-Anfal adalah surat Badar: rampasan perang, ketakutan, malaikat, disiplin barisan, tawanan, dan pembagian loyalitas. Tidak seperti surat yang terasa kontemplatif, surat ini sangat politis dan militer. Ia memperlihatkan bagaimana perang tidak hanya diceritakan, tetapi disakralkan.",
    problemMap:
      "Surat ini memuat harta rampasan, definisi iman lewat takut dan taat, janji malaikat, perintah perang, larangan mundur, klaim Allah sebagai pembunuh sebenarnya, dehumanisasi orang kafir, tawanan perang, dan loyalitas berbasis hijrah-jihad. Fokusnya ada pada teologi kemenangan dan legitimasi kekerasan.",
    sections: [
      {
        title: "Rampasan perang sebagai milik Allah dan Rasul",
        paragraphs: [
          "Al-Anfal 8:1 langsung masuk ke pertanyaan harta rampasan. Jawabannya bukan sekadar pembagian administratif, tetapi klaim otoritas: rampasan perang milik Allah dan Rasul.",
          "Di sini ekonomi perang diberi legitimasi religius. Barang yang diambil dari konflik tidak dibahas pertama-tama sebagai problem moral korban, melainkan sebagai objek distribusi dalam komunitas pemenang.",
          "Ini penting karena perang tidak hanya menghasilkan kemenangan simbolik, tetapi juga insentif material. Ketika rampasan disucikan, kekerasan punya hadiah yang tampak sah.",
        ],
      },
      {
        title: "Iman, takut, dan disiplin",
        paragraphs: [
          "Al-Anfal 8:2-4 mendefinisikan orang beriman lewat hati yang gemetar ketika nama Allah disebut, bertambah iman ketika ayat dibacakan, salat, dan infak. Di tengah konteks perang, spiritualitas ini berfungsi sebagai disiplin batin.",
          "Masalahnya, iman sangat dekat dengan rasa takut dan kepatuhan. Ketika keputusan perang dipersoalkan, seperti dalam Al-Anfal 8:5-6, keberatan sebagian pengikut digambarkan sebagai bantahan terhadap kebenaran.",
          "Ruang ragu menyempit. Komunitas yang takut mati tidak dipahami sebagai manusiawi, tetapi sebagai masalah yang harus ditundukkan oleh narasi ilahi.",
        ],
      },
      {
        title: "Malaikat, leher, dan kekerasan yang disakralkan",
        paragraphs: [
          "Al-Anfal 8:9-12 menggambarkan bantuan seribu malaikat dan perintah memukul leher serta ujung jari musuh. Ini adalah salah satu bagian paling jelas tentang keterlibatan supernatural dalam perang.",
          "Ketika kekerasan digambarkan sebagai sesuatu yang didukung malaikat dan diperintah Tuhan, batas moral manusia menjadi goyah. Pembunuhan tidak lagi tampil sebagai tragedi, tetapi sebagai pelaksanaan kehendak ilahi.",
          "Al-Anfal 8:17 bahkan menyatakan bukan kamu yang membunuh mereka, melainkan Allah yang membunuh. Kalimat seperti ini sangat kuat secara iman, tetapi problematik secara etika karena dapat mengurangi tanggung jawab manusia atas kekerasan.",
        ],
      },
      {
        title: "Musuh sebagai makhluk paling buruk",
        paragraphs: [
          "Al-Anfal 8:22 dan Al-Anfal 8:55 memakai bahasa sangat keras untuk orang yang tidak menerima pesan: makhluk paling buruk, tuli, bisu, tidak mengerti, dan orang kafir yang tidak beriman.",
          "Ini bukan sekadar kritik teologis. Ini dehumanisasi. Ketika lawan dilihat sebagai makhluk paling buruk, kekerasan terhadap mereka lebih mudah diterima.",
          "Surat ini juga memerintahkan persiapan kekuatan untuk menggentarkan musuh dalam Al-Anfal 8:60. Perdamaian memang disebut dalam Al-Anfal 8:61, tetapi datang setelah bangunan besar tentang perang, ancaman, dan kesiapan militer.",
        ],
      },
      {
        title: "Tawanan, tebusan, dan moralitas pemenang",
        paragraphs: [
          "Bagian tawanan perang dalam Al-Anfal 8:67-70 menyimpan ketegangan besar. Nabi ditegur karena memiliki tawanan sebelum melumpuhkan musuh di bumi, lalu rampasan yang diperoleh dinyatakan halal.",
          "Dalam catatan asbabun nuzul yang sering dikutip, konteksnya berkaitan dengan tawanan Badar dan pilihan antara membunuh atau menerima tebusan. Surat ini condong memberi tekanan bahwa kemenangan militer harus dituntaskan sebelum belas kasihan atau transaksi tebusan.",
          "Bagi etika modern, ini berat. Tawanan seharusnya menjadi manusia yang dilindungi, bukan objek strategi, tebusan, dan pelajaran bagi lawan.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Anfal adalah teks komunitas yang menang dan sedang menata kemenangan itu. Ia mengatur rampasan, disiplin, keberanian, musuh, tawanan, dan solidaritas orang beriman yang hijrah serta berjihad.",
          "Justru karena sangat dekat dengan peristiwa perang, surat ini lebih mudah dipahami sebagai dokumen sejarah politik daripada sebagai pedoman moral universal. Ia menyimpan suasana Badar: takut, menang, membagi harta, dan mencari makna teologis dari darah yang tertumpah.",
          "Pertanyaan besarnya bukan apakah komunitas awal Islam pernah berperang. Pertanyaannya adalah apa yang terjadi ketika bahasa perang itu terus dibaca sebagai suara suci lintas zaman.",
        ],
      },
    ],
    verseRefs: [1, 2, 5, 7, 9, 12, 15, 16, 17, 22, 23, 25, 41, 55, 57, 60, 61, 65, 66, 67, 69, 70, 72, 75],
  },
  "at-taubah": {
    lead:
      "At-Taubah tidak dibuka dengan basmalah, dan nadanya memang terasa berbeda: keras, politis, dan penuh ultimatum. Surat ini berbicara dari posisi komunitas yang sudah punya kuasa, bukan dari pinggir yang sedang meminta didengar. Karena itu, ia menjadi salah satu tempat paling jujur untuk melihat agama ketika berubah menjadi proyek negara, perang, dan loyalitas.",
    problemMap:
      "Surat ini memuat pemutusan perjanjian, ayat pedang, larangan musyrik mendekati Masjidil Haram, jizyah atas Ahli Kitab, polemik Yahudi-Kristen, tekanan ikut perang, kecurigaan terhadap munafik, Masjid Dhirar, dan jual beli jiwa dengan surga. Fokusnya ada pada kekerasan, segregasi, pajak ketundukan, dan politik kesetiaan.",
    sections: [
      {
        title: "Ultimatum sebagai bahasa pembuka",
        paragraphs: [
          "At-Taubah 9:1-5 membuka dengan pembebasan dari perjanjian terhadap kaum musyrik, masa tangguh, lalu perintah memerangi mereka setelah bulan-bulan tertentu lewat. Ini bukan bahasa dakwah yang pelan. Ini bahasa ultimatum.",
          "Pembelaan kontekstual biasanya menekankan pengkhianatan perjanjian. Konteks itu penting, tetapi tidak menghapus bentuk teksnya: perbedaan politik dan teologis diselesaikan dengan tekanan militer, sementara jalan aman dikaitkan dengan tobat, salat, dan zakat.",
          "Di sini agama tidak lagi hanya menawarkan makna. Ia sedang mengatur siapa boleh hidup aman, dengan syarat apa, dan siapa yang harus tunduk.",
        ],
      },
      {
        title: "Toleransi yang diarahkan ke konversi",
        paragraphs: [
          "At-Taubah 9:6 memberi perlindungan kepada musyrik yang meminta suaka agar ia mendengar firman Allah, lalu diantar ke tempat aman. Dibaca sendirian, ayat ini tampak lebih lunak.",
          "Namun kelembutannya tetap bersyarat. Perlindungan diberikan dalam kerangka mendengar wahyu, bukan sebagai penghormatan penuh terhadap keberbedaan keyakinan. Orang luar disebut tidak mengetahui, seolah masalahnya adalah kekurangan informasi, bukan perbedaan cara membaca dunia.",
          "Toleransi seperti ini bukan pluralisme. Ia lebih mirip jeda strategis di dalam proyek konversi dan penataan kuasa.",
        ],
      },
      {
        title: "Jizyah dan ketundukan Ahli Kitab",
        paragraphs: [
          "At-Taubah 9:29 adalah pusat persoalan relasi dengan Ahli Kitab: perang diperintahkan sampai mereka membayar jizyah dalam keadaan tunduk. Ini bukan debat teologi biasa; ini struktur politik.",
          "Sebagai dokumen sejarah imperium, sistem tributari seperti ini bisa dipahami dalam dunia kuno. Banyak kekuasaan menarik pajak dari kelompok taklukan. Tetapi ketika ia masuk teks suci, ketundukan politik kelompok agama lain diberi status teologis.",
          "Kritik sekuler tidak perlu membela Kristen atau Yahudi untuk melihat masalahnya. Masalahnya adalah ketidaksetaraan hukum berdasarkan identitas agama.",
        ],
      },
      {
        title: "Munafik sebagai kategori pengawasan",
        paragraphs: [
          "Bagian besar At-Taubah dipakai untuk membicarakan munafik: orang yang enggan perang, memberi alasan, mengkritik pembagian sedekah, bercanda, atau dianggap menyimpan sikap ganda. Kategori ini sangat kuat karena ia menunjuk batin, bukan sekadar tindakan.",
          "At-Taubah 9:64-66 menunjukkan betapa bahkan candaan bisa dibaca sebagai kekafiran setelah iman. At-Taubah 9:80-84 menutup pintu ampunan dan bahkan mengatur salat jenazah. Identitas religius bergerak sampai ke kuburan.",
          "Dalam masyarakat, kategori seperti ini mudah menciptakan atmosfer saling curiga. Orang bukan hanya dinilai dari apa yang ia lakukan, tetapi dari dugaan isi hatinya.",
        ],
      },
      {
        title: "Surga sebagai kontrak perang",
        paragraphs: [
          "At-Taubah 9:111 memakai metafora yang sangat kuat: Allah membeli jiwa dan harta orang beriman dengan surga; mereka membunuh dan terbunuh. Di sini jihad tidak hanya diperintah, tetapi dikemas sebagai transaksi kosmik.",
          "Bahasa jual beli membuat pengorbanan terasa rasional: berikan hidup dan harta, dapatkan surga. Secara psikologis, ini amat kuat. Secara etis, ia berbahaya ketika kematian dan pembunuhan menjadi bagian dari kesepakatan suci.",
          "At-Taubah 9:123 menutup arah yang sama: perangilah orang kafir yang dekat dan biarkan mereka merasakan ketegasan. Sulit menyebut ini sekadar spiritual. Ini teologi konflik yang sangat konkret.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "At-Taubah paling jujur dibaca sebagai teks kuasa. Ia mengatur perjanjian, musuh, pajak, ruang suci, kritik internal, dan partisipasi perang. Di sini agama sudah berbicara dengan suara administrasi dan mobilisasi.",
          "Sebagai dokumen komunitas yang sedang berperang dan memantapkan otoritas, ia bisa dipahami. Sebagai pedoman moral universal, ia menyisakan masalah besar: kekerasan, segregasi, tekanan batin, dan ketundukan kelompok lain.",
          "Kalau ada surat yang memperlihatkan jarak antara iman pribadi dan agama sebagai kekuasaan politik, At-Taubah adalah salah satu yang paling terang.",
        ],
      },
    ],
    verseRefs: [1, 3, 5, 6, 14, 16, 17, 20, 23, 28, 29, 30, 33, 38, 41, 49, 60, 64, 66, 73, 80, 84, 97, 107, 111, 113, 118, 123],
  },
  "yunus": {
    lead:
      "Yunus adalah surat yang terus mencoba membuat pembaca melihat dunia sebagai tanda: langit, bumi, matahari, bulan, laut, badai, kaum terdahulu, dan kisah Firaun. Tetapi di bawah argumen tanda-tanda itu, ada masalah yang terus muncul: manusia diminta beriman, sementara iman sendiri disebut bergantung pada izin Allah.",
    problemMap:
      "Surat ini memuat huruf muqattaah, penciptaan enam masa, tanda astronomi, ancaman akhirat, tantangan mengganti atau menandingi Quran, kisah Nuh, Musa-Firaun, kaum Yunus, dan ayat-ayat tentang iman yang bergantung kehendak Allah. Fokusnya ada pada bukti yang melingkar, ancaman, dan determinisme hidayah.",
    sections: [
      {
        title: "Kitab hikmah yang mulai dari huruf gelap",
        paragraphs: [
          "Yunus 10:1 membuka dengan Alif Lam Ra, lalu menyebut kitab ini penuh hikmah. Dari sisi iman, pembukaan seperti ini bisa terasa sakral. Dari sisi pembacaan kritis, ada ironi: kitab yang mengklaim hikmah memulai dengan tanda yang maknanya tidak jelas.",
          "Ketidakjelasan itu tidak otomatis membuat teks salah. Banyak sastra memakai misteri. Tetapi jika teks ini berkali-kali menuntut manusia menerima kebenaran secara jelas, pembukaan yang kabur tetap layak dicatat.",
          "Sejak awal, surat ini meminta pembaca menerima otoritas sebelum memberi kriteria pembuktian yang bisa diperiksa.",
        ],
      },
      {
        title: "Alam sebagai panggung kesimpulan",
        paragraphs: [
          "Yunus 10:3-6 membawa langit, bumi, Arasy, matahari, bulan, malam, dan siang. Alam dipakai sebagai bukti bahwa Tuhan mengatur segalanya dan bahwa kebangkitan benar.",
          "Masalahnya bukan rasa takjub pada alam. Rasa takjub itu manusiawi. Masalahnya adalah lompatan dari pengamatan alam menuju kesimpulan teologis tertentu. Matahari dan bulan menunjukkan keteraturan, tetapi tidak otomatis membuktikan seluruh paket doktrin yang dibawa surat ini.",
          "Surat ini berkali-kali bergerak cepat: lihat alam, maka terimalah wahyu. Bagi pembaca sekuler, langkah tengahnya terlalu banyak yang hilang.",
        ],
      },
      {
        title: "Tantangan Quran dan bukti yang subjektif",
        paragraphs: [
          "Yunus 10:15-16 menolak permintaan agar Quran diganti atau diubah. Muhammad diposisikan hanya mengikuti wahyu. Lalu Yunus 10:37-38 menantang penentang untuk membuat satu surat semisal.",
          "Tantangan seperti ini terkenal, tetapi secara epistemik sulit. Apa ukuran 'semisal'? Keindahan bahasa, struktur hukum, pengaruh sejarah, atau rasa sakral pembaca? Tanpa kriteria yang disepakati, tantangan itu lebih bekerja sebagai retorika kelompok sendiri.",
          "Di sini Quran membela dirinya dengan cara yang kuat bagi orang yang sudah menerima otoritasnya, tetapi tidak cukup sebagai bukti netral bagi orang luar.",
        ],
      },
      {
        title: "Nuh, Musa, dan pola kehancuran",
        paragraphs: [
          "Yunus 10:71-73 menceritakan Nuh dan penenggelaman penolak. Yunus 10:75-92 membawa Musa, Firaun, sihir, laut, dan iman Firaun yang datang terlambat.",
          "Kisah-kisah itu tidak disajikan sebagai sejarah terbuka, tetapi sebagai pola moral: utusan benar, penolak sombong, hukuman datang. Firaun bahkan menjadi contoh orang yang baru percaya ketika tenggelam, lalu imannya ditolak.",
          "Secara naratif, ini efektif. Secara etis, muncul pertanyaan: jika bukti paling kuat baru datang di ujung, mengapa kesadaran di saat itu dianggap tidak sah?",
        ],
      },
      {
        title: "Iman yang tidak sepenuhnya milik manusia",
        paragraphs: [
          "Bagian paling tajam ada di Yunus 10:99-100: jika Tuhan menghendaki, semua manusia akan beriman; tidak seorang pun beriman kecuali dengan izin Allah. Ini membuat kebebasan iman menjadi rapuh.",
          "Surat ini tetap menuntut manusia memilih, tetapi juga mengatakan izin berada di tangan Allah. Jika seseorang tidak beriman karena izin itu tidak diberikan, hukuman terhadapnya menjadi sulit disebut adil.",
          "Yunus 10:108 kemudian berbicara seolah petunjuk bermanfaat bagi diri sendiri dan kesesatan merugikan diri sendiri. Ketegangan ini tidak diselesaikan. Surat bergerak di antara pilihan manusia dan kendali Tuhan, sambil tetap mempertahankan ancaman.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Yunus adalah surat tentang tanda dan ancaman. Ia meminta manusia membaca alam, sejarah, dan nasib bangsa-bangsa sebagai bukti wahyu.",
          "Tetapi tanda-tanda itu tidak dibiarkan terbuka. Semuanya diarahkan ke kesimpulan yang sudah ditetapkan, sementara orang yang tidak sampai pada kesimpulan itu sering ditempatkan sebagai lalai, sombong, atau dikunci oleh keputusan Tuhan.",
          "Sebagai retorika iman, surat ini kuat. Sebagai argumen publik yang bisa diuji bersama, ia masih membawa terlalu banyak asumsi yang hanya bekerja dari dalam keyakinan.",
        ],
      },
    ],
    verseRefs: [1, 3, 4, 5, 7, 15, 20, 31, 36, 37, 38, 44, 52, 71, 73, 74, 88, 90, 91, 94, 96, 98, 99, 100, 108],
  },
  "hud": {
    lead:
      "Hud terasa seperti arsip kehancuran. Satu demi satu kisah nabi muncul: Nuh, Hud, Saleh, Ibrahim, Luth, Shu'ayb, Musa. Polanya hampir selalu sama. Ada utusan, ada kaum yang ragu, ada ancaman, lalu ada hukuman. Surat ini kuat sebagai mesin peringatan, tetapi justru karena itu ia berat sebagai teks etika.",
    problemMap:
      "Surat ini memuat klaim kitab yang dijelaskan, pengawasan Allah, penciptaan untuk ujian, tantangan membuat sepuluh surah, kisah Nuh dan anaknya, Ad, Samud, Luth, Madyan, Firaun, neraka-surga, serta pernyataan Allah memenuhi neraka. Fokusnya ada pada skeptisisme yang dihukum, hukuman kolektif, dan determinisme penciptaan.",
    sections: [
      {
        title: "Kitab yang jelas, dunia yang diawasi",
        paragraphs: [
          "Hud 11:1 menyebut kitab ini disusun rapi dan dijelaskan. Tetapi surat ini juga dibuka dengan huruf muqattaah yang tidak dijelaskan. Lagi-lagi, klaim kejelasan berdampingan dengan elemen yang gelap.",
          "Hud 11:5-7 menambah suasana: Allah tahu yang disembunyikan, menjamin rezeki semua makhluk, menciptakan langit dan bumi dalam enam masa, dan menjadikan hidup sebagai ujian. Ini bukan sekadar kosmologi; ini sistem pengawasan dan evaluasi.",
          "Bagi pembaca kritis, pertanyaannya sederhana: apakah dunia diciptakan untuk makhluk hidup berkembang, atau untuk panggung ujian yang hasilnya sudah diketahui?",
        ],
      },
      {
        title: "Skeptisisme yang tidak diberi tempat nyaman",
        paragraphs: [
          "Hud 11:13-14 memuat tantangan membuat sepuluh surat semisal. Di bagian lain, kaum Nuh, Ad, dan Samud meminta bukti atau meragukan klaim para nabi. Dalam narasi surat, keraguan itu hampir selalu menjadi tanda pembangkangan.",
          "Padahal permintaan bukti tidak otomatis jahat. Dalam dunia modern, meminta bukti adalah bagian normal dari tanggung jawab berpikir. Hud sering membaliknya: yang meminta bukti diposisikan sebagai keras kepala, bukan hati-hati.",
          "Di sini tampak pola epistemik yang tertutup. Wahyu menuntut diterima, sementara pertanyaan terhadap wahyu diberi beban moral negatif.",
        ],
      },
      {
        title: "Nuh dan putusnya keluarga",
        paragraphs: [
          "Kisah Nuh dalam Hud 11:25-49 sangat panjang dan emosional. Ada bahtera, banjir, anak yang menolak naik, lalu dialog Nuh dengan Tuhan setelah anaknya tenggelam.",
          "Bagian paling keras ada di Hud 11:46: anak Nuh disebut bukan bagian dari keluarganya karena amalnya tidak saleh. Ikatan keluarga dipotong oleh batas iman.",
          "Secara teologis, ini menegaskan loyalitas iman di atas darah. Secara manusiawi, ini berat: seorang ayah kehilangan anak, lalu diberi tahu bahwa relasi itu tidak lagi dihitung sebagai keluarga.",
        ],
      },
      {
        title: "Kota yang dihukum sebagai satu tubuh",
        paragraphs: [
          "Ad, Samud, kaum Luth, dan Madyan berakhir dengan pola yang sama: penolakan, ancaman, lalu pembinasaan. Hud 11:67-68 dan Hud 11:82-83 memakai citra kehancuran yang total.",
          "Masalah hukuman kolektif muncul terus. Surat ini memperlakukan komunitas sebagai satu tubuh moral. Yang menerima nabi selamat; yang berada di kota penolak masuk dalam gelombang hukuman.",
          "Dari sudut etika modern, individu tidak bisa begitu mudah dilebur ke dalam dosa kolektif. Anak-anak, orang ragu, orang diam, dan orang yang tidak punya kuasa hampir hilang dari narasi.",
        ],
      },
      {
        title: "Luth, perempuan, dan moral yang timpang",
        paragraphs: [
          "Kisah Luth dalam Hud 11:77-83 memunculkan persoalan khusus. Luth menghadapi ancaman terhadap tamunya, lalu menawarkan putri-putrinya sebagai alternatif. Ini sering ditafsirkan macam-macam, tetapi teksnya tetap tidak nyaman.",
          "Apa pun pembacaan apologetiknya, narasi itu menunjukkan dunia patriarkal tempat tubuh perempuan bisa menjadi alat meredam kekerasan laki-laki. Masalah kaum Luth tidak diselesaikan dengan etika persetujuan atau perlindungan korban, melainkan dengan kehormatan tamu dan kehancuran kota.",
          "Kritik di sini tidak perlu meminjam moral Kristen atau Islam. Cukup dari prinsip sekuler: manusia tidak boleh diperlakukan sebagai alat tukar untuk menyelesaikan ancaman seksual.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Hud menyusun sejarah sebagai peringatan berulang. Itu membuat surat ini kuat, tetapi juga monoton secara moral: ragu berarti menolak, menolak berarti dihukum, hukuman berarti bukti.",
          "Hud 11:118-119 menutup masalah dengan lebih tajam: Allah tidak menjadikan manusia satu umat, dan neraka akan dipenuhi jin dan manusia. Jika perbedaan memang dibiarkan atau diciptakan, mengapa akibatnya hukuman abadi?",
          "Sebagai teks penguatan komunitas yang sedang ditekan, Hud bisa dimengerti. Sebagai model keadilan universal, ia menyisakan terlalu banyak kota yang dihancurkan terlalu cepat.",
        ],
      },
    ],
    verseRefs: [1, 5, 6, 7, 13, 14, 25, 27, 34, 36, 40, 42, 46, 50, 53, 61, 64, 67, 77, 78, 82, 84, 87, 94, 98, 101, 106, 107, 118, 119, 120],
  },
  "yusuf": {
    lead:
      "Yusuf disebut sebagai kisah terbaik. Ia memang punya kekuatan naratif yang jarang: mimpi, kecemburuan saudara, sumur, pasar budak, rumah bangsawan, penjara, tafsir mimpi, krisis pangan, dan reuni keluarga. Tetapi justru karena ceritanya indah, bagian-bagian gelapnya sering lewat begitu saja.",
    problemMap:
      "Surat ini memuat klaim kisah terbaik, mimpi kosmik, favoritisme keluarga, percobaan pembunuhan, perbudakan, fitnah seksual, penjara tanpa keadilan, tafsir mimpi sebagai dasar kebijakan, manipulasi saudara, rekayasa bukti terhadap Bunyamin, penyembuhan ajaib, dan rekonsiliasi cepat. Fokusnya ada pada trauma, kuasa, gender, dan moralitas tokoh yang tidak selalu bersih.",
    sections: [
      {
        title: "Kisah terbaik dan masalah keluarga",
        paragraphs: [
          "Yusuf 12:2-3 menyebut Quran berbahasa Arab dan kisah ini sebagai kisah terbaik. Tetapi kisah itu segera masuk ke keluarga yang tidak sehat: mimpi besar Yusuf, peringatan Ya'qub, kecemburuan saudara, dan rencana membuang atau membunuh.",
          "Yusuf 12:8-10 memperlihatkan luka yang lahir dari favoritisme. Teks menegur saudara-saudara Yusuf, tetapi tidak banyak mengurai akar psikologisnya: seorang ayah yang tampaknya memberi kasih berbeda kepada anak-anaknya.",
          "Kisah ini kuat karena manusiawi. Tetapi kalau disebut teladan moral, ia perlu dibaca lebih kritis: banyak tokohnya bergerak dari luka, iri, takut, dan manipulasi.",
        ],
      },
      {
        title: "Perbudakan yang lewat tanpa kritik",
        paragraphs: [
          "Yusuf 12:19-21 menceritakan Yusuf ditemukan, dijual murah, lalu dibeli oleh pembesar Mesir. Narasi bergerak cepat, seolah yang penting adalah rencana besar Tuhan, bukan fakta bahwa seorang anak diperlakukan sebagai komoditas.",
          "Di sinilah jarak etika modern terasa. Perbudakan tidak dikritik sebagai institusi yang salah. Ia hanya menjadi tahap dalam perjalanan tokoh utama menuju kuasa.",
          "Kalau teks ini dibaca sebagai cerita kuno, itu masuk akal. Dunia kuno memang mengenal perbudakan. Tetapi sebagai moral universal, diamnya teks terhadap jual-beli manusia tetap problematik.",
        ],
      },
      {
        title: "Fitnah seksual dan wajah misogini",
        paragraphs: [
          "Bagian istri Al-Aziz dalam Yusuf 12:23-35 sering dibaca sebagai kemenangan moral Yusuf atas godaan. Tetapi narasinya juga membawa stereotip yang kuat: perempuan sebagai penggoda, tipu daya perempuan, dan hasrat yang harus dikendalikan oleh tanda Tuhan.",
          "Kasusnya sendiri rumit: ada relasi kuasa, pemaksaan seksual, bukti robekan baju, gosip perempuan kota, lalu Yusuf dipenjara meski tidak bersalah. Sistem hukumnya tidak adil, tetapi teks lebih tertarik pada kesucian Yusuf daripada kritik terhadap sistem itu.",
          "Yang hilang adalah bahasa modern tentang persetujuan, penyalahgunaan kuasa, dan keadilan bagi korban. Narasi bergerak dalam moral kehormatan, bukan etika tubuh yang setara.",
        ],
      },
      {
        title: "Mimpi sebagai kebijakan negara",
        paragraphs: [
          "Di penjara, Yusuf menafsirkan mimpi dua tahanan. Lalu Yusuf 12:43-49 membawa mimpi raja tentang sapi dan gandum, yang menjadi dasar strategi menghadapi krisis pangan.",
          "Saran menyimpan hasil panen memang masuk akal. Tetapi cara legitimasi kebijakannya menarik: keputusan publik besar lahir dari tafsir mimpi dan klaim pengetahuan khusus, bukan dari data yang bisa diperiksa bersama.",
          "Dalam cerita, ini membuat Yusuf tampak bijaksana. Dalam politik modern, model seperti ini berbahaya: kuasa diberikan kepada orang yang dianggap punya akses istimewa ke makna tersembunyi.",
        ],
      },
      {
        title: "Yusuf berkuasa dan mulai merekayasa",
        paragraphs: [
          "Bagian paling tidak nyaman muncul ketika Yusuf sudah menjadi pejabat. Dalam Yusuf 12:58-62, ia memakai krisis pangan untuk menekan saudara-saudaranya membawa Bunyamin. Lalu Yusuf 12:70-76 mengatur piala dimasukkan ke karung Bunyamin agar ia bisa ditahan.",
          "Teks bahkan menyebut rencana itu sebagai bagian dari pengaturan Allah. Secara cerita, ini membuka jalan rekonsiliasi. Secara etika, ini tetap rekayasa bukti dari posisi kuasa.",
          "Yusuf kemudian menolak menahan orang lain dengan alasan keadilan dalam Yusuf 12:79, padahal situasi ketidakadilan itu ia buat sendiri. Di sini tokoh suci terlihat sangat manusiawi: cerdas, terluka, dan tidak selalu bersih.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Yusuf memang salah satu narasi paling utuh dalam Quran. Justru karena utuh, ia memperlihatkan banyak lapisan: trauma keluarga, pasar budak, seksualitas, penjara, kuasa negara, pangan, dan pengampunan.",
          "Rekonsiliasi di akhir terasa hangat, tetapi juga terlalu cepat. Saudara yang pernah membuang Yusuf dimaafkan, tanggung jawab sosial tidak banyak dibahas, dan setan ikut dijadikan penjelasan atas kesalahan manusia dalam Yusuf 12:100.",
          "Kisah ini indah sebagai sastra. Tetapi sebagai etika, ia tidak sesederhana 'kisah terbaik'. Ia lebih tepat dibaca sebagai cerita manusia yang retak, bukan manual moral yang bersih.",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 4, 5, 8, 9, 15, 19, 20, 21, 23, 24, 28, 29, 32, 33, 35, 37, 40, 41, 43, 47, 50, 55, 58, 62, 67, 70, 76, 79, 84, 89, 92, 93, 96, 100, 102, 108, 109, 111],
  },
  "ar-rad": {
    lead:
      "Ar-Ra'd berarti guruh, dan surat ini memang penuh tanda alam: langit tanpa tiang, bumi yang dihamparkan, buah-buahan, kilat, janin, petir, sungai, dan buih. Tetapi tanda-tanda itu tidak berdiri sebagai undangan berpikir bebas. Hampir semuanya diarahkan untuk menegaskan satu kesimpulan: wahyu benar, penolak keliru.",
    problemMap:
      "Surat ini memuat huruf muqattaah, kosmologi langit-Arasy, bumi yang dihamparkan, janin, pengawasan malaikat, petir sebagai alat hukuman, metafora kebenaran dan kebatilan, takdir perubahan, ketenangan hati, permintaan mukjizat, penghapusan dan penetapan wahyu, serta kesaksian Allah. Fokusnya ada pada alam sebagai bukti, determinisme, dan jawaban yang tidak falsifiable.",
    sections: [
      {
        title: "Alam yang sudah diberi kesimpulan",
        paragraphs: [
          "Ar-Ra'd 13:1-4 membawa langit, bumi, matahari, bulan, gunung, sungai, buah, dan tanaman. Ini bisa menjadi undangan yang indah untuk mengamati dunia.",
          "Tetapi teks tidak membiarkan pengamatan itu berjalan terbuka. Alam langsung diberi arah teologis. Yang tidak sampai pada kesimpulan itu disebut tidak beriman atau tidak berpikir dengan benar.",
          "Dari sisi sekuler, alam tidak otomatis berbicara satu bahasa agama. Ia dapat melahirkan sains, puisi, filsafat, atau agama yang berbeda-beda. Ar-Ra'd memilih satu tafsir, lalu menyebutnya kebenaran.",
        ],
      },
      {
        title: "Skeptisisme terhadap kebangkitan",
        paragraphs: [
          "Ar-Ra'd 13:5 menanggapi pertanyaan tentang kebangkitan setelah manusia menjadi tanah. Pertanyaan itu wajar. Ia menyentuh masalah identitas, tubuh, kematian, dan kemungkinan hidup kembali.",
          "Namun surat ini tidak memberi uraian filosofis. Skeptisisme itu segera dikaitkan dengan kekafiran, belenggu di leher, dan neraka. Pertanyaan biologis dan metafisik dijawab dengan ancaman moral.",
          "Di sinilah pola lama muncul lagi: keraguan tidak diperlakukan sebagai kerja akal, tetapi sebagai tanda posisi batin yang salah.",
        ],
      },
      {
        title: "Pengawasan dan perubahan nasib",
        paragraphs: [
          "Ar-Ra'd 13:10-11 berbicara tentang pengetahuan Allah atas yang tersembunyi dan terang, serta penjaga yang mengikuti manusia. Ayat ini juga terkenal karena menyatakan Allah tidak mengubah keadaan suatu kaum sampai mereka mengubah apa yang ada pada diri mereka.",
          "Kalimat itu sering dibaca sebagai dorongan etis yang bagus: perubahan butuh agensi manusia. Tetapi di ayat yang sama, jika Allah menghendaki keburukan bagi suatu kaum, tidak ada yang dapat menolaknya.",
          "Maka dorongan agensi berdampingan dengan determinisme. Manusia diminta berubah, tetapi tetap berada di bawah kehendak yang dapat membalikkan nasib tanpa mekanisme yang bisa diperiksa.",
        ],
      },
      {
        title: "Petir sebagai argumen",
        paragraphs: [
          "Ar-Ra'd 13:12-13 memakai kilat dan guruh sebagai tanda: ada takut, harap, awan berat, tasbih guruh, dan petir yang menyambar siapa yang dikehendaki Allah.",
          "Dalam dunia pra-saintifik, ini memberi rasa kosmik: alam seolah ikut beribadah dan menghukum. Dalam pengetahuan modern, petir adalah fenomena atmosfer dengan sebab fisik yang dapat dipelajari.",
          "Masalahnya bukan jika orang merasakan keagungan saat melihat badai. Masalahnya adalah ketika fenomena alam dijadikan ancaman teologis terhadap penentang.",
        ],
      },
      {
        title: "Mukjizat yang selalu bisa ditunda",
        paragraphs: [
          "Ar-Ra'd 13:27 dan Ar-Ra'd 13:31 menyinggung permintaan tanda atau mukjizat. Jawabannya tidak memberi bukti baru yang bisa diuji, tetapi mengembalikan urusan pada kehendak Allah.",
          "Jika gunung tidak bergerak, bumi tidak terbelah, dan orang mati tidak berbicara, penjelasannya adalah Allah tidak menghendaki. Ini membuat klaim menjadi tidak falsifiable: ada bukti berarti benar, tidak ada bukti juga tetap benar.",
          "Ar-Ra'd 13:38-39 menambah pola yang mirip: mukjizat hanya dengan izin Allah, dan Allah menghapus atau menetapkan apa yang Dia kehendaki. Bagi teologi, ini kedaulatan. Bagi kritik, ini membuat standar kebenaran terus berpindah.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Ar-Ra'd adalah surat yang indah secara citra alam, tetapi keras secara epistemologi. Ia memakai dunia sebagai bukti, lalu menutup kemungkinan tafsir lain atas dunia itu.",
          "Bagian seperti Ar-Ra'd 13:28 tentang ketenangan hati dalam mengingat Allah bisa bermakna secara personal. Tetapi klaim eksklusifnya tetap perlu diuji: banyak manusia menemukan tenang lewat seni, relasi, terapi, filsafat, atau hening yang tidak religius.",
          "Pada akhirnya, surat ini memperlihatkan ketegangan khas Quran: alam diajak menjadi saksi, tetapi saksi itu sudah diberi naskah sebelum sidang dimulai.",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 18, 19, 21, 25, 26, 27, 28, 31, 33, 34, 36, 37, 38, 39, 41, 43],
  },
  "ibrahim": {
    lead:
      "Ibrahim adalah surat yang bicara dengan bahasa kontras: gelap dan terang, syukur dan azab, pohon baik dan pohon buruk, iman dan kesesatan. Nadanya tidak serumit Al-Baqarah atau At-Taubah, tetapi di balik ringkasnya ada beberapa masalah besar: bahasa wahyu yang lokal, Tuhan yang menyesatkan, neraka yang grafis, dan Ibrahim sebagai pusat narasi asal-usul.",
    problemMap:
      "Surat ini memuat metafora kegelapan-cahaya, rasul yang diutus dengan bahasa kaumnya, Musa dan umat terdahulu, takdir sesat, gambaran neraka, amal orang kafir yang sia-sia, pohon baik-buruk, doa Ibrahim untuk Makkah, dan penyesalan yang terlambat. Fokusnya ada pada eksklusivitas, determinisme, dan kekerasan eskatologis.",
    sections: [
      {
        title: "Cahaya yang datang lewat bahasa lokal",
        paragraphs: [
          "Ibrahim 14:1 membuka dengan misi mengeluarkan manusia dari kegelapan menuju cahaya. Ini metafora yang kuat, tetapi juga membelah dunia dengan cepat: ada yang terang, ada yang gelap.",
          "Ibrahim 14:4 lalu menyebut setiap rasul diutus dengan bahasa kaumnya agar pesan menjadi jelas. Secara historis, ini masuk akal. Pesan agama selalu turun melalui bahasa, budaya, dan imajinasi lokal.",
          "Tetapi justru di situ pertanyaannya muncul: jika wahyu bersifat universal, mengapa akses pertamanya selalu sangat lokal? Bahasa membantu menjelaskan kepada satu kaum, tetapi juga membuat kaum lain bergantung pada terjemahan, tafsir, dan otoritas yang datang belakangan.",
        ],
      },
      {
        title: "Petunjuk yang diberikan dan kesesatan yang ditetapkan",
        paragraphs: [
          "Masalah besar surat ini muncul masih di Ibrahim 14:4: Allah menyesatkan siapa yang Dia kehendaki dan memberi petunjuk siapa yang Dia kehendaki. Kalimat ini terdengar seperti kedaulatan Tuhan, tetapi secara etis sangat berat.",
          "Jika seseorang tersesat karena dikehendaki Allah, apa dasar untuk menghukumnya? Surat ini tetap memakai ancaman keras terhadap yang ingkar, sementara mekanisme iman dan sesat dikembalikan kepada kehendak ilahi.",
          "Ibrahim 14:27 mengulang ketegangan yang sama: orang beriman diteguhkan, orang zalim disesatkan. Dari perspektif sekuler, ini terlihat seperti sistem yang menilai manusia atas kondisi batin yang tidak sepenuhnya mereka kendalikan.",
        ],
      },
      {
        title: "Syukur, nikmat, dan ancaman",
        paragraphs: [
          "Ibrahim 14:7 sangat populer: jika bersyukur, nikmat ditambah; jika ingkar, azab sangat berat. Ayat ini sering dipakai untuk menumbuhkan optimisme.",
          "Tetapi struktur moralnya transaksional. Syukur dikaitkan dengan penambahan nikmat, ingkar dikaitkan dengan ancaman. Moralitas bergerak di antara hadiah dan hukuman, bukan semata karena kebaikan itu bernilai dalam dirinya.",
          "Bagi pembaca yang hidup dalam dunia nyata, formula ini juga tidak selalu cocok. Banyak orang bersyukur tetapi tetap miskin, sakit, atau kalah oleh struktur sosial. Banyak yang tidak religius tetapi hidup baik dan memberi manfaat.",
        ],
      },
      {
        title: "Neraka yang terlalu tubuh",
        paragraphs: [
          "Ibrahim 14:16-17 menggambarkan minuman nanah, rasa yang tidak bisa ditelan, kematian yang datang dari segala arah tetapi tidak benar-benar mati. Bagian akhir surat menambah belenggu, pakaian dari cairan panas, dan wajah yang ditutup api.",
          "Ini bukan sekadar simbol hukuman. Imajinasi yang dipakai sangat fisik dan grafis. Tubuh menjadi panggung rasa sakit, seolah persuasi moral perlu ditopang oleh detail penyiksaan.",
          "Dari sudut etika modern, hukuman tanpa akhir dan tanpa rehabilitasi sulit dipertahankan. Apalagi jika kesalahan yang dihukum sering kali berupa ketidakpercayaan, bukan kekerasan nyata terhadap manusia.",
        ],
      },
      {
        title: "Ibrahim, kota suci, dan politik asal-usul",
        paragraphs: [
          "Bagian doa Ibrahim dalam Ibrahim 14:35-41 memberi surat ini bobot identitas. Ibrahim berdoa agar negeri aman, keturunannya menjauhi berhala, dan sebagian hati manusia cenderung kepada mereka.",
          "Secara devosional, ini menjadi dasar kesakralan Makkah. Secara kritis, ini juga membangun politik asal-usul: kota, keturunan, ibadah, dan pusat ziarah diberi akar langsung pada figur Ibrahim.",
          "Masalahnya bukan jika komunitas memiliki cerita asal. Semua komunitas memilikinya. Masalahnya adalah ketika cerita itu dipakai untuk memberi legitimasi teologis pada satu pusat suci dan satu garis kebenaran, sementara tradisi lain atas Ibrahim disisihkan.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Ibrahim adalah surat yang rapi secara retorika: cahaya melawan gelap, pohon baik melawan pohon buruk, syukur melawan ingkar. Justru kerapian itu membuatnya tajam sekaligus menyederhanakan.",
          "Manusia tidak selalu sejelas pohon baik dan pohon buruk. Keyakinan tidak selalu lahir dari kesombongan; keraguan tidak selalu lahir dari kegelapan.",
          "Yang tersisa adalah surat yang kuat untuk membangun identitas, tetapi problematik ketika dipakai sebagai peta final untuk menilai manusia yang jauh lebih rumit daripada metaforanya.",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 4, 6, 7, 9, 11, 13, 16, 17, 18, 21, 22, 24, 26, 27, 30, 35, 36, 37, 41, 44, 49, 50, 52],
  },
  "al-hijr": {
    lead:
      "Al-Hijr adalah surat pendek yang padat dengan dunia gaib: Quran yang dijaga, langit yang dihias dan dilindungi, setan yang dikejar semburan api, manusia dari tanah liat, jin dari api, Iblis yang diberi waktu, Luth dan kota yang dibalik. Surat ini terasa seperti kosmos lama yang diberi fungsi moral.",
    problemMap:
      "Surat ini memuat klaim Quran yang jelas dan dijaga, penolakan terhadap tuntutan malaikat, pengingkaran yang dimasukkan ke hati pendosa, kosmologi meteor sebagai senjata terhadap setan, penciptaan Adam dan jin, izin bagi Iblis untuk menyesatkan, Luth, penduduk Aikah, penduduk Hijr, dan ancaman terhadap orang yang memilah kitab. Fokusnya ada pada kosmologi pra-ilmiah, determinisme, dan hukuman kolektif.",
    sections: [
      {
        title: "Quran yang menjaga dirinya dari dalam teks",
        paragraphs: [
          "Al-Hijr 15:1 menyebut kitab yang jelas, lalu Al-Hijr 15:9 menyatakan bahwa Allah menurunkan peringatan dan menjaganya. Ini ayat penting dalam klaim preservasi Quran.",
          "Tetapi secara argumen, klaim ini berdiri dari dalam teks. Sebuah kitab berkata bahwa ia dijaga. Itu bisa menjadi keyakinan teologis, tetapi belum menjadi bukti historis yang mandiri.",
          "Pembacaan kritis tidak harus menyangkal semua proses transmisi Quran. Yang dikritik adalah lompatan dari klaim internal menuju kepastian mutlak, seolah sejarah naskah tidak perlu lagi diperiksa.",
        ],
      },
      {
        title: "Bukti yang diminta, azab yang dijawab",
        paragraphs: [
          "Di Al-Hijr 15:7-8, penentang meminta malaikat sebagai bukti. Jawabannya: malaikat tidak diturunkan kecuali dengan kebenaran, dan jika turun, mereka tidak diberi penangguhan.",
          "Dengan pola ini, permintaan bukti berubah menjadi permintaan hukuman. Orang yang bertanya tidak diberi verifikasi, melainkan diberi peringatan bahwa bukti semacam itu akan datang sebagai azab.",
          "Ini membuat posisi skeptis terjepit. Tidak ada bukti empiris yang diberikan, tetapi permintaan terhadapnya dibingkai sebagai tanda keras kepala atau jalan menuju kehancuran.",
        ],
      },
      {
        title: "Langit yang dijaga dari pencuri berita",
        paragraphs: [
          "Al-Hijr 15:16-18 menggambarkan langit yang dihias, dijaga dari setan, dan semburan api yang mengejar pencuri dengar. Ini salah satu kosmologi paling mitologis dalam Quran.",
          "Dalam astronomi modern, meteor bukan proyektil moral untuk mengejar makhluk gaib. Ia benda langit yang masuk atmosfer. Langit bukan ruang bertingkat tempat rahasia Tuhan bisa dicuri dengar.",
          "Bagian ini penting karena memperlihatkan imajinasi semesta yang sangat dekat dengan dunia kuno. Jika dibaca sebagai puisi mitologis, ia menarik. Jika dibaca sebagai deskripsi kosmos faktual, ia bermasalah.",
        ],
      },
      {
        title: "Iblis dibiarkan bekerja",
        paragraphs: [
          "Al-Hijr 15:26-44 membawa kisah penciptaan manusia dari tanah liat, jin dari api, sujud malaikat, penolakan Iblis, dan izin bagi Iblis untuk menyesatkan manusia sampai waktu tertentu.",
          "Masalahnya bukan hanya asal-usul manusia yang tidak cocok dengan evolusi biologis. Masalah moralnya lebih tajam: Iblis diberi ruang untuk menggoda, lalu manusia yang tersesat tetap dihukum.",
          "Al-Hijr 15:39 bahkan membuat Iblis berkata bahwa ia sesat karena keputusan Allah. Ini membuka kembali persoalan lama: siapa sebenarnya bertanggung jawab dalam sistem yang sejak awal mengizinkan penggoda kosmik bekerja?",
        ],
      },
      {
        title: "Luth dan kota yang dibalik",
        paragraphs: [
          "Kisah Luth dalam Al-Hijr 15:58-77 mengulang pola penyelamatan selektif dan hukuman kolektif. Istri Luth sudah ditentukan termasuk yang tertinggal, lalu kota dibalik dan dihujani batu.",
          "Di tengahnya ada bagian yang tetap tidak nyaman: Luth menawarkan putri-putrinya atau perempuan kaumnya dalam situasi ancaman terhadap tamu. Dunia moralnya sangat patriarkal; tubuh perempuan dapat muncul sebagai alat pengalihan.",
          "Kritik terhadap bagian ini tidak perlu mengubahnya menjadi pembelaan terhadap kekerasan seksual apa pun. Kritiknya sederhana: teks tidak memberi bahasa yang cukup untuk otonomi perempuan dan keadilan individual.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Hijr bergerak antara klaim teks, kosmologi langit, asal-usul manusia, Iblis, dan kota-kota yang hancur. Ia membangun dunia yang tertutup: wahyu dijaga, penolak sudah berpola, langit dilindungi, dan hukuman menunggu.",
          "Sebagai mitologi religius, surat ini kaya citra. Sebagai penjelasan realitas, ia membawa beban besar: meteor, tanah liat, jin dari api, Iblis yang diizinkan, dan hukuman kolektif.",
          "Yang tampak bukan pengetahuan yang melampaui zaman, tetapi cara sebuah komunitas kuno membayangkan semesta, ancaman, dan otoritas wahyu.",
        ],
      },
    ],
    verseRefs: [1, 2, 7, 8, 9, 12, 14, 15, 16, 17, 18, 19, 22, 26, 27, 29, 31, 34, 39, 41, 43, 49, 50, 56, 58, 60, 66, 71, 73, 74, 80, 83, 85, 87, 90, 91, 94, 99],
  },
  "an-nahl": {
    lead:
      "An-Nahl sering terasa seperti surat nikmat: ternak, hujan, tanaman, laut, gunung, bintang, lebah, susu, rumah, pakaian, keluarga. Tetapi surat ini tidak sekadar mengajak bersyukur. Ia memakai seluruh dunia sebagai argumen untuk kepatuhan, lalu menyisipkan persoalan besar tentang takdir, hewan, gender, perbudakan, naskh, dan bahasa Arab.",
    problemMap:
      "Surat ini memuat penciptaan manusia dari mani, ternak dan alam sebagai nikmat, gunung sebagai penstabil, kritik politeisme, takdir sesat, rasul laki-laki, lebah dan madu, susu, perbudakan sebagai perumpamaan, klaim Quran menjelaskan segala sesuatu, keadilan, penggantian ayat, tuduhan sumber asing, murtad, halal-haram, Ibrahim, Sabat, dan dakwah dengan hikmah. Fokusnya ada pada antroposentrisme, klaim ilmiah sederhana, determinisme, dan revisi wahyu.",
    sections: [
      {
        title: "Dunia sebagai gudang manfaat manusia",
        paragraphs: [
          "An-Nahl 16:5-16 menyusun dunia sebagai daftar manfaat: ternak memberi hangat, makanan, tunggangan; hujan menumbuhkan tanaman; laut memberi makanan dan perhiasan; gunung dan bintang membantu manusia.",
          "Sebagai puisi syukur, ini indah. Sebagai etika alam, ia sangat antroposentris. Hewan, laut, langit, dan bumi terutama dipahami dari kegunaannya bagi manusia.",
          "Dunia modern belajar bahwa alam tidak hanya bernilai karena bisa dipakai. Hewan punya kapasitas menderita, laut punya ekosistem, gunung bukan paku bumi, dan manusia bukan pusat fisik alam semesta.",
        ],
      },
      {
        title: "Alam yang dijelaskan terlalu sederhana",
        paragraphs: [
          "An-Nahl 16:4 menyebut manusia dari mani lalu menjadi pembantah. An-Nahl 16:15 menyebut gunung agar bumi tidak guncang. An-Nahl 16:66 berbicara tentang susu dari antara kotoran dan darah. An-Nahl 16:68-69 membawa lebah dan madu sebagai penyembuh.",
          "Bagian-bagian ini sering dibaca sebagai tanda kebesaran. Tetapi jika diperlakukan sebagai pengetahuan ilmiah, ia tampak sederhana dan terikat pada pengamatan lama.",
          "Madu memang punya manfaat tertentu, tetapi bukan obat universal. Gunung bukan penstabil yang mencegah gempa. Produksi susu jauh lebih kompleks daripada gambaran antara kotoran dan darah. Rasa kagum tidak sama dengan akurasi ilmiah.",
        ],
      },
      {
        title: "Petunjuk, sesat, dan tanggung jawab",
        paragraphs: [
          "An-Nahl 16:9, An-Nahl 16:37, dan An-Nahl 16:93 kembali membawa persoalan lama: Allah memberi petunjuk kepada siapa yang Dia kehendaki dan menyesatkan siapa yang Dia kehendaki.",
          "Surat ini tetap menegur manusia yang ingkar, sombong, dan menolak wahyu. Tetapi jika kesesatan berada dalam kehendak Allah, beban moral manusia menjadi tidak stabil.",
          "Ini bukan detail kecil. Ia memengaruhi seluruh sistem hukuman dan pahala. Hukuman masuk akal jika manusia punya akses yang adil terhadap pilihan. Surat ini tidak selalu memberi kesan akses itu setara.",
        ],
      },
      {
        title: "Gender, budak, dan moralitas zaman",
        paragraphs: [
          "An-Nahl 16:57-59 mengkritik kebencian Arab pra-Islam terhadap bayi perempuan. Itu bagian yang secara sosial penting. Tetapi kritiknya masih bergerak dalam dunia yang memandang feminin sebagai sesuatu yang dapat dipakai untuk mengejek teologi lawan.",
          "An-Nahl 16:71 dan An-Nahl 16:75 memakai hamba sahaya dalam perumpamaan tanpa menggugat institusi perbudakan itu sendiri. Teks berbicara di dalam struktur sosial zamannya, bukan melampauinya secara radikal.",
          "Bagi pembaca modern, ini membuat klaim kesempurnaan moral menjadi sulit. Ada nilai baik, tetapi juga ada asumsi sosial yang hari ini tidak bisa diterima begitu saja.",
        ],
      },
      {
        title: "Wahyu yang diganti dan bahasa yang dibela",
        paragraphs: [
          "An-Nahl 16:101 mengakui penggantian ayat, lalu menanggapi tuduhan bahwa Muhammad mengada-ada. Ini dekat dengan problem naskh: jika wahyu bisa diganti, bagaimana status finalitas dan konsistensinya?",
          "An-Nahl 16:103 menjawab tuduhan sumber asing dengan menekankan bahasa orang yang dituduh bukan Arab, sementara Quran berbahasa Arab jelas. Argumen ini lemah. Gagasan dapat berpindah bahasa; pengaruh budaya tidak harus datang dalam bentuk salinan literal.",
          "Di sini terlihat kecemasan historis: teks harus membela asal-usulnya, menjawab tuduhan pinjaman, dan menjelaskan perubahan pesan. Itu membuat wahyu tampak sangat berada dalam debat sosial zamannya.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "An-Nahl adalah surat yang paling kuat ketika dibaca sebagai katalog rasa syukur. Ia membuat dunia sehari-hari terasa berarti: susu, hujan, lebah, rumah, pakaian, keluarga, jalan, dan makanan.",
          "Tetapi ketika katalog itu berubah menjadi bukti final atas satu sistem teologi, masalahnya muncul. Alam terlalu cepat ditarik menjadi argumen, sementara detail-detailnya tidak selalu tahan terhadap pengetahuan modern.",
          "Surat ini mengajarkan bahwa manusia bisa melihat dunia sebagai nikmat. Kritiknya: dunia tidak harus menjadi alat pembuktian dogma, dan rasa syukur tidak perlu menutup pertanyaan.",
        ],
      },
    ],
    verseRefs: [1, 2, 4, 5, 8, 9, 10, 12, 14, 15, 20, 22, 24, 25, 35, 36, 37, 43, 45, 50, 57, 59, 64, 66, 67, 68, 69, 70, 71, 75, 76, 78, 79, 89, 90, 92, 93, 97, 101, 103, 106, 110, 115, 118, 120, 124, 125, 126],
  },
  "al-isra": {
    lead:
      "Al-Isra' dibuka dengan perjalanan malam: satu klaim supranatural yang menjadi pusat imajinasi Islam. Tetapi setelah itu, surat ini tidak tinggal di wilayah mukjizat. Ia bergerak ke Bani Israel, etika sosial, catatan amal, pembunuhan anak, zina, harta yatim, Iblis, ruh, tantangan Quran, dan permintaan bukti yang ditolak.",
    problemMap:
      "Surat ini memuat Isra, takdir kerusakan Bani Israel, Quran sebagai jalan lurus, catatan amal, hukuman kolektif negeri, etika sosial, larangan membunuh dan zina, rezeki, gender malaikat, penutup hati orang kafir, kebangkitan, Iblis, ruh, tantangan Quran, tuntutan mukjizat, Musa-Firaun, dan Quran bertahap. Fokusnya ada pada klaim supranatural, kontradiksi moral, dan bukti yang tidak pernah diberi kriteria jelas.",
    sections: [
      {
        title: "Perjalanan malam sebagai klaim yang tidak bisa diuji",
        paragraphs: [
          "Al-Isra 17:1 membuka dengan perjalanan malam dari Masjidil Haram ke Masjidil Aqsa. Dalam tradisi Islam, ayat ini menjadi pintu menuju narasi Isra dan Mi'raj.",
          "Dari sudut iman, peristiwa itu adalah mukjizat. Dari sudut sejarah dan sains, ia tidak bisa diverifikasi. Perjalanan fisik jarak jauh dalam waktu sangat singkat pada abad ke-7 tidak punya mekanisme natural yang dapat diperiksa.",
          "Masalahnya bukan bahwa cerita religius memakai mukjizat. Masalahnya adalah ketika mukjizat yang tidak bisa diuji dijadikan fondasi otoritas.",
        ],
      },
      {
        title: "Bani Israel dan hukuman kolektif",
        paragraphs: [
          "Al-Isra 17:4-8 berbicara tentang dua kali kerusakan Bani Israel dan hukuman yang datang melalui musuh kuat. Ini adalah contoh cara Quran membaca sejarah sebagai siklus dosa dan balasan.",
          "Problemnya ada pada generalisasi kelompok. Sebuah komunitas besar diperlakukan sebagai satu subjek moral: mereka rusak, mereka dihukum, mereka dikalahkan.",
          "Pembacaan sekuler perlu berhati-hati di sini. Kritiknya bukan diarahkan pada orang Yahudi, melainkan pada cara teks membuat sejarah kolektif menjadi narasi teologis yang mudah mewariskan prasangka.",
        ],
      },
      {
        title: "Etika sosial yang baik, tetapi tidak selesai",
        paragraphs: [
          "Bagian tengah Al-Isra memuat banyak etika yang masuk akal: berbuat baik kepada orang tua, memberi hak kerabat dan miskin, tidak boros, tidak membunuh anak karena takut miskin, tidak mendekati zina, menjaga harta yatim, menepati takaran, dan tidak mengikuti sesuatu tanpa pengetahuan.",
          "Ini salah satu bagian yang paling sosial dalam surat ini. Namun ia tetap berada dalam kerangka teologis yang keras: monoteisme dipasang dengan ancaman, rezeki dikembalikan pada kehendak Allah, dan pembunuhan masih diberi ruang lewat alasan yang benar.",
          "Jadi ada nilai etis nyata, tetapi belum menjadi sistem moral modern. Ia tidak membahas hak anak dari orang tua abusif, keadilan prosedural, kesehatan seksual, atau struktur ekonomi secara memadai.",
        ],
      },
      {
        title: "Hati yang ditutup lalu dihukum",
        paragraphs: [
          "Al-Isra 17:45-46 menyebut adanya dinding, penutup hati, dan sumbatan telinga ketika Quran dibacakan kepada orang yang tidak beriman. Ini memperkuat pola deterministik yang sering muncul.",
          "Jika pemahaman mereka ditutup oleh Allah, maka ketidakpahaman tidak sepenuhnya milik mereka. Namun surat ini tetap mengaitkan penolakan dengan kesesatan, kezaliman, dan ancaman.",
          "Al-Isra 17:97 lebih jauh: siapa yang diberi petunjuk Allah itulah yang mendapat petunjuk, dan siapa yang disesatkan tidak punya pelindung. Struktur seperti ini sulit direkonsiliasi dengan tanggung jawab moral individual.",
        ],
      },
      {
        title: "Permintaan mukjizat dan standar bukti",
        paragraphs: [
          "Al-Isra 17:85 menjawab pertanyaan tentang ruh dengan menyatakan bahwa ruh adalah urusan Tuhan dan manusia hanya diberi sedikit ilmu. Lalu Al-Isra 17:88 menantang manusia dan jin membuat yang serupa Quran.",
          "Setelah itu, Al-Isra 17:90-93 memuat daftar tuntutan mukjizat: mata air, kebun, langit dijatuhkan, Allah dan malaikat dihadirkan, rumah emas, atau naik ke langit. Jawabannya adalah Muhammad hanya manusia yang menjadi rasul.",
          "Di sini muncul ketegangan: surat dibuka dengan mukjizat perjalanan malam, tetapi ketika orang meminta bukti spektakuler, permintaan itu diperlakukan sebagai berlebihan. Mukjizat diterima ketika menguatkan klaim, ditolak ketika diminta sebagai verifikasi publik.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Isra adalah surat yang campurannya menarik: mukjizat, sejarah, etika sosial, debat bukti, dan pengadilan akhirat. Ia tidak bisa direduksi menjadi satu tema.",
          "Bagian etikanya punya nilai sosial, tetapi bagian teologinya sering bergerak dengan ancaman, determinisme, dan klaim yang tidak dapat diuji.",
          "Sebagai dokumen religius, ia kaya. Sebagai argumen sekuler, ia memerlukan terlalu banyak izin awal: percaya dulu pada perjalanan malam, percaya dulu pada catatan amal, percaya dulu bahwa penolakan berasal dari hati yang ditutup.",
        ],
      },
    ],
    verseRefs: [1, 4, 5, 7, 8, 9, 10, 13, 15, 16, 18, 21, 23, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 40, 45, 46, 49, 53, 58, 59, 61, 64, 65, 67, 70, 72, 73, 75, 78, 82, 85, 88, 90, 93, 94, 97, 98, 101, 103, 106, 107, 111],
  },
  "al-kahf": {
    lead:
      "Al-Kahf adalah salah satu surat paling naratif dalam Quran: pemuda gua, dua pemilik kebun, Musa dan Khidr, Dzulqarnain, matahari, dinding besi, Ya'juj-Ma'juj. Ia kuat sebagai kumpulan cerita. Tetapi jika cerita-cerita itu dibaca sebagai sejarah dan etika, surat ini membuka banyak pintu masalah.",
    problemMap:
      "Surat ini memuat klaim kitab tanpa kebengkokan, bantahan atas anak Tuhan, Ashabul Kahfi yang mirip legenda Tujuh Penidur, ketidakpastian jumlah dan durasi, perumpamaan kebun, catatan amal total, Iblis, hati yang ditutup, Musa-Khidr, pembunuhan anak atas dasar masa depan, Dzulqarnain, matahari terbenam di lumpur, Ya'juj-Ma'juj, dan amal baik yang sia-sia tanpa iman. Fokusnya ada pada legenda, epistemologi, dan problem moral hikmah tersembunyi.",
    sections: [
      {
        title: "Kisah gua dan bayang legenda lama",
        paragraphs: [
          "Al-Kahf 18:9-26 menceritakan pemuda yang berlindung di gua, tidur sangat lama, lalu bangun. Motif ini dekat dengan legenda Kristen Tujuh Penidur Ephesus yang beredar sebelum Islam.",
          "Kemiripan itu tidak otomatis membuktikan penyalinan langsung, tetapi cukup untuk mengguncang klaim orisinalitas wahyu. Cerita ini tampak berada dalam ekosistem narasi Late Antique, tempat kisah suci berpindah, berubah, dan diberi makna baru.",
          "Lebih menarik lagi, teks tidak memberi kepastian jumlah mereka dan menutup perdebatan dengan 'Tuhanku lebih mengetahui'. Untuk kitab yang mengklaim berita benar, ketidakpastian detail dasar ini terasa ganjil.",
        ],
      },
      {
        title: "Durasi, insya Allah, dan pengetahuan yang mundur",
        paragraphs: [
          "Al-Kahf 18:23-26 mengajarkan agar tidak memastikan rencana masa depan kecuali dengan insya Allah, lalu menyebut mereka tinggal 300 tahun ditambah 9. Tetapi setelah itu, pengetahuan final tetap dikembalikan kepada Allah.",
          "Secara religius, ini membangun kerendahan hati. Secara epistemik, ia juga membuat klaim sulit diuji. Jika tepat, itu wahyu; jika tidak jelas, Allah lebih tahu.",
          "Pola seperti ini sering muncul dalam teks agama: kepastian diberikan secukupnya untuk membangun wibawa, ketidakpastian disisakan agar pertanyaan tidak terlalu jauh.",
        ],
      },
      {
        title: "Kebun yang hancur dan teologi bencana",
        paragraphs: [
          "Perumpamaan dua pemilik kebun dalam Al-Kahf 18:32-44 menampilkan orang kaya yang sombong, ragu pada hari akhir, lalu kebunnya hancur. Pesannya jelas: kekayaan tidak boleh membuat manusia merasa aman dari Tuhan.",
          "Tetapi model seperti ini mudah berbahaya jika dibawa ke dunia nyata. Bencana alam atau kerugian ekonomi bisa dibaca sebagai hukuman moral, padahal sebabnya bisa ekologis, politik, teknis, atau kebetulan.",
          "Surat ini ingin meruntuhkan kesombongan. Namun ia juga menyuburkan cara pandang yang melihat kehancuran material sebagai koreksi ilahi terhadap keyakinan seseorang.",
        ],
      },
      {
        title: "Musa-Khidr dan bahaya hikmah tersembunyi",
        paragraphs: [
          "Kisah Musa dan Khidr dalam Al-Kahf 18:60-82 adalah salah satu bagian paling problematik. Musa belajar kepada tokoh yang punya ilmu dari sisi Allah, tetapi syaratnya ia tidak boleh bertanya sebelum dijelaskan.",
          "Lalu terjadi tiga tindakan: perahu orang miskin dilubangi, seorang anak dibunuh, dan tembok ditegakkan tanpa upah. Penjelasannya datang belakangan: semua ada hikmah tersembunyi.",
          "Masalahnya tajam. Jika tindakan yang tampak salah bisa dibenarkan oleh klaim pengetahuan gaib, maka moralitas publik runtuh. Siapa pun bisa berkata bahwa kekerasan sekarang dibenarkan oleh masa depan yang hanya ia ketahui.",
        ],
      },
      {
        title: "Anak yang dibunuh untuk masa depan",
        paragraphs: [
          "Bagian paling berat adalah Al-Kahf 18:74 dan Al-Kahf 18:80-81: seorang anak dibunuh karena kelak dikhawatirkan membuat orang tuanya tersesat, lalu diganti dengan anak yang lebih baik.",
          "Ini bertentangan dengan prinsip dasar keadilan modern: manusia tidak boleh dihukum atas kejahatan yang belum dilakukan. Apalagi anak, yang belum punya tanggung jawab moral penuh.",
          "Pembelaan tradisional biasanya mengatakan Khidr bertindak atas ilmu Allah. Tetapi justru itu masalahnya. Begitu klaim ilmu gaib boleh mengalahkan larangan membunuh, etika menjadi tergantung pada otoritas yang tidak bisa diperiksa.",
        ],
      },
      {
        title: "Dzulqarnain dan geografi legenda",
        paragraphs: [
          "Al-Kahf 18:83-98 membawa Dzulqarnain: perjalanan ke tempat matahari terbenam, tempat matahari terbit, lalu pembangunan dinding besi-tembaga untuk menahan Ya'juj dan Ma'juj.",
          "Bagian ini dekat dengan tradisi legenda Alexander. Gambaran matahari terbenam di air berlumpur atau hitam juga memperlihatkan kosmologi yang sangat pra-modern, seolah matahari punya lokasi terbenam yang bisa didatangi.",
          "Dinding Ya'juj-Ma'juj menambah problem geografis. Jika ini sejarah, di mana dinding itu? Jika ini legenda, mengapa ia disajikan sebagai jawaban wahyu atas pertanyaan?",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Kahf menarik karena sangat naratif. Ia menunjukkan Quran bukan hanya kitab hukum dan ancaman, tetapi juga kitab cerita. Namun cerita tidak otomatis menjadi sejarah, dan hikmah tidak otomatis menjadi etika.",
          "Ashabul Kahfi memperlihatkan jejak legenda; Musa-Khidr menguji batas moral; Dzulqarnain membawa geografi mitologis. Semua ini kaya sebagai bahan sastra, tetapi berat sebagai klaim kebenaran faktual.",
          "Bagian akhir Al-Kahf 18:103-105 bahkan menyebut ada orang yang mengira berbuat baik tetapi amalnya sia-sia karena tidak beriman. Di situ surat ini kembali ke inti eksklusifnya: cerita boleh beragam, tetapi keselamatan tetap dipersempit oleh iman.",
        ],
      },
    ],
    verseRefs: [1, 2, 4, 5, 7, 9, 12, 13, 14, 17, 18, 21, 22, 23, 25, 26, 27, 29, 32, 35, 40, 42, 45, 46, 49, 50, 54, 57, 58, 59, 60, 61, 65, 66, 70, 71, 74, 79, 80, 81, 82, 83, 86, 90, 93, 94, 96, 98, 100, 103, 105, 109, 110],
  },
  "maryam": {
    lead:
      "Maryam sering terasa lebih lembut daripada surat-surat ancaman: ada doa Zakariya, kelahiran Yahya, Maryam yang menyendiri, Isa bayi yang berbicara, lalu deretan nabi. Tetapi kelembutan naratif itu tidak menghapus problemnya. Surat ini tetap bergerak dalam dunia mukjizat, garis keturunan suci, tubuh perempuan yang diputuskan dari atas, dan polemik keras terhadap gagasan anak Tuhan.",
    problemMap:
      "Surat ini memuat huruf muqattaah, kelahiran Yahya dari orang tua lanjut usia, Maryam dan kehamilan ajaib, bayi Isa yang berbicara, penolakan anak Tuhan, dialog Ibrahim dengan ayahnya, garis nabi, surga-neraka, semua orang mendatangi neraka, setan yang dikirim kepada orang kafir, dan reaksi kosmik terhadap doktrin anak Tuhan. Fokusnya ada pada mukjizat, tubuh perempuan, masalah kronologi, dan eksklusivitas keselamatan.",
    sections: [
      {
        title: "Kisah keluarga yang dibuka oleh kode",
        paragraphs: [
          "Maryam 19:1 dibuka dengan huruf-huruf muqattaah. Seperti pembukaan serupa di surat lain, ia memberi rasa sakral tetapi tidak memberi makna yang bisa diperiksa.",
          "Setelah itu, surat masuk ke doa Zakariya yang tua dan ingin keturunan. Maryam 19:7 memberi kabar tentang Yahya. Secara naratif, bagian ini indah: usia lanjut, harapan, keturunan, dan rahmat.",
          "Namun ketika dikatakan nama Yahya belum pernah diberikan sebelumnya, masalah historis muncul. Bentuk Yohanan atau John sudah dikenal dalam tradisi Yahudi. Di sini teks lebih tampak sedang membangun efek teologis daripada ketelitian sejarah nama.",
        ],
      },
      {
        title: "Maryam dan tubuh yang tidak ditanya",
        paragraphs: [
          "Bagian Maryam dalam Maryam 19:16-26 adalah pusat emosional surat. Maryam menyendiri, didatangi sosok malaikat, diberi kabar tentang anak, lalu mengalami kehamilan dan kelahiran dalam tekanan.",
          "Dari sudut iman, ini mukjizat. Dari sudut etika tubuh, ada pertanyaan yang tajam: di mana persetujuan Maryam? Kehamilan disebut sebagai urusan yang sudah diputuskan. Tubuh perempuan menjadi tempat proyek ilahi tanpa ruang tawar yang jelas.",
          "Maryam bahkan berkata ingin mati sebelum peristiwa itu. Surat mencatat kesakitannya, tetapi tidak mengkritik struktur sosial yang membuat perempuan hamil tanpa penjelasan berada dalam ketakutan sebesar itu.",
        ],
      },
      {
        title: "Bayi yang berbicara dan sejarah yang bergeser",
        paragraphs: [
          "Maryam 19:27-33 membawa adegan terkenal: Maryam kembali kepada kaumnya, dituduh, lalu menunjuk bayinya. Isa berbicara dari buaian sebagai hamba Allah dan nabi.",
          "Secara sastra, adegan ini dramatis. Secara biologis, bayi baru lahir berbicara dengan struktur teologis dewasa tidak mungkin dijelaskan secara natural. Ia hanya bekerja jika pembaca sudah menerima mukjizat.",
          "Ada juga masalah sebutan saudara perempuan Harun dalam Maryam 19:28. Tradisi tafsir punya cara membelanya, tetapi pembacaan kritis tetap melihatnya sebagai titik rawan kronologi dan penggabungan figur tradisi sebelumnya.",
        ],
      },
      {
        title: "Isa, anak Tuhan, dan polemik yang tidak netral",
        paragraphs: [
          "Maryam 19:34-36 menegaskan Isa sebagai hamba Allah, bukan anak Tuhan. Surat ini jelas sedang masuk ke polemik dengan komunitas Kristen, tetapi bukan dari posisi netral.",
          "Maryam 19:88-92 memberi reaksi sangat keras terhadap klaim Allah memiliki anak: langit hampir pecah, bumi hampir terbelah, gunung hampir runtuh. Perbedaan teologi digambarkan seperti bencana kosmik.",
          "Kritik sekuler di sini tidak perlu membela doktrin Kristen. Yang dikritik adalah respons teks terhadap perbedaan teologis: bukan dialog historis, melainkan dramatisasi ancaman dan rasa bersalah kosmik.",
        ],
      },
      {
        title: "Ibrahim dan pemutusan keluarga",
        paragraphs: [
          "Maryam 19:41-50 menampilkan Ibrahim berdialog dengan ayahnya tentang berhala. Ibrahim berbicara dari posisi punya ilmu yang tidak dimiliki ayahnya, lalu memperingatkan agar ayahnya tidak menyembah setan.",
          "Narasinya menempatkan Ibrahim sebagai pembawa monoteisme yang benar. Tetapi secara sosial, kisah ini juga menormalisasi pemisahan keluarga karena keyakinan. Ketika ayah mengancam, Ibrahim menjauh, lalu diberi keturunan dan nama baik.",
          "Bagi komunitas yang sedang membangun identitas, kisah ini efektif. Bagi etika relasi manusia, ia perlu dibaca hati-hati agar tidak berubah menjadi pembenaran untuk memutus ikatan keluarga secara ideologis.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Maryam adalah surat yang indah secara suasana, tetapi tidak sederhana secara moral. Ia memakai kelahiran ajaib untuk membangun otoritas, tubuh perempuan untuk menjadi tanda, dan polemik teologi untuk membatasi makna Isa.",
          "Bagian akhirnya kembali keras: semua mendatangi neraka dalam Maryam 19:71, setan dikirim kepada orang kafir dalam Maryam 19:83, dan generasi yang dibinasakan dijadikan penutup peringatan.",
          "Jadi surat ini bukan hanya kisah Maryam yang lembut. Ia adalah teks identitas: mengambil figur dari tradisi Yahudi-Kristen, menata ulang maknanya, lalu menutup pintu bagi pembacaan lain.",
        ],
      },
    ],
    verseRefs: [1, 7, 8, 9, 10, 12, 16, 17, 19, 21, 22, 23, 26, 28, 29, 30, 34, 35, 37, 41, 43, 44, 46, 48, 51, 58, 59, 61, 66, 68, 71, 73, 79, 83, 85, 88, 90, 91, 97, 98],
  },
  "taha": {
    lead:
      "Taha adalah surat Musa dalam versi panjang dan teatrikal: api di lembah, suara Tuhan, tongkat yang menjadi ular, tangan putih, Firaun, penyihir, laut yang terbelah, anak lembu, Samiri, lalu Adam dan Iblis. Surat ini kuat sebagai drama. Tetapi sebagai etika dan sejarah, banyak bagiannya membutuhkan pertanyaan yang tidak kecil.",
    problemMap:
      "Surat ini memuat huruf muqattaah, Quran sebagai peringatan bagi yang takut, Tuhan di atas Arasy, panggilan Musa di Tuwa, mukjizat tongkat dan tangan, Musa-Harun melawan Firaun, konversi penyihir, penenggelaman Firaun, anak lembu Samiri, hukuman sosial, kiamat, Adam-Iblis, aurat, dan ancaman bagi yang berpaling. Fokusnya ada pada mukjizat, kepemimpinan, kekerasan, dan pendidikan iman berbasis rasa takut.",
    sections: [
      {
        title: "Peringatan bagi orang yang takut",
        paragraphs: [
          "Taha 20:1-3 membuka dengan huruf misterius dan pernyataan bahwa Quran bukan untuk menyusahkan, melainkan peringatan bagi yang takut. Ini menarik karena rasa takut langsung ditempatkan sebagai kondisi penerimaan.",
          "Jika petunjuk hanya bekerja bagi yang sudah takut, maka ia tidak sepenuhnya berdiri sebagai argumen rasional. Ia bekerja melalui suasana batin tertentu: tunduk, gentar, siap menerima.",
          "Pembukaan ini memberi warna seluruh surat. Mukjizat, ancaman, dan kisah kehancuran bukan sekadar cerita; semuanya mendidik pembaca lewat rasa takut yang diarahkan.",
        ],
      },
      {
        title: "Tuhan yang berbicara dari tempat tertentu",
        paragraphs: [
          "Taha 20:4-7 menggambarkan Tuhan pencipta langit-bumi, bersemayam di atas Arasy, dan mengetahui yang tersembunyi. Lalu dalam Taha 20:11-14 Musa dipanggil di lembah suci Tuwa dan diminta melepas sandal.",
          "Secara naratif, adegan ini sangat kuat. Secara teologis, ia membawa antropomorfisme halus: Tuhan yang tidak terbatas ruang berbicara dari tempat tertentu, menguduskan lokasi tertentu, dan memberi instruksi ritual tertentu.",
          "Ini bukan masalah jika dibaca sebagai mitos teofani. Tetapi jika dibaca sebagai filsafat ketuhanan yang konsisten, lokalisasi semacam ini menimbulkan gesekan dengan klaim Tuhan yang melampaui ruang.",
        ],
      },
      {
        title: "Mukjizat sebagai politik pertunjukan",
        paragraphs: [
          "Taha 20:17-23 memberi Musa tongkat yang berubah menjadi ular dan tangan yang putih bercahaya. Mukjizat itu lalu dibawa ke panggung melawan Firaun dan para penyihir.",
          "Pertandingannya dramatis, tetapi juga problematik. Hasilnya sudah dijanjikan sebelum dimulai. Para penyihir melihat tanda, lalu langsung sujud dan berubah menjadi pembela iman yang sangat matang.",
          "Dari sisi cerita, ini efektif. Dari sisi psikologi perubahan keyakinan, konversi instan seperti itu terlalu rapi. Manusia biasanya tidak berpindah seluruh kosmologi batinnya hanya dalam satu adegan.",
        ],
      },
      {
        title: "Firaun, laut, dan hukuman kolektif",
        paragraphs: [
          "Taha 20:77-79 membawa pembelahan laut dan penenggelaman Firaun beserta pasukannya. Narasi ini memberi rasa kemenangan moral: penindas kalah, yang tertindas selamat.",
          "Tetapi hukuman kolektif tetap menjadi masalah. Pasukan Firaun tidak semua identik dengan Firaun sebagai penguasa. Ada prajurit, bawahan, mungkin orang yang tidak punya pilihan politik.",
          "Teks menyederhanakan sejarah menjadi pemimpin sesat dan kaum yang disesatkan. Dalam etika modern, tanggung jawab moral tidak bisa semudah itu dilebur ke satu rombongan yang tenggelam.",
        ],
      },
      {
        title: "Samiri dan kekerasan internal komunitas",
        paragraphs: [
          "Bagian anak lembu dalam Taha 20:83-98 memperlihatkan krisis internal setelah Musa pergi. Samiri membuat patung anak lembu, kaumnya tergoda, Musa marah, Harun ditekan, lalu Samiri dihukum dengan isolasi sosial.",
          "Yang menarik, krisis ini bukan sekadar kesalahan teologi. Ia tentang kepemimpinan, kepanikan massa, simbol agama, dan kontrol komunitas. Musa bahkan digambarkan memegang kepala dan janggut Harun.",
          "Teks tidak banyak memberi evaluasi moral terhadap agresi Musa. Fokusnya pada penyimpangan tauhid. Ini membuat kekerasan internal terhadap figur sendiri tampak seperti efek samping yang tidak terlalu dipersoalkan.",
        ],
      },
      {
        title: "Adam, aurat, dan hidup yang sempit",
        paragraphs: [
          "Penutup naratif Taha 20:115-127 kembali ke Adam dan Iblis. Adam lupa, tergoda oleh pohon keabadian, auratnya tampak, lalu manusia turun ke bumi dalam relasi permusuhan.",
          "Kisah ini menghubungkan kesadaran tubuh dengan pelanggaran. Aurat muncul sebagai tanda jatuh, sehingga tubuh dan malu moral saling menempel.",
          "Taha 20:124 lalu mengancam kehidupan sempit bagi yang berpaling dari peringatan. Surat ditutup bukan dengan kebebasan berpikir, melainkan dengan pilihan keras: ikuti petunjuk atau hidup dalam sempit dan kembali dalam keadaan buta.",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 5, 7, 11, 12, 14, 15, 17, 20, 22, 24, 27, 31, 39, 40, 44, 45, 48, 50, 55, 56, 66, 67, 69, 70, 71, 74, 77, 78, 79, 81, 85, 86, 88, 92, 94, 96, 97, 100, 105, 109, 113, 115, 116, 120, 121, 123, 124, 126, 128, 133],
  },
  "al-anbiya": {
    lead:
      "Al-Anbiya' berarti para nabi, dan surat ini memang seperti parade ringkas para nabi: Ibrahim, Luth, Nuh, Daud, Sulaiman, Ayyub, Yunus, Zakariya, Maryam. Di sela-selanya ada kosmologi, malaikat, kiamat, Ya'juj-Ma'juj, dan neraka. Ia seperti ringkasan besar argumen Quran: sejarah, alam, dan akhirat harus menunjuk ke tauhid.",
    problemMap:
      "Surat ini memuat kedekatan hari perhitungan, tuduhan terhadap Quran, pembinasaan kota, Allah yang tidak ditanya, semua rasul laki-laki, langit-bumi yang dulu menyatu, gunung sebagai penstabil, langit sebagai atap, kisah Ibrahim menghancurkan berhala, parade nabi, Ya'juj-Ma'juj, neraka sebagai bahan bakar, bumi diwarisi orang saleh, dan Muhammad sebagai rahmat. Fokusnya ada pada kosmologi lama, hukuman kolektif, dan otoritas ilahi yang berada di luar akuntabilitas.",
    sections: [
      {
        title: "Hari perhitungan yang selalu dekat",
        paragraphs: [
          "Al-Anbiya 21:1 membuka dengan perhitungan manusia yang semakin dekat, sementara mereka lalai. Kalimat seperti ini kuat secara psikologis: ia menciptakan urgensi.",
          "Masalahnya, urgensi eskatologis semacam ini telah hidup berabad-abad. Jika hari itu selalu dekat tetapi tidak pernah tiba dalam skala sejarah manusia, ia lebih berfungsi sebagai tekanan batin daripada informasi waktu.",
          "Ketika kritik muncul, Al-Anbiya 21:2-5 membingkai pendengar sebagai lalai, bermain-main, atau menyebut Quran mimpi kacau. Kritik dicatat, tetapi tidak dijawab secara setara.",
        ],
      },
      {
        title: "Tuhan yang tidak ditanya",
        paragraphs: [
          "Al-Anbiya 21:22-23 memberi argumen tauhid dan menyatakan bahwa Allah tidak ditanya tentang apa yang Dia kerjakan, sementara manusia akan ditanya. Ini ayat yang sangat menentukan secara etika.",
          "Jika otoritas tertinggi tidak dapat dimintai pertanggungjawaban, maka keadilan menjadi satu arah. Manusia wajib menjawab, Tuhan tidak perlu menjelaskan.",
          "Bagi teologi, ini kedaulatan. Bagi etika sekuler, ini masalah besar: keadilan tanpa akuntabilitas selalu rawan berubah menjadi kekuasaan absolut.",
        ],
      },
      {
        title: "Kosmologi yang sering dipaksa menjadi sains",
        paragraphs: [
          "Al-Anbiya 21:30-33 sering dibawa ke diskusi mukjizat ilmiah: langit dan bumi dulu menyatu, air sebagai asal kehidupan, gunung agar bumi tidak guncang, langit sebagai atap, matahari dan bulan beredar.",
          "Pembacaan modern sering menempelkan Big Bang atau biologi ke ayat ini. Tetapi teksnya lebih cocok dibaca sebagai kosmologi kuno: dunia atas, dunia bawah, atap langit, gunung sebagai penahan, dan benda langit yang bergerak di jalurnya.",
          "Masalahnya bukan jika teks memakai bahasa zamannya. Masalahnya adalah klaim bahwa bahasa zaman itu adalah sains modern yang sudah disembunyikan sejak awal.",
        ],
      },
      {
        title: "Ibrahim dan etika menghancurkan simbol orang lain",
        paragraphs: [
          "Kisah Ibrahim dalam Al-Anbiya 21:51-70 menampilkan penghancuran berhala, strategi menyisakan patung besar, lalu jawaban ironis bahwa patung besar itulah yang melakukannya.",
          "Sebagai satire terhadap penyembahan berhala, kisah ini tajam. Tetapi secara etika sosial, ia problematik: properti dan simbol agama kelompok lain dihancurkan untuk membuktikan kesalahan mereka.",
          "Jika tindakan ini diperlakukan sebagai teladan literal, ia berbahaya dalam masyarakat plural. Kritik terhadap simbol boleh dilakukan dengan argumen, seni, atau debat; menghancurkan simbol orang lain adalah kekerasan budaya.",
        ],
      },
      {
        title: "Parade nabi dan simplifikasi sejarah",
        paragraphs: [
          "Setelah Ibrahim, surat bergerak cepat: Luth, Nuh, Daud, Sulaiman, Ayyub, Yunus, Zakariya, Maryam. Setiap tokoh dipakai untuk menunjukkan pola: nabi diberi rahmat, penolak dihukum, Tuhan menolong yang dikehendaki.",
          "Masalahnya, sejarah menjadi terlalu rapi. Konflik sosial, politik, ekonomi, dan psikologi manusia diperas menjadi satu pola iman-lawan-ingkar.",
          "Al-Anbiya 21:76-77 tentang banjir Nuh, Al-Anbiya 21:83-84 tentang Ayyub, dan Al-Anbiya 21:87-88 tentang Yunus semuanya bekerja sebagai pelajaran iman. Tetapi sebagai sejarah manusia, ia meninggalkan terlalu banyak detail yang hilang.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Anbiya' adalah surat ringkasan besar: alam, nabi, kota hancur, kiamat, neraka, dan klaim rahmat. Ia ingin seluruh sejarah dan kosmos menjadi saksi tauhid.",
          "Tetapi saksi-saksi itu tidak netral. Alam dibaca lewat kosmologi lama, sejarah diringkas menjadi hukuman, dan Tuhan diletakkan di luar pertanyaan.",
          "Ketika Al-Anbiya 21:107 menyebut Muhammad sebagai rahmat bagi seluruh alam, pembaca kritis bertanya: rahmat bagi siapa, dengan syarat apa, dan bagaimana klaim universal itu diuji oleh manusia yang tidak pernah masuk ke dunia Islam?",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 5, 6, 7, 11, 12, 15, 22, 23, 25, 30, 31, 32, 33, 35, 37, 39, 45, 47, 51, 57, 58, 63, 68, 69, 74, 76, 77, 79, 81, 83, 87, 89, 91, 92, 93, 96, 98, 100, 105, 107],
  },
  "al-hajj": {
    lead:
      "Al-Hajj adalah surat yang campurannya kasar dan menarik: kiamat yang mengguncang tubuh, embriologi, orang yang beragama di tepi, Ka'bah, haji, kurban, izin perang, tempat ibadah, dan ayat yang menyebut setan memasukkan gangguan ke dalam keinginan para nabi. Surat ini terasa seperti ritual yang bertemu politik.",
    problemMap:
      "Surat ini memuat gambaran kiamat, embriologi sebagai bukti kebangkitan, petunjuk selektif, penyiksaan neraka grafis, Ka'bah dan haji, kurban hewan, izin berperang, pembelaan tempat ibadah, umat terdahulu yang dihancurkan, ayat tentang gangguan setan terhadap wahyu, hijrah dan kematian, keragaman syariat, berhala yang tidak mampu mencipta lalat, dan perintah jihad. Fokusnya ada pada ritual tubuh, kekerasan, legitimasi Ka'bah, dan problem wahyu yang bisa diganggu.",
    sections: [
      {
        title: "Kiamat yang menyerang tubuh",
        paragraphs: [
          "Al-Hajj 22:1-2 membuka dengan guncangan kiamat: ibu menyusui lupa bayinya, perempuan hamil keguguran, manusia tampak mabuk padahal tidak. Ini adalah horor tubuh.",
          "Gambarannya efektif untuk membuat pembaca gentar. Tetapi secara etis, ia juga mengganggu: bayi, ibu, dan tubuh hamil dijadikan citra penderitaan massal untuk menegaskan kekuasaan akhirat.",
          "Surat ini tidak memulai dari argumen yang tenang. Ia memulai dengan trauma kosmik.",
        ],
      },
      {
        title: "Embriologi sebagai bukti kebangkitan",
        paragraphs: [
          "Al-Hajj 22:5 memakai tahapan penciptaan manusia: tanah, mani, sesuatu yang melekat, segumpal daging, lalu kelahiran dan usia tua. Tujuannya bukan pelajaran biologi, melainkan membuktikan bahwa kebangkitan mungkin.",
          "Tetapi jika ayat ini dipakai sebagai sains, masalahnya muncul. Embriologi modern tidak berjalan dalam urutan sederhana seperti segumpal darah lalu segumpal daging, kemudian tulang dibungkus daging secara terpisah.",
          "Sebagai retorika pra-modern, bagian ini masuk akal. Sebagai bukti pengetahuan ilahi yang melampaui zaman, ia tidak kuat.",
        ],
      },
      {
        title: "Ka'bah dan legitimasi asal-usul",
        paragraphs: [
          "Al-Hajj 22:26-29 mengaitkan Ibrahim dengan tempat Ka'bah dan seruan haji. Ini memberi praktik haji akar yang tua dan terhormat.",
          "Secara sejarah kritis, klaim bahwa Ibrahim membangun atau menetapkan Ka'bah tidak punya bukti arkeologis independen yang kokoh. Ia lebih tampak sebagai cara Islam menata ulang pusat ritual Arab dalam silsilah monoteistik.",
          "Itu tidak aneh dalam sejarah agama. Tradisi baru sering mengklaim akar lama. Tetapi klaim itu tetap perlu dibedakan dari bukti sejarah.",
        ],
      },
      {
        title: "Kurban dan tubuh hewan",
        paragraphs: [
          "Al-Hajj 22:34-37 membahas penyembelihan hewan sebagai syiar. Menariknya, ayat 37 menyatakan daging dan darah tidak sampai kepada Allah; yang sampai adalah ketakwaan.",
          "Pernyataan itu hampir membuka kritik terhadap ritual fisik. Jika yang penting adalah takwa, mengapa penyembelihan tetap menjadi pusat simbol? Mengapa tubuh hewan tetap diperlukan untuk menandai kepatuhan manusia?",
          "Dalam dunia modern, pertanyaan tentang kesejahteraan hewan, dampak lingkungan, dan skala ritual tidak bisa dihindari. Surat ini tidak punya bahasa untuk itu.",
        ],
      },
      {
        title: "Perang yang diizinkan dan wahyu yang diganggu",
        paragraphs: [
          "Al-Hajj 22:39-41 sering dibaca sebagai izin awal berperang karena dizalimi. Secara konteks, ia bisa dibaca sebagai pembelaan komunitas yang ditekan. Tetapi bahasanya tetap membuka pintu untuk perang atas nama membela agama.",
          "Yang lebih tajam adalah Al-Hajj 22:52-53. Ayat ini menyebut bahwa setiap rasul atau nabi ketika punya keinginan, setan memasukkan gangguan, lalu Allah menghapus gangguan itu dan meneguhkan ayat-ayat-Nya.",
          "Bagian ini dekat dengan problem ayat setan: jika setan bisa mengganggu proses kenabian, bagaimana pembaca membedakan gangguan yang sudah dihapus dari yang tidak pernah masuk? Jawabannya biasanya teologis, bukan historis.",
        ],
      },
      {
        title: "Apa yang tersisa",
        paragraphs: [
          "Al-Hajj memperlihatkan agama sebagai tubuh: tubuh yang takut kiamat, tubuh janin, tubuh hewan kurban, tubuh peziarah, tubuh yang berperang, tubuh yang dihukum di neraka.",
          "Surat ini kuat karena konkret. Tetapi kekonkretannya juga membuat problemnya tampak jelas: ritual, kekerasan, penderitaan hewan, hukuman grafis, dan wahyu yang perlu dibersihkan dari gangguan.",
          "Jika dibaca sebagai dokumen komunitas yang sedang menata ritual dan pertahanan, ia bisa dipahami. Jika dibaca sebagai moral universal, ia menuntut terlalu banyak penyesuaian.",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 5, 8, 11, 15, 16, 17, 18, 19, 22, 25, 26, 27, 28, 30, 34, 36, 37, 38, 39, 40, 41, 45, 47, 50, 52, 53, 54, 58, 60, 62, 63, 67, 71, 73, 75, 77, 78],
  },
  "al-muminun": {
    lead:
      "Al-Mu'minun membuka dengan daftar orang beriman yang beruntung: khusyuk, menjauhi yang sia-sia, menunaikan zakat, menjaga seksualitas, menjaga amanah. Lalu surat itu cepat melebar ke tubuh, janin, tujuh langit, Nuh, umat yang dibinasakan, Musa, Maryam, Isa, dan neraka. Di sini tubuh manusia menjadi salah satu medan utama iman.",
    problemMap:
      "Surat ini memuat ciri orang beriman, izin seksual terhadap istri dan budak perempuan, embriologi, tujuh langit, tanda alam, kisah Nuh dan umat setelahnya, Musa-Firaun, Isa-Maryam, agama yang satu tetapi terpecah, ketakutan orang beriman, skeptisisme yang disebut benci kebenaran, kebangkitan, penyesalan setelah mati, dan neraka yang menolak dialog. Fokusnya ada pada tubuh, seksualitas, embriologi, hukuman kolektif, dan keselamatan yang eksklusif.",
    sections: [
      {
        title: "Orang beriman dan kontrol tubuh",
        paragraphs: [
          "Al-Mu'minun 23:1-11 membuka dengan daftar kualitas orang beriman. Beberapa di antaranya bernilai sosial: amanah, janji, zakat, dan disiplin.",
          "Tetapi bagian seksualitas dalam Al-Mu'minun 23:5-7 membawa problem besar. Hubungan seksual dibolehkan dengan istri dan dengan apa yang dimiliki tangan kanan, yaitu budak dalam kerangka sosial klasik.",
          "Di sini moral seksual tidak dibangun di atas persetujuan setara, melainkan status kepemilikan dan legalitas patriarkal. Bagi etika modern, kepemilikan manusia atas manusia lain tidak bisa menjadi dasar relasi seksual yang sah.",
        ],
      },
      {
        title: "Embriologi yang dijadikan bukti",
        paragraphs: [
          "Al-Mu'minun 23:12-14 adalah salah satu bagian paling sering dikutip dalam klaim mukjizat ilmiah: saripati tanah, mani, sesuatu yang melekat, segumpal daging, tulang, lalu tulang dibungkus daging.",
          "Sebagai gambaran pra-modern tentang perkembangan janin, ayat ini bisa dipahami. Tetapi embriologi modern tidak berjalan dalam urutan kasar itu. Jaringan, tulang, otot, dan organ berkembang secara kompleks dan saling bertahap.",
          "Masalahnya bukan karena teks kuno memakai bahasa sederhana. Masalahnya adalah ketika bahasa sederhana itu dipaksakan menjadi bukti sains modern.",
        ],
      },
      {
        title: "Tujuh langit dan dunia yang disusun bertingkat",
        paragraphs: [
          "Al-Mu'minun 23:17 menyebut tujuh jalan atau lapis di atas manusia. Ini dekat dengan imajinasi kosmos bertingkat yang juga muncul dalam banyak tradisi kuno.",
          "Surat kemudian memakai hujan, kebun, zaitun, ternak, dan kapal sebagai tanda. Seperti An-Nahl, dunia dipakai sebagai daftar manfaat dan bukti.",
          "Tetapi alam tidak otomatis menjadi bukti bagi satu teologi. Ia bisa dipahami melalui sains, filsafat, pengalaman estetis, atau banyak agama. Surat ini memilih satu tafsir dan membuatnya mutlak.",
        ],
      },
      {
        title: "Sejarah sebagai siklus kehancuran",
        paragraphs: [
          "Kisah Nuh dalam Al-Mu'minun 23:23-30 diikuti generasi demi generasi yang menolak rasul. Polanya cepat: utusan datang, pemuka menolak, azab datang, umat menjadi cerita.",
          "Al-Mu'minun 23:27 bahkan melarang Nuh membicarakan orang zalim karena mereka akan ditenggelamkan. Ini menutup pintu belas kasih sebelum hukuman selesai.",
          "Surat ini membuat sejarah tampak seperti eksperimen berulang: manusia gagal, dihancurkan, diganti. Bagi etika modern, pola ini terlalu mudah menghapus individu di dalam komunitas.",
        ],
      },
      {
        title: "Agama satu, manusia terpecah",
        paragraphs: [
          "Al-Mu'minun 23:52-53 menyebut agama sebagai satu, tetapi manusia memecah urusan mereka menjadi berbagai golongan. Ini salah satu ketegangan besar dalam banyak teks agama.",
          "Jika pesan ilahi jelas dan satu, mengapa hasil sejarahnya justru pecah? Jawaban umum adalah kesalahan manusia. Tetapi secara kritis, perpecahan juga bisa menunjukkan bahwa teks dan wahyu selalu masuk ke bahasa, kuasa, tafsir, dan kepentingan manusia.",
          "Dengan kata lain, pluralitas bukan hanya kegagalan moral. Ia bagian dari cara manusia memahami sesuatu yang tidak pernah datang tanpa perantara.",
        ],
      },
      {
        title: "Neraka yang menutup percakapan",
        paragraphs: [
          "Bagian akhir surat sangat keras. Al-Mu'minun 23:99-100 menolak permintaan kembali setelah kematian. Al-Mu'minun 23:102-108 menggambarkan timbangan, wajah terbakar, dan perintah agar penghuni neraka diam.",
          "Kalimat 'diamlah dan jangan berbicara' menjadi titik paling dingin. Tidak ada rehabilitasi, tidak ada dialog, tidak ada jalan kembali. Sistemnya selesai ketika vonis dijatuhkan.",
          "Jika moralitas modern makin bergerak ke pemulihan dan pertanggungjawaban yang manusiawi, bagian ini bergerak ke arah sebaliknya: hukuman total, permanen, dan tanpa percakapan.",
        ],
      },
    ],
    verseRefs: [1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 21, 23, 24, 25, 27, 31, 33, 37, 40, 41, 43, 44, 45, 48, 50, 52, 53, 54, 57, 60, 62, 68, 70, 71, 75, 77, 82, 83, 84, 90, 91, 99, 100, 101, 102, 104, 108, 112, 115, 117],
  },
  "ya-sin": {
    lead:
      "Ya Sin sering diperlakukan sebagai surat yang akrab, dibaca di rumah, di majelis, dan di sekitar kematian. Tetapi jika teksnya dibaca sebagai argumen, ia jauh lebih keras daripada kesan ritualnya: wahyu dibenarkan dari dirinya sendiri, sebagian manusia digambarkan sudah tertutup, lalu kebangkitan dan neraka dipakai sebagai pusat tekanan.",
    problemMap:
      "Surat ini menggabungkan pembelaan wahyu, predestinasi orang yang tidak beriman, kisah negeri anonim, tanda-tanda alam, kebangkitan fisik, surga-neraka, dan klaim penciptaan instan. Fokusnya ada pada ketegangan antara peringatan dan penutupan hati, serta cara fenomena alam dijadikan bukti teologis.",
    sections: [
      {
        title: "Kitab yang bersumpah atas dirinya sendiri",
        paragraphs: [
          "Ya Sin dibuka dengan huruf muqattaah dan sumpah atas Al-Quran yang penuh hikmah. Sebagai retorika, ini kuat. Sebagai pembuktian, ia melingkar: teks membenarkan dirinya dengan dirinya sendiri, lalu memakai klaim itu untuk menetapkan Muhammad sebagai rasul.",
          "Masalahnya bukan bahwa sebuah teks suci berbicara dengan keyakinan. Masalahnya muncul ketika keyakinan itu diperlakukan sebagai bukti. Ya Sin 36:2-5 tidak memberi pembaca jalan verifikasi di luar klaim internal: kitab ini benar karena ia berkata bahwa ia benar dan berasal dari Allah.",
        ],
      },
      {
        title: "Peringatan untuk orang yang sudah tertutup",
        paragraphs: [
          "Bagian awal surat ini cepat masuk ke persoalan predestinasi. Sebagian orang tidak beriman karena perkataan hukuman telah berlaku atas mereka. Lalu digambarkan ada belenggu, sekat di depan dan belakang, dan penutupan penglihatan.",
          "Di sini muncul ketegangan yang sulit dilewati. Jika Allah sendiri memasang penghalang sehingga mereka tidak dapat melihat, bagaimana penolakan mereka dapat dihukum sebagai kesalahan moral penuh? Ya Sin 36:7-10 membuat dakwah terasa seperti pengadilan yang vonisnya sudah dibacakan sebelum pembelaan dimulai.",
          "Ayat berikutnya mengatakan peringatan hanya berguna bagi yang mau mengikuti peringatan. Itu membuat fungsi peringatan menjadi sempit: bukan membuka yang tertutup, melainkan mengafirmasi yang memang sudah menerima.",
        ],
      },
      {
        title: "Kota anonim dan hukuman satu teriakan",
        paragraphs: [
          "Kisah penduduk negeri dalam Ya Sin menarik karena detail historisnya kabur. Kota tidak disebut, utusan tidak dinamai, dan seorang pembela dari ujung kota muncul sebagai figur moral. Narasi ini bekerja sebagai perumpamaan, bukan sebagai sejarah yang bisa diperiksa.",
          "Penduduk menolak para utusan dengan alasan yang sebenarnya dapat dipahami: mereka hanyalah manusia biasa dan klaim wahyu tidak dibuktikan. Tetapi teks mengarahkan pembaca agar melihat penolakan itu sebagai keburukan, lalu puncaknya adalah kehancuran seluruh komunitas dengan satu teriakan.",
          "Masalah etisnya ada pada proporsionalitas. Penolakan terhadap klaim religius dibalas dengan pemusnahan massal. Jika ini hanya perumpamaan, moralnya tetap keras: ragu terhadap utusan berujung pada kehancuran total.",
        ],
      },
      {
        title: "Alam sebagai bukti yang dipaksa berbicara",
        paragraphs: [
          "Ya Sin memakai bumi yang hidup setelah mati, kebun kurma, anggur, malam, siang, matahari, bulan, kapal, dan ternak sebagai tanda. Ini bahasa religius yang akrab: alam dipandang sebagai panggung teologi.",
          "Tetapi beberapa pernyataan membawa jejak kosmologi lama. Matahari berjalan ke tempat peredarannya, malam dan siang dibayangkan seolah saling mengejar, dan segala sesuatu disebut berpasang-pasangan. Dalam pembacaan modern, bagian-bagian ini tidak melampaui imajinasi alam pra-saintifik.",
          "Pertanyaannya bukan apakah alam bisa menimbulkan rasa takjub. Bisa. Pertanyaannya: apakah rasa takjub itu cukup untuk membuktikan klaim teologis tertentu? Ya Sin berkali-kali menjawab ya, padahal secara logis langkah itu terlalu cepat.",
        ],
      },
      {
        title: "Kebangkitan, tubuh, dan ancaman",
        paragraphs: [
          "Bagian akhir surat kembali ke kebangkitan fisik: tulang belulang yang hancur akan dihidupkan, sangkakala berbunyi, manusia keluar dari kubur, anggota tubuh bersaksi, dan neraka memisahkan orang berdosa dari orang beriman.",
          "Argumen tentang kebangkitan sering berbentuk analogi: Allah yang menciptakan pertama kali tentu mampu menghidupkan kembali. Tetapi analogi kemampuan mencipta dengan rekonstruksi tubuh yang telah terurai tidak dijelaskan sebagai mekanisme, hanya diletakkan sebagai kuasa.",
          "Pada akhirnya Ya Sin bukan sekadar surat penghiburan. Ia adalah surat peringatan yang memadukan klaim wahyu, predestinasi, tanda alam, dan ancaman akhirat. Di bawah lapisan keakraban ritualnya, teks ini menyimpan masalah besar tentang keadilan, bukti, dan cara rasa takut dibentuk menjadi iman.",
        ],
      },
    ],
    verseRefs: [1, 2, 6, 7, 8, 9, 10, 13, 15, 29, 36, 38, 40, 54, 65, 77, 78, 82],
  },
  "as-saffat": {
    lead:
      "As-Saffat adalah surat yang penuh barisan: malaikat berbaris, setan diusir dari langit, manusia digiring ke neraka atau surga, lalu para nabi ditampilkan dalam pola yang berulang. Surat ini seperti panggung kosmik tempat otoritas Allah ditegaskan lewat tatanan, ancaman, dan kisah-kisah lama.",
    problemMap:
      "Surat ini memuat kosmologi langit yang dijaga dari setan, meteor sebagai senjata, penciptaan dari tanah liat, kebangkitan dengan satu teriakan, surga material, pohon zaqqum, rangkaian kisah nabi, dan argumen gender tentang anak perempuan Allah. Fokusnya ada pada campuran mitologi kosmik, ancaman akhirat, dan repetisi naratif.",
    sections: [
      {
        title: "Sumpah atas yang tidak dapat diperiksa",
        paragraphs: [
          "Surat ini dibuka dengan sumpah atas rombongan yang berbaris, menghalau, dan membacakan peringatan. Tradisi tafsir membacanya sebagai malaikat. Tetapi dari sisi pembuktian, entitas itu tidak dapat diperiksa oleh pembaca.",
          "Dengan begitu, fondasi argumen tauhid di awal As-Saffat berdiri di atas dunia gaib yang sudah harus diterima terlebih dahulu. Bagi yang percaya, ini menggetarkan. Bagi yang membaca kritis, ini bukan bukti, melainkan asumsi teologis.",
        ],
      },
      {
        title: "Langit sebagai benteng dari setan",
        paragraphs: [
          "Bagian paling mencolok adalah gambaran langit dunia dihias bintang dan dijaga dari setan yang mencuri dengar. Setan dilempari dari segala penjuru, bahkan dikejar oleh bintang menyala.",
          "Ini adalah kosmologi mitologis: langit sebagai ruang bertingkat, malaikat sebagai penghuni atas, setan sebagai penyusup, dan meteor sebagai proyektil. Dalam pengetahuan astronomi modern, meteor bukan senjata gaib, melainkan benda langit yang masuk atmosfer.",
          "As-Saffat 37:6-10 memperlihatkan teks yang sangat dekat dengan imajinasi kosmos kuno, bukan dengan alam semesta fisik yang kita kenal hari ini.",
        ],
      },
      {
        title: "Kebangkitan dijawab dengan penghinaan",
        paragraphs: [
          "Ketika orang bertanya apakah manusia yang telah menjadi tanah dan tulang akan dibangkitkan, pertanyaannya wajar. Itu pertanyaan tentang tubuh, materi, kematian, dan identitas.",
          "Jawaban surat ini bukan penjelasan panjang, tetapi penegasan: ya, dan kamu akan terhina. Kebangkitan cukup dengan satu teriakan. Pola ini membuat skeptisisme diposisikan bukan sebagai pertanyaan yang sah, melainkan sebagai pembangkangan yang pantas dipermalukan.",
          "Di titik ini, As-Saffat lebih memilih tekanan retoris daripada argumentasi. Pertanyaan biologis dan filosofis dijawab dengan otoritas dan ancaman.",
        ],
      },
      {
        title: "Surga yang menonton neraka",
        paragraphs: [
          "Gambaran surga di As-Saffat sangat material: buah-buahan, dipan, minuman jernih, dan perempuan bermata indah. Ia bicara dalam imajinasi kenikmatan yang sangat bisa dikenali oleh masyarakat penerima awalnya.",
          "Lebih problematik lagi, ada adegan penghuni surga melihat temannya di neraka. Kebahagiaan orang selamat dipertegas dengan pemandangan orang lain menderita. Ini menimbulkan pertanyaan etis: apakah keselamatan yang baik perlu mempertontonkan penderitaan pihak yang kalah?",
          "Surga dalam bagian ini bukan hanya tempat damai, tetapi juga tempat validasi: aku benar, dia salah, dan sekarang ia terbakar.",
        ],
      },
      {
        title: "Kisah nabi sebagai pola berulang",
        paragraphs: [
          "Nuh, Ibrahim, Musa, Harun, Ilyas, Luth, dan Yunus muncul dalam rangkaian yang cepat. Polanya hampir sama: nabi datang, ditolak, yang benar diselamatkan, yang salah dihukum, lalu nama nabi diberi salam.",
          "Repetisi ini membuat surat terasa seperti litani kemenangan wahyu. Tetapi ia juga menyederhanakan kompleksitas sejarah menjadi satu pola moral tunggal. Yang menerima selamat, yang menolak binasa.",
          "Kisah Yunus, penyembelihan anak Ibrahim, dan bantahan tentang malaikat perempuan menambah masalah lain: unsur ajaib yang sulit diverifikasi, ambiguitas tokoh, dan bias patriarkal yang muncul ketika teks mengejek gagasan anak perempuan untuk Tuhan.",
        ],
      },
    ],
    verseRefs: [1, 6, 7, 10, 11, 16, 18, 22, 35, 42, 48, 55, 62, 65, 102, 107, 125, 149, 153, 170],
  },
  "sad": {
    lead:
      "Sad berbicara dengan nada polemik. Ia menghadapi penolakan Quraisy, mengingatkan kehancuran umat terdahulu, lalu membawa kisah Daud, Sulaiman, Ayyub, para nabi, neraka, dan Iblis. Surat ini seperti rangkaian pembelaan otoritas: wahyu benar, penolak sombong, dan kekuasaan harus tunduk pada perintah langit.",
    problemMap:
      "Surat ini memuat huruf misterius, tuduhan terhadap skeptisisme, hukuman kolektif, kisah Daud yang ambigu, Sulaiman dengan kekuasaan supranatural, Ayyub dan pukulan simbolik, surga-neraka, serta dialog Iblis. Fokusnya ada pada otoritas, kekuasaan, narasi yang membutuhkan tafsir, dan ancaman sebagai alat penegasan.",
    sections: [
      {
        title: "Keraguan yang langsung disebut kesombongan",
        paragraphs: [
          "Sad dibuka dengan huruf tunggal yang tidak dijelaskan, lalu sumpah atas Al-Quran yang mengandung peringatan. Setelah itu, penolak tidak diberi banyak ruang sebagai pihak yang bertanya; mereka ditempatkan dalam kesombongan dan permusuhan.",
          "Ini pola yang berulang dalam surat Makkiyah: skeptisisme tidak dibaca sebagai proses intelektual, tetapi sebagai cacat moral. Jika seseorang ragu terhadap wahyu, masalahnya bukan bukti yang belum cukup, melainkan hati yang sombong.",
          "Dengan cara ini, kritik sudah dilemahkan sebelum dijawab.",
        ],
      },
      {
        title: "Sejarah sebagai ancaman",
        paragraphs: [
          "Surat ini berkali-kali menunjuk umat terdahulu yang dibinasakan: Nuh, Ad, Firaun, Samud, Luth, dan penduduk Aikah. Daftar itu berfungsi sebagai arsip ketakutan.",
          "Tetapi penyebutan kehancuran massal membawa masalah etis. Seluruh komunitas dipakai sebagai contoh hukuman, sementara perbedaan individu di dalamnya hampir tidak terlihat.",
          "Sejarah dalam Sad bukan ruang penyelidikan, melainkan alat peringatan. Reruntuhan dan kisah lama diarahkan untuk satu pesan: jangan menjadi kelompok yang menolak.",
        ],
      },
      {
        title: "Daud dan Sulaiman: kuasa yang butuh tafsir",
        paragraphs: [
          "Kisah Daud dengan dua pihak yang memanjat mihrab terasa ganjil: mengapa mereka masuk begitu, dan apa sebenarnya kesalahan Daud? Teks memberi isyarat, tetapi tidak menjelaskan. Pembaca dipaksa bergantung pada tafsir luar.",
          "Sulaiman juga menghadirkan narasi yang retak: kuda-kuda, tubuh di atas singgasana, angin yang tunduk, setan sebagai pekerja bangunan dan penyelam, serta makhluk yang dibelenggu. Di sini kekuasaan spiritual digambarkan sebagai kuasa atas alam dan makhluk lain.",
          "Pertanyaannya: apakah ini kisah moral, mitos kerajaan, atau jejak tradisi lama yang diislamkan? Teks tidak memberi cukup pegangan untuk memutuskan.",
        ],
      },
      {
        title: "Ayyub dan solusi kekerasan simbolik",
        paragraphs: [
          "Bagian Ayyub memperlihatkan dunia penyakit yang dijelaskan lewat gangguan setan dan disembuhkan lewat air ajaib. Ini mencerminkan kosmos pra-medis: sakit, dosa, setan, dan penyembuhan supranatural berdiri dalam satu rangkaian.",
          "Ayat tentang mengambil seikat rumput lalu memukul juga problematik. Ia sering dijelaskan sebagai cara agar sumpah terpenuhi tanpa menyakiti. Tetapi tetap saja, logikanya mempertahankan sumpah memukul istri sebagai sesuatu yang perlu disiasati, bukan ditolak.",
          "Yang tampak di sini bukan hanya belas kasih, tetapi juga cara teks bernegosiasi dengan norma patriarkal yang sudah ada.",
        ],
      },
      {
        title: "Iblis yang diberi waktu",
        paragraphs: [
          "Penutup surat kembali ke kisah penciptaan manusia dari tanah dan penolakan Iblis. Iblis menolak sujud karena merasa lebih baik dari manusia. Ia dihukum, tetapi juga diberi penangguhan untuk menyesatkan manusia.",
          "Struktur ini menciptakan pertanyaan teologis lama: jika Allah tahu Iblis akan menyesatkan, mengapa ia diberi ruang? Jika manusia digoda oleh aktor kosmik yang sengaja dibiarkan bekerja, seberapa penuh tanggung jawab manusia?",
          "Sad menutup dengan peringatan, bukan jawaban. Ia meminta pembaca menerima panggung kosmik itu sebagai kebenaran yang akan diketahui nanti.",
        ],
      },
    ],
    verseRefs: [1, 2, 3, 8, 17, 21, 24, 26, 27, 31, 34, 36, 41, 44, 52, 57, 61, 71, 75, 82, 85],
  },
  "az-zumar": {
    lead:
      "Az-Zumar berarti rombongan-rombongan, dan nama itu cocok dengan akhir suratnya: manusia digiring berkelompok menuju neraka atau surga. Tetapi sebelum sampai ke sana, surat ini membangun gagasan agama murni, keikhlasan kepada Allah, dan pemisahan tajam antara yang diberi petunjuk dan yang dibiarkan sesat.",
    problemMap:
      "Surat ini memuat klaim agama murni, kritik terhadap perantara spiritual, kosmologi matahari-bulan, embriologi tiga kegelapan, dikotomi ilmu dan iman, pengampunan yang disusul ancaman, serta manusia yang digiring ke surga atau neraka. Fokusnya ada pada eksklusivitas, determinisme petunjuk, dan psikologi takut-ampun.",
    sections: [
      {
        title: "Agama murni yang menutup kemungkinan lain",
        paragraphs: [
          "Az-Zumar membuka dengan klaim bahwa kitab ini diturunkan dari Allah dan membawa kebenaran. Lalu segera ditegaskan bahwa agama yang murni hanya milik Allah.",
          "Di titik ini, keyakinan lain tidak diperlakukan sebagai pencarian tulus, tetapi sebagai penyimpangan, dusta, atau ingkar. Bahkan praktik perantara spiritual dibaca sebagai kesalahan yang akan diputuskan oleh Allah.",
          "Surat ini tidak hanya menawarkan tauhid. Ia membangun batas: ibadah yang sah hanya satu, dan jalan lain sudah diberi label moral sebelum diperiksa.",
        ],
      },
      {
        title: "Alam, rahim, dan pengetahuan lama",
        paragraphs: [
          "Seperti banyak surat Makkiyah, Az-Zumar memakai alam sebagai bukti: langit, bumi, malam, siang, matahari, bulan, hujan, tanaman, dan manusia dalam rahim.",
          "Tetapi detailnya membawa persoalan. Matahari dan bulan digambarkan berjalan sampai waktu tertentu; manusia dikaitkan dengan satu jiwa dan pasangannya; janin disebut melalui tiga kegelapan; ternak disebut delapan pasang. Ini lebih dekat dengan bahasa observasi kuno daripada penjelasan ilmiah.",
          "Jika tujuannya membangkitkan refleksi, gambaran itu bekerja. Jika diklaim sebagai pengetahuan ilahi yang melampaui zaman, ia mulai berat dipertahankan.",
        ],
      },
      {
        title: "Petunjuk yang diberikan, hati yang disalahkan",
        paragraphs: [
          "Surat ini berkali-kali berbicara tentang orang yang diberi petunjuk dan orang yang disesatkan. Allah membuka hati seseorang untuk Islam, sementara yang lain digambarkan berhati keras.",
          "Masalahnya muncul karena tanggung jawab moral tetap dibebankan kepada manusia. Jika hati terbuka karena Allah, dan kesesatan juga berada dalam wilayah kehendak Allah, mengapa manusia dihukum seolah semua berdiri murni pada pilihannya sendiri?",
          "Az-Zumar 39:22-23 memperlihatkan ketegangan itu dengan jelas: petunjuk adalah karunia, kesesatan adalah vonis, tetapi hukuman tetap berjalan.",
        ],
      },
      {
        title: "Ampunan yang diikuti ultimatum",
        paragraphs: [
          "Ayat tentang jangan berputus asa dari rahmat Allah adalah salah satu bagian paling lembut dalam surat ini. Ia menawarkan pengampunan luas bagi yang melampaui batas.",
          "Tetapi kelembutan itu segera diikuti ultimatum: kembalilah sebelum azab datang, ikuti yang terbaik sebelum hukuman mendadak tiba, jangan sampai menyesal di akhirat. Polanya menjadi tarik-ulur emosional: harapan diberikan, lalu ketakutan dipasang di belakangnya.",
          "Ini membuat rahmat dan ancaman bekerja sebagai satu mekanisme psikologis. Pembaca ditenangkan, lalu didesak.",
        ],
      },
      {
        title: "Manusia digiring berkelompok",
        paragraphs: [
          "Akhir surat memberi gambaran yang sangat kuat: orang kafir digiring ke neraka berkelompok, orang bertakwa digiring ke surga berkelompok. Nama suratnya menemukan bentuk final di sini.",
          "Tetapi gambaran itu juga menunjukkan dunia moral yang sangat biner. Pada akhirnya manusia tidak tampil sebagai individu kompleks, melainkan sebagai rombongan nasib: kelompok rugi dan kelompok selamat.",
          "Az-Zumar menutup dengan pengadilan total, pintu-pintu akhirat, dan malaikat yang memuji. Teksnya rapi secara drama, tetapi keras secara moral: perbedaan keyakinan berakhir sebagai segregasi abadi.",
        ],
      },
    ],
    verseRefs: [1, 3, 5, 6, 7, 8, 15, 16, 22, 23, 36, 47, 53, 54, 59, 60, 64, 65, 67, 71, 73],
  },
  "gafir": {
    lead:
      "Gafir dibuka dengan nama Tuhan yang mengampuni dosa, menerima tobat, keras hukuman-Nya, dan memiliki karunia. Sejak awal, surat ini menempatkan pembaca di antara harapan dan ancaman. Tetapi semakin jauh dibaca, ancamannya makin dominan: debat dicurigai, neraka berbicara, dan iman yang datang setelah bukti dianggap terlambat.",
    problemMap:
      "Surat ini memuat paradoks ampunan dan hukuman, delegitimasi debat atas ayat, malaikat yang mendoakan kelompok beriman, dialog neraka, kisah Musa-Firaun, pengawasan batin, kosmologi langit sebagai bangunan, embriologi pra-ilmiah, dan iman yang tidak berguna setelah melihat azab. Fokusnya ada pada epistemologi tertutup dan keadilan tanpa rehabilitasi.",
    sections: [
      {
        title: "Tuhan yang mengampuni dan keras menghukum",
        paragraphs: [
          "Pembukaan Gafir memadatkan dua wajah teologi: Allah mengampuni dosa dan menerima tobat, tetapi juga keras hukuman-Nya. Secara devosional, ini memberi keseimbangan antara harap dan takut.",
          "Secara psikologis, keseimbangan itu bisa berubah menjadi ketegangan: dekatlah karena Ia mengampuni, takutlah karena Ia menghukum. Surat ini kemudian lebih banyak mengembangkan sisi kedua.",
          "Hasilnya adalah iman yang terus diletakkan di bawah bayang-bayang risiko.",
        ],
      },
      {
        title: "Debat yang sudah dicurigai sejak awal",
        paragraphs: [
          "Salah satu kalimat paling penting dalam Gafir adalah bahwa tidak ada yang memperdebatkan ayat-ayat Allah kecuali orang kafir. Ini bukan sekadar kritik terhadap debat buruk; ini membingkai perdebatan itu sendiri sebagai tanda moral negatif.",
          "Dengan kerangka seperti itu, pertanyaan sulit mudah dibatalkan sebelum dijawab. Kritik tidak diperlakukan sebagai kerja akal, melainkan sebagai gejala kekafiran, kesombongan, atau keinginan menolak kebenaran.",
          "Gafir membangun epistemologi tertutup: teks benar, yang membantah bermasalah, dan keberhasilan orang luar tidak boleh menipu pembaca.",
        ],
      },
      {
        title: "Rahmat yang hanya mengitari kelompok sendiri",
        paragraphs: [
          "Doa malaikat pembawa Arsy terlihat indah: mereka memohon ampunan dan keselamatan. Tetapi objek doanya terbatas pada orang yang beriman, bertobat, mengikuti jalan Allah, dan keluarga saleh mereka.",
          "Ini memperkuat batas komunitas. Rahmat kosmik tidak dibayangkan sebagai pelukan universal, melainkan sebagai perlindungan khusus bagi kelompok yang sudah berada di jalan yang benar.",
          "Di sisi lain, orang kafir di neraka mendengar bahwa kebencian Allah kepada mereka lebih besar daripada kebencian mereka kepada diri sendiri. Jarak emosional antara dua kelompok itu dibuat sangat ekstrem.",
        ],
      },
      {
        title: "Musa, Firaun, dan orang beriman yang tersembunyi",
        paragraphs: [
          "Bagian Musa dan Firaun memberi drama politik yang kuat: penguasa hendak membunuh Musa, ada seorang beriman dari keluarga Firaun yang menyembunyikan iman, dan perdebatan berlangsung di istana.",
          "Namun kisah ini juga membawa jejak penyusunan ulang. Haman, Qarun, ancaman pembunuhan anak laki-laki setelah Musa dewasa, dan konflik agama yang terasa seperti cermin polemik Islam awal membuat narasi Mesir kuno tampak berbicara dengan bahasa abad ke-7.",
          "Yang penting bagi surat ini bukan rekonstruksi sejarah, melainkan fungsi moral: penguasa sombong menolak bukti, orang beriman memperingatkan, dan penolak akhirnya dihukum.",
        ],
      },
      {
        title: "Ketika bukti datang, iman terlambat",
        paragraphs: [
          "Akhir Gafir memuat persoalan teologis yang tajam: ketika orang melihat azab lalu beriman, iman itu tidak berguna lagi. Artinya, iman diminta dalam kondisi belum melihat bukti final, tetapi ditolak ketika bukti menjadi tak terbantahkan.",
          "Ini menciptakan paradoks epistemik. Manusia dihukum karena tidak percaya, tetapi ketika alasan paling kuat untuk percaya muncul, pintu sudah ditutup. Sistemnya menilai iman sebagai sah hanya sebelum kepastian datang.",
          "Dari awal sampai akhir, Gafir bergerak dalam pola itu: debat dicurigai, bukti diklaim jelas, hukuman dipastikan, dan rehabilitasi setelah kesadaran tidak diberi tempat.",
        ],
      },
    ],
    verseRefs: [1, 3, 4, 6, 7, 10, 11, 15, 18, 21, 23, 25, 28, 35, 46, 56, 60, 64, 67, 71, 74, 83, 84, 85],
  },
};

function renderVerseLinks(text: string, previewVerses: VerseRecord[]) {
  const pattern = /(Al-Fatihah 1:\d+(?:-\d+)?|Al-Baqarah 2:\d+(?:-\d+)?|Ali Imran 3:\d+(?:-\d+)?|An-Nisa 4:\d+(?:-\d+)?|Al-Ma'idah 5:\d+(?:-\d+)?|Al-An'am 6:\d+(?:-\d+)?|Al-A'raf 7:\d+(?:-\d+)?|Al-Anfal 8:\d+(?:-\d+)?|At-Taubah 9:\d+(?:-\d+)?|Yunus 10:\d+(?:-\d+)?|Hud 11:\d+(?:-\d+)?|Yusuf 12:\d+(?:-\d+)?|Ar-Ra'd 13:\d+(?:-\d+)?|Ibrahim 14:\d+(?:-\d+)?|Al-Hijr 15:\d+(?:-\d+)?|An-Nahl 16:\d+(?:-\d+)?|Al-Isra 17:\d+(?:-\d+)?|Al-Kahf 18:\d+(?:-\d+)?|Maryam 19:\d+(?:-\d+)?|Taha 20:\d+(?:-\d+)?|Al-Anbiya 21:\d+(?:-\d+)?|Al-Hajj 22:\d+(?:-\d+)?|Al-Mu'minun 23:\d+(?:-\d+)?|Ya Sin 36:\d+(?:-\d+)?|As-Saffat 37:\d+(?:-\d+)?|Sad 38:\d+(?:-\d+)?|Az-Zumar 39:\d+(?:-\d+)?|Gafir 40:\d+(?:-\d+)?)/g;
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = part.match(/^(Al-Fatihah|Al-Baqarah|Ali Imran|An-Nisa|Al-Ma'idah|Al-An'am|Al-A'raf|Al-Anfal|At-Taubah|Yunus|Hud|Yusuf|Ar-Ra'd|Ibrahim|Al-Hijr|An-Nahl|Al-Isra|Al-Kahf|Maryam|Taha|Al-Anbiya|Al-Hajj|Al-Mu'minun|Ya Sin|As-Saffat|Sad|Az-Zumar|Gafir) (\d+):(\d+)(?:-(\d+))?$/);

    if (!match) {
      return part;
    }

    const surah = Number(match[2]);
    const startAyat = Number(match[3]);
    const endAyat = match[4] ? Number(match[4]) : startAyat;
    const verses = previewVerses
      .filter(
        (verse) =>
          verse.surahId === surah &&
          verse.ayahNumber >= startAyat &&
          verse.ayahNumber <= endAyat,
      )
      .map((verse) => ({
        ayahNumber: verse.ayahNumber,
        translation: verse.translation,
      }));

    return (
      <VersePreviewLink
        key={`${part}-${index}`}
        label={part}
        surah={surah}
        startAyat={startAyat}
        endAyat={endAyat}
        verses={verses}
      />
    );
  });
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

  let previewVerses: VerseRecord[] = [];
  let surahs: SurahListItem[] = [];

  try {
    [previewVerses, surahs] = await Promise.all([
      getVersesBySurahId(item.surahNumber),
      getSurahs(),
    ]);
  } catch (error) {
    return <DatabaseUnavailable {...getDatabaseErrorInfo(error)} />;
  }

  return (
    <main className="qurai-page min-h-screen bg-fixed">
      <ArticleNav backHref="/bedah-surat" backLabel="Bedah Surat" />

      <div className="mx-auto grid w-[min(1120px,calc(100%_-_1.4rem))] grid-cols-1 gap-10 pb-32 pt-32 sm:w-[min(1120px,calc(100%_-_2rem))] sm:pt-40 xl:grid-cols-[minmax(0,740px)_240px] xl:items-start xl:justify-center">
      <article className="mx-auto w-full max-w-[740px] xl:mx-0">
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
                <p key={paragraph}>{renderVerseLinks(paragraph, previewVerses)}</p>
              ))}
            </section>
          ))}
        </div>

        <ArticleShare title={`${item.title}: ${item.subtitle}`} />
      </article>
      <SurahShortcutSidebar surahs={surahs} currentSurahNumber={item.surahNumber} />
      </div>
    </main>
  );
}
