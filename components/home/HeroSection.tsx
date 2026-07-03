"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const words = "Premium Web Design & Development for Local Businesses.".split(" ");

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-light/20 dark:bg-primary-dark/20 blur-[128px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-light/20 dark:bg-secondary-dark/20 blur-[128px] -z-10" />

      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid xl:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark mb-8"
            >
              <Terminal className="w-4 h-4 text-primary-light dark:text-primary-dark" />
              <span className="text-xs font-mono font-bold tracking-tight uppercase">Based in Bhubaneswar, Odisha</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] mb-8 tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg sm:text-xl text-text-muted-light dark:text-text-muted-dark mb-12 max-w-xl leading-relaxed font-medium"
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
                className="cta-button group relative w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-10 py-5 rounded-full border border-border-light dark:border-border-dark font-bold text-lg text-center hover:bg-surface-light dark:hover:bg-surface-dark transition-all"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="hidden xl:block relative"
          >
             {/* 3D Mockup would go here */}
             <div className="aspect-video w-full glass rounded-3xl border border-border-light dark:border-border-dark flex items-center justify-center italic text-text-muted-dark">
                [High-Performance Web Experience]
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
