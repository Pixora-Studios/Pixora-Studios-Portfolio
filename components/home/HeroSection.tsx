"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const words = "Your Business, But Make It Unforgettable.".split(" ");

  return (
    <section className="relative min-h-[90vh] pt-24 pb-12 overflow-hidden bg-background-light dark:bg-background-dark flex items-center">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-light/20 dark:bg-primary-dark/20 blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary-light/20 dark:bg-secondary-dark/20 blur-[128px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid xl:grid-cols-[1.2fr,0.8fr] gap-10 lg:gap-16 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark mb-6"
            >
              <Terminal className="w-3.5 h-3.5 text-primary-light dark:text-primary-dark" />
              <span className="text-[10px] font-mono font-bold tracking-tight uppercase">Based in Bhubaneswar, Odisha</span>
            </motion.div>

            <h1 className="text-[clamp(2.25rem,4.5vw,4rem)] font-display font-bold leading-[1.1] mb-6 tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-[0.25em] ${
                    word.includes("Unforgettable")
                      ? "text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary"
                      : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark mb-10 max-w-lg leading-relaxed font-medium"
            >
              We build custom websites for clinics, cafes, restaurants, gyms and salons in Bhubaneswar that actually grow your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 max-w-full"
            >
              <Link
                href="/contact"
                className="cta-button group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-base overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-border-light dark:border-border-dark font-bold text-base text-center hover:bg-surface-light dark:hover:bg-surface-dark transition-all"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden xl:block relative w-full max-w-[480px] ml-auto"
          >
             <div className="relative w-full aspect-video glass rounded-[2rem] border border-border-light dark:border-border-dark overflow-hidden shadow-2xl">
                {/* Browser Chrome */}
                <div className="h-8 border-b border-border-light dark:border-border-dark bg-surface-light/50 dark:bg-surface-dark/50 flex items-center px-3 gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 max-w-[150px] mx-auto h-5 rounded bg-background-light/50 dark:bg-background-dark/50 border border-border-light dark:border-border-dark flex items-center px-2">
                    <span className="text-[8px] text-text-muted-light dark:text-text-muted-dark font-mono opacity-50">pixorastudios.com</span>
                  </div>
                </div>
                {/* Content Placeholder */}
                <div className="absolute inset-0 top-8 flex items-center justify-center italic text-[13px] text-text-muted-dark">
                   [High-Performance Web Experience]
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
