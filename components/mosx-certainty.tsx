import { HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const questions = [
  { q: "Is mijn dak nog gezond?",           icon: "🏠" },
  { q: "Moet ik nu al ingrijpen?",           icon: "⏱️" },
  { q: "Wat kost dakreiniging bij mij?",     icon: "💶" },
  { q: "Heb ik een dakcoating nodig?",       icon: "🛡️" },
  { q: "Kan ik nog 5 jaar wachten?",         icon: "📅" },
  { q: "Is mijn gevel ook aan vervanging toe?", icon: "🏗️" },
];

const fears = [
  { title: "Schade door mos", desc: "Mos houdt vocht vast. Dat vocht dringt door in voegen en veroorzaakt scheuren, onzichtbaar van op de grond." },
  { title: "Onverwachte renovatiekosten", desc: "Een verwaarloosd dak slijt 10–15 jaar sneller. Renovatie kost 10× meer dan preventief onderhoud." },
  { title: "Onduidelijke offertes", desc: "De meeste dakreinigers komen langs en sturen een factuur. Zonder uitleg. MOS-X werkt anders." },
];

export default function MosxCertainty() {
  return (
    <section className="section-pad bg-white" id="zekerheid">
      <div className="wrap">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          <div>
            <p className="eyebrow mb-4">De echte vraag</p>
            <h2 className="section-headline mb-6">
              Mensen zoeken geen dakreiniger.
              <br />
              <span className="italic" style={{ color: "#1A5C36" }}>Ze zoeken zekerheid.</span>
            </h2>
            <p className="text-[#5C6058] text-lg leading-relaxed">
              De meeste huiseigenaren weten niet of hun dak gezond is. Ze stellen de beslissing uit, totdat het een urgent probleem wordt. Dát is precies waarom Yannick een gratis diagnose aanbiedt.
            </p>
          </div>

          {/* Question grid */}
          <div>
            <p className="text-sm font-semibold text-[#5C6058] mb-5">Herkent u deze vragen?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {questions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border bg-[#F7F6F2] hover:border-[#1A5C36] hover:bg-[#EAF4EE] transition-all cursor-default"
                  style={{ borderColor: "#E3E0D8" }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-sm font-medium text-[#111613] leading-snug">{item.q}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-5 rounded-2xl flex items-center gap-4"
              style={{ background: "linear-gradient(135deg, #EAF4EE 0%, #D4EBD8 100%)", border: "1px solid rgba(26,92,54,0.15)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#1A5C36" }}
              >
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm text-[#111613] mb-0.5">Yannick beantwoordt alles, gratis</p>
                <p className="text-xs text-[#5C6058]">Na de drone-inspectie weet u precies in welke staat uw dak is.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What people want to avoid */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #071910 0%, #0D2E1B 100%)" }}
        >
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center">
              <div>
                <p className="eyebrow mb-4">Wat huiseigenaren vrezen</p>
                <h3 className="font-display font-bold text-white leading-tight mb-4"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                >
                  De onzekerheid kost u meer dan de reiniging zelf.
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Een gratis diagnose kost u niets. Geen diagnose kan u duizenden euro's kosten.
                </p>
                <Link href="/contact" className="btn-primary-white text-sm">
                  Gratis Diagnose Aanvragen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {fears.map((f, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: "rgba(200,146,10,0.15)" }}
                    >
                      <span className="text-sm font-black" style={{ color: "#C8920A" }}>!</span>
                    </div>
                    <p className="font-bold text-white text-sm mb-2">{f.title}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
