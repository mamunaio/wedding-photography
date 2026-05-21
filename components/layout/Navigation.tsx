"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data/site";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Investment" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Inquire" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Pages with full-bleed dark hero — nav should start transparent + light
  const transparentRoutes = ["/", "/about", "/services", "/contact"];
  const isPortfolioDetail = pathname?.startsWith("/portfolio/");
  const isJournalDetail = pathname?.startsWith("/journal/");
  const startTransparent =
    transparentRoutes.includes(pathname || "") ||
    isPortfolioDetail ||
    isJournalDetail;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDarkMode = startTransparent && !scrolled;
  
  // Check if we're on a dark section even when scrolled
  const shouldUseDarkNavbar = startTransparent;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-editorial",
          scrolled
            ? shouldUseDarkNavbar 
              ? "bg-ink/90 backdrop-blur-xl border-b border-cream/10"
              : "bg-cream/90 backdrop-blur-xl border-b border-ink/5"
            : "bg-transparent",
        )}
      >
        <div className="container-editorial flex items-center justify-between py-5 md:py-6">
          <Link
            href="/"
            className={cn(
              "font-display text-xl md:text-2xl tracking-tight transition-colors duration-500",
              shouldUseDarkNavbar ? "text-cream" : "text-ink",
            )}
          >
            <span className="font-light italic">Aurelia</span>
            <span className="mx-2 opacity-60">&</span>
            <span className="font-light">Vow</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-body text-[0.8125rem] uppercase tracking-[0.2em] transition-colors duration-500",
                  shouldUseDarkNavbar
                    ? "text-cream/85 hover:text-cream"
                    : "text-graphite hover:text-ink",
                  pathname === link.href &&
                    (shouldUseDarkNavbar ? "text-cream" : "text-ink"),
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 right-0 h-px",
                      shouldUseDarkNavbar ? "bg-cream" : "bg-ink",
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>

          <Link
            href="/client-access"
            className={cn(
              "hidden lg:inline-block font-body text-[0.8125rem] uppercase tracking-[0.2em] transition-colors duration-500",
              shouldUseDarkNavbar
                ? "text-cream/85 hover:text-cream"
                : "text-graphite hover:text-ink",
            )}
          >
            Client Access
          </Link>

          <button
            onClick={() => setOpen(true)}
            className={cn(
              "lg:hidden p-2 -mr-2 transition-colors duration-500",
              shouldUseDarkNavbar ? "text-cream" : "text-ink",
            )}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.25} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-ink text-cream"
          >
            <div className="container-editorial flex items-center justify-between py-5 md:py-6">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-display text-xl md:text-2xl"
              >
                <span className="font-light italic">Aurelia</span>
                <span className="mx-2 opacity-60">&</span>
                <span className="font-light">Vow</span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.25} />
              </button>
            </div>

            <div className="container-editorial pt-12 pb-20 flex flex-col h-[calc(100vh-90px)]">
              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-5xl font-light tracking-tight border-b border-cream/10"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-6">
                <Link
                  href="/client-access"
                  onClick={() => setOpen(false)}
                  className="label text-cream/70 hover:text-cream"
                >
                  Client Access →
                </Link>
                <div className="hairline bg-cream/10" />
                <div className="flex flex-col gap-1 text-cream/60 text-sm">
                  <span>{site.email}</span>
                  <span>
                    {site.location.city}, {site.location.region}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
