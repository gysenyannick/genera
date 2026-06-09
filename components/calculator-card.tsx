"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Size   = "xs" | "sm" | "md" | "lg";
type Roof   = "pannen" | "leien" | "plat" | "ander";
type Moss   = "weinig" | "gemiddeld" | "veel";

const SIZE_AREAS: Record<Size, number>    = { xs: 40,  sm: 75, md: 125, lg: 180 };
const ROOF_RATE:  Record<Roof, number>    = { pannen: 8.5, leien: 11, plat: 7, ander: 9 };
const MOSS_MULT:  Record<Moss, number>    = { weinig: 1.0, gemiddeld: 1.28, veel: 1.58 };

function calcPrice(size: Size, roof: Roof, moss: Moss) {
  const base   = SIZE_AREAS[size] * ROOF_RATE[roof] * MOSS_MULT[moss];
  const low    = Math.round(base * 0.87 / 10) * 10;
  const high   = Math.round(base * 1.13 / 10) * 10;
  const cLow   = Math.round((low  * 1.45) / 10) * 10;
  const cHigh  = Math.round((high * 1.70) / 10) * 10;
  return { low, high, cLow, cHigh };
}

type BtnGroupProps<T extends string> = {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  small?: boolean;
};

function BtnGroup<T extends string>({ options, value, onChange, small }: BtnGroupProps<T>) {
  return (
    <div className={`grid gap-1.5`} style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}>
      {options.map(o => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`rounded-lg border font-semibold transition-all ${small ? "py-2 text-xs" : "py-2.5 text-[0.8125rem]"}`}
          style={{
            fontFamily: "var(--font-montserrat), system-ui, sans-serif",
            background: value === o.value ? "#6DB33F" : "#fff",
            color: value === o.value ? "#fff" : "#081012",
            borderColor: value === o.value ? "#6DB33F" : "#E5E5E3",
            boxShadow: value === o.value ? "0 2px 8px rgba(109,179,63,0.3)" : "none",
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

interface CalculatorCardProps {
  compact?: boolean; // true = hero right-side card (less padding, tighter layout)
}

export default function CalculatorCard({ compact = false }: CalculatorCardProps) {
  const [size, setSize] = useState<Size>("md");
  const [roof, setRoof] = useState<Roof>("pannen");
  const [moss, setMoss] = useState<Moss>("gemiddeld");
  const [postcode, setPostcode] = useState("");

  const { low, high, cLow, cHigh } = calcPrice(size, roof, moss);

  return (
    <div
      className={`bg-white rounded-2xl ${compact ? "p-5" : "p-6 lg:p-8"}`}
      style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.18), 0 2px 12px rgba(0,0,0,0.1)" }}
    >
      <p
        className="font-bold mb-4 text-[#081012]"
        style={{
          fontFamily: "var(--font-montserrat), system-ui, sans-serif",
          fontSize: compact ? "0.9375rem" : "1.0625rem",
        }}
      >
        Bereken uw dakprijs
      </p>

      <div className={`space-y-${compact ? "3" : "4"}`}>
        {/* Roof size */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Dakoppervlakte
          </label>
          <BtnGroup<Size>
            small={compact}
            options={[
              { value: "xs", label: "<50m²" },
              { value: "sm", label: "50-100" },
              { value: "md", label: "100-150" },
              { value: "lg", label: ">150m²" },
            ]}
            value={size}
            onChange={setSize}
          />
        </div>

        {/* Roof type */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Type dak
          </label>
          <BtnGroup<Roof>
            small={compact}
            options={[
              { value: "pannen", label: "Pannen" },
              { value: "leien",  label: "Leien" },
              { value: "plat",   label: "Plat" },
              { value: "ander",  label: "Ander" },
            ]}
            value={roof}
            onChange={setRoof}
          />
        </div>

        {/* Moss level */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Mosbegroeiing
          </label>
          <BtnGroup<Moss>
            small={compact}
            options={[
              { value: "weinig",    label: "Weinig" },
              { value: "gemiddeld", label: "Gemiddeld" },
              { value: "veel",      label: "Veel" },
            ]}
            value={moss}
            onChange={setMoss}
          />
        </div>

        {/* Postcode */}
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5"
            style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
            Postcode
          </label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={4}
            placeholder="bv. 9000"
            value={postcode}
            onChange={e => setPostcode(e.target.value.replace(/\D/g, ""))}
            className="w-full rounded-lg border px-3 text-sm outline-none transition-colors"
            style={{
              borderColor: "#E5E5E3",
              background: "#FAFAF9",
              height: compact ? "36px" : "40px",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
            onFocus={e => (e.currentTarget.style.borderColor = "#6DB33F")}
            onBlur={e => (e.currentTarget.style.borderColor = "#E5E5E3")}
          />
        </div>

        {/* Price output */}
        <div
          className="rounded-xl p-4"
          style={{ background: "#F4F4F2", border: "1px solid #E5E5E3" }}
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                Reiniging
              </p>
              <p className="font-bold text-[#081012]"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: compact ? "1rem" : "1.125rem" }}>
                €{low.toLocaleString("nl")} – {high.toLocaleString("nl")}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif" }}>
                + Coating
              </p>
              <p className="font-bold"
                style={{ fontFamily: "var(--font-montserrat), system-ui, sans-serif", fontSize: compact ? "1rem" : "1.125rem", color: "#6DB33F" }}>
                €{cLow.toLocaleString("nl")} – {cHigh.toLocaleString("nl")}
              </p>
            </div>
          </div>
          <p className="text-[11px] text-[#6B7280] mt-2">
            Indicatieve richtprijs · Gratis diagnose voor exacte offerte
          </p>
        </div>

        <Link
          href="/contact"
          className="site-btn-primary w-full"
          style={{ borderRadius: "8px" }}
        >
          Gratis dakdiagnose aanvragen
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
