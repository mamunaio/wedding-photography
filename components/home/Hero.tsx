"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { img, PHOTOS } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink text-cream">
      <Image
        src={img(PHOTOS.heroCoastal, 2400)}
        alt="A coastal wedding ceremony at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/70" />

      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-32 left-0 right-0"
      >
        <div className="container-editorial flex items-center justify-between text-cream/70">
          <span className="font-italiana text-[0.65rem] uppercase tracking-[0.4em]">
            Charleston · Worldwide
          </span>
          <span className="hidden md:inline-block font-italiana text-[0.65rem] uppercase tracking-[0.4em]">
            Est. 2014
          </span>
        </div>
      </motion.div>

      {/* Center display */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <h1 className="font-display font-light text-cream text-[clamp(3.5rem,11vw,11rem)] leading-[0.92] tracking-[-0.02em]">
              Heirloom
              <br />
              <span className="italic font-light">wedding</span>
              <br />
              photography
              <span className="text-brass">.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 md:bottom-16 left-0 right-0"
      >
        <div className="container-editorial flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <p className="font-body text-base md:text-lg text-cream/85 leading-relaxed max-w-md">
            Quiet, editorial weddings — told with restraint, romance, and
            reverence. For couples who want their day{" "}
            <em className="font-display italic text-cream">remembered</em>, not
            performed.
          </p>

          <div className="flex flex-col items-start md:items-end gap-3">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 font-italiana text-[0.7rem] uppercase tracking-[0.4em] text-cream border-b border-cream/40 pb-2 hover:border-cream transition-colors duration-500"
            >
              View the portfolio
              <span className="transition-transform duration-700 ease-editorial group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-italiana text-[0.6rem] uppercase tracking-[0.4em] text-cream/50">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-cream/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
