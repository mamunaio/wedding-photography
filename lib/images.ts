/**
 * Centralized image catalog. All photography sourced from Unsplash (free license).
 * Hosting on images.unsplash.com CDN — stable, optimized.
 *
 * Helper to build a sized URL.
 */
const UNSPLASH = "https://images.unsplash.com";

export function img(id: string, w = 1600, q = 80): string {
  return `${UNSPLASH}/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/**
 * Curated photo IDs grouped by mood. Reused thoughtfully across the site.
 */
export const PHOTOS = {
  // Hero / cinematic wide
  heroCouple: "photo-1519741497674-611481863552",
  heroCoastal: "photo-1469371670807-013ccf25f16a",
  heroGarden: "photo-1465495976277-4387d4b0b4c6",
  heroVineyard: "photo-1525772764200-be829a350797",
  heroBride: "photo-1519225421980-715cb0215aed",
  heroEmbrace: "photo-1511285560929-80b456fea0bc",
  heroForest: "photo-1532712938310-34cb3982ef74",

  // Couples / portraits
  coupleA: "photo-1606216794074-735e91aa2c92",
  coupleB: "photo-1511795409834-ef04bbd61622",
  coupleC: "photo-1606800052052-a08af7148866",
  coupleD: "photo-1529636798458-92182e662485",
  coupleE: "photo-1519741497674-611481863552",
  coupleF: "photo-1583939003579-730e3918a45a",

  // Bridal portraits
  bridalA: "photo-1551893134-aafd6f4c5f5b",
  bridalB: "photo-1519225421980-715cb0215aed",
  bridalC: "photo-1469371670807-013ccf25f16a",

  // Details / florals
  ringsA: "photo-1583939003579-730e3918a45a",
  ringsB: "photo-1502635385003-ee1e6a1a742d",
  bouquetA: "photo-1525772764200-be829a350797",
  bouquetB: "photo-1573165850883-9b0e18c44bd2",
  shoes: "photo-1519671482749-fd09be7ccebf",
  detailsA: "photo-1597157639073-69284dc0fdaf",

  // Ceremony / venues
  ceremonyA: "photo-1465495976277-4387d4b0b4c6",
  ceremonyB: "photo-1511795409834-ef04bbd61622",
  receptionA: "photo-1606800052052-a08af7148866",
  receptionB: "photo-1530023367847-a683933f4172",

  // Editorial / lifestyle
  editorialA: "photo-1532712938310-34cb3982ef74",
  editorialB: "photo-1517245386807-bb43f82c33c4",
  editorialC: "photo-1488116748077-eed1e1a2a8e2",
  editorialD: "photo-1496217590455-aa63a8350eea",

  // Photographer portrait (for About)
  photographer: "photo-1494790108377-be9c29b29330",

  // Misc
  letter: "photo-1505330622279-bf7d7fc918f6",
  candlelight: "photo-1519741497674-611481863552",
} as const;
