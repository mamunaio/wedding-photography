import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Philosophy() {
  return (
    <section className="py-32 md:py-48 bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel number="01" label="A note from the studio" />
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 lg:col-start-1">
            <Reveal>
              <h2 className="display-lg max-w-[18ch]">
                We are quiet observers of an{" "}
                <em className="italic font-light">unrepeatable day</em>.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.15}>
              <div className="space-y-6 body-lg">
                <p>
                  Aurelia & Vow is a small studio devoted to the unhurried art
                  of wedding photography. Our work is documentary at its core —
                  intimate, editorial, and meant to be held in the hand fifty
                  years from now.
                </p>
                <p>
                  We believe a wedding is a story. The best photographs are the
                  ones that would have happened anyway — the half-second a
                  grandmother adjusts her veil, the look across a crowded room,
                  the quiet just before the door opens.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
