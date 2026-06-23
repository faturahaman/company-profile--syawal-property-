import type { Metadata } from "next";
import type { Service } from "@/lib/types";
import { WHATSAPP_URL } from "@/lib/constants";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";
import { FadeUp, SlideIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Layanan — Syawal Property",
  description: "Layanan konstruksi, renovasi, desain arsitektur, dan pengembangan properti dari Syawal Property.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
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

const PROCESS_STEPS = [
  { step: "1", title: "Konsultasi Awal", desc: "Kami mendengarkan kebutuhan, visi, dan anggaran Anda. Pertemuan awal ini gratis dan tanpa komitmen." },
  { step: "2", title: "Survei & Analisis", desc: "Tim teknis kami melakukan survei lokasi dan analisis mendalam untuk menghasilkan estimasi yang akurat." },
  { step: "3", title: "Proposal & Kontrak", desc: "Kami menyiapkan proposal detail mencakup desain, RAB, dan timeline. Kontrak ditandatangani setelah persetujuan." },
  { step: "4", title: "Pelaksanaan", desc: "Konstruksi dimulai dengan pengawasan penuh. Anda menerima laporan progres mingguan secara transparan." },
  { step: "5", title: "Serah Terima", desc: "Proyek diserahterimakan setelah inspeksi final. Garansi konstruksi diberikan untuk ketenangan pikiran Anda." },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function ServiceDetailCard({ number, title, description, features, icon }: Service) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#d5c4b1] rounded-[4px] overflow-hidden bg-white hover:shadow-[0px_4px_12px_rgba(27,38,59,0.1)] transition-shadow duration-200">
      {/* Dark panel */}
      <div className="bg-[#1b263b] p-8 sm:p-10 flex flex-col gap-6">
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-[4px] bg-[#e09f3e]/20 flex items-center justify-center text-[#e09f3e] shrink-0">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
          </div>
          <span className="font-heading text-6xl font-bold text-white/10 leading-none" aria-hidden="true">{number}</span>
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-white leading-snug mb-3">{title}</h3>
          <p className="font-body text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto pt-4 border-t-2 border-[#e09f3e] w-10" />
      </div>

      {/* Features panel */}
      <div className="p-8 sm:p-10 flex flex-col gap-4">
        <SectionLabel>Cakupan Layanan</SectionLabel>
        <ul className="flex flex-col gap-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 font-body text-sm text-[#514536] leading-relaxed">
              <span className="mt-1.5 inline-block w-1.5 h-1.5 bg-[#e09f3e] shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="pt-6 mt-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm font-semibold text-[#835500] hover:text-[#e09f3e] tracking-wide transition-colors"
          >
            Konsultasi Layanan Ini →
          </a>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ step, title, desc, isLast }: { step: string; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[4px] bg-[#e09f3e] flex items-center justify-center text-[#1b263b] font-heading font-bold text-base sm:text-lg">
          {step}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-[#d5c4b1] my-2" aria-hidden="true" />}
      </div>
      <div className="pb-8 sm:pb-10">
        <h4 className="font-heading font-semibold text-sm sm:text-base text-[#031d34] mb-1">{title}</h4>
        <p className="font-body text-sm text-[#514536] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LayananPage() {
  return (
    <>
      <PageHeader
        label="Layanan Kami"
        heading="Solusi Properti yang Komprehensif"
        description="Dari perencanaan hingga penyelesaian, kami menyediakan layanan lengkap untuk setiap tahap proyek properti Anda."
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Layanan" }]}
      />

      {/* Service cards */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col gap-6 sm:gap-8">
          {SERVICES.map((s) => <ServiceDetailCard key={s.number} {...s} />)}
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#e5efff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <SectionLabel>Alur Kerja</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight mb-4">
                Bagaimana Kami Bekerja
              </h2>
              <p className="font-body text-[#514536] leading-relaxed mb-8 sm:mb-10">
                Setiap proyek kami kerjakan dengan metodologi yang terstruktur untuk memastikan hasil terbaik, tepat waktu, dan sesuai anggaran.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] bg-[#1b263b] text-white text-sm font-bold font-heading tracking-wide hover:bg-[#415a77] transition-colors"
              >
                Mulai Proyek Anda
              </a>
            </div>
            {/* Right: timeline */}
            <div>
              {PROCESS_STEPS.map((s, i) => (
                <ProcessStep key={s.step} {...s} isLast={i === PROCESS_STEPS.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Butuh Layanan Spesifik?"
        body="Setiap proyek memiliki keunikannya. Hubungi kami untuk mendiskusikan kebutuhan spesifik Anda dan dapatkan penawaran yang disesuaikan."
        actions={[{ label: "Diskusikan Proyek Anda", href: WHATSAPP_URL, variant: "primary", external: true }]}
      />
    </>
  );
}
