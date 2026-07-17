"use client";

import { motion } from "framer-motion";
import { PhoneCarousel } from "./PhoneCarousel";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Palette } from "lucide-react";

export function QRDesignShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-surface-light/30 dark:bg-surface-dark/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Palette className="w-4 h-4 text-primary-dark" />
            <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">Design Themes</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3">
                Your Digital Experience Should Still{" "}
                <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                  Feel Like Your Brand.
                </span>
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed max-w-xl">
                Fine dining, cafe, QSR or a growing restaurant group — your digital menu and customer experience should not look like everyone else&apos;s. Hover any phone to take a closer look.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full-bleed marquee — deliberately outside the container */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 z-10 bg-gradient-to-r from-surface-light/30 dark:from-surface-dark/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 z-10 bg-gradient-to-l from-surface-light/30 dark:from-surface-dark/30 to-transparent" />
        <PhoneCarousel />
      </div>
    </section>
  );
}
