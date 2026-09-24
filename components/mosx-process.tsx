import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    n: "01",
    emoji: "📞",
    title: "U vraagt een gratis diagnose aan",
    desc: "Via de website, telefoon of WhatsApp. Yannick plant een bezoek in, u kiest het moment.",
    highlight: null,
    time: "Vandaag",
  },
  {
    n: "02",
    emoji: "🚁",
    title: "Drone-inspectie van uw dak",
    desc: "Yannick vliegt met een drone over uw volledig dak. U ziet live mee op zijn tablet wat hij ziet.",
    highlight: "Uniek: u ziet live mee",
    time: "Binnen 3–5 dagen",
  },
  {
    n: "03",
    emoji: "📋",
    title: "Eerlijk rapport & richtprijs",
    desc: "U ontvangt een helder rapport met foto's, bevindingen en een vaste richtprijs. Geen verrassingen achteraf.",
    highlight: null,
    time: "Zelfde dag",
  },
  {
    n: "04",
    emoji: "✅",
    title: "U beslist, zonder druk",
    desc: "Yannick legt alles uit. U beslist op eigen tempo. Geen agressieve opvolging. Geen verkooppraatjes.",
    highlight: "Geen druk",
    time: "Op uw moment",
  },
];

export default function MosxProcess() {
  return (
    <section className="section-pad bg-white" id="werkwijze">
      <div className="wrap">

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-14 items-center">

          {/* Left */}
          <div>
            <p className="eyebrow mb-4">Hoe het werkt</p>
            <h2 className="section-headline mb-6">
              Van onzekerheid naar{" "}
              <span className="italic" style={{ color: "#1A5C36" }}>volledige duidelijkheid</span>{" "}
             , in 4 stappen.
            </h2>
            <p className="text-[#5C6058] text-base leading-relaxed mb-8">
              Het MOS-X proces is ontworpen om u maximale zekerheid te geven, niet om u snel een offerte te verkopen. Elke stap is transparant.
            </p>

            {/* Drone highlight card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #EAF4EE 0%, #D4EBD8 100%)",
                border: "1px solid rgba(26,92,54,0.2)",
              }}
            >
              <p className="text-lg font-bold text-[#111613] mb-2">🚁 Drone-inspectie</p>
              <p className="text-sm text-[#5C6058] leading-relaxed mb-4">
                De meeste dakreinigers bekijken uw dak van op de grond. Yannick gebruikt een drone, zodat hij élke tegel, elke voeg en elk probleempunt in detail kan inspecteren.
              </p>
              <p className="text-sm font-bold" style={{ color: "#1A5C36" }}>
                Inbegrepen bij de gratis diagnose →
              </p>
            </div>

            <Link href="/contact" className="btn-primary mt-8 text-base inline-flex">
              Gratis Diagnose Aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className="group relative flex gap-5 p-6 rounded-2xl border bg-white hover:border-[#1A5C36] hover:shadow-md transition-all duration-300"
                style={{ borderColor: "#E3E0D8" }}
              >
                {/* Step number + connector */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 font-bold group-hover:scale-105 transition-transform"
                    style={{ background: "linear-gradient(135deg, #1A5C36 0%, #2A7A4B 100%)" }}
                  >
                    {s.emoji}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[20px]" style={{ background: "#E3E0D8" }} />
                  )}
                </div>

                <div className="flex-1 pb-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-bold text-base text-[#111613] leading-snug">{s.title}</h3>
                    <span
                      className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{ background: "#F7F6F2", color: "#5C6058" }}
                    >
                      {s.time}
                    </span>
                  </div>
                  <p className="text-sm text-[#5C6058] leading-relaxed">{s.desc}</p>
                  {s.highlight && (
                    <span
                      className="inline-block mt-3 px-3 py-1 rounded-full text-[11px] font-bold"
                      style={{ background: "rgba(200,146,10,0.1)", color: "#C8920A" }}
                    >
                      ✦ {s.highlight}
                    </span>
                  )}
                </div>

                <span className="absolute top-6 right-6 text-xs font-black" style={{ color: "#E3E0D8" }}>
                  {s.n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
