"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";

const categories = [
  {
    num: "01",
    label: "WEBSITES",
    title: "Websites That Turn Attention Into Action.",
    description: "Custom websites and digital experiences designed around your brand, audience and business goals.",
    useCases: [
      "Business websites",
      "Landing pages",
      "Service websites",
      "SEO-ready digital presence",
    ],
    cta: "Explore Website Projects",
    link: "/portfolio",
  },
  {
    num: "02",
    label: "DIGITAL EXPERIENCES",
    title: "Customer Experiences Built Around Your Business.",
    description: "Build digital experiences that help customers discover, interact with and engage with your business.",
    useCases: [
      "Restaurant digital experiences",
      "QR menus",
      "Ordering workflows",
      "Booking experiences",
      "Customer-facing systems",
    ],
    cta: "Explore Digital Experiences",
    link: "/services/qr-menu",
  },
  {
    num: "03",
    label: "CUSTOM SYSTEMS",
    title: "Software Built Around the Way You Work.",
    description: "Dashboards, business tools and custom digital systems designed around your workflow.",
    useCases: [
      "Dashboards",
      "Management systems",
      "Custom software",
      "Integrations",
      "Automation",
    ],
    cta: "Talk About Your System",
    link: "/contact",
  },
];

const startingPoints = [
  {
    name: "Custom Website",
    price: "₹15,000+",
    details: "High-performance website designed to scale, rank on Google, and convert visitors.",
  },
  {
    name: "Digital Restaurant Experience",
    price: "₹20,000+",
    details: "Interactive QR menus, seamless ordering workflows, and custom customer-facing systems.",
  },
  {
    name: "Custom Business System",
    price: "Scope-based",
    details: "Tailored dashboards, integrations, automations, and custom workflows configured for your team.",
  },
];

export function StartingPoints() {
  return (
    <div className="space-y-32 py-20 bg-background-light dark:bg-background-dark">
      {/* 1. Choose Your Starting Point */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Choose Your Starting Point.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed"
          >
            Not every business needs the same kind of digital solution. Start with the direction that feels closest to what you are trying to build.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 hover:border-primary-light/30 dark:hover:border-primary-dark/30 hover:shadow-2xl hover:shadow-primary-light/5 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-sm font-mono font-bold text-primary-light dark:text-primary-dark">
                      {cat.label}
                    </span>
                    <span className="text-3xl font-display font-black text-text-primary-light/20 dark:text-text-primary-dark/10">
                      {cat.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-4 text-text-primary-light dark:text-text-primary-dark leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {cat.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center gap-2.5 text-sm text-text-primary-light/95 dark:text-text-primary-dark/95">
                        <CheckCircle className="w-4 h-4 text-primary-light dark:text-primary-dark shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={cat.link}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark text-sm font-semibold hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white hover:border-transparent transition-all duration-300 group"
                >
                  <span>{cat.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Typical Project Starting Points */}
      <section className="container mx-auto px-6 border-t border-border-light dark:border-border-dark/50 pt-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Typical Project Starting Points.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed"
          >
            These are starting points, not fixed packages. The final scope depends on the project.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {startingPoints.map((point, idx) => (
            <motion.div
              key={point.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-8 border-primary-light/10 dark:border-primary-dark/10 hover:border-primary-light/35 dark:hover:border-primary-dark/35 transition-all duration-300">
                <div>
                  <span className="inline-block text-[10px] font-mono font-black tracking-widest text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10 px-2.5 py-1 rounded-md uppercase mb-6">
                    STARTING POINT
                  </span>
                  
                  <h3 className="text-xl font-display font-bold mb-4 text-text-primary-light dark:text-text-primary-dark">
                    {point.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
                      {point.price}
                    </span>
                  </div>
                  
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-8">
                    {point.details}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-primary-light/10"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
