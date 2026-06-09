import Link from "next/link";

const steps = [
  {
    n: "01",
    title: "Richtprijs berekenen",
    desc: "Bereken in 30 seconden een realistische richtprijs voor uw dak. Geen verplichtingen, geen persoonlijke gegevens.",
    cta: { label: "Bereken uw richtprijs →", href: "/calculator" },
  },
  {
    n: "02",
    title: "Gratis dakdiagnose",
    desc: "Yannick inspecteert uw dak persoonlijk met een professionele drone. U kijkt live mee op de tablet. Volledig gratis.",
  },
  {
    n: "03",
    title: "Offerte op maat",
    desc: "Na de diagnose ontvangt u een vaste, transparante offerte. Geen verrassingen, geen verborgen kosten. U beslist zonder druk.",
  },
  {
    n: "04",
    title: "Reiniging of coating",
    desc: "Yannick voert het werk persoonlijk uit. Zachte bioreiniging, geen panschade. Coating met schriftelijke garantie tot 15 jaar.",
  },
  {
    n: "05",
    title: "Jarenlang genieten",
    desc: "U ontvangt fotobewijs van het resultaat en een onderhoudstip per post. Over 10 jaar? Dan bellen wij u.",
  },
];

export default function SiteProcess() {
  return (
    <section className="site-pad" id="hoe-het-werkt" style={{ background: "#081012" }}>
      <div className="site-wrap">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="site-eyebrow mb-4">Hoe het werkt</p>
          <h2
            className="font-bold text-white mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Van inspectie tot
            <span style={{ color: "#6DB33F" }}> jarenlange bescherming.</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280" }}>
            Vijf duidelijke stappen. Geen verrassingen. Geen vakjargon.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — centered on the 40px circles (top: 20px = half of 40px) */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: "20px",
              left: "calc(10% + 20px)",
              right: "calc(10% + 20px)",
              height: "1px",
              background: "#1C2E22",
              zIndex: 0,
            }}
          />

          {/* Grid — stretch so all column wrappers are same height */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 relative z-10"
            style={{ gap: "16px", alignItems: "stretch" }}
          >
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-start lg:items-center text-left lg:text-center"
                style={{ height: "100%" }}
              >
                {/* Number badge */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0 mb-5"
                  style={{
                    background: "linear-gradient(135deg, #6DB33F 0%, #5A9A32 100%)",
                    fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                    boxShadow: "0 0 0 4px #081012, 0 0 0 6px rgba(109,179,63,0.30)",
                  }}
                >
                  {parseInt(s.n)}
                </div>

                {/* Card — flex column, fills remaining height */}
                <div
                  className="step-card w-full flex flex-col"
                  style={{
                    flex: 1,
                    background: "#0B1612",
                    border: "1px solid #1C2E22",
                    borderRadius: "14px",
                    padding: "28px 24px",
                  }}
                >
                  <h3
                    className="font-bold text-white leading-snug"
                    style={{
                      fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                      fontSize: "15px",
                      marginBottom: "12px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "#7A8A80",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      flex: 1,
                    }}
                  >
                    {s.desc}
                  </p>

                  {/* CTA button — pinned to bottom of card */}
                  {s.cta && (
                    <Link
                      href={s.cta.href}
                      className="step-cta-btn"
                      style={{
                        display: "block",
                        width: "100%",
                        marginTop: "auto",
                        paddingTop: "16px",
                        background: "rgba(109,179,63,0.12)",
                        border: "1px solid rgba(109,179,63,0.35)",
                        color: "#6DB33F",
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        fontSize: "13px",
                        fontWeight: 600,
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        textDecoration: "none",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        boxSizing: "border-box",
                      }}
                    >
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
