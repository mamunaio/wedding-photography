"use client";

import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  separator?: string;
  className?: string;
};

export default function Marquee({
  items,
  separator = "✦",
  className,
}: Props) {
  // Duplicate items enough times for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden whitespace-nowrap",
        className,
      )}
    >
      <div className="inline-flex animate-marquee">
        {duplicatedItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 md:gap-12 px-4 md:px-6 font-display text-2xl md:text-4xl font-light italic"
          >
            {item}
            <span className="text-taupe not-italic text-base md:text-lg opacity-40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
