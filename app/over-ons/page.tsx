import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import PageLayout from "@/components/page-layout";

const stats = [
  { value: "10+",   label: "jaar ervaring" },
  { value: "247+",  label: "daken gereinigd" },
  { value: "100%",  label: "tevreden klanten" },
  { value: "5★",    label: "gemiddelde rating" },
];

const bullets = [
  "247+ daken succesvol gereinigd in Oost-Vlaanderen",
  "Gecertificeerd drone-piloot, elk dak geïnspecteerd met professionele drone",
  "Volledig verzekerd, burgerlijke aansprakelijkheid inbegrepen",
  "5 jaar garantie op dakcoating behandelingen",
  "Actief in heel Oost-Vlaanderen en omgeving",
  "Geen onderaannemers, Yannick voert elk werk persoonlijk uit",
];

const cards = [
  {
    title: "Onze missie",
    body: "Elke huiseigenaar verdient een eerlijk oordeel over zijn dak, zonder verkooppraatjes. MOS-X staat voor transparantie: u ziet met eigen ogen wat uw dak nodig heeft via live drone-beelden. Geen verassingen achteraf.",
    icon: "🎯",
  },
  {
    title: "Onze visie",
    body: "Een dak moet jarenlang meegaan zonder gedoe. Wij geloven in preventief onderhoud boven dure herstellingen. Door eerlijk te adviseren en vakkundig te werken, bouwen wij aan langdurige vertrouwensrelaties met elke klant.",
    icon: "🔭",
  },
];

export default function OverOnsPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#081012" }}>
        <div className="site-wrap relative z-10">
          <p className="site-eyebrow mb-4">Over MOS-X</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Uw dak in
            <span style={{ color: "#6DB33F" }}> ervaren handen.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            MOS-X is het dakspecialisme van Yannick, persoonlijk, transparant en eerlijk. Actief in heel Oost-Vlaanderen.
          </p>
        </div>
      </section>

      {/* ── Two-column: story + photo ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: text */}
            <div>
              <p className="site-eyebrow mb-4">Het verhaal</p>
              <h2
                className="font-bold text-white leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Geen groot bedrijf.
                <br />
                <span style={{ color: "#6DB33F" }}>Eén vakman. Eén belofte.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                MOS-X is opgericht door Yannick, een gecertificeerde dakspecialist met meer dan 10 jaar ervaring in dakreiniging en dakcoating. Wat hem onderscheidt? Hij werkt met een professionele drone én geeft u live mee te kijken tijdens de inspectie.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                Geen onderaannemers. Geen verkoopdruk. Yannick staat met zijn naam op elke opdracht. Dat betekent eerlijk advies, ook als uw dak niets nodig heeft.
              </p>
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6DB33F" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: photo placeholder */}
            <div className="relative">
              <div
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden img-before-roof"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Overlay with Yannick name badge */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,31,26,0.85) 0%, transparent 50%)" }} />
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="font-black text-white text-xl"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                  >
                    Yannick
                  </p>
                  <p className="text-sm" style={{ color: "#6DB33F" }}>Oprichter & Vakspecialist MOS-X</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>Oost-Vlaanderen</p>
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-3 rounded-xl shadow-xl"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F9A825" }} />
                  ))}
                </div>
                <span className="text-xs font-bold text-white" style={{ fontFamily: "var(--font-montserrat)" }}>
                  12 reviews · 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision cards ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {cards.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl p-8"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-3xl mb-5 block">{c.icon}</span>
                <h3
                  className="font-black mb-4"
                  style={{
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    color: "#6DB33F",
                    fontSize: "1.1rem",
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={{ background: "#081012" }}
              >
                <p
                  className="font-black text-3xl text-white mb-1 leading-none"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", color: "#6DB33F" }}
                >
                  {s.value}
                </p>
                <p className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.40)" }}>
                  {s.label}
                </p>
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
              <p
                className="font-black text-white text-xl mb-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Maak kennis met Yannick
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                Gratis drone-inspectie · Vrijblijvend advies · Vaste prijs
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="site-btn-primary">
                Gratis diagnose aanvragen <ArrowRight className="w-4 h-4" />
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



