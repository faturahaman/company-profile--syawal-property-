/** Small all-caps label above section headings (e.g. "■ Layanan Kami") */
export default function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  /** Use white-ish colour on dark backgrounds */
  light?: boolean;
}) {
  return (
    <p
      className={`font-body text-[10px] font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2 ${
        light ? "text-amber-400" : "text-amber-600"
      }`}
    >
      <span className="inline-block w-2 h-2 bg-current opacity-70" aria-hidden="true" />
      {children}
    </p>
  );
}
