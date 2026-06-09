import { Sparkles, Droplet, Shield, Search, Wrench, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Dakreiniging",
    tagline: "Dieptewerking, geen hogedrukreiniging",
    desc: "Wij reinigen uw dak met een zachte, biologisch afbreekbare reinigingsoplossing. Geen hogedrukspuit die uw pannen beschadigt, wel een grondig resultaat dat maanden standhoudt.",
    features: ["Veilig voor alle daktypen", "Zachte methode", "Inclusief controle"],
    price: "Vanaf € 4 / m²",
    popular: false,
  },
  {
    icon: Droplet,
    title: "Mosverwijdering",
    tagline: "Wortelbehandeling inbegrepen",
    desc: "Mos laat u niet zomaar verdwijnen met een borstel. Onze behandeling doodt ook de wortels, zodat het mos niet terugkeert. Met optionele nareiniging voor direct resultaat.",
    features: ["Wortelbehandeling", "Preventieve naspray", "Geen groeischade"],
    price: "Vanaf € 5 / m²",
    popular: false,
  },
  {
    icon: Shield,
    title: "Dak-Coating & Impregnatie",
    tagline: "Tot 10 jaar bescherming",
    desc: "Een transparante of gekleurde beschermlaag die uw dakpannen waterdicht maakt, UV-bestendig en volledig ademend. Ideaal na reiniging voor maximale bescherming.",
    features: ["10 jaar garantie", "Kleurrestauratie", "Vochtwerend"],
    price: "Vanaf € 8 / m²",
    popular: true,
  },
  {
    icon: Search,
    title: "Dakinspectie",
    tagline: "Volledige staat in één rapport",
    desc: "Een professionele inspectie waarbij Yannick uw dak fotografisch documenteert en een helder rapport opmaakt met prioriteiten. Ideaal vóór aankoop of na stormschade.",
    features: ["Fotorapport", "Prioriteitenlijst", "Offerte inbegrepen"],
    price: "Gratis bij opdracht",
    popular: false,
  },
  {
    icon: Wrench,
    title: "Kleine Dakreparaties",
    tagline: "Snelle interventie, vaste prijs",
    desc: "Gebarsten pannen, loszittende nokken of verstopte dakgoten, wij lossen kleine problemen snel op voor ze groot worden. Transparante prijzen, geen verrassingen.",
    features: ["Snelle interventie", "Vaste prijs", "Garantie op werk"],
    price: "Op offerte",
    popular: false,
  },
  {
    icon: Sparkles,
    title: "Gootreiniging",
    tagline: "Voorkomen is beter dan herstellen",
    desc: "Verstopte dakgoten zorgen voor wateroverlast aan gevel en fundering. Wij reinigen én controleren al uw goten en afvoeren grondig.",
    features: ["Inclusief afvoercontrole", "Gecombineerd met reiniging", "Fotobewijsvoering"],
    price: "Vanaf € 75",
    popular: false,
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-[#F8F6F2]" id="diensten">
      <div className="container-tight">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#C49A28" }}
          >
            Onze Diensten
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1B3A26" }}
          >
            Alles voor een gezond,{" "}
            <span className="italic">beschermd dak</span>
          </h2>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#6B6B5E" }}>
            Van een eenvoudige reiniging tot een volledige behandeling met garantie. Elke opdracht
            krijgt dezelfde aandacht, ongeacht de grootte.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="relative group bg-white rounded-3xl overflow-hidden border hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                style={{
                  borderColor: s.popular ? "#C49A28" : "#E0DDD6",
                  boxShadow: s.popular
                    ? "0 4px 24px rgba(196,154,40,0.15)"
                    : "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                {s.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold tracking-widest uppercase"
                    style={{ background: "linear-gradient(90deg, #1B3A26 0%, #4A7C59 100%)", color: "#C49A28" }}
                  >
                    Meest Gevraagd
                  </div>
                )}

                <div className={`p-7 ${s.popular ? "pt-11" : ""}`}>
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{
                      background: s.popular
                        ? "linear-gradient(135deg, #1B3A26 0%, #4A7C59 100%)"
                        : "linear-gradient(135deg, #F8F6F2 0%, #EDE9E2 100%)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: s.popular ? "#C49A28" : "#1B3A26" }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#1A1A18" }}>
                    {s.title}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-wide uppercase mb-4"
                    style={{ color: "#C49A28" }}
                  >
                    {s.tagline}
                  </p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B6B5E" }}>
                    {s.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "#1A1A18" }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(27,58,38,0.08)" }}
                        >
                          <ChevronRight className="w-3 h-3 text-[#1B3A26]" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: "#E0DDD6" }}>
                    <span className="font-bold text-base" style={{ color: "#1B3A26" }}>
                      {s.price}
                    </span>
                    <a
                      href="#diagnose"
                      className="text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:bg-[#1B3A26] hover:text-white"
                      style={{
                        background: "rgba(27,58,38,0.08)",
                        color: "#1B3A26",
                      }}
                    >
                      Meer info →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#6B6B5E] mb-4">
            Niet zeker welke dienst u nodig heeft?{" "}
          </p>
          <a
            href="#diagnose"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-all btn-primary-glow"
            style={{
              background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
              boxShadow: "0 6px 24px rgba(200,56,10,0.35)",
            }}
          >
            Yannick bekijkt het gratis →
          </a>
        </div>
      </div>
    </section>
  );
}
