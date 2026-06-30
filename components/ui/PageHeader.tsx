import BlueprintPattern from "./BlueprintPattern";
import Breadcrumb from "./Breadcrumb";
import SectionLabel from "./SectionLabel";

interface Crumb { href?: string; label: string }

interface PageHeaderProps {
  label: string;
  heading: string;
  description: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}

export default function PageHeader({
  label,
  heading,
  description,
  crumbs,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative bg-slate-900 py-16 sm:py-24 overflow-hidden border-b border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <BlueprintPattern />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 z-10">
        <Breadcrumb crumbs={crumbs} />
        <SectionLabel light>{label}</SectionLabel>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 max-w-3xl">
          {heading}
        </h1>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
