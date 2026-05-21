export type Service = {
  name: string;
  subtitle: string;
  duration: string;
  startingAt: string;
  popular?: boolean;
  description: string;
  inclusions: string[];
  addOns?: string[];
};

export const services: Service[] = [
  {
    name: "The Ceremony",
    subtitle: "Half-day collection",
    duration: "Six hours of coverage",
    startingAt: "$5,400",
    description:
      "For intimate weddings, courthouse ceremonies, and elopements where the day is small and the people are few. Six unhurried hours, photographed with care.",
    inclusions: [
      "Six hours of single-photographer coverage",
      "Pre-wedding planning consultation",
      "Hand-curated digital gallery (~400 images)",
      "Private online gallery for sharing & download",
      "Print release and full usage rights",
      "Ten fine-art prints on cotton paper",
    ],
    addOns: ["Second photographer", "Engagement session", "Heirloom album"],
  },
  {
    name: "The Heirloom",
    subtitle: "Full-day collection",
    duration: "Ten hours of coverage",
    startingAt: "$8,800",
    popular: true,
    description:
      "Our most-chosen collection. From the first quiet hour of getting ready to the last dance under string lights — ten hours, two photographers, the day told in full.",
    inclusions: [
      "Ten hours of two-photographer coverage",
      "Two pre-wedding planning sessions",
      "Engagement session (anywhere in the U.S.)",
      "Hand-curated digital gallery (~700 images)",
      "Private online gallery, downloads, sharing",
      "Print release and full usage rights",
      "Hand-bound Italian leather heirloom album",
      "Twenty fine-art prints on cotton paper",
    ],
    addOns: ["Rehearsal-dinner coverage", "Day-after portrait session", "Parents' albums"],
  },
  {
    name: "The Atelier",
    subtitle: "Multi-day & destination",
    duration: "Two to three days",
    startingAt: "$14,500",
    description:
      "For destination weddings, multi-day celebrations, and couples who want every part of the weekend remembered — welcome dinner, ceremony, brunch.",
    inclusions: [
      "Two to three days of two-photographer coverage",
      "Welcome dinner & rehearsal-dinner included",
      "Day-after couple portrait session",
      "Travel within the continental U.S. included",
      "Hand-curated digital gallery (~1,200 images)",
      "Hand-bound Italian leather heirloom album",
      "Two parents' linen folio albums",
      "Thirty fine-art prints on cotton paper",
      "Concierge planning support",
    ],
    addOns: ["Cinematography partner", "Polaroid station for guests"],
  },
];

export const faq = [
  {
    q: "How many photographs will we receive?",
    a: "It depends on your collection and the length of your day. The Ceremony delivers approximately 400 images, The Heirloom approximately 700, and The Atelier approximately 1,200. Every gallery is hand-curated — we will never deliver every frame we shoot. You receive the best of the day.",
  },
  {
    q: "When will we receive our gallery?",
    a: "Galleries are delivered within eight weeks of your wedding. You will receive a small preview gallery — twenty to thirty images — within seven days, so you have something to share immediately.",
  },
  {
    q: "Do you travel?",
    a: "Always. Travel within the continental U.S. is included on the Heirloom and Atelier collections. International weddings are quoted individually. We have photographed weddings on five continents and consider travel one of the great pleasures of this work.",
  },
  {
    q: "Will you direct us, or let the day unfold?",
    a: "Our work is documentary at its core. We will guide you gently for portraits — twenty unhurried minutes during golden hour — but for the rest of the day, we are quiet observers. We will not interrupt your ceremony, ask you to repeat moments, or pose your guests. Your day is yours.",
  },
  {
    q: "Do you offer a payment plan?",
    a: "Yes. A 25% retainer secures your date; the remainder is split into two payments, with the final balance due thirty days before your wedding. We accept bank transfer, all major cards, and check.",
  },
  {
    q: "What happens if you are sick on our wedding day?",
    a: "We carry full liability and equipment insurance, and we are part of a small trusted collective of photographers whose work we know intimately. If a true emergency prevents us from shooting, we will arrange a replacement of equal caliber and remain involved in editing and delivery.",
  },
];
