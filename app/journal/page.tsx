import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { journal } from "@/lib/data/journal";
import { img, PHOTOS } from "@/lib/images";

export const metadata: Metadata = {
  title: "Journal",
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
            Letters from the <em className="italic">studio desk</em>.
          </>
        }
        subtitle="Slow writing on the work — featured weddings, advice for couples, and reflections on the craft of documentary photography."
        image={img(PHOTOS.editorialB, 2400)}
        alt="The studio desk"
        align="center"
      />

      {/* Featured / latest */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel label="Latest entry" />
          </Reveal>

          <Link
            href={`/journal/${featured.slug}`}
            className="group mt-12 grid grid-cols-12 gap-y-10 md:gap-x-16 items-center"
          >
            <div className="col-span-12 md:col-span-7">
              <ImageReveal
                src={featured.cover}
                alt={featured.title}
                aspect="landscape"
                sizes="(min-width: 768px) 60vw, 100vw"
                containerClassName="transition-transform duration-1000 ease-editorial group-hover:scale-[0.99]"
              />
            </div>
            <div className="col-span-12 md:col-span-5">
              <Reveal delay={0.1}>
                <p className="eyebrow mb-4">
                  {featured.category} · {featured.readTime}
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-[-0.01em]">
                  <span className="link-underline">{featured.title}</span>
                </h2>
                <p className="mt-6 body-md max-w-md">{featured.excerpt}</p>
                <p className="mt-8 font-italiana text-[0.75rem] uppercase tracking-[0.3em] text-taupe">
                  {featured.date}
                </p>
              </Reveal>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid of remaining */}
      <section className="py-20 md:py-32 bg-bone">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel label="All entries" />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 md:gap-y-24">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <ImageReveal
                    src={post.cover}
                    alt={post.title}
                    aspect="portrait"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    containerClassName="mb-8"
                  />
                  <p className="eyebrow mb-3">
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light leading-tight tracking-[-0.005em] group-hover:text-taupe transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="mt-4 body-md text-graphite/80 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 font-italiana text-[0.75rem] uppercase tracking-[0.3em] text-taupe">
                    {post.date}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
