import { Search, FileText, Wrench, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Gratis Inspectie",
    desc: "Yannick komt bij u thuis, bekijkt uw dak en stelt een volledig fotorapport op. Geen kosten, geen verplichtingen.",
    duration: "30–45 min.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Duidelijke Offerte",
    desc: "U ontvangt een heldere offerte met vaste prijs, geplande datum en exacte omschrijving van de werken. Geen verborgen kosten.",
    duration: "Binnen 24u",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professionele Reiniging",
    desc: "Op de afgesproken datum voert Yannick persoonlijk de werken uit. Netjes, stipt en met respect voor uw eigendom.",
    duration: "1–2 werkdagen",
  },
  {
    number: "04",
    icon: Shield,
    title: "Garantie & Rapport",
    desc: "Na de werken ontvangt u een eindrapport met foto's en uw schriftelijke garantie. Yannick blijft bereikbaar voor vragen.",
    duration: "10 jaar garantie",
  },
];

export default function Process() {
  return (
    <section
      className="section-padding"
      id="werkwijze"
      style={{ background: "#F8F6F2" }}
    >
      <div className="container-tight">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#C49A28" }}
          >
            Hoe werkt het
          </p>
          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1B3A26" }}
          >
            Vier stappen naar een{" "}
            <span className="italic">perfect dak</span>
          </h2>
          <p className="text-base lg:text-lg leading-relaxed text-[#6B6B5E]">
            Duidelijk proces, geen verrassingen. Van eerste contact tot schriftelijke garantie.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, #C49A28 20%, #C49A28 80%, transparent)" }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  {/* Number + Icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg relative z-10"
                      style={{
                        background: "linear-gradient(135deg, #1B3A26 0%, #2D5A3A 100%)",
                        boxShadow: "0 8px 24px rgba(27,58,38,0.25)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-[#C49A28]" />
                    </div>
                    <span
                      className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#C49A28", color: "white" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Duration badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ background: "rgba(196,154,40,0.1)", color: "#C49A28" }}
                  >
                    {s.duration}
                  </span>

                  <h3 className="font-bold text-base mb-3 text-[#1A1A18]">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[#6B6B5E]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
