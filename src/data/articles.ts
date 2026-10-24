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
      "Imunisasi merupakan upaya pencegahan penyakit dengan memberikan vaksin untuk merangsang sistem kekebalan tubuh agar mampu mengenali dan melawan penyebab penyakit tertentu. Imunisasi sangat penting karena dapat mengurangi risiko terjadinya penyakit menular, komplikasi serius, kecacatan, hingga kematian. Selain melindungi individu, imunisasi juga membantu mengurangi penyebaran penyakit di masyarakat sehingga turut melindungi kelompok rentan, seperti bayi dan orang dengan daya tahan tubuh yang lemah.",
      "Imunisasi sebaiknya dilakukan sedini mungkin sesuai jadwal yang dianjurkan oleh Kementerian Kesehatan RI, dimulai sejak bayi baru lahir dan dilanjutkan pada masa bayi, anak-anak, usia sekolah, remaja, hingga dewasa sesuai kebutuhan. Setiap jenis vaksin memiliki jadwal dan jumlah dosis yang berbeda untuk membentuk perlindungan yang optimal. Oleh karena itu, imunisasi perlu diberikan tepat waktu dan dilengkapi dengan dosis lanjutan atau penguat apabila diperlukan.",
      "Apabila terdapat imunisasi yang terlewat, pemberian vaksin umumnya masih dapat dilanjutkan melalui imunisasi kejar dengan berkonsultasi kepada tenaga kesehatan. Meskipun vaksin dapat menimbulkan efek samping ringan, seperti nyeri pada tempat suntikan atau demam sementara, manfaat imunisasi dalam mencegah penyakit berat jauh lebih besar. Dengan demikian, imunisasi yang lengkap dan sesuai jadwal merupakan langkah penting untuk menjaga kesehatan serta mendukung pertumbuhan dan perkembangan yang optimal."
    ],
  },
  {
    slug: "tanda-anak-perlu-ke-dokter",
    title: "Kapan Anak Perlu Dibawa ke Dokter?",
    excerpt:
      "Tanda-tanda umum yang menunjukkan anak perlu diperiksa oleh dokter.",
    date: "2026-10-25",
    content: [
      "Anak perlu dibawa ke dokter apabila menunjukkan perubahan kondisi kesehatan yang tidak biasa, terutama jika gejala berlangsung lama, semakin memburuk, atau mengganggu aktivitas sehari-hari. Tanda-tanda umum yang perlu diperhatikan antara lain demam tinggi atau demam yang menetap, batuk dan pilek yang semakin parah, muntah atau diare berulang, nafsu makan menurun, sulit minum, buang air kecil berkurang, ruam yang tidak biasa, serta berat badan yang sulit bertambah. Anak juga sebaiknya diperiksa apabila tampak sangat lemas, lebih rewel dari biasanya, mengalami gangguan tidur berkepanjangan, atau menunjukkan keterlambatan pertumbuhan dan perkembangan.",
      "Selain itu, anak harus segera dibawa ke instalasi gawat darurat (IGD) jika mengalami kesulitan bernapas, bibir atau wajah membiru, kejang untuk pertama kali atau kejang berkepanjangan, penurunan kesadaran, sulit dibangunkan, leher kaku disertai demam, atau tanda dehidrasi berat. Bayi berusia kurang dari tiga bulan yang mengalami suhu tubuh 38°C atau lebih juga harus segera diperiksa oleh tenaga medis. Jangan menunggu gejala memburuk apabila muncul tanda bahaya tersebut.",
      "Secara umum, orang tua perlu memperhatikan perubahan kondisi fisik, perilaku, pola makan, tidur, serta perkembangan anak. Pemeriksaan dokter juga dianjurkan apabila gejala tidak kunjung membaik, sering berulang, atau membuat orang tua khawatir terhadap kesehatan anak. Pemeriksaan secara berkala sesuai usia tetap penting meskipun anak terlihat sehat, karena dapat membantu memantau pertumbuhan, perkembangan, status gizi, dan kelengkapan imunisasi serta mendeteksi masalah kesehatan sejak dini."
    ],
  },
  {
    slug: "mpasi-pertama",
    title: "Panduan Awal Memulai MPASI",
    excerpt:
      "Tips dan panduan untuk memulai makanan pendamping ASI (MPASI) bagi bayi.",
    date: "2026-10-26",
    content: [
      "Bayi umumnya mulai MPASI pada usia sekitar 6 bulan. Selain usia, perhatikan kesiapan perkembangan bayi, seperti mampu menegakkan kepala dan leher dengan stabil, dapat duduk tegak dengan bantuan, serta mampu menelan makanan dan tidak selalu mendorong makanan keluar menggunakan lidah. Bayi yang menunjukkan ketertarikan terhadap makanan saja belum tentu siap jika kemampuan motoriknya belum memadai.",
      "Kementerian Kesehatan menganjurkan MPASI memenuhi empat prinsip: tepat waktu, adekuat atau bergizi cukup, aman, dan diberikan dengan cara yang benar. Mulai dari tekstur lembut dan kental. Berikan makanan yang dilumatkan, seperti bubur kental, bukan makanan yang terlalu encer. Utamakan gizi lengkap. Kombinasikan makanan pokok, protein hewani seperti telur, ikan, ayam atau daging, protein nabati, sayuran, serta sumber lemak. Mulai dengan porsi kecil. Biarkan bayi beradaptasi dengan rasa, tekstur, dan proses makan secara bertahap. Tetap berikan ASI, MPASI melengkapi ASI, bukan langsung menggantikannya.",
      "Pastikan makanan diolah secara higienis, bayi selalu diawasi ketika makan, dan hindari makanan yang berisiko menyebabkan tersedak, seperti kacang utuh, potongan keras, atau anggur utuh. Hindari madu sebelum usia 12 bulan, serta batasi gula dan garam tambahan. Kenalkan makanan yang berpotensi menyebabkan alergi dalam bentuk yang aman dan sesuai usia; jika bayi memiliki riwayat alergi berat atau eksim berat, konsultasikan dahulu dengan dokter.",
      "Kesimpulannya: MPASI dimulai sekitar usia 6 bulan dengan makanan bergizi, tekstur sesuai kemampuan bayi, kebersihan yang terjaga, dan pemberian yang responsif tanpa memaksa. Pantau pertumbuhan bayi secara berkala di posyandu atau puskesmas untuk memastikan kebutuhan gizinya terpenuhi."
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