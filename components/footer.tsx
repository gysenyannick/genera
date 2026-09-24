import { Phone, Mail, MapPin, Star } from "lucide-react";

const serviceLinks = [
  { label: "Dakreiniging", href: "#diensten" },
  { label: "Mosverwijdering", href: "#diensten" },
  { label: "Dak-Coating", href: "#diensten" },
  { label: "Dakinspectie", href: "#diensten" },
  { label: "Gootreiniging", href: "#diensten" },
  { label: "Kleine Reparaties", href: "#diensten" },
];

const navLinks = [
  { label: "Realisaties", href: "#realisaties" },
  { label: "Prijscalculator", href: "#calculator" },
  { label: "Over Yannick", href: "#yannick" },
  { label: "Beoordelingen", href: "#beoordelingen" },
  { label: "FAQ", href: "#faq" },
  { label: "Gratis Diagnose", href: "#diagnose" },
];

const regions = [
  "Gent", "Brugge", "Kortrijk", "Aalst", "Dendermonde",
  "Roeselare", "Oostende", "Sint-Niklaas", "Ronse", "Menen",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A1810" }}>

      {/* Main footer */}
      <div className="container-tight py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1B3A26 0%, #4A7C59 100%)" }}
              >
                <span className="text-[#C49A28] font-bold text-sm font-display">DY</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Dakwerken Yannick</p>
                <p className="text-[#C49A28] text-[10px] tracking-widest uppercase font-medium">
                  Premium Dakreiniging
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Specialist in dakreiniging, mosverwijdering en dak-coating.
              Persoonlijke service, schriftelijke garantie.
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#C49A28] text-[#C49A28]" />
              ))}
              <span className="text-white/40 text-xs ml-2">4.9/5 · 180+ reviews</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-5">
              Diensten
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-5">
              Navigatie
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#C49A28] mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+32470000000"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C49A28] shrink-0" />
                  0470 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:yannick@dakwerken.be"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C49A28] shrink-0" />
                  yannick@dakwerken.be
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#C49A28] shrink-0 mt-0.5" />
                <span>Oost- & West-Vlaanderen<br />Ma–Za · 8u–18u</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#diagnose"
                className="inline-flex items-center justify-center w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-all"
                style={{
                  background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                  boxShadow: "0 4px 16px rgba(200,56,10,0.35)",
                }}
              >
                Gratis Diagnose →
              </a>
            </div>
          </div>
        </div>

        {/* Service area */}
        <div
          className="mt-14 pt-10 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-white/20 mb-4">
            Actief in
          </p>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <span
                key={r}
                className="px-3 py-1 rounded-full text-xs text-white/30"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {r}
              </span>
            ))}
            <span
              className="px-3 py-1 rounded-full text-xs text-white/30"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              + heel Oost- & West-Vlaanderen
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Dakwerken Yannick. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/50 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white/50 transition-colors">Algemene Voorwaarden</a>
            <a href="#" className="hover:text-white/50 transition-colors">BTW: BE 0.XXX.XXX.XXX</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
