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
  const pattern = /(Al-Fatihah 1:\d+(?:-\d+)?|Al-Baqarah 2:\d+(?:-\d+)?|Ali Imran 3:\d+(?:-\d+)?|Ya Sin 36:\d+(?:-\d+)?|As-Saffat 37:\d+(?:-\d+)?|Sad 38:\d+(?:-\d+)?|Az-Zumar 39:\d+(?:-\d+)?|Gafir 40:\d+(?:-\d+)?)/g;
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const match = part.match(/^(Al-Fatihah|Al-Baqarah|Ali Imran|Ya Sin|As-Saffat|Sad|Az-Zumar|Gafir) (\d+):(\d+)(?:-(\d+))?$/);

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
