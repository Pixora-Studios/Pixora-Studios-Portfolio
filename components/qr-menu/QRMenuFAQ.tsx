"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs = [
  {
    q: "What is Pixora's digital restaurant experience system?",
    a: "Pixora's digital restaurant experience system is a flexible digital layer that connects customer-facing experiences — such as QR menus and ordering flows — with restaurant operations including order management, payments and owner dashboards. It is designed to be built around the way your restaurant already works, rather than forcing you to replace existing systems.",
  },
  {
    q: "Is Pixora only a QR menu?",
    a: "No. The QR code is the entry point, not the product. Pixora is building a flexible restaurant technology layer that can include digital menus, ordering workflows, payment experiences, owner dashboards, order visibility and POS integrations — depending on what your restaurant actually needs.",
  },
  {
    q: "Can customers view the menu through a QR code?",
    a: "Yes. Digital QR menu functionality is the core capability. Guests scan a QR code and the full digital menu opens instantly in their smartphone browser — no app download required. The experience is mobile-first, fast and can be designed to match your restaurant's brand.",
  },
  {
    q: "Can Pixora support online ordering?",
    a: "Pixora is designed to support ordering workflows. This can include table-side ordering through the QR experience, takeaway order flows, or custom ordering journeys built around your restaurant's specific setup. This capability is part of Pixora's active build roadmap.",
  },
  {
    q: "Can Pixora support payment workflows?",
    a: "Pixora is built to support payment workflows connected to the ordering experience — including table-side payment, pre-payment on order placement, and other payment configurations. This is part of Pixora's integration-ready roadmap and can be scoped based on your restaurant's requirements.",
  },
  {
    q: "Does Pixora provide a restaurant owner dashboard?",
    a: "A restaurant owner dashboard is part of Pixora's product direction. It is designed to give owners visibility into orders, revenue, payments and menu activity from one place. This capability is currently in development as part of the upcoming roadmap.",
  },
  {
    q: "Can Pixora integrate with POS systems?",
    a: "Pixora is being built with POS integration flexibility in mind. The goal is to connect the digital restaurant experience layer to the POS and restaurant management systems your business already uses — rather than asking you to replace them. Specific integrations are on the roadmap and can also be explored as custom builds.",
  },
  {
    q: "Is Petpooja integration available?",
    a: "Petpooja integration is on Pixora's roadmap as an upcoming integration direction. It is not currently live. If your restaurant uses Petpooja and you want to explore a custom integration, contact us to discuss what is possible.",
  },
  {
    q: "Can Pixora work with Odoo, Square or other restaurant systems?",
    a: "Odoo, Square and other restaurant and payment systems are part of Pixora's integration roadmap. None of these are currently confirmed as live integrations. Pixora's architecture is being designed to be integration-ready, and custom integrations can be explored based on your existing technology stack.",
  },
  {
    q: "Can Pixora build a custom restaurant solution?",
    a: "Yes. Pixora does not position itself as a rigid, one-size-fits-all SaaS product. Every restaurant runs differently, and Pixora is designed to be scoped and built around your specific workflow. Contact us to describe how your restaurant operates and we will help figure out the right digital experience to build.",
  },
  {
    q: "Do customers need to download an app?",
    a: "No. The digital menu and ordering experience opens directly in the guest's smartphone browser — Safari, Chrome, or any modern mobile browser. There is no app to download and no account to create. The experience is designed to be frictionless from the first scan.",
  },
  {
    q: "Is Pixora suitable for cafes, QSRs and multi-outlet restaurants?",
    a: "Yes. Pixora's digital restaurant experience system is designed to serve different types of food businesses — from independent cafes and quick service restaurants to fine dining and growing multi-outlet groups. The solution can be tailored to the specific operational needs of each restaurant type.",
  },
];

export function QRMenuFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-surface-light dark:bg-surface-dark">
      <JsonLd data={faqSchema} />
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Digital Restaurant Experience FAQs
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-base">
            Honest answers about what Pixora does today, what is on the roadmap, and how custom integrations work.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + index * 0.04, duration: 0.4 }}
              className="border border-border-light dark:border-border-dark rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm font-bold pr-4 leading-snug">{faq.q}</span>
                <span className="shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary-light dark:text-primary-dark" />
                  ) : (
                    <Plus className="w-4 h-4 text-text-muted-light dark:text-text-muted-dark" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed border-t border-border-light dark:border-border-dark pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
