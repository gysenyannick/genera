"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const projects = [
  {
    type: "Dakontmossing + Coating",
    location: "Gent",
    year: "2024",
    m2: "175 m²",
    desc: "Zwaar begroeide keramische pannen. Bioreiniging gevolgd door transparante dakcoating. 15 jaar garantie.",
    before: "img-before-roof",
    after: "img-after-roof",
    service: "Dakontmossing",
  },
  {
    type: "Dakcoating",
    location: "Aalst",
    year: "2024",
    m2: "145 m²",
    desc: "Matige mosgroei op pannendak. Reiniging + beschermende coating aangebracht. Waterafstoottest geslaagd.",
    before: "img-before-roof",
    after: "img-after-roof",
    service: "Dakcoating",
  },
  {
    type: "Gevelreiniging",
    location: "Dendermonde",
    year: "2023",
    m2: "120 m²",
    desc: "Zwarte aanslag op baksteengevel. Volledig gereinigd met zachte biologische methode. Geen schade.",
    before: "img-before-facade",
    after: "img-after-facade",
    service: "Gevelreiniging",
  },
  {
    type: "Dakontmossing",
    location: "Sint-Niklaas",
    year: "2024",
    m2: "195 m²",
    desc: "Matig vervuilde leien. Biologische behandeling + gootreiniging inbegrepen.",
    before: "img-before-roof",
    after: "img-after-roof",
    service: "Dakontmossing",
  },
  {
    type: "Dakontmossing + Coating",
    location: "Ronse",
    year: "2024",
    m2: "160 m²",
    desc: "Ouder pannendak zwaar vervuild. Behandeld en gecoat. Klant ontving fotobewijs + onderhoudsadvies.",
    before: "img-before-roof",
    after: "img-after-roof",
    service: "Dakcoating",
  },
  {
    type: "Plat dak reiniging",
    location: "Wetteren",
    year: "2023",
    m2: "85 m²",
    desc: "EPDM plat dak met mosgroei en verstopte afvoer. Drukloos gereinigd, afvoer vrijgemaakt.",
    before: "img-before-facade",
    after: "img-after-facade",
    service: "Plat dak",
  },
];

function SliderCard({ p }: { p: typeof projects[0] }) {
  const [split, setSplit] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (cx: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setSplit(Math.min(92, Math.max(8, ((cx - r.left) / r.width) * 100)));
  };

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Drag slider */}
      <div
        ref={ref}
        className="relative h-64 cursor-col-resize select-none overflow-hidden"
        onMouseDown={() => (dragging.current = true)}
        onMouseMove={e => { if (dragging.current) move(e.clientX); }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={() => (dragging.current = true)}
        onTouchMove={e => move(e.touches[0].clientX)}
        onTouchEnd={() => (dragging.current = false)}
      >
        {/* After */}
        <div className={`absolute inset-0 ${p.after}`}>
          <div className="absolute bottom-3 right-3">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#6DB33F] text-white"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              NA ✓
            </span>
          </div>
        </div>
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <div className={`absolute inset-0 ${p.before}`} />
          <div className="absolute bottom-3 left-3">
            <span
              className="px-3 py-1 rounded-full text-[10px] font-bold bg-black/60 text-white/80"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              VOOR
            </span>
          </div>
        </div>
        {/* Divider handle */}
        <div
          className="absolute top-0 bottom-0 w-px z-20 pointer-events-none"
          style={{ left: `${split}%`, background: "rgba(255,255,255,0.85)" }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5">
            <ChevronLeft className="w-3 h-3 text-[#081012]" />
            <ChevronRight className="w-3 h-3 text-[#081012]" />
          </div>
        </div>
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] text-white/50 pointer-events-none transition-opacity duration-500"
          style={{ fontFamily: "var(--font-montserrat)", opacity: split === 50 ? 1 : 0 }}
        >
          ← sleep →
        </div>
      </div>

      {/* Card info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <span
              className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold mb-2"
              style={{ background: "rgba(109,179,63,0.15)", color: "#6DB33F", fontFamily: "var(--font-montserrat)" }}
            >
              {p.type}
            </span>
            <p
              className="font-bold text-sm text-white"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              {p.location}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>{p.year}</p>
            <p className="font-bold text-sm" style={{ color: "#6DB33F", fontFamily: "var(--font-montserrat)" }}>
              {p.m2}
            </p>
          </div>
        </div>
        <p className="text-xs leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.40)" }}>
          {p.desc}
        </p>
      </div>
    </div>
  );
}

export default function RealisatiesPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#081012" }}>
        <div className="site-wrap relative z-10">
          <p className="site-eyebrow mb-4">Voor & Na</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-3xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Het resultaat spreekt
            <span style={{ color: "#6DB33F" }}> voor zichzelf.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Sleep de schuifregelaar om het verschil te zien. Echte opdrachten in Oost-Vlaanderen, geen digitale nabewerking.
          </p>
        </div>
      </section>

      {/* ── Gallery grid ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {projects.map((p, i) => (
              <SliderCard key={i} p={p} />
            ))}
          </div>

          {/* Stats strip */}
          <div
            className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl mb-14"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {[
              { value: "247+", label: "afgewerkte opdrachten" },
              { value: "100%", label: "drone-geïnspecteerd" },
              { value: "5★",   label: "gemiddelde beoordeling" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "#081012" }}
              >
                <p
                  className="font-black text-2xl mb-1 leading-none"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#6DB33F" }}
                >
                  {s.value}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl text-center sm:text-left"
            style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div>
              <p
                className="font-black text-white text-xl mb-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Wil u ook zulke resultaten?
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                Vraag een gratis drone-inspectie aan, volledig vrijblijvend.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="site-btn-primary">
                Gratis diagnose aanvragen <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+32470000000" className="site-btn-outline-white">
                <Phone className="w-4 h-4" /> 0470 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}



