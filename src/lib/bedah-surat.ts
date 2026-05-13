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
