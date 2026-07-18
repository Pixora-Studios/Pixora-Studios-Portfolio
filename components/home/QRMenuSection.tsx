"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Sparkles, Check } from "lucide-react";

export function QRMenuSection() {
  const tags = ["View only", "Full orders", "POS-ready"];
  const benefits = [
    "No app downloads required",
    "Real-time instant menu updates",
    "Smart waiter-call integration",
    "Google Review booster button"
  ];

  return (
    <section className="py-14 md:py-16 bg-surface-light/30 dark:bg-surface-dark/30 border-y border-border-light dark:border-border-dark/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Product
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Your Menu, Live in Seconds.
            </h2>

            <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-xl">
              Ditch the generic QR readers and expensive PDF uploads. Give your restaurant, cafe, or hotel a super-fast contactless menu that drives up order value and streamlines table management.
            </p>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-border-light/50 dark:bg-border-dark/50 text-text-primary-light dark:text-text-primary-dark border border-border-light dark:border-border-dark/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Mini bullet points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-xs md:text-sm text-text-primary-light/90 dark:text-text-primary-dark/90">
                  <div className="w-4 h-4 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary-light dark:text-primary-dark" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/products/qr-menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-light dark:bg-gradient-primary text-white text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
              >
                <span>Explore QR Menu Product</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Slot Column */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-primary-light/5 dark:bg-primary-dark/5 blur-3xl rounded-full" />

            {/* COMPACT MOCKUP CONTAINER SIZED TO HERO PROPORTIONS */}
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[40px] border-4 border-text-primary-light/20 dark:border-text-primary-dark/20 bg-background-light dark:bg-background-dark shadow-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <Smartphone className="w-12 h-12 text-primary-light dark:text-primary-dark/80 mb-4 animate-bounce" />

              <h3 className="text-sm font-display font-bold mb-2">Interactive QR Experience</h3>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-[200px] mb-4">
                Scan table code to load instant, beautiful, and categorized restaurant items.
              </p>

              {/* VISUAL: QR scan-to-order sequence — add later */}
              <div className="text-[10px] font-mono p-2.5 rounded bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark leading-normal select-none">
                {`{/* VISUAL SLOT: scan-to-order sequence — custom Gemini-generated image/video, background removed, to be added manually */}`}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
