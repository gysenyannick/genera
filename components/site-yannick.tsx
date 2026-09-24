import { CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  { label: "Eerlijk", desc: "Yannick vertelt u wat uw dak nodig heeft. Niets meer, niets minder." },
  { label: "Transparant", desc: "U ziet wat hij ziet, live via drone. Geen verborgen agenda." },
  { label: "Vakman",      desc: "200+ daken. Hij kent zijn stiel en werkt met de beste materialen." },
];

const creds = [
  "Gecertificeerde drone-piloot",
  "200+ gereinigde daken",
  "12 ★★★★★ beoordelingen",
  "Erkend vakman dakreiniging",
  "Samenwerking met A-merkleveranciers",
  "Actief in heel Oost-Vlaanderen",
];

export default function SiteYannick() {
  return (
    <section className="site-pad bg-white" id="over-yannick">
      <div className="site-wrap">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: Yannick photo ── */}
          <div className="relative">
            {/* Photo placeholder */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, #2a3828 0%, #081012 100%)" }}
              />
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 24px)",
                }}
              />
              {/* Avatar center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center font-black text-white text-5xl border-4 mb-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(109,179,63,0.4)",
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                  }}
                >
                  Y
                </div>
                <p className="text-white/30 text-sm">Foto Yannick</p>
                <p className="text-white/15 text-xs mt-0.5">vervang door echte foto</p>
              </div>
              {/* Bottom fade */}
              <div
                className="absolute bottom-0 inset-x-0 h-2/5"
                style={{ background: "linear-gradient(to top, #081012 0%, transparent 100%)" }}
              />
              {/* Name card */}
              <div className="absolute bottom-6 inset-x-6">
                <div
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.09)" }}
                >
                  <p className="font-black text-white text-lg mb-0.5"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    Yannick
                  </p>
                  <p className="text-[#6DB33F] text-xs font-semibold mb-2"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    Oprichter & Vakspecialist MOS-X
                  </p>
                  <div className="flex items-center gap-1.5 text-white/35 text-xs">
                    <MapPin className="w-3 h-3" /> Oost-Vlaanderen
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div
              className="absolute -top-5 -right-4 lg:-right-6 w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl"
              style={{ background: "linear-gradient(135deg, #6DB33F 0%, #5A9A32 100%)" }}
            >
              <p className="text-2xl mb-0.5">🚁</p>
              <p className="text-white text-[9px] font-bold uppercase tracking-wide leading-tight">Drone<br />piloot</p>
            </div>

            <div
              className="absolute -bottom-4 -right-4 lg:-right-6 px-4 py-3 rounded-xl bg-white shadow-lg"
              style={{ border: "1px solid #EBEBEA" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-base">⭐</span>
                <div>
                  <p className="font-black text-xs text-[#081012]"
                    style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                    12 reviews
                  </p>
                  <p className="text-[10px] text-[#6B7280]">100% uitstekend</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Story ── */}
          <div>
            <p className="site-eyebrow mb-4">Over Yannick</p>
            <h2 className="site-h2 mb-6">
              Geen anoniem bedrijf.
              <span style={{ color: "#6DB33F" }}> Een vakman aan uw deur.</span>
            </h2>

            <div className="space-y-4 text-[#6B7280] text-[0.9375rem] leading-relaxed mb-8">
              <p>
                Yannick startte MOS-X omdat hij zag hoe huiseigenaren keer op keer worden misleid: te hoge prijzen, onvolledige inspecties, en servicemensen die meer willen verkopen dan eerlijk adviseren.
              </p>
              <p>
                Zijn aanpak is anders. Hij komt altijd zelf, nooit onderaannemers. Hij inspecteert uw dak met zijn drone en toont u precies wat er speelt. En als er niets nodig is, zegt hij dat.
              </p>
              <p>
                In minder dan 2 jaar: 200+ daken, 12 uitstekende reviews, nul klachten.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ background: "#F4F4F2", border: "1px solid #EBEBEA" }}>
                  <CheckCircle className="w-5 h-5 text-[#6DB33F] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-[#081012] mb-0.5"
                      style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                      {v.label}
                    </p>
                    <p className="text-xs text-[#6B7280]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="p-5 rounded-xl mb-8" style={{ background: "#F4F4F2", border: "1px solid #EBEBEA" }}>
              <p className="font-bold text-xs text-[#081012] mb-3"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                Kwalificaties
              </p>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {creds.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#6B7280]">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#6DB33F" }} />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="site-btn-primary">
                Maak kennis met Yannick <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+32470000000" className="site-btn-outline-dark">
                <Phone className="w-4 h-4" /> 0470 00 00 00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
