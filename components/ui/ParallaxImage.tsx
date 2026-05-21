"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "wide";
  amount?: number; // pixels of vertical drift
  sizes?: string;
  className?: string;
  priority?: boolean;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

export default function ParallaxImage({
  src,
  alt,
  aspect = "landscape",
  amount = 60,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  priority,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-bone",
        aspectClass[aspect],
        className,
      )}
    >
      <motion.div style={{ y }} className="absolute -inset-y-12">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
