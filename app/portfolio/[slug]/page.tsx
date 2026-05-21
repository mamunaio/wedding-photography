import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { portfolio, getPortfolioBySlug } from "@/lib/data/portfolio";
import StoryGallery from "@/components/portfolio/StoryGallery";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export async function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPortfolioBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.couple} · ${entry.location}`,
    description: entry.excerpt,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getPortfolioBySlug(slug);
  if (!entry) notFound();

  // next/previous
  const idx = portfolio.findIndex((p) => p.slug === entry.slug);
  const next = portfolio[(idx + 1) % portfolio.length];
  const prev = portfolio[(idx - 1 + portfolio.length) % portfolio.length];

  return (
    <article>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-cream">
        <Image
          src={entry.hero}
          alt={`${entry.couple} — ${entry.location}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/15 to-ink/80" />

        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="container-editorial">
            <p className="font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-cream/70 mb-6">
              {entry.category} · {entry.date}
            </p>
            <h1 className="font-display font-light text-cream text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-[-0.015em] max-w-[14ch]">
              {entry.partners.one}
              <span className="italic"> & </span>
              {entry.partners.two}
              <span className="text-brass">.</span>
            </h1>
            <p className="mt-8 font-italiana text-sm tracking-[0.35em] uppercase text-cream/80">
              {entry.location}
            </p>
          </div>
        </div>
      </section>

      {/* Intro / story opening */}
      <section className="py-24 md:py-40 bg-cream">
        <div className="container-narrow">
          <Reveal>
            <SectionLabel label="The story" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-12 font-display text-3xl md:text-5xl font-light italic leading-[1.2] tracking-[-0.005em] text-ink max-w-[28ch]">
              {entry.description}
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-ink/10">
            <div>
              <p className="label mb-2">Date</p>
              <p className="font-display text-lg">{entry.date}</p>
            </div>
            <div>
              <p className="label mb-2">Location</p>
              <p className="font-display text-lg">{entry.location}</p>
            </div>
            <div>
              <p className="label mb-2">Venue</p>
              <p className="font-display text-lg">{entry.venue}</p>
            </div>
            <div>
              <p className="label mb-2">Category</p>
              <p className="font-display text-lg">{entry.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-40 bg-cream">
        <StoryGallery images={entry.images} />
      </section>

      {/* Story body */}
      <section className="py-24 md:py-40 bg-bone">
        <div className="container-narrow">
          <Reveal>
            <SectionLabel label="In their words — & ours" />
          </Reveal>
          <div className="mt-12 space-y-8 body-lg text-graphite">
            {entry.story.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={
                    i === 0
                      ? "first-letter:font-display first-letter:text-7xl first-letter:font-light first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-taupe"
                      : ""
                  }
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vendors */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-narrow">
          <Reveal>
            <SectionLabel label="Vendor team" />
            <h2 className="display-md mt-6">
              The hands that made it{" "}
              <em className="italic">happen</em>.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/10 border-y border-ink/10">
            {entry.vendors.map((v, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                className="flex justify-between py-5 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <span className="label">{v.role}</span>
                <span className="font-display text-lg">{v.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous navigation */}
      <section className="bg-ink text-cream">
        <div className="container-editorial py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="group flex flex-col gap-4"
          >
            <span className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-brass">
              ← Previous wedding
            </span>
            <span className="font-display text-3xl md:text-4xl font-light leading-tight">
              <span className="link-underline">{prev.couple}</span>
            </span>
            <span className="font-italiana text-xs tracking-[0.25em] uppercase text-cream/60">
              {prev.location}
            </span>
          </Link>

          <Link
            href={`/portfolio/${next.slug}`}
            className="group flex flex-col gap-4 md:items-end md:text-right"
          >
            <span className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-brass">
              Next wedding →
            </span>
            <span className="font-display text-3xl md:text-4xl font-light leading-tight">
              <span className="link-underline">{next.couple}</span>
            </span>
            <span className="font-italiana text-xs tracking-[0.25em] uppercase text-cream/60">
              {next.location}
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
