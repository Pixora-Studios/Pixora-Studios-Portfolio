"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs = [
  {
    question: "How does Pixora price projects?",
    answer: "We price projects based on scope, complexity, and custom design requirements rather than rigid package tiers. We outline the precise scope first, then provide a transparent project-based proposal so you know exactly what is included.",
  },
  {
    question: "Does Pixora offer fixed website packages?",
    answer: "No. We believe fixed website packages lead to generic, templated outcomes. We build fully custom digital experiences tailored to your business problems, pricing each project around its actual scope.",
  },
  {
    question: "How much does a custom website cost?",
    answer: "Our custom website builds typically start at ₹15,000+. The final price depends on the number of pages, custom features, animations, and database integrations required.",
  },
  {
    question: "How much does a digital restaurant experience cost?",
    answer: "Our digital restaurant experiences and ordering workflows start at ₹20,000+. This includes features like custom digital menus, WhatsApp/QR ordering, or dashboard integration.",
  },
  {
    question: "Can Pixora build custom business software?",
    answer: "Yes. We design and develop custom dashboards, management systems, automations, and digital tools tailored specifically to your company workflows.",
  },
  {
    question: "Why does custom software have scope-based pricing?",
    answer: "Custom software requires specialized features, user roles, integrations, databases, and logic that cannot be standardly packaged. Pricing is based on the technical design and expected engineering hours.",
  },
  {
    question: "Is the starting price the final project price?",
    answer: "Not necessarily. The starting prices represent standard entry-level builds. The final project price is determined by your specific requirements during the scoping process.",
  },
  {
    question: "Do you offer one-time project pricing?",
    answer: "Yes. All our initial design and development phases are priced as a one-time project fee. We do not charge hidden monthly software subscription costs for our custom solutions.",
  },
  {
    question: "Can I contact Pixora if I am not sure what I need?",
    answer: "Absolutely. In fact, that is what our discovery conversations are for. We will work with you to understand your business objectives and recommend the most effective digital direction.",
  },
  {
    question: "Does Pixora offer ongoing support and maintenance?",
    answer: "Yes. We provide 6 months of complimentary support after launch to resolve any bugs or alignment adjustments. After that, we offer flexible, request-based support rates or dedicated maintenance retainers depending on your system's complexity.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-surface-light/30 dark:bg-surface-dark/30 border-t border-border-light dark:border-border-dark/50">
      <JsonLd data={faqSchema} />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-xs font-mono font-bold tracking-wider mb-4 uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border-light dark:border-border-dark/60 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-base md:text-lg font-semibold pr-8 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted-light dark:text-text-muted-dark transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-primary-light dark:text-primary-dark" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-text-muted-light dark:text-text-muted-dark leading-relaxed text-sm md:text-base">
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
