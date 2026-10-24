export const site = {
  city: "Nganjuk",
  description:
    "Informasi profil, layanan, dan jadwal praktik dokter spesialis anak. Hubungi kami dengan mudah melalui WhatsApp.",
  doctor: {
    name: "Dr. Suyanti, Sp.A",
    specialty: "Dokter Spesialis Anak",
    str: "0000000000000000",
    photo: "/dokter.png",
    bio: " Dokter spesialis anak dengan pengalaman lebih dari 5 tahun dalam menangani berbagai kondisi kesehatan anak. Berkomitmen untuk memberikan pelayanan terbaik bagi pasien dan keluarga.",
    education: [
      "Spesialis Ilmu Kesehatan Anak, Universitas Airlangga (2012 - 2016)",
      "Pendidikan Dokter, Universitas Airlangga (2016 - 2018)",
    ],
    experience: [
      "Dokter Spesialis Anak, RS Bhayangkara (2020 - sekarang)",
      "Dokter Umum, Puskesmas Gondang (2018 - 2020)",
    ],
    memberships: [
      "Ikatan Dokter Indonesia (IDI)",
      "Ikatan Dokter Anak Indonesia (IDAI)",
    ],
  },
  contact: {
    whatsapp: "6281234567890",
    phone: "0358-1234567",
    waMessage: "Halo dokter, saya ingin bertanya tentang jadwal praktik.",
  },
  services: [
    {
      slug: "imunisasi",
      title: "Imunisasi",
      desc: "Imunisasi dasar dan lanjutan sesuai jadwal.",
      detail: [
        "Paragraf penjelasan layanan imunisasi. Isi dengan keterangan dari dokter.",
        "Paragraf kedua, misalnya jenis imunisasi yang tersedia dan persiapan sebelum datang.",
      ],
    },
    {
      slug: "tumbuh-kembang",
      title: "Tumbuh Kembang",
      desc: "Pemantauan berat, tinggi, dan perkembangan anak.",
      detail: [
        "Paragraf penjelasan layanan tumbuh kembang. Isi dengan keterangan dari dokter.",
        "Paragraf kedua, misalnya apa saja yang diperiksa pada kunjungan.",
      ],
    },
    {
      slug: "konsultasi-gizi",
      title: "Konsultasi Gizi",
      desc: "Panduan nutrisi dan MPASI.",
      detail: [
        "Paragraf penjelasan layanan konsultasi gizi. Isi dengan keterangan dari dokter.",
        "Paragraf kedua, misalnya hal yang perlu dibawa saat konsultasi.",
      ],
    },
    {
      slug: "pemeriksaan-umum",
      title: "Pemeriksaan Umum",
      desc: "Demam, batuk, pilek, dan keluhan harian anak.",
      detail: [
        "Paragraf penjelasan layanan pemeriksaan umum. Isi dengan keterangan dari dokter.",
        "Paragraf kedua, misalnya keluhan yang dapat diperiksakan.",
      ],
    },
  ],
  schedule: [
    {
      place: "Praktik Dokter Suyanti",
      address: "Jl. Ahmad Yani No. 123, Nganjuk, Jawa Timur",
      mapsUrl: "https://maps.google.com",
      // time: null = libur
      hours: [
        { day: "Senin", time: "16.00 - 20.00" },
        { day: "Selasa", time: "16.00 - 20.00" },
        { day: "Rabu", time: "16.00 - 20.00" },
        { day: "Kamis", time: null },
        { day: "Jumat", time: "16.00 - 20.00" },
        { day: "Sabtu", time: "09.00 - 12.00" },
        { day: "Minggu", time: null },
      ],
    },
  ],
};