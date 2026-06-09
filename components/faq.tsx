"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Hoe weet ik of mijn dak gereinigd moet worden?",
    a: "Als u mos, groene aanslag of donkere vlekken ziet op uw dakpannen, is reiniging aanbevolen. Maar ook zonder zichtbare vervuiling is een inspectie na 5–7 jaar zinvol. Yannick geeft u een eerlijk beeld tijdens een gratis plaatsbezoek, zonder verkoopdruk.",
  },
  {
    q: "Werken jullie met hogedrukreiniging?",
    a: "Neen. Hogedrukreiniging beschadigt de toplaag van dakpannen en maakt ze gevoeliger voor opnieuw vervuiling. Wij werken met een zachte, biologisch afbreekbare reinigingsoplossing die mos en algen grondig verwijdert zonder uw dak te beschadigen.",
  },
  {
    q: "Hoelang duurt een dakreiniging?",
    a: "Afhankelijk van de grootte en vervuilingsgraad duurt een reiniging tussen een halve dag en twee volle werkdagen. Voor een gemiddeld dak van 150 m² rekenen we 1 werkdag. U wordt van tevoren correct ingelicht.",
  },
  {
    q: "Wat is het verschil tussen reiniging en coating?",
    a: "Reiniging verwijdert het vuil, mos en algen van uw dakpannen. Coating (of impregnatie) is een transparante beschermlaag die daarna wordt aangebracht om uw dak te beschermen tegen hergroei, vocht en UV-straling. Coating is optioneel maar verlengde de levensduur aanzienlijk.",
  },
  {
    q: "Hoe lang gaat de behandelgarantie mee?",
    a: "Bij een volledige reiniging met coating bieden wij een schriftelijke garantie van 10 jaar op hergroei. Wij controleren ook tussentijds als u een probleem zou vaststellen.",
  },
  {
    q: "Moet ik thuis zijn tijdens de werken?",
    a: "Neen, u hoeft niet aanwezig te zijn. We vragen enkel toegang tot de tuin of het gebouw voor de ladder. Na de werken sturen wij u een fotorapport van het eindresultaat.",
  },
  {
    q: "Is er BTW van toepassing?",
    a: "Voor woningen ouder dan 10 jaar geldt een verlaagd BTW-tarief van 6%. Voor nieuwbouw of gebouwen jonger dan 10 jaar geldt 21%. Yannick communiceert dit correct in zijn offerte.",
  },
  {
    q: "In welke regio zijn jullie actief?",
    a: "Wij zijn actief in heel Oost- en West-Vlaanderen. Voor grotere opdrachten kunnen we ook in aangrenzende provincies terecht. Bel of mail ons voor een bevestiging van uw locatie.",
  },
];

export default function FAQ() {
  return (
    <section
      className="section-padding"
      id="faq"
      style={{ background: "#F8F6F2" }}
    >
      <div className="container-tight">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 items-start">

          {/* Left header */}
          <div className="lg:sticky lg:top-28">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#C49A28" }}
            >
              Veelgestelde vragen
            </p>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#1B3A26" }}
            >
              Alles wat u wil weten,{" "}
              <span className="italic">eerlijk beantwoord.</span>
            </h2>
            <p className="text-base leading-relaxed text-[#6B6B5E] mb-8">
              Staat uw vraag er niet bij? Yannick beantwoordt ze persoonlijk, gratis en
              zonder verplichtingen.
            </p>
            <a
              href="tel:+32470000000"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white text-sm transition-all"
              style={{
                background: "linear-gradient(135deg, #1B3A26 0%, #2D5A3A 100%)",
                boxShadow: "0 4px 20px rgba(27,58,38,0.3)",
              }}
            >
              Stel uw vraag, 0470 00 00 00
            </a>
          </div>

          {/* Right, Accordion */}
          <Accordion multiple={false} className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-2xl border px-6 data-[state=open]:shadow-md transition-shadow"
                style={{ borderColor: "#E0DDD6" }}
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-sm text-[#1A1A18] hover:text-[#1B3A26] hover:no-underline [&[data-state=open]]:text-[#1B3A26]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-[#6B6B5E]">
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
