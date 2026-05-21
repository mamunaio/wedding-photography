import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { img, PHOTOS } from "@/lib/images";

export default function AboutTeaser() {
  return (
    <section className="py-32 md:py-48 bg-cream">
      <div className="container-editorial">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-16 items-center">
          <div className="col-span-12 md:col-span-5">
            <ImageReveal
              src={img(PHOTOS.editorialA, 1200)}
              alt="The studio at work"
              aspect="portrait"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <SectionLabel number="03" label="About the studio" />
              <h2 className="mt-6 display-lg max-w-[14ch]">
                A small studio,
                <br />
                <em className="italic">made by hand</em>.
              </h2>
              <div className="mt-10 space-y-6 body-lg">
                <p>
                  Aurelia & Vow was founded in a converted carriage house in
                  downtown Charleston in 2014. We have photographed close to
                  three hundred weddings since — across thirty-four states and
                  on five continents.
                </p>
                <p>
                  Every wedding is photographed by a senior photographer and a
                  second associate. Every gallery is hand-curated, hand-edited,
                  and delivered with a small letterpress note in the post.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="display-md text-taupe">
                    300<span className="text-graphite">+</span>
                  </p>
                  <p className="mt-2 label">weddings</p>
                </div>
                <div>
                  <p className="display-md text-taupe">34</p>
                  <p className="mt-2 label">U.S. states</p>
                </div>
                <div>
                  <p className="display-md text-taupe">12</p>
                  <p className="mt-2 label">countries</p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-12 inline-flex items-center gap-3 font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-graphite hover:text-ink transition-colors duration-500 border-b border-ink/20 pb-2"
              >
                Read the full story
                <span>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
