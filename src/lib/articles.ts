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

export const articles: ArticleItem[] = [
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
      "Ada pola di ayat-ayat Madaniyah: wahyu turun tepat saat Muhammad menghadapi masalah personal — konflik rumah tangga, ketertarikan pada perempuan tertentu, kritik publik, atau kebutuhan finansial. Pola ini bisa diperiksa langsung dari Al-Quran.",
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
      "Manuskrip Sana'a memuat naskah yang dihapus dan ditulisi ulang. 4.000 varian terdokumentasikan dari 14 manuskrip tertua. Seperempat kosakata Al-Quran bukan dari Arab. Kronologi pembentukannya tidak cocok dengan narasi 22 tahun pewahyuan.",
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
    image: {
      src: "/article-images/15-tidak-ada-paksaan-illustration.png",
      alt: "Ilustrasi editorial rantai putus, teks hukum, batu, dan dua arah jalan",
    },
  },
  {
    slug: "nikah-mutah",
    number: "16",
    title: "Tentang Kawin Kontrak",
    excerpt:
      "Tiga mufasir klasik terbesar sepakat bahwa An-Nisa 4:24 berbicara tentang nikah mut'ah. Tidak ada ayat Quran yang membatalkannya. Yang melarangnya adalah Umar bin Khattab, dan Umar sendiri yang mencatatkan pengakuan itu dalam Shahih Muslim.",
    surah: "An-Nisa 4:24 · Al-Tahrim 66:1",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/16-nikah-mutah-illustration.png",
      alt: "Ilustrasi editorial kontrak perkawinan, cincin, dan kantong koin di meja gelap",
    },
  },
  {
    slug: "evolusi-dan-quran",
    number: "17",
    title: "Dari Tanah Liat",
    excerpt:
      "Al-Quran menggambarkan penciptaan Adam dari tanah liat dengan material spesifik dan mekanisme yang jelas. Tafsir klasik membacanya secara literal. Kromosom 2 manusia dan genetika populasi menunjukkan sesuatu yang tidak bisa didamaikan dengan narasi dua individu pertama.",
    surah: "Al-Imran 3:59 · Al-Hijr 15:26",
    date: "Mei 2026",
    readTime: "11 menit",
    image: {
      src: "/article-images/17-evolusi-dan-quran-illustration.png",
      alt: "Ilustrasi editorial figur tanah liat, fosil, dan diagram kromosom di meja studi",
    },
  },
  {
    slug: "bulan-yang-terbelah",
    number: "19",
    title: "Bulan yang Terbelah",
    excerpt:
      "Al-Qamar 54:1 tidak menyebut siapa yang melihat, kapan, atau di mana. Hadis mengisi kekosongan itu dua abad kemudian. Dan di surah Al-Isra, tepat di tempat Muhammad ditantang menunjukkan mukjizat fisik, ada ayat yang menjelaskan mengapa Allah tidak mengirimkan tanda fisik, seolah belah bulan tidak pernah terjadi.",
    surah: "Al-Qamar 54:1 · Al-Isra 17:59",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/19-bulan-yang-terbelah-illustration.png",
      alt: "Ilustrasi editorial orang-orang duduk menyaksikan bulan terbelah di kiri dan kanan gunung",
    },
  },
  {
    slug: "ayat-ayat-setan",
    number: "18",
    title: "Ayat-ayat Setan",
    excerpt:
      "At-Tabari mencatat bahwa sebelum insiden Gharaniq, Muhammad berharap dalam hatinya ada sesuatu yang mendamaikannya dengan kaumnya. Itu bukan deskripsi penerima wahyu yang pasif. Dan Al-Hajj 22:52 ada dalam Al-Quran sampai hari ini, mengakui bahwa setan bisa menyusup ke proses wahyu sebelum Allah menghilangkannya.",
    surah: "An-Najm 53:19 · Al-Hajj 22:52",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/18-ayat-ayat-setan-illustration.png",
      alt: "Ilustrasi editorial fragmen berhala kuno dan naskah yang tertutup bayangan tinta",
    },
  },
  {
    slug: "nama-di-dalam-api",
    number: "20",
    title: "Nama di Dalam Api",
    excerpt:
      "Shahih Bukhari 4971 mencatat urutan yang spesifik: Abu Lahab menolak Muhammad di bukit Safa, lalu wahyu turun sebagai respons. Dari sekian banyak musuh Muhammad, hanya satu yang dikutuk dengan namanya dalam Al-Quran. Paman kandungnya sendiri.",
    surah: "Al-Masad 111:1 · Asy-Syu'ara 26:214",
    date: "Mei 2026",
    readTime: "8 menit",
    image: {
      src: "/article-images/20-nama-di-dalam-api-illustration.png",
      alt: "Ilustrasi editorial Abu Lahab dan istrinya di dekat api dengan kayu bakar dan tali sabut",
    },
  },
  {
    slug: "tuhan-yang-berbicara-arab",
    number: "21",
    title: "Tuhan yang Berbicara Arab",
    excerpt:
      "Q 12:2 menyebutkan alasan spesifik mengapa Al-Quran diturunkan dalam bahasa Arab: 'agar kamu memahaminya.' Kalimat itu mendefinisikan siapa yang dimaksud sebagai audiens utama. Dan di kitab yang sama tempat Allah mengklaim mengutus Muhammad untuk semesta alam, Al-Quran itu dikirim dalam satu bahasa yang hanya dimengerti satu kelompok manusia.",
    surah: "Yusuf 12:2 · Al-Anbiya 21:107",
    date: "Mei 2026",
    readTime: "11 menit",
    image: {
      src: "/article-images/21-tuhan-yang-berbicara-arab-illustration.png",
      alt: "Ilustrasi editorial naskah Arab yang memudar ke aksara lain di depan majelis gurun",
    },
  },
  {
    slug: "mengapa-wahyu-turun",
    number: "22",
    title: "Mengapa Wahyu Turun",
    excerpt:
      "Untuk banyak ayat Al-Quran, konteks turunnya tidak tunggal. Ada dua versi tentang At-Tahrim 66:1 dalam literatur hadis sahih: satu tentang madu dan bau napas, satu tentang persetubuhan dengan budak dan rahasia yang dibocorkan. Keduanya tidak bisa benar sekaligus.",
    surah: "At-Tahrim 66:1 · Al-Ahzab 33:59",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/22-mengapa-wahyu-turun-illustration.png",
      alt: "Ilustrasi editorial gulungan riwayat yang terbelah di meja gelap",
    },
  },
  {
    slug: "kitab-yang-jelas",
    number: "23",
    title: "Kitab yang Jelas",
    excerpt:
      "Al-Kautsar adalah surah paling pendek dalam Al-Quran. Ayat ketiganya hampir tidak punya arti tanpa mengetahui kata penghinaan yang tidak disebutkan di dalamnya. Al-Quran menyebut dirinya 'kitabun mubeen', tapi tidak ada pembaca yang bisa memahaminya sendirian.",
    surah: "Al-Kautsar 108:3 · Al-Anfal 8:5",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/23-kitab-yang-jelas-illustration.png",
      alt: "Ilustrasi editorial manuskrip tua yang dihubungkan ke fragmen pusat",
    },
  },
  {
    slug: "yang-lebih-baik-daripadanya",
    number: "24",
    title: "Yang Lebih Baik Daripadanya",
    excerpt:
      "Al-Anfal 8:65 dan 8:66 adalah dua ayat berurutan tentang kapasitas tempur yang sama. Yang pertama menetapkan rasio 1:10. Yang berikutnya merevisinya menjadi 1:2. Al-Baqarah 2:106 menyebut penggantinya 'lebih baik', yang berarti yang diganti lebih rendah kualitasnya.",
    surah: "Al-Anfal 8:65 · An-Nur 24:2",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/24-yang-lebih-baik-daripadanya-illustration.png",
      alt: "Ilustrasi editorial papan strategi kuno dengan rasio batu yang direvisi",
    },
  },
  {
    slug: "ketika-langit-masih-asap",
    number: "25",
    title: "Ketika Langit Masih Asap",
    excerpt:
      "Al-Fussilat 41:9-12 menempatkan bumi selesai diciptakan sebelum langit dan bintang-bintang ada. Masalahnya: bumi tersusun dari elemen berat yang hanya bisa terbentuk di dalam inti bintang. Tanpa bintang terlebih dahulu, tidak ada material untuk membentuk planet sama sekali.",
    surah: "Fussilat 41:9 · Al-Baqarah 2:29",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/25-ketika-langit-masih-asap-illustration.png",
      alt: "Ilustrasi editorial bumi purba di bawah langit kosmik berasap",
    },
  },
  {
    slug: "nasikh-mansukh",
    number: "26",
    title: "Nasikh-Mansukh: Ketika Wahyu Butuh Koreksi",
    excerpt:
      "Al-Baqarah 2:106 mengakui bahwa ada ayat yang diganti dengan yang 'lebih baik.' Tapi kalau ada yang lebih baik, artinya yang lama kurang baik. Dan wahyu yang kurang baik dari entitas yang diklaim mahatahu adalah kontradiksi yang tidak bisa diselesaikan hanya dengan menamainya kebijaksanaan bertahap.",
    surah: "Al-Mujadilah 58:12 · Al-Baqarah 2:106",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/26-nasikh-mansukh-illustration.png",
      alt: "Ilustrasi editorial manuskrip palimpsest dengan koreksi hukum di meja scriptorium gelap",
    },
  },
  {
    slug: "ghanimah",
    number: "27",
    title: "Seperlima untuk Allah, Empat Perlima untuk Kalian",
    excerpt:
      "Al-Anfal 8:1 menyatakan ghanimah milik Allah dan Rasul sepenuhnya. Al-Anfal 8:41, beberapa puluh ayat kemudian, membagi empat perlima untuk pejuang. Sistem seperlima itu sudah ada sebelum Islam, dalam tradisi Arab pra-Islam disebut mirbā'. Yang berubah bukan angkanya.",
    surah: "Al-Anfal 8:1 · Al-Anfal 8:41",
    date: "Mei 2026",
    readTime: "8 menit",
    image: {
      src: "/article-images/27-ghanimah-illustration.png",
      alt: "Ilustrasi editorial pembagian harta rampasan menjadi satu bagian kecil dan empat bagian besar",
    },
  },
  {
    slug: "surat-yusuf-dan-midrash",
    number: "28",
    title: "Dari Mana Datangnya Pisau Itu?",
    excerpt:
      "Yusuf 12:31 menceritakan para wanita yang mengiris tangan karena terpesona Yusuf. Adegan itu tidak ada di Kitab Kejadian. Tapi ada di Bereshit Rabbah, kompilasi legenda Yahudi abad ke-5. Al-Qur'an menyebut kisah ini ahsanal qasas — kisah yang paling baik.",
    surah: "Yusuf 12:3 · Yusuf 12:31",
    date: "Mei 2026",
    readTime: "11 menit",
    image: {
      src: "/article-images/28-surat-yusuf-dan-midrash-illustration.png",
      alt: "Ilustrasi editorial pisau jamuan, buah, dan manuskrip kuno di meja gelap",
    },
  },
  {
    slug: "mukjizat-ilmiah",
    number: "29",
    title: "Pengetahuan yang Tidak Melampaui Zamannya",
    excerpt:
      "At-Tariq 86:5-7 mengklaim sperma berasal dari antara tulang sulbi dan tulang dada — salah secara anatomis, tapi konsisten dengan teori Galen abad ke-2. Gunung diklaim mencegah gempa di tempat gunung justru menjadi zona gempa paling aktif. Klaim yang tidak melampaui pengetahuan yang sudah ada.",
    surah: "At-Tariq 86:5 · An-Nahl 16:15",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/29-mukjizat-ilmiah-illustration.png",
      alt: "Ilustrasi editorial instrumen ilmu kuno, diagram anatomi samar, dan model gunung di meja studi",
    },
  },
  {
    slug: "pengulangan-al-quran",
    number: "30",
    title: "Yang Diulang Tiga Puluh Satu Kali",
    excerpt:
      "Hampir 40 persen Surah Ar-Rahman terdiri dari satu frasa yang diulang 31 kali tanpa variasi. Kisah Nabi Hud diceritakan di lima surah berbeda dengan frasa yang hampir identik, tanpa menambah detail baru. Al-Qur'an menyebut dirinya tibyan li kulli syai' — penjelasan atas segala sesuatu.",
    surah: "Ar-Rahman 55:13 · An-Nahl 16:89",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/30-pengulangan-al-quran-illustration.png",
      alt: "Ilustrasi editorial manuskrip dengan pola pengulangan emas di meja studi gelap",
    },
  },
  {
    slug: "alif-lam-mim",
    number: "31",
    title: "Alif Lam Mim",
    excerpt:
      "Dua puluh sembilan surah dimulai dengan huruf yang tidak ada yang bisa menjelaskan maknanya setelah empat belas abad. Al-Qur'an menyebut dirinya dalam bahasa Arab yang jelas, tapi ada kata-kata di dalamnya yang tidak bisa dipahami dari dalam bahasa Arab saja.",
    surah: "Al-Baqarah 2:1 · Al-Qari'ah 101:1",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/31-alif-lam-mim-illustration.png",
      alt: "Ilustrasi editorial tiga glyph bercahaya di atas manuskrip dalam ruang studi kuno",
    },
  },
  {
    slug: "jizyah",
    number: "32",
    title: "Wa Hum Saghirun",
    excerpt:
      "At-Tawbah 9:29 memerintahkan non-Muslim membayar jizyah 'wa hum saghirun' — sementara mereka dalam keadaan hina. Frasa itu bukan tambahan dari tradisi. Ia ada di dalam ayat, dalam satu kalimat yang sama dengan kewajiban membayar, sebagai kondisi yang menyertai pembayaran itu.",
    surah: "At-Tawbah 9:29 · Al-Baqarah 2:256",
    date: "Mei 2026",
    readTime: "7 menit",
    image: {
      src: "/article-images/32-jizyah-illustration.png",
      alt: "Ilustrasi editorial pembayaran koin jizyah di meja batu dengan sosok tertunduk",
    },
  },
  {
    slug: "sapi-yang-melenguh",
    number: "33",
    title: "Sapi yang Melenguh",
    excerpt:
      "Patung logam buatan Samiri yang mengeluarkan suara seperti lembu hidup. Manusia yang diubah jadi kera sebagai hukuman. Mayat yang bangkit setelah dipukul daging sapi. Tiga narasi yang memberikan detail sangat konkret tapi meninggalkan celah kausal tanpa penjelasan.",
    surah: "Ta Ha 20:88 · Al-Baqarah 2:73",
    date: "Mei 2026",
    readTime: "8 menit",
    image: {
      src: "/article-images/33-sapi-yang-melenguh-illustration.png",
      alt: "Ilustrasi editorial patung anak sapi logam bersuara di perkemahan gurun malam",
    },
  },
  {
    slug: "tongkat-ikan-dan-kulit",
    number: "34",
    title: "Tongkat, Ikan, dan Kulit yang Berbicara",
    excerpt:
      "Dua surah menyebut tongkat Musa dengan kata berbeda untuk momen yang sama, dan hanya satu yang mencatat Musa ketakutan. Yunus berdoa dari dalam perut ikan dengan kalimat teologis yang koheren. Kulit bersaksi melawan kehendak pemiliknya di hari kiamat.",
    surah: "Ta Ha 20:20 · Al-Anbiya 21:87",
    date: "Mei 2026",
    readTime: "9 menit",
    image: {
      src: "/article-images/34-tongkat-ikan-dan-kulit-illustration.png",
      alt: "Ilustrasi editorial tongkat, ikan, dan fragmen kulit simbolik di atas batu gelap",
    },
  },
  {
    slug: "bahasa-arab-yang-jelas",
    number: "36",
    title: "Bahasa Arab yang Jelas",
    excerpt:
      "Az-Zumar menyebut Al-Quran sebagai kitab berbahasa Arab tanpa kebengkokan. Al-Fatihah, doa yang dibaca tujuh belas kali sehari, menggunakan kata sirat yang bukan dari bahasa Arab. Al-Suyuti sendiri mendokumentasikan lebih dari seratus kata asing. Dan 29 surah masih dibuka dengan huruf yang tidak ada yang bisa jelaskan setelah empat belas abad.",
    surah: "Az-Zumar 39:28 · Al-Fatihah 1:6",
    date: "Mei 2026",
    readTime: "10 menit",
    image: {
      src: "/article-images/36-bahasa-arab-yang-jelas-illustration.png",
      alt: "Ilustrasi editorial manuskrip multibahasa di meja studi gelap",
    },
  },
  {
    slug: "isra-miraj",
    number: "37",
    title: "Malam yang Diceritakan Berbeda",
    excerpt:
      "Al-Isra 17:1 hanya menyebut perjalanan dari Mekah ke Yerusalem. Masjid Al-Aqsa sebagai bangunan fisik selesai dibangun tujuh puluh tahun setelah Muhammad meninggal. Aisyah bersaksi bahwa tubuh Muhammad tidak beranjak malam itu. Mi'raj dengan tujuh lapis langitnya tidak ada dalam Al-Quran.",
    surah: "Al-Isra 17:1 · An-Najm 53:13",
    date: "Mei 2026",
    readTime: "8 menit",
    image: {
      src: "/article-images/37-isra-miraj-illustration.png",
      alt: "Ilustrasi editorial langit berbintang di atas reruntuhan kota kuno malam hari",
    },
  },
  {
    slug: "firaun",
    number: "38",
    title: "Satu Firaun, Tiga Ribu Tahun",
    excerpt:
      "Al-Quran memperlakukan 'Firaun' sebagai nama pribadi, tapi Pharaoh adalah gelar untuk lebih dari tiga ratus penguasa Mesir selama tiga ribu tahun. Haman di Al-Qashash 28:38 ditempatkan sebagai pejabat istana Firaun, padahal nama itu berasal dari pejabat Persia sekitar seribu tahun lebih muda.",
    surah: "Al-Qashash 28:38 · Yunus 10:92",
    date: "Mei 2026",
    readTime: "7 menit",
    image: {
      src: "/article-images/38-firaun-illustration.png",
      alt: "Ilustrasi editorial relief hieroglif gelap dengan figur raja Mesir kuno yang misterius",
    },
  },
  {
    slug: "maidah",
    number: "35",
    title: "Ma'idah",
    excerpt:
      "Allah menjanjikan meja makan dari langit dengan ancaman hukuman terberat bagi yang tidak percaya setelah melihatnya — tapi Al-Qur'an tidak pernah mengkonfirmasi meja itu turun. Angin Sulaiman disebutkan dengan durasi berbeda di dua surah. Gunung bertasbih bersama Daud tanpa penanda apakah itu literal atau kiasan.",
    surah: "Al-Ma'idah 5:115 · Saba 34:10",
    date: "Mei 2026",
    readTime: "8 menit",
    image: {
      src: "/article-images/35-maidah-illustration.png",
      alt: "Ilustrasi editorial meja makan menggantung di bawah cahaya langit gelap",
    },
  },
];
