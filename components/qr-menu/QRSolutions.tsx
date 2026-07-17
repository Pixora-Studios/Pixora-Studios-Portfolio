"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, QrCode, ShoppingCart, Layers, MessageCircle } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "digital-menu",
    icon: QrCode,
    title: "Digital Menu",
    subtitle: "The essential starting point",
    desc: "For restaurants that need a modern, branded digital QR menu experience — fast, mobile-first, and instantly updatable.",
    includes: [
      "Branded QR menu experience",
      "Mobile-first design",
      "Instant menu updates",
      "Category and item management",
      "No app download for guests",
    ],
    cta: "Talk to Pixora",
    highlight: false,
    tagColor: "bg-violet-400/20 text-violet-400",
    tag: "Core",
  },
  {
    id: "ordering",
    icon: ShoppingCart,
    title: "Ordering Experience",
    subtitle: "Menu + ordering workflow",
    desc: "For restaurants that want customer ordering workflows built around their specific dine-in, takeaway or table service setup.",
    includes: [
      "Everything in Digital Menu",
      "Custom ordering flow",
      "Order management for staff",
      "Order status visibility",
      "Designed around your workflow",
    ],
    cta: "Talk to Pixora",
    highlight: true,
    tagColor: "bg-blue-400/20 text-blue-400",
    tag: "Built for",
  },
  {
    id: "connected",
    icon: Layers,
    title: "Connected Restaurant Experience",
    subtitle: "Full digital experience layer",
    desc: "For businesses that need dashboards, payment workflows, and custom integrations — a complete digital layer built around your restaurant's operations.",
    includes: [
      "Everything in Ordering Experience",
      "Payment workflow integration",
      "Owner dashboard and reporting",
      "POS integration (where applicable)",
      "Custom scope and delivery",
    ],
    cta: "Talk to Pixora",
    highlight: false,
    tagColor: "bg-emerald-400/20 text-emerald-400",
    tag: "Custom",
  },
];

export function QRSolutions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" ref={ref} className="py-16 lg:py-20 bg-surface-light/20 dark:bg-surface-dark/20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-4 h-4 text-primary-dark" />
            <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">Digital Restaurant Experience Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Start With What Your Restaurant Needs.
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-base leading-relaxed">
            Pixora can be shaped around the way your restaurant works — from a simple digital menu to a fully connected ordering and operations experience. Tell us what you need, and we will scope it around your workflow.
          </p>
        </motion.div>

        {/* Solution cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl flex flex-col p-7 transition-all duration-300 ${
                solution.highlight
                  ? "border border-primary-dark/30 bg-primary-dark/5 dark:bg-primary-dark/10 shadow-xl shadow-primary-dark/10"
                  : "border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary-dark/20 hover:shadow-lg hover:shadow-primary-dark/5"
              }`}
            >
              {solution.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-light dark:bg-gradient-primary text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Most Flexible
                  </span>
                </div>
              )}

              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary-dark/10 flex items-center justify-center">
                  <solution.icon className="w-5 h-5 text-primary-dark" />
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${solution.tagColor} uppercase tracking-wider`}>
                  {solution.tag}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg mb-1">{solution.title}</h3>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-4 font-medium">{solution.subtitle}</p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                {solution.desc}
              </p>

              <ul className="space-y-2.5 mb-8 flex-grow">
                {solution.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="w-4 h-4 rounded-full bg-primary-dark/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ArrowRight className="w-2.5 h-2.5 text-primary-dark" />
                    </span>
                    <span className="text-text-muted-light dark:text-text-muted-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all group ${
                  solution.highlight
                    ? "bg-gradient-light dark:bg-gradient-primary text-white hover:scale-[1.02] shadow-md shadow-primary-dark/20"
                    : "border border-primary-dark/20 hover:bg-primary-dark/5 text-text-primary-light dark:text-text-primary-dark"
                }`}
              >
                <span>{solution.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="max-w-2xl mx-auto text-center p-5 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light/50 dark:bg-surface-dark/50"
        >
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            <strong className="text-text-primary-light dark:text-text-primary-dark">Not sure which solution fits?</strong> Every restaurant is different. Tell us how you operate and we will help figure out the right scope and approach.{" "}
            <Link href="/contact" className="text-primary-dark font-semibold hover:underline">
              Start a conversation →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
