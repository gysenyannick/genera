"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { CheckCircle, Calendar, Shield, Star } from "lucide-react";

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
    const onMove = (e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4/3", cursor: "ew-resize" }}
      onTouchMove={onTouchMove}
    >
      {/* BEFORE — full image with green-dark overlay to simulate moss */}
      <div className="absolute inset-0">
        <img
          src="/images/dak-reinigen.webp"
          alt="Voor"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.4) brightness(0.55) hue-rotate(60deg)" }}
          draggable={false}
        />
      </div>

      {/* AFTER — clipped to right of slider */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <img
          src="/images/dak-reinigen.webp"
          alt="Na"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${position}%`, width: "2px", background: "rgba(255,255,255,0.9)", transform: "translateX(-50%)", zIndex: 10 }}
      />

      {/* Drag handle */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: `${position}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.35)",
          zIndex: 11,
          cursor: "ew-resize",
          userSelect: "none",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={() => { dragging.current = true; }}
        onTouchEnd={() => { dragging.current = false; }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M6 4L2 9L6 14" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 4L16 9L12 14" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* VOOR label */}
      <div
        className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md text-[11px] font-bold text-white"
        style={{ background: "rgba(0,0,0,0.65)", zIndex: 10, letterSpacing: "0.08em" }}
      >
        VOOR
      </div>

      {/* NA label */}
      <div
        className="absolute bottom-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold text-white"
        style={{ background: "#6DB33F", zIndex: 10, letterSpacing: "0.08em" }}
      >
        <CheckCircle className="w-3 h-3" /> NA
      </div>
    </div>
  );
}

export default function SiteResults() {
  return (
    <section style={{ background: "#081012", padding: "100px 0" }}>
      <div className="site-wrap">
        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: "48px", alignItems: "center" }}
        >

          {/* Col 1 — Text */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#6DB33F",
                marginBottom: "16px",
              }}
            >
              Zichtbaar verschil
            </p>
            <h2
              className="text-white font-bold leading-tight mb-8"
              style={{
                fontFamily: "var(--font-montserrat), system-ui, sans-serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Resultaten die voor zich spreken.
            </h2>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Verlengt de levensduur van uw dak",
                "Waterafstotend & vuilwerend",
                "Betere uitstraling van uw woning",
                "Waardeverhogend",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#6DB33F" }} />
                  <span style={{ color: "#9CA3AF", fontSize: "15px" }}>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/realisaties"
              className="step-cta-btn inline-block"
              style={{
                background: "rgba(109,179,63,0.12)",
                border: "1px solid rgba(109,179,63,0.35)",
                color: "#6DB33F",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: "8px",
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Bekijk meer realisaties
            </Link>
          </div>

          {/* Col 2 — Before/after slider */}
          <div>
            <BeforeAfterSlider />
          </div>

          {/* Col 3 — Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Stat 1 */}
            <div
              style={{
                background: "#0B1612",
                border: "1px solid #1C2E22",
                borderRadius: "14px",
                padding: "24px",
              }}
            >
              <Calendar className="w-5 h-5 mb-3" style={{ color: "#6DB33F" }} />
              <p
                className="text-white font-bold"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}
              >
                247+
              </p>
              <p style={{ color: "#7A8A80", fontSize: "14px" }}>Daken gereinigd in Vlaanderen</p>
            </div>

            {/* Stat 2 */}
            <div
              style={{
                background: "#0B1612",
                border: "1px solid #1C2E22",
                borderRadius: "14px",
                padding: "24px",
              }}
            >
              <Shield className="w-5 h-5 mb-3" style={{ color: "#6DB33F" }} />
              <p
                className="text-white font-bold"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "32px", lineHeight: 1, marginBottom: "6px" }}
              >
                10+ jaar
              </p>
              <p style={{ color: "#7A8A80", fontSize: "14px" }}>Gemiddelde levensduur verlengd</p>
            </div>

            {/* Stat 3 — Review */}
            <div
              style={{
                background: "#0B1612",
                border: "1px solid #1C2E22",
                borderRadius: "14px",
                padding: "24px",
              }}
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F9A825" }} />
                ))}
              </div>
              <p
                className="text-white font-bold"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: "32px", lineHeight: 1, marginBottom: "10px" }}
              >
                5.0
              </p>
              <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: "1.6", fontStyle: "italic", marginBottom: "6px" }}>
                "Topservice! Ons dak ziet er weer als nieuw uit."
              </p>
              <p style={{ color: "#7A8A80", fontSize: "12px" }}>Familie Deprez, Waregem</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
