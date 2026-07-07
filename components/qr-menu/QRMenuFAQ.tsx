"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs = [
  {
    q: "What is a Digital QR Menu and how does it work?",
    a: "A Digital QR Menu is a mobile-optimized version of your restaurant or cafe menu accessible by scanning a QR code. It requires no app download and allows customers to browse items, see photos, and view prices instantly on their own smartphones.",
  },
  {
    q: "How do I update the prices or items on my QR menu?",
    a: "Updates are instant. You can change prices, add new items, or mark dishes as 'sold out' through a simple dashboard, and the changes reflect immediately for anyone scanning the code.",
  },
  {
    q: "Do my customers need to download an app?",
    a: "No. The menu opens directly in the smartphone's web browser (Safari, Chrome, etc.), ensuring a frictionless experience for your guests.",
  },
  {
    q: "Is there a monthly fee for the QR menu?",
    a: "We offer both bundled (one-time payment with a website) and standalone options. For standalone QR menus, there is a small annual renewal fee for hosting and support, while the bundled version has no recurring fees.",
  },
  {
    q: "Can I use the QR menu without a full website?",
    a: "Yes. We offer a standalone Digital QR Menu service specifically for restaurants that only need a digital menu without a full business website.",
  },
];

export function QRMenuFAQ() {
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
    <section className="py-20 bg-surface-light dark:bg-surface-dark">
      <JsonLd data={faqSchema} />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            QR Menu Questions
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
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-background-light dark:hover:bg-background-dark transition-colors"
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
