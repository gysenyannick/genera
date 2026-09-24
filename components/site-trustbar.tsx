import { Search, Calendar, EuroIcon, Shield } from "lucide-react";

const items = [
  {
    icon: <Search className="w-5 h-5" style={{ color: "#6DB33F" }} />,
    label: "Gratis inspectie",
    desc: "Drone-inspectie inbegrepen",
  },
  {
    icon: <Calendar className="w-5 h-5" style={{ color: "#6DB33F" }} />,
    label: "Binnen 2 weken geholpen",
    desc: "Snelle planning, ook urgent",
  },
  {
    icon: <EuroIcon className="w-5 h-5" style={{ color: "#6DB33F" }} />,
    label: "Geen verborgen kosten",
    desc: "Vaste prijs na diagnose",
  },
  {
    icon: <Shield className="w-5 h-5" style={{ color: "#6DB33F" }} />,
    label: "Volledig verzekerd",
    desc: "Burgerlijke aansprakelijkheid",
  },
];

export default function SiteTrustBar() {
  return (
    <section style={{ background: "#FFFFFF", paddingTop: "40px", paddingBottom: "0" }}>
      <div className="site-wrap">
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{
                  padding: "20px 32px",
                  borderRight: i < items.length - 1 ? "1px solid #EBEBEB" : "none",
                }}
              >
                {/* Icon bubble */}
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(109,179,63,0.10)" }}
                >
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    className="text-[0.8125rem] leading-tight font-bold whitespace-nowrap"
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      color: "#1C1F1A",
                    }}
                  >
                    {item.label}
                  </p>
                  <p className="text-[0.7rem] leading-tight mt-0.5 whitespace-nowrap" style={{ color: "#6B7280" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
