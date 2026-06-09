import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import PageLayout from "@/components/page-layout";

const includes = [
  "Gratis drone-inspectie van uw dak",
  "U kijkt live mee op de tablet",
  "Eerlijk advies zonder verkooppraatjes",
  "Schriftelijke offerte met vaste prijs",
  "Geen verplichtingen na de inspectie",
];

const regions = [
  "Gent", "Aalst", "Dendermonde", "Sint-Niklaas", "Ronse",
  "Wetteren", "Lokeren", "Zottegem", "Oudenaarde", "Ninove",
];

export default function ContactPage() {
  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "#081012" }}>
        <div className="site-wrap relative z-10">
          <p className="site-eyebrow mb-4">Gratis diagnose</p>
          <h1
            className="text-white font-black leading-tight mb-5 max-w-2xl"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Start met een
            <span style={{ color: "#6DB33F" }}> gratis dakdiagnose.</span>
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Vul het formulier in of bel ons direct. Yannick neemt contact op binnen 1 werkdag.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="site-pad" style={{ background: "#081012" }}>
        <div className="site-wrap">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* ── Contact form ── */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p
                className="font-black text-white text-lg mb-6"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                Gratis diagnose aanvragen
              </p>
              <form className="space-y-5" action="#" method="POST">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      name="voornaam"
                      required
                      placeholder="Uw voornaam"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "#081012",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "#fff",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      name="achternaam"
                      required
                      placeholder="Uw achternaam"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "#081012",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="uw@email.be"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "#081012",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#fff",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    name="telefoon"
                    required
                    placeholder="0470 00 00 00"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "#081012",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#fff",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                    Gemeente / Postcode *
                  </label>
                  <input
                    type="text"
                    name="gemeente"
                    required
                    placeholder="bv. Gent of 9000"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "#081012",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#fff",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                    Interesse in (optioneel)
                  </label>
                  <select
                    name="dienst"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "#081012",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    <option value="">Selecteer een dienst...</option>
                    <option value="dakontmossing">Dak ontmossen</option>
                    <option value="dakcoating">Dak coaten</option>
                    <option value="gevelreiniging">Gevel reinigen</option>
                    <option value="dakabonnement">Dakabonnement</option>
                    <option value="platdak">Plat dak reinigen</option>
                    <option value="weet_niet">Weet ik nog niet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-montserrat)" }}>
                    Bericht (optioneel)
                  </label>
                  <textarea
                    name="bericht"
                    rows={4}
                    placeholder="Extra informatie over uw dak of situatie..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={{
                      background: "#081012",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#fff",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="site-btn-primary w-full justify-center text-base"
                >
                  Gratis diagnose aanvragen <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                  100% vrijblijvend · Yannick reageert binnen 1 werkdag · Geen spam
                </p>
              </form>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5">
              {/* What's included */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p
                  className="font-black text-white mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  Wat is inbegrepen?
                </p>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6DB33F" }} />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p
                  className="font-black text-white mb-4"
                  style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
                >
                  Liever direct bellen?
                </p>
                <div className="space-y-3">
                  <a href="tel:+32470000000" className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                    0470 00 00 00
                  </a>
                  <a href="mailto:info@mos-x.be" className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                    info@mos-x.be
                  </a>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    <MapPin className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                    Oost-Vlaanderen
                  </div>
                  <div className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    <Clock className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                    Ma–Za · 8:00–18:00
                  </div>
                </div>
              </div>

              {/* Regions */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "#081012", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-montserrat)" }}
                >
                  Werkgebied
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {regions.map(r => (
                    <span
                      key={r}
                      className="px-2.5 py-1 rounded-full text-[11px]"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      {r}
                    </span>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Ook actief in omliggende gemeenten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}



