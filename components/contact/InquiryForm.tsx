"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  span?: 1 | 2;
};

const fields: Field[] = [
  { name: "yourName", label: "Your name", required: true, span: 1 },
  { name: "partnerName", label: "Partner's name", required: true, span: 1 },
  { name: "email", label: "Email", type: "email", required: true, span: 1 },
  { name: "phone", label: "Phone (optional)", type: "tel", span: 1 },
  { name: "weddingDate", label: "Wedding date", type: "date", span: 1 },
  { name: "guestCount", label: "Approx. guest count", type: "number", span: 1 },
  { name: "venue", label: "Venue or location", placeholder: "City, region, or specific venue", span: 2 },
];

const collections = [
  "The Ceremony — half day",
  "The Heirloom — full day",
  "The Atelier — multi-day / destination",
  "Not sure yet",
];

const heardFrom = [
  "A friend or family member",
  "Instagram",
  "Pinterest",
  "Google search",
  "Press feature (Vogue, Brides, etc.)",
  "Our venue or another vendor",
  "Other",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    // Simulate network
    setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-20"
          >
            <p className="font-italiana text-[0.8125rem] uppercase tracking-[0.35em] text-purple mb-8">
              Thank you
            </p>
            <p className="font-display text-3xl md:text-5xl font-light italic leading-[1.2] text-ink max-w-[24ch] mx-auto">
              Your note has arrived. We will reply within two working days.
            </p>
            <p className="mt-10 body-md text-graphite/70 max-w-md mx-auto">
              In the meantime, we have sent a small welcome letter to your inbox
              — including a sample gallery and our investment guide.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              {fields.map((f) => (
                <FieldInput key={f.name} field={f} />
              ))}
            </div>

            <div>
              <FieldLabel htmlFor="collection">
                Which collection interests you?
              </FieldLabel>
              <select
                id="collection"
                name="collection"
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a collection
                </option>
                {collections.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <FieldLabel htmlFor="story">
                Tell us about your day
              </FieldLabel>
              <textarea
                id="story"
                name="story"
                rows={6}
                placeholder="Where you are getting married, what kind of day you have imagined, who will be there, and anything else you would like us to know."
                className={cn(fieldClass, "resize-none")}
              />
            </div>

            <div>
              <FieldLabel htmlFor="heardFrom">
                How did you hear about us?
              </FieldLabel>
              <select
                id="heardFrom"
                name="heardFrom"
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                {heardFrom.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-6 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-xs text-graphite/60 italic max-w-md leading-relaxed">
                We answer every inquiry personally within two working days.
                Your details are private and never shared.
              </p>
              <button
                type="submit"
                disabled={pending}
                className="group inline-flex items-center gap-3 font-italiana text-[0.8125rem] uppercase tracking-[0.35em] bg-ink text-cream py-4 px-10 hover:bg-graphite transition-colors duration-700 ease-editorial disabled:opacity-50"
              >
                {pending ? "Sending…" : "Send inquiry"}
                <span className="transition-transform duration-700 ease-editorial group-hover:translate-x-1.5">
                  →
                </span>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

const fieldClass =
  "w-full bg-transparent border-0 border-b border-ink/20 py-3 text-base font-body text-ink placeholder:text-graphite/40 focus:outline-none focus:border-ink transition-colors duration-300 appearance-none rounded-none";

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-italiana text-[0.75rem] uppercase tracking-[0.3em] text-purple mb-3"
    >
      {children}
    </label>
  );
}

function FieldInput({ field }: { field: Field }) {
  return (
    <div className={field.span === 2 ? "md:col-span-2" : ""}>
      <FieldLabel htmlFor={field.name}>
        {field.label}
        {field.required && <span className="text-pink ml-1">·</span>}
      </FieldLabel>
      <input
        id={field.name}
        name={field.name}
        type={field.type || "text"}
        required={field.required}
        placeholder={field.placeholder}
        className={fieldClass}
      />
    </div>
  );
}
