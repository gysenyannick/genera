import CalculatorCard from "./calculator-card";
import { CheckCircle } from "lucide-react";

const features = [
  "Geen verborgen kosten, de richtprijs is de werkprijs",
  "Dakontmossing, dakcoating en gevelreiniging berekend",
  "Prijs op basis van oppervlakte, type en vervuiling",
  "Gratis diagnose voor een exacte offerte op maat",
];

export default function SiteCalculator() {
  return (
    <section className="site-pad" id="calculator" style={{ background: "#081012" }}>
      <div className="site-wrap">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 xl:gap-20 items-center">

          {/* Left: context */}
          <div>
            <p className="site-eyebrow mb-4">Dakprijs Calculator</p>
            <h2
              className="font-bold text-white leading-tight mb-5"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Weet in 30 seconden
              <br />
              <span style={{ color: "#6DB33F" }}>wat uw dak kost.</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] text-base leading-relaxed mb-8 max-w-md">
              Bereken een realistische richtprijs voor uw dak, dakontmossing, coating of combinatie. De exacte prijs krijgt u pas na de gratis drone-inspectie.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#6DB33F] shrink-0 mt-0.5" />
                  <p className="text-sm text-white/60 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>

            {/* Disclamer */}
            <div
              className="p-4 rounded-xl text-xs"
              style={{ background: "rgba(109,179,63,0.08)", border: "1px solid rgba(109,179,63,0.15)", color: "rgba(255,255,255,0.4)" }}
            >
              💡 De calculator geeft een indicatieve prijs. Na de gratis diagnose ontvangt u een exacte vaste offerte.
            </div>
          </div>

          {/* Right: calculator */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <CalculatorCard />
          </div>
        </div>
      </div>
    </section>
  );
}
