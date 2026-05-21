import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { journal } from "@/lib/data/journal";

export default function JournalTeaser() {
  const recent = journal.slice(0, 3);

  return (
    <section className="py-32 md:py-48 bg-bone">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <SectionLabel number="06" label="Journal" />
            <h2 className="mt-6 display-lg max-w-[14ch]">
              From the <em className="italic">studio desk</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-graphite hover:text-ink transition-colors duration-500 border-b border-ink/20 pb-2"
            >
              All entries
              <span>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {recent.map((post, i) => (
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
                <p className="mt-4 body-md text-graphite/80 line-clamp-3">
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
  );
}
