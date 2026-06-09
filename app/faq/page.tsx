"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Plus, Minus } from "lucide-react";
import PageLayout from "@/components/page-layout";

const faqs = [
  {
    category: "Proces",
    q: "Beschadigt het ontmossen mijn dakpannen?",
    a: "Nee. MOS-X gebruikt uitsluitend zachte bioreiniging, geen hogedrukreiniging. De behandeling is schonend voor alle types dakpannen, leien en keramische tegels. Er is geen risico op panschade, losgeraakte voegen of beschadigde coating.",
  },
  {
    category: "Garantie",
    q: "Hoe lang blijft de dakcoating beschermen?",
    a: "Een kwalitatieve dakcoating van MOS-X beschermt uw dak tot 15 jaar tegen vocht, vorst en hergroei van mos en algen. U ontvangt een schriftelijke garantie. Na 10 jaar neemt Yannick proactief contact op voor een controle.",
  },
  {
    category: "Praktisch",
    q: "Moet ik thuis zijn tijdens de werken?",
    a: "Voor de drone-inspectie is het aangeraden dat u thuis bent zodat u live kan meekijken op de tablet. Voor de effectieve werken (reiniging/coating) hoeft u niet aanwezig te zijn, maar het is prettig als er iemand bereikbaar is voor vragen.",
  },
  {
    category: "Prijs",
    q: "Wat kost dakontmossing en dakcoating?",
    a: "De prijs hangt af van de oppervlakte, het type dak en de mate van vervuiling. Na de gratis drone-inspectie ontvangt u een offerte met vaste prijs, geen verrassingen achteraf. Als indicatie: dakontmossing start vanaf €350, dakcoating vanaf €850 voor een gemiddeld dak.",
  },
  {
    category: "Timing",
    q: "Hoe lang duurt het voordat het resultaat zichtbaar is?",
    a: "Na een bioreiniging is het resultaat al zichtbaar na 4-6 weken zodra het mos afgestorven is en afspoelt bij regen. Bij dakcoating ziet u het resultaat meteen, de coating droogt op de dag zelf. Yannick voert vóór vertrek een waterafstoottest uit.",
  },
  {
    category: "Werkgebied",
    q: "In welke regio's zijn jullie actief?",
    a: "MOS-X is actief in heel Oost-Vlaanderen: Gent, Aalst, Dendermonde, Sint-Niklaas, Ronse, Wetteren, Lokeren, Zottegem, Oudenaarde, Ninove en alle omliggende gemeenten. Twijfelt u? Bel ons en we bevestigen of we in uw gemeente werken.",
  },
  {
    category: "Vertrouwen",
    q: "Is MOS-X een erkend en verzekerd bedrijf?",
    a: "Ja. MOS-X is een officieel geregistreerd bedrijf met volledige burgerlijke aansprakelijkheidsverzekering. Yannick is ook een gecertificeerd drone-piloot (EU Open A1/A3). U werkt altijd met een erkende professional.",
  },
  {
    category: "Vertrouwen",
    q: "Waarom zou ik kiezen voor MOS-X en niet voor een goedkopere concurrent?",
    a: "Een goedkopere offerte zonder inspectie betekent vaak hogedrukreiniging die uw pannen beschadigt, of een coating die niet op het juiste moment wordt aangebracht. MOS-X inspecteert altijd eerst met drone, werkt met zachte methodes en geeft u een vaste prijs. Dat is geen extra kost, dat is zekerheid.",
  },
  {
    category: "Prijs",
    q: "Zijn er verborgen kosten bovenop de offerte?",
    a: "Nee. De prijs die u in de offerte ziet, is de prijs die u betaalt, gegarandeerd. Gootreiniging en foto-rapportage zijn standaard inbegrepen. Enkel bij onverwachte bijkomende schade (bv. een gebroken nokpan) die vooraf niet zichtbaar was, vragen wij uw akkoord voordat wij extra werk uitvoeren.",
  },
  {
    category: "Timing",
    q: "Hoe snel kan MOS-X bij mij langskomen?",
    a: "Gemiddeld plannen we de inspectie binnen 5-10 werkdagen na uw aanvraag. Voor urgente gevallen (actieve lekkage, stormschade) proberen we sneller te schakelen. Na de inspectie ontvangt u de offerte binnen 24 uur.",
  },
  {
    category: "Proces",
    q: "Wat gebeurt er als ik na de inspectie besluit niets te doen?",
    a: "Dat is volledig uw keuze en dat respecteren wij. De drone-inspectie is en blijft gratis, ook als u besluit niet verder te gaan. Yannick zal nooit druk zetten. Als uw dak niets nodig heeft, zegt hij dat gewoon.",
  },
  {
    category: "Garantie",
    q: "Wat als ik na de behandeling toch niet tevreden ben?",
    a: "We staan 100% achter ons werk. Als u niet tevreden bent met het resultaat, komen we langs om het te bekijken en waar nodig gratis bij te werken. Uw tevredenheid is onze prioriteit, dat is wat onze 5-sterren reviews verklaren.",
  },
];

