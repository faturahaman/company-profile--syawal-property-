import type { Metadata } from "next";
import Image from "next/image";
import type { TeamMember, StatItem } from "@/lib/types";
import { WHATSAPP_URL } from "@/lib/constants";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Tentang Kami — Syawal Property",
  description: "Mengenal lebih jauh Syawal Property — misi, nilai, dan tim profesional di balik proyek-proyek terbaik kami.",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const ABOUT_STATS: StatItem[] = [
  { value: "2009", label: "Tahun Berdiri" },
  { value: "350+", label: "Proyek Selesai" },
  { value: "150+", label: "Tenaga Ahli" },
  { value: "12", label: "Provinsi" },
];

const VALUES = [
  { title: "Integritas", desc: "Transparansi penuh dalam setiap aspek — dari penawaran harga hingga progres proyek dan pelaporan.", icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/> },
  { title: "Kualitas",   desc: "Kami tidak berkompromi pada kualitas material, pengerjaan, dan standar keselamatan di setiap proyek.", icon: <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/> },
  { title: "Inovasi",    desc: "Mengadopsi teknologi konstruksi terkini dan metodologi manajemen proyek modern untuk efisiensi optimal.", icon: <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/> },
  { title: "Keberlanjutan", desc: "Berkomitmen pada praktik konstruksi yang ramah lingkungan dan bertanggung jawab terhadap masyarakat sekitar.", icon: <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20c6 0 15-7 15-18C18.5 4 11 5.5 8 10.5c-2.5-3.5-7-4-7-4-.5 7.5 4.5 12.5 9 13.5v-2c-1.62-1.3-3-3-3-6 2.84.18 5.66 1.27 8 3z"/> },
] as const;

const MILESTONES = [
  { year: "2009", title: "Pendirian Syawal Property", desc: "Dimulai dari tim kecil 5 orang dengan proyek renovasi rumah tinggal di Jakarta Selatan." },
  { year: "2012", title: "Ekspansi ke Proyek Komersial", desc: "Mendapatkan kontrak pertama gedung perkantoran 4 lantai dan mendirikan divisi komersial." },
  { year: "2015", title: "100 Proyek Milestone", desc: "Merayakan penyelesaian proyek ke-100 dan memperluas tim menjadi 50 tenaga ahli." },
  { year: "2018", title: "Sertifikasi ISO 9001:2015", desc: "Meraih sertifikasi internasional untuk sistem manajemen mutu konstruksi." },
  { year: "2021", title: "Ekspansi Nasional", desc: "Membuka kantor cabang di Bandung dan Surabaya, menjangkau 12 provinsi." },
  { year: "2024", title: "350+ Proyek Selesai", desc: "Melampaui 350 proyek dengan total nilai lebih dari Rp 2 triliun dan 200+ klien aktif." },
] as const;

const TEAM: TeamMember[] = [
  { name: "Ir. Ahmad Syawal, M.T.", role: "Pendiri & Direktur Utama",    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Drs. Budi Hartono",       role: "Direktur Operasional",         imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Ir. Siti Rahayu, M.Arch.", role: "Kepala Arsitek",              imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Eko Prasetyo, S.T.",       role: "Manajer Teknik Sipil",        imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Dewi Lestari, S.E., M.M.", role: "Direktur Keuangan",          imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "Rudi Hermawan, S.T.",      role: "Manajer Proyek Senior",       imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { name: "Nina Safitri, S.T.",       role: "QA/QC Engineer",              imgSrc: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80" },
  { name: "Agus Santoso, S.T.",       role: "HSE Manager",                 imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
];

const CERTIFICATIONS = ["ISO 9001:2015", "ISO 14001:2015", "OHSAS 18001", "GREENSHIP Certified", "Kontraktor Kelas A", "IAMPI Member"] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function ValueCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#d5c4b1] rounded-[4px] p-6 sm:p-8 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-[4px] bg-[#e5efff] flex items-center justify-center text-[#835500] shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
      </div>
      <h3 className="font-heading font-bold text-base text-[#031d34]">{title}</h3>
      <p className="font-body text-sm text-[#514536] leading-relaxed">{desc}</p>
      <div className="border-t-2 border-[#e09f3e] w-8 mt-auto" />
    </div>
  );
}

function MilestoneItem({ year, title, desc, isLast }: { year: string; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="flex gap-5">
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 bg-[#e09f3e] mt-0.5 shrink-0" />
        {!isLast && <div className="w-0.5 bg-[#d5c4b1] flex-1 mt-1" aria-hidden="true" />}
      </div>
      {/* Content */}
      <div className="pb-8">
        <span className="font-heading text-xs font-bold text-[#e09f3e] tracking-wide">{year}</span>
        <p className="font-heading font-semibold text-sm text-[#031d34] mt-0.5 mb-1">{title}</p>
        <p className="font-body text-sm text-[#514536] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function TeamMemberCard({ name, role, imgSrc }: TeamMember) {
  return (
    <div className="bg-white border border-[#d5c4b1] rounded-[4px] overflow-hidden hover:shadow-[0px_4px_12px_rgba(27,38,59,0.1)] transition-shadow duration-200">
      <div className="h-44 sm:h-48 relative">
        <Image
          src={imgSrc}
          alt={`Foto ${name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-[#1b263b]/15" />
      </div>
      <div className="p-4 sm:p-5 border-t-2 border-[#e09f3e]">
        <p className="font-heading font-bold text-sm text-[#031d34] leading-snug">{name}</p>
        <p className="font-body text-xs text-[#837564] mt-0.5">{role}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TentangKamiPage() {
  return (
    <>
      <PageHeader
        label="Tentang Kami"
        heading="Dibangun di Atas Fondasi Kepercayaan"
        description="Selama lebih dari 15 tahun, Syawal Property telah menjadi mitra terpercaya dalam mewujudkan proyek properti impian klien kami di seluruh Indonesia."
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Tentang Kami" }]}
      />

      {/* Who we are + Mission/Vision */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <SectionLabel>Siapa Kami</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight mb-5">
                Lebih dari Sekadar Kontraktor
              </h2>
              <p className="font-body text-[#514536] leading-relaxed mb-4">
                Syawal Property didirikan pada tahun 2009 dengan visi sederhana namun kuat: membangun tidak hanya gedung, tetapi juga kepercayaan. Kami percaya bahwa setiap struktur yang kami bangun adalah cerminan dari integritas dan keahlian tim kami.
              </p>
              <p className="font-body text-[#514536] leading-relaxed mb-8">
                Dengan lebih dari 350 proyek yang telah diselesaikan di berbagai sektor — dari hunian pribadi hingga kompleks industri skala besar — kami telah membuktikan bahwa kualitas dan ketepatan waktu bukan pilihan, melainkan standar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_STATS.map(({ value, label }) => (
                  <div key={label} className="border border-[#d5c4b1] rounded-[4px] p-4 text-center">
                    <span className="font-heading block text-2xl font-bold text-[#835500]">{value}</span>
                    <span className="font-body text-xs text-[#837564] mt-1 block">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mission + Vision card */}
            <div className="bg-[#1b263b] rounded-[4px] p-8 sm:p-10 flex flex-col gap-8">
              <div>
                <SectionLabel light>Misi</SectionLabel>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  Menghadirkan solusi konstruksi dan properti berkualitas tinggi yang melampaui ekspektasi klien melalui inovasi, keahlian, dan komitmen penuh terhadap standar keselamatan dan keberlanjutan.
                </p>
              </div>
              <hr className="border-white/10" />
              <div>
                <SectionLabel light>Visi</SectionLabel>
                <p className="font-body text-white/80 text-sm leading-relaxed">
                  Menjadi kontraktor dan developer properti terdepan di Indonesia yang dikenal atas integritas, presisi teknis, dan dampak positif terhadap komunitas dan lingkungan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#e5efff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10 sm:mb-14">
            <SectionLabel>Nilai Kami</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight">
              Prinsip yang Memandu Setiap Langkah
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {VALUES.map((v) => <ValueCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f8f9ff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionLabel>Perjalanan Kami</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-[#031d34] leading-tight tracking-tight mb-5">
                Dua Dekade Membangun Kepercayaan
              </h2>
              <p className="font-body text-[#514536] leading-relaxed">
                Sejak berdiri pada 2009, kami terus bertumbuh dan berkembang, dipandu oleh misi yang sama: menghadirkan konstruksi berkualitas tinggi yang menginspirasi kepercayaan.
              </p>
            </div>
            <div>
              {MILESTONES.map((m, i) => (
                <MilestoneItem key={m.year} {...m} isLast={i === MILESTONES.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#1b263b]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-10 sm:mb-14">
            <SectionLabel light>Tim Kami</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-[38px] font-bold text-white leading-tight tracking-tight">
              Para Ahli di Balik Setiap Proyek
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {TEAM.map((m) => <TeamMemberCard key={m.name} {...m} />)}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 bg-[#e5efff]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
          <SectionLabel>Sertifikasi &amp; Penghargaan</SectionLabel>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert}
                className="px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-[#d5c4b1] rounded-[4px] font-heading text-xs font-bold text-[#514536] tracking-wide"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Mari Berkolaborasi"
        body="Kami selalu terbuka untuk kemitraan dan proyek baru. Hubungi kami dan ceritakan proyek Anda."
        actions={[
          { label: "Hubungi Tim Kami", href: WHATSAPP_URL, variant: "primary", external: true },
          { label: "Lihat Portfolio",  href: "/portfolio",  variant: "ghost" },
        ]}
      />
    </>
  );
}
