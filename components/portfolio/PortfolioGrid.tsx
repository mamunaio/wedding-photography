"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

const categories = ["All", "Wedding", "Elopement", "Engagement"] as const;
type Category = (typeof categories)[number];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-editorial">
        {/* Filter row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16 md:mb-24 pb-6 border-b border-ink/10">
          <div className="flex items-center flex-wrap gap-x-8 gap-y-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "font-italiana text-[0.8125rem] uppercase tracking-[0.35em] transition-colors duration-500 pb-1 border-b",
                  filter === cat
                    ? "text-ink border-ink"
                    : "text-graphite/60 border-transparent hover:text-ink",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="font-italiana text-xs tracking-[0.3em] text-taupe">
            {String(filtered.length).padStart(2, "0")}{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-32"
          >
            {filtered.map((entry, i) => (
              <Link
                key={entry.slug}
                href={`/portfolio/${entry.slug}`}
                className={cn(
                  "group block",
                  // Editorial offsets: alternate margin-top for staggered grid
                  i % 2 === 1 && "md:mt-24",
                )}
              >
                <div className="relative overflow-hidden bg-bone aspect-[4/5]">
                  <Image
                    src={entry.cover}
                    alt={`${entry.couple} — ${entry.location}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-700" />
                </div>

                <div className="mt-8 flex items-baseline justify-between gap-6">
                  <div>
                    <p className="eyebrow mb-3">{entry.category}</p>
                    <h3 className="font-display text-3xl md:text-4xl font-light leading-tight tracking-[-0.005em]">
                      {entry.couple}
                    </h3>
                    <p className="mt-2 font-italiana text-xs tracking-[0.25em] uppercase text-taupe">
                      {entry.location}
                    </p>
                  </div>
                  <span className="font-italiana text-[0.75rem] tracking-[0.25em] text-graphite/50 whitespace-nowrap">
                    {entry.date.split(" ").pop()}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
