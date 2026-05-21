import { img, PHOTOS } from "@/lib/images";

export type JournalPost = {
  slug: string;
  title: string;
  category: "Field Notes" | "Advice" | "Featured Wedding" | "The Craft";
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  body: { type: "p" | "h2" | "quote" | "image"; content: string }[];
};

export const journal: JournalPost[] = [
  {
    slug: "the-quiet-art-of-documenting-a-wedding-day",
    title: "The Quiet Art of Documenting a Wedding Day",
    category: "Field Notes",
    excerpt:
      "On photographing weddings without intruding on them — and why the best frames are made when no one is looking at the camera.",
    date: "March 14, 2026",
    readTime: "6 min read",
    cover: img(PHOTOS.editorialA, 1800),
    body: [
      {
        type: "p",
        content:
          "There is a kind of photography that happens at weddings now that I do not love. It is loud. It interrupts. It pulls a couple out of their own day and arranges them for the camera. It makes a moment when there should be a memory.",
      },
      {
        type: "p",
        content:
          "I have spent the last decade trying to do the opposite. To be present without being seen. To let the day unfold the way it would have unfolded if I had not been there at all.",
      },
      {
        type: "h2",
        content: "Stand still",
      },
      {
        type: "p",
        content:
          "The first principle of documentary wedding photography is, almost paradoxically, to do less. Most photographers move too much. They are restless. They orbit the couple, looking for the angle, hoping to find the picture. But the best frames are not found by movement; they are found by patience.",
      },
      {
        type: "p",
        content:
          "When I arrive at a wedding, I find a place to stand. I watch. I let the day come to me. The bride's mother adjusts her veil. The groom's brother whispers something into his ear. The flower girl takes off her shoes. None of it is for me. None of it should be.",
      },
      {
        type: "quote",
        content:
          "The best photographs are the ones that would have happened anyway.",
      },
      {
        type: "image",
        content: img(PHOTOS.detailsA, 1600),
      },
      {
        type: "h2",
        content: "Trust the small things",
      },
      {
        type: "p",
        content:
          "Couples often expect the big moments to be the ones they remember. The first kiss, the first dance, the cake. And they will remember those. But what they will hold onto, what they will look at twenty years from now and weep over, is almost always something smaller.",
      },
      {
        type: "p",
        content:
          "Their grandmother sitting alone for a moment, looking at the dance floor. A child asleep on a chair, holding a balloon. The way their father wiped his eyes during the ceremony, hoping no one would notice. These are the photographs that become heirlooms.",
      },
    ],
  },
  {
    slug: "what-to-look-for-when-choosing-your-photographer",
    title: "What to Look for When Choosing Your Photographer",
    category: "Advice",
    excerpt:
      "Six honest questions to ask before signing a contract — including the one most couples forget.",
    date: "February 22, 2026",
    readTime: "8 min read",
    cover: img(PHOTOS.editorialB, 1800),
    body: [
      {
        type: "p",
        content:
          "Choosing a wedding photographer is, in some ways, more intimate than choosing a venue. This is the person who will be closest to you on the most emotional day of your life. They will see you cry. They will see you change. They will be in the room when you put on the dress.",
      },
      {
        type: "h2",
        content: "1. Look at full galleries, not Instagram",
      },
      {
        type: "p",
        content:
          "Instagram shows you the highlights. A full gallery shows you what the day actually looked like. Ask any photographer you are considering to share two or three complete weddings — every photograph delivered, not curated. The consistency, the storytelling, the quiet moments: that is what you are hiring.",
      },
      {
        type: "h2",
        content: "2. Ask how they behave at the wedding",
      },
      {
        type: "p",
        content:
          "Some photographers direct heavily. Some are invisible. Neither is wrong, but you should know which you are getting. Ask: how do you photograph the ceremony? Do you ask people to look at the camera, or do you let the moment unfold? Their answer will tell you what your day will feel like.",
      },
      {
        type: "h2",
        content: "3. Read the contract — slowly",
      },
      {
        type: "p",
        content:
          "How many hours are included? When will you receive the gallery? How many photographs, on average, do they deliver? Is travel included? What happens if they get sick? A good contract is plain, specific, and reassuring.",
      },
      {
        type: "h2",
        content: "4. Meet them",
      },
      {
        type: "p",
        content:
          "Even if it is by video. You will spend twelve hours of your life with this person. You should feel, after twenty minutes of conversation, that they are someone you would invite to dinner.",
      },
    ],
  },
  {
    slug: "five-heirloom-album-designs-2026",
    title: "Five Heirloom Album Designs We're Loving in 2026",
    category: "The Craft",
    excerpt:
      "From hand-bound Italian leather to silk-wrapped folios — the album styles defining the year.",
    date: "January 30, 2026",
    readTime: "5 min read",
    cover: img(PHOTOS.editorialC, 1800),
    body: [
      {
        type: "p",
        content:
          "An album is the only object that survives a wedding. The flowers wilt; the dress goes into a box; the cake is eaten in two days. But the album — if it is well-made — sits on your coffee table for fifty years. We obsess over them.",
      },
      {
        type: "h2",
        content: "1. Hand-bound Italian leather",
      },
      {
        type: "p",
        content:
          "Made in a small bindery in Florence. Edge-stitched, foil-stamped, wrapped in vegetable-tanned leather that ages slowly into something more beautiful than the day you received it.",
      },
      {
        type: "h2",
        content: "2. Silk-wrapped folio",
      },
      {
        type: "p",
        content:
          "For couples who want something quieter. A linen-board folio wrapped in raw silk, holding twenty to thirty matted prints. Heirloom-quality, museum-archival, and astonishingly tactile.",
      },
      {
        type: "h2",
        content: "3. Letterpress print box",
      },
      {
        type: "p",
        content:
          "A small wooden box, hand-letterpressed with the couple's monogram, holding a stack of fine-art prints on cotton paper. We love this for couples who collect art.",
      },
    ],
  },
  {
    slug: "letter-to-couples-planning-coastal-wedding",
    title: "A Letter to Couples Planning a Coastal Wedding",
    category: "Advice",
    excerpt:
      "Wind, light, and saltwater — what we have learned from a decade of coastal weddings.",
    date: "December 12, 2025",
    readTime: "7 min read",
    cover: img(PHOTOS.editorialD, 1800),
    body: [
      {
        type: "p",
        content:
          "If you are reading this, you are thinking about getting married near the sea. I am, perhaps, biased — I love coastal weddings. But there are things to know.",
      },
      {
        type: "h2",
        content: "On wind",
      },
      {
        type: "p",
        content:
          "It will be windy. This is not a worry; it is a feature. The dress will move; the veil will lift; the bride's hair will not stay in place, and that is when the photographs become extraordinary.",
      },
      {
        type: "h2",
        content: "On light",
      },
      {
        type: "p",
        content:
          "The light at the coast is the most beautiful light there is. It is also the hardest. Plan your ceremony for the hour before sunset, not the hour after. The colors will be softer; the shadows kinder; the photographs more cinematic.",
      },
      {
        type: "h2",
        content: "On salt",
      },
      {
        type: "p",
        content:
          "Bring a small towel. Bring two. The hem of the dress will be heavier by the end of the day. Wear shoes you don't mind ruining. Bring a second pair, neutral-toned, for the reception.",
      },
    ],
  },
];

export function getJournalBySlug(slug: string): JournalPost | undefined {
  return journal.find((p) => p.slug === slug);
}

export function getRelatedJournal(
  currentSlug: string,
  count = 2,
): JournalPost[] {
  return journal.filter((p) => p.slug !== currentSlug).slice(0, count);
}
