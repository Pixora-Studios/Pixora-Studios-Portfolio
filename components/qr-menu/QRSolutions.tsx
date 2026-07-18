"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Check, Heart, ShieldCheck, Database, HelpCircle } from "lucide-react";
import Link from "next/link";
import { qrMenuTiers } from "@/lib/pricing-data";

export function QRSolutions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing-matrix" ref={ref} className="py-16 lg:py-20 bg-surface-light/20 dark:bg-surface-dark/20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary-light dark:text-primary-dark" />
            <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-widest">Pricing Matrix</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            A Transparent 6-Tier Matrix.
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Choose the tier that fits your dining room. Go from simple, frictionless view-only boards to fully synced POS and checkout pipelines.
          </p>
        </motion.div>

        {/* 6-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {qrMenuTiers.map((tier, i) => {
            const isTBD = tier.price === "[PRICE TBD]";
            const hasRenewal = !!tier.renewalPrice;
            const isPopular = tier.id === "standalone";

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className={`relative rounded-3xl flex flex-col justify-between p-6 md:p-8 border transition-all duration-300 ${
                  isPopular
                    ? "border-primary-light dark:border-primary-dark bg-primary-light/5 dark:bg-primary-dark/5 shadow-xl"
                    : "border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary-light/20 dark:hover:border-primary-dark/20 hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-6">
                    <span className="bg-primary-light dark:bg-primary-dark text-white text-[9px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Most Popular Plan
                    </span>
                  </div>
                )}

                <div>
                  {/* Name & Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-black text-lg text-text-primary-light dark:text-text-primary-dark">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1 leading-relaxed min-h-[32px]">
                        {tier.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing Display */}
                  <div className="py-4 border-y border-border-light dark:border-border-dark/30 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-display font-black tracking-tight ${isTBD ? "text-xl text-text-muted-light dark:text-text-muted-dark" : "text-3xl text-primary-light dark:text-primary-dark"}`}>
                        {tier.price}
                      </span>
                      {!isTBD && (
                        <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark">
                          / {tier.billingNote}
                        </span>
                      )}
                    </div>
                    {hasRenewal && (
                      <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark block mt-1">
                        Renewal: {tier.renewalPrice} / year
                      </span>
                    )}

                    {/* Extra button display badge */}
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-text-primary-light dark:text-text-primary-dark">
                      <span className="text-text-muted-light dark:text-text-muted-dark">Action:</span>
                      <span className="px-1.5 py-0.5 rounded bg-border-light dark:bg-border-dark font-semibold">
                        {tier.extraButton}
                      </span>
                    </div>

                    {/* Backend tag */}
                    <div className="mt-1 flex items-center gap-1.5 text-[10px] font-mono text-text-primary-light dark:text-text-primary-dark">
                      <span className="text-text-muted-light dark:text-text-muted-dark">Backend Dashboard:</span>
                      <span className={`font-bold ${tier.includesBackend ? "text-emerald-500" : "text-text-muted-light dark:text-text-muted-dark"}`}>
                        {tier.includesBackend ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-3.5 h-3.5 text-primary-light dark:text-primary-dark shrink-0 mt-0.5" />
                        <span className="text-text-primary-light/90 dark:text-text-primary-dark/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact?source=qr-menu"
                  className={`w-full py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-all ${
                    isPopular
                      ? "bg-gradient-light dark:bg-gradient-primary text-white hover:scale-[1.02]"
                      : "border border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark hover:bg-surface-light/50 dark:hover:bg-surface-dark/50 text-text-primary-light dark:text-text-primary-dark"
                  }`}
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Also for hotel rooms, movie halls, salons & gyms */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto rounded-2xl border border-border-light dark:border-border-dark bg-primary-light/5 dark:bg-primary-dark/5 p-6 text-center"
        >
          <h3 className="font-display font-bold text-sm md:text-base mb-1.5 text-text-primary-light dark:text-text-primary-dark">
            🏨 Also Perfect for Hotels, Rooms, Lounges, Salons & Gyms
          </h3>
          <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Contactless QR menus aren&apos;t just restaurant-only. Set up in room suites for room service orders, poolside lounges for cocktails, salon desks for service bookings, or gym lockers for supplement ordering.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
