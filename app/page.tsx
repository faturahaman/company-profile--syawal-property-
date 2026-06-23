import Link from "next/link";
import Image from "next/image";
import type { StatItem } from "@/lib/types";
import { WHATSAPP_URL } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";
import {
  FadeUp,
  FadeIn,
  SlideIn,
  StaggerGrid,
  StaggerItem,
  AnimatedCounter,
} from "@/components/ui/Motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "350+", label: "Proyek Selesai" },
  { value: "200+", label: "Klien Puas" },
  { value: "98%", label: "Tingkat Kepuasan" },
];

const HOME_SERVICES = [
  {
    title: "Konstruksi Bangunan",
    description: "Pembangunan gedung komersial, residensial, dan industri dengan material terbaik dan tenaga ahli berpengalaman.",
    icon: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  },
  {
    title: "Renovasi & Restorasi",
    description: "Transformasi ruang yang sudah ada menjadi lebih fungsional, estetis, dan sesuai dengan kebutuhan modern Anda.",
    icon: <path d="M15.5 2.1L11.42 6.18l4.41 4.41 4.08-4.08c.39-.39.39-1.02 0-1.41L16.92 2.1c-.39-.39-1.02-.39-1.42 0zM3 15.04V19h3.96l8.81-8.81-3.96-3.96L3 15.04z" />,
  },
  {
    title: "Desain Arsitektur",
    description: "Perancangan blueprint dan visualisasi 3D proyek Anda dengan tim arsitek profesional bersertifikasi.",
    icon: <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />,
  },
  {
    title: "Manajemen Proyek",
    description: "Pengelolaan proyek end-to-end: dari perencanaan, pengawasan lapangan, hingga laporan progres berkala.",
    icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />,
  },
  {
    title: "Pengembangan Properti",
    description: "Investasi dan pengembangan kawasan perumahan, apartemen, dan komersial dengan nilai jual tinggi.",
    icon: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
  },
  {
    title: "Konsultasi Teknik",
    description: "Layanan konsultasi teknik sipil dan struktural untuk memastikan setiap proyek memenuhi standar keamanan.",
    icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />,
  },
] as const;

const PROCESS_STEPS = [
  { step: "01", title: "Konsultasi", desc: "Diskusi kebutuhan, anggaran, dan visi proyek Anda bersama tim ahli kami." },
  { step: "02", title: "Perencanaan", desc: "Penyusunan desain, RAB, dan timeline proyek yang terperinci dan transparan." },
  { step: "03", title: "Pelaksanaan", desc: "Konstruksi dengan pengawasan ketat, laporan berkala, dan kontrol kualitas." },
  { step: "04", title: "Serah Terima", desc: "Finalisasi, inspeksi menyeluruh, dan garansi purna jual untuk ketenangan pikiran." },
] as const;

