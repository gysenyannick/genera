import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const steps = [
  { n: "1", title: "Gratis drone-inspectie", desc: "Yannick inspecteert uw dak van boven. U kijkt live mee op de tablet." },
  { n: "2", title: "Biologische behandeling", desc: "Mossendoder wordt aangebracht, geen hogedruk, uw pannen blijven intact." },
  { n: "3", title: "Afsterven & afspoelen", desc: "Na 4-6 weken spoelt het dode mos af bij regen. Het dak is volledig schoon." },
  { n: "4", title: "Preventieve naspray", desc: "Optioneel: een naspray vertraagt hergroei tot 2-3 jaar." },
];

const faqs = [
  { q: "Is bioreiniging veilig voor alle dakpannen?", a: "Ja. De biologische methode is geschikt voor keramische pannen, leien, beton en meer. Er is geen risico op beschadiging." },
  { q: "Moet ik thuis zijn tijdens de behandeling?", a: "Voor de inspectie is het handig, maar voor de behandeling zelf hoeft u niet aanwezig te zijn." },
  { q: "Hoe lang duurt de reiniging?", a: "Een gemiddeld dak (100-150 m²) is behandeld binnen een halve dag. De zichtbare resultaten verschijnen na 4-6 weken." },
];

export default function DakontmossingPage() {
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
            Dak ontmossen
            <br />
            <span style={{ color: "#6DB33F" }}>zachte bioreiniging.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Mos, algen en korstmos professioneel verwijderd, zonder hogedrukreiniging, zonder panschade.
          </p>
          <Link href="/contact" className="site-btn-primary">
            Gratis diagnose aanvragen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── What & Why ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="site-eyebrow mb-4">Wat is dakontmossing?</p>
              <h2
                className="font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
              >
                Mos verwijderd.
                <span style={{ color: "#6DB33F" }}> Dak beschermd.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                Mos op uw dak is meer dan een esthetisch probleem. Het houdt vocht vast, vriest in winter uit en tast langzaam uw dakpannen aan. Bioreiniging doodt de mos aan de wortel, zonder agressieve druk.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                Na de behandeling spoelt het dode materiaal bij regen af. U hoeft niets te doen. Uw goten worden standaard meegenomen.
              </p>
            </div>
            <div>
              <p className="site-eyebrow mb-4">Wat is inbegrepen?</p>
              <ul className="space-y-3">
                {[
                  "Gratis drone-inspectie vóór aanvang",
                  "Biologische mossendoder aangebracht",
                  "Gootreiniging standaard inbegrepen",
                  "Foto-rapportage voor en na",
                  "Preventieve naspray (optioneel)",
                  "Vaste prijs, geen verassingen",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process steps ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <p className="site-eyebrow mb-4">Hoe het werkt</p>
          <h2
            className="font-bold text-white mb-10"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            Van inspectie tot <span style={{ color: "#6DB33F" }}>schoon dak.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white mb-4"
                  style={{ background: "linear-gradient(135deg, #6DB33F 0%, #5A9A32 100%)", fontFamily: "var(--font-montserrat)" }}
                >
                  {s.n}
                </div>
                <h3 className="font-bold text-white mb-2 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap site-wrap-narrow">
          <p className="site-eyebrow mb-4">Vragen</p>
          <h2
            className="font-bold text-white mb-8"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            Veelgestelde vragen
          </h2>
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
                Klaar voor een schoon dak?
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                Drone-inspectie gratis · Vaste prijs · Geen hogedruk
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="site-btn-primary">
                Gratis diagnose <ArrowRight className="w-4 h-4" />
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



