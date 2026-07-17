"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/GlassCard";

const options = [
  { id: "website", label: "Website" },
  { id: "restaurant", label: "Restaurant Digital Experience" },
  { id: "business", label: "Business System" },
  { id: "mobile", label: "Mobile App" },
  { id: "software", label: "Custom Software" },
  { id: "not-sure", label: "Not Sure Yet" },
];

export function SolutionSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 bg-surface-light/30 dark:bg-surface-dark/20 border-y border-border-light dark:border-border-dark/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-xs font-mono font-bold tracking-wider mb-4 uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Guide
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Identify Your Direction
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base md:text-lg mb-10 max-w-xl mx-auto">
            Select the digital path closest to your current needs, and we&apos;ll help outline the parameters of your project.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {options.map((option) => {
              const isSelected = selected === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelected(option.id)}
                  className={`relative p-4 rounded-xl text-sm font-semibold transition-all duration-300 border text-center flex flex-col justify-center items-center min-h-[70px] ${
                    isSelected
                      ? "bg-primary-light/10 dark:bg-primary-dark/15 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark shadow-lg shadow-primary-light/5"
                      : "bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark text-text-primary-light/80 dark:text-text-primary-dark/80 hover:border-primary-light/40 dark:hover:border-primary-dark/40"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="selectedIndicator"
                      className="absolute -top-1.5 -right-1.5 bg-primary-light dark:bg-primary-dark text-white rounded-full p-0.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" fill="currentColor" stroke="none" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <GlassCard className="border-primary-light/20 dark:border-primary-dark/20 bg-primary-light/5 dark:bg-primary-dark/5 p-6 max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                    <div>
                      <span className="text-xs font-mono font-bold text-primary-light dark:text-primary-dark uppercase tracking-widest block mb-1">
                        Direction Selected
                      </span>
                      <p className="text-text-primary-light dark:text-text-primary-dark font-medium text-base">
                        Good starting point. The next step is understanding what you need to build.
                      </p>
                    </div>
                    <Link
                      href={`/contact?source=${selected}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-light dark:bg-primary-dark text-white font-bold text-sm hover:scale-105 transition-all shadow-md shrink-0"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
