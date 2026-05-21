import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { img, PHOTOS } from "@/lib/images";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small studio in Charleston, photographing weddings worldwide since 2014.",
};

const principles = [
  {
    n: "01",
    title: "Documentary first",
    body: "We are quiet observers. We do not pose your guests, interrupt your ceremony, or stage moments that did not happen. The day is yours.",
  },
  {
    n: "02",
    title: "Editorial sensibility",
    body: "Restraint. Negative space. The tension between motion and stillness. We approach each wedding the way a magazine approaches a portrait sitting.",
  },
  {
    n: "03",
    title: "Heirloom-quality print",
    body: "Every gallery is paired with a hand-bound album, made in a small bindery in Florence. The album is the only object that survives a wedding.",
  },
  {
    n: "04",
    title: "Trusted, never rushed",
    body: "We accept a small number of weddings each year — fifteen, no more. This is not a hedge against scale; it is the only way to do this work well.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Aurelia & Vow founded",
    body: "Established in a converted carriage house in downtown Charleston after a decade as a documentary photographer.",
  },
  {
    year: "2017",
    title: "First international wedding",
    body: "A four-day celebration in the Cotswolds. The beginning of our love affair with the long destination wedding.",
  },
  {
    year: "2020",
    title: "The album program",
    body: "Partnered with a small bindery in Florence to begin our hand-bound heirloom album program. Every wedding now ships with one.",
  },
  {
    year: "2024",
    title: "Junebug — Best of the Best",
    body: "Recognized among the world's best documentary wedding photographers. The honor is small; the gratitude is enormous.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title={
          <>
            We are a small studio,
            <br />
            <em className="italic">made by hand</em>.
          </>
        }
        subtitle="Founded in Charleston in 2014. Photographing weddings worldwide. Quiet, editorial, and devoted to the long view."
        image={img(PHOTOS.editorialA, 2400)}
        alt="The studio at work"
        align="left"
      />

      {/* Lead paragraph */}
      <section className="py-32 md:py-48 bg-cream">
        <div className="container-narrow">
          <Reveal>
            <SectionLabel number="01" label="A letter from the studio" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-12 font-display text-3xl md:text-5xl font-light leading-[1.2] tracking-[-0.005em] text-ink">
              For ten years now, we have made our living standing quietly at the
              edge of other people's most important days — and we still find it
              the most extraordinary thing in the world.
            </p>
          </Reveal>
          <div className="mt-12 space-y-6 body-lg text-graphite">
            <Reveal delay={0.15}>
              <p>
                Aurelia & Vow began as a single photographer with a single
                medium-format camera, a small studio in downtown Charleston, and
                the conviction that wedding photography had become — somewhere
                along the way — too loud. Too directed. Too eager to be seen.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                A decade later, we are a small team of three. We photograph
                fifteen weddings a year. We have shot in thirty-four states and
                twelve countries. We have made galleries that have been wept
                over, framed, and passed down. We are still, somehow, learning
                how to do this well — and we suspect that is the only way to do
                it well at all.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photographer split */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-editorial grid grid-cols-12 gap-y-12 md:gap-x-16 items-center">
          <div className="col-span-12 md:col-span-5">
            <ImageReveal
              src={img(PHOTOS.photographer, 1200)}
              alt="Lead photographer portrait"
              aspect="portrait"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-6">The photographer</p>
              <h2 className="display-lg max-w-[12ch]">
                Margaux <em className="italic">Hollister</em>.
              </h2>
              <div className="mt-10 space-y-6 body-lg text-graphite">
                <p>
                  Margaux is the studio's founder and lead photographer. She was
                  raised in a small town in Provence by a French mother and a
                  Carolinian father, and trained as a documentary
                  photojournalist before turning to weddings full-time in 2014.
                </p>
                <p>
                  She works in a quiet, observational style — equal parts Henri
                  Cartier-Bresson and Sally Mann. Her photographs have appeared
                  in Vogue, Brides, and Magnolia Rouge, and she is a member of
                  the Junebug network of the world's best documentary wedding
                  photographers.
                </p>
                <p>
                  She lives in Charleston with her husband, two daughters, and
                  a rescue greyhound named Pim.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-32 md:py-48 bg-ink text-cream">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel number="02" label="What we believe" tone="cream" />
            <h2 className="mt-6 display-lg max-w-[20ch] text-cream">
              Four convictions that{" "}
              <em className="italic">shape every wedding</em>.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="flex gap-8">
                  <span className="font-italiana text-xs tracking-[0.4em] text-brass pt-2">
                    {p.n}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-4 body-md text-cream/70 max-w-md">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 md:py-48 bg-cream">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel number="03" label="A short history" />
            <h2 className="mt-6 display-lg max-w-[16ch]">
              A decade,
              <br /> <em className="italic">in four chapters</em>.
            </h2>
          </Reveal>

          <div className="mt-20 max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="grid grid-cols-12 gap-6 py-10 border-t border-ink/10 last:border-b">
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-display text-3xl md:text-4xl font-light text-taupe">
                      {t.year}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-display text-2xl md:text-3xl font-light leading-tight">
                      {t.title}
                    </h3>
                    <p className="mt-3 body-md max-w-xl">{t.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Press / Awards */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-y-16 md:gap-x-16">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <SectionLabel number="04" label="Press & recognition" />
                <h2 className="mt-6 display-md max-w-[12ch]">
                  In good <em className="italic">company</em>.
                </h2>
                <p className="mt-6 body-md max-w-md">
                  We are quietly proud of the homes our work has found.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal delay={0.1}>
                <p className="label mb-6 text-graphite/60">As featured in</p>
                <div className="grid grid-cols-2 gap-y-3">
                  {site.press.map((p) => (
                    <p key={p} className="font-display text-lg md:text-xl">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2} className="mt-12">
                <p className="label mb-6 text-graphite/60">Awards</p>
                <ul className="space-y-3">
                  {site.awards.map((a, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-6 pb-3 border-b border-ink/10"
                    >
                      <span className="font-display text-base md:text-lg">
                        {a.label}
                      </span>
                      <span className="font-italiana text-xs tracking-[0.3em] text-taupe whitespace-nowrap">
                        {a.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="eyebrow mb-8">Begin a conversation</p>
            <h2 className="display-lg max-w-[18ch] mx-auto">
              We would love to hear about{" "}
              <em className="italic">your day</em>.
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="filled">
                Begin an inquiry
              </Button>
              <Button href="/services" variant="outline">
                See investment
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
