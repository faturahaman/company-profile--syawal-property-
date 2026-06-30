"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0 group" aria-label="Syawal Property — Beranda">
      <span className="inline-flex w-10 h-10 rounded-xl bg-amber-500 items-center justify-center shrink-0 group-hover:bg-amber-400 transition-colors shadow-sm">
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
    <>
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-md shadow-slate-900/10 border-b border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-heading text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${
                pathname === href ? "text-amber-500 drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]" : "text-white/80 hover:text-white"
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
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 text-slate-900 text-sm font-bold font-heading tracking-wide hover:bg-amber-400 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)]"
        >
          Hubungi Kami
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-3 -mr-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 hover:bg-white/5 transition-colors"
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
        className={`md:hidden absolute top-20 left-0 w-full bg-slate-900 shadow-2xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-4 sm:px-6 py-5" aria-label="Navigasi mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={`font-heading text-sm font-semibold tracking-wide py-3 px-4 rounded-xl transition-all duration-200 ${
                pathname === href
                  ? "text-amber-500 bg-amber-500/10"
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
            className="mt-4 flex items-center justify-center px-6 py-3.5 rounded-full bg-amber-500 text-slate-900 text-sm font-bold font-heading tracking-wide active:bg-amber-400"
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
