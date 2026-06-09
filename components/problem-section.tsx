import { AlertTriangle, TrendingDown, Droplets, Bug } from "lucide-react";

const problems = [
  {
    icon: Bug,
    title: "Mos & Algen",
    desc: "Mos houdt vocht vast en dringt door in voegen. Onbehandeld leidt dit tot scheuren en vorstschade.",
    severity: "Hoog risico",
  },
  {
    icon: Droplets,
    title: "Vocht & Lekkages",
    desc: "Een vervuild dak absorbeert tot 3× meer water. Dat vocht tast de dakconstructie van binnenuit aan.",
    severity: "Kritisch",
  },
  {
    icon: TrendingDown,
    title: "Waardedaling",
    desc: "Een verwaarloost dak verlaagt de woningwaarde aanzienlijk. Kopers zien een groen dak als direct knelpunt.",
    severity: "Financieel",
  },
  {
    icon: AlertTriangle,
    title: "Kortere levensduur",
    desc: "Zonder regelmatig onderhoud slijten dakpannen 10–15 jaar sneller. Renovatie kost 5–10× meer dan reiniging.",
    severity: "Vermijdbaar",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-[#F8F6F2]" id="probleem">
      <div className="container-tight">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#C49A28" }}
          >
            Waarom Dakreiniging Essentieel Is
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1B3A26" }}
          >
            Een vervuild dak kost u{" "}
            <span className="italic text-[#C8380A]">duizenden euro's</span>{" "}
            als u wacht.
          </h2>
          <p className="text-base lg:text-lg leading-relaxed" style={{ color: "#6B6B5E" }}>
            De meeste dakproblemen zijn onzichtbaar van op de grond, maar ze groeien elke
            maand. Vroegtijdige reiniging en behandeling is de slimste investering die u als
            huiseigenaar kunt doen.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl border bg-white hover:border-[#1B3A26] transition-all duration-300 hover:shadow-lg"
                style={{ borderColor: "#E0DDD6" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%)" }}
                >
                  <Icon className="w-5 h-5 text-[#C8380A]" />
                </div>
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-3"
                  style={{
                    background: "rgba(200,56,10,0.08)",
                    color: "#C8380A",
                  }}
                >
                  {p.severity}
                </span>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A1A18" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B5E" }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cost comparison banner */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 lg:p-12"
          style={{ background: "linear-gradient(135deg, #0F1E15 0%, #1B3A26 100%)" }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "#C49A28", filter: "blur(60px)", transform: "translate(30%, -30%)" }}
          />
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <p className="text-[#C49A28] text-sm font-bold tracking-widest uppercase mb-3">
                Vergelijking
              </p>
              <h3
                className="font-display font-bold text-white mb-4"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
              >
                Reiniging nu vs. Dakrenovatie later
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(196,154,40,0.12)", border: "1px solid rgba(196,154,40,0.2)" }}
                >
                  <p className="text-[#C49A28] font-bold text-2xl mb-1">€ 4–12 / m²</p>
                  <p className="text-white font-semibold mb-1">Professionele reiniging</p>
                  <p className="text-white/60 text-sm">+ 10 jaar behandelgarantie</p>
                </div>
                <div
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(200,56,10,0.12)", border: "1px solid rgba(200,56,10,0.2)" }}
                >
                  <p className="text-[#C8380A] font-bold text-2xl mb-1">€ 80–180 / m²</p>
                  <p className="text-white font-semibold mb-1">Dakvervanging</p>
                  <p className="text-white/60 text-sm">Bij verwaarlozing onvermijdelijk</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white/60 text-sm">
                Een tijdige reiniging kan de levensduur van uw dak met{" "}
                <strong className="text-white">15 tot 20 jaar</strong> verlengen.
              </p>
              <a
                href="#diagnose"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white text-sm transition-all btn-primary-glow"
                style={{
                  background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                  boxShadow: "0 4px 20px rgba(200,56,10,0.4)",
                }}
              >
                Gratis Diagnose Aanvragen →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
