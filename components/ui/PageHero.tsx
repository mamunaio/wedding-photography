import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  alt: string;
  align?: "center" | "left";
  size?: "tall" | "medium";
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
  align = "center",
  size = "medium",
}: Props) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-ink text-cream",
        size === "tall" ? "h-[100svh]" : "h-[80svh] min-h-[640px]",
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
      <div className="absolute inset-0 flex items-end pb-20 md:pb-28">
        <div
          className={cn(
            "container-editorial flex flex-col gap-6",
            align === "center" && "items-center text-center",
          )}
        >
          {eyebrow && (
            <p className="font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-cream/80">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "display-xl text-cream max-w-[16ch]",
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "font-body text-base md:text-lg text-cream/75 max-w-xl leading-relaxed",
                align === "center" && "mx-auto",
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
