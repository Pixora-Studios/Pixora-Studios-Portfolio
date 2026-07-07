"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { qrPricingPlans } from "@/lib/data/qrMenuData";
import Link from "next/link";

export function QRPricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Honest, Simple Pricing</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Choose the plan that fits your business. No hidden fees, just a straightforward investment in your guest experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {qrPricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col p-8 border-transparent hover:border-primary-light/20 dark:hover:border-primary-dark/20 transition-all">
                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    {plan.requiresWebsite ? "Only available with Pixora website packages." : "No website required."}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold text-yellow-400">₹{plan.price}</span>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark ml-2">
                      {plan.billingNote}
                    </span>
                  </div>
                  {plan.renewalPrice && (
                    <p className="text-sm font-medium mt-1">
                      <span className="text-yellow-400">₹{plan.renewalPrice}/year</span>
                      <span className="text-text-muted-light dark:text-text-muted-dark ml-2 font-normal italic">
                        renewal from year two
                      </span>
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-light dark:text-primary-dark shrink-0 mt-0.5" />
                      <span className="text-sm opacity-90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full py-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-primary-light/20 dark:border-primary-dark/20 font-bold text-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
