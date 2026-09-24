"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Info, Phone } from "lucide-react";
import Link from "next/link";

/* ── Types ── */
type ServiceId = "dakontmossing" | "dakcoating" | "gevelreiniging";
type ContamLevel = "licht" | "matig" | "zwaar";

/* ── Pricing config ── */
const SERVICES: { id: ServiceId; label: string; emoji: string }[] = [
  { id: "dakontmossing",  label: "Dakontmossing",  emoji: "🪴" },
  { id: "dakcoating",     label: "Dakcoating",     emoji: "🛡️" },
  { id: "gevelreiniging", label: "Gevelreiniging", emoji: "🏠" },
];

const ROOF_TYPES = [
  { id: "pannen",  label: "Dakpannen",  base: { dakontmossing: 4.5, dakcoating: 8.0 } },
  { id: "leien",   label: "Leien dak",  base: { dakontmossing: 5.5, dakcoating: 9.5 } },
  { id: "plat",    label: "Plat dak",   base: { dakontmossing: 5.0, dakcoating: 7.5 } },
  { id: "metaal",  label: "Metalen dak", base: { dakontmossing: 4.5, dakcoating: 8.5 } },
];

const FACADE_TYPES = [
  { id: "baksteen",   label: "Baksteen",      base: 5.5 },
  { id: "beton",      label: "Beton/pleister", base: 4.5 },
  { id: "steen",      label: "Natuursteen",   base: 6.5 },
];

const CONTAM: { id: ContamLevel; label: string; color: string; mult: number }[] = [
  { id: "licht", label: "Licht",  color: "#2A7A4B", mult: 1.0 },
  { id: "matig", label: "Matig",  color: "#C8920A", mult: 1.35 },
  { id: "zwaar", label: "Zwaar",  color: "#C0392B", mult: 1.70 },
];

const COATING_TYPES = [
  { id: "transparant", label: "Transparant",       extra: 0 },
  { id: "kleur",       label: "Kleur naar keuze",  extra: 1.0 },
];

const EXTRAS_DAK = [
  { id: "goot",      label: "Gootreiniging",              flat: 90 },
  { id: "naspray",   label: "Preventieve naspray",        m2: 1.0 },
];

