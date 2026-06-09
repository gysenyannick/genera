"use client";

import { useState, useMemo } from "react";
import { Calculator as CalcIcon, ArrowRight, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const roofTypes = [
  { id: "tiles", label: "Dakpannen", icon: "🏠", basePrice: 5, desc: "Keramisch of beton" },
  { id: "flat", label: "Plat dak", icon: "⬜", basePrice: 6, desc: "EPDM, bitumen, PVC" },
  { id: "slate", label: "Leien dak", icon: "🪨", basePrice: 7, desc: "Natuur- of kunstleien" },
  { id: "metal", label: "Metalen dak", icon: "🔩", basePrice: 5.5, desc: "Zinken of stalen platen" },
];

const contamLevels = [
  {
    id: "light",
    label: "Licht",
    desc: "Beetje algen, nauwelijks mos",
    multiplier: 1.0,
    color: "#4A7C59",
  },
  {
    id: "medium",
    label: "Matig",
    desc: "Duidelijk zichtbaar mos en algen",
    multiplier: 1.3,
    color: "#C49A28",
  },
  {
    id: "heavy",
    label: "Zwaar",
    desc: "Dik mos, sterk verkleuring",
    multiplier: 1.65,
    color: "#C8380A",
  },
];

const extras = [
  { id: "moss", label: "Mosbehandeling (wortelkill)", pricePerM2: 1.5 },
  { id: "coating", label: "Beschermende coating (10j garantie)", pricePerM2: 4.5 },
  { id: "gutters", label: "Gootreiniging", flatPrice: 95 },
  { id: "inspection", label: "Schriftelijk inspectierapport", flatPrice: 0, note: "Gratis!" },
];

function PriceBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#6B6B5E] w-20 text-right shrink-0">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-[#EDE9E2] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function Calculator() {
  const [area, setArea] = useState<number[]>([120]);
  const [roofType, setRoofType] = useState("tiles");
  const [contam, setContam] = useState("medium");
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["inspection"]);

  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    const rt = roofTypes.find((r) => r.id === roofType)!;
    const cl = contamLevels.find((c) => c.id === contam)!;
    const m2 = area[0];

    let base = rt.basePrice * cl.multiplier * m2;
    let extraTotal = 0;

    selectedExtras.forEach((id) => {
      const ex = extras.find((e) => e.id === id)!;
      if (ex.pricePerM2) extraTotal += ex.pricePerM2 * m2;
      if (ex.flatPrice) extraTotal += ex.flatPrice;
    });

    const total = base + extraTotal;
    const low = Math.round(total * 0.9 / 50) * 50;
    const high = Math.round(total * 1.15 / 50) * 50;

    return { low, high, base: Math.round(base), extras: Math.round(extraTotal), total: Math.round(total) };
  }, [area, roofType, contam, selectedExtras]);

  const selectedContam = contamLevels.find((c) => c.id === contam)!;

  return (
    <section
      className="relative section-padding overflow-hidden"
      id="calculator"
      style={{ background: "linear-gradient(180deg, #F8F6F2 0%, #EDE9E2 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#1B3A26", filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-15 pointer-events-none"
        style={{ background: "#C49A28", filter: "blur(80px)" }}
      />

      <div className="container-tight relative z-10">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: "rgba(196,154,40,0.1)", border: "1px solid rgba(196,154,40,0.2)", color: "#B8860B" }}
          >
            <CalcIcon className="w-4 h-4" />
            Prijscalculator
          </div>
          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1B3A26" }}
          >
            Wat kost uw dakreiniging?
          </h2>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#6B6B5E" }}>
            Bereken in 30 seconden een realistische prijsschatting.
            Geen verplichtingen, wel duidelijkheid.
          </p>
        </div>

        {/* Calculator card */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 8px 30px rgba(0,0,0,0.06)",
          }}
        >
          <div className="grid lg:grid-cols-[1fr_380px]">

            {/* Left, Inputs */}
            <div className="p-8 lg:p-10 space-y-9">

              {/* Step 1, Roof area */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-1">Stap 1</p>
                    <h3 className="font-bold text-lg text-[#1A1A18]">Oppervlakte dakbeschot</h3>
                  </div>
                  <div
                    className="text-right px-5 py-2 rounded-xl"
                    style={{ background: "rgba(27,58,38,0.06)" }}
                  >
                    <p className="font-display font-bold text-3xl text-[#1B3A26]">{area[0]}</p>
                    <p className="text-xs text-[#6B6B5E]">m²</p>
                  </div>
                </div>
                <Slider
                  value={area}
                  onValueChange={(v) => setArea(Array.isArray(v) ? [...v] : [v as number])}
                  min={30}
                  max={500}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-[#6B6B5E]">
                  <span>30 m²</span>
                  <span className="text-[#C49A28] font-medium">Gemiddeld huis: 120–180 m²</span>
                  <span>500 m²</span>
                </div>
              </div>

              {/* Step 2, Roof type */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-1">Stap 2</p>
                <h3 className="font-bold text-lg text-[#1A1A18] mb-4">Type dak</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {roofTypes.map((rt) => (
                    <button
                      key={rt.id}
                      onClick={() => setRoofType(rt.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        roofType === rt.id
                          ? "border-[#1B3A26] shadow-md"
                          : "border-[#E0DDD6] hover:border-[#4A7C59]"
                      }`}
                      style={{
                        background: roofType === rt.id ? "rgba(27,58,38,0.05)" : "white",
                      }}
                    >
                      <p className="text-2xl mb-2">{rt.icon}</p>
                      <p className={`font-semibold text-sm ${roofType === rt.id ? "text-[#1B3A26]" : "text-[#1A1A18]"}`}>
                        {rt.label}
                      </p>
                      <p className="text-xs text-[#6B6B5E] mt-0.5">{rt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3, Contamination */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-1">Stap 3</p>
                <h3 className="font-bold text-lg text-[#1A1A18] mb-4">Vervuilingsgraad</h3>
                <div className="grid grid-cols-3 gap-3">
                  {contamLevels.map((cl) => (
                    <button
                      key={cl.id}
                      onClick={() => setContam(cl.id)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all ${
                        contam === cl.id ? "shadow-md" : "border-[#E0DDD6] hover:border-[#4A7C59]"
                      }`}
                      style={{
                        borderColor: contam === cl.id ? cl.color : undefined,
                        background: contam === cl.id ? `${cl.color}08` : "white",
                      }}
                    >
                      <div
                        className="w-3 h-3 rounded-full mb-3"
                        style={{ background: cl.color }}
                      />
                      <p className={`font-bold text-sm mb-1`} style={{ color: contam === cl.id ? cl.color : "#1A1A18" }}>
                        {cl.label}
                      </p>
                      <p className="text-xs text-[#6B6B5E]">{cl.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4, Extras */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-1">Stap 4 (optioneel)</p>
                <h3 className="font-bold text-lg text-[#1A1A18] mb-4">Extra diensten</h3>
                <div className="space-y-3">
                  {extras.map((ex) => (
                    <label
                      key={ex.id}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedExtras.includes(ex.id)
                          ? "border-[#1B3A26] bg-[rgba(27,58,38,0.04)]"
                          : "border-[#E0DDD6] hover:border-[#4A7C59]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(ex.id)}
                        onChange={() => toggleExtra(ex.id)}
                        className="w-5 h-5 rounded accent-[#1B3A26]"
                      />
                      <span className="flex-1 font-medium text-sm text-[#1A1A18]">
                        {ex.label}
                      </span>
                      <span className="text-sm font-bold text-[#1B3A26]">
                        {ex.note ?? (ex.pricePerM2
                          ? `+ € ${ex.pricePerM2}/m²`
                          : `+ € ${ex.flatPrice}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right, Price display */}
            <div
              className="p-8 lg:p-10 flex flex-col justify-between"
              style={{ background: "linear-gradient(170deg, #0F1E15 0%, #1B3A26 100%)" }}
            >
              {/* Price */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-6"
                  style={{ color: "rgba(196,154,40,0.8)" }}
                >
                  Uw schatting
                </p>

                <div className="mb-8">
                  <p className="text-white/50 text-sm mb-2">Indicatieve prijsrange</p>
                  <div className="flex items-end gap-2">
                    <p
                      className="font-display font-bold text-white"
                      style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1 }}
                    >
                      € {estimate.low.toLocaleString("nl-BE")}
                    </p>
                    <p className="text-white/40 font-bold text-2xl mb-0.5">,</p>
                    <p
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 2.8rem)",
                        lineHeight: 1,
                        color: "#C49A28",
                      }}
                    >
                      € {estimate.high.toLocaleString("nl-BE")}
                    </p>
                  </div>
                  <p className="text-white/30 text-xs mt-2">Incl. BTW, excl. verplaatsingskosten</p>
                </div>

                {/* Breakdown */}
                <div
                  className="rounded-2xl p-5 space-y-3 mb-6"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                    Uitsplitsing
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Reiniging ({area[0]} m²)</span>
                    <span className="text-white font-semibold">€ {estimate.base}</span>
                  </div>
                  {estimate.extras > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Extra diensten</span>
                      <span className="text-white font-semibold">€ {estimate.extras}</span>
                    </div>
                  )}
                  <div
                    className="flex justify-between text-sm pt-3 border-t"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <span className="text-white font-bold">Totaal</span>
                    <span className="font-bold text-[#C49A28]">≈ € {estimate.total}</span>
                  </div>
                </div>

                {/* Contamination visual */}
                <div className="space-y-2 mb-6">
                  <PriceBar label="Reiniging" value={estimate.base} max={estimate.high * 1.2} color="#4A7C59" />
                  <PriceBar label="Extra's" value={estimate.extras} max={estimate.high * 1.2} color="#C49A28" />
                </div>

                <div
                  className="flex items-start gap-2 p-3 rounded-xl text-xs"
                  style={{ background: "rgba(196,154,40,0.1)", border: "1px solid rgba(196,154,40,0.15)" }}
                >
                  <Info className="w-4 h-4 text-[#C49A28] shrink-0 mt-0.5" />
                  <p className="text-white/60 leading-relaxed">
                    Dit is een schatting. De exacte prijs hangt af van uw specifieke situatie.
                    Een bezoek aan huis is altijd gratis en vrijblijvend.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 space-y-3">
                <a
                  href="#diagnose"
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white text-base transition-all"
                  style={{
                    background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                    boxShadow: "0 4px 24px rgba(200,56,10,0.5)",
                  }}
                >
                  Gratis offerte aan huis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+32470000000"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white/80 text-sm transition-all hover:text-white"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Of bel: 0470 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
          {[
            "✓  Vrijblijvende offerte",
            "✓  Vaste prijs, geen bijkomende kosten",
            "✓  Schriftelijke garantie",
          ].map((t) => (
            <span key={t} className="text-sm font-medium text-[#6B6B5E]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
