import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const materials = [
  { icon: "🧱", name: "Baksteen", desc: "Zwarte aanslag en mos verwijderd. Voegen blijven intact." },
  { icon: "🏛️", name: "Pleisterwerk", desc: "Zachte reiniging zonder beschadiging van de bepleistering." },
  { icon: "🪨", name: "Natuursteen", desc: "Zachte methode voor zandsteen, blauwe hardsteen en meer." },
  { icon: "🏢", name: "Betonsteen", desc: "Algen en kalkuitbloeiing verwijderd van betonnen gevels." },
];

const faqs = [
  { q: "Beschadigt de reiniging mijn gevel?", a: "Nee. Wij gebruiken uitsluitend zachte reinigingsmethodes die geschikt zijn voor uw type gevel. Geen hogedruk die voegen beschadigt." },
  { q: "Hoe lang duurt gevelreiniging?", a: "Een gemiddelde gevel (60-100 m²) reinigen wij op één dag. Grotere projecten kunnen twee dagen in beslag nemen." },
  { q: "Blijft de gevel lang schoon?", a: "Na reiniging kunt u optioneel een beschermende impregneringen laten aanbrengen die nieuwe aanslag aanzienlijk vertraagt." },
];

export default function GevelreinigingPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#081012" }}>
        <div className="site-wrap relative z-10">
          <Link
            href="/diensten"
            className="inline-flex items-center gap-1.5 text-xs mb-6 transition-colors"
            style={{ color: "rgba(255,255,255,0.40)", fontFamily: "var(--font-montserrat)" }}
          >
            ← Terug naar diensten
          </Link>
          <p className="site-eyebrow mb-4">Dienst</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Gevelreiniging ,
            <br />
            <span style={{ color: "#6DB33F" }}>zachte methode.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Zwarte aanslag, mos en algen van uw gevel. Geschikt voor baksteen, pleisterwerk, natuursteen en betonsteen.
          </p>
          <Link href="/contact" className="site-btn-primary">
            Gratis inspectie aanvragen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Before / After visual ── */}
      <section className="site-pad-sm" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="relative rounded-2xl overflow-hidden h-48 img-before-facade">
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,31,26,0.8) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-black/60 text-white/80"
                  style={{ fontFamily: "var(--font-montserrat)" }}>VOOR</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 img-after-facade">
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,31,26,0.8) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#6DB33F] text-white"
                  style={{ fontFamily: "var(--font-montserrat)" }}>NA ✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Materials ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <p className="site-eyebrow mb-4">Geschikt voor</p>
          <h2
            className="font-bold text-white mb-10"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            Alle <span style={{ color: "#6DB33F" }}>geveltypen gereinigd.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {materials.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-3xl mb-4 block">{m.icon}</span>
                <h3 className="font-bold text-white mb-2 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{m.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Included */}
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="site-eyebrow mb-4">Wat is inbegrepen?</p>
              <ul className="space-y-3">
                {[
                  "Gratis inspectie op locatie",
                  "Zachte biologische reiniging",
                  "Geschikt voor alle geveltypen",
                  "Geen beschadiging aan voegen",
                  "Foto-rapportage voor en na",
                  "Optioneel: beschermende impregnering",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="site-eyebrow mb-4">Waarom zachte reiniging?</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                Hogedrukreiniging beschadigt voegen, poreuze stenen en bepleistering. Zachte bioreiniging verwijdert de aanslag aan de wortel, zonder schade aan uw gevel.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Het resultaat is duurzamer: aanslag keert minder snel terug omdat de bron behandeld wordt in plaats van oppervlakkig weggespoeld.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap site-wrap-narrow">
          <p className="site-eyebrow mb-4">Vragen</p>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="font-bold text-white mb-2 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{f.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="site-pad-sm" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-black text-white text-xl mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                Klaar voor een schone gevel?
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                Gratis inspectie · Zachte methode · Geen panschade
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="site-btn-primary">
                Gratis inspectie <ArrowRight className="w-4 h-4" />
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



