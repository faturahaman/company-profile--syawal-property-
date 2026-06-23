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
    <section className="relative bg-[#1b263b] py-20 overflow-hidden">
      <BlueprintPattern />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4">
          {heading}
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {body}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map(({ label, href, variant, external }) => {
            const baseClass =
              "inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-[4px] text-sm font-bold font-heading tracking-wide transition-colors";
            const variantClass =
              variant === "primary"
                ? "bg-[#e09f3e] text-[#1b263b] hover:bg-[#feb956]"
                : "border border-white/30 text-white font-semibold hover:bg-white/10";

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
