import { CheckCircle, MapPin, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const values = [
  {
    title: "Geen verkooppraatjes",
    desc: "Yannick vertelt u precies wat uw dak nodig heeft, en wat het niet nodig heeft. Eerlijkheid gaat boven omzet.",
  },
  {
    title: "U ziet wat hij ziet",
    desc: "Tijdens de drone-inspectie kijkt u live mee op de tablet. Geen verborgen agenda, complete transparantie.",
  },
  {
    title: "Vaste prijs, geen verrassingen",
    desc: "Na de diagnose ontvangt u een offerte met vaste prijs. Nooit meer betalen dan afgesproken.",
  },
];

const credentials = [
  "Erkend vakman, actief in dakreiniging",
  "Gecertificeerde drone-piloot",
  "Samenwerking met kwalitatieve leveranciers",
  "200+ succesvol gereinigde daken",
  "12 uitstekende klantbeoordelingen",
  "Actief in heel Oost-Vlaanderen",
];

export default function MosxYannick() {
  return (
    <section className="section-pad" id="over-yannick" style={{ background: "#F7F6F2" }}>
      <div className="wrap">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: Yannick visual ── */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              {/* Dark green background, replace with <Image src="/yannick.jpg"> */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, #1A5C36 0%, #0D2E1B 60%, #071910 100%)" }}
              />
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "repeating-linear-gradient(-45deg,rgba(255,255,255,0.5) 0px,rgba(255,255,255,0.5) 1px,transparent 1px,transparent 24px)",
                }}
              />
              {/* Placeholder avatar */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center font-display font-bold text-5xl text-white border-4 mb-4"
                  style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(200,146,10,0.4)" }}
                >
                  Y
                </div>
                <p className="text-white/40 text-sm">Foto Yannick</p>
                <p className="text-white/25 text-xs mt-1">vervang door echte foto</p>
              </div>
              {/* Bottom fade */}
              <div className="absolute bottom-0 inset-x-0 h-2/5"
                style={{ background: "linear-gradient(to top, #0D2E1B 0%, transparent 100%)" }}
              />
              {/* Name card */}
              <div className="absolute bottom-6 inset-x-6">
                <div
                  className="p-5 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="font-display font-bold text-white text-xl mb-1">Yannick</p>
                  <p className="text-[#C8920A] text-sm font-semibold mb-3">Oprichter & Vakspecialist MOS-X</p>
                  <div className="flex items-center gap-2 text-white/40 text-xs">
                    <MapPin className="w-3.5 h-3.5" />Oost-Vlaanderen
                  </div>
                </div>
              </div>
            </div>

            {/* Drone badge, floating */}
            <div
              className="absolute -top-5 -right-5 lg:-right-8 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl"
              style={{
                background: "linear-gradient(135deg, #C8920A 0%, #9e720a 100%)",
                boxShadow: "0 8px 32px rgba(200,146,10,0.4)",
              }}
            >
              <p className="text-2xl mb-1">🚁</p>
              <p className="text-white/90 text-[9px] font-bold uppercase tracking-wide leading-tight">Drone<br />piloot</p>
            </div>

            {/* Reviews badge */}
            <div
              className="absolute -bottom-4 -right-4 lg:-right-8 px-5 py-3 rounded-2xl shadow-xl bg-white"
              style={{ border: "1px solid #E3E0D8" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C8920A] text-sm">★</span>
                  ))}
                </div>
                <div>
                  <p className="font-bold text-xs text-[#111613]">12 reviews</p>
                  <p className="text-[#5C6058] text-[10px]">100% uitstekend</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-4">Over Yannick</p>
              <h2 className="section-headline mb-5">
                Geen groot bedrijf.{" "}
                <span className="italic" style={{ color: "#1A5C36" }}>Een specialist aan uw deur.</span>
              </h2>
              <div className="space-y-4 text-[#5C6058] text-base leading-relaxed">
                <p>
                  Yannick startte MOS-X met één overtuiging: de meeste huiseigenaren worden slecht behandeld door dak-bedrijven die hen niet eerlijk informeren en te weinig uitleggen.
                </p>
                <p>
                  Zijn aanpak is anders. Hij komt zelf langs, altijd. Geen onderaannemers, geen verkoper. Yannick inspecteert uw dak met zijn drone, legt alles uit in gewone taal en geeft u eerlijk advies, ook als dat betekent dat ú géén opdracht uitvoert.
                </p>
                <p>
                  Dat heeft hem 12 uitstekende reviews en meer dan 200 tevreden klanten opgeleverd in minder dan 2 jaar.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white border" style={{ borderColor: "#E3E0D8" }}>
                  <CheckCircle className="w-5 h-5 text-[#1A5C36] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-[#111613] mb-1">{v.title}</p>
                    <p className="text-sm text-[#5C6058] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="p-6 rounded-2xl bg-white border" style={{ borderColor: "#E3E0D8" }}>
              <p className="font-bold text-sm text-[#111613] mb-4">Kwalificaties</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#5C6058]">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1A5C36" }} />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Maak kennis met Yannick
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+32470000000" className="btn-outline-green text-base">
                <Phone className="w-4 h-4" />
                0470 00 00 00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
