import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-px h-32 bg-gradient-to-b from-transparent via-ink/10 to-transparent" />
      <div className="absolute bottom-32 left-0 w-px h-40 bg-gradient-to-b from-transparent via-ink/10 to-transparent" />
      
      <div className="container-editorial">
        <Reveal>
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-pink/40" />
            <SectionLabel number="01" label="A note from the studio" />
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 lg:col-start-1">
            <Reveal>
              <div className="relative">
                {/* Decorative quote mark */}
                <div className="absolute -left-4 md:-left-8 -top-2 text-pink/20 font-display text-[8rem] leading-none pointer-events-none select-none">
                  "
                </div>
                <h2 className="display-lg max-w-[18ch] relative">
                  We are quiet observers of an{" "}
                  <em className="italic font-light text-ink/90">unrepeatable day</em>
                  <span className="text-pink">.</span>
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <Reveal delay={0.15}>
              <div className="relative">
                {/* Decorative line */}
                <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brass/40 via-brass/20 to-transparent hidden md:block" />
                
                <div className="space-y-6 body-lg text-ink/80">
                  <p className="leading-relaxed">
                    Aurelia & Vow is a small studio devoted to the unhurried art
                    of wedding photography. Our work is documentary at its core —
                    intimate, editorial, and meant to be held in the hand{" "}
                    <span className="text-ink font-medium">fifty years from now</span>.
                  </p>
                  <p className="leading-relaxed">
                    We believe a wedding is a story. The best photographs are the
                    ones that would{" "}
                    <span className="italic">have happened anyway</span> — the half-second a
                    grandmother adjusts her veil, the look across a crowded room,
                    the quiet just before the door opens.
                  </p>
                </div>

                {/* Decorative element at bottom */}
                <div className="mt-10 flex items-center gap-4 text-ink/40">
                  <div className="h-px w-8 bg-ink/20" />
                  <span className="font-italiana text-xs uppercase tracking-[0.3em]">
                    Since 2014
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
