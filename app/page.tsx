"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Home, Building2, Factory, ClipboardList,
  ArrowRight, Phone, Mail, MapPin,
  CheckCircle2, ChevronDown, Menu, X,
  Shield, Clock, Users, Star, TrendingUp,
  BarChart3, AlertTriangle, ThumbsUp,
} from "lucide-react";

/* ─── inView hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── DATA ─── */
const services = [
  {
    icon: Home, label: "Residentieel", id: "residential",
    title: "Voor woningen & villa's",
    items: ["Dakreiniging & mosverwijdering", "Gevelreiniging", "Oprit & terras", "Dakgoten", "Zonnepanelen", "Buitenmuren"],
    accent: "sky",
  },
  {
    icon: Building2, label: "Commercieel", id: "commercial",
    title: "Voor bedrijven & retail",
    items: ["Gebouw & gevel", "Etalage & ramen", "Parkings", "Graffiti removal", "Regelmatige contracten", "Horeca & winkels"],
    accent: "violet",
  },
  {
    icon: Factory, label: "Industrieel", id: "industrial",
    title: "Voor magazijnen & fabrieken",
    items: ["Hogedrukreiniging", "Magazijn & hal", "Laadkaai", "Ontvetting", "Grote oppervlakken", "Site sanering"],
    accent: "amber",
  },
  {
    icon: ClipboardList, label: "Vastgoedbeheer", id: "maintenance",
    title: "Voor syndici & investeerders",
    items: ["Onderhoudspakketten", "Schilderwerk", "Kleine herstellingen", "Coatings & protectie", "Preventief onderhoud", "Renovatiecoördinatie"],
    accent: "emerald",
  },
];

const problems = [
  "Drie aannemers voor één eigendom — niemand coördineert",
  "Geen vaste afspraken, werk dat niet gedaan wordt op tijd",
  "Offertes die niet overeenkomen met de eindfactuur",
  "Elk seizoen opnieuw zoeken naar beschikbare vakmannen",
];

const whyItems = [
  { icon: Users, title: "Één aanspreekpunt", desc: "Van reiniging tot onderhoud tot bescherming — wij coördineren alles. U heeft één contactpersoon voor uw volledig eigendom." },
  { icon: ClipboardList, title: "Transparante offertes", desc: "Vaste prijs, geen verrassingen. U weet exact wat er gedaan wordt, wanneer en waarom — voor en na elk bezoek." },
  { icon: Clock, title: "Geplande service", desc: "Onderhoudspakketten worden vooraf ingepland. Uw eigendom wordt nooit verwaarloosd doordat niemand opdaagt." },
  { icon: TrendingUp, title: "Gebouwd om te groeien", desc: "Van één woning tot een portfolio van 50 panden. Onze structuur schaalt mee met uw vastgoednoden." },
  { icon: Shield, title: "Gecertificeerd & verzekerd", desc: "Volledig gedekt, professioneel materieel en een team dat staat voor zijn werk. Geen risico voor u." },
  { icon: BarChart3, title: "Documentatie & rapportage", desc: "Elk bezoek wordt gedocumenteerd. Jaarlijkse rapporten voor uw archief, syndic of verzekering." },
];

const steps = [
  { n: "01", title: "Gratis plaatsbezoek", desc: "We komen ter plaatse om uw eigendom te beoordelen — geen kostprijs, geen verplichtingen." },
  { n: "02", title: "Offerte op maat", desc: "Binnen 24u ontvangt u een gedetailleerde, vaste offerte. Geen vage schattingen." },
  { n: "03", title: "Uitvoering & opvolging", desc: "Ons team voert de opdracht uit. U ontvangt een rapport met foto's voor en na." },
  { n: "04", title: "Langetermijn partnerschap", desc: "Op basis van uw behoeften stellen we een onderhoudspakket voor. Één partner, jaar na jaar." },
];

