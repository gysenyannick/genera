"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const services = [
  { label: "Dakontmossing", href: "/diensten/dakontmossing", desc: "Mos & algen verwijderen" },
  { label: "Dakcoating", href: "/diensten/dakcoating", desc: "Bescherming tot 15 jaar" },
  { label: "Gevelreiniging", href: "/diensten/gevelreiniging", desc: "Gevel als nieuw" },
];

export default function MosxNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const textColor = scrolled ? "text-[#111613]" : "text-white";
  const linkHover = "hover:text-[#1A5C36] transition-colors";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-sm border-b border-[#E3E0D8]"
            : "bg-transparent"
        }`}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm tracking-tight"
                style={{ background: "linear-gradient(135deg, #1A5C36 0%, #2A7A4B 100%)" }}
              >
                M
              </div>
              <div>
                <p className={`font-black text-[16px] tracking-[-0.02em] leading-tight transition-colors ${scrolled ? "text-[#111613]" : "text-white"}`}>
                  MOS<span style={{ color: "#C8920A" }}>-X</span>
                </p>
                <p className="text-[9px] font-bold tracking-[0.18em] uppercase" style={{ color: "#C8920A" }}>
                  Dak & Gevel
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">

              {/* Diensten dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 text-sm font-semibold ${textColor} ${linkHover}`}>
                  Diensten
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl border border-[#E3E0D8] p-2 min-w-[220px]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col px-4 py-3 rounded-xl hover:bg-[#F7F6F2] transition-colors"
                      >
                        <span className="font-semibold text-sm text-[#111613]">{s.label}</span>
                        <span className="text-xs text-[#5C6058]">{s.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {[
                { label: "Realisaties", href: "/realisaties" },
                { label: "Over Yannick", href: "/over-ons" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-semibold ${textColor} ${linkHover}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+32470000000"
                className={`flex items-center gap-2 text-sm font-semibold ${textColor} hover:text-[#1A5C36] transition-colors`}
              >
                <Phone className="w-4 h-4" />
                0470 00 00 00
              </a>
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Gratis Diagnose
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${textColor}`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[600px]" : "max-h-0"
          }`}
          style={{ background: "#0D2E1B" }}
        >
          <div className="px-5 py-6 space-y-1">
            <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 px-3 mb-3">Diensten</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#C8920A" }}
                />
                <span className="text-white/80 font-medium text-sm">{s.label}</span>
              </Link>
            ))}
            <div className="h-px bg-white/8 my-3" />
            {[
              { label: "Realisaties", href: "/realisaties" },
              { label: "Over Yannick", href: "/over-ons" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-white/70 font-medium text-sm hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a href="tel:+32470000000" className="flex items-center gap-2 text-white font-semibold px-3">
                <Phone className="w-4 h-4 text-[#C8920A]" />0470 00 00 00
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3.5 rounded-xl font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #1A5C36 0%, #14492B 100%)" }}
              >
                Gratis Diagnose Aanvragen →
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
