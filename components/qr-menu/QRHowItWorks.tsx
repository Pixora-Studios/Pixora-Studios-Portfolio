"use client";

import { motion } from "framer-motion";
import { QrCode, Search, Coffee } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Scan",
    description: "Scan the QR code at your table.",
  },
  {
    icon: Search,
    title: "Browse",
    description: "View categories and item details.",
  },
  {
    icon: Coffee,
    title: "Order-Ready",
    description: "Tap to call waiter or view total.",
  },
];

export function QRHowItWorks() {
  return (
    <section className="py-20 bg-surface-light/50 dark:bg-surface-dark/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark">
                <step.icon className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold">{step.title}</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm max-w-[200px]">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-border-light dark:text-border-dark">
                  {/* Visual connector placeholder could go here */}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
