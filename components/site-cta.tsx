import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function SiteCta() {
  return (
    <section className="site-pad" style={{ background: "#FFFFFF" }}>
      <div className="site-wrap">
        <div
          className="max-w-[900px] mx-auto text-center"
          style={{
            background: "#F0F7EA",
            border: "1px solid #C8E6B0",
            borderRadius: "20px",
            padding: "clamp(40px, 6vw, 60px) clamp(28px, 8vw, 80px)",
          }}
        >

          {/* Eyebrow */}
          <p className="site-eyebrow mb-5">Klaar voor zekerheid?</p>

          {/* Headline */}
          <h2
            className="font-black leading-tight mb-5"
            style={{ color: "#0F1A1F" }}
            style={{
              fontFamily: "var(--font-montserrat), system-ui, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Weet wat uw dak nodig heeft.
            <br />
            <span style={{ color: "#6DB33F" }}>Gratis. Vandaag nog.</span>
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "#6B7280" }}>
            MOS-X inspecteert uw dak gratis met een professionele drone. U kijkt live mee. Daarna weet u exact wat er speelt, en wat het kost.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link href="/contact" className="site-btn-primary-lg w-full sm:w-auto">
              Gratis dakdiagnose aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+32468352869"
              className="site-btn-outline-dark w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              +32 468 35 28 69
            </a>
          </div>

          {/* Reassurance */}
          <p className="text-sm" style={{ color: "#9CA3AF" }}>
            100% vrijblijvend &nbsp;·&nbsp; Geen verkooppraatjes &nbsp;·&nbsp; Yannick belt u terug binnen 1 werkdag
          </p>
        </div>
      </div>
    </section>
  );
}