const FEATURED_PROJECTS = [
  { category: "Komersial", title: "Gedung Perkantoran Platinum Tower", location: "Jakarta Selatan", year: "2024", imgSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80" },
  { category: "Residensial", title: "Perumahan Elite Harmoni Indah", location: "Depok, Jawa Barat", year: "2023", imgSrc: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80" },
  { category: "Industri", title: "Gudang Logistik Modern Karawang", location: "Karawang, Jawa Barat", year: "2023", imgSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
] as const;

const TESTIMONIALS = [
  { quote: "Syawal Property menyelesaikan gedung kantor kami 2 minggu lebih cepat dari jadwal tanpa mengorbankan kualitas. Tim mereka sangat profesional.", name: "Bapak Hendra Wijaya", role: "Direktur PT Maju Bersama Tbk" },
  { quote: "Renovasi rumah kami berjalan mulus. Komunikasi transparan, pengerjaan rapi, dan hasil akhirnya melebihi ekspektasi kami.", name: "Ibu Sari Dewi", role: "Pemilik Rumah Tinggal, Bekasi" },
  { quote: "Proyek gudang logistik 5.000 m² selesai tepat waktu dan sesuai spesifikasi teknis. Mitra kontraktor terpercaya untuk jangka panjang.", name: "Bapak Rudi Santoso", role: "Manajer Operasional PT Logistik Prima" },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ value, label }: StatItem) {
  return (
    <div className="flex flex-col gap-1">
      <AnimatedCounter
        value={value}
        className="font-heading text-4xl sm:text-[40px] font-bold text-[#e09f3e] leading-none tracking-tight"
      />
      <span className="font-body text-sm text-white/70 font-medium">{label}</span>
    </div>
  );
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="group border border-[#d5c4b1] rounded-[4px] bg-white p-6 sm:p-8 flex flex-col gap-4 hover:shadow-[0px_4px_12px_rgba(27,38,59,0.1)] hover:-translate-y-0.5 transition-all duration-200">
      <div className="w-12 h-12 rounded-[4px] bg-[#e5efff] flex items-center justify-center text-[#835500] shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
      </div>
      <h3 className="font-heading text-base sm:text-lg font-semibold text-[#031d34] leading-snug">{title}</h3>
      <p className="font-body text-sm text-[#514536] leading-relaxed">{description}</p>
      <div className="mt-auto pt-2 border-t-2 border-[#e09f3e] w-8" />
    </div>
  );
}

function PortfolioCard({ category, title, location, year, imgSrc }: typeof FEATURED_PROJECTS[number]) {
  return (
    <div className="group rounded-[4px] overflow-hidden border border-[#d5c4b1] bg-white hover:shadow-[0px_4px_12px_rgba(27,38,59,0.1)] transition-all duration-200">
      <div className="h-48 sm:h-52 w-full relative">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[#1b263b]/40 group-hover:bg-[#1b263b]/25 transition-colors duration-200" />
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 font-body text-[10px] font-bold uppercase tracking-[0.1em] bg-[#e09f3e] text-[#1b263b] px-3 py-1 rounded-[2px]">
          {category}
        </span>
      </div>
      <div className="p-5 sm:p-6 border-b-2 border-[#e09f3e]">
        <h3 className="font-heading font-semibold text-sm sm:text-base text-[#031d34] mb-2 leading-snug">{title}</h3>
        <div className="flex items-center justify-between text-xs text-[#514536]">
          <span className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
            {location}
          </span>
          <span className="font-body text-[10px] font-bold tracking-[0.1em] uppercase text-[#837564]">{year}</span>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name, role }: typeof TESTIMONIALS[number]) {
  return (
    <div className="bg-white border border-[#d5c4b1] rounded-[4px] p-6 sm:p-8 flex flex-col gap-5">
      <div className="flex gap-0.5" aria-label="Rating 5 bintang" role="img">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e09f3e" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <blockquote className="font-body text-sm text-[#514536] leading-relaxed italic">"{quote}"</blockquote>
      <div className="flex items-center gap-3 mt-auto pt-2">
        <div className="w-10 h-10 rounded-[4px] bg-[#e5efff] flex items-center justify-center text-[#835500] font-heading font-bold text-sm shrink-0" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading font-semibold text-sm text-[#031d34]">{name}</p>
          <p className="font-body text-xs text-[#837564]">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1b263b] overflow-hidden min-h-[560px] sm:min-h-[640px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Left-heavy fade overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1b263b 40%, rgba(27,38,59,0.88) 60%, rgba(27,38,59,0.45) 100%)" }}
          aria-hidden="true"
        />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#f8f9ff] to-transparent" aria-hidden="true" />

        <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-20 sm:py-28 lg:py-36">
          <div className="max-w-xl lg:max-w-2xl">
            <FadeIn delay={0.1}>
              <SectionLabel light>Kontraktor &amp; Developer Properti</SectionLabel>
            </FadeIn>
            <FadeUp delay={0.2}>
              <h1 className="font-heading text-[38px] sm:text-[52px] lg:text-[64px] font-bold text-white leading-[1.1] tracking-[-0.02em] mb-5">
                Membangun Masa Depan dengan{" "}
                <span className="text-[#e09f3e]">Presisi &amp; Integritas</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="font-body text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                Syawal Property menghadirkan solusi konstruksi dan pengembangan properti berkelas dengan standar internasional. Dari perencanaan hingga serah terima kunci.
              </p>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] bg-[#e09f3e] text-[#1b263b] text-sm font-bold font-heading tracking-wide hover:bg-[#feb956] transition-colors"
                >
                  Konsultasi Gratis
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-[4px] border border-white/30 text-white text-sm font-semibold font-heading tracking-wide hover:bg-white/10 transition-colors"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Stats */}
          <FadeIn delay={0.7}>
            <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {STATS.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="mb-10 sm:mb-14">
            <SectionLabel>Layanan Kami</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight max-w-lg">
                Solusi Properti Komprehensif
              </h2>
              <Link href="/layanan" className="font-heading text-sm font-semibold text-[#835500] hover:text-[#e09f3e] tracking-wide transition-colors shrink-0">
                Semua Layanan →
              </Link>
            </div>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {HOME_SERVICES.map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1b263b]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="mb-10 sm:mb-14 text-center">
            <SectionLabel light>Proses Kerja</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-white leading-tight tracking-tight">
              Dari Konsep Menjadi Kenyataan
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="bg-white/5 border border-white/10 rounded-[4px] p-6 sm:p-8">
                  <span className="font-heading block text-5xl font-bold text-[#e09f3e]/20 leading-none mb-4" aria-hidden="true">
                    {step}
                  </span>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="mb-10 sm:mb-14">
            <SectionLabel>Portfolio Pilihan</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight max-w-lg">
                Karya Terbaik Kami
              </h2>
              <Link href="/portfolio" className="font-heading text-sm font-semibold text-[#835500] hover:text-[#e09f3e] tracking-wide transition-colors shrink-0">
                Semua Proyek →
              </Link>
            </div>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURED_PROJECTS.map((p) => (
              <StaggerItem key={p.title}>
                <PortfolioCard {...p} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#e5efff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="mb-10 sm:mb-14 text-center">
            <SectionLabel>Testimoni Klien</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight">
              Kepercayaan Adalah Fondasi Kami
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <TestimonialCard {...t} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        heading="Siap Memulai Proyek Anda?"
        body="Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik. Tim ahli kami siap membantu mewujudkan proyek impian Anda."
        actions={[
          { label: "Hubungi via WhatsApp", href: WHATSAPP_URL, variant: "primary", external: true },
          { label: "Pelajari Tentang Kami", href: "/tentang-kami", variant: "ghost" },
        ]}
      />
    </>
  );
}
