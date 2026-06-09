"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Diensten",    href: "/diensten" },
  { label: "Realisaties", href: "/realisaties" },
  { label: "Werkwijze",   href: "/#hoe-het-werkt" },
  { label: "Over ons",    href: "/over-ons" },
  { label: "FAQ",         href: "/faq" },
  { label: "Contact",     href: "/contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [visible, setVisible] = useState(!isHomepage);

  useEffect(() => {
    if (!isHomepage) {
      setVisible(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  return (
    <>
      {/* Floating navbar */}
      <header
        className="fixed z-50"
        style={{
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 48px)",
          maxWidth: "1200px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid #E5E7EB",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "all" : "none",
          transition: "opacity 300ms ease",
        }}
      >
        <nav
          className="flex items-center justify-between"
          style={{ padding: "14px 24px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.avif"
              alt="MOS-X"
              height={40}
              width={120}
              style={{ height: "40px", width: "auto", objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[0.875rem] font-semibold transition-colors"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  color: "#374151",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#6DB33F")}
                onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+32468352869"
              className="flex items-center gap-2 text-[0.875rem] font-semibold transition-colors"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                color: "#6B7280",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#374151")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
            >
              <Phone className="w-3.5 h-3.5" />
              +32 468 35 28 69
            </a>
            <Link
              href="/calculator"
              className="nav-cta-btn"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                background: "rgba(109,179,63,0.12)",
                border: "1px solid rgba(109,179,63,0.35)",
                color: "#6DB33F",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: "8px",
                padding: "9px 18px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Bereken uw richtprijs
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#374151" }}
            aria-label="Menu openen"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] flex">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div
            className="relative ml-auto w-72 h-full flex flex-col p-6"
            style={{ background: "#FFFFFF" }}
          >
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/images/logo.avif"
                alt="MOS-X"
                height={34}
                width={100}
                style={{ height: "34px", width: "auto", objectFit: "contain" }}
              />
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg"
                style={{ color: "#6B7280" }}
                aria-label="Menu sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    color: "#374151",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#6DB33F")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#374151")}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div
              className="space-y-3 pt-6"
              style={{ borderTop: "1px solid #E5E7EB" }}
            >
              <a
                href="tel:+32468352869"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: "#6B7280" }}
              >
                <Phone className="w-4 h-4" /> +32 468 35 28 69
              </a>
              <Link
                href="/calculator"
                onClick={() => setOpen(false)}
                className="nav-cta-btn flex items-center justify-center w-full text-sm font-bold"
                style={{
                  background: "rgba(109,179,63,0.12)",
                  border: "1px solid rgba(109,179,63,0.35)",
                  color: "#6DB33F",
                  borderRadius: "8px",
                  padding: "11px 20px",
                  textDecoration: "none",
                }}
              >
                Bereken uw richtprijs
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
