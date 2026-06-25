"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is there a monthly fee?",
    answer: "No. You pay once when your website is built. After that, there's nothing owed to us on a recurring basis.",
  },
  {
    question: "What does 6 months of support mean?",
    answer: "For 6 months after delivery, we take care of any bugs, broken layouts, or small issues — at no extra charge. It's part of the build.",
  },
  {
    question: "What happens after those 6 months?",
    answer: "You reach out when you need something changed — a new menu, an updated event, a photo swap — and we quote it per request. Most small updates are straightforward and won't cost much. You're not locked into anything.",
  },
  {
    question: "Who handles domain and hosting?",
    answer: "You do, directly. We help you choose a reliable provider and get everything configured. The accounts are in your name, and you stay in control of them.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "No. The price we quote is for building your website. Domain and hosting are separate, and we'll tell you what to expect upfront.",
  },
  {
    question: "What kind of updates can I ask for later?",
    answer: "Anything reasonable — new menu items, event announcements, updated photos, a new section, contact detail changes. If it's a significant redesign or a brand new feature, we'll discuss it and quote separately.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface-light/50 dark:bg-surface-dark/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-12 text-center"
          >
            A Few Things Worth Knowing
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border-light dark:border-border-dark"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg md:text-xl font-medium pr-8 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
