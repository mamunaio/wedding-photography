"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Wedding", "Elopement", "Engagement"] as const;
type Category = (typeof categories)[number];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  return (
    <section className="relative py-20 md:py-32 bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 right-10 w-px h-64 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
      <div className="absolute bottom-40 left-10 w-px h-48 bg-gradient-to-b from-transparent via-brass/10 to-transparent" />
      
      <div className="container-editorial">
        {/* Enhanced Filter Section */}
        <div className="relative mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-8 border-b border-ink/15">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-pink/40" />
                <span className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-pink">
                  Filter by type
                </span>
              </div>
              <div className="flex items-center flex-wrap gap-x-6 gap-y-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={cn(
                      "relative font-italiana text-[0.9375rem] uppercase tracking-[0.3em] transition-all duration-500 pb-2",
                      filter === cat
                        ? "text-ink"
                        : "text-graphite/50 hover:text-ink",
                    )}
                  >
                    {cat}
                    {filter === cat && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute bottom-0 left-0 right-0 h-px bg-pink"
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-ink/20" />
              <p className="font-italiana text-sm tracking-[0.3em] text-purple">
                {String(filtered.length).padStart(2, "0")}{" "}
                <span className="text-graphite/60">
                  {filtered.length === 1 ? "story" : "stories"}
                </span>
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-24 md:gap-y-40"
          >
            {filtered.map((entry, i) => (
              <Link
                key={entry.slug}
                href={`/portfolio/${entry.slug}`}
                className={cn(
                  "group block",
                  // Editorial offsets: alternate margin-top for staggered grid
                  i % 2 === 1 && "md:mt-32",
                )}
              >
                <div className="relative">
                  {/* Image container with enhanced hover effect */}
                  <div className="relative overflow-hidden bg-bone aspect-[4/5] mb-8">
                    <Image
                      src={entry.cover}
                      alt={`${entry.couple} — ${entry.location}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-all duration-[1600ms] ease-editorial group-hover:scale-[1.06]"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Hover icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-ink" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content section with better spacing */}
                  <div className="relative">
                    {/* Decorative line */}
                    <div className="absolute -left-6 top-0 w-px h-full bg-gradient-to-b from-brass/30 via-brass/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-italiana text-[0.75rem] uppercase tracking-[0.35em] text-pink">
                            {entry.category}
                          </span>
                          <span className="h-px w-6 bg-pink/30" />
                          <span className="font-italiana text-[0.6875rem] tracking-[0.3em] text-graphite/50">
                            {entry.date.split(" ").pop()}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-[2rem] md:text-[2.5rem] font-light leading-[1.1] tracking-[-0.01em] text-ink mb-3 transition-colors duration-500 group-hover:text-pink">
                          {entry.couple}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-purple">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <p className="font-italiana text-xs tracking-[0.25em] uppercase">
                            {entry.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* View project link */}
                    <div className="mt-6 flex items-center gap-2 font-italiana text-[0.75rem] uppercase tracking-[0.3em] text-graphite/60 group-hover:text-ink transition-colors duration-500">
                      <span>View story</span>
                      <motion.span
                        className="transition-transform duration-700 ease-editorial"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom decorative element */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-italiana text-sm tracking-[0.3em] text-graphite/60">
              No stories found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
