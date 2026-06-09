"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Diensten", href: "#diensten" },
  { label: "Realisaties", href: "#realisaties" },
  { label: "Prijscalculator", href: "#calculator" },
  { label: "Over Yannick", href: "#yannick" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E0DDD6]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1B3A26 0%, #4A7C59 100%)" }}
              >
                <span className="text-white font-bold text-sm font-display">DY</span>
              </div>
              <div className="leading-tight">
                <p
                  className={`font-bold text-[15px] tracking-tight transition-colors ${
                    scrolled ? "text-[#1A1A18]" : "text-white"
                  }`}
                >
                  Dakwerken Yannick
                </p>
                <p
                  className={`text-[10px] tracking-widest uppercase font-medium transition-colors ${
                    scrolled ? "text-[#C49A28]" : "text-[#C49A28]"
                  }`}
                >
                  Premium Dakreiniging
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-[#C49A28] ${
                    scrolled ? "text-[#1A1A18]" : "text-white/80"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+32470000000"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                  scrolled ? "text-[#1B3A26]" : "text-white"
                }`}
              >
                <Phone className="w-4 h-4" />
                0470 00 00 00
              </a>
              <a
                href="#diagnose"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all btn-primary-glow"
                style={{
                  background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                  boxShadow: "0 4px 20px rgba(200,56,10,0.35)",
                }}
              >
                Gratis Diagnose
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1A1A18]" : "text-white"
              }`}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#0F1E15" }}
        >
          <div className="px-6 py-6 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/80 font-medium text-base border-b border-white/5 last:border-0 hover:text-[#C49A28] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+32470000000"
                className="flex items-center gap-2 text-white font-semibold"
              >
                <Phone className="w-4 h-4 text-[#C49A28]" />
                0470 00 00 00
              </a>
              <a
                href="#diagnose"
                onClick={() => setOpen(false)}
                className="block text-center py-3.5 rounded-xl font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)" }}
              >
                Gratis Dakinspectie
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
