import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import InquiryForm from "@/components/contact/InquiryForm";
import { img, PHOTOS } from "@/lib/images";
import { site } from "@/lib/data/site";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Begin a conversation with the studio. We answer every inquiry personally within two working days.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin a conversation"
        title={
          <>
            Tell us about{" "}
            <em className="italic">your day</em>.
          </>
        }
        subtitle="We answer every inquiry personally within two working days. There are no chatbots, no contact-center scripts — only us, replying with care."
        image={img(PHOTOS.heroEmbrace, 2400)}
        alt="A couple's quiet moment"
        align="center"
      />

      {/* Form + sidebar */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-y-16 md:gap-x-16">
            {/* Form */}
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <SectionLabel number="01" label="Inquiry form" />
                <h2 className="mt-6 display-md max-w-[14ch]">
                  Begin <em className="italic">here</em>.
                </h2>
                <p className="mt-6 body-md max-w-md">
                  Fill in as much or as little as you would like. We will reply
                  with our full pricing guide and a few thoughts about your day.
                </p>
              </Reveal>

              <div className="mt-12 md:mt-16">
                <InquiryForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="col-span-12 md:col-span-4 md:col-start-9">
              <Reveal delay={0.15}>
                <div className="bg-bone p-10 md:p-12 sticky top-32">
                  <p className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-taupe mb-6">
                    The studio
                  </p>
                  <h3 className="font-display text-3xl font-light leading-tight">
                    Aurelia <em className="italic">& Vow</em>
                  </h3>
                  <p className="mt-3 body-md text-graphite max-w-xs">
                    {site.tagline}
                  </p>

                  <ul className="mt-10 space-y-6 text-sm">
                    <li className="flex gap-4">
                      <Mail
                        className="w-4 h-4 mt-1 text-taupe flex-shrink-0"
                        strokeWidth={1.25}
                      />
                      <div>
                        <p className="label mb-1 text-graphite/60">Email</p>
                        <a
                          href={`mailto:${site.email}`}
                          className="font-display text-base hover:text-taupe transition-colors duration-300"
                        >
                          {site.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Phone
                        className="w-4 h-4 mt-1 text-taupe flex-shrink-0"
                        strokeWidth={1.25}
                      />
                      <div>
                        <p className="label mb-1 text-graphite/60">Phone</p>
                        <p className="font-display text-base">{site.phone}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <MapPin
                        className="w-4 h-4 mt-1 text-taupe flex-shrink-0"
                        strokeWidth={1.25}
                      />
                      <div>
                        <p className="label mb-1 text-graphite/60">Studio</p>
                        <p className="font-display text-base">
                          {site.location.city}, {site.location.region}
                        </p>
                        <p className="text-xs text-graphite/60 mt-1">
                          {site.available}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Calendar
                        className="w-4 h-4 mt-1 text-taupe flex-shrink-0"
                        strokeWidth={1.25}
                      />
                      <div>
                        <p className="label mb-1 text-graphite/60">Hours</p>
                        <p className="font-display text-base">
                          Tuesday — Friday
                        </p>
                        <p className="text-xs text-graphite/60 mt-1">
                          10am — 5pm Eastern
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Cal.com / consultation booking */}
      <section className="py-24 md:py-32 bg-ink text-cream">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-16 items-center">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <SectionLabel
                  number="02"
                  label="Or book a call"
                  tone="cream"
                />
                <h2 className="mt-6 display-md max-w-[14ch] text-cream">
                  A quiet thirty <em className="italic">minutes</em>.
                </h2>
                <div className="mt-8 space-y-5 body-md text-cream/75">
                  <p>
                    Prefer to talk? Book a complimentary consultation directly
                    on our calendar. We will walk you through our process,
                    answer questions, and listen.
                  </p>
                  <p>No pressure, no scripts, no hard sell.</p>
                </div>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal delay={0.15}>
                {/* Cal.com embed placeholder */}
                <div className="border border-cream/15 bg-graphite/30 backdrop-blur-sm p-10 md:p-12">
                  <p className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-brass mb-6">
                    Calendar embed
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light leading-tight">
                    Schedule a 30-minute consultation
                  </h3>
                  <p className="mt-4 text-sm text-cream/65 max-w-md">
                    Cal.com embed will live here in production. For now, you
                    can write to us at{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="underline underline-offset-4 hover:text-cream"
                    >
                      {site.email}
                    </a>
                    .
                  </p>

                  <div className="mt-10 grid grid-cols-2 gap-3">
                    {[
                      "Tue · 10:00",
                      "Tue · 14:00",
                      "Wed · 11:00",
                      "Thu · 09:30",
                      "Thu · 15:00",
                      "Fri · 13:00",
                    ].map((slot) => (
                      <button
                        key={slot}
                        className="group border border-cream/20 py-3 px-4 text-sm font-display tracking-wide text-cream/80 hover:bg-cream hover:text-ink hover:border-cream transition-all duration-500 text-left"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="mt-10 inline-flex items-center gap-3 font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-cream/80 hover:text-cream transition-colors duration-500 border-b border-cream/30 pb-2"
                  >
                    See full calendar
                    <span>→</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container-narrow text-center">
          <Reveal>
            <p className="font-display text-2xl md:text-4xl font-light italic leading-[1.3] text-graphite max-w-[28ch] mx-auto">
              "We never feel the work of writing a wedding inquiry is wasted —
              every couple deserves the same care, whether they book us or not."
            </p>
            <p className="mt-8 font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-taupe">
              Margaux, the studio
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
