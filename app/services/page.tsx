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

export const metadata: Metadata = {
  title: "Investment",
  description:
    "Three collections, made to be passed down. From half-day ceremonies to multi-day destination celebrations.",
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
            <em className="italic">made to be passed down</em>.
          </>
        }
        subtitle="Each collection is built around a different shape of day — from a quiet half-day ceremony to a four-day destination celebration."
        image={img(PHOTOS.heroVineyard, 2400)}
        alt="A wedding ceremony at golden hour"
        align="center"
      />

      {/* Intro statement */}
      <section className="py-32 md:py-44 bg-cream">
        <div className="container-narrow text-center">
          <Reveal>
            <SectionLabel
              number="01"
              label="A note on investment"
              align="center"
            />
            <p className="mt-12 font-display text-2xl md:text-4xl font-light leading-[1.3] text-ink max-w-[28ch] mx-auto">
              We accept fifteen weddings a year. Our collections begin at{" "}
              <em className="italic text-taupe">$5,400</em>. The average
              investment with our studio is{" "}
              <em className="italic text-taupe">$11,200</em>.
            </p>
            <p className="mt-10 body-lg max-w-xl mx-auto">
              We believe in pricing transparency. The numbers below are exactly
              what you will pay — not estimates, not starting points, not
              add-ons hidden behind a phone call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed packages */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-x-8">
            {services.map((service, i) => (
              <Reveal
                key={service.name}
                delay={i * 0.1}
                className={cn(
                  "relative bg-cream p-10 md:p-12 flex flex-col",
                  service.popular &&
                    "lg:scale-[1.04] lg:shadow-2xl lg:shadow-ink/5",
                )}
              >
                {service.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ink text-cream font-italiana text-[0.6rem] uppercase tracking-[0.4em] px-5 py-2">
                    Most chosen
                  </span>
                )}

                <div className="mb-10">
                  <p className="font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-taupe mb-4">
                    Collection 0{i + 1}
                  </p>
                  <h3 className="font-display text-4xl md:text-5xl font-light leading-tight">
                    {service.name}
                  </h3>
                  <p className="mt-2 font-italiana text-xs tracking-[0.3em] uppercase text-graphite/60">
                    {service.subtitle}
                  </p>
                </div>

                <p className="body-md mb-10">{service.description}</p>

                <p className="label mb-4 text-graphite/60">Includes</p>
                <ul className="space-y-3 mb-10">
                  {service.inclusions.map((inc, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-graphite"
                    >
                      <span className="text-brass mt-[0.45rem] flex-shrink-0">
                        ·
                      </span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                {service.addOns && (
                  <>
                    <p className="label mb-4 text-graphite/60">Add-ons</p>
                    <ul className="space-y-2 mb-10">
                      {service.addOns.map((a, j) => (
                        <li
                          key={j}
                          className="text-sm text-graphite/70 italic"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-auto pt-8 border-t border-ink/10">
                  <p className="label mb-2 text-graphite/60">{service.duration}</p>
                  <div className="flex items-baseline justify-between">
                    <span className="label">Investment from</span>
                    <span className="font-display text-3xl font-light">
                      {service.startingAt}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How we work */}
      <section className="py-32 md:py-48 bg-ink text-cream">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel number="02" label="The process" tone="cream" />
            <h2 className="mt-6 display-lg max-w-[16ch] text-cream">
              From inquiry to{" "}
              <em className="italic">heirloom album</em>.
            </h2>
            <p className="mt-8 body-lg text-cream/70 max-w-xl">
              Six steps. Sixteen months on average. Done quietly and with care.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <div className="flex gap-8">
                  <span className="font-italiana text-xs tracking-[0.4em] text-brass pt-2">
                    {p.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-light leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 body-md text-cream/70 max-w-md">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Album feature */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-editorial grid grid-cols-12 gap-y-12 md:gap-x-16 items-center">
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
              <SectionLabel number="03" label="The heirloom album" />
              <h2 className="mt-6 display-md max-w-[14ch]">
                Made by hand,{" "}
                <em className="italic">in Florence</em>.
              </h2>
              <div className="mt-8 space-y-5 body-md">
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
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-16">
            <div className="col-span-12 md:col-span-4">
              <Reveal>
                <SectionLabel number="04" label="Frequently asked" />
                <h2 className="mt-6 display-md max-w-[10ch]">
                  Honest <em className="italic">answers</em>.
                </h2>
                <p className="mt-6 body-md max-w-sm">
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
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="eyebrow mb-8">Ready when you are</p>
            <h2 className="display-lg max-w-[20ch] mx-auto">
              Tell us about your day —{" "}
              <em className="italic">we will reply with care</em>.
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
