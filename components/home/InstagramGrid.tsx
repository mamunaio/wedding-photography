import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { instagramFeed } from "@/lib/data/instagram";
import { Instagram } from "lucide-react";

export default function InstagramGrid() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-editorial">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <SectionLabel number="07" label="Elsewhere" />
              <h2 className="mt-6 display-md max-w-[16ch]">
                Follow along on{" "}
                <em className="italic">Instagram</em>.
              </h2>
            </div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-graphite hover:text-ink transition-colors duration-500"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.25} />
              @aureliaandvow
              <span className="transition-transform duration-700 ease-editorial group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {instagramFeed.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.04}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden bg-bone"
              >
                <Image
                  src={post.src}
                  alt="Instagram post"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-1000 ease-editorial group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Instagram
                    className="w-6 h-6 text-cream"
                    strokeWidth={1}
                  />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
