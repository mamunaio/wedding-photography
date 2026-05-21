"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export default function AccessForm() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!code.trim()) return;
    setError(true);
    // In production: redirect to Pixieset gallery URL based on code
    // window.location.href = `https://aureliaandvow.pixieset.com/${code}`
    setTimeout(() => setError(false), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <Lock
          className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe"
          strokeWidth={1.25}
        />
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError(false);
          }}
          placeholder="Enter your gallery name or code"
          className="w-full bg-transparent border-0 border-b border-cream/30 py-4 pl-8 pr-12 text-lg font-display text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream transition-colors duration-300"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream transition-colors duration-300 p-2"
          aria-label="Continue"
        >
          <ArrowRight className="w-5 h-5" strokeWidth={1.25} />
        </button>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-italiana tracking-[0.2em] uppercase text-brass"
          >
            In production, this redirects to your Pixieset gallery.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
