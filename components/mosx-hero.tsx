import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function MosxHero() {
  return (
    <section className="relative min-h-[100svh] flex items-end lg:items-center overflow-hidden pb-16 lg:pb-0">

      {/* ── Background ── */}
      <div className="absolute inset-0 section-dark" />

      {/* Atmospheric radials */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(26,92,54,0.35) 0%, transparent 65%)" }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 50% at 0% 100%, rgba(26,92,54,0.25) 0%, transparent 60%)" }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Right visual, Roof image placeholder ── */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block overflow-hidden">
        {/* Roof background (replace with <Image> when real photos available) */}
        <div className="absolute inset-0 img-placeholder-roof-clean opacity-60"
          style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        {/* Moss "before" strip - left half */}
        <div className="absolute inset-0 img-placeholder-roof"
          style={{ clipPath: "polygon(8% 0%, 52% 0%, 44% 100%, 0% 100%)", opacity: 0.6 }}
        >
          {/* Moss texture */}
          <div className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 120px 60px at 30% 30%, rgba(74,124,89,0.9) 0%, transparent 70%), radial-gradient(ellipse 80px 40px at 60% 65%, rgba(50,90,60,0.9) 0%, transparent 70%)",
            }}
          />
        </div>
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #071910 0%, rgba(7,25,16,0.2) 20%, transparent 50%), linear-gradient(to top, #071910 0%, transparent 30%)" }}
        />
        {/* Drone badge */}
        <div className="absolute top-12 right-10 z-10">
          <div className="gold-badge text-xs px-4 py-2 rounded-2xl" style={{ fontSize: "11px", letterSpacing: "0.08em" }}>
            🚁 Drone-inspectie inbegrepen
          </div>
        </div>
        {/* Before/after label */}
        <div className="absolute bottom-16 right-8 z-10 text-right">
          <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-1">Resultaat</p>
          <p className="text-white/70 text-sm font-semibold">200+ daken gereinigd</p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="wrap relative z-10 w-full pt-28 lg:pt-0">
        <div className="max-w-xl xl:max-w-2xl space-y-7 lg:space-y-8">

          {/* Stars */}
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C8920A] text-[#C8920A]" />
              ))}
            </div>
            <span className="text-white/55 text-sm">12 uitstekende reviews · 200+ daken</span>
          </div>

          {/* Eyebrow */}
          <p className="eyebrow">MOS-X · Dakontmossing & Gevelreiniging · Oost-Vlaanderen</p>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-[1.06]"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}
          >
            Weet exact in{" "}
            <span className="italic" style={{ color: "#C8920A" }}>welke staat</span>
            <br />
            uw dak is.
          </h1>

          {/* Sub */}
          <p className="text-white/65 text-lg leading-relaxed" style={{ maxWidth: "480px" }}>
            Gratis dakdiagnose inclusief drone-inspectie. Yannick bezoekt u thuis, inspecteert uw dak volledig en vertelt u eerlijk wat nodig is, zonder verkooppraatjes.
          </p>

          {/* 3 trust bullets */}
          <ul className="space-y-2.5">
            {[
              "Drone-inspectie inbegrepen, u ziet wat Yannick ziet",
              "Eerlijk advies: alleen wat uw dak écht nodig heeft",
              "Geen offerte-druk. U beslist op eigen tempo.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle className="w-4 h-4 text-[#3D9962] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-primary-white group text-base"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              Gratis Diagnose Aanvragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="#calculator"
              className="btn-outline-white text-base"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              Bereken uw prijs
            </a>
          </div>

          {/* Guarantee strip */}
          <p className="text-white/35 text-xs font-medium">
            Gratis · Vrijblijvend · Geen verplichting · Persoonlijk bezoek van Yannick
          </p>
        </div>
      </div>

      {/* Bottom gradient to next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #ffffff 0%, transparent 100%)" }}
      />
    </section>
  );
}
