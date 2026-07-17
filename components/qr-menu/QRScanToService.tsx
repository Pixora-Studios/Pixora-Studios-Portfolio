"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  QrCode,
  Smartphone,
  ShoppingCart,
  CreditCard,
  LayoutDashboard,
  GitMerge,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    id: "scan",
    number: "01",
    title: "Scan",
    subtitle: "Guest scans the QR code",
    desc: "Your guest arrives at the table, picks up their phone and scans the QR code. No app to download, no link to type — just an instant experience that opens directly in their browser.",
    icon: QrCode,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    visual: {
      headline: "Scan to view menu",
      sub: "Opens instantly in Safari or Chrome",
      badge: "No app needed",
      badgeColor: "bg-violet-400/20 text-violet-400",
    },
  },
  {
    id: "view",
    number: "02",
    title: "View",
    subtitle: "Digital menu opens instantly",
    desc: "The full digital menu loads in under a second. Categories, item photos, descriptions, prices, dietary flags — all visible and browsable without any friction.",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    visual: {
      headline: "Full menu experience",
      sub: "Mobile-first, brand-matched design",
      badge: "Instant load",
      badgeColor: "bg-blue-400/20 text-blue-400",
    },
  },
  {
    id: "order",
    number: "03",
    title: "Order",
    subtitle: "Customer-driven ordering flow",
    desc: "Customers can be guided through an ordering workflow designed for the restaurant's specific needs — dine-in, takeaway or a custom flow. Built around how your restaurant actually takes orders.",
    icon: ShoppingCart,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    visual: {
      headline: "Ordering workflow",
      sub: "Designed around your restaurant",
      badge: "Built for",
      badgeColor: "bg-amber-400/20 text-amber-400",
    },
  },
  {
    id: "pay",
    number: "04",
    title: "Pay",
    subtitle: "Payment connected to the order",
    desc: "Payment can be connected to the order experience where required. Whether that is table-side payment, pre-payment on order placement, or a split bill — Pixora can build around your payment workflow.",
    icon: CreditCard,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    visual: {
      headline: "Payment workflows",
      sub: "Flexible, connected to your flow",
      badge: "Built for",
      badgeColor: "bg-emerald-400/20 text-emerald-400",
    },
  },
  {
    id: "manage",
    number: "05",
    title: "Manage",
    subtitle: "Restaurant team gets visibility",
    desc: "The restaurant team gets visibility through the management experience — orders, status, payments, and menu control — from one place, accessible on any device.",
    icon: LayoutDashboard,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    visual: {
      headline: "Owner & team dashboard",
      sub: "Orders, revenue and menu control",
      badge: "Upcoming",
      badgeColor: "bg-pink-400/20 text-pink-400",
    },
  },
  {
    id: "connect",
    number: "06",
    title: "Connect",
    subtitle: "Built around your existing stack",
    desc: "The digital experience can be built around POS and restaurant management systems. We are not asking your restaurant to replace everything — we build the digital layer that connects to the way you already operate.",
    icon: GitMerge,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    visual: {
      headline: "Integration-ready architecture",
      sub: "POS, payments, restaurant systems",
      badge: "Roadmap",
      badgeColor: "bg-orange-400/20 text-orange-400",
    },
  },
];

export function QRScanToService() {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const active = steps[activeStep];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-16 lg:py-20 bg-surface-light/20 dark:bg-surface-dark/20"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            See the Journey From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
              Scan to Service.
            </span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-base">
            Click through the steps to see how Pixora connects the front-of-house guest experience with restaurant operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start max-w-5xl mx-auto">

          {/* ── Step List (left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-1"
          >
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-200 group flex items-center gap-4 ${
                  activeStep === i
                    ? `border ${step.border} bg-surface-light dark:bg-surface-dark shadow-sm`
                    : "hover:bg-surface-light/60 dark:hover:bg-surface-dark/60"
                }`}
              >
                {/* Number */}
                <span
                  className={`font-mono text-xs font-bold shrink-0 transition-colors ${
                    activeStep === i ? step.color : "text-text-muted-light dark:text-text-muted-dark"
                  }`}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center transition-all ${
                  activeStep === i ? step.bg : "bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
                }`}>
                  <step.icon className={`w-4 h-4 transition-colors ${activeStep === i ? step.color : "text-text-muted-light dark:text-text-muted-dark"}`} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`font-display font-bold text-sm transition-colors ${
                    activeStep === i ? "text-text-primary-light dark:text-text-primary-dark" : "text-text-muted-light dark:text-text-muted-dark"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark truncate">{step.subtitle}</p>
                </div>

                <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${
                  activeStep === i ? `${step.color} translate-x-0.5` : "text-text-muted-light/30 dark:text-text-muted-dark/30"
                }`} />
              </button>
            ))}
          </motion.div>

          {/* ── Content Panel (right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="sticky top-28"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className={`rounded-2xl border ${active.border} bg-surface-light dark:bg-surface-dark p-8`}
              >
                {/* Step number */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-2xl ${active.bg} flex items-center justify-center`}>
                    <active.icon className={`w-5 h-5 ${active.color}`} />
                  </div>
                  <div>
                    <span className={`font-mono text-xs font-bold ${active.color}`}>{active.number}</span>
                    <p className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">{active.title}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-6">
                  {active.desc}
                </p>

                {/* Visual summary card */}
                <div className={`rounded-xl border ${active.border} bg-gradient-to-br from-transparent to-surface-dark/20 p-5`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark mb-1">
                        {active.visual.headline}
                      </p>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                        {active.visual.sub}
                      </p>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-1 rounded-full ${active.visual.badgeColor} uppercase tracking-wider whitespace-nowrap shrink-0`}>
                      {active.visual.badge}
                    </span>
                  </div>
                </div>

                {/* Step progress dots */}
                <div className="flex items-center gap-1.5 mt-6">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeStep ? `w-6 ${active.bg}` : "w-1.5 bg-border-light dark:bg-border-dark"
                      }`}
                    />
                  ))}
                </div>

                {/* Next step */}
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="mt-4 text-xs font-bold text-text-muted-light dark:text-text-muted-dark hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors flex items-center gap-1"
                  >
                    Next: {steps[activeStep + 1].title}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
