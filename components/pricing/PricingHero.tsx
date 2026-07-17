"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[350px] bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-[100px]" />
        <div className="absolute -top-40 right-0 w-[40%] h-[40%] bg-secondary-light/5 dark:bg-secondary-dark/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center space-x-2.5 mb-6"
            >
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark" />
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-light dark:bg-secondary-dark" />
              </div>
              <span className="text-text-muted-light dark:text-text-muted-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                PRICING THAT STARTS WITH THE PROBLEM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-text-primary-light dark:text-text-primary-dark"
            >
              The Right Digital Solution <br />
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                Depends on the Problem.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed mb-4"
            >
              Some businesses need a website. Some need a dashboard. Some need an entire digital workflow. We scope and build around what your business actually needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-sm font-mono text-primary-light dark:text-primary-dark tracking-wide mb-8 border-l border-primary-light/30 dark:border-primary-dark/30 pl-4 py-1"
            >
              Custom projects. Clear scope. No one-size-fits-all packages.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 transition-transform flex items-center group shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>

              <button
                onClick={() => {
                  const element = document.getElementById("scoping-process");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-4 rounded-full border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
              >
                See How We Work
              </button>
            </motion.div>
          </div>

          {/* SVG Animated Concept Visual */}
          <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center pointer-events-none select-none overflow-visible">
            <svg
              className="w-full h-full max-w-[450px] overflow-visible"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connection Lines with pulse animation */}
              <g className="stroke-border-light dark:stroke-border-dark" strokeWidth="2">
                {/* Website Line */}
                <motion.line
                  x1="200"
                  y1="200"
                  x2="80"
                  y2="120"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                />
                {/* Digital Experience Line */}
                <motion.line
                  x1="200"
                  y1="200"
                  x2="320"
                  y2="120"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                />
                {/* Custom System Line */}
                <motion.line
                  x1="200"
                  y1="200"
                  x2="200"
                  y2="320"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
                />
              </g>

              {/* Pulsing Dots traversing path */}
              <motion.circle
                cx="200"
                cy="200"
                r="4"
                className="fill-primary-light dark:fill-primary-dark"
                animate={{
                  cx: [200, 80, 200],
                  cy: [200, 120, 200],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="4"
                className="fill-secondary-light dark:fill-secondary-dark"
                animate={{
                  cx: [200, 320, 200],
                  cy: [200, 120, 200],
                }}
                transition={{
                  duration: 6,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="4"
                className="fill-pink-500"
                animate={{
                  cx: [200, 200, 200],
                  cy: [200, 320, 200],
                }}
                transition={{
                  duration: 6,
                  delay: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Center "Business Problem" Node */}
              <g>
                {/* Outermost pulsing ring */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="52"
                  className="stroke-primary-light/20 dark:stroke-primary-dark/20 fill-transparent"
                  animate={{ r: [52, 65, 52] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  strokeWidth="1"
                />
                {/* Secondary ring */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="45"
                  className="stroke-primary-light/40 dark:stroke-primary-dark/40 fill-transparent"
                  animate={{ r: [45, 52, 45] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  strokeWidth="1"
                />
                {/* Solid Glass Circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="38"
                  className="fill-white/80 dark:fill-surface-dark/95 stroke-primary-light dark:stroke-primary-dark"
                  strokeWidth="2"
                  style={{ backdropFilter: "blur(4px)" }}
                />
                {/* Label text inside */}
                <text
                  x="200"
                  y="196"
                  textAnchor="middle"
                  className="fill-text-primary-light dark:fill-text-primary-dark font-sans text-[10px] font-bold tracking-wide uppercase"
                >
                  Business
                </text>
                <text
                  x="200"
                  y="208"
                  textAnchor="middle"
                  className="fill-primary-light dark:fill-primary-dark font-sans text-[10px] font-bold tracking-wide uppercase"
                >
                  Problem
                </text>
              </g>

              {/* Website Node (Left top) */}
              <g>
                <circle
                  cx="80"
                  cy="120"
                  r="28"
                  className="fill-white/80 dark:fill-surface-dark/95 stroke-border-light dark:stroke-border-dark"
                  strokeWidth="1.5"
                />
                <text
                  x="80"
                  y="124"
                  textAnchor="middle"
                  className="fill-text-primary-light dark:fill-text-primary-dark font-display text-[9px] font-bold tracking-wide uppercase"
                >
                  Website
                </text>
              </g>

              {/* Digital Experience Node (Right top) */}
              <g>
                <circle
                  cx="320"
                  cy="120"
                  r="28"
                  className="fill-white/80 dark:fill-surface-dark/95 stroke-border-light dark:stroke-border-dark"
                  strokeWidth="1.5"
                />
                <text
                  x="320"
                  y="119"
                  textAnchor="middle"
                  className="fill-text-primary-light dark:fill-text-primary-dark font-display text-[8px] font-bold tracking-wide uppercase"
                >
                  Digital
                </text>
                <text
                  x="320"
                  y="129"
                  textAnchor="middle"
                  className="fill-text-primary-light dark:fill-text-primary-dark font-display text-[8px] font-bold tracking-wide uppercase"
                >
                  Exp
                </text>
              </g>

              {/* Custom System Node (Bottom center) */}
              <g>
                <circle
                  cx="200"
                  cy="320"
                  r="28"
                  className="fill-white/80 dark:fill-surface-dark/95 stroke-border-light dark:stroke-border-dark"
                  strokeWidth="1.5"
                />
                <text
                  x="200"
                  y="319"
                  textAnchor="middle"
                  className="fill-text-primary-light dark:fill-text-primary-dark font-display text-[8px] font-bold tracking-wide uppercase"
                >
                  Custom
                </text>
                <text
                  x="200"
                  y="329"
                  textAnchor="middle"
                  className="fill-text-primary-light dark:fill-text-primary-dark font-display text-[8px] font-bold tracking-wide uppercase"
                >
                  System
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
