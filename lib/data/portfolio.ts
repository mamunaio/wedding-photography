import { img, PHOTOS } from "@/lib/images";

export type GalleryImage = {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square" | "wide";
};

export type PortfolioEntry = {
  slug: string;
  couple: string;
  partners: { one: string; two: string };
  location: string;
  venue: string;
  date: string;
  category: "Wedding" | "Elopement" | "Engagement";
  excerpt: string;
  description: string;
  story: string[];
  cover: string;
  hero: string;
  vendors: { role: string; name: string }[];
  images: GalleryImage[];
};

const w = (id: string, width = 1800) => img(id, width);
const wMed = (id: string) => img(id, 1200);
const wSm = (id: string) => img(id, 900);

export const portfolio: PortfolioEntry[] = [
  {
    slug: "olivia-and-henry-big-sur",
    couple: "Olivia & Henry",
    partners: { one: "Olivia", two: "Henry" },
    location: "Big Sur, California",
    venue: "Glen Oaks Estate",
    date: "September 2025",
    category: "Wedding",
    excerpt:
      "A coastal cliffside ceremony beneath cypress trees, soft fog rolling in from the Pacific.",
    description:
      "Olivia and Henry exchanged vows at the edge of the continent, where cypress trees lean toward the Pacific and the fog moves like a slow curtain. The day unfolded in three acts — a quiet morning, a ceremony at golden hour, and a long candlelit dinner under the stars.",
    story: [
      "Olivia and Henry were the kind of couple who refused to make their day a spectacle. They wanted only the people they loved most, a long table set for thirty, and the sound of the Pacific in the background. Their first phone call was about books — about the way Anne Carson writes about marriage, about Mary Oliver and the sea. By the time we hung up, I knew this would be a wedding made of small, honest moments.",
      "We arrived in Big Sur the day before. The fog was thick, the cypress trees gleaming. Olivia got ready in a small wooden cabin tucked into the hillside, her mother braiding wildflowers into her hair. Henry was on the deck below, reading his vows aloud to the wind, rehearsing not the words but the feeling.",
      "The ceremony was held on a cliff at golden hour. Twenty-eight guests stood in a half-circle. Their officiant — Olivia's college roommate — spoke about the long quiet work of love. They cried. We all cried. The fog rolled in just as they kissed, as if on cue.",
      "Dinner was held at a long farmhouse table inside the main house. Beeswax candles, eucalyptus, wild figs from the property. Speeches went long. Henry's father read a poem he had written for them, his voice breaking at the second stanza. Afterward, they danced in the kitchen, barefoot, while a friend played the upright piano in the next room.",
    ],
    cover: w(PHOTOS.heroCoastal, 2000),
    hero: w(PHOTOS.heroCoastal, 2400),
    vendors: [
      { role: "Venue", name: "Glen Oaks Estate" },
      { role: "Floral Design", name: "Wildflower Studio" },
      { role: "Catering", name: "Big Sur Bakery" },
      { role: "Bride's Gown", name: "Danielle Frankel" },
      { role: "Stationery", name: "Written Word Calligraphy" },
      { role: "Music", name: "Atlas String Trio" },
    ],
    images: [
      { src: w(PHOTOS.heroCoastal, 2000), alt: "Coastal ceremony", aspect: "wide" },
      { src: wMed(PHOTOS.bridalA), alt: "Bride's portrait", aspect: "portrait" },
      { src: wMed(PHOTOS.ringsA), alt: "Wedding rings", aspect: "square" },
      { src: w(PHOTOS.coupleB, 1800), alt: "Couple in field", aspect: "wide" },
      { src: wMed(PHOTOS.bouquetA), alt: "Bridal bouquet", aspect: "portrait" },
      { src: wMed(PHOTOS.detailsA), alt: "Wedding details", aspect: "landscape" },
      { src: w(PHOTOS.coupleA, 1800), alt: "First look", aspect: "wide" },
      { src: wMed(PHOTOS.shoes), alt: "Bridal shoes", aspect: "portrait" },
      { src: wMed(PHOTOS.ceremonyA), alt: "Ceremony moment", aspect: "landscape" },
      { src: w(PHOTOS.heroEmbrace, 1800), alt: "Couple embrace", aspect: "wide" },
      { src: wMed(PHOTOS.receptionA), alt: "Reception", aspect: "landscape" },
      { src: wMed(PHOTOS.editorialA), alt: "Quiet moment", aspect: "portrait" },
    ],
  },
  {
    slug: "sophia-and-james-santorini",
    couple: "Sophia & James",
    partners: { one: "Sophia", two: "James" },
    location: "Santorini, Greece",
    venue: "Villa Aigli",
    date: "June 2025",
    category: "Wedding",
    excerpt:
      "A whitewashed villa above the Aegean, four days of celebration with family flown in from across the world.",
    description:
      "Sophia and James gathered their families in Santorini for four days of slow Mediterranean rituals — a welcome dinner under olive trees, a morning swim, a long ceremony at sunset, and a late-night dance on the terrace.",
    story: [
      "Sophia is Greek; James is from Edinburgh. They had been long-distance for the better part of a decade and had decided, finally, to bring everyone together in one place. Santorini was the obvious answer — Sophia's grandmother had been married on the island in 1962, and the photograph of her in a linen dress on the cliff still hangs in the family kitchen.",
      "The welcome dinner was held in an olive grove. Long communal tables, paper lanterns, a violinist playing Greek folk songs. James's brother had flown in from Tokyo with a small barrel of single-malt and the toasts ran long.",
      "The ceremony itself took place on a terrace overlooking the caldera. Sophia walked down a path of bougainvillea petals her aunts had laid an hour earlier. James met her halfway. Their officiant — a family friend — told the story of their first meeting, in a bookstore in Lisbon, and the room laughed and wept in the same breath.",
      "We danced until two in the morning. Someone broke a plate, the way Greek tradition demands. The Aegean was black and silver. Sophia's grandmother, ninety-four years old, danced the first dance with them.",
    ],
    cover: w(PHOTOS.heroVineyard, 2000),
    hero: w(PHOTOS.heroVineyard, 2400),
    vendors: [
      { role: "Venue", name: "Villa Aigli" },
      { role: "Floral Design", name: "Anthos Atelier" },
      { role: "Catering", name: "Selene Santorini" },
      { role: "Bride's Gown", name: "Lihi Hod" },
      { role: "Hair & Makeup", name: "Anastasia Galouni" },
      { role: "Music", name: "Atlas String Trio" },
    ],
    images: [
      { src: w(PHOTOS.heroVineyard, 2000), alt: "Aegean ceremony", aspect: "wide" },
      { src: wMed(PHOTOS.bridalB), alt: "Bride portrait", aspect: "portrait" },
      { src: wMed(PHOTOS.coupleC), alt: "Couple", aspect: "landscape" },
      { src: wMed(PHOTOS.ringsB), alt: "Rings detail", aspect: "square" },
      { src: w(PHOTOS.editorialB, 1800), alt: "Mediterranean", aspect: "wide" },
      { src: wMed(PHOTOS.bouquetB), alt: "Bouquet", aspect: "portrait" },
      { src: wMed(PHOTOS.coupleD), alt: "Sunset embrace", aspect: "landscape" },
      { src: wMed(PHOTOS.editorialC), alt: "Reception detail", aspect: "portrait" },
      { src: w(PHOTOS.receptionB, 1800), alt: "Late night", aspect: "wide" },
      { src: wMed(PHOTOS.coupleE), alt: "Quiet moment", aspect: "portrait" },
    ],
  },
  {
    slug: "charlotte-and-theodore-hudson-valley",
    couple: "Charlotte & Theodore",
    partners: { one: "Charlotte", two: "Theodore" },
    location: "Hudson Valley, New York",
    venue: "Stonewall House",
    date: "October 2024",
    category: "Wedding",
    excerpt:
      "An autumn garden estate wedding — bourbon, brass quartet, and a ceremony beneath a copper beech tree.",
    description:
      "Charlotte and Theodore wanted something old-fashioned in the best sense — a Hudson Valley estate in October, a brass quartet, hand-written menus, and a ceremony beneath a hundred-year-old copper beech.",
    story: [
      "The leaves had just begun to turn. Charlotte wore her grandmother's veil — antique Brussels lace, hand-stitched in 1948 — and a gown of silk organza that pooled when she walked. Theodore had a fountain pen in his breast pocket, a gift from his father, with which he had written his vows the night before.",
      "We made portraits in the orchard before the ceremony. The light was the color of bourbon. Theodore made Charlotte laugh so hard she snorted; she punched him in the shoulder and called him an idiot, gently.",
      "The ceremony was beneath the great copper beech. Charlotte's father walked her down a gravel path lined with white roses. The brass quartet played a Bach prelude as she came into view, and Theodore — who had been unusually steady all morning — began to cry quietly.",
      "Dinner was served family-style under a tent strung with Edison bulbs. Charlotte's brother, an opera singer, surprised them with a song. Theodore's grandmother, ninety-one, gave a toast in three languages.",
    ],
    cover: w(PHOTOS.heroGarden, 2000),
    hero: w(PHOTOS.heroGarden, 2400),
    vendors: [
      { role: "Venue", name: "Stonewall House" },
      { role: "Floral Design", name: "Saipua" },
      { role: "Catering", name: "Hilltop Hudson" },
      { role: "Bride's Gown", name: "Monique Lhuillier" },
      { role: "Stationery", name: "Bell'Invito" },
      { role: "Music", name: "Hudson Brass Collective" },
    ],
    images: [
      { src: w(PHOTOS.heroGarden, 2000), alt: "Garden ceremony", aspect: "wide" },
      { src: wMed(PHOTOS.bridalC), alt: "Bride in lace", aspect: "portrait" },
      { src: wMed(PHOTOS.detailsA), alt: "Stationery detail", aspect: "landscape" },
      { src: w(PHOTOS.coupleA, 1800), alt: "Orchard portrait", aspect: "wide" },
      { src: wMed(PHOTOS.shoes), alt: "Bridal shoes", aspect: "portrait" },
      { src: wMed(PHOTOS.ringsB), alt: "Heirloom rings", aspect: "square" },
      { src: wMed(PHOTOS.bouquetA), alt: "Autumn bouquet", aspect: "portrait" },
      { src: w(PHOTOS.ceremonyB, 1800), alt: "Walking down aisle", aspect: "wide" },
      { src: wMed(PHOTOS.receptionA), alt: "Reception tent", aspect: "landscape" },
      { src: wMed(PHOTOS.editorialD), alt: "Late night", aspect: "portrait" },
    ],
  },
  {
    slug: "isabella-and-beckett-aspen",
    couple: "Isabella & Beckett",
    partners: { one: "Isabella", two: "Beckett" },
    location: "Aspen, Colorado",
    venue: "Maroon Bells Lodge",
    date: "January 2025",
    category: "Elopement",
    excerpt:
      "A snow-soft elopement at 8,000 feet — only the two of them, an officiant, and the mountains.",
    description:
      "Isabella and Beckett eloped on a Tuesday in January. There were six people present: the two of them, their officiant, and three witnesses they had met that morning at the lodge.",
    story: [
      "They had been together fourteen years. They had a daughter, a dog, a house with a yellow door. They had wanted, for years, to get married — but every plan they made felt like it belonged to someone else. So one quiet morning in November, Beckett asked: what if we just go? And Isabella said: when?",
      "January in Aspen. They flew in on a Monday, hiked to a clearing they had scouted on Google Earth, and were married at noon the next day in the snow. Isabella wore a long ivory wool coat over her grandmother's wedding dress. Beckett wore a charcoal suit and his father's pocket watch.",
      "We made the photographs slowly. There was no schedule. We had hot tea afterward in the lodge, and they read their vows to each other for the second time, just to hear them again.",
    ],
    cover: w(PHOTOS.heroForest, 2000),
    hero: w(PHOTOS.heroForest, 2400),
    vendors: [
      { role: "Officiant", name: "Aspen Elopement Co." },
      { role: "Floral", name: "Gather Aspen" },
      { role: "Bride's Coat", name: "The Row" },
      { role: "Bride's Gown", name: "Family heirloom" },
    ],
    images: [
      { src: w(PHOTOS.heroForest, 2000), alt: "Mountain elopement", aspect: "wide" },
      { src: wMed(PHOTOS.coupleF), alt: "Couple in snow", aspect: "portrait" },
      { src: wMed(PHOTOS.editorialA), alt: "Quiet moment", aspect: "landscape" },
      { src: w(PHOTOS.coupleC, 1800), alt: "First kiss", aspect: "wide" },
      { src: wMed(PHOTOS.ringsA), alt: "Rings", aspect: "square" },
      { src: wMed(PHOTOS.editorialD), alt: "Lodge interior", aspect: "portrait" },
      { src: wMed(PHOTOS.coupleB), alt: "Walking together", aspect: "landscape" },
    ],
  },
  {
    slug: "eleanor-and-atlas-tuscany",
    couple: "Eleanor & Atlas",
    partners: { one: "Eleanor", two: "Atlas" },
    location: "Val d'Orcia, Tuscany",
    venue: "Villa Cetinale",
    date: "May 2025",
    category: "Wedding",
    excerpt:
      "A three-day Tuscan villa wedding — vineyards, hand-painted ceramics, and an aperitivo that lasted into the dark.",
    description:
      "Eleanor and Atlas held their wedding at a 17th-century villa in the Val d'Orcia. Three days, sixty guests, and a long Italian summer evening that refused to end.",
    story: [
      "Eleanor had been planning this wedding, in some quiet corner of her mind, since she was nineteen and spent a summer studying art history in Florence. She had been collecting hand-painted ceramics — for the rehearsal dinner, for the welcome bags — for almost a decade.",
      "We arrived at Villa Cetinale on a Thursday afternoon. The cypress allée looked exactly as Eleanor had described it. By Saturday, the villa was full of family and friends, and the kitchen had been taken over by a Sienese chef and his three daughters.",
      "The ceremony was held in the chapel on the property, an 18th-century stone building with a single rose window. Atlas's mother sang an old Sephardic blessing. Eleanor's father walked her down the aisle and could not make it through his speech without stopping twice.",
      "The reception was an aperitivo that became a long dinner that became a dance party in the courtyard. The musicians — a small Italian jazz quartet — played until the staff politely asked them to stop, sometime after one in the morning.",
    ],
    cover: w(PHOTOS.heroBride, 2000),
    hero: w(PHOTOS.heroBride, 2400),
    vendors: [
      { role: "Venue", name: "Villa Cetinale" },
      { role: "Floral", name: "La Rosa Canina" },
      { role: "Catering", name: "Cucina Cetinale" },
      { role: "Bride's Gown", name: "Vivienne Westwood" },
      { role: "Music", name: "Quartetto Senese" },
    ],
    images: [
      { src: w(PHOTOS.heroBride, 2000), alt: "Tuscan ceremony", aspect: "wide" },
      { src: wMed(PHOTOS.bridalA), alt: "Bride portrait", aspect: "portrait" },
      { src: wMed(PHOTOS.bouquetB), alt: "Italian florals", aspect: "square" },
      { src: w(PHOTOS.coupleD, 1800), alt: "Cypress allee", aspect: "wide" },
      { src: wMed(PHOTOS.detailsA), alt: "Hand-painted ceramics", aspect: "landscape" },
      { src: wMed(PHOTOS.editorialB), alt: "Villa detail", aspect: "portrait" },
      { src: w(PHOTOS.coupleA, 1800), alt: "Late evening", aspect: "wide" },
      { src: wMed(PHOTOS.receptionB), alt: "Reception courtyard", aspect: "landscape" },
    ],
  },
];

export function getPortfolioBySlug(slug: string): PortfolioEntry | undefined {
  return portfolio.find((p) => p.slug === slug);
}

export function getRelatedPortfolio(
  currentSlug: string,
  count = 2,
): PortfolioEntry[] {
  return portfolio.filter((p) => p.slug !== currentSlug).slice(0, count);
}
