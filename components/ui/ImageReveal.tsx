"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "wide" | "auto";
  priority?: boolean;
  sizes?: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
  auto: "",
};

export default function ImageReveal({
  src,
  alt,
  aspect = "landscape",
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  containerClassName,
  delay = 0,
}: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative overflow-hidden bg-bone",
        aspectClass[aspect],
        containerClassName,
      )}
    >
      <motion.div
        initial={prefersReduced ? false : { scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 1.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", className)}
        />
      </motion.div>
    </motion.div>
  );
}
