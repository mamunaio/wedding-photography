import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export default function ServicesPreview() {
  return (
    <section className="py-32 md:py-48 bg-ink text-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel number="04" label="Investment" tone="cream" />
          <h2 className="mt-6 display-lg max-w-[18ch] text-cream">
            Three collections,
            <br />
            <em className="italic">made to be passed down</em>.
          </h2>
          <p className="mt-8 body-lg text-cream/70 max-w-xl">
            Each collection is built around a different shape of day. Every
            collection includes a hand-curated digital gallery, full print
            release, and our undivided attention.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 border-t border-cream/15">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              delay={i * 0.1}
              className={cn(
                "py-12 md:py-16 md:px-10 first:md:pl-0 last:md:pr-0",
                i !== 0 && "md:border-l border-cream/15",
                i !== 0 && "md:border-t-0 border-t border-cream/15",
              )}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-brass">
                  0{i + 1}
                </span>
                {service.popular && (
                  <span className="font-italiana text-[0.75rem] uppercase tracking-[0.25em] text-brass">
                    Most chosen
                  </span>
                )}
              </div>
              <h3 className="font-display text-4xl font-light leading-tight">
                {service.name}
              </h3>
              <p className="mt-2 font-italiana text-xs tracking-[0.25em] uppercase text-cream/60">
                {service.subtitle}
              </p>
              <p className="mt-8 text-sm leading-relaxed text-cream/75">
                {service.description}
              </p>
              <div className="mt-10 pt-6 border-t border-cream/10 flex items-baseline justify-between">
                <span className="label text-cream/40">Begins at</span>
                <span className="font-display text-2xl font-light">
                  {service.startingAt}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-10 border-t border-cream/15">
          <p className="font-display text-2xl md:text-3xl font-light italic text-cream/85 max-w-2xl">
            "We did not have the words to describe what we wanted. They did."
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-3 font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-cream/80 hover:text-cream transition-colors duration-500 border-b border-cream/30 pb-2 self-start md:self-auto"
          >
            Full investment guide
            <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
