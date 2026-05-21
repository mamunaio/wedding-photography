import { cn } from "@/lib/utils";

type Props = {
  number?: string;
  label: string;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
};

export default function SectionLabel({
  number,
  label,
  align = "left",
  tone = "ink",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        className,
      )}
    >
      {number && (
        <span
          className={cn(
            "font-body text-[0.75rem] tracking-[0.15em] font-semibold",
            tone === "ink" ? "text-purple" : "text-pink",
          )}
        >
          {number}
        </span>
      )}
      <span
        className={cn(
          "h-px w-10",
          tone === "ink" ? "bg-ink/20" : "bg-cream/30",
        )}
      />
      <span
        className={cn(
          "font-body text-[0.75rem] uppercase tracking-[0.25em] font-semibold",
          tone === "ink" ? "text-graphite" : "text-cream/80",
        )}
      >
        {label}
      </span>
    </div>
  );
}
