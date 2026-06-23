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
    <section className="relative bg-[#1b263b] py-16 sm:py-20 overflow-hidden">
      <BlueprintPattern />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16">
        <Breadcrumb crumbs={crumbs} />
        <SectionLabel light>{label}</SectionLabel>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-tight tracking-tight mb-4 max-w-2xl">
          {heading}
        </h1>
        <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}
