"use client";

import { ArrowRight, Shield, Star, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">

      {/* Background, dark forest with roof imagery feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, #0A1810 0%, #111E16 40%, #0F1B14 70%, #0D1912 100%)",
        }}
      />

      {/* Atmospheric light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(196,154,40,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 100%, rgba(27,58,38,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Roof tile texture pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,0.5) 0px,
            rgba(255,255,255,0.5) 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      {/* "Before" roof image simulation, right side dark mossy roof */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0F1E15 0%, transparent 30%), linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)",
            zIndex: 2,
          }}
        />
        {/* Simulated roof tiles, before (mossy/dirty) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 38px,
                rgba(30,60,35,0.15) 38px,
                rgba(30,60,35,0.15) 42px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 58px,
                rgba(20,40,25,0.1) 58px,
                rgba(20,40,25,0.1) 62px
              ),
              linear-gradient(160deg, #2D4A35 0%, #1E3527 25%, #253D2E 50%, #1A2E20 75%, #243829 100%)
            `,
          }}
        />
        {/* Moss patches */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 120px 60px at 30% 25%, rgba(74,124,89,0.8) 0%, transparent 70%),
              radial-gradient(ellipse 80px 40px at 70% 55%, rgba(50,90,60,0.9) 0%, transparent 70%),
              radial-gradient(ellipse 100px 50px at 50% 75%, rgba(60,100,70,0.7) 0%, transparent 70%),
              radial-gradient(ellipse 60px 30px at 85% 30%, rgba(70,110,80,0.8) 0%, transparent 70%)
            `,
          }}
        />
        {/* Label */}
        <div className="absolute bottom-8 right-8 z-10">
          <span
            className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest"
            style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}
          >
            Vóór
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
        <div className="max-w-2xl space-y-8">

          {/* Trust badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C49A28] text-[#C49A28]" />
              ))}
            </div>
            <span className="text-white/60 text-sm font-medium">
              4.9/5, 180+ tevreden klanten
            </span>
          </div>

          {/* Eyebrow */}
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase"
            style={{ color: "#C49A28" }}
          >
            Oost- & West-Vlaanderen · Specialist Dakreiniging
          </p>

          {/* Headline */}
          <h1
            className="font-display font-bold text-white leading-[1.08]"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
          >
            Uw dak verdient{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C49A28 0%, #E8C048 60%, #C49A28 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              vakmanschap,
            </span>
            <br />
            geen concessies.
          </h1>

          {/* Sub */}
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: "520px" }}
          >
            Mos, algen en vuil tasten uw dakpannen aan en verkorten de levensduur met jaren.
            Yannick reinigt, behandelt en beschermt uw dak, met een schriftelijke garantie.
          </p>

          {/* USP pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "✓  Gratis diagnose aan huis",
              "✓  15 jaar ervaring",
              "✓  Schriftelijke garantie",
            ].map((pill) => (
              <span
                key={pill}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(196,154,40,0.1)",
                  border: "1px solid rgba(196,154,40,0.25)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#diagnose"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all btn-primary-glow"
              style={{
                background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                boxShadow: "0 6px 30px rgba(200,56,10,0.45)",
              }}
            >
              Gratis Dakinspectie Aanvragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white text-base transition-all"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              Bereken uw prijs
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 pt-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(196,154,40,0.15)", border: "1px solid rgba(196,154,40,0.2)" }}
            >
              <Phone className="w-4 h-4 text-[#C49A28]" />
            </div>
            <div>
              <p className="text-white font-semibold text-base">0470 00 00 00</p>
              <p className="text-white/40 text-xs">Ma–Za · 8u–18u</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #F8F6F2 0%, transparent 100%)" }}
      />
    </section>
  );
}
