import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import PageLayout from "@/components/page-layout";

const services = [
  {
    title: "Dak reinigen",
    tagline: "Zachte bioreiniging zonder panschade",
    desc: "Mos, algen en korstmos worden grondig verwijderd met een biologische methode. Geen hogedrukreiniging, uw pannen blijven intact en uw goten worden meegenomen.",
    checks: [
      "Zachte bioreiniging",
      "Gootreiniging inbegrepen",
      "Geen beschadiging aan pannen",
      "Preventieve naspray",
    ],
    img: "/images/dak-reinigen.webp",
    href: "/diensten/dakontmossing",
  },
  {
    title: "Dak coaten",
    tagline: "15 jaar bescherming met schriftelijke garantie",
    desc: "Na de reiniging beschermt een kwalitatieve dakcoating uw dak jarenlang tegen vocht, vorst en hergroei van mos. Inclusief waterafstoottest op locatie.",
    checks: [
      "Schriftelijke garantie",
      "Waterafstoottest voor vertrek",
      "Tot 15 jaar bescherming",
      "Geschikt voor alle dakpannen",
    ],
    img: "/images/dak-coaten.webp",
    href: "/diensten/dakcoating",
  },
  {
    title: "Dakabonnement",
    tagline: "Jaarlijkse controle, betaal enkel bij werk",
    desc: "Nooit meer verrast door mos of onverwachte schade. Yannick controleert elk jaar uw dak en grijpt preventief in, u betaalt enkel als er effectief werk is.",
    checks: [
      "Jaarlijkse drone-controle",
      "Betaal enkel bij werk",
      "Preventieve behandeling",
      "Vaste contactpersoon",
    ],
    img: "/images/dakabonnement.webp",
    href: "/contact",
  },
];

export default function DienstenPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#081012" }}>
        <div className="site-wrap relative z-10">
          <p className="site-eyebrow mb-4">Onze diensten</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-3xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Professionele oplossingen
            <br />
            <span style={{ color: "#6DB33F" }}>voor elk type dak.</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Elke opdracht start met een gratis drone-inspectie. Zo weet u exact wat uw dak nodig heeft, vóór u een beslissing neemt.
          </p>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col service-card"
                style={{
                  background: "#0F1A1F",
                  border: "1px solid #1A2E35",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                {/* Photo */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, rgba(6,11,14,0.10) 0%, rgba(6,11,14,0.72) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p
                      className="font-bold text-white text-lg leading-tight"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                    >
                      {s.title}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">{s.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="leading-relaxed mb-6" style={{ color: "#9CA3AF", fontSize: "15px", lineHeight: "1.7" }}>
                    {s.desc}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {s.checks.map((c, j) => (
                      <li key={j} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                        <span className="text-sm text-white">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:underline"
                      style={{ color: "#6DB33F" }}
                    >
                      Meer informatie <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA banner ── */}
      <section className="site-pad-sm" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 lg:p-10 rounded-2xl"
            style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex-1 text-center lg:text-left">
              <p
                className="font-black text-white text-xl mb-2"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Twijfelt u welke oplossing bij uw dak past?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Yannick inspecteert uw dak gratis met een professionele drone en geeft u een eerlijk advies, zonder verkooppraatjes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center shrink-0">
              <Link href="/contact" className="site-btn-primary">
                Gratis advies aanvragen <ArrowRight className="w-4 h-4" />
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



