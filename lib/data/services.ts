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
    name: "Photography",
    subtitle: "Unlimited time coverage",
    duration: "Full day coverage",
    startingAt: "$2,495",
    description:
      "Professional wedding photography with unlimited time coverage. From getting ready to the last dance, we capture every moment of your special day with candid, authentic storytelling.",
    inclusions: [
      "Unlimited time coverage (no hourly limits)",
      "Two professional photographers",
      "Pre-wedding planning consultation",
      "Custom shot list & timeline planning",
      "High-resolution digital gallery",
      "Online gallery for sharing & downloads",
      "Print release and full usage rights",
      "Backup equipment & photographer on standby",
    ],
    addOns: ["Engagement session", "Second-day coverage", "Premium album"],
  },
  {
    name: "Photo + Video",
    subtitle: "Complete coverage bundle",
    duration: "Full day coverage",
    startingAt: "$4,295",
    popular: true,
    description:
      "Our most popular package combines unlimited photography and cinematic videography. Capture both still moments and moving memories with our coordinated photo-video team.",
    inclusions: [
      "Unlimited time photography coverage",
      "Unlimited time videography coverage",
      "Two photographers + two videographers",
      "Pre-wedding planning & coordination",
      "Custom shot list, timeline & music selection",
      "High-resolution photo gallery",
      "Cinematic highlight film (5-7 minutes)",
      "Full ceremony & speeches footage",
      "Online galleries for photos & video",
      "Print release and full usage rights",
    ],
    addOns: ["DJ services", "Photo booth", "Same-day edit video"],
  },
  {
    name: "The Grand Celebration",
    subtitle: "Full-service wedding package",
    duration: "Complete wedding experience",
    startingAt: "$6,995",
    description:
      "Everything you need for an unforgettable wedding. Photography, videography, DJ, coordination, and photo booth — all working together seamlessly to create magic moments.",
    inclusions: [
      "Unlimited photography & videography",
      "Professional DJ & MC services",
      "Day-of coordination services",
      "Premium photo booth with props",
      "Dance floor lighting & effects",
      "Custom playlist & timeline planning",
      "High-resolution photo gallery",
      "Cinematic highlight film",
      "Full ceremony & reception footage",
      "Online galleries & sharing",
      "Backup equipment & team members",
      "Magic Moments (cold sparks, uplighting)",
    ],
    addOns: ["VW Bus photo booth", "Audio guest book", "Getaway car"],
  },
];

export const faq = [
  {
    q: "Do you really offer unlimited time coverage?",
    a: "Yes! Unlike most wedding vendors who charge by the hour, we stay from your first look to your last dance. No watching the clock, no overtime fees. Your day unfolds at your pace, not ours.",
  },
  {
    q: "Can I choose my own photographer, videographer, and DJ?",
    a: "Absolutely. We match you with team members based on your style, vibe, and personality. You'll meet them before your wedding, review their work, and make sure they're the right fit for you.",
  },
  {
    q: "Which cities do you serve?",
    a: "We're based in Texas and Arizona, serving Houston, Dallas, Austin, San Antonio, and Phoenix. We also travel for destination weddings — just ask!",
  },
  {
    q: "What's included in your packages?",
    a: "Everything. No hidden fees, no surprise charges. Photography includes two photographers, unlimited time, high-res gallery, and print release. DJ includes setup, equipment, lighting, and unlimited music. Bundles include coordination and photo booth options.",
  },
  {
    q: "How much do your services cost?",
    a: "Photography starts at $2,495. Photo + Video bundles start at $4,295. Our Grand Celebration (full-service) package starts at $6,995. All packages include unlimited time coverage and transparent pricing.",
  },
  {
    q: "When will we receive our photos and videos?",
    a: "Photos are delivered within 4-6 weeks. Videos (highlight films) are delivered within 8-10 weeks. You'll receive a sneak peek gallery within 48 hours so you can share the excitement right away!",
  },
  {
    q: "What happens if there's an emergency?",
    a: "We have backup photographers, videographers, and DJs on call. We carry full insurance and have contingency plans A through Z. Rain or shine, emergency or not — we will be at your wedding.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes! We offer flexible payment plans. A deposit secures your date, and the balance can be split into monthly payments leading up to your wedding. We accept all major credit cards, bank transfers, and checks.",
  },
];
