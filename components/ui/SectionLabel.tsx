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
      className={`font-body text-[10px] font-bold tracking-[0.15em] uppercase mb-3 ${
        light ? "text-[#e09f3e]" : "text-[#835500]"
      }`}
    >
      ■ {children}
    </p>
  );
}
