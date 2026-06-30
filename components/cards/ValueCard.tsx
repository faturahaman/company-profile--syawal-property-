export default function ValueCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{icon}</svg>
      </div>
      <h3 className="font-heading font-bold text-lg text-slate-900">{title}</h3>
      <p className="font-body text-sm text-slate-600 leading-relaxed">{desc}</p>
      <div className="border-t-2 border-amber-500 w-10 mt-auto opacity-50 group-hover:w-full group-hover:opacity-100 transition-all duration-500" />
    </div>
  );
}
