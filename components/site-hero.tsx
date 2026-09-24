import { Star, Shield, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function SiteHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", background: "#060B0E" }}
    >
      {/* ── Video — full width background ── */}
      <video
        src="/videos/yannick-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(6,11,14,0.92) 0%, rgba(6,11,14,0.75) 40%, rgba(6,11,14,0.35) 70%, rgba(6,11,14,0.15) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Content — left aligned ── */}
      <div
        className="site-wrap relative flex items-center"
        style={{ minHeight: "100vh", zIndex: 2 }}
      >
        <div className="w-full py-32" style={{ maxWidth: "680px" }}>

          {/* Supertitle */}
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 500,
              fontSize: "0.8125rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#6DB33F",
            }}
          >
            Dé specialist in dakontmossen en coaten
          </p>

          {/* H1 */}
          <h1
            className="text-white leading-[1.06] mb-6"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Uw dak verdient een{" "}
            <span style={{ color: "#6DB33F" }}>eerlijke diagnose.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.58)" }}
          >
            MOS-X inspecteert uw dak gratis met een professionele drone. U kijkt live mee op de tablet.
            Daarna krijgt u een eerlijk advies, een vaste prijs en geen verkooppraatjes.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/calculator"
              className="hero-cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(109,179,63,0.12)",
                border: "1px solid rgba(109,179,63,0.35)",
                color: "#6DB33F",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                textDecoration: "none",
                transition: "background 250ms ease, border-color 250ms ease",
              }}
            >
              Bereken uw richtprijs
            </Link>
            <a href="tel:+32468352869" className="site-btn-outline-white">
              <Phone className="w-4 h-4" />
              +32 468 35 28 69
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F9A825" }} />
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
                5.0 · 12 beoordelingen
              </span>
            </div>
            <div className="w-px h-5 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
              <CheckCircle className="w-4 h-4 text-[#6DB33F]" />
              200+ daken gereinigd
            </div>
            <div className="w-px h-5 bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "rgba(255,255,255,0.65)" }}>
              <Shield className="w-4 h-4 text-[#6DB33F]" />
              Volledig verzekerd
            </div>
          </div>

          {/* VTM badge */}
          <div
            className="inline-flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "10px",
              padding: "10px 16px",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div
              className="flex items-center justify-center font-black text-white shrink-0"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "0.9375rem",
                background: "#E8000D",
                borderRadius: "5px",
                padding: "3px 7px",
                letterSpacing: "0.02em",
              }}
            >
              vtm
            </div>
            <div className="text-left">
              <p className="text-[10px] text-white/50 leading-none mb-0.5">Bekend van</p>
              <p
                className="text-[0.8125rem] font-semibold leading-none"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  color: "#ffffff",
                }}
              >
                VTM Lifestyle &amp; Wonen
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
