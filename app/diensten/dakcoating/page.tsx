import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Shield } from "lucide-react";
import PageLayout from "@/components/page-layout";

const steps = [
  { n: "1", title: "Gratis drone-inspectie", desc: "Conditie van uw dak bepaald. U kijkt live mee." },
  { n: "2", title: "Volledige reiniging", desc: "Dak grondig ontmost en gereinigd. Coating hecht beter op schoon oppervlak." },
  { n: "3", title: "Coating aangebracht", desc: "Kwalitatieve dakcoating laag voor laag aangebracht." },
  { n: "4", title: "Waterafstoottest", desc: "Yannick voert een waterafstoottest uit voor hij vertrekt. U ziet het zelf." },
];

const faqs = [
  { q: "Hoe lang gaat de coating mee?", a: "Een coating van MOS-X beschermt uw dak tot 15 jaar. U ontvangt een schriftelijke garantie." },
  { q: "Kan ik enkel coaten zonder reiniging?", a: "Nee. Een coating op een vuil dak hecht slecht en geeft geen langdurig resultaat. Reiniging en coating gaan altijd samen." },
  { q: "Is coating geschikt voor alle dakpannen?", a: "Ja, keramisch, beton, arduin en leien. Na de drone-inspectie bevestigt Yannick of coating geschikt is voor uw specifieke dak." },
];

export default function DakcoatingPage() {
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
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold mb-4"
            style={{ background: "#6DB33F", color: "#fff", fontFamily: "var(--font-montserrat)" }}
          >
            Populairste dienst
          </div>
          <p className="site-eyebrow mb-4">Dienst</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Dakcoating ,
            <br />
            <span style={{ color: "#6DB33F" }}>15 jaar bescherming.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            Bescherm uw dak jarenlang tegen vocht, vorst en hergroei. Met schriftelijke garantie en waterafstoottest op locatie.
          </p>
          <Link href="/contact" className="site-btn-primary">
            Gratis diagnose aanvragen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Guarantee highlight ── */}
      <section className="site-pad-sm" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "🛡️", title: "15 jaar garantie", desc: "Schriftelijke garantie op elk coatingproject." },
              { icon: "💧", title: "Waterafstoottest", desc: "Yannick test de coating vóór hij vertrekt." },
              { icon: "📸", title: "Foto-rapportage", desc: "Voor en na foto's zodat u het verschil ziet." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-white mb-1 text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="site-eyebrow mb-4">Waarom dakcoating?</p>
              <h2
                className="font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
              >
                Preventief beschermen
                <span style={{ color: "#6DB33F" }}> is goedkoper dan repareren.</span>
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                Een onbehandeld dak absorbeert vocht, vriest in de winter en slijt sneller. Dakcoating legt een beschermende laag aan die dit voorkomt, tot 15 jaar lang.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                MOS-X gebruikt enkel kwalitatieve coatings die speciaal ontwikkeld zijn voor het Belgische klimaat. De coating is transparant of licht getint, uw dak behoudt zijn oorspronkelijk uitzicht.
              </p>
            </div>
            <div>
              <p className="site-eyebrow mb-4">Inbegrepen in de prijs</p>
              <ul className="space-y-3">
                {[
                  "Gratis drone-inspectie vooraf",
                  "Volledige dakontmossing voor coating",
                  "Kwalitatieve dakcoating (2 lagen)",
                  "Gootreiniging inbegrepen",
                  "Waterafstoottest op locatie",
                  "Schriftelijke garantie 15 jaar",
                  "Foto-rapportage voor en na",
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

      {/* ── Process ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <p className="site-eyebrow mb-4">Werkwijze</p>
          <h2
            className="font-bold text-white mb-10"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
          >
            Vier stappen naar <span style={{ color: "#6DB33F" }}>jarenlange bescherming.</span>
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
                Vraag uw gratis coating-diagnose aan
              </p>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
                Drone-inspectie gratis · Schriftelijke offerte · 15 jaar garantie
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



