export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "jadwal-imunisasi-anak",
    title: "Mengenal Jadwal Imunisasi Dasar Anak",
    excerpt:
      "Gambaran umum mengapa imunisasi penting dan kapan sebaiknya dilakukan.",
    date: "2026-10-24",
    content: [
      "Imunisasi adalah salah satu cara terbaik untuk melindungi anak dari penyakit berbahaya.",
      "Jadwal imunisasi dasar biasanya dimulai sejak lahir dan dilanjutkan hingga anak berusia 5 tahun."
    ],
  },
  {
    slug: "tanda-anak-perlu-ke-dokter",
    title: "Kapan Anak Perlu Dibawa ke Dokter?",
    excerpt:
      "Tanda-tanda umum yang menunjukkan anak perlu diperiksa oleh dokter.",
    date: "2026-10-25",
    content: [
      "Jika anak mengalami gejala yang memprihatinkan, seperti demam tinggi, batuk berkepanjangan, atau kesulitan bernapas, segera bawa ke dokter.",
      "Penting untuk memantau pertumbuhan dan perkembangan anak secara berkala."
    ],
  },
  {
    slug: "mpasi-pertama",
    title: "Panduan Awal Memulai MPASI",
    excerpt:
      "Tips dan panduan untuk memulai makanan pendamping ASI (MPASI) bagi bayi.",
    date: "2026-10-26",
    content: [
      "MPASI (Makanan Pendamping ASI) diperkenalkan sekitar usia 6 bulan.",
      "Pilih makanan yang sesuai dengan usia anak dan pastikan nutrisinya cukup."
    ],
  },
  {
    slug: "tips-tumbuh-kembang-anak",
    title: "Tips Memantau Tumbuh Kembang Anak",
    excerpt:
      "Cara memantau pertumbuhan dan perkembangan anak agar tetap sehat.",
    date: "2026-10-27",
    content: [
      "Pantau pertumbuhan anak secara berkala dengan mencatat tinggi badan dan berat badan.",
      "Perhatikan perkembangan kognitif dan sosial anak untuk memastikan mereka berkembang normal."
    ],
  },
];