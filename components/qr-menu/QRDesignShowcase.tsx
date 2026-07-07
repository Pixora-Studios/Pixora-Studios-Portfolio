"use client";

import { motion } from "framer-motion";
import { PhoneCarousel } from "./PhoneCarousel";

export function QRDesignShowcase() {
  return (
    <section className="py-20 bg-surface-light/30 dark:bg-surface-dark/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Crafted for Your Brand</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Our software comes with professionally designed skins to match your restaurant&apos;s vibe.
            Hover any phone to take a closer look.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed marquee — deliberately outside the container so it can run edge to edge. */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 z-10 bg-gradient-to-r from-surface-light/30 dark:from-surface-dark/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 z-10 bg-gradient-to-l from-surface-light/30 dark:from-surface-dark/30 to-transparent" />
        <PhoneCarousel />
      </div>
    </section>
  );
}
