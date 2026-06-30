export default function MilestoneItem({ year, title, desc, isLast }: { year: string; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-3 h-3 bg-amber-500 mt-0.5 shrink-0" />
        {!isLast && <div className="w-0.5 bg-slate-200 flex-1 mt-1" aria-hidden="true" />}
      </div>
      <div className="pb-8">
        <span className="font-heading text-xs font-bold text-amber-500 tracking-wide">{year}</span>
        <p className="font-heading font-semibold text-sm text-slate-900 mt-0.5 mb-1">{title}</p>
        <p className="font-body text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
