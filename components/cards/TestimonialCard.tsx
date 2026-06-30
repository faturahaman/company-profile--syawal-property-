export default function TestimonialCard({ quote, name, role }: { quote: string, name: string, role: string }) {
  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 relative overflow-hidden h-full">
      <div className="absolute top-4 right-4 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-300">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
      </div>
      <div className="flex gap-1 relative z-10" aria-label="Rating 5 bintang" role="img">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400 drop-shadow-sm" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <blockquote className="font-body text-base text-slate-700 leading-relaxed italic relative z-10 font-medium">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4 mt-auto pt-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-500 flex items-center justify-center font-heading font-bold text-lg shrink-0 shadow-md group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300" aria-hidden="true">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-heading font-bold text-sm text-slate-900">{name}</p>
          <p className="font-body text-xs text-slate-500 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}
