"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";
import { websiteTracks } from "@/lib/pricing-data";

export function StartingPoints() {
  return (
    <div className="py-20 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark/30">
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Bespoke Website Tracks.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed"
          >
            We don&apos;t offer rigid, bloated plans. We align website design under two focused, industry-specific starting blocks.
          </motion.p>
        </div>

        {/* Side by side website tracks */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {websiteTracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 hover:border-primary-light/30 dark:hover:border-primary-dark/30 hover:shadow-2xl hover:shadow-primary-light/5 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono font-bold text-primary-light dark:text-primary-dark tracking-widest bg-primary-light/10 dark:bg-primary-dark/10 px-2.5 py-1 rounded">
                      WEBSITE TRACK
                    </span>
                    <span className="text-2xl font-display font-black text-text-primary-light/20 dark:text-text-primary-dark/10">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2 text-text-primary-light dark:text-text-primary-dark leading-tight">
                    {track.name}
                  </h3>

                  <p className="text-text-muted-light dark:text-text-muted-dark text-xs md:text-sm leading-relaxed mb-6 min-h-[48px]">
                    {track.description}
                  </p>

                  <div className="mb-6 py-4 border-y border-border-light dark:border-border-dark/30">
                    <span className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider block">Starting from</span>
                    <span className="text-3xl font-display font-black text-primary-light dark:text-primary-dark">
                      {track.startingPrice}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {track.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-text-primary-light/95 dark:text-text-primary-dark/95">
                        <CheckCircle2 className="w-4 h-4 text-primary-light dark:text-primary-dark shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={track.ctaLink}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-light dark:bg-gradient-primary text-white text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Note linking to Products pricing */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-2xl border border-border-light dark:border-border-dark bg-surface-light/50 dark:bg-surface-dark/50 p-6 text-center"
        >
          <h3 className="font-display font-bold text-sm mb-1 text-text-primary-light dark:text-text-primary-dark">
            Looking for Tiered Business Software Pricing?
          </h3>
          <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-3">
            Our Digital QR Menu software, gym platforms, and school suites operate under standard SaaS subscription plans instead of custom bespoke web builds.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-bold text-primary-light dark:text-primary-dark hover:underline"
          >
            <span>Explore Products & QR Menu Tiers</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
