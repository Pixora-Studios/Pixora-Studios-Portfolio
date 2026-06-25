"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teaserPlans = [
  { name: "Starter", price: "₹9,999" },
  { name: "Standard", price: "₹17,999" },
  { name: "Advanced", price: "₹29,999" },
];

export function PricingTeaser() {
  return (
    <section className="py-24 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary-light dark:text-primary-dark font-mono text-xs uppercase tracking-widest mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            One-time investment. No monthly fees.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12 max-w-2xl mx-auto"
          >
            Every website is quoted once — domain and hosting aside, there&apos;s nothing recurring.
            Support is included for 6 months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {teaserPlans.map((plan) => (
              <div
                key={plan.name}
                className="p-6 rounded-2xl glass border-white/10 flex flex-col items-center justify-center space-y-2"
              >
                <span className="text-xl font-bold">{plan.name}</span>
                <span className="text-text-muted-light dark:text-text-muted-dark uppercase tracking-tighter text-xs">from</span>
                <span className="text-2xl font-display font-bold text-primary-light dark:text-primary-dark">
                  {plan.price}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/pricing"
              className="group inline-flex items-center space-x-2 text-primary-light dark:text-primary-dark font-medium hover:underline"
            >
              <span>See full pricing breakdown</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
