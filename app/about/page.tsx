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
    "Family-owned wedding photography, videography, and DJ services. Meet Michael & Sarah Chen, founders of Eternal Moments.",
};

const principles = [
  {
    n: "01",
    title: "Unlimited Time",
    body: "No hourly limits, no watching the clock. We stay from your first look to your last dance. Your day unfolds at your pace, not ours.",
  },
  {
    n: "02",
    title: "Transparent Pricing",
    body: "No surprise fees. No hidden charges. Everything is included in your package. What you see is what you pay — always.",
  },
  {
    n: "03",
    title: "Completely Custom",
    body: "From playlists to poses, shot lists to timelines — everything is tailored to you. Your style, your vibe, your people.",
  },
  {
    n: "04",
    title: "Completely Reliable",
    body: "Backup equipment, backup team members, backup plans A through Z. Rain or shine, emergency or not — we will be at your wedding.",
  },
];

const timeline = [
  {
    year: "2017",
    title: "The Beginning",
    body: "Michael & Sarah got married and experienced firsthand the stress of coordinating multiple vendors. They knew there had to be a better way.",
  },
  {
    year: "2019",
    title: "Eternal Moments Founded",
    body: "Started with just photography services in Houston. The mission: provide stress-free, unforgettable wedding experiences with unlimited time coverage.",
  },
  {
    year: "2022",
    title: "Full-Service Expansion",
    body: "Added videography, DJ services, photo booths, and day-of coordination. Expanded to Dallas, Austin, San Antonio, and Phoenix.",
  },
  {
    year: "2026",
    title: "Award-Winning Team",
    body: "Recognized by The Knot, WeddingWire, and Zola as Best of Weddings. Now serving 100+ couples per year across Texas and Arizona.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Family Owned,
            <br />
            <em className="italic">Made with Love</em>.
          </>
        }
        subtitle="Founded by Michael & Sarah Chen. Serving Texas and Arizona with award-winning photography, videography, DJ services, and coordination."
        image={img(PHOTOS.editorialA, 2400)}
        alt="Michael and Sarah Chen, founders of Eternal Moments"
        align="left"
      />

      {/* Lead paragraph */}
      <section className="py-32 md:py-48 bg-cream">
        <div className="container-narrow">
          <Reveal>
            <SectionLabel number="01" label="Our Story" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-12 font-display text-3xl md:text-5xl font-light leading-[1.2] tracking-[-0.005em] text-ink">
              We started Eternal Moments because we believe no couple should have to stress about their wedding day.
            </p>
          </Reveal>
          <div className="mt-12 space-y-6 body-lg text-graphite">
            <Reveal delay={0.15}>
              <p>
                When Michael and Sarah got married, they experienced firsthand the challenges of coordinating multiple vendors, watching the clock, and worrying about hidden fees. They knew there had to be a better way.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Today, Eternal Moments is a full-service wedding company serving over 100 couples per year across Texas and Arizona. We offer unlimited time coverage, transparent pricing, and a coordinated team that works together seamlessly — so you can focus on celebrating, not stressing.
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
              alt="Alex and Jennifer Leon"
              aspect="portrait"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-6">The Founders</p>
              <h2 className="display-lg max-w-[12ch]">
                Michael & Sarah <em className="italic">Chen</em>.
              </h2>
              <div className="mt-10 space-y-6 body-lg text-graphite">
                <p>
                  Michael and Sarah are the husband-and-wife team behind Eternal Moments. After experiencing the stress of planning their own wedding, they founded the company with a simple mission: make weddings stress-free and unforgettable.
                </p>
                <p>
                  Michael brings his background in event production and DJ services, while Sarah's expertise in photography and coordination ensures every detail is captured and executed flawlessly. Together, they've built a team of talented photographers, videographers, DJs, and coordinators who share their passion for creating magic moments.
                </p>
                <p>
                  Based in Houston with teams across Texas and Arizona, they've photographed and coordinated hundreds of weddings — from intimate backyard ceremonies to grand ballroom celebrations.
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
            <SectionLabel number="02" label="Our Values" tone="cream" />
            <h2 className="mt-6 display-lg max-w-[20ch] text-cream">
              Four promises{" "}
              <em className="italic">we make to every couple</em>.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="flex gap-8">
                  <span className="font-italiana text-xs tracking-[0.4em] text-pink pt-2">
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
            <SectionLabel number="03" label="Our Journey" />
            <h2 className="mt-6 display-lg max-w-[16ch]">
              Our story,
              <br /> <em className="italic">in four chapters</em>.
            </h2>
          </Reveal>

          <div className="mt-20 max-w-3xl mx-auto">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="grid grid-cols-12 gap-6 py-10 border-t border-ink/10 last:border-b">
                  <div className="col-span-12 md:col-span-3">
                    <p className="font-display text-3xl md:text-4xl font-light text-purple">
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
                      <span className="font-italiana text-xs tracking-[0.3em] text-purple whitespace-nowrap">
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
            <p className="eyebrow mb-8">Let's Create Magic Together</p>
            <h2 className="display-lg max-w-[18ch] mx-auto">
              Ready to celebrate{" "}
              <em className="italic">like you mean it</em>?
            </h2>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="filled">
                Get in Touch
              </Button>
              <Button href="/services" variant="outline">
                View Packages
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
