import { Shield, Award, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "850+",
    label: "Gereinigde daken",
    sub: "Oost- & West-Vlaanderen",
  },
  {
    icon: Award,
    value: "15 jaar",
    label: "Vakervaring",
    sub: "In dakreiniging & -onderhoud",
  },
  {
    icon: Shield,
    value: "10 jaar",
    label: "Behandelgarantie",
    sub: "Schriftelijk vastgelegd",
  },
  {
    icon: Clock,
    value: "4.9 / 5",
    label: "Klanttevredenheid",
    sub: "Op basis van 180+ beoordelingen",
  },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-1 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: "#E0DDD6",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white px-6 py-8 flex flex-col items-center text-center group hover:bg-[#F8F6F2] transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #1B3A26 0%, #4A7C59 100%)" }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p
                  className="font-display font-bold text-2xl lg:text-3xl leading-none mb-1"
                  style={{ color: "#1B3A26" }}
                >
                  {s.value}
                </p>
                <p className="font-semibold text-sm text-[#1A1A18] mb-1">{s.label}</p>
                <p className="text-xs text-[#6B6B5E]">{s.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
