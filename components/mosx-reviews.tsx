import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Katrien V.",
    location: "Gent",
    rating: 5,
    date: "November 2024",
    service: "Dakontmossing + Coating",
    text: "Yannick is een vakman zoals je ze zelden tegenkomt. Hij legde alles uit met de drone-beelden, gaf eerlijk advies en de prijs was precies zoals beloofd. Het dak ziet eruit als nieuw.",
    avatar: "K",
  },
  {
    name: "Marc D.",
    location: "Aalst",
    rating: 5,
    date: "Oktober 2024",
    service: "Dakontmossing",
    text: "Na jaren twijfelen eindelijk iemand die eerlijk zei wat mijn dak nodig had en wat niet. Geen overbodige diensten, geen druk. Gewoon degelijk werk aan een correcte prijs.",
    avatar: "M",
  },
  {
    name: "Sofie B.",
    location: "Dendermonde",
    rating: 5,
    date: "September 2024",
    service: "Gevelreiniging",
    text: "De drone-inspectie overtuigde mij onmiddellijk. Eindelijk een bedrijf dat u toont wat het probleem is, in plaats van het alleen te vertellen. Gevel is perfect gereinigd.",
    avatar: "S",
  },
  {
    name: "Johan P.",
    location: "Sint-Niklaas",
    rating: 5,
    date: "Augustus 2024",
    service: "Dakcoating",
    text: "Vlot, professioneel en netjes. Yannick is iemand die zijn vak door en door kent en dat ook uitstraalt. De coating ziet er geweldig uit en ik heb nu 15 jaar zekerheid.",
    avatar: "J",
  },
  {
    name: "Lieve C.",
    location: "Ronse",
    rating: 5,
    date: "Juli 2024",
    service: "Dakontmossing",
    text: "Ik heb drie offertes gevraagd. MOS-X was niet de goedkoopste, maar Yannick was de énige die met een drone langskwam en alles kon tonen. Dat vertrouwen was de investering waard.",
    avatar: "L",
  },
  {
    name: "Dirk W.",
    location: "Wetteren",
    rating: 5,
    date: "Juni 2024",
    service: "Dakontmossing + Gootreiniging",
    text: "Super tevreden met het resultaat en de service. Yannick merkte ook een kleine beschadiging aan een nokpan op die we zelf nooit hadden gezien. Dat is het verschil met een gewone dakreiniger.",
    avatar: "D",
  },
];

export default function MosxReviews() {
  return (
    <section className="section-pad bg-white" id="reviews">
      <div className="wrap">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="eyebrow mb-4">Wat klanten zeggen</p>
          <h2 className="section-headline mb-5">
            12 uitstekende reviews.{" "}
            <span className="italic" style={{ color: "#1A5C36" }}>100% tevreden.</span>
          </h2>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C8920A] text-xl">★</span>
              ))}
            </div>
            <span className="font-display font-bold text-3xl" style={{ color: "#1A5C36" }}>5.0</span>
            <span className="text-[#5C6058]">op alle platforms</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative p-7 bg-white rounded-3xl border card-shadow hover:card-shadow-lg transition-all hover:-translate-y-0.5 flex flex-col"
              style={{ borderColor: "#E3E0D8" }}
            >
              <Quote className="absolute top-6 right-6 w-7 h-7 opacity-[0.06]" style={{ color: "#1A5C36" }} />

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(r.rating)].map((_, j) => (
                  <span key={j} className="text-[#C8920A] text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-[0.875rem] leading-relaxed text-[#2A2A24] flex-1 mb-5 relative z-10">
                "{r.text}"
              </p>

              {/* Service tag */}
              <span
                className="inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-5 w-fit"
                style={{ background: "#EAF4EE", color: "#1A5C36" }}
              >
                {r.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#F0EDE8" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #1A5C36 0%, #2A7A4B 100%)" }}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#111613]">{r.name}</p>
                  <p className="text-xs text-[#5C6058]">{r.location} · {r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Google Reviews", score: "5.0★ · 8 reviews" },
            { name: "Facebook",       score: "5.0★ · 3 reviews" },
            { name: "Direct",         score: "5.0★ · 1 review"  },
          ].map(p => (
            <div key={p.name} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border" style={{ borderColor: "#E3E0D8" }}>
              <span className="font-semibold text-sm text-[#111613]">{p.name}</span>
              <span className="text-sm font-bold" style={{ color: "#C8920A" }}>{p.score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
