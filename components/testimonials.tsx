import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Lieve De Smedt",
    location: "Gent",
    rating: 5,
    date: "Oktober 2024",
    text: "Yannick is een echte professional. Hij inspecteerde ons dak eerst volledig gratis, legde alles helder uit en gaf ons twee opties. Geen druk, gewoon eerlijk advies. Het resultaat is indrukwekkend, het dak ziet eruit alsof het nieuw is.",
    service: "Dakreiniging + Coating",
    avatar: "L",
  },
  {
    name: "Marc Vanderhaegen",
    location: "Kortrijk",
    rating: 5,
    date: "Augustus 2024",
    text: "Al drie keer gebruik gemaakt van Yannick zijn diensten. Telkens vlot, netjes en op tijd. De prijs was precies zoals afgesproken, geen bijkomende kosten. Dat is tegenwoordig zeldzaam.",
    service: "Mosverwijdering + Gootreiniging",
    avatar: "M",
  },
  {
    name: "An Claeys",
    location: "Brugge",
    rating: 5,
    date: "November 2024",
    text: "We kochten een huis met een verwaarloosd dak. Yannick maakte een gedetailleerd rapport en vertelde ons eerlijk wat dringend was en wat kon wachten. Zo'n aanpak schept vertrouwen. De reiniging was perfect.",
    service: "Dakinspectie + Reiniging",
    avatar: "A",
  },
  {
    name: "Johan Peeters",
    location: "Aalst",
    rating: 5,
    date: "September 2024",
    text: "Snel ter plaatse, vakkundig werk en uitstekende communicatie. Yannick nam de tijd om alles te verklaren en stuurde achteraf foto's van het afgewerkte werk. Topservice.",
    service: "Volledige dakreiniging",
    avatar: "J",
  },
  {
    name: "Katrien Vermeersch",
    location: "Roeselare",
    rating: 5,
    date: "Mei 2024",
    text: "Ik twijfelde lang tussen verschillende bedrijven. Yannick nam de tijd voor een grondige inspectie en zijn offerte was duidelijk en eerlijk. Het verschil vóór en na is spectaculair. Absoluut aan te bevelen.",
    service: "Dakpannen reiniging + Impregnatie",
    avatar: "K",
  },
  {
    name: "Dirk Willems",
    location: "Dendermonde",
    rating: 5,
    date: "Juni 2024",
    text: "Uitzonderlijk vakmanschap. Yannick ontdekte een klein probleem bij de nokpannen dat we zelf nooit hadden gezien. Hij herstelde het ter plaatse. Dat toont zijn betrokkenheid en expertise.",
    service: "Reiniging + Kleine reparatie",
    avatar: "D",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-padding"
      id="beoordelingen"
      style={{ background: "linear-gradient(180deg, #F8F6F2 0%, #EDE9E2 100%)" }}
    >
      <div className="container-tight">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#C49A28" }}
          >
            Wat klanten zeggen
          </p>
          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1B3A26" }}
          >
            Beoordeeld door echte huiseigenaren
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#C49A28] text-[#C49A28]" />
              ))}
            </div>
            <span className="font-display font-bold text-3xl text-[#1B3A26]">4.9</span>
            <span className="text-[#6B6B5E]">op basis van 180+ beoordelingen</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-7 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "#E0DDD6" }}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-7 right-7 w-8 h-8 opacity-10"
                style={{ color: "#1B3A26" }}
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C49A28] text-[#C49A28]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[0.9rem] leading-relaxed text-[#3A3A35] mb-6 relative z-10">
                "{r.text}"
              </p>

              {/* Service tag */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(27,58,38,0.07)", color: "#1B3A26" }}
              >
                {r.service}
              </span>

              {/* Author */}
              <div
                className="flex items-center gap-3 pt-5 border-t"
                style={{ borderColor: "#F0EDE8" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #1B3A26 0%, #4A7C59 100%)" }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#1A1A18]">{r.name}</p>
                  <p className="text-xs text-[#6B6B5E]">
                    {r.location} · {r.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { platform: "Google Reviews", count: "4.9★ · 120 reviews" },
            { platform: "Facebook", count: "4.8★ · 40 reviews" },
            { platform: "Verified Reviews", count: "4.9★ · 25 reviews" },
          ].map((p) => (
            <div
              key={p.platform}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border"
              style={{ borderColor: "#E0DDD6" }}
            >
              <span className="font-semibold text-sm text-[#1A1A18]">{p.platform}</span>
              <span className="text-sm text-[#C49A28] font-bold">{p.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
