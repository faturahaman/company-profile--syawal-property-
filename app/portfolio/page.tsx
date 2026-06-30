import type { Metadata } from "next";
import { WHATSAPP_URL } from "@/lib/constants";
import { PORTFOLIO_STATS, CATEGORIES, PROJECTS } from "@/lib/data";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import dynamic from "next/dynamic";

const PortfolioFilter = dynamic(() => import("@/components/PortfolioFilter"));

export const metadata: Metadata = {
  title: "Portfolio — Syawal Property",
  description:
    "Lihat proyek-proyek konstruksi dan pengembangan properti yang telah diselesaikan oleh Syawal Property.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Portfolio Proyek"
        heading="Rekam Jejak Proyek Kami"
        description="Lebih dari 350 proyek telah berhasil kami selesaikan di berbagai sektor — dari hunian hingga fasilitas industri berskala besar."
        crumbs={[{ href: "/", label: "Beranda" }, { label: "Portfolio" }]}
      >
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PORTFOLIO_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
            >
              <span className="font-heading block text-2xl font-bold text-amber-500">
                {value}
              </span>
              <span className="font-body text-xs text-white/60 mt-1 block">
                {label}
              </span>
            </div>
          ))}
        </div>
      </PageHeader>

      <section className="py-14 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
          <PortfolioFilter categories={CATEGORIES} projects={PROJECTS as any} />
        </div>
      </section>

      <CtaBanner
        heading="Wujudkan Proyek Anda Bersama Kami"
        body="Lihat bagaimana keahlian dan pengalaman kami dapat diterapkan untuk proyek Anda. Mulai dengan konsultasi gratis hari ini."
        actions={[
          {
            label: "Konsultasi Gratis",
            href: WHATSAPP_URL,
            variant: "primary",
            external: true,
          },
          { label: "Lihat Layanan Kami", href: "/layanan", variant: "ghost" },
        ]}
      />
    </>
  );
}
