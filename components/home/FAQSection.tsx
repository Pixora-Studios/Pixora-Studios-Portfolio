"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Every project is custom-scoped. Basic business websites start at an affordable range. Booking systems and custom builds are priced based on features. Contact us for a free quote.",
  },
  {
    q: "How long does development take?",
    a: "Most websites are delivered in 2–4 weeks. Complex systems with booking and dashboards may take 4–6 weeks.",
  },
  {
    q: "Do you provide hosting and domain setup?",
    a: "Yes. We handle domain registration, hosting setup, SSL certificate, email, and everything technical.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We can modernize and improve your current site, or rebuild it from scratch.",
  },
  {
    q: "Do you work with businesses outside Bhubaneswar?",
    a: "Yes. We work with businesses across Odisha and all of India remotely.",
  },
  {
    q: "Is SEO included in every website?",
    a: "Yes. Every website we build includes on-page SEO, meta tags, sitemap, structured data, and speed optimization.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Common Questions
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border-light dark:border-border-dark rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                ) : (
                  <Plus className="w-5 h-5 text-text-muted-dark" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
