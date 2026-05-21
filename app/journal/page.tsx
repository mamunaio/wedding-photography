import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { journal } from "@/lib/data/journal";
import { img, PHOTOS } from "@/lib/images";
import { ArrowUpRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal — Aurelia & Vow",
  description:
    "Field notes, advice, and slow craft from the studio. Featured weddings, reflections on the work, and the occasional letter to couples.",
};

export default function JournalPage() {
  const [featured, ...rest] = journal;

  return (
    <>
      <PageHero
        eyebrow="Journal · Field notes"
        title={
          <>
            Letters from the <em className="italic">studio desk</em>
            <span className="text-pink">.</span>
          </>
        }
        subtitle="Slow writing on the work — featured weddings, advice for couples, and reflections on the craft of documentary photography."
        image={img(PHOTOS.editorialB, 2400)}
        alt="The studio desk"
        align="center"
      />

      {/* Featured / latest */}
      <section className="relative py-24 md:py-36 bg-cream overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-px h-48 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
        <div className="absolute bottom-20 left-10 w-px h-64 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
        
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-12 bg-pink/40" />
              <SectionLabel label="Latest entry" />
            </div>
          </Reveal>

          <Link
            href={`/journal/${featured.slug}`}
            className="group grid grid-cols-12 gap-y-12 md:gap-x-20 items-center"
          >
            <div className="col-span-12 md:col-span-7 relative">
              {/* Category badge on image */}
              <div className="absolute top-6 left-6 z-10 bg-cream/95 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <span className="font-italiana text-[0.6875rem] uppercase tracking-[0.35em] text-pink">
                  {featured.category}
                </span>
              </div>
              
              <ImageReveal
                src={featured.cover}
                alt={featured.title}
                aspect="landscape"
                sizes="(min-width: 768px) 60vw, 100vw"
                containerClassName="transition-all duration-1000 ease-editorial group-hover:scale-[0.98]"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="col-span-12 md:col-span-5">
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3 mb-6 text-graphite/60">
                  <Clock className="w-4 h-4" strokeWidth={1.5} />
                  <span className="font-italiana text-[0.75rem] tracking-[0.3em] uppercase">
                    {featured.readTime}
                  </span>
                </div>

                <h2 className="font-display text-[2.5rem] md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[-0.015em] text-ink mb-6 transition-colors duration-500 group-hover:text-pink">
                  {featured.title}
                </h2>

                <p className="body-lg text-graphite/80 leading-relaxed max-w-md mb-8">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-ink/10">
                  <span className="font-italiana text-[0.75rem] uppercase tracking-[0.3em] text-purple">
                    {featured.date}
                  </span>
                  
                  <div className="flex items-center gap-2 font-italiana text-[0.75rem] uppercase tracking-[0.3em] text-graphite/60 group-hover:text-ink transition-colors duration-500">
                    <span>Read more</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
                  </div>
                </div>
              </Reveal>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid of remaining */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-bone to-cream">
        <div className="container-editorial">
          <Reveal>
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-pink/40" />
                <SectionLabel label="All entries" />
              </div>
              <span className="font-italiana text-xs tracking-[0.3em] text-graphite/60">
                {rest.length} {rest.length === 1 ? "article" : "articles"}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 md:gap-y-32">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="relative mb-8">
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10 bg-cream/95 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="font-italiana text-[0.625rem] uppercase tracking-[0.35em] text-pink">
                        {post.category}
                      </span>
                    </div>

                    <ImageReveal
                      src={post.cover}
                      alt={post.title}
                      aspect="portrait"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      containerClassName="transition-all duration-1000 ease-editorial group-hover:shadow-2xl group-hover:shadow-ink/10"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="relative">
                    {/* Decorative line on hover */}
                    <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-brass/40 via-brass/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex items-center gap-2 mb-4 text-graphite/60">
                      <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                      <span className="font-italiana text-[0.6875rem] tracking-[0.3em] uppercase">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-[1.75rem] md:text-3xl font-light leading-[1.15] tracking-[-0.005em] text-ink mb-4 transition-colors duration-500 group-hover:text-pink">
                      {post.title}
                    </h3>

                    <p className="body-md text-graphite/75 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-ink/10">
                      <span className="font-italiana text-[0.6875rem] uppercase tracking-[0.3em] text-purple">
                        {post.date}
                      </span>
                      
                      <ArrowUpRight 
                        className="w-4 h-4 text-graphite/40 transition-all duration-700 group-hover:text-pink group-hover:translate-x-1 group-hover:-translate-y-1" 
                        strokeWidth={1.5} 
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/3 w-px h-full bg-cream" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-cream" />
        </div>

        <div className="container-narrow text-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-pink/60" />
              <span className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-pink">
                Stay in touch
              </span>
              <div className="h-px w-8 bg-pink/60" />
            </div>

            <h2 className="display-md max-w-[20ch] mx-auto text-cream mb-6">
              New entries, once a month —{" "}
              <em className="italic">delivered quietly</em>
              <span className="text-pink">.</span>
            </h2>

            <p className="body-md text-cream/70 max-w-lg mx-auto mb-10">
              No spam, no sales pitches. Just thoughtful writing on weddings, photography, and the work we love.
            </p>

            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-cream/10 border border-cream/20 rounded-sm text-cream placeholder:text-cream/40 font-body text-sm focus:outline-none focus:border-pink transition-colors duration-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-pink text-ink font-italiana text-[0.75rem] uppercase tracking-[0.3em] rounded-sm hover:bg-cream transition-colors duration-500"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-6 font-italiana text-[0.6875rem] tracking-[0.3em] uppercase text-cream/40">
              Unsubscribe anytime
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
