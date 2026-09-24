import { CheckCircle, Award, MapPin, Phone, ArrowRight } from "lucide-react";

const credentials = [
  "VCA-gecertificeerd vakman",
  "Erkend aannemer, registratienr. BE 0.XXX.XXX.XXX",
  "Lid van de Confederatie Bouw",
  "15 jaar actief in Oost- & West-Vlaanderen",
  "Jaarlijks bijgevormd in nieuwe technieken",
];

const values = [
  {
    title: "Eerlijk advies",
    desc: "Yannick vertelt u wat uw dak nodig heeft, niet meer, niet minder. Geen overbodige diensten, geen verrassingen.",
  },
  {
    title: "Vakmanschap boven snelheid",
    desc: "Elke opdracht krijgt de tijd die ze verdient. We kiezen voor kwaliteit die jaren standhoudt.",
  },
  {
    title: "Transparante communicatie",
    desc: "Van offerte tot oplevering: u weet altijd wat er gebeurt, wanneer en voor welke prijs.",
  },
];

export default function YannickSection() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      id="yannick"
      style={{ background: "linear-gradient(180deg, #F8F6F2 0%, #EDE9E2 30%, #F8F6F2 100%)" }}
    >
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left, Visual */}
          <div className="relative">
            {/* Yannick photo placeholder */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Background, represents a professional on a roof */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(160deg, #1B3A26 0%, #2D5A3A 40%, #1B3A26 100%)",
                }}
              />
              {/* Roof texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -30deg, transparent 0px, transparent 28px,
                    rgba(255,255,255,0.3) 28px, rgba(255,255,255,0.3) 30px
                  )`,
                }}
              />
              {/* Avatar placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-36 h-36 rounded-full mb-4 flex items-center justify-center text-5xl font-display font-bold text-white border-4"
                  style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(196,154,40,0.4)" }}
                >
                  Y
                </div>
                <p className="text-white/60 text-sm font-medium">Foto Yannick</p>
              </div>

              {/* Overlay bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: "linear-gradient(to top, #0F1E15 0%, transparent 100%)" }}
              />

              {/* Name card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="font-display font-bold text-white text-xl mb-0.5">Yannick [Achternaam]</p>
                  <p className="text-[#C49A28] text-sm font-medium mb-3">Zaakvoerder & Dakspecialist</p>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Gent, Oost-Vlaanderen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 lg:-right-8 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl"
              style={{
                background: "linear-gradient(135deg, #C49A28 0%, #a07a18 100%)",
                boxShadow: "0 8px 30px rgba(196,154,40,0.4)",
              }}
            >
              <p className="font-display font-bold text-white text-2xl leading-none">15</p>
              <p className="text-white/80 text-xs font-medium leading-tight mt-1">jaar<br />ervaring</p>
            </div>

            {/* Certification badge */}
            <div
              className="absolute -bottom-4 -right-4 lg:-right-8 px-5 py-3 rounded-2xl shadow-xl"
              style={{ background: "white", border: "2px solid #E0DDD6" }}
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C49A28]" />
                <div>
                  <p className="font-bold text-xs text-[#1A1A18]">VCA Gecertificeerd</p>
                  <p className="text-[#6B6B5E] text-xs">Erkend vakman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right, Content */}
          <div className="space-y-8">
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#C49A28" }}
              >
                Over Yannick
              </p>
              <h2
                className="font-display font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#1B3A26" }}
              >
                Geen bedrijf achter een scherm ,{" "}
                <span className="italic">een vakman aan uw deur.</span>
              </h2>
              <div className="space-y-4 text-base lg:text-[1.05rem] leading-relaxed" style={{ color: "#6B6B5E" }}>
                <p>
                  Yannick begon zijn loopbaan als leerling-dakwerker op zijn zestiende. Vijftien jaar
                  later heeft hij meer dan 850 daken gereinigd, behandeld en geïnspecteerd door heel
                  Oost- en West-Vlaanderen.
                </p>
                <p>
                  Wat hem onderscheidt? Hij komt zelf, altijd. Geen onderaannemers, geen studenten.
                  Wanneer u Dakwerken Yannick belt, weet u dat dezelfde man met 15 jaar ervaring op
                  uw dak klimt.
                </p>
                <p>
                  Zijn filosofie is simpel: geef elke klant het advies dat u uw eigen familie zou
                  geven. Eerlijk, volledig en zonder verkooptrucjes.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-2xl border"
                  style={{ background: "white", borderColor: "#E0DDD6" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(27,58,38,0.08)" }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#1B3A26]" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1 text-[#1A1A18]">{v.title}</p>
                    <p className="text-sm leading-relaxed text-[#6B6B5E]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "rgba(27,58,38,0.04)", border: "1px solid rgba(27,58,38,0.1)" }}
            >
              <p className="font-bold text-sm text-[#1B3A26] mb-3">Diploma's & Certificaten</p>
              <ul className="space-y-2">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#6B6B5E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49A28] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#diagnose"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold text-white text-base transition-all btn-primary-glow"
                style={{
                  background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                  boxShadow: "0 6px 24px rgba(200,56,10,0.35)",
                }}
              >
                Maak kennis met Yannick
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+32470000000"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[#1B3A26] border-2 border-[#1B3A26] hover:bg-[#1B3A26] hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                Bel direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
