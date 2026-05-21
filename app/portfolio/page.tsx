import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { img, PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected weddings, elopements, and engagements from our recent work.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work · 2024 — 2026"
        title={
          <>
            A decade of <em className="italic font-light">love stories</em>.
          </>
        }
        subtitle="Five recent weddings, told as they happened. Each one made of small, honest moments — and the kind of light that only exists once."
        image={img(PHOTOS.heroBride, 2400)}
        alt="Bride portrait"
        align="center"
      />
      <PortfolioGrid />
    </>
  );
}
