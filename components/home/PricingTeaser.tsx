"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { websiteTracks } from "@/lib/pricing-data";

export function PricingTeaser() {
  return (
    <section className="py-14 md:py-16 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4"
          >
            One-time investment. No monthly fees.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark mb-10 max-w-xl mx-auto"
          >
            Every website is quoted once — domain and hosting aside, there&apos;s nothing recurring.
            Free support is included for 6 months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10"
          >
            {websiteTracks.map((track) => (
              <div
                key={track.id}
                className="p-6 rounded-2xl glass border-white/10 flex flex-col justify-between items-center text-center space-y-4 hover:border-primary-light/20 dark:hover:border-primary-dark/20 transition-all"
              >
                <div>
                  <span className="text-xs font-mono text-primary-light dark:text-primary-dark font-bold uppercase tracking-wider block mb-1">
                    Website Track
                  </span>
                  <h3 className="text-lg font-bold font-display">{track.name}</h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed mt-2 max-w-[280px]">
                    {track.description}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">from</span>
                  <span className="text-2xl md:text-3xl font-display font-black text-primary-light dark:text-primary-dark">
                    {track.startingPrice}
                  </span>
                </div>

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-1 text-xs font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark group"
                >
                  <span>See full breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </motion.div>

          {/* Note linking to Products */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <div>
              <Link
                href="/pricing"
                className="group inline-flex items-center space-x-2 text-sm font-semibold hover:underline text-primary-light dark:text-primary-dark"
              >
                <span>Compare website tiers & detailed options</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
            <div>
              <Link
                href="/products"
                className="group inline-flex items-center space-x-2 text-xs text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                <span>Looking for QR Menu or business software pricing?</span>
                <span className="transition-transform group-hover:translate-x-1">→ /products</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
