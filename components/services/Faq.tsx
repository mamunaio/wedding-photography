"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/lib/data/services";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-ink/10">
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={i} className="border-b border-ink/10">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl md:text-2xl font-light text-ink leading-tight pr-4">
                {item.q}
              </span>
              <span className="flex-shrink-0 text-purple transition-transform duration-500 ease-editorial group-hover:scale-110">
                {isOpen ? (
                  <Minus className="w-5 h-5" strokeWidth={1.25} />
                ) : (
                  <Plus className="w-5 h-5" strokeWidth={1.25} />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 md:pb-10 pr-12 body-md max-w-3xl text-graphite">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
