import type { Project, Service, StatItem, TeamMember } from "./types";
import React from "react";

// ─── Home Page Data ─────────────────────────────────────────────────────────

export const HOME_STATS: StatItem[] = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "350+", label: "Proyek Selesai" },
  { value: "200+", label: "Klien Puas" },
  { value: "98%", label: "Tingkat Kepuasan" },
];

export const TESTIMONIALS = [
  {
    quote: "Syawal Property menyelesaikan gedung kantor kami 2 minggu lebih cepat dari jadwal tanpa mengorbankan kualitas. Tim mereka sangat profesional.",
    name: "Bapak Hendra Wijaya",
    role: "Direktur PT Maju Bersama Tbk",
  },
  {
    quote: "Renovasi rumah kami berjalan mulus. Komunikasi transparan, pengerjaan rapi, dan hasil akhirnya melebihi ekspektasi kami.",
    name: "Ibu Sari Dewi",
    role: "Pemilik Rumah Tinggal, Bekasi",
  },
  {
    quote: "Proyek gudang logistik 5.000 m² selesai tepat waktu dan sesuai spesifikasi teknis. Mitra kontraktor terpercaya untuk jangka panjang.",
    name: "Bapak Rudi Santoso",
    role: "Manajer Operasional PT Logistik Prima",
  },
  {
    quote: "Desain arsitektur yang diberikan sangat inovatif dan memaksimalkan pencahayaan alami. Sangat puas dengan hasil akhir bangunan klinik kami.",
    name: "dr. Anita Larasati",
    role: "Pendiri Klinik Sehat Bersama",
  },
  {
    quote: "Integritas dan profesionalisme tim Syawal Property patut diacungi jempol. Selalu ada solusi cepat ketika menghadapi kendala di lapangan.",
    name: "Bapak Kevin Pratama",
    role: "Developer Properti Independen",
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    category: "Komersial",
    title: "Gedung Perkantoran Platinum Tower",
    location: "Jakarta Selatan",
    year: "2024",
    imgSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    category: "Residensial",
    title: "Perumahan Elite Harmoni Indah",
    location: "Depok, Jawa Barat",
    year: "2023",
    imgSrc: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
  },
  {
    category: "Industri",
    title: "Gudang Logistik Modern Karawang",
    location: "Karawang, Jawa Barat",
    year: "2023",
    imgSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
] as const;

// ─── Tentang Kami Data ───────────────────────────────────────────────────────

export const ABOUT_STATS: StatItem[] = [
  { value: "2009", label: "Tahun Berdiri" },
  { value: "350+", label: "Proyek Selesai" },
  { value: "150+", label: "Tenaga Ahli" },
  { value: "12", label: "Provinsi" },
];

export const VALUES = [
  { title: "Integritas", desc: "Transparansi penuh dalam setiap aspek — dari penawaran harga hingga progres proyek dan pelaporan.", icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/> },
  { title: "Kualitas",   desc: "Kami tidak berkompromi pada kualitas material, pengerjaan, dan standar keselamatan di setiap proyek.", icon: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/> },
  { title: "Inovasi",    desc: "Mengadopsi teknologi konstruksi terkini dan metodologi manajemen proyek modern untuk efisiensi optimal.", icon: <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/> },
  { title: "Keberlanjutan", desc: "Berkomitmen pada praktik konstruksi yang ramah lingkungan dan bertanggung jawab terhadap masyarakat sekitar.", icon: <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c6 0 15-7 15-18C18.5 4 11 5.5 8 10.5c-2.5-3.5-7-4-7-4-.5 7.5 4.5 12.5 9 13.5v-2c-1.62-1.3-3-3-3-6 2.84.18 5.66 1.27 8 3z"/> },
] as const;

export const MILESTONES = [
  { year: "2009", title: "Pendirian Syawal Property", desc: "Dimulai dari tim kecil 5 orang dengan proyek renovasi rumah tinggal di Jakarta Selatan." },
  { year: "2012", title: "Ekspansi ke Proyek Komersial", desc: "Mendapatkan kontrak pertama gedung perkantoran 4 lantai dan mendirikan divisi komersial." },
  { year: "2015", title: "100 Proyek Milestone", desc: "Merayakan penyelesaian proyek ke-100 dan memperluas tim menjadi 50 tenaga ahli." },
  { year: "2018", title: "Sertifikasi ISO 9001:2015", desc: "Meraih sertifikasi internasional untuk sistem manajemen mutu konstruksi." },
  { year: "2021", title: "Ekspansi Nasional", desc: "Membuka kantor cabang di Bandung dan Surabaya, menjangkau 12 provinsi." },
  { year: "2024", title: "350+ Proyek Selesai", desc: "Melampaui 350 proyek dengan total nilai lebih dari Rp 2 triliun dan 200+ klien aktif." },
] as const;

export const TEAM: TeamMember[] = [
  { name: "Ir. Ahmad Syawal, M.T.", role: "Pendiri & Direktur Utama",    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Drs. Budi Hartono",       role: "Direktur Operasional",         imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Ir. Siti Rahayu, M.Arch.", role: "Kepala Arsitek",              imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Eko Prasetyo, S.T.",       role: "Manajer Teknik Sipil",        imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Dewi Lestari, S.E., M.M.", role: "Direktur Keuangan",          imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Rudi Hermawan, S.T.",      role: "Manajer Proyek Senior",       imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Nina Safitri, S.T.",       role: "QA/QC Engineer",              imgSrc: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80" },
  { name: "Agus Santoso, S.T.",       role: "HSE Manager",                 imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
];

export const CERTIFICATIONS = ["ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001", "GREENSHIP Certified", "Kontraktor Kelas A", "IAMPI Member"] as const;

// ─── Layanan Data ─────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Konstruksi Bangunan",
    description: "Pembangunan gedung komersial, residensial, dan industri dari nol dengan standar kualitas internasional dan tenaga ahli bersertifikat.",
    features: ["Pembangunan gedung perkantoran & komersial", "Konstruksi perumahan dan kawasan hunian", "Fasilitas industri dan gudang logistik", "Bangunan pemerintah dan fasilitas publik", "Kontrol kualitas material berstandar SNI", "Laporan progres pembangunan berkala"],
    icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    number: "02",
    title: "Renovasi & Restorasi",
    description: "Transformasi dan peremajaan bangunan yang sudah ada menjadi lebih fungsional, estetis, dan memenuhi standar modern.",
    features: ["Renovasi total dan parsial hunian", "Restorasi bangunan bersejarah", "Remodeling interior dan eksterior", "Penambahan lantai (vertical extension)", "Upgrade sistem MEP (Mekanikal, Elektrikal, Plumbing)", "Konsultasi desain pra-renovasi"],
    icon: <path d="M15.5 2.1L11.42 6.18l4.41 4.41 4.08-4.08c.39-.39.39-1.02 0-1.41L16.92 2.1c-.39-.39-1.02-.39-1.42 0zM3 15.04V19h3.96l8.81-8.81-3.96-3.96L3 15.04z" />,
  },
  {
    number: "03",
    title: "Desain Arsitektur",
    description: "Perancangan arsitektur yang menggabungkan estetika modern dengan fungsionalitas optimal, mulai dari konsep hingga gambar teknis.",
    features: ["Desain konsep dan skematik", "Gambar kerja dan detail teknis", "Visualisasi 3D dan rendering fotorealistis", "Perencanaan site plan dan masterplan kawasan", "Pengurusan IMB/PBG dan dokumen perizinan", "Desain interior berbasis kebutuhan pengguna"],
    icon: <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />,
  },
  {
    number: "04",
    title: "Manajemen Proyek",
    description: "Pengelolaan proyek konstruksi secara komprehensif dengan metodologi terkini untuk memastikan efisiensi waktu, biaya, dan kualitas.",
    features: ["Perencanaan jadwal dan milestone proyek", "Pengawasan lapangan full-time", "Manajemen vendor dan subkontraktor", "Kontrol anggaran dan pelaporan keuangan", "Manajemen risiko konstruksi", "Dokumentasi as-built drawing"],
    icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />,
  },
  {
    number: "05",
    title: "Pengembangan Properti",
    description: "Pengembangan kawasan properti dari studi kelayakan hingga pemasaran, dengan fokus pada nilai investasi jangka panjang.",
    features: ["Studi kelayakan dan analisis pasar", "Pengembangan kawasan perumahan", "Proyek mixed-use (hunian + komersial)", "Pemasaran dan penjualan unit properti", "Manajemen fasilitas pasca-selesai", "Konsultasi investasi properti"],
    icon: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
  },
  {
    number: "06",
    title: "Konsultasi Teknik",
    description: "Layanan konsultasi teknik sipil dan struktural yang memastikan setiap aspek konstruksi Anda aman, efisien, dan berkelanjutan.",
    features: ["Analisis struktur dan fondasi", "Audit teknis bangunan eksisting", "Konsultasi sistem utilitas bangunan", "Review dokumen teknis dan spesifikasi", "Sertifikasi laik fungsi bangunan", "Konsultasi green building & efisiensi energi"],
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />,
  },
];

export const PROCESS_STEPS = [
  { step: "01", title: "Konsultasi Awal", desc: "Kami mendengarkan kebutuhan, visi, dan anggaran Anda secara menyeluruh." },
  { step: "02", title: "Perencanaan", desc: "Penyusunan desain, RAB, dan timeline proyek yang terperinci dan transparan." },
  { step: "03", title: "Pelaksanaan", desc: "Konstruksi dengan pengawasan ketat, laporan berkala, dan kontrol kualitas." },
  { step: "04", title: "Serah Terima", desc: "Finalisasi, inspeksi menyeluruh, dan garansi purna jual untuk ketenangan pikiran." },
] as const;

// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const PORTFOLIO_STATS: StatItem[] = [
  { value: "350+", label: "Total Proyek" },
  { value: "12", label: "Provinsi" },
  { value: "15+", label: "Tahun Berpengalaman" },
  { value: "200+", label: "Klien Aktif" },
];

export const CATEGORIES = [
  "Semua",
  "Komersial",
  "Residensial",
  "Industri",
  "Pemerintah",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "platinum-tower",
    category: "Komersial",
    title: "Platinum Tower Office Complex",
    location: "Jakarta Selatan, DKI Jakarta",
    year: "2024",
    area: "12.500 m²",
    description: "Gedung perkantoran 18 lantai dengan desain arsitektur modern, dilengkapi sistem smart building dan sertifikasi green building GREENSHIP.",
    imgSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    featured: true,
  },
  {
    id: "harmoni-indah",
    category: "Residensial",
    title: "Perumahan Elite Harmoni Indah",
    location: "Depok, Jawa Barat",
    year: "2023",
    area: "8.200 m²",
    description: "Kawasan perumahan premium 120 unit dengan fasilitas clubhouse, kolam renang, dan sistem keamanan 24 jam.",
    imgSrc: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    featured: true,
  },
  {
    id: "karawang-warehouse",
    category: "Industri",
    title: "Gudang Logistik Modern Karawang",
    location: "Karawang, Jawa Barat",
    year: "2023",
    area: "5.000 m²",
    description: "Fasilitas pergudangan kelas A dengan sistem loading dock otomatis, fire suppression, dan kapasitas 10.000 palet.",
    imgSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    featured: true,
  },
  {
    id: "green-valley",
    category: "Residensial",
    title: "Green Valley Residence",
    location: "Bogor, Jawa Barat",
    year: "2022",
    area: "6.800 m²",
    description: "Perumahan eksklusif 85 unit dengan konsep green living, panel surya komunal, dan area hijau 40% dari total lahan.",
    imgSrc: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
  },
  {
    id: "ruko-boulevard",
    category: "Komersial",
    title: "Ruko Boulevard Business Park",
    location: "Tangerang, Banten",
    year: "2022",
    area: "3.200 m²",
    description: "Kompleks ruko 3 lantai 40 unit di lokasi strategis, dirancang untuk UMKM dan usaha ritel modern.",
    imgSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "puskesmas-renovasi",
    category: "Pemerintah",
    title: "Renovasi Puskesmas Kecamatan",
    location: "Bekasi, Jawa Barat",
    year: "2022",
    area: "1.800 m²",
    description: "Renovasi dan perluasan fasilitas kesehatan dengan penambahan ruang rawat inap dan ruang operasi minor.",
    imgSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    id: "villa-puncak",
    category: "Residensial",
    title: "Villa Puncak Sejahtera",
    location: "Puncak, Jawa Barat",
    year: "2021",
    area: "2.400 m²",
    description: "Kompleks villa resort 20 unit dengan arsitektur tropis kontemporer dan pemandangan pegunungan spektakuler.",
    imgSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    id: "factory-cibitung",
    category: "Industri",
    title: "Pabrik Manufaktur Cibitung",
    location: "Cibitung, Bekasi",
    year: "2021",
    area: "9.600 m²",
    description: "Fasilitas produksi manufaktur otomotif dengan standar ISO 9001 dan sistem ventilasi industrial yang efisien.",
    imgSrc: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
  },
  {
    id: "sekolah-modern",
    category: "Pemerintah",
    title: "Gedung Sekolah Menengah Modern",
    location: "Bandung, Jawa Barat",
    year: "2021",
    area: "4.100 m²",
    description: "Pembangunan gedung sekolah 3 lantai dengan 24 ruang kelas, laboratorium sains, dan aula serbaguna.",
    imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  },
];
