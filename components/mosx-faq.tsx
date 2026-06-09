"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    q: "Hoe werkt de gratis dakdiagnose precies?",
    a: "Yannick komt bij u thuis en inspecteert uw dak met een professionele drone. U kijkt live mee op zijn tablet. Daarna legt hij alles uit in duidelijke taal en geeft u een eerlijk advies, inclusief richtprijs als er werk nodig is. Dit is volledig gratis en vrijblijvend.",
  },
  {
    q: "Waarom gebruikt MOS-X een drone?",
    a: "Een drone laat Yannick elk hoekje van uw dak inspecteren, ook de plaatsen die van op de grond onzichtbaar zijn. Zo ontdekt hij problemen vroegtijdig en kunt u live meekijken wat de situatie is. Het is eerlijker dan een 'inspectie' van op afstand.",
  },
  {
    q: "Wat is het verschil tussen dakontmossing en dakcoating?",
    a: "Dakontmossing verwijdert de mos en algen die op uw dak groeien. Dakcoating is een extra beschermlaag die daarna wordt aangebracht om uw pannen te beschermen tegen vocht, vorst en hergroei, tot 15 jaar lang. Beide zijn complementair maar kunnen ook apart worden uitgevoerd.",
  },
  {
    q: "Werkt MOS-X met hogedrukreiniging?",
    a: "Neen. Hogedrukreiniging beschadigt de toplaag van dakpannen en maakt ze kwetsbaarder voor vervuiling. Wij werken uitsluitend met zachte bioreiniging die mos en algen grondig verwijdert zonder uw dak te beschadigen.",
  },
  {
    q: "Hoe lang duurt een dakontmossing of gevelreiniging?",
    a: "Afhankelijk van het type en de oppervlakte duurt een dakontmossing 1 tot 2 werkdagen. Voor een gemiddeld dak (130–180 m²) rekenen wij 1 volledige werkdag. Voor gevelreiniging is dat gemiddeld een halve dag tot 1 dag.",
  },
  {
    q: "Moet ik thuis zijn tijdens de werken?",
    a: "Niet noodzakelijk tijdens de volledige uitvoering. Wel vragen wij uw aanwezigheid bij het begin voor toegang. Na de werken ontvangt u fotobewijs van het resultaat.",
  },
  {
    q: "Hoe lang duurt de dakcoating?",
    a: "MOS-X werkt met kwalitatieve coatings met een levensduur van 10 tot 15 jaar. U ontvangt een schriftelijke garantie na de plaatsing.",
  },
  {
    q: "Welk BTW-tarief is van toepassing?",
    a: "Voor woningen ouder dan 10 jaar geldt een verlaagd BTW-tarief van 6%. Dit communiceren wij steeds correct in uw offerte. Voor nieuwbouw (minder dan 10 jaar) geldt 21%.",
  },
  {
    q: "In welke regio is MOS-X actief?",
    a: "MOS-X is actief in heel Oost-Vlaanderen: Gent, Aalst, Dendermonde, Sint-Niklaas, Ronse, Wetteren, Lokeren, Zottegem en omliggende gemeenten. Voor grotere opdrachten kan overleg.",
  },
  {
    q: "Wat als Yannick na de diagnose zegt dat mijn dak niets nodig heeft?",
    a: "Dan zegt hij dat eerlijk. Yannick gaat niet werken creëren waar geen werk nodig is. Dat is zijn filosofie, en de reden waarom zijn klanten hem aanbevelen.",
  },
];

export default function MosxFaq() {
  return (
    <section className="section-pad" id="faq" style={{ background: "#F7F6F2" }}>
      <div className="wrap">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-14 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-4">Veelgestelde vragen</p>
            <h2 className="section-headline mb-5">
              Eerlijke antwoorden.{" "}
              <span className="italic" style={{ color: "#1A5C36" }}>Zonder omwegen.</span>
            </h2>
            <p className="text-[#5C6058] text-base leading-relaxed mb-8">
              Staat uw vraag er niet bij? Bel of mail Yannick, hij beantwoordt elke vraag persoonlijk.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+32470000000"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border hover:border-[#1A5C36] transition-colors"
                style={{ borderColor: "#E3E0D8" }}
              >
                <span className="text-lg">📞</span>
                <div>
                  <p className="font-bold text-sm text-[#111613]">0470 00 00 00</p>
                  <p className="text-xs text-[#5C6058]">Direct antwoord · Ma–Za</p>
                </div>
              </a>
              <Link
                href="/contact"
                className="btn-primary text-sm w-full justify-center"
              >
                Gratis Diagnose Aanvragen →
              </Link>
            </div>
          </div>

          {/* Right: Accordion */}
          <Accordion multiple={false} className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-2xl border px-6 data-[state=open]:shadow-md transition-shadow"
                style={{ borderColor: "#E3E0D8" }}
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-sm text-[#111613] hover:text-[#1A5C36] hover:no-underline [&[data-state=open]]:text-[#1A5C36]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-[#5C6058]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
