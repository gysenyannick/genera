import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    emoji: "🚁",
    title: "Gratis drone-inspectie",
    body: "MOS-X is de enige specialist in de regio die uw dak inspecteert met een professionele drone, volledig gratis, voor elke opdracht.",
    highlight: true,
  },
  {
    emoji: "🔍",
    title: "U ziet wat wij zien",
    body: "Tijdens de inspectie kijkt u live mee op de tablet. Geen verborgen agenda, u ziet exact de toestand van uw dak.",
    highlight: false,
  },
  {
    emoji: "👨‍🔧",
    title: "Persoonlijk, altijd Yannick",
    body: "Geen onderaannemers. Yannick voert elk werk persoonlijk uit. U weet wie er op uw dak staat.",
    highlight: false,
  },
  {
    emoji: "💰",
    title: "Transparante vaste prijs",
    body: "Na de diagnose ontvangt u een offerte met vaste prijs. Nooit meer betalen dan afgesproken, gegarandeerd.",
    highlight: false,
  },
  {
    emoji: "🤝",
    title: "Eerlijk advies, ook als dat minder is",
    body: "Als uw dak niets nodig heeft, zegt Yannick dat. Eerlijkheid gaat bij MOS-X boven omzet.",
    highlight: false,
  },
  {
    emoji: "📍",
    title: "Lokale specialist",
    body: "MOS-X is actief in heel Oost-Vlaanderen. Geen anoniem bedrijf, een buur die zijn regio kent.",
    highlight: false,
  },
];

export default function SiteWhy() {
  return (
    <section className="site-pad bg-white" id="waarom-mosx">
      <div className="site-wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
          <div>
            <p className="site-eyebrow mb-4">Waarom MOS-X</p>
            <h2 className="site-h2 max-w-xl">
              Niet zomaar een dakreiniger.
              <span style={{ color: "#6DB33F" }}> Een specialist die eerlijk is.</span>
            </h2>
          </div>
          <Link href="/over-ons" className="site-btn-outline-dark shrink-0 hidden lg:inline-flex">
            Over MOS-X <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 transition-all hover:-translate-y-0.5"
              style={{
                background: c.highlight ? "#081012" : "#fff",
                border: c.highlight ? "none" : "1px solid #EBEBEA",
                boxShadow: c.highlight
                  ? "0 8px 40px rgba(0,0,0,0.25)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-3xl mb-4">{c.emoji}</p>
              <h3
                className="font-bold mb-3 text-[0.9375rem]"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  color: c.highlight ? "#fff" : "#081012",
                }}
              >
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color: c.highlight ? "rgba(255,255,255,0.55)" : "#6B7280" }}>
                {c.body}
              </p>
              {c.highlight && (
                <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <Link href="/contact" className="site-btn-primary text-sm w-full" style={{ padding: "0.625rem 1rem" }}>
                    Vraag gratis diagnose →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 lg:hidden">
          <Link href="/over-ons" className="site-btn-outline-dark w-full justify-center">
            Meer over MOS-X <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