const packages = [
  {
    name: "Enkel Project", badge: null, featured: false,
    desc: "Voor een eenmalige reiniging of behandeling. Dezelfde kwaliteit en transparantie als onze vaste klanten.",
    items: ["Gratis plaatsbezoek", "Vaste offerte", "Geplande uitvoering", "Fotodocumentatie", "24u reactietijd"],
    cta: "Offerte Aanvragen",
  },
  {
    name: "Onderhoudspakket", badge: "Meest Populair", featured: true,
    desc: "Terugkerende service voor eigenaars die hun pand het hele jaar door verzorgd willen houden zonder er zelf aan te denken.",
    items: ["Alles van Enkel Project", "Geplande terugkerende bezoeken", "Prioriteitsservice", "Jaarlijks vastgoedrapport", "Kortingen op extra diensten", "Dedicated contactpersoon"],
    cta: "Pakket Aanvragen",
  },
  {
    name: "Portfolio Contract", badge: "Enterprise", featured: false,
    desc: "Voor syndici en investeerders met meerdere panden. Volledig beheer onder één contract.",
    items: ["Multi-site beheer", "Aangepast schema", "Dedicated accountmanager", "Volledige rapportage", "Schaalbaar met portfolio", "SLA-garantie"],
    cta: "Neem Contact Op",
  },
];

const testimonials = [
  { initials: "JD", name: "Jan De Smedt", role: "Woningeigenaar, Antwerpen", quote: "X-GROUP heeft onze volledige oprit, gevel en dakgoten in één bezoek aangepakt. Exact wat beloofd werd, voor de prijs die afgesproken was." },
  { initials: "SV", name: "Sophie Vermeersch", role: "Syndicus, Brussel", quote: "Ik beheer 14 appartementsgebouwen. X-GROUP is nu mijn vaste partner voor alle buitenreinigingen. Betrouwbaar, gedocumenteerd en één aanspreekpunt voor alles." },
  { initials: "MK", name: "Mark Kowalski", role: "Logistiek Manager, Gent", quote: "Ons magazijn van 8.000m² was toe aan een grondige reiniging. Professioneel, op tijd en binnen budget. Aanrader voor elke industriële site." },
];

const marqueeItems = ["RESIDENTIEEL", "COMMERCIEEL", "INDUSTRIEEL", "VASTGOEDBEHEER", "SYNDICI", "INVESTEERDERS", "BELGIË", "PROFESSIONEEL"];

