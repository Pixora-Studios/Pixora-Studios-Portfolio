"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs = [
  {
    q: "What does Pixora Studios do?",
    a: "Pixora Studios is a web development agency that builds custom, high-performance websites for local businesses like clinics, cafes, and restaurants. We also offer specialized services like Digital QR Menus and booking systems.",
  },
  {
    q: "How much does a website cost from Pixora Studios?",
    a: "Every project is custom-scoped. Basic business websites start at an affordable range, while booking systems and custom builds are priced based on features. We focus on one-time investment with no recurring monthly fees.",
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
    q: "Does Pixora Studios serve businesses outside Bhubaneswar?",
    a: "Yes. While we are based in Bhubaneswar and serve many local businesses in Odisha, we also work with clients across India remotely.",
  },
  {
    q: "Does Pixora Studios offer ongoing monthly support?",
    a: "We offer 6 months of free support after delivery for any bugs or small issues. After that, we provide updates on a per-request basis rather than charging a fixed monthly retainer.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <JsonLd data={faqSchema} />
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
            className="text-4xl md:text-5xl font-display font-bold"
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
