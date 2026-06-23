import type { Metadata } from "next";
import Image from "next/image";
import type { Project, StatItem } from "@/lib/types";
import { WHATSAPP_URL } from "@/lib/constants";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Motion";

export const metadata: Metadata = {
  title: "Portfolio — Syawal Property",
  description: "Lihat proyek-proyek konstruksi dan pengembangan properti yang telah diselesaikan oleh Syawal Property.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  { value: "350+", label: "Total Proyek" },
  { value: "12", label: "Provinsi" },
  { value: "15+", label: "Tahun Berpengalaman" },
  { value: "200+", label: "Klien Aktif" },
];

const PROJECTS: Project[] = [
  { id: "platinum-tower", category: "Komersial", title: "Platinum Tower Office Complex", location: "Jakarta Selatan, DKI Jakarta", year: "2024", area: "12.500 m²", description: "Gedung perkantoran 18 lantai dengan desain arsitektur modern, dilengkapi sistem smart building dan sertifikasi green building GREENSHIP.", imgSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", featured: true },
  { id: "harmoni-indah", category: "Residensial", title: "Perumahan Elite Harmoni Indah", location: "Depok, Jawa Barat", year: "2023", area: "8.200 m²", description: "Kawasan perumahan premium 120 unit dengan fasilitas clubhouse, kolam renang, dan sistem keamanan 24 jam.", imgSrc: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80", featured: true },
  { id: "karawang-warehouse", category: "Industri", title: "Gudang Logistik Modern Karawang", location: "Karawang, Jawa Barat", year: "2023", area: "5.000 m²", description: "Fasilitas pergudangan kelas A dengan sistem loading dock otomatis, fire suppression, dan kapasitas 10.000 palet.", imgSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", featured: true },
  { id: "green-valley", category: "Residensial", title: "Green Valley Residence", location: "Bogor, Jawa Barat", year: "2022", area: "6.800 m²", description: "Perumahan eksklusif 85 unit dengan konsep green living, panel surya komunal, dan area hijau 40% dari total lahan.", imgSrc: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80" },
  { id: "ruko-boulevard", category: "Komersial", title: "Ruko Boulevard Business Park", location: "Tangerang, Banten", year: "2022", area: "3.200 m²", description: "Kompleks ruko 3 lantai 40 unit di lokasi strategis, dirancang untuk UMKM dan usaha ritel modern.", imgSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { id: "puskesmas-renovasi", category: "Pemerintah", title: "Renovasi Puskesmas Kecamatan", location: "Bekasi, Jawa Barat", year: "2022", area: "1.800 m²", description: "Renovasi dan perluasan fasilitas kesehatan dengan penambahan ruang rawat inap dan ruang operasi minor.", imgSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { id: "villa-puncak", category: "Residensial", title: "Villa Puncak Sejahtera", location: "Puncak, Jawa Barat", year: "2021", area: "2.400 m²", description: "Kompleks villa resort 20 unit dengan arsitektur tropis kontemporer dan pemandangan pegunungan spektakuler.", imgSrc: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
  { id: "factory-cibitung", category: "Industri", title: "Pabrik Manufaktur Cibitung", location: "Cibitung, Bekasi", year: "2021", area: "9.600 m²", description: "Fasilitas produksi manufaktur otomotif dengan standar ISO 9001 dan sistem ventilasi industrial yang efisien.", imgSrc: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80" },
  { id: "sekolah-modern", category: "Pemerintah", title: "Gedung Sekolah Menengah Modern", location: "Bandung, Jawa Barat", year: "2021", area: "4.100 m²", description: "Pembangunan gedung sekolah 3 lantai dengan 24 ruang kelas, laboratorium sains, dan aula serbaguna.", imgSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" },
];

const CATEGORIES = ["Semua", "Komersial", "Residensial", "Industri", "Pemerintah"] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[4px] overflow-hidden border border-[#d5c4b1] bg-white hover:shadow-[0px_4px_12px_rgba(27,38,59,0.1)] transition-all duration-200">
      <div className="h-48 sm:h-52 relative">
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[#1b263b]/30 group-hover:bg-[#1b263b]/15 transition-colors duration-200" />
        <span className="absolute top-3 left-3 font-body text-[10px] font-bold uppercase tracking-[0.1em] bg-[#e09f3e] text-[#1b263b] px-3 py-1 rounded-[2px]">
          {project.category}
        </span>
        {project.featured && (
          <span className="absolute top-3 right-3 font-body text-[10px] font-bold uppercase tracking-[0.08em] bg-white/90 text-[#1b263b] px-3 py-1 rounded-[2px]">
            Unggulan
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6 border-b-2 border-[#e09f3e]">
        <h3 className="font-heading font-bold text-sm sm:text-base text-[#031d34] mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="font-body text-sm text-[#514536] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#514536]">
          <div className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <dt className="sr-only">Lokasi</dt><dd>{project.location}</dd>
          </div>
          <div className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
            <dt className="sr-only">Tahun</dt><dd>{project.year}</dd>
          </div>
          <div className="flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 6.5l-1.5-1.5-8.5 8.5-4-4-1.5 1.5 5.5 5.5 10-10z"/></svg>
            <dt className="sr-only">Luas</dt><dd>{project.area}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Portfolio Proyek"
        heading="Rekam Jejak Proyek Kami"
        description="Lebih dari 350 proyek telah berhasil kami selesaikan di berbagai sektor — dari hunian hingga fasilitas industri berskala besar."
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Portfolio" }]}
      >
        {/* Stats strip inside header */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-[4px] p-4 text-center">
              <span className="font-heading block text-2xl font-bold text-[#e09f3e]">{value}</span>
              <span className="font-body text-xs text-white/60 mt-1 block">{label}</span>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Grid */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Category filter labels */}
          <FadeUp className="flex flex-wrap gap-2 mb-10 sm:mb-12" role="group" aria-label="Filter kategori">
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                className={`font-heading px-4 py-2 rounded-[4px] text-xs font-bold tracking-wide uppercase select-none ${
                  i === 0
                    ? "bg-[#1b263b] text-white"
                    : "bg-white border border-[#d5c4b1] text-[#514536] hover:border-[#415a77] transition-colors cursor-pointer"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {PROJECTS.map((p) => (
              <StaggerItem key={p.id}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <CtaBanner
        heading="Wujudkan Proyek Anda Bersama Kami"
        body="Lihat bagaimana keahlian dan pengalaman kami dapat diterapkan untuk proyek Anda. Mulai dengan konsultasi gratis hari ini."
        actions={[
          { label: "Konsultasi Gratis", href: WHATSAPP_URL, variant: "primary", external: true },
          { label: "Lihat Layanan Kami", href: "/layanan", variant: "ghost" },
        ]}
      />
    </>
  );
}
