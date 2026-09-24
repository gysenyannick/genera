"use client";

import { CheckCircle, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const included = [
  "Volledige drone-inspectie van uw dak",
  "Live meekijken op de tablet van Yannick",
  "Eerlijk rapport met foto's en bevindingen",
  "Duidelijke richtprijs, geen verborgen kosten",
  "Advies wat u écht nodig hebt (ook als dat niets is)",
  "Geen verkoopdruk, u beslist zelf",
];

const steps = [
  { n: "1", title: "U vraagt aan", desc: "Via dit formulier, telefoon of WhatsApp" },
  { n: "2", title: "Afspraak ingepland", desc: "Binnen 3–5 werkdagen bij u thuis" },
  { n: "3", title: "Drone-inspectie", desc: "Yannick inspecteert, u kijkt live mee" },
  { n: "4", title: "Rapport & prijs", desc: "Diezelfde dag, duidelijk en eerlijk" },
];

export default function MosxDiagnosis() {
  return (
    <section
      className="relative section-pad overflow-hidden"
      id="diagnose"
      style={{ background: "linear-gradient(165deg, #071910 0%, #0D2E1B 50%, #071910 100%)" }}
    >
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #C8920A 0%, transparent 70%)", filter: "blur(50px)" }}
      />
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1A5C36 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="wrap relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* ── Left: Content ── */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-4">Gratis Dakdiagnose</p>
              <h2
                className="font-display font-bold text-white leading-tight mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Weet exact wat uw dak{" "}
                <span className="italic" style={{ color: "#C8920A" }}>nodig heeft.</span>
                <br />Gratis. Vandaag.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                MOS-X biedt de enige gratis dakdiagnose met drone-inspectie in Oost-Vlaanderen. U betaalt niets. U verplicht u tot niets. Maar u weet nadien precies hoe uw dak ervoor staat.
              </p>
            </div>

            {/* What's included */}
            <div
              className="p-7 rounded-3xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-5">Inbegrepen</p>
              <div className="space-y-3.5">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#3D9962] shrink-0" />
                    <span className="text-white/75 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                    style={{ background: "rgba(200,146,10,0.15)", border: "1px solid rgba(200,146,10,0.25)", color: "#C8920A" }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{s.title}</p>
                    <p className="text-white/40 text-xs">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div
              className="flex items-center gap-3 p-4 rounded-2xl"
              style={{ background: "rgba(200,146,10,0.08)", border: "1px solid rgba(200,146,10,0.15)" }}
            >
              <Clock className="w-5 h-5 text-[#C8920A] shrink-0" />
              <p className="text-white/65 text-sm">
                <strong className="text-white">Yannick werkt alleen</strong>, beschikbaarheid is beperkt. Plan uw gratis diagnose tijdig in.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="p-8 lg:p-10 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.97)", boxShadow: "0 40px 80px rgba(0,0,0,0.3)" }}
          >
            <h3 className="font-bold text-xl text-[#111613] mb-1">Gratis diagnose aanvragen</h3>
            <p className="text-sm text-[#5C6058] mb-7">
              Yannick neemt contact op binnen 1 werkdag.
            </p>

            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Voornaam *", placeholder: "Jan" },
                  { label: "Achternaam *", placeholder: "Janssen" },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111613] mb-1.5">{f.label}</label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1A5C36] transition-colors"
                      style={{ borderColor: "#E3E0D8", background: "#F7F6F2" }}
                    />
                  </div>
                ))}
              </div>

              {[
                { label: "Telefoonnummer *", type: "tel", placeholder: "0470 00 00 00" },
                { label: "E-mailadres", type: "email", placeholder: "jan@voorbeeld.be" },
                { label: "Adres dak (straat + gemeente) *", type: "text", placeholder: "Kerkstraat 12, 9000 Gent" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111613] mb-1.5">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1A5C36] transition-colors"
                    style={{ borderColor: "#E3E0D8", background: "#F7F6F2" }}
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111613] mb-1.5">
                  Waarvoor wilt u een diagnose?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1A5C36] transition-colors appearance-none"
                  style={{ borderColor: "#E3E0D8", background: "#F7F6F2", color: "#111613" }}
                >
                  <option value="">Selecteer dienst...</option>
                  <option>Dakontmossing</option>
                  <option>Dakcoating</option>
                  <option>Gevelreiniging</option>
                  <option>Meerdere diensten / Weet niet</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#111613] mb-1.5">
                  Extra opmerkingen (optioneel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Vertel ons meer over uw situatie..."
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-[#1A5C36] transition-colors resize-none"
                  style={{ borderColor: "#E3E0D8", background: "#F7F6F2" }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-base py-4"
                style={{ borderRadius: "0.875rem" }}
              >
                Gratis Diagnose Aanvragen
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-center text-[#5C6058]">Gratis · Vrijblijvend · Geen verplichting</p>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px" style={{ background: "#E3E0D8" }} />
              <span className="text-xs text-[#5C6058] font-medium">of contacteer direct</span>
              <div className="flex-1 h-px" style={{ background: "#E3E0D8" }} />
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a href="tel:+32470000000"
                className="flex items-center gap-3 p-4 rounded-xl border-2 hover:border-[#1A5C36] hover:bg-[#EAF4EE] transition-all group"
                style={{ borderColor: "#E3E0D8" }}
              >
                <Phone className="w-4 h-4 text-[#1A5C36]" />
                <div>
                  <p className="font-bold text-sm text-[#111613]">0470 00 00 00</p>
                  <p className="text-xs text-[#5C6058]">Ma–Za · 8–18u</p>
                </div>
              </a>
              <a href="mailto:info@mos-x.be"
                className="flex items-center gap-3 p-4 rounded-xl border-2 hover:border-[#1A5C36] transition-all"
                style={{ borderColor: "#E3E0D8" }}
              >
                <Mail className="w-4 h-4 text-[#C8920A]" />
                <div>
                  <p className="font-bold text-sm text-[#111613]">info@mos-x.be</p>
                  <p className="text-xs text-[#5C6058]">Antwoord &lt; 4u</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
