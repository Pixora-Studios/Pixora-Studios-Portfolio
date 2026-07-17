"use client";

import { motion } from "framer-motion";
import { Info, HelpCircle, FileText } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

const steps = [
  {
    num: "01",
    label: "UNDERSTAND",
    title: "Understanding the Problem",
    description: "We learn about your business, users, and what you are trying to solve. No assumptions are made.",
    icon: HelpCircle,
  },
  {
    num: "02",
    label: "DEFINE",
    title: "Defining the Scope",
    description: "We turn the idea or problem into a clearer project scope. We identify essential workflows and features.",
    icon: Info,
  },
  {
    num: "03",
    label: "PROPOSE",
    title: "Custom Project Proposal",
    description: "You get a clear direction and project proposal based on what actually needs to be built. Transparent, upfront pricing.",
    icon: FileText,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function ScopingProcess() {
  return (
    <section id="scoping-process" className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-xs font-bold tracking-[0.2em] block mb-4 uppercase"
          >
            HOW IT WORKS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-6"
          >
            Your Project Gets Scoped Before It Gets Priced.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed"
          >
            We don&apos;t match you to a preset plan. We discover what you actually need first.
          </motion.p>
        </div>

        {/* Timeline container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-stretch"
        >
          {/* Connector Line (Desktop Horizontal) */}
          <div className="hidden md:block absolute top-[44px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-primary-light/35 via-secondary-light/35 to-pink-500/20 dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-border-dark -z-10" />

          {/* Connector Line (Mobile Vertical) */}
          <div className="md:hidden absolute top-[44px] bottom-[44px] left-[44px] w-[2px] bg-gradient-to-b from-primary-light/35 via-secondary-light/35 to-pink-500/20 dark:from-primary-dark/20 dark:via-secondary-dark/20 dark:to-border-dark -z-10" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="flex-1 relative flex flex-col items-start md:items-center text-left md:text-center group"
              >
                {/* Step Circle */}
                <div className="w-[88px] h-[88px] rounded-full bg-background-light dark:bg-background-dark border-2 border-primary-light dark:border-primary-dark flex items-center justify-center mb-6 shadow-lg shadow-primary-light/5 relative group-hover:scale-105 transition-transform duration-300 z-10 shrink-0 ml-[10px] md:ml-0">
                  <Icon className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                  <div className="absolute -top-1 -right-1 bg-gradient-light dark:bg-gradient-primary text-white text-[10px] font-mono font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {step.num}
                  </div>
                </div>

                <div className="pl-[20px] md:pl-0 md:px-4">
                  <span className="text-[10px] font-mono font-bold text-primary-light dark:text-primary-dark tracking-wider block mb-2">
                    {step.label}
                  </span>
                  
                  <h3 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-3 leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
