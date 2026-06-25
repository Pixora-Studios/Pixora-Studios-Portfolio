"use client";

import { motion } from "framer-motion";

export function PricingHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[1.1]"
          >
            What a Website Actually Costs.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed"
          >
            A website is a one-time investment in how your business shows up online.
            Here&apos;s exactly what you&apos;re paying for — and what you&apos;re not.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
