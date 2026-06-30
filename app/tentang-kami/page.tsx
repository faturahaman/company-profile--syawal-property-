import type { Metadata } from "next";
import Image from "next/image";
import { ABOUT_STATS, VALUES, MILESTONES, TEAM, CERTIFICATIONS } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";
import { FadeUp, StaggerGrid, StaggerItem, FadeIn } from "@/components/ui/Motion";
import ValueCard from "@/components/cards/ValueCard";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import MilestoneItem from "@/components/cards/MilestoneItem";

export const metadata: Metadata = {
  title: "Tentang Kami — Syawal Property",
  description:
    "Pelajari lebih lanjut tentang sejarah, visi, misi, dan tim profesional di balik kesuksesan Syawal Property.",
};

export default function TentangKamiPage() {
  return (
    <>
      <PageHeader
        label="Tentang Perusahaan"
        heading="Membangun Kepercayaan Sejak 2009"
        description="Berawal dari kontraktor lokal, kini Syawal Property telah berkembang menjadi salah satu pengembang dan kontraktor paling dipercaya di Indonesia, dengan portofolio yang tersebar di 12 provinsi."
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Tentang Kami" }]}
      />

      {/* Intro & Stats */}
      <section className="py-20 sm:py-24 bg-slate-50/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeUp>
              <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                  alt="Tim Syawal Property di lokasi proyek"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-slate-900/10" />
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <SectionLabel>Visi & Misi Kami</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Membangun lebih dari sekadar struktur, kami membangun warisan.
              </h2>
              <div className="prose prose-slate prose-lg max-w-none mb-10">
                <p className="font-body text-slate-600 leading-relaxed">
                  Visi kami adalah menjadi perusahaan konstruksi dan pengembangan properti terkemuka di Asia Tenggara yang dikenal karena integritas, inovasi, dan komitmen terhadap kualitas berkelanjutan.
                </p>
                <p className="font-body text-slate-600 leading-relaxed">
                  Kami percaya bahwa setiap proyek adalah manifestasi dari kepercayaan klien kami. Oleh karena itu, kami menempatkan standar keselamatan dan kepuasan klien sebagai prioritas tertinggi dalam setiap batu bata yang kami susun.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 border-t border-slate-200">
                {ABOUT_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-3xl sm:text-4xl font-bold text-amber-600 mb-1">
                      {stat.value}
                    </p>
                    <p className="font-body text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Nilai-nilai Inti (Core Values) */}
      <section className="py-20 sm:py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="text-center mb-16">
            <SectionLabel>Nilai-Nilai Inti</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Pondasi Perusahaan Kami
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {VALUES.map((val) => (
              <StaggerItem key={val.title}>
                <ValueCard {...val} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Perjalanan (Milestones) */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <FadeUp className="text-center mb-16">
              <SectionLabel>Perjalanan Kami</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Jejak Langkah Syawal Property
              </h2>
            </FadeUp>
            <div className="relative">
              {/* Vertical line connector */}
              <div
                className="absolute top-0 bottom-0 left-[5.5px] w-0.5 bg-slate-200"
                aria-hidden="true"
              />
              <StaggerGrid className="flex flex-col">
                {MILESTONES.map((m, i) => (
                  <StaggerItem key={m.year}>
                    <MilestoneItem {...m} isLast={i === MILESTONES.length - 1} />
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Kepemimpinan */}
      <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="text-center mb-16">
            <SectionLabel>Tim Kepemimpinan</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
              Para Ahli di Balik Layar
            </h2>
            <p className="font-body text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tim kami terdiri dari insinyur, arsitek, dan profesional manajemen yang memiliki dedikasi tinggi terhadap keunggulan konstruksi.
            </p>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <TeamMemberCard {...member} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Sertifikasi */}
      <section className="py-16 sm:py-20 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <FadeIn>
            <p className="font-heading font-bold text-sm text-amber-500 uppercase tracking-widest mb-8">
              Sertifikasi & Afiliasi
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 font-body text-sm font-semibold text-white tracking-wide"
                >
                  {cert}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CtaBanner
        heading="Bergabung dengan Tim Kami"
        body="Kami selalu mencari talenta terbaik untuk mewujudkan masa depan konstruksi di Indonesia. Lihat peluang karir di Syawal Property."
        actions={[
          {
            label: "Lihat Lowongan (LinkedIn)",
            href: "#",
            variant: "primary",
            external: true,
          },
        ]}
      />
    </>
  );
}
