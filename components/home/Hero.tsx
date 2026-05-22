"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { img, PHOTOS } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-ink text-cream">
      {/* Background Image with Ken Burns effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={img(PHOTOS.heroCoastal, 2400)}
          alt="A coastal wedding ceremony at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      
      {/* Enhanced gradient overlay with vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/80" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ink/40" />

      {/* Top eyebrow with decorative line */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-28 md:top-32 left-0 right-0"
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between text-cream/80">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-cream/40" />
              <span className="font-italiana text-[0.75rem] uppercase tracking-[0.4em]">
                Texas · Arizona
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="font-italiana text-[0.75rem] uppercase tracking-[0.4em]">
                Family Owned
              </span>
              <span className="h-px w-8 bg-cream/40" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Center display with enhanced typography */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl"
          >
            {/* Decorative element above title */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 1.2, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-pink mb-8 md:mb-12"
            />
            
            <h1 className="font-display font-light text-cream text-[clamp(3.5rem,11vw,12rem)] leading-[0.88] tracking-[-0.025em]">
              Celebrate
              <br />
              <span className="italic font-light text-cream/95">Every</span>
              <br />
              <span className="relative inline-block">
                Moment
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-pink"
                >
                  .
                </motion.span>
              </span>
            </h1>
            
            {/* Subtitle with better spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 md:mt-12 font-body text-[1.0625rem] md:text-xl text-cream/90 leading-[1.8] max-w-2xl"
            >
              Award-winning photography, videography, DJ services & coordination — with unlimited time coverage.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom row with enhanced design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-12 md:bottom-20 left-0 right-0"
      >
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Left side - tagline */}
            <div className="flex items-start gap-6 max-w-md">
              <span className="h-px w-12 bg-cream/30 mt-3 hidden md:block" />
              <p className="font-body text-[0.9375rem] md:text-base text-cream/75 leading-[1.7] italic">
                From first look to last dance —{" "}
                <span className="font-display not-italic text-cream">unlimited time</span>, transparent pricing.
              </p>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <Link
                href="/portfolio"
                className="group relative inline-flex items-center gap-4 font-italiana text-[0.8125rem] uppercase tracking-[0.38em] text-cream pb-3 overflow-hidden"
              >
                <span className="relative z-10">View Our Work</span>
                <motion.span
                  className="relative z-10 transition-transform duration-700 ease-editorial group-hover:translate-x-2"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
                <span className="absolute bottom-0 left-0 right-0 h-px bg-cream/40 group-hover:bg-cream transition-colors duration-500" />
              </Link>
              <span className="font-italiana text-[0.6875rem] uppercase tracking-[0.35em] text-cream/50">
                5 Cities · Full Service
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="font-italiana text-[0.6875rem] uppercase tracking-[0.45em] text-cream/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-px h-12 bg-gradient-to-b from-cream/40 via-cream/20 to-transparent" />
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cream"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
