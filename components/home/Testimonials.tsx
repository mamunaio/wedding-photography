"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  return (
    <section className="py-32 md:py-48 bg-cream">
      <div className="container-editorial">
        <Reveal>
          <SectionLabel number="05" label="From our couples" />
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-5xl lg:text-6xl font-light italic leading-[1.2] tracking-[-0.01em] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-12 flex flex-col items-center gap-2">
                  <p className="font-display text-xl text-graphite">
                    {t.couple}
                  </p>
                  <p className="font-italiana text-[0.8125rem] uppercase tracking-[0.3em] text-taupe">
                    {t.location} · {t.date}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <button
            onClick={() =>
              setIndex((i) => (i - 1 + total) % total)
            }
            className="font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-graphite hover:text-ink transition-colors duration-500"
            aria-label="Previous testimonial"
          >
            ← Prev
          </button>
          <span className="font-italiana text-xs tracking-[0.3em] text-taupe">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => setIndex((i) => (i + 1) % total)}
            className="font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-graphite hover:text-ink transition-colors duration-500"
            aria-label="Next testimonial"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
