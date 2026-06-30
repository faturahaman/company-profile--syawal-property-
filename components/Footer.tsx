import Link from "next/link";
import {
  NAV_LINKS,
  FOOTER_SERVICES,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  PHONE,
  EMAIL,
  ADDRESS,
} from "@/lib/constants";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-[4px] border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
    >
      {children}
    </a>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm">
      <span className="shrink-0 mt-0.5 text-amber-500">{icon}</span>
      <span>{children}</span>
    </li>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group" aria-label="Syawal Property">
              <span className="inline-flex w-10 h-10 rounded-xl bg-amber-500 items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="text-slate-900">
                  <rect x="2" y="10" width="5" height="6" fill="currentColor" />
                  <rect x="7" y="7" width="4" height="9" fill="currentColor" />
                  <rect x="11" y="4" width="5" height="12" fill="currentColor" />
                  <rect x="2" y="8" width="14" height="1.5" fill="currentColor" />
                </svg>
              </span>
              <span className="font-heading font-bold text-white text-xl tracking-tight">
                Syawal<span className="text-amber-500 group-hover:text-amber-400 transition-colors">Property</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-medium">
              Kontraktor dan developer properti terpercaya dengan pengalaman lebih dari 15 tahun membangun infrastruktur berkualitas tinggi di seluruh Indonesia.
            </p>
            <div className="flex gap-3">
              <SocialLink href={WHATSAPP_URL} label="WhatsApp Syawal Property">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </SocialLink>
              <SocialLink href={INSTAGRAM_URL} label="Instagram Syawal Property">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors group">
                    <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0 group-hover:scale-125 transition-transform" aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Layanan
            </h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_SERVICES.map((s) => (
                <li key={s} className="text-sm flex items-center gap-2 text-slate-300">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white font-semibold text-xs tracking-widest uppercase mb-5">
              Kontak
            </h3>
            <ul className="flex flex-col gap-4 text-slate-300">
              <ContactRow icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>}>
                {ADDRESS}
              </ContactRow>
              <ContactRow icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>}>
                <a href={`tel:${PHONE.replace(/\s|-/g, "")}`} className="hover:text-amber-500 transition-colors">{PHONE}</a>
              </ContactRow>
              <ContactRow icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>}>
                <a href={`mailto:${EMAIL}`} className="hover:text-amber-500 transition-colors">{EMAIL}</a>
              </ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Syawal Property. Hak cipta dilindungi undang-undang.</p>
          <p>Dibangun dengan keahlian &amp; kepercayaan</p>
        </div>
      </div>
    </footer>
  );
}
