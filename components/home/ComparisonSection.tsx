"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
  { without: "Hard to find online", with: "Rank on Google Search" },
  { without: "Customers don't trust you", with: "Instant professional credibility" },
  { without: "Miss after-hours bookings", with: "Accept bookings 24/7" },
  { without: "No way to showcase work", with: "Show your services, photos, results" },
  { without: "Limited to word-of-mouth", with: "Reach new customers every day" },
  { without: "Competitors get your customers", with: "You become the obvious choice" },
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Why Your Business Needs a Website Now
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
             {/* Desktop Middle Line */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-light dark:bg-border-dark hidden md:block" />

             <div className="space-y-4 md:pr-12">
                <div className="flex items-center space-x-2 text-red-500 font-display font-bold text-2xl mb-8">
                   <X className="w-8 h-8" />
                   <span>WITHOUT A WEBSITE</span>
                </div>
                {comparison.map((item, index) => (
                   <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-text-muted-light dark:text-text-muted-dark"
                   >
                      {item.without}
                   </motion.div>
                ))}
             </div>

             <div className="space-y-4 md:pl-12">
                <div className="flex items-center space-x-2 text-emerald-500 font-display font-bold text-2xl mb-8">
                   <Check className="w-8 h-8" />
                   <span>WITH A WEBSITE</span>
                </div>
                {comparison.map((item, index) => (
                   <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-text-primary-light dark:text-text-primary-dark font-medium"
                   >
                      {item.with}
                   </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
