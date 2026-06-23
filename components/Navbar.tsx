"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Syawal Property — Beranda">
      <span className="inline-flex w-8 h-8 rounded-[4px] bg-[#e09f3e] items-center justify-center shrink-0">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect x="2" y="10" width="5" height="6" fill="#1b263b" />
          <rect x="7" y="7" width="4" height="9" fill="#1b263b" />
          <rect x="11" y="4" width="5" height="12" fill="#1b263b" />
          <rect x="2" y="8" width="14" height="1.5" fill="#1b263b" />
        </svg>
      </span>
      <span className="font-heading font-bold text-white text-lg tracking-tight">
        Syawal<span className="text-[#e09f3e]">Property</span>
      </span>
    </Link>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex flex-col gap-[5px]" aria-hidden="true">
      <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
      <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
      <span className={`block w-6 h-0.5 bg-white transition-all duration-200 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1b263b] shadow-[0_2px_16px_rgba(27,38,59,0.2)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-150 ${
                pathname === href ? "text-[#e09f3e]" : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-[4px] bg-[#e09f3e] text-[#1b263b] text-sm font-bold font-heading tracking-wide hover:bg-[#feb956] transition-colors"
        >
          Hubungi Kami
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-1 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e09f3e]"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[#1b263b] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 sm:px-6 py-4" aria-label="Navigasi mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={`font-heading text-sm font-semibold tracking-wide py-2.5 px-3 rounded-[4px] transition-colors ${
                pathname === href
                  ? "text-[#e09f3e] bg-white/5"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center px-5 py-3 rounded-[4px] bg-[#e09f3e] text-[#1b263b] text-sm font-bold font-heading tracking-wide"
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
}
