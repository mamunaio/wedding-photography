import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Faq from "@/components/services/Faq";
import { services } from "@/lib/data/services";
import { img, PHOTOS } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing — Eternal Moments",
  description:
    "Photography, videography, DJ services, and coordination packages. Transparent pricing with unlimited time coverage. Starting at $2,495.",
};

const process = [
  {
    n: "01",
    title: "Inquire",
    body: "Send us a note. Tell us a little about your day, your venue, and what kind of photographs you have always imagined.",
  },
  {
    n: "02",
    title: "Connect",
    body: "We will set up a video call, walk you through our collections, and answer every question you have. No pressure, no scripts.",
  },
  {
    n: "03",
    title: "Book",
    body: "A 25% retainer secures your date. We send a contract, a planning document, and a small welcome gift in the post.",
  },
  {
    n: "04",
    title: "Plan",
    body: "Two pre-wedding consultations to map the timeline, the venues, and the people who matter most.",
  },
  {
    n: "05",
    title: "Wedding day",
    body: "We arrive early, photograph quietly, and do not leave until the last guest has left the dance floor.",
  },
  {
    n: "06",
    title: "Heirloom delivery",
    body: "A preview gallery within seven days. Your full gallery within eight weeks. Your album, hand-bound in Florence, within sixteen.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment & process"
        title={
          <>
            Three collections,{" "}
            <em className="italic">made to be passed down</em>
            <span className="text-pink">.</span>
          </>
        }
        subtitle="Each collection is built around a different shape of day — from a quiet half-day ceremony to a four-day destination celebration."
        image={img(PHOTOS.heroVineyard, 2400)}
        alt="A wedding ceremony at golden hour"
        align="center"
      />

      {/* Intro statement */}
      <section className="relative py-32 md:py-44 bg-cream overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
        <div className="absolute bottom-20 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
        
        <div className="container-narrow text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-pink/40" />
              <SectionLabel
                number="01"
                label="A note on investment"
                align="center"
              />
              <div className="h-px w-12 bg-pink/40" />
            </div>
            <p className="mt-12 font-display text-2xl md:text-4xl font-light leading-[1.3] text-ink max-w-[28ch] mx-auto">
              We accept fifteen weddings a year. Our collections begin at{" "}
              <span className="text-pink font-normal">$5,400</span>. The average
              investment with our studio is{" "}
              <span className="text-pink font-normal">$11,200</span>.
            </p>
            <p className="mt-10 body-lg max-w-xl mx-auto text-graphite/80">
              We believe in pricing transparency. The numbers below are exactly
              what you will pay — not estimates, not starting points, not
              add-ons hidden behind a phone call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed packages */}
      <section className="py-24 md:py-40 bg-gradient-to-b from-bone to-cream">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {services.map((service, i) => (
              <Reveal
                key={service.name}
                delay={i * 0.1}
                className={cn(
                  "relative bg-cream rounded-sm overflow-hidden flex flex-col transition-all duration-700",
                  service.popular
                    ? "lg:scale-[1.06] shadow-2xl shadow-ink/10 border-2 border-pink/20"
                    : "border border-ink/10 hover:border-pink/30 hover:shadow-xl hover:shadow-ink/5",
                )}
              >
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brass/50 via-brass to-brass/50" />
                )}

                <div className="p-10 md:p-12">
                  {service.popular && (
                    <div className="inline-flex items-center gap-2 bg-pink/10 text-pink font-italiana text-[0.6875rem] uppercase tracking-[0.35em] px-4 py-2 mb-6 rounded-full">
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                      Most chosen
                    </div>
                  )}

                  <div className="mb-8">
                    <p className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-pink mb-4">
                      Collection 0{i + 1}
                    </p>
                    <h3 className="font-display text-[2.5rem] md:text-5xl font-light leading-[1.1] text-ink mb-2">
                      {service.name}
                    </h3>
                    <p className="font-italiana text-xs tracking-[0.3em] uppercase text-graphite/60">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="body-md text-graphite/80 mb-8 leading-relaxed">{service.description}</p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="label mb-4 text-graphite/70 flex items-center gap-2">
                        <span className="w-4 h-px bg-pink/40" />
                        Includes
                      </p>
                      <ul className="space-y-3">
                        {service.inclusions.map((inc, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-sm leading-relaxed text-graphite/90"
                          >
                            <Check className="w-4 h-4 text-pink mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {service.addOns && (
                      <div>
                        <p className="label mb-3 text-graphite/70 flex items-center gap-2">
                          <span className="w-4 h-px bg-ink/20" />
                          Add-ons available
                        </p>
                        <ul className="space-y-2">
                          {service.addOns.map((a, j) => (
                            <li
                              key={j}
                              className="text-sm text-graphite/70 italic pl-7"
                            >
                              + {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-auto p-10 md:p-12 pt-8 border-t border-ink/10 bg-bone/30">
                  <p className="label mb-3 text-graphite/60">{service.duration}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="label text-graphite/70">Investment from</span>
                    <span className="font-display text-[2.5rem] font-light text-ink">
                      {service.startingAt}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom note */}
          <Reveal delay={0.4}>
            <div className="mt-16 text-center">
              <p className="font-italiana text-sm tracking-[0.25em] text-graphite/60">
                All collections include travel within the continental U.S.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process / How we work */}
      <section className="relative py-32 md:py-48 bg-ink text-cream overflow-hidden">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-px h-full bg-cream" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-cream" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-cream" />
        </div>

        <div className="container-editorial relative">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-pink/60" />
              <SectionLabel number="02" label="The process" tone="cream" />
            </div>
            <h2 className="mt-6 display-lg max-w-[16ch] text-cream">
              From inquiry to{" "}
              <em className="italic">heirloom album</em>
              <span className="text-pink">.</span>
            </h2>
            <p className="mt-8 body-lg text-cream/70 max-w-xl">
              Six steps. Sixteen months on average. Done quietly and with care.
            </p>
          </Reveal>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="relative">
                  {/* Decorative corner */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-l border-t border-pink/30" />
                  
                  <div className="flex items-start gap-6">
                    <span className="font-italiana text-sm tracking-[0.4em] text-pink pt-1 min-w-[2.5rem]">
                      {p.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-[1.75rem] font-light leading-tight text-cream mb-4">
                        {p.title}
                      </h3>
                      <p className="body-md text-cream/70 leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Album feature */}
      <section className="py-32 md:py-40 bg-cream">
        <div className="container-editorial grid grid-cols-12 gap-y-16 md:gap-x-20 items-center">
          <div className="col-span-12 md:col-span-7 md:order-2">
            <ImageReveal
              src={img(PHOTOS.editorialC, 1600)}
              alt="Hand-bound heirloom album"
              aspect="landscape"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>

          <div className="col-span-12 md:col-span-5 md:order-1">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-pink/40" />
                <SectionLabel number="03" label="The heirloom album" />
              </div>
              <h2 className="mt-6 display-md max-w-[14ch]">
                Made by hand,{" "}
                <em className="italic">in Florence</em>
                <span className="text-pink">.</span>
              </h2>
              <div className="mt-8 space-y-5 body-md text-graphite/80 leading-relaxed">
                <p>
                  Every Heirloom and Atelier collection ships with a hand-bound
                  Italian leather album, made in a small bindery a stone's
                  throw from the Arno.
                </p>
                <p>
                  Edge-stitched and foil-stamped with your monogram. Wrapped in
                  vegetable-tanned leather that softens and deepens with the
                  decades. Designed by us, printed on archival cotton paper, and
                  boxed in a linen-wrapped slipcase.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 md:py-48 bg-bone">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-y-16 md:gap-x-20">
            <div className="col-span-12 md:col-span-4">
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-pink/40" />
                  <SectionLabel number="04" label="Frequently asked" />
                </div>
                <h2 className="mt-6 display-md max-w-[10ch]">
                  Honest <em className="italic">answers</em>
                  <span className="text-pink">.</span>
                </h2>
                <p className="mt-6 body-md max-w-sm text-graphite/80">
                  If your question is not below, write to us. We answer every
                  inquiry personally within two working days.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <Reveal delay={0.1}>
                <Faq />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-cream to-bone overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-px h-64 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
        <div className="absolute top-1/2 right-10 w-px h-64 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
        
        <div className="container-narrow text-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-pink/40" />
              <p className="eyebrow">Ready when you are</p>
              <div className="h-px w-8 bg-pink/40" />
            </div>
            <h2 className="display-lg max-w-[20ch] mx-auto">
              Tell us about your day —{" "}
              <em className="italic">we will reply with care</em>
              <span className="text-pink">.</span>
            </h2>
            <div className="mt-12">
              <Button href="/contact" variant="filled">
                Begin an inquiry
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
