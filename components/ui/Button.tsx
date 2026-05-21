import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "filled" | "outline" | "ghost";
  tone?: "ink" | "cream";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "filled",
  tone = "ink",
  className,
  external,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 font-body text-[0.7rem] uppercase tracking-[0.25em] py-4 px-8 transition-all duration-700 ease-editorial";

  const styles = {
    filled:
      tone === "ink"
        ? "bg-ink text-cream hover:bg-graphite"
        : "bg-cream text-ink hover:bg-bone",
    outline:
      tone === "ink"
        ? "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream"
        : "border border-cream/30 text-cream hover:border-cream hover:bg-cream hover:text-ink",
    ghost:
      tone === "ink"
        ? "text-ink hover:text-graphite px-0"
        : "text-cream hover:text-cream/70 px-0",
  };

  const content = (
    <>
      <span>{children}</span>
      <span className="transition-transform duration-700 ease-editorial group-hover:translate-x-1.5">
        →
      </span>
    </>
  );

  if (!href) {
    return (
      <button className={cn(base, styles[variant], className)}>
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(base, styles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
      {content}
    </Link>
  );
}
