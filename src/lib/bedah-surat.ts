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
    subtitle: "Yesus, Ahli Kitab, dan Politik Identitas Iman",
    excerpt:
      "Ali Imran bergerak di antara polemik dengan Kristen, kritik terhadap Ahli Kitab, dan pembacaan ulang kekalahan Uhud. Surat ini terasa seperti teologi yang lahir di tengah perdebatan sosial.",
    range: "Ali Imran 3:1-200",
    classification: "Madaniyah",
    readTime: "12 menit",
  },
];

export function getBedahSuratItem(slug: string) {
  return bedahSuratItems.find((item) => item.slug === slug);
}
