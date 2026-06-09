import { HelpCircle, TrendingUp, AlertTriangle, Layers } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fears = [
  {
    icon: <HelpCircle className="w-7 h-7" style={{ color: "#6DB33F" }} />,
    title: "Is mijn dak nog gezond?",
    body: "Mos en algen houd je niet tegen met één oogopslag. Toch tasten ze langzaam de dakpan aan, van binnenuit. U merkt het pas als het te laat is.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" style={{ color: "#6DB33F" }} />,
    title: "Wat kost ingrijpen eigenlijk?",
    body: "Prijzen variëren sterk online. Hoe weet u of u niet te veel betaalt, of dat de goedkopere offerte later duurder uitvalt?",
  },
  {
    icon: <AlertTriangle className="w-7 h-7" style={{ color: "#6DB33F" }} />,
    title: "Risico op grotere schade?",
    body: "Een verwaarloosde dakgoot of een barst die onontdekt blijft, kan leiden tot lekkage en dure herstellingen. Hoe lang kunt u nog wachten?",
  },
  {
    icon: <Layers className="w-7 h-7" style={{ color: "#6DB33F" }} />,
    title: "Reinigen of meteen vervangen?",
    body: "Wanneer is reinigen voldoende en wanneer moet u meer doen? En wie vertelt u dat eerlijk, zonder zijn eigen diensten te verkopen?",
  },
];

export default function SiteProblems() {
  return (
    <section className="site-pad" style={{ background: "#F4F4F2" }} id="problemen">
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="site-eyebrow mb-4">Herkent u dit?</p>
          <h2 className="site-h2 mb-4">
            De meeste huiseigenaren twijfelen.<br />
            <span style={{ color: "#6DB33F" }}>MOS-X geeft u zekerheid.</span>
          </h2>
          <p className="text-base text-[#6B7280] leading-relaxed">
            U weet dat er iets aan de hand is met uw dak. Maar wat precies, en hoe dringend? Dat zijn de vragen die 's nachts door uw hoofd spelen.
          </p>
        </div>

        {/* Fear cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {fears.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col site-shadow"
              style={{ border: "1px solid #EBEBEA" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
                style={{ background: "rgba(109,179,63,0.08)" }}
              >
                {f.icon}
              </div>
              <h3
                className="font-bold text-[#081012] mb-3 text-[0.9375rem]"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed flex-1">{f.body}</p>
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 p-7 rounded-2xl"
          style={{ background: "#fff", border: "1px solid #EBEBEA" }}
        >
          <div>
            <p
              className="font-bold text-[#081012] mb-1"
              style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}
            >
              Stop met gissen. Weet het zeker.
            </p>
            <p className="text-sm text-[#6B7280]">
              Yannick inspecteert uw dak gratis met drone, en geeft u een eerlijk antwoord.
            </p>
          </div>
          <Link href="/contact" className="site-btn-primary shrink-0">
            Gratis diagnose <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
