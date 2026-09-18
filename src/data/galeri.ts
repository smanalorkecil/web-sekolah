export interface FotoItem {
  url: string;
  caption: string;
}

export interface AlbumItem {
  slug: string;
  judul: string;
  kategori: string;
  labelKategori: string;
  tanggal: string;
  deskripsi: string;
  cover: string;
  fotoList: FotoItem[];
}

export const daftarAlbum: AlbumItem[] = [
  {
    slug: "p5-kearifan-lokal",
    judul: "Gelar Karya Projek Penguatan Profil Pelajar Pancasila (P5)",
    kategori: "p5",
    labelKategori: "KBM & Projek P5",
    tanggal: "10 November 2026",
    deskripsi:
      "Pameran hasil karya seni kearifan lokal Alor dan produk inovatif siswa dalam implementasi Kurikulum Merdeka.",
    cover:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
    fotoList: [
      {
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
        caption: "Pembukaan pameran karya seni oleh Kepala Sekolah dan Komite",
      },
      {
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
        caption: "Stan pameran produk kewirausahaan siswa kelas X",
      },
      {
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
        caption: "Presentasi proyek lingkungan hidup dan daur ulang sampah",
      },
      {
        url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1200&auto=format&fit=crop",
        caption:
          "Penampilan tari tradisional menyambut orang tua dan pengunjung",
      },
    ],
  },
  {
    slug: "upacara-hut-ri-81",
    judul: "Peringatan Hari Ulang Tahun Kemerdekaan RI ke-81",
    kategori: "upacara",
    labelKategori: "Upacara & Peringatan",
    tanggal: "17 Agustus 2026",
    deskripsi:
      "Rangkaian upacara pengibaran sang saka merah putih dan lomba peringatan kemerdekaan.",
    cover:
      "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1000&auto=format&fit=crop",
    fotoList: [
      {
        url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop",
        caption:
          "Pasukan Pengibar Bendera (Paskibra) memasuki lapangan upacara",
      },
      {
        url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
        caption:
          "Amanat pembina upacara di hadapan dewan guru dan peserta didik",
      },
      {
        url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200&auto=format&fit=crop",
        caption: "Keceriaan lomba tarik tambang dan tarik suara antar-kelas",
      },
    ],
  },
  {
    slug: "perkemahan-pramuka",
    judul: "Perkemahan Sabtu-Minggu (Persami) Gugus Depan",
    kategori: "ekskul",
    labelKategori: "Ekstrakurikuler",
    tanggal: "04 September 2026",
    deskripsi:
      "Pembinaan karakter kemandirian, penjelajahan alam, dan malam keakraban api unggun.",
    cover:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    fotoList: [
      {
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
        caption: "Pendirian tenda regu dan persiapan posko perlengkapan",
      },
      {
        url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
        caption: "Uji ketangkasan pionering dan tali temali",
      },
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        caption: "Upacara api unggun dan pentas kreativitas regu pramuka",
      },
    ],
  },
  {
    slug: "juara-olimpiade-sains",
    judul: "Penyerahan Piagam Juara Lomba Sains Kabupaten",
    kategori: "prestasi",
    labelKategori: "Prestasi Siswa",
    tanggal: "22 Agustus 2026",
    deskripsi:
      "Apresiasi atas prestasi medali emas bidang Fisika dan Informatika tingkat Kabupaten Alor.",
    cover:
      "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=1000&auto=format&fit=crop",
    fotoList: [
      {
        url: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=1200&auto=format&fit=crop",
        caption: "Penyerahan piala dan piagam penghargaan oleh Kepala Sekolah",
      },
      {
        url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
        caption: "Sesi foto bersama guru pembimbing olimpiade sains",
      },
    ],
  },
];
