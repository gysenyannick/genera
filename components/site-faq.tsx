"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Prijs",
    q: "Wat kost een dakontmossing?",
    a: "De prijs hangt af van de oppervlakte, het type dak en de vervuiling. Voor een gemiddeld pannendak van 100-150 m² rekent u op €750 tot €1.300. Gebruik onze calculator voor een snelle richtprijs, of vraag de gratis diagnose aan voor een exacte offerte.",
  },
  {
    category: "Prijs",
    q: "Zijn er verborgen kosten na de offerte?",
    a: "Nooit. MOS-X werkt met vaste prijzen na de diagnose. U betaalt exact wat in de offerte staat, geen meerwerk, geen verrassingen. Als er iets onverwachts opdoemt, overlegt Yannick eerst met u.",
  },
  {
    category: "Vertrouwen",
    q: "Hoe weet ik of reinigen echt nodig is voor mijn dak?",
    a: "Dat ziet u zelf tijdens de gratis drone-inspectie. Yannick toont u live de staat van uw dak. Als er niets nodig is, zegt hij dat eerlijk, ook al betekent het dat hij geen opdracht krijgt.",
  },
  {
    category: "Vertrouwen",
    q: "Werkt MOS-X met onderaannemers?",
    a: "Neen. Yannick voert elk werk persoonlijk uit. U weet altijd wie er op uw dak staat. Geen vreemde gezichten, geen kwaliteitsverlies.",
  },
  {
    category: "Proces",
    q: "Hoe lang duurt een dakontmossing?",
    a: "Voor een gemiddeld dak (100-150 m²) rekent u op 1 volledige werkdag. Grotere daken of combinaties met coating kunnen 2 dagen duren. U hoeft zelf niet thuis te zijn tijdens de uitvoering, wel bij de start voor toegang.",
  },
  {
    category: "Proces",
    q: "Gebruikt MOS-X een hogedruk-reiniger?",
    a: "Neen. Hogedrukreiniging beschadigt de toplaag van dakpannen en maakt ze kwetsbaarder voor hergroei. MOS-X werkt uitsluitend met professionele bioreiniging, grondig, maar zonder schade.",
  },
  {
    category: "Timing",
    q: "Hoe snel kan ik een afspraak krijgen?",
    a: "Normaal plan Yannick uw gratis diagnose in binnen 3 tot 5 werkdagen. Voor urgente situaties (zichtbare lekkage, stormschade) neem direct telefonisch contact op.",
  },
  {
    category: "Timing",
    q: "Wanneer is het beste moment om mijn dak te laten reinigen?",
    a: "Lente en herfst zijn ideaal, voor of net na het groei- en vorstseizoen. Maar MOS-X werkt het hele jaar door. Wacht niet te lang: hoe langer mos inwerkt, hoe dieper de schade.",
  },
];

export default function SiteFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="site-pad" id="faq" style={{ background: "#F4F4F2" }}>
      <div className="site-wrap">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 items-start">

          {/* Left sticky */}
          <div className="lg:sticky lg:top-28">
            <p className="site-eyebrow mb-4">FAQ</p>
            <h2 className="site-h2 mb-5">
              Eerlijke antwoorden.
              <span style={{ color: "#6DB33F" }}> Geen omwegen.</span>
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8">
              Staat uw vraag er niet bij? Bel of mail Yannick, hij antwoordt persoonlijk.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+32470000000"
                className="flex items-center gap-3 p-4 rounded-xl bg-white transition-colors hover:border-[#6DB33F]"
                style={{ border: "1px solid #EBEBEA" }}
              >
                <span className="text-lg">📞</span>
                <div>
                  <p className="font-bold text-sm text-[#081012]"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    0470 00 00 00
                  </p>
                  <p className="text-xs text-[#6B7280]">Ma–Za · 8–18u</p>
                </div>
              </a>
              <Link href="/contact" className="site-btn-primary w-full">
                Gratis Diagnose →
              </Link>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: "1px solid #EBEBEA" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 px-2 py-0.5 rounded-full text-[9px] font-bold shrink-0"
                      style={{
                        background: "rgba(109,179,63,0.10)",
                        color: "#5A9A32",
                        fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      }}
                    >
                      {faq.category}
                    </span>
                    <p
                      className="font-semibold text-sm text-[#081012]"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    >
                      {faq.q}
                    </p>
                  </div>
                  <div className="shrink-0 mt-0.5" style={{ color: "#6DB33F" }}>
                    {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm text-[#6B7280] leading-relaxed pl-14">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
