"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "A solid foundation for businesses that are just getting online.",
    price: "₹9,999",
    note: "One-time. No monthly fee.",
    features: [
      "Up to 4 pages (Home, About, Services, Contact)",
      "Mobile-friendly design",
      "Contact form with WhatsApp integration",
      "Google Maps embed",
      "Basic SEO setup",
      "6 months of support, included",
    ],
    mostChosen: false,
  },
  {
    name: "Standard",
    description: "For businesses that need more room — more pages, more details, more presence.",
    price: "₹17,999",
    note: "One-time. No monthly fee.",
    features: [
      "Everything in Starter, plus:",
      "Up to 7 pages",
      "Menu or services gallery",
      "Testimonials section",
      "Instagram feed integration",
      "Appointment or enquiry form",
      "Performance optimization",
      "6 months of support, included",
    ],
    mostChosen: true,
  },
  {
    name: "Advanced",
    description: "A fully custom build — for businesses that want their website to feel as considered as the rest of their brand.",
    price: "₹29,999",
    note: "One-time. No monthly fee.",
    features: [
      "Everything in Standard, plus:",
      "Unlimited pages",
      "Custom UI/UX design",
      "Motion and animation (Framer Motion)",
      "Blog or Events section",
      "Admin panel for content updates",
      "Priority delivery",
      "6 months of support, included",
    ],
    mostChosen: false,
  },
];

export function PricingCards() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard
                className={cn(
                  "h-full relative flex flex-col p-8 border-transparent",
                  plan.mostChosen && "border-primary-light dark:border-primary-dark shadow-xl scale-105 z-10 bg-surface-light dark:bg-surface-dark"
                )}
              >
                {plan.mostChosen && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-light dark:bg-primary-dark text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                      Most Chosen
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium">Starting at</span>
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                  </div>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                    {plan.note}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-light dark:text-primary-dark shrink-0 mt-0.5" />
                      <span className="text-sm text-text-primary-light dark:text-text-primary-dark opacity-90 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* QR Menu Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 md:p-12 border-yellow-400/20 bg-yellow-400/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">New</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl font-display font-bold mb-2">Standalone QR Menu Software</h4>
                  <p className="text-text-muted-light dark:text-text-muted-dark max-w-xl">
                    Looking for just the digital menu without a full website build?
                    Get started from <span className="text-yellow-400 font-bold">₹1,499</span>.
                  </p>
                </div>
                <Link
                  href="/services/qr-menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-black font-bold text-sm hover:scale-105 transition-transform"
                >
                  <span>View QR Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Domain & Hosting Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 md:p-12 border-primary-light/20 dark:border-primary-dark/20 bg-primary-light/5 dark:bg-primary-dark/5">
              <h4 className="text-2xl font-display font-bold mb-4">Domain & Hosting — You Own It.</h4>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Domain and hosting are paid directly by you to the provider — not routed through us.
                We&apos;ll walk you through what to buy and help you set it up.
                Typically ₹2,000–₹5,000 per year, and it stays entirely in your control.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
