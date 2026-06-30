import { WHATSAPP_URL } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Service } from "@/lib/types";

export default function ServiceDetailCard({ number, title, description, features, icon }: Service) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="bg-slate-900 p-8 sm:p-10 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-500 group-hover:scale-150" />
        <div className="flex items-start justify-between relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
          </div>
          <span className="font-heading text-6xl font-bold text-white/5 group-hover:text-amber-500/10 transition-colors duration-300 leading-none" aria-hidden="true">{number}</span>
        </div>
        <div className="relative z-10">
          <h3 className="font-heading text-2xl font-bold text-white leading-snug mb-3">{title}</h3>
          <p className="font-body text-base text-slate-300 leading-relaxed font-medium">{description}</p>
        </div>
        <div className="mt-auto pt-6 border-t-[3px] border-amber-500 w-12 opacity-80 group-hover:w-full group-hover:opacity-100 transition-all duration-500 relative z-10" />
      </div>

      <div className="p-8 sm:p-10 flex flex-col gap-4 relative">
        <SectionLabel>Cakupan Layanan</SectionLabel>
        <ul className="flex flex-col gap-3 flex-1 mt-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 font-body text-sm text-slate-600 leading-relaxed">
              <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="pt-8 mt-auto border-t border-slate-100">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-heading text-sm font-bold text-amber-700 hover:text-amber-500 tracking-wide transition-colors group/link">
            Konsultasi Layanan Ini 
            <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
