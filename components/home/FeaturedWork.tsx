import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolio } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

export default function FeaturedWork() {
  const featured = portfolio.slice(0, 4);

  return (
    <section className="py-24 md:py-40 bg-bone">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <SectionLabel number="02" label="Featured weddings" />
            <h2 className="display-lg mt-6 max-w-[14ch]">
              Recent <em className="italic">stories</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-italiana text-[0.8125rem] uppercase tracking-[0.4em] text-graphite hover:text-ink transition-colors duration-500 border-b border-ink/10 hover:border-ink/30 pb-2"
            >
              View full portfolio
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>

        {/* Editorial alternating layout */}
        <div className="mt-20 md:mt-32 space-y-32 md:space-y-48">
          {featured.map((entry, i) => {
            const isOdd = i % 2 === 1;
            return (
              <article
                key={entry.slug}
                className="grid grid-cols-12 gap-y-8 md:gap-x-10 items-end"
              >
                <Link
                  href={`/portfolio/${entry.slug}`}
                  className={cn(
                    "block group col-span-12",
                    isOdd
                      ? "md:col-span-7 md:col-start-1"
                      : "md:col-span-7 md:col-start-6",
                  )}
                >
                  <ImageReveal
                    src={entry.cover}
                    alt={`${entry.couple} — ${entry.location}`}
                    aspect={i === 0 || i === 3 ? "wide" : "landscape"}
                    sizes="(min-width: 768px) 60vw, 100vw"
                    containerClassName="transition-transform duration-1000 ease-editorial group-hover:scale-[0.99]"
                  />
                </Link>

                <div
                  className={cn(
                    "col-span-12",
                    isOdd
                      ? "md:col-span-4 md:col-start-9"
                      : "md:col-span-4 md:col-start-1",
                  )}
                >
                  <Reveal delay={0.1}>
                    <p className="eyebrow mb-4 opacity-80">
                      {String(i + 1).padStart(2, "0")} ·{" "}
                      {entry.category}
                    </p>
                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1] tracking-[-0.015em]">
                      <Link
                        href={`/portfolio/${entry.slug}`}
                        className="link-underline"
                      >
                        {entry.couple}
                      </Link>
                    </h3>
                    <p className="mt-4 font-italiana text-[0.8125rem] tracking-[0.25em] uppercase text-purple/80">
                      {entry.location}
                    </p>
                    <p className="mt-6 body-md max-w-md opacity-90 leading-relaxed">{entry.excerpt}</p>
                    <Link
                      href={`/portfolio/${entry.slug}`}
                      className="group mt-8 inline-flex items-center gap-2 font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-graphite hover:text-ink transition-colors duration-500"
                    >
                      Read the story
                      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </Link>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
