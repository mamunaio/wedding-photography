# Aurelia & Vow

A premium wedding photography demo site, built as a portfolio piece. Editorial design language, full-bleed photography, and a complete information architecture for a high-end U.S. studio.

## Stack

- **Next.js 15** (App Router, SSG)
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3** for design system
- **Framer Motion** for editorial animations
- **Lenis** for smooth scroll
- **Lucide** for icons

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, featured work, philosophy, services preview, testimonials, journal teaser, Instagram grid |
| `/portfolio` | Filterable grid of all weddings (All / Wedding / Elopement / Engagement) |
| `/portfolio/[slug]` | Full wedding story with editorial gallery layout, vendor credits, prev/next navigation |
| `/about` | Studio story, photographer bio, principles, timeline, press, awards |
| `/services` | Three packages, six-step process, heirloom album feature, FAQ accordion |
| `/journal` | Journal listing (latest + grid) |
| `/journal/[slug]` | Article with rich body blocks (paragraphs, headings, quotes, inline images) |
| `/contact` | Inquiry form + Cal.com booking placeholder + studio details |
| `/client-access` | Pixieset gallery access placeholder |

## Design system

| Token | Value |
| --- | --- |
| Background | `#F5F1EC` cream |
| Surface | `#EDE6DC` bone |
| Ink | `#1C1B17` |
| Accent | `#8B6F47` taupe / `#A88A5C` brass |
| Display | Cormorant Garamond |
| Body | Inter |
| Italic accent | Italiana |

## Integrations (placeholder, ready to wire up)

- **Pixieset** — client galleries (linked from `/client-access`)
- **Cal.com** — consultation booking (placeholder UI on `/contact`)
- **Stripe Checkout** — retainer / deposit
- **Resend** — inquiry form email
- **Instagram Basic Display API** — feed widget

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

The build is fully static (SSG) and ready for Vercel deployment.

## Image sources

All photography for the demo is sourced from Unsplash (free license). Image IDs are centralized in `lib/images.ts` for easy replacement with the studio's real galleries.

