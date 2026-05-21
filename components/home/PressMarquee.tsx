import Marquee from "@/components/ui/Marquee";
import { site } from "@/lib/data/site";

export default function PressMarquee() {
  return (
    <section className="py-20 md:py-28 bg-ink text-cream overflow-hidden">
      <div className="container-editorial">
        <p className="font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-brass text-center mb-10">
          As featured in
        </p>
      </div>
      <Marquee items={[...site.press]} className="text-cream" />
    </section>
  );
}
