import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AccessForm from "@/components/client-access/AccessForm";
import { img, PHOTOS } from "@/lib/images";
import { Download, Heart, Share2, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Client access",
  description: "Access your private wedding gallery.",
};

const features = [
  {
    icon: ImageIcon,
    title: "Your full gallery",
    body: "Every photograph from your day, in full resolution, organized into chapters.",
  },
  {
    icon: Heart,
    title: "Favorite & curate",
    body: "Mark your favorites, build a collection for your album, and share with family.",
  },
  {
    icon: Download,
    title: "High-res downloads",
    body: "Download in two sizes — web-ready and print-ready — with full usage rights.",
  },
  {
    icon: Share2,
    title: "Share with anyone",
    body: "Send a link to family and guests. They can view and download their favorites too.",
  },
];

export default function ClientAccessPage() {
  return (
    <>
      {/* Full-bleed hero with form */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-cream flex items-center">
        <Image
          src={img(PHOTOS.candlelight, 2400)}
          alt="A quiet moment, photographed"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/85" />

        <div className="relative container-editorial py-32 md:py-40">
          <div className="grid grid-cols-12 gap-y-16 md:gap-x-16 items-center">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <SectionLabel label="Client access" tone="cream" />
                <h1 className="mt-8 font-display font-light text-cream text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-[-0.015em] max-w-[14ch]">
                  Welcome <em className="italic">back</em>.
                </h1>
                <p className="mt-8 body-lg text-cream/80 max-w-md">
                  Enter your gallery name or the code from your delivery email
                  to access your private collection.
                </p>
              </Reveal>
            </div>

            <div className="col-span-12 md:col-span-5">
              <Reveal delay={0.2}>
                <div className="border border-cream/15 bg-ink/40 backdrop-blur-md p-10 md:p-12">
                  <p className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-pink mb-8">
                    Private gallery
                  </p>
                  <AccessForm />

                  <div className="mt-10 pt-8 border-t border-cream/10 space-y-3 text-xs text-cream/60">
                    <p>
                      Your gallery name was included in your delivery email,
                      typically your first names + wedding year (e.g.,{" "}
                      <span className="italic text-cream/80">olivia-henry</span>
                      ).
                    </p>
                    <p>
                      Cannot find it?{" "}
                      <Link
                        href="/contact"
                        className="underline underline-offset-4 text-cream hover:text-pink"
                      >
                        Write to us
                      </Link>{" "}
                      and we will resend.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-32 md:py-44 bg-cream">
        <div className="container-editorial">
          <Reveal>
            <SectionLabel label="What you'll find inside" />
            <h2 className="mt-6 display-md max-w-[20ch]">
              Your gallery, made to be{" "}
              <em className="italic">held & shared</em>.
            </h2>
            <p className="mt-6 body-lg max-w-xl">
              We deliver every gallery through Pixieset — the industry's most
              trusted client gallery platform. It is private, beautiful, and
              built to last.
            </p>
          </Reveal>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-x-10">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="flex flex-col items-start gap-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 border border-ink/15 text-purple">
                    <f.icon className="w-5 h-5" strokeWidth={1.25} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-light leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-3 body-md text-graphite max-w-xs">
                      {f.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Help / FAQ */}
      <section className="py-24 md:py-32 bg-bone">
        <div className="container-narrow">
          <Reveal>
            <SectionLabel label="Need help?" />
            <h2 className="mt-6 display-md max-w-[16ch]">
              We are here, <em className="italic">always</em>.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {[
              {
                q: "When will my gallery arrive?",
                a: "Within eight weeks of your wedding. You will receive a preview gallery within seven days.",
              },
              {
                q: "How long is my gallery available?",
                a: "Galleries remain accessible for two years from delivery. We can extend on request.",
              },
              {
                q: "Can I share with family?",
                a: "Yes — send the gallery link freely. Each guest can view and download their favorites.",
              },
              {
                q: "Are downloads watermark-free?",
                a: "Always. You receive full-resolution, watermark-free files with full print release.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-display text-xl font-light leading-tight text-ink">
                  {item.q}
                </p>
                <p className="mt-3 body-md max-w-md">{item.a}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 pt-8 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-italiana text-xs tracking-[0.3em] uppercase text-graphite/60">
              Questions about your gallery?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-graphite hover:text-ink transition-colors duration-500 border-b border-ink/20 pb-2"
            >
              Write to the studio
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