const categories = Array.from(new Set(faqs.map(f => f.category)));

function AccordionItem({ faq, index, open, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{
        background: open ? "#252820" : "#1C2019",
        border: open ? "1px solid rgba(109,179,63,0.25)" : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <span
            className="px-2 py-0.5 rounded-full text-[9px] font-bold shrink-0 mt-0.5"
            style={{
              background: "rgba(109,179,63,0.12)",
              color: "#6DB33F",
              fontFamily: "var(--font-montserrat)",
              letterSpacing: "0.06em",
            }}
          >
            {faq.category.toUpperCase()}
          </span>
          <span
            className="font-bold text-sm leading-snug"
            style={{
              color: open ? "#fff" : "rgba(255,255,255,0.80)",
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            }}
          >
            {faq.q}
          </span>
        </div>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{
            background: open ? "rgba(109,179,63,0.15)" : "rgba(255,255,255,0.06)",
            color: open ? "#6DB33F" : "rgba(255,255,255,0.40)",
          }}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <div className="pl-[4.5rem]">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              {faq.a}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#081012" }}>
        <div className="site-wrap relative z-10">
          <p className="site-eyebrow mb-4">FAQ</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Veelgestelde
            <span style={{ color: "#6DB33F" }}> vragen.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Antwoorden op de vragen die we het meest krijgen. Staat uw vraag er niet bij? Bel of mail ons.
          </p>
        </div>
      </section>

      {/* ── FAQ accordion ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Accordion list */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  faq={faq}
                  index={i}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>

            {/* Sticky sidebar */}
            <div className="lg:sticky lg:top-28">
              {/* Contact card */}
              <div
                className="rounded-2xl p-7 mb-5"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-3xl mb-4 block">💬</span>
                <h3
                  className="font-black text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  Heeft u een andere vraag?
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Yannick beantwoordt u persoonlijk, meestal binnen 1 werkdag.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="site-btn-primary w-full justify-center">
                    Neem contact op <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+32470000000" className="site-btn-outline-white w-full justify-center">
                    <Phone className="w-4 h-4" /> 0470 00 00 00
                  </a>
                </div>
              </div>

              {/* Category legend */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-montserrat)" }}
                >
                  Categorieën
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <span
                      key={cat}
                      className="px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        background: "rgba(109,179,63,0.10)",
                        color: "#6DB33F",
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="site-pad-sm" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
          >
            <div>
              <p
                className="font-black text-white text-xl mb-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Klaar voor een gratis diagnose?
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                Drone-inspectie inbegrepen · Volledig vrijblijvend
              </p>
            </div>
            <Link href="/contact" className="site-btn-primary shrink-0">
              Gratis diagnose aanvragen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}



