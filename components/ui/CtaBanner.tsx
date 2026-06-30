import Link from "next/link";
import BlueprintPattern from "./BlueprintPattern";
import { WHATSAPP_URL } from "@/lib/constants";

interface CtaAction {
  label: string;
  href: string;
  variant: "primary" | "ghost";
  external?: boolean;
}

interface CtaBannerProps {
  heading: string;
  body: string;
  actions: CtaAction[];
}

export default function CtaBanner({ heading, body, actions }: CtaBannerProps) {
  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <BlueprintPattern />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 text-center z-10">
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          {heading}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {body}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map(({ label, href, variant, external }) => {
            const baseClass =
              "inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold font-heading tracking-wide transition-all duration-300";
            const variantClass =
              variant === "primary"
                ? "bg-amber-500 text-slate-900 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)]"
                : "border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/30";

            return external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClass} ${variantClass}`}
              >
                {label}
              </a>
            ) : (
              <Link key={label} href={href} className={`${baseClass} ${variantClass}`}>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