/* ─── NAV ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [["#services","Diensten"],["#why","Waarom X-GROUP"],["#process","Werkwijze"],["#pricing","Pakketten"]];
  return (
    <>
      <div className="bg-sky-500 py-2.5 text-center text-xs font-medium text-white/90 px-4 relative z-50">
        ✦ Nieuw: Jaarlijkse onderhoudspakketten — prioriteitstoegang &amp; premium vastgoedzorg.{" "}
        <a href="#pricing" className="font-bold underline hover:no-underline">Meer info →</a>
      </div>
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "bg-[#07080d]/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
          <a href="#" className="text-xl font-black tracking-[-0.04em] flex-shrink-0">
            <span className="text-sky-500">X</span><span className="text-white">-GROUP</span>
          </a>
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="text-white/50 hover:text-white text-sm font-medium px-3.5 py-2 rounded-full transition-all hover:bg-white/[0.05]">{label}</a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex flex-shrink-0">
            <a href="#contact">Offerte Aanvragen <ArrowRight className="w-3.5 h-3.5" /></a>
          </Button>
          <button onClick={() => setOpen(true)} className="md:hidden text-white/60 hover:text-white p-1.5">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-[#07080d]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-7">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white"><X className="w-6 h-6" /></button>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="text-2xl font-bold text-white/70 hover:text-white transition-colors">{label}</a>
          ))}
          <Button asChild size="lg" className="mt-4">
            <a href="#contact" onClick={() => setOpen(false)}>Offerte Aanvragen <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      )}
    </>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100svh" }}>
      <div className="absolute inset-0 bg-[#07080d]" />
      <div className="absolute inset-0" style={{background:"radial-gradient(ellipse 80% 60% at 65% 40%, rgba(14,165,233,0.08) 0%, transparent 65%)"}} />
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",backgroundSize:"64px 64px"}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "calc(100svh - 76px)", paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">
          {/* Text */}
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2.5 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 border border-sky-500/20 bg-sky-500/[0.07] rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse-dot" />
              Beschikbaar in heel België
            </div>
            <h1 className="animate-fade-up delay-100 font-black leading-[1.0] tracking-[-0.045em] text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)" }}>
              The Property<br />
              <span className="gradient-text-blue">Care Solution.</span>
            </h1>
            <p className="animate-fade-up delay-200 text-[1.05rem] leading-relaxed text-white/50 mb-9 max-w-[460px]">
              Professionele reiniging, onderhoud, bescherming en verbetering voor{" "}
              <span className="text-white/75 font-semibold">residentieel, commercieel en industrieel</span>{" "}
              vastgoed in België.
            </p>
            <div className="animate-fade-up delay-300 flex flex-wrap gap-3 mb-10">
              <Button asChild size="xl">
                <a href="#contact">Gratis Offerte Aanvragen <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="tel:+32"><Phone className="w-4 h-4" /> Bel ons</a>
              </Button>
            </div>
            <div className="animate-fade-up delay-400 flex flex-wrap gap-x-7 gap-y-2.5">
              {["Gecertificeerd & verzekerd", "Reactie binnen 24u", "Vaste transparante prijs"].map(t => (
                <span key={t} className="flex items-center gap-2 text-[0.8rem] text-white/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500/60 flex-shrink-0" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* Image card */}
          <div className="animate-fade-up delay-200 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.07]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
                alt="Professional property cleaning"
                className="w-full object-cover object-center"
                style={{ aspectRatio: "4/3", filter: "brightness(0.72) saturate(0.9)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-[#07080d]/85 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-sky-500/15 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-[0.78rem] font-bold text-white leading-tight">100% Professioneel</p>
                  <p className="text-[0.7rem] text-white/40">Gecertificeerd &amp; volledig verzekerd</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {[{n:"4",l:"Markten"},{n:"20+",l:"Diensten"}].map(s => (
                  <div key={s.l} className="bg-[#07080d]/82 backdrop-blur-xl border border-white/10 rounded-lg px-3 py-2 text-right">
                    <p className="text-lg font-black text-white leading-none">{s.n}</p>
                    <p className="text-[0.62rem] uppercase tracking-widest text-white/40 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 text-[0.6rem] tracking-[0.2em] uppercase z-10">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

/* ─── MARQUEE ─── */
function MarqueeStrip() {
  return (
    <div className="border-y border-white/[0.05] bg-white/[0.01] py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((n, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-8 text-[0.65rem] font-bold tracking-[0.22em] text-white/18 uppercase">
            <span className="w-1 h-1 rounded-full bg-sky-500/25" />{n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── PROBLEM ─── */
function ProblemSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-amber-400 mb-4">Herkent u dit?</span>
            <h2 className="font-black tracking-[-0.035em] text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Vastgoedbeheer is{" "}
              <span className="gradient-text-blue">ingewikkeld genoeg.</span>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-lg mx-auto leading-relaxed">
              De meeste eigenaars en beheerders verloren al tijd, geld en energie aan dezelfde frustraties.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-3.5 p-5 rounded-xl border border-red-500/10 bg-red-500/[0.035]">
                <AlertTriangle className="w-4.5 h-4.5 text-red-400/60 flex-shrink-0 mt-0.5" />
                <p className="text-[0.88rem] text-white/55 leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.06] p-7 md:p-9">
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                <ThumbsUp className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-[0.7rem] font-bold tracking-widest uppercase text-sky-400 mb-2">De X-GROUP oplossing</p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">Eén partner. Volledig ontzorgd.</h3>
                <p className="text-white/55 leading-relaxed max-w-2xl text-[0.92rem]">
                  X-GROUP neemt de volledige coördinatie over. Van reiniging tot schilderwerk, van dakgoten tot industriële sanering. U heeft één aanspreekpunt, één factuur en één plan — voor elk eigendom in uw portfolio.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const accentMap: Record<string, string> = {
  sky: "border-sky-500/20 from-sky-500/[0.08]",
  violet: "border-violet-500/20 from-violet-500/[0.08]",
  amber: "border-amber-500/20 from-amber-500/[0.08]",
  emerald: "border-emerald-500/20 from-emerald-500/[0.08]",
};

function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 border-t border-white/[0.05] bg-[#0a0b12]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 mb-4">Wat We Doen</span>
            <h2 className="font-black tracking-[-0.035em] text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Volledig vastgoedonderhoud<br />
              <span className="gradient-text">voor elke sector</span>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-xl mx-auto leading-relaxed">
              Van een eenvoudige woningreiniging tot een industrieel onderhoudscontract — X-GROUP levert consistente kwaliteit.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <div className={`h-full card-hover rounded-2xl border ${accentMap[s.accent]} bg-gradient-to-b to-transparent p-6 flex flex-col`}>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center mb-5 flex-shrink-0">
                  <s.icon className="w-5 h-5 text-white/65" />
                </div>
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-white/30 mb-2">{s.label}</span>
                <h3 className="text-[0.97rem] font-bold text-white mb-4 leading-snug">{s.title}</h3>
                <ul className="flex-1 space-y-2 mb-6">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-[0.78rem] text-white/45">
                      <span className="w-1 h-1 rounded-full bg-sky-500/50 mt-1.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="text-[0.78rem] font-semibold text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1">
                  Meer info <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function StatsBar() {
  return (
    <div className="border-y border-white/[0.05] py-12 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {[{n:"4",l:"Marktsegmenten"},{n:"20+",l:"Diensten"},{n:"1",l:"Aanspreekpunt"},{n:"24u",l:"Reactietijd"},{n:"100%",l:"Verzekerd"}].map(item => (
          <div key={item.l}>
            <p className="text-[2.4rem] font-black text-white tracking-tight leading-none mb-1.5">{item.n}</p>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/28">{item.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── WHY ─── */
function WhySection() {
  return (
    <section id="why" className="py-28 px-6 bg-[#0a0b12] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 mb-5">Waarom X-GROUP</span>
              <h2 className="font-black tracking-[-0.04em] text-white leading-tight mb-6" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                Niet zomaar een<br />
                <span className="gradient-text-blue">reinigingsbedrijf.</span>
              </h2>
              <p className="text-white/50 text-[1.05rem] leading-relaxed mb-8">
                X-GROUP is gebouwd als een professionele property services organisatie — gestructureerd, betrouwbaar en ontworpen om te schalen. Van een eengezinswoning tot een industrieel complex.
              </p>
              <Button asChild size="lg">
                <a href="#contact">Start met een gratis bezoek <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <p className="text-[0.84rem] text-white/38 italic leading-relaxed mb-4">
                  "X-GROUP start waar de nood het grootst is — buitenreiniging en preventief onderhoud. Het doel is duidelijk: uitgroeien tot de meest betrouwbare vastgoedzorgpartner in België."
                </p>
                <p className="text-sm font-bold text-white">X-GROUP Belgium</p>
                <p className="text-[0.68rem] uppercase tracking-widest text-sky-400 font-semibold mt-0.5">Professionele Property Care</p>
              </div>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyItems.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-hover h-full rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/15 flex items-center justify-center mb-4">
                    <item.icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <h4 className="text-[0.9rem] font-bold text-white mb-2 leading-snug">{item.title}</h4>
                  <p className="text-[0.78rem] text-white/42 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ─── */
function ProcessSection() {
  return (
    <section id="process" className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 mb-4">Werkwijze</span>
            <h2 className="font-black tracking-[-0.035em] text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Van eerste contact<br />
              <span className="gradient-text">tot langdurig partnerschap</span>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-lg mx-auto">
              Een helder, voorspelbaar proces — zodat u altijd weet waar u staat.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-sky-500/15 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center group">
                <div className="w-20 h-20 rounded-2xl border border-sky-500/20 bg-sky-500/[0.07] flex items-center justify-center mx-auto mb-6 group-hover:border-sky-500/40 group-hover:bg-sky-500/[0.12] transition-all duration-300">
                  <span className="text-2xl font-black text-sky-400/75 tracking-tighter">{s.n}</span>
                </div>
                <h4 className="text-[0.95rem] font-bold text-white mb-3">{s.title}</h4>
                <p className="text-[0.8rem] text-white/42 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ─── */
function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-6 border-t border-white/[0.05] bg-[#0a0b12]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 mb-4">Pakketten</span>
            <h2 className="font-black tracking-[-0.035em] text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Van eenmalig<br />
              <span className="gradient-text">tot langdurig</span>
            </h2>
            <p className="text-white/45 text-[1.05rem] max-w-lg mx-auto">
              Geen verborgen kosten. Elke prijs wordt vooraf bevestigd in een schriftelijke offerte.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`relative rounded-2xl p-7 flex flex-col card-hover ${
                pkg.featured
                  ? "border border-sky-500 bg-gradient-to-b from-sky-500/[0.09] to-sky-500/[0.03] shadow-[0_0_0_1px_rgba(14,165,233,0.15),0_16px_48px_rgba(14,165,233,0.1)]"
                  : "border border-white/[0.07] bg-white/[0.02]"
              }`}>
                {pkg.badge && (
                  <div className={`absolute -top-px left-1/2 -translate-x-1/2 text-[0.62rem] font-bold uppercase tracking-widest px-4 py-1 rounded-b-lg ${
                    pkg.badge === "Meest Populair" ? "bg-sky-500 text-white" : "bg-white/8 text-white/55"
                  }`}>
                    {pkg.badge}
                  </div>
                )}
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-sky-400 mb-2">{pkg.name}</span>
                <p className="text-[0.85rem] text-white/45 leading-relaxed mb-5 flex-grow">{pkg.desc}</p>
                <ul className="space-y-3 mb-7">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-[0.82rem] text-white/55">
                      <CheckCircle2 className="w-4 h-4 text-sky-500/65 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={pkg.featured ? "default" : "ghost"} className="w-full">
                  <a href="#contact">{pkg.cta} <ArrowRight className="w-3.5 h-3.5" /></a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="text-center text-[0.78rem] text-white/28 mt-8">
            Elke offerte is gratis, vrijblijvend en op maat. Prijzen worden schriftelijk bevestigd vóór aanvang.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  return (
    <section className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 mb-4">Klantenervaringen</span>
            <h2 className="font-black tracking-[-0.035em] text-white leading-tight" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
              Wat onze klanten zeggen
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`card-hover rounded-2xl border p-7 h-full flex flex-col ${i === 1 ? "border-sky-500/20 bg-sky-500/[0.04]" : "border-white/[0.07] bg-white/[0.02]"}`}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-sky-400 text-sky-400" />)}
                </div>
                <p className="text-[0.88rem] text-white/52 leading-relaxed italic flex-grow mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sky-500/10 border border-sky-500/18 flex items-center justify-center text-[0.68rem] font-bold text-sky-400 flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[0.84rem] font-semibold text-white">{t.name}</p>
                    <p className="text-[0.7rem] text-white/32">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BAND ─── */
function CtaBand() {
  return (
    <div className="py-20 px-6 bg-gradient-to-r from-sky-600 to-sky-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-[1.75rem] md:text-[2.1rem] font-black text-white tracking-tight leading-snug mb-2">
            Klaar om uw eigendom te laten stralen?
          </h2>
          <p className="text-white/70 text-[0.95rem]">
            Gratis plaatsbezoek — vrijblijvend — binnen 24u reactie.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button variant="white" size="xl" asChild>
            <a href="tel:+32"><Phone className="w-4 h-4" /> Bel ons</a>
          </Button>
          <Button size="xl" className="bg-[#07080d] hover:bg-[#0f1018] text-white border-0" asChild>
            <a href="#contact">Offerte Aanvragen <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  }
  const inputCls = "w-full bg-[#07080d] border border-white/[0.07] rounded-lg px-3.5 py-2.5 text-[0.88rem] text-white placeholder-white/18 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/15 transition-all";

  return (
    <section id="contact" className="py-28 px-6 border-t border-white/[0.05] bg-[#0a0b12]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-start">
          <Reveal>
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.18em] uppercase text-sky-400 mb-5">Contact</span>
            <h2 className="font-black tracking-[-0.04em] text-white leading-tight mb-5" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
              Laten we praten<br />
              <span className="gradient-text-blue">over uw eigendom.</span>
            </h2>
            <p className="text-white/50 text-[1.05rem] leading-relaxed mb-9 max-w-md">
              Vertel ons wat u nodig heeft. We komen binnen 24 uur terug met een op maat gemaakt voorstel — zonder verplichtingen.
            </p>
            <div className="space-y-5 mb-8">
              {[{icon:MapPin,l:"Werkgebied",v:"België — alle regio's"},{icon:Phone,l:"Telefoon",v:"+32 (0) — op aanvraag"},{icon:Mail,l:"E-mail",v:"info@x-group.be"}].map(c => (
                <div key={c.l} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/[0.07] border border-sky-500/15 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/30">{c.l}</p>
                    <p className="text-[0.86rem] text-white/60">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-emerald-500/14 bg-emerald-500/[0.04] p-5 flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[0.85rem] font-semibold text-white mb-1">Geen risico</p>
                <p className="text-[0.78rem] text-white/42 leading-relaxed">Ons plaatsbezoek en offerte zijn volledig gratis en vrijblijvend. U engageert zich nergens toe.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 md:p-9">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Bedankt voor uw aanvraag!</h3>
                  <p className="text-white/45 max-w-xs text-[0.88rem] leading-relaxed">We nemen binnen 24 uur contact met u op voor een gratis plaatsbezoek en offerte op maat.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[["Voornaam","Jan"],["Naam","De Smedt"]].map(([l,p]) => (
                      <div key={l}><label className="block text-[0.68rem] font-semibold uppercase tracking-wider text-white/30 mb-1.5">{l}</label><input type="text" placeholder={p} required className={inputCls} /></div>
                    ))}
                  </div>
                  <div><label className="block text-[0.68rem] font-semibold uppercase tracking-wider text-white/30 mb-1.5">E-mail</label><input type="email" placeholder="jan@bedrijf.be" required className={inputCls} /></div>
                  <div><label className="block text-[0.68rem] font-semibold uppercase tracking-wider text-white/30 mb-1.5">Telefoon</label><input type="tel" placeholder="+32 4xx xx xx xx" className={inputCls} /></div>
                  <div>
                    <label className="block text-[0.68rem] font-semibold uppercase tracking-wider text-white/30 mb-1.5">Type vastgoed</label>
                    <select required className={inputCls + " appearance-none"}>
                      <option value="" disabled>Selecteer uw type</option>
                      <option>Residentieel — Woning of Villa</option>
                      <option>Commercieel — Kantoor, Winkel of Horeca</option>
                      <option>Industrieel — Magazijn of Fabriek</option>
                      <option>Vastgoedbeheer — Portfolio</option>
                    </select>
                  </div>
                  <div><label className="block text-[0.68rem] font-semibold uppercase tracking-wider text-white/30 mb-1.5">Uw bericht</label><textarea rows={4} placeholder="Beschrijf uw eigendom en wat u nodig heeft..." className={inputCls + " resize-none"} /></div>
                  <Button type="submit" size="xl" className="w-full" disabled={loading}>
                    {loading ? "Verzenden…" : <><span>Gratis Plaatsbezoek Aanvragen</span><ArrowRight className="w-4 h-4" /></>}
                  </Button>
                  <p className="text-center text-[0.7rem] text-white/22">100% gratis &amp; vrijblijvend — reactie binnen 24u</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#07080d] px-6 pt-14 pb-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-12">
        <div>
          <a href="#" className="text-xl font-black tracking-[-0.04em] block mb-3">
            <span className="text-sky-500">X</span><span className="text-white">-GROUP</span>
          </a>
          <p className="text-[0.82rem] text-white/28 leading-relaxed max-w-[200px]">One partner. Every property. Professionele vastgoedzorg in heel België.</p>
        </div>
        {[
          {title:"Diensten", links:[["Residentieel","#residential"],["Commercieel","#commercial"],["Industrieel","#industrial"],["Vastgoedbeheer","#maintenance"]]},
          {title:"Bedrijf",  links:[["Waarom X-GROUP","#why"],["Werkwijze","#process"],["Pakketten","#pricing"],["Contact","#contact"]]},
          {title:"Contact",  links:[["info@x-group.be","#"],["Offerte Aanvragen","#contact"],["België — alle regio's","#"]]},
        ].map(col => (
          <div key={col.title}>
            <h5 className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/22 mb-4">{col.title}</h5>
            <ul className="space-y-2.5">
              {col.links.map(([l,h]) => (
                <li key={l}><a href={h} className="text-[0.82rem] text-white/40 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/[0.05] py-5 flex flex-wrap justify-between items-center gap-3">
        <span className="text-[0.72rem] text-white/18">© 2024 X-GROUP Belgium. Alle rechten voorbehouden.</span>
        <div className="flex gap-5">
          {["Privacybeleid","Algemene Voorwaarden"].map(t => (
            <a key={t} href="#" className="text-[0.72rem] text-white/18 hover:text-white/40 transition-colors">{t}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <ProblemSection />
      <ServicesSection />
      <StatsBar />
      <WhySection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaBand />
      <ContactSection />
      <Footer />
    </main>
  );
}