export default function MosxCalculator() {
  const [service, setService]   = useState<ServiceId>("dakontmossing");
  const [area,    setArea]      = useState(130);
  const [roofType, setRoofType] = useState("pannen");
  const [facadeType, setFacadeType] = useState("baksteen");
  const [contam,  setContam]   = useState<ContamLevel>("matig");
  const [coating, setCoating]  = useState("transparant");
  const [extras,  setExtras]   = useState<string[]>([]);

  const toggleExtra = (id: string) =>
    setExtras(p => p.includes(id) ? p.filter(e => e !== id) : [...p, id]);

  const estimate = useMemo(() => {
    let base = 0;
    if (service === "dakontmossing") {
      const rt = ROOF_TYPES.find(r => r.id === roofType)!;
      const cl = CONTAM.find(c => c.id === contam)!;
      base = rt.base.dakontmossing * cl.mult * area;
    } else if (service === "dakcoating") {
      const rt = ROOF_TYPES.find(r => r.id === roofType)!;
      const ct = COATING_TYPES.find(c => c.id === coating)!;
      base = (rt.base.dakcoating + ct.extra) * area;
    } else {
      const ft = FACADE_TYPES.find(f => f.id === facadeType)!;
      const cl = CONTAM.find(c => c.id === contam)!;
      base = ft.base * cl.mult * area;
    }

    let extraTotal = 0;
    if (service === "dakontmossing") {
      EXTRAS_DAK.forEach(ex => {
        if (!extras.includes(ex.id)) return;
        if (ex.flat) extraTotal += ex.flat;
        if (ex.m2)   extraTotal += ex.m2 * area;
      });
    }

    const total = base + extraTotal;
    return {
      low:    Math.round((total * 0.88) / 50) * 50,
      high:   Math.round((total * 1.15) / 50) * 50,
      base:   Math.round(base),
      extras: Math.round(extraTotal),
    };
  }, [service, area, roofType, facadeType, contam, coating, extras]);

  const isDak  = service !== "gevelreiniging";
  const isCoat = service === "dakcoating";

  return (
    <section
      className="relative section-pad overflow-hidden"
      id="calculator"
      style={{ background: "linear-gradient(170deg, #071910 0%, #0D2E1B 60%, #071910 100%)" }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(ellipse, #1A5C36 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="wrap relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gold-badge mx-auto mb-5 w-fit">
            💶 Dakcalculator
          </div>
          <h2
            className="font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.8rem)" }}
          >
            Wat kost uw dak- of{" "}
            <span className="italic" style={{ color: "#C8920A" }}>gevelreiniging</span>?
          </h2>
          <p className="text-white/55 text-base lg:text-lg leading-relaxed">
            Bereken een eerlijke richtprijs in 60 seconden. Altijd vrijblijvend, altijd eerlijk.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "#fff",
            boxShadow: "0 40px 100px rgba(0,0,0,0.3), 0 10px 40px rgba(0,0,0,0.15)",
          }}
        >
          <div className="grid lg:grid-cols-[1fr_360px]">

            {/* ── Left: Inputs ── */}
            <div className="p-7 lg:p-10 space-y-8">

              {/* Service selector */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C8920A" }}>Stap 1</p>
                <h3 className="font-bold text-lg text-[#111613] mb-4">Welke dienst?</h3>
                <div className="grid grid-cols-3 gap-3">
                  {SERVICES.map(sv => (
                    <button
                      key={sv.id}
                      onClick={() => setService(sv.id)}
                      className={`p-4 rounded-2xl border-2 text-center transition-all`}
                      style={{
                        borderColor:  service === sv.id ? "#1A5C36" : "#E3E0D8",
                        background:   service === sv.id ? "#EAF4EE" : "white",
                      }}
                    >
                      <p className="text-2xl mb-2">{sv.emoji}</p>
                      <p className={`font-semibold text-sm ${service === sv.id ? "text-[#1A5C36]" : "text-[#111613]"}`}>
                        {sv.label}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area slider */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C8920A" }}>Stap 2</p>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-[#111613]">
                    {isDak ? "Oppervlakte dak" : "Oppervlakte gevel"}
                  </h3>
                  <div
                    className="px-4 py-1.5 rounded-xl flex items-baseline gap-1"
                    style={{ background: "#EAF4EE" }}
                  >
                    <span className="font-bold text-2xl text-[#1A5C36]">{area}</span>
                    <span className="text-sm text-[#5C6058]">m²</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={isDak ? 30 : 10}
                  max={isDak ? 450 : 350}
                  step={5}
                  value={area}
                  onChange={e => setArea(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: "#1A5C36", background: `linear-gradient(to right, #1A5C36 0%, #1A5C36 ${((area - 30) / (isDak ? 420 : 340)) * 100}%, #E3E0D8 ${((area - 30) / (isDak ? 420 : 340)) * 100}%, #E3E0D8 100%)` }}
                />
                <div className="flex justify-between mt-2 text-xs" style={{ color: "#5C6058" }}>
                  <span>{isDak ? "30 m²" : "10 m²"}</span>
                  <span className="font-medium" style={{ color: "#C8920A" }}>
                    Gemiddeld: {isDak ? "130–180 m²" : "80–150 m²"}
                  </span>
                  <span>{isDak ? "450 m²" : "350 m²"}</span>
                </div>
              </div>

              {/* Roof / facade type */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C8920A" }}>Stap 3</p>
                <h3 className="font-bold text-lg text-[#111613] mb-4">
                  {isDak ? "Type dak" : "Type gevel"}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(isDak ? ROOF_TYPES : FACADE_TYPES).map((t: any) => {
                    const active = isDak ? roofType === t.id : facadeType === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => isDak ? setRoofType(t.id) : setFacadeType(t.id)}
                        className={`p-3.5 rounded-xl border-2 text-left transition-all`}
                        style={{
                          borderColor: active ? "#1A5C36" : "#E3E0D8",
                          background:  active ? "#EAF4EE" : "white",
                        }}
                      >
                        <p className={`font-semibold text-sm ${active ? "text-[#1A5C36]" : "text-[#111613]"}`}>
                          {t.label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Coating type (only for dakcoating) */}
              {isCoat && (
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C8920A" }}>Stap 4</p>
                  <h3 className="font-bold text-lg text-[#111613] mb-4">Type coating</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {COATING_TYPES.map(ct => (
                      <button
                        key={ct.id}
                        onClick={() => setCoating(ct.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all`}
                        style={{
                          borderColor: coating === ct.id ? "#1A5C36" : "#E3E0D8",
                          background:  coating === ct.id ? "#EAF4EE" : "white",
                        }}
                      >
                        <p className={`font-semibold text-sm ${coating === ct.id ? "text-[#1A5C36]" : "text-[#111613]"}`}>
                          {ct.label}
                        </p>
                        {ct.extra > 0 && <p className="text-xs text-[#5C6058] mt-0.5">+ € {ct.extra}/m²</p>}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Contamination (not for coating) */}
              {!isCoat && (
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C8920A" }}>
                    Stap {isCoat ? "4" : "4"}
                  </p>
                  <h3 className="font-bold text-lg text-[#111613] mb-4">Vervuilingsgraad</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {CONTAM.map(cl => (
                      <button
                        key={cl.id}
                        onClick={() => setContam(cl.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all`}
                        style={{
                          borderColor: contam === cl.id ? cl.color : "#E3E0D8",
                          background:  contam === cl.id ? `${cl.color}10` : "white",
                        }}
                      >
                        <div className="w-3 h-3 rounded-full mb-2.5" style={{ background: cl.color }} />
                        <p className="font-bold text-sm" style={{ color: contam === cl.id ? cl.color : "#111613" }}>
                          {cl.label}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Extras (dakontmossing only) */}
              {service === "dakontmossing" && (
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: "#C8920A" }}>Optioneel</p>
                  <h3 className="font-bold text-lg text-[#111613] mb-4">Extra diensten</h3>
                  <div className="space-y-2.5">
                    {EXTRAS_DAK.map(ex => (
                      <label
                        key={ex.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all`}
                        style={{
                          borderColor: extras.includes(ex.id) ? "#1A5C36" : "#E3E0D8",
                          background:  extras.includes(ex.id) ? "#EAF4EE" : "white",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={extras.includes(ex.id)}
                          onChange={() => toggleExtra(ex.id)}
                          className="w-4 h-4 rounded accent-[#1A5C36]"
                        />
                        <span className="flex-1 font-medium text-sm text-[#111613]">{ex.label}</span>
                        <span className="text-sm font-bold text-[#1A5C36]">
                          {ex.flat ? `+ € ${ex.flat}` : `+ € ${ex.m2}/m²`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right: Price output ── */}
            <div
              className="p-7 lg:p-9 flex flex-col justify-between"
              style={{ background: "linear-gradient(170deg, #071910 0%, #0D2E1B 100%)" }}
            >
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(200,146,10,0.7)" }}>
                  Uw richtprijs
                </p>

                {/* Price range */}
                <div className="mb-7">
                  <p className="text-white/40 text-sm mb-3">Indicatieve prijsrange</p>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className="font-display font-bold text-white"
                      style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", lineHeight: 1 }}
                    >
                      € {estimate.low.toLocaleString("nl-BE")}
                    </span>
                    <span className="text-white/30 font-bold text-xl">,</span>
                    <span
                      className="font-display font-bold"
                      style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", lineHeight: 1, color: "#C8920A" }}
                    >
                      € {estimate.high.toLocaleString("nl-BE")}
                    </span>
                  </div>
                  <p className="text-white/25 text-xs mt-2">Incl. BTW · exclusief verplaatsing</p>
                </div>

                {/* Breakdown */}
                <div
                  className="rounded-2xl p-5 space-y-2.5 mb-5"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Uitsplitsing</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/55">
                      {SERVICES.find(s => s.id === service)!.label} ({area} m²)
                    </span>
                    <span className="text-white font-semibold">€ {estimate.base}</span>
                  </div>
                  {estimate.extras > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/55">Extra diensten</span>
                      <span className="text-white font-semibold">€ {estimate.extras}</span>
                    </div>
                  )}
                  <div
                    className="flex justify-between text-sm pt-2.5 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-white font-bold">Totaal richtprijs</span>
                    <span className="font-bold" style={{ color: "#C8920A" }}>
                      ≈ € {(estimate.low + estimate.high) / 2}
                    </span>
                  </div>
                </div>

                {/* Info box */}
                <div
                  className="flex gap-2.5 p-3.5 rounded-xl mb-7"
                  style={{ background: "rgba(200,146,10,0.08)", border: "1px solid rgba(200,146,10,0.15)" }}
                >
                  <Info className="w-4 h-4 text-[#C8920A] shrink-0 mt-0.5" />
                  <p className="text-white/50 text-xs leading-relaxed">
                    Dit is een eerlijke richtprijs. De exacte prijs hangt af van de toestand van uw dak. Yannick geeft u na de gratis diagnose een vaste prijs, zonder verrassingen.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-sm transition-all"
                  style={{ background: "linear-gradient(135deg, #1A5C36 0%, #14492B 100%)", boxShadow: "0 4px 24px rgba(26,92,54,0.5)" }}
                >
                  Gratis diagnose & exacte prijs
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="tel:+32470000000"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white/60 text-sm transition-all hover:text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Phone className="w-4 h-4" />
                  Of bel direct: 0470 00 00 00
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Strip below */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {["✓  Vrijblijvende offerte", "✓  Vaste prijs, geen meerkosten", "✓  Drone-inspectie gratis"].map(t => (
            <span key={t} className="text-white/35 text-sm font-medium">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
