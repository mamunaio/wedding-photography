import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { journal, getJournalBySlug, getRelatedJournal } from "@/lib/data/journal";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";

export async function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalBySlug(slug);
  if (!post) notFound();

  const related = getRelatedJournal(post.slug, 2);

  return (
    <article>
      {/* Hero — image with title overlay */}
      <section className="relative h-[80svh] min-h-[600px] w-full overflow-hidden bg-ink text-cream">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-ink/80" />
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <div className="container-narrow">
            <p className="font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-cream/80 mb-6">
              {post.category} · {post.readTime}
            </p>
            <h1 className="font-display font-light text-cream text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.01em] max-w-3xl">
              {post.title}
            </h1>
            <p className="mt-6 font-italiana text-sm tracking-[0.35em] uppercase text-cream/70">
              {post.date}
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-narrow">
          <Reveal>
            <p className="font-display text-2xl md:text-3xl font-light italic leading-[1.4] text-graphite mb-12 pb-12 border-b border-ink/10">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="space-y-8">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <Reveal key={i}>
                    <h2 className="font-display text-3xl md:text-4xl font-light leading-tight tracking-[-0.005em] text-ink mt-8">
                      {block.content}
                    </h2>
                  </Reveal>
                );
              }
              if (block.type === "quote") {
                return (
                  <Reveal key={i}>
                    <blockquote className="my-12 md:my-16 py-10 md:py-12 border-y border-ink/10 text-center">
                      <p className="font-display text-2xl md:text-4xl font-light italic leading-[1.3] text-taupe max-w-3xl mx-auto">
                        &ldquo;{block.content}&rdquo;
                      </p>
                    </blockquote>
                  </Reveal>
                );
              }
              if (block.type === "image") {
                return (
                  <Reveal key={i} className="my-12 md:my-16 -mx-6 md:-mx-12">
                    <ImageReveal
                      src={block.content}
                      alt="Inline editorial image"
                      aspect="landscape"
                      sizes="100vw"
                    />
                  </Reveal>
                );
              }
              return (
                <Reveal key={i}>
                  <p
                    className={
                      i === 0 || post.body[i - 1]?.type === "h2"
                        ? "body-lg first-of-type:first-letter:font-display first-of-type:first-letter:text-7xl first-of-type:first-letter:font-light first-of-type:first-letter:float-left first-of-type:first-letter:leading-[0.85] first-of-type:first-letter:mr-3 first-of-type:first-letter:mt-1 first-of-type:first-letter:text-taupe"
                        : "body-lg"
                    }
                  >
                    {block.content}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {/* Author signature */}
          <Reveal>
            <div className="mt-20 pt-12 border-t border-ink/10 flex items-center gap-4">
              <div className="h-px flex-1 bg-ink/15" />
              <p className="font-italiana text-xs tracking-[0.4em] uppercase text-taupe">
                M.H. for Aurelia & Vow
              </p>
              <div className="h-px flex-1 bg-ink/15" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel label="Continue reading" />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
            {related.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/journal/${post.slug}`} className="group block">
                  <ImageReveal
                    src={post.cover}
                    alt={post.title}
                    aspect="landscape"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    containerClassName="mb-8"
                  />
                  <p className="eyebrow mb-3">
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light leading-tight group-hover:text-taupe transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="mt-4 body-md text-graphite/80 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/journal"
              className="inline-flex items-center gap-3 font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-graphite hover:text-ink transition-colors duration-500 border-b border-ink/20 pb-2"
            >
              All journal entries
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
