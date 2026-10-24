export const site = {
  city: "Nganjuk",
  description:
    "Informasi profil, layanan, dan jadwal praktik dokter spesialis anak. Hubungi kami dengan mudah melalui WhatsApp.",
  doctor: {
    name: "dr. Suyanti, Sp.A",
    specialty: "Dokter Spesialis Anak",
    str: "0000000000000000",
    photo: "/dokter.png",
    bio: "Lulusan ... dengan pengalaman ... dalam menangani kesehatan anak dan bayi.",
    education: [
      "Spesialis Ilmu Kesehatan Anak, Universitas ... (20XX)",
      "Pendidikan Dokter, Universitas ... (20XX)",
    ],
    experience: [
      "Dokter Spesialis Anak, RS ... (20XX - sekarang)",
      "Dokter Umum, Puskesmas ... (20XX - 20XX)",
    ],
    memberships: [
      "Ikatan Dokter Indonesia (IDI)",
      "Ikatan Dokter Anak Indonesia (IDAI)",
    ],
  },
  contact: {
    whatsapp: "6281234567890",
    phone: "0358-000000",
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