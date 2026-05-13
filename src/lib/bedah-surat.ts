export type BedahSuratItem = {
  slug: string;
  number: string;
  surahNumber: number;
  title: string;
  subtitle: string;
  excerpt: string;
  range: string;
  classification: string;
  readTime: string;
};

export const bedahSuratItems: BedahSuratItem[] = [
  {
    slug: "al-fatihah",
    number: "001",
    surahNumber: 1,
    title: "Al-Fatihah",
    subtitle: "Doa Pembuka yang Membagi Jalan Manusia",
    excerpt:
      "Al-Fatihah tampak seperti doa universal. Tetapi di bagian paling akhir, ia mulai membangun peta moral yang sempit: jalan yang diberi nikmat, jalan yang dimurkai, dan jalan yang sesat.",
    range: "Al-Fatihah 1:1-7",
    classification: "Makkiyah",
    readTime: "7 menit",
  },
  {
    slug: "al-baqarah",
    number: "002",
    surahNumber: 2,
    title: "Al-Baqarah",
    subtitle: "Kitab Hukum, Memori Konflik, dan Ayat yang Direvisi",
    excerpt:
      "Al-Baqarah bukan hanya surat panjang. Ia adalah ruang tempat hukum keluarga, perang, identitas kelompok, cerita Bani Israel, riba, qisas, dan naskh duduk berdampingan.",
    range: "Al-Baqarah 2:1-286",
    classification: "Madaniyah",
    readTime: "12 menit",
  },
  {
    slug: "ali-imran",
    number: "003",
    surahNumber: 3,
    title: "Ali Imran",
    subtitle: "Isa, Ahli Kitab, dan Politik Identitas Iman",
    excerpt:
      "Ali Imran bergerak di antara polemik tentang Isa, kritik terhadap Ahli Kitab, dan pembacaan ulang kekalahan Uhud. Surat ini terasa seperti teks yang lahir di tengah debat sosial.",
    range: "Ali Imran 3:1-200",
    classification: "Madaniyah",
    readTime: "12 menit",
  },
  {
    slug: "an-nisa",
    number: "004",
    surahNumber: 4,
    title: "An-Nisa'",
    subtitle: "Keluarga, Warisan, dan Kuasa Laki-Laki",
    excerpt:
      "An-Nisa' sering dibaca sebagai surat tentang keluarga dan perempuan. Tetapi di baliknya ada struktur hukum yang menempatkan tubuh, warisan, relasi, dan otoritas rumah tangga dalam hierarki patriarkal.",
    range: "An-Nisa 4:1-176",
    classification: "Madaniyah",
    readTime: "13 menit",
  },
  {
    slug: "al-maidah",
    number: "005",
    surahNumber: 5,
    title: "Al-Ma'idah",
    subtitle: "Hukum Akhir, Batas Komunitas, dan Meja dari Langit",
    excerpt:
      "Al-Ma'idah memadukan aturan makanan, wudu, hukuman, relasi dengan Ahli Kitab, dan kisah hidangan dari langit. Surat ini terasa seperti penegasan batas pada fase komunitas yang makin mapan.",
    range: "Al-Ma'idah 5:1-120",
    classification: "Madaniyah",
    readTime: "13 menit",
  },
  {
    slug: "al-anam",
    number: "006",
    surahNumber: 6,
    title: "Al-An'am",
    subtitle: "Tanda Alam, Takdir, dan Argumen yang Tertutup",
    excerpt:
      "Al-An'am membela tauhid dengan tanda-tanda alam, kritik terhadap berhala, dan bantahan pada aturan makanan kaum musyrik. Tetapi argumennya berkali-kali menutup ruang skeptis lewat takdir dan vonis hati.",
    range: "Al-An'am 6:1-165",
    classification: "Makkiyah",
    readTime: "13 menit",
  },
  {
    slug: "al-araf",
    number: "007",
    surahNumber: 7,
    title: "Al-A'raf",
    subtitle: "Kota yang Dihancurkan dan Manusia yang Disesatkan",
    excerpt:
      "Al-A'raf bergerak dari Adam dan Iblis menuju rangkaian umat terdahulu, Musa-Firaun, dan peringatan akhirat. Polanya keras: nabi datang, penolak dihukum, dan kesesatan dikaitkan dengan kehendak Allah.",
    range: "Al-A'raf 7:1-206",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "al-anfal",
    number: "008",
    surahNumber: 8,
    title: "Al-Anfal",
    subtitle: "Rampasan Perang dan Teologi Kemenangan",
    excerpt:
      "Al-Anfal lahir dari bayang Perang Badar: rampasan, malaikat, disiplin perang, tawanan, dan loyalitas komunitas. Surat ini memperlihatkan bagaimana kekerasan diberi bahasa ibadah dan kemenangan.",
    range: "Al-Anfal 8:1-75",
    classification: "Madaniyah",
    readTime: "13 menit",
  },
  {
    slug: "at-taubah",
    number: "009",
    surahNumber: 9,
    title: "At-Taubah",
    subtitle: "Ultimatum, Jizyah, dan Politik Loyalitas",
    excerpt:
      "At-Taubah adalah salah satu surat paling keras: pemutusan perjanjian, ayat pedang, jizyah, pembacaan munafik, dan loyalitas perang. Surat ini memperlihatkan agama ketika menjadi kekuasaan komunal.",
    range: "At-Taubah 9:1-129",
    classification: "Madaniyah",
    readTime: "14 menit",
  },
  {
    slug: "yunus",
    number: "010",
    surahNumber: 10,
    title: "Yunus",
    subtitle: "Tanda Alam, Ancaman, dan Iman yang Diizinkan",
    excerpt:
      "Yunus memakai alam, kisah Nuh, Musa-Firaun, dan kaum Yunus untuk membela wahyu. Tetapi di baliknya ada ketegangan besar antara tuntutan iman dan klaim bahwa iman bergantung izin Allah.",
    range: "Yunus 10:1-109",
    classification: "Makkiyah",
    readTime: "13 menit",
  },
  {
    slug: "hud",
    number: "011",
    surahNumber: 11,
    title: "Hud",
    subtitle: "Sejarah Hukuman dan Kota-Kota yang Dihapus",
    excerpt:
      "Hud menyusun rangkaian nabi dan umat terdahulu dalam pola yang hampir sama: utusan datang, kaum meragukan, lalu hukuman turun. Surat ini kuat sebagai peringatan, tetapi berat sebagai etika keadilan.",
    range: "Hud 11:1-123",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "yusuf",
    number: "012",
    surahNumber: 12,
    title: "Yusuf",
    subtitle: "Kisah Indah, Trauma Keluarga, dan Kuasa yang Licin",
    excerpt:
      "Yusuf disebut kisah terbaik, tetapi jika dibaca pelan, ia penuh favoritisme keluarga, perbudakan, fitnah seksual, penjara, tafsir mimpi, manipulasi kuasa, dan rekonsiliasi yang terlalu cepat.",
    range: "Yusuf 12:1-111",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "ar-rad",
    number: "013",
    surahNumber: 13,
    title: "Ar-Ra'd",
    subtitle: "Petir, Takdir, dan Bukti yang Selalu Mundur",
    excerpt:
      "Ar-Ra'd membangun argumen dari langit, bumi, guruh, janin, dan pergantian alam. Tetapi tuntutan bukti berulang kali dijawab dengan takdir, ancaman, atau kesaksian yang tidak bisa diperiksa.",
    range: "Ar-Ra'd 13:1-43",
    classification: "Makkiyah",
    readTime: "12 menit",
  },
  {
    slug: "ibrahim",
    number: "014",
    surahNumber: 14,
    title: "Ibrahim",
    subtitle: "Bahasa Wahyu, Takdir Sesat, dan Doa Kota Suci",
    excerpt:
      "Ibrahim bergerak dari kegelapan-cahaya, bahasa rasul, kisah Musa, neraka yang grafis, pohon baik-buruk, sampai doa Ibrahim untuk Makkah. Di baliknya ada takdir, eksklusivitas, dan politik asal-usul.",
    range: "Ibrahim 14:1-52",
    classification: "Makkiyah",
    readTime: "12 menit",
  },
  {
    slug: "al-hijr",
    number: "015",
    surahNumber: 15,
    title: "Al-Hijr",
    subtitle: "Quran yang Dijaga, Langit yang Dilempari, dan Iblis yang Dibiarkan",
    excerpt:
      "Al-Hijr memuat klaim pemeliharaan Quran, kosmologi meteor yang mengejar setan, penciptaan Adam, izin bagi Iblis, Luth, dan kota-kota yang dihancurkan sebagai tanda.",
    range: "Al-Hijr 15:1-99",
    classification: "Makkiyah",
    readTime: "12 menit",
  },
  {
    slug: "an-nahl",
    number: "016",
    surahNumber: 16,
    title: "An-Nahl",
    subtitle: "Nikmat, Alam, Lebah, dan Wahyu yang Direvisi",
    excerpt:
      "An-Nahl membangun argumen dari ternak, hujan, gunung, laut, lebah, susu, dan makanan. Tetapi surat nikmat ini juga menyimpan problem antroposentrisme, takdir, gender, naskh, dan klaim bahasa Arab.",
    range: "An-Nahl 16:1-128",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "al-isra",
    number: "017",
    surahNumber: 17,
    title: "Al-Isra'",
    subtitle: "Perjalanan Malam, Etika Sosial, dan Bukti yang Ditolak",
    excerpt:
      "Al-Isra' membuka dengan perjalanan malam, lalu bergerak ke Bani Israel, etika sosial, catatan amal, Iblis, ruh, tantangan Quran, dan tuntutan mukjizat yang tidak pernah dipenuhi.",
    range: "Al-Isra 17:1-111",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "al-kahf",
    number: "018",
    surahNumber: 18,
    title: "Al-Kahf",
    subtitle: "Legenda, Hikmah Tersembunyi, dan Matahari di Lumpur",
    excerpt:
      "Al-Kahf memuat Ashabul Kahfi, dua pemilik kebun, Musa-Khidr, dan Dzulqarnain. Surat ini kuat sebagai kumpulan cerita, tetapi problematik ketika legenda dan kekerasan moral dibaca sebagai sejarah suci.",
    range: "Al-Kahf 18:1-110",
    classification: "Makkiyah",
    readTime: "15 menit",
  },
  {
    slug: "maryam",
    number: "019",
    surahNumber: 19,
    title: "Maryam",
    subtitle: "Kelahiran Ajaib, Tubuh Perempuan, dan Polemik Anak Tuhan",
    excerpt:
      "Maryam memuat Zakariya, Yahya, Maryam, Isa bayi berbicara, Ibrahim, dan penolakan anak Tuhan. Surat ini lembut di permukaan, tetapi menyimpan masalah sejarah, tubuh perempuan, dan eksklusivitas teologis.",
    range: "Maryam 19:1-98",
    classification: "Makkiyah",
    readTime: "13 menit",
  },
  {
    slug: "taha",
    number: "020",
    surahNumber: 20,
    title: "Taha",
    subtitle: "Musa, Mukjizat, dan Ketakutan sebagai Pendidikan Iman",
    excerpt:
      "Taha berpusat pada Musa: panggilan di lembah suci, tongkat-ular, Firaun, penyihir, laut, Samiri, lalu Adam-Iblis. Surat ini memperlihatkan narasi mukjizat yang kuat sekaligus rapuh secara etika.",
    range: "Taha 20:1-135",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "al-anbiya",
    number: "021",
    surahNumber: 21,
    title: "Al-Anbiya'",
    subtitle: "Parade Nabi, Kosmologi Lama, dan Keadilan yang Tidak Ditanya",
    excerpt:
      "Al-Anbiya' mengumpulkan banyak nabi, argumen tauhid, langit-bumi, gunung, Ya'juj-Ma'juj, dan neraka. Surat ini bertanya tentang manusia, tetapi memberi Tuhan posisi yang tidak boleh ditanya.",
    range: "Al-Anbiya 21:1-112",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "al-hajj",
    number: "022",
    surahNumber: 22,
    title: "Al-Hajj",
    subtitle: "Ritual Tubuh, Kurban, Perang, dan Wahyu yang Diganggu",
    excerpt:
      "Al-Hajj memadukan kiamat, embriologi, Ka'bah, haji, kurban, izin perang, dan ayat tentang setan yang menyusupkan gangguan ke dalam wahyu. Surat ini menautkan ritual dengan kuasa.",
    range: "Al-Hajj 22:1-78",
    classification: "Madaniyah",
    readTime: "14 menit",
  },
  {
    slug: "al-muminun",
    number: "023",
    surahNumber: 23,
    title: "Al-Mu'minun",
    subtitle: "Tubuh, Seksualitas, Embriologi, dan Neraka yang Menutup Dialog",
    excerpt:
      "Al-Mu'minun membuka dengan ciri orang beriman, lalu masuk ke seksualitas, embriologi, tujuh langit, Nuh, Musa, Isa-Maryam, dan akhirat. Surat ini menjadikan tubuh sebagai medan iman.",
    range: "Al-Mu'minun 23:1-118",
    classification: "Makkiyah",
    readTime: "14 menit",
  },
  {
    slug: "ya-sin",
    number: "036",
    surahNumber: 36,
    title: "Ya Sin",
    subtitle: "Peringatan, Predestinasi, dan Kosmologi Lama",
    excerpt:
      "Ya Sin bergerak dari pembelaan wahyu menuju gambaran orang kafir yang telah tertutup, kisah negeri anonim, tanda-tanda alam, kebangkitan, dan ancaman akhirat.",
    range: "Ya Sin 36:1-83",
    classification: "Makkiyah",
    readTime: "11 menit",
  },
  {
    slug: "as-saffat",
    number: "037",
    surahNumber: 37,
    title: "As-Saffat",
    subtitle: "Langit yang Dijaga, Neraka yang Dipertontonkan",
    excerpt:
      "As-Saffat memulai argumennya dari sumpah malaikat dan langit yang dijaga dari setan, lalu bergerak ke kebangkitan, surga-neraka, dan rangkaian kisah nabi.",
    range: "As-Saffat 37:1-182",
    classification: "Makkiyah",
    readTime: "13 menit",
  },
  {
    slug: "sad",
    number: "038",
    surahNumber: 38,
    title: "Sad",
    subtitle: "Kuasa, Peringatan, dan Narasi yang Retak",
    excerpt:
      "Sad mempertemukan polemik Quraisy, kisah Daud, Sulaiman, Ayyub, neraka, dan dialog Iblis. Banyak bagiannya bertumpu pada peringatan, otoritas, dan hukuman.",
    range: "Sad 38:1-88",
    classification: "Makkiyah",
    readTime: "11 menit",
  },
  {
    slug: "az-zumar",
    number: "039",
    surahNumber: 39,
    title: "Az-Zumar",
    subtitle: "Agama Murni dan Manusia yang Digiring Berkelompok",
    excerpt:
      "Az-Zumar menekankan keikhlasan agama hanya untuk Allah, tetapi membangunnya lewat dikotomi tajam: petunjuk dan kesesatan, takut dan ampunan, neraka dan surga.",
    range: "Az-Zumar 39:1-75",
    classification: "Makkiyah",
    readTime: "12 menit",
  },
  {
    slug: "gafir",
    number: "040",
    surahNumber: 40,
    title: "Gafir",
    subtitle: "Debat yang Dilarang dan Pengadilan yang Menutup Jalan Pulang",
    excerpt:
      "Gafir membuka dengan Tuhan yang mengampuni sekaligus keras menghukum, lalu menolak perdebatan atas ayat, menampilkan dialog neraka, Musa-Firaun, dan iman yang terlambat.",
    range: "Gafir 40:1-85",
    classification: "Makkiyah",
    readTime: "12 menit",
  },
];

export function getBedahSuratItem(slug: string) {
  return bedahSuratItems.find((item) => item.slug === slug);
}
