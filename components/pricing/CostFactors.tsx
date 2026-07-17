"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Paintbrush, Scaling } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

const factors = [
  {
    id: "01",
    title: "SCOPE",
    question: "How much needs to be built?",
    description: "The total number of unique templates, layouts, or individual steps in a workflow directly impacts development and refinement time.",
    icon: Layers,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "02",
    title: "COMPLEXITY",
    question: "Does the project need custom logic, workflows or integrations?",
    description: "Features like database structures, third-party API connections, automated alerts, user accounts, and payment systems require dedicated backend architecture.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "03",
    title: "DESIGN",
    question: "Does the experience need a focused interface or a fully custom product experience?",
    description: "Highly interactive layouts, premium custom graphics, tailored typography setups, and Framer Motion micro-interactions require detailed UI/UX prototyping and front-end engineering.",
    icon: Paintbrush,
    color: "from-pink-500 to-orange-500",
  },
  {
    id: "04",
    title: "FUTURE NEEDS",
    question: "Will the system need ongoing improvements, support or future integrations?",
    description: "Building with modular codebases, preparing for dynamic CMS expansion, or setting up complex analytics frameworks ensures long-term usability but influences the initial design structure.",
    icon: Scaling,
    color: "from-emerald-500 to-teal-500",
  },
];

export function CostFactors() {
  return (
    <section className="py-24 bg-surface-light/50 dark:bg-surface-dark/40 border-t border-border-light dark:border-border-dark/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-xs font-bold tracking-[0.2em] block mb-4 uppercase"
          >
            TRANSPARENT METRICS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-text-primary-light dark:text-text-primary-dark"
          >
            What Actually Shapes the Cost of a Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed"
          >
            Project cost depends on what needs to be built — not on an arbitrary package name.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {factors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={factor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <GlassCard className="h-full flex flex-col p-6 hover:shadow-xl hover:border-primary-light/20 dark:hover:border-primary-dark/20 transition-all duration-300 relative group overflow-hidden">
                  {/* Subtle hover background highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-display font-black text-text-primary-light/10 dark:text-text-primary-dark/10">
                      {factor.id}
                    </span>
                    <div className={`p-2.5 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary-light dark:text-primary-dark block mb-2">
                    {factor.title}
                  </span>
                  
                  <h3 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-3 leading-snug">
                    {factor.question}
                  </h3>
                  
                  <p className="text-text-muted-light dark:text-text-muted-dark text-xs md:text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
