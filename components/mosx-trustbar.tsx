import { Award, Smile, Home, Zap } from "lucide-react";

const stats = [
  { icon: Home,  value: "200+",  label: "Gereinigde daken",      sub: "In Oost-Vlaanderen" },
  { icon: Smile, value: "12",    label: "Uitstekende reviews",   sub: "100% tevreden klanten" },
  { icon: Zap,   value: "Gratis", label: "Drone-inspectie",      sub: "Inbegrepen bij diagnose" },
  { icon: Award, value: "~2 jaar", label: "Actief als specialist", sub: "Persoonlijke service" },
];

export default function MosxTrustBar() {
  return (
    <section className="relative bg-white py-0">
      <div className="wrap">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 -mt-10 relative z-10 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
            border: "1px solid #E3E0D8",
          }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white px-5 py-7 flex flex-col items-center text-center gap-3 hover:bg-[#F7F6F2] transition-colors group"
                style={{ borderRight: i < 3 ? "1px solid #E3E0D8" : "none" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg, #1A5C36 0%, #2A7A4B 100%)" }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-display font-bold text-2xl lg:text-3xl leading-none" style={{ color: "#1A5C36" }}>
                  {s.value}
                </p>
                <div>
                  <p className="font-semibold text-[13px] text-[#111613]">{s.label}</p>
                  <p className="text-[11px] text-[#5C6058] mt-0.5">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
