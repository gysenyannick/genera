"use client";

import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Clock } from "lucide-react";

const included = [
  "Volledige visuele inspectie van uw dak",
  "Fotografische documentatie van knelpunten",
  "Eerlijk advies: wat is dringend, wat kan wachten",
  "Vrijblijvende offerte met vaste prijs",
  "Geen verkoopdruk, enkel vakadvies",
];

const steps = [
  { step: "1", title: "U belt of mailt", desc: "Wij plannen een afspraak op uw moment" },
  { step: "2", title: "Yannick komt langs", desc: "Gratis inspectie, gemiddeld 30 min." },
  { step: "3", title: "U ontvangt uw rapport", desc: "Fotorapport + duidelijke offerte" },
];

export default function DiagnosisCta() {
  return (
    <section
      className="relative section-padding overflow-hidden"
      id="diagnose"
      style={{ background: "linear-gradient(170deg, #0A1810 0%, #0F1E15 40%, #1B3A26 100%)" }}
    >
      {/* Decorative lights */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C49A28 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4A7C59 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* Left, Content */}
          <div className="space-y-10">
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#C49A28" }}
              >
                Gratis Dakinspectie
              </p>
              <h2
                className="font-display font-bold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Weet binnen 24u{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #C49A28 0%, #E8C048 60%, #C49A28 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  wat uw dak nodig heeft.
                </span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-white/65">
                Yannick komt bij u thuis, inspecteert uw dak van a tot z en legt u in
                begrijpelijke taal uit wat hij ziet. Volledig gratis, volledig vrijblijvend.
              </p>
            </div>

            {/* What's included */}
            <div
              className="p-7 rounded-3xl space-y-4"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-5">
                Inbegrepen in de gratis inspectie
              </p>
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4A7C59] shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* 3-step process */}
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0"
                    style={{ background: "rgba(196,154,40,0.15)", border: "1px solid rgba(196,154,40,0.25)", color: "#C49A28" }}
                  >
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{s.title}</p>
                    <p className="text-white/50 text-xs mt-0.5">{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden" />
                  )}
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{ background: "rgba(200,56,10,0.1)", border: "1px solid rgba(200,56,10,0.2)" }}
            >
              <Clock className="w-5 h-5 text-[#C8380A] shrink-0" />
              <p className="text-white/70 text-sm">
                <strong className="text-white">Beperkte beschikbaarheid</strong>, Yannick werkt
                alleen. Typisch 3–5 dagen wachttijd. Plan uw gratis inspectie vandaag.
              </p>
            </div>
          </div>

          {/* Right, Contact form / Direct contact */}
          <div
            className="p-8 lg:p-10 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.97)", boxShadow: "0 40px 80px rgba(0,0,0,0.3)" }}
          >
            <h3 className="font-bold text-xl text-[#1A1A18] mb-2">
              Vraag uw gratis inspectie aan
            </h3>
            <p className="text-sm text-[#6B6B5E] mb-7">
              Wij nemen binnen 2 uur contact op om een afspraak in te plannen.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                    Voornaam *
                  </label>
                  <input
                    type="text"
                    placeholder="Jan"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors"
                    style={{ borderColor: "#E0DDD6", background: "#F8F6F2" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                    Achternaam *
                  </label>
                  <input
                    type="text"
                    placeholder="Janssen"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors"
                    style={{ borderColor: "#E0DDD6", background: "#F8F6F2" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  placeholder="0470 00 00 00"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors"
                  style={{ borderColor: "#E0DDD6", background: "#F8F6F2" }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                  E-mailadres
                </label>
                <input
                  type="email"
                  placeholder="jan@voorbeeld.be"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors"
                  style={{ borderColor: "#E0DDD6", background: "#F8F6F2" }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                  Adres dak
                </label>
                <input
                  type="text"
                  placeholder="Kerkstraat 12, 9000 Gent"
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors"
                  style={{ borderColor: "#E0DDD6", background: "#F8F6F2" }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                  Type dak (optioneel)
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors appearance-none"
                  style={{ borderColor: "#E0DDD6", background: "#F8F6F2", color: "#1A1A18" }}
                >
                  <option value="">Selecteer...</option>
                  <option>Dakpannen (keramisch/beton)</option>
                  <option>Leien dak</option>
                  <option>Plat dak</option>
                  <option>Metalen dak</option>
                  <option>Weet niet</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A18] mb-1.5 uppercase tracking-wide">
                  Extra bericht (optioneel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Geef eventueel meer uitleg over uw situatie..."
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1B3A26] transition-colors resize-none"
                  style={{ borderColor: "#E0DDD6", background: "#F8F6F2" }}
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-white text-base transition-all btn-primary-glow"
                style={{
                  background: "linear-gradient(135deg, #C8380A 0%, #a82e08 100%)",
                  boxShadow: "0 6px 24px rgba(200,56,10,0.4)",
                }}
              >
                Gratis inspectie aanvragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center text-[#6B6B5E]">
                Geen spam. Wij contacteren u enkel voor uw aanvraag.
              </p>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-[#E0DDD6]" />
              <span className="text-xs text-[#6B6B5E] font-medium">of contacteer ons direct</span>
              <div className="flex-1 h-px bg-[#E0DDD6]" />
            </div>

            {/* Direct contact */}
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="tel:+32470000000"
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#1B3A26] hover:bg-[#1B3A26] hover:text-white transition-all group"
              >
                <Phone className="w-4 h-4 text-[#1B3A26] group-hover:text-white" />
                <div>
                  <p className="font-bold text-sm text-[#1B3A26] group-hover:text-white">0470 00 00 00</p>
                  <p className="text-xs text-[#6B6B5E] group-hover:text-white/70">Ma–Za · 8–18u</p>
                </div>
              </a>
              <a
                href="mailto:yannick@dakwerken.be"
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#E0DDD6] hover:border-[#1B3A26] transition-all"
              >
                <Mail className="w-4 h-4 text-[#C49A28]" />
                <div>
                  <p className="font-bold text-sm text-[#1A1A18]">Stuur een mail</p>
                  <p className="text-xs text-[#6B6B5E]">Antwoord binnen 4u</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
