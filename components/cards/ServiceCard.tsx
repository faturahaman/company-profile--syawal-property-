export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl bg-white p-6 sm:p-8 flex flex-col gap-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden border border-slate-200">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-500" />
      <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-amber-600 shrink-0 border border-slate-100 group-hover:scale-110 group-hover:bg-amber-50 transition-all duration-300 relative z-10">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {icon}
        </svg>
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 leading-snug relative z-10">
        {title}
      </h3>
      <p className="font-body text-sm text-slate-600 leading-relaxed relative z-10">
        {description}
      </p>
      <div className="mt-auto pt-4 relative z-10">
        <div className="w-8 h-1 bg-amber-500 rounded-full group-hover:w-16 transition-all duration-500 ease-out" />
      </div>
    </div>
  );
}
