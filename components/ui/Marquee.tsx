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
  // Duplicate the list so the marquee loops seamlessly.
  const looped = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden whitespace-nowrap",
        className,
      )}
    >
      <div className="flex animate-marquee gap-12 will-change-transform">
        {looped.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl md:text-4xl font-light italic"
          >
            {item}
            <span className="text-taupe not-italic text-base">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
