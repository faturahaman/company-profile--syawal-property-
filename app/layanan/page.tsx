import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";
import { SERVICES, PROCESS_STEPS } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import SectionLabel from "@/components/ui/SectionLabel";
import CtaBanner from "@/components/ui/CtaBanner";
import { FadeUp, StaggerGrid, StaggerItem } from "@/components/ui/Motion";
import ServiceDetailCard from "@/components/cards/ServiceDetailCard";
import ProcessStep from "@/components/cards/ProcessStep";

export const metadata: Metadata = {
  title: "Layanan Kami — Syawal Property",
  description:
    "Solusi konstruksi dan pengembangan properti komprehensif dari Syawal Property, meliputi konstruksi bangunan, renovasi, hingga manajemen proyek.",
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        label="Layanan & Solusi"
        heading="Layanan Konstruksi Terpadu"
        description="Kami menyediakan solusi end-to-end untuk setiap tahap pengembangan properti Anda. Didukung oleh tim ahli, teknologi terkini, dan dedikasi terhadap keunggulan."
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Layanan" }]}
      />

      {/* Services List */}
      <section className="py-16 sm:py-24 bg-slate-50 relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <StaggerGrid className="flex flex-col gap-10 sm:gap-16">
            {SERVICES.map((srv) => (
              <StaggerItem key={srv.number}>
                <ServiceDetailCard {...srv} />
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Detail Process */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeUp>
              <SectionLabel>Alur Kerja Terstruktur</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Bagaimana Kami Mewujudkan Proyek Anda
              </h2>
              <p className="font-body text-slate-600 leading-relaxed mb-8">
                Transparansi dan efisiensi adalah inti dari metodologi kerja kami. Kami mengelola setiap fase proyek dengan cermat untuk memastikan hasil yang tepat waktu, sesuai anggaran, dan melampaui ekspektasi.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white text-sm font-bold font-heading tracking-wide hover:bg-slate-800 transition-colors shadow-lg"
              >
                Mulai Proyek Anda
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </FadeUp>
            <div className="lg:pl-10">
              <StaggerGrid className="flex flex-col">
                {PROCESS_STEPS.map((p, i) => (
                  <StaggerItem key={p.step}>
                    <ProcessStep {...p} isLast={i === PROCESS_STEPS.length - 1} />
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality Pledge */}
      <section className="py-16 sm:py-20 bg-slate-900 text-center relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <FadeUp>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              Komitmen Terhadap K3 (Keselamatan & Kesehatan Kerja)
            </h2>
            <p className="font-body text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Setiap layanan kami dilaksanakan di bawah protokol Zero Accident. Kami secara proaktif mengidentifikasi dan memitigasi risiko untuk memastikan lingkungan kerja yang aman bagi tim, klien, dan masyarakat sekitar.
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaBanner
        heading="Konsultasikan Kebutuhan Anda"
        body="Tim ahli kami siap memberikan analisis awal dan estimasi biaya untuk proyek konstruksi atau renovasi Anda."
        actions={[
          {
            label: "Hubungi via WhatsApp",
            href: WHATSAPP_URL,
            variant: "primary",
            external: true,
          },
        ]}
      />
    </>
  );
}
