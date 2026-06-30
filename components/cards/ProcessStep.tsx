export default function ProcessStep({ step, title, desc, isLast }: { step: string; title: string; desc: string; isLast?: boolean }) {
  return (
    <div className="flex gap-5 sm:gap-6 group">
      <div className="flex flex-col items-center shrink-0">
        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-200 group-hover:bg-amber-500 transition-colors duration-300 flex items-center justify-center text-slate-900 font-heading font-bold text-base sm:text-lg">
          {step}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-slate-200 my-2 group-hover:bg-amber-500/30 transition-colors duration-300" aria-hidden="true" />}
      </div>
      <div className="pb-10 sm:pb-12">
        <h4 className="font-heading font-bold text-base sm:text-xl text-slate-900 mb-2">{title}</h4>
        <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
