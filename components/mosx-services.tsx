import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    slug: "dakontmossing",
    emoji: "🪴",
    title: "Dakontmossing",
    tagline: "Mos en algen definitief weg",
    lead: "Mos, algen en aanslag tasten uw dakpannen aan en verkorten de levensduur met jaren. Wij verwijderen ze grondig, zonder hogedrukreiniging die uw dak beschadigt.",
    features: [
      "Zachte reinigingstechniek (geen hogedruk)",
      "Bio-behandeling: doodt ook de wortels",
      "Resultaat zichtbaar binnen enkele weken",
      "Optioneel gecombineerd met dakcoating",
    ],
    price: "Vanaf € 4 / m²",
    popular: false,
    color: "#1A5C36",
    bgImage: "img-placeholder-roof",
    bgClean: "img-placeholder-roof-clean",
  },
  {
    slug: "dakcoating",
    emoji: "🛡️",
    title: "Dakcoating",
    tagline: "Tot 15 jaar bescherming",
    lead: "Een professionele dakcoating beschermt uw pannen tegen vocht, vorst en UV. Het resultaat: een dak dat er nieuw uitziet en tot 15 jaar meegaat zonder hergroei.",
    features: [
      "Transparant of in kleur naar keuze",
      "15 jaar schriftelijke garantie",
      "100% ademend, geen vochtophoping",
      "Verhoogt de woningwaarde aantoonbaar",
    ],
    price: "Vanaf € 8 / m²",
    popular: true,
    color: "#C8920A",
    bgImage: "img-placeholder-roof",
    bgClean: "img-placeholder-roof-clean",
  },
  {
    slug: "gevelreiniging",
    emoji: "🏠",
    title: "Gevelreiniging",
    tagline: "Gevel als nieuw, zonder schade",
    lead: "Een groene, zwarte of vervuilde gevel verlaagt de waarde van uw woning. Wij reinigen baksteen, beton, pleister en natuursteen, veilig en grondig.",
    features: [
      "Geschikt voor alle gevelmaterialen",
      "Geen schade aan voegen of pleister",
      "Behandeling tegen hergroei inbegrepen",
      "Ook voor beschermde erfgoedpanden",
    ],
    price: "Vanaf € 5 / m²",
    popular: false,
    color: "#2A7A4B",
    bgImage: "img-placeholder-facade",
    bgClean: "img-placeholder-facade-clean",
  },
];

export default function MosxServices() {
  return (
    <section className="section-pad" id="diensten" style={{ background: "#F7F6F2" }}>
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Diensten</p>
          <h2 className="section-headline mb-5">
            Drie diensten.{" "}
            <span className="italic" style={{ color: "#1A5C36" }}>Één specialist.</span>
          </h2>
          <p className="text-[#5C6058] text-lg leading-relaxed">
            MOS-X richt zich volledig op daken en gevels. Geen algemeen bouwbedrijf, geen onderaannemers, alleen Yannick, met 100% focus op één vak.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group bg-white rounded-3xl overflow-hidden flex flex-col card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ border: s.popular ? `2px solid ${s.color}` : "1px solid #E3E0D8" }}
            >
              {s.popular && (
                <div
                  className="py-2 text-center text-[11px] font-black tracking-[0.15em] uppercase"
                  style={{ background: s.color, color: "white" }}
                >
                  Meest Gevraagd
                </div>
              )}

              {/* Visual, before/after hint */}
              <div className={`relative h-44 overflow-hidden ${!s.popular ? "" : ""}`}>
                <div className={`absolute inset-0 ${s.bgImage}`} />
                <div
                  className={`absolute inset-0 ${s.bgClean}`}
                  style={{ clipPath: "inset(0 0 0 50%)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(255,255,255,0.9) 100%)" }} />
                {/* Labels */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/50 text-white/80 backdrop-blur-sm">Vóór</span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/80 text-[#111613] backdrop-blur-sm">Na</span>
                </div>
                {/* Emoji */}
                <div className="absolute top-4 right-4 text-3xl">{s.emoji}</div>
              </div>

              <div className="flex-1 flex flex-col p-7">
                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#111613] mb-1">{s.title}</h3>
                <p className="text-xs font-bold tracking-wide uppercase mb-4" style={{ color: s.color }}>
                  {s.tagline}
                </p>
                <p className="text-sm text-[#5C6058] leading-relaxed mb-5">{s.lead}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#111613]">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: "#E3E0D8" }}>
                  <span className="font-bold text-base" style={{ color: "#111613" }}>{s.price}</span>
                  <Link
                    href={`/diensten/${s.slug}`}
                    className="flex items-center gap-1.5 text-sm font-bold transition-all"
                    style={{ color: s.color }}
                  >
                    Meer info <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#5C6058] mb-5 text-base">
            Niet zeker welke dienst uw dak of gevel nodig heeft?
          </p>
          <Link href="/contact" className="btn-primary text-base">
            Yannick bekijkt het gratis, drone-inspectie inbegrepen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
