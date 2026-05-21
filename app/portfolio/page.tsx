import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { img, PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Portfolio — Aurelia & Vow",
  description:
    "Selected weddings, elopements, and engagements from our recent work. Each story told with intention, intimacy, and editorial restraint.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work · 2024 — 2026"
        title={
          <>
            A decade of{" "}
            <em className="italic font-light">love stories</em>
            <span className="text-brass">.</span>
          </>
        }
        subtitle="Five recent weddings, told as they happened. Each one made of small, honest moments — and the kind of light that only exists once. Documentary photography for couples who value authenticity over performance."
        image={img(PHOTOS.heroBride, 2400)}
        alt="Bride portrait in natural light"
        align="center"
      />
      <PortfolioGrid />
    </>
  );
}
