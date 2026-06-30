import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";
import { HOME_STATS, SERVICES, PROCESS_STEPS, FEATURED_PROJECTS, TESTIMONIALS } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";
import { FadeUp, FadeIn, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import StatCard from "@/components/cards/StatCard";
import ServiceCard from "@/components/cards/ServiceCard";
import ProjectCard from "@/components/cards/ProjectCard";
import dynamic from "next/dynamic";

const TestimonialCarousel = dynamic(() => import("@/components/TestimonialCarousel"));

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden min-h-[600px] sm:min-h-[720px] flex items-center">
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
          style={{
            background:
              "linear-gradient(to right, #0f172a 40%, rgba(15,23,42,0.88) 60%, rgba(15,23,42,0.45) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        
        <div
          className="absolute bottom-0 inset-x-0 overflow-hidden leading-[0]"
          aria-hidden="true"
        >
          <svg
            className="relative block w-[200%] h-16 sm:h-24 animate-[wave_18s_linear_infinite]"
            viewBox="0 0 2880 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 C1680,110 1920,10 2160,60 C2400,110 2640,10 2880,60 L2880,120 L0,120 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>

        <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-20 sm:py-28 lg:py-36 z-10">
          <div className="max-w-xl lg:max-w-2xl">
            <FadeIn delay={0.1}>
              <SectionLabel light>
                Kontraktor &amp; Developer Properti
              </SectionLabel>
            </FadeIn>
            <FadeUp delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-bold text-white leading-[1.15] tracking-tight mb-6">
                Membangun Masa Depan dengan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Presisi &amp; Integritas</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.35}>
              <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-lg font-medium">
                Syawal Property menghadirkan solusi konstruksi dan pengembangan
                properti berkelas dengan standar internasional. Dari perencanaan
                hingga serah terima kunci.
              </p>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 text-slate-900 text-sm font-bold font-heading tracking-wide hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)] transition-all duration-300"
                >
                  Konsultasi Gratis
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-semibold font-heading tracking-wide hover:bg-white/15 hover:border-white/30 transition-all duration-300"
                >
                  Lihat Portfolio
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Stats */}
          <FadeIn delay={0.7}>
            <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative">
              {HOME_STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <FadeUp className="mb-12 sm:mb-16">
            <SectionLabel>Layanan Kami</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight max-w-lg">
                Solusi Properti Komprehensif
              </h2>
              <Link
                href="/layanan"
                className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-amber-600 hover:text-amber-700 tracking-wide transition-colors shrink-0"
              >
                Semua Layanan
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.slice(0, 6).map((s) => (
              <StaggerItem key={s.title}>
                <ServiceCard {...s} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <FadeUp className="mb-12 sm:mb-16 text-center">
            <SectionLabel light>Proses Kerja</SectionLabel>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
              Dari Konsep Menjadi Kenyataan
            </h2>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors duration-300 h-full">
                  <span
                    className="font-heading block text-6xl font-bold text-amber-500/20 leading-none mb-6"
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-slate-400 leading-relaxed font-medium">
                    {desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="mb-12 sm:mb-16">
            <SectionLabel>Portfolio Pilihan</SectionLabel>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight max-w-lg">
                Karya Terbaik Kami
              </h2>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-amber-600 hover:text-amber-700 tracking-wide transition-colors shrink-0"
              >
                Semua Proyek
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </FadeUp>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_PROJECTS.map((p) => (
              <StaggerItem key={p.title}>
                <ProjectCard project={p as any} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <FadeUp className="mb-8 sm:mb-10 text-center">
            <SectionLabel>Testimoni Klien</SectionLabel>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Kepercayaan Adalah Fondasi Kami
            </h2>
          </FadeUp>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        heading="Siap Memulai Proyek Anda?"
        body="Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik. Tim ahli kami siap membantu mewujudkan proyek impian Anda."
        actions={[
          {
            label: "Hubungi via WhatsApp",
            href: WHATSAPP_URL,
            variant: "primary",
            external: true,
          },
          {
            label: "Pelajari Tentang Kami",
            href: "/tentang-kami",
            variant: "ghost",
          },
        ]}
      />
    </>
  );
}
