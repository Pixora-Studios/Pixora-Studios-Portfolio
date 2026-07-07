"use client";

import { motion } from "framer-motion";
import { Search, Zap, Smartphone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const pillars = [
  {
    icon: Search,
    title: "Local SEO",
    description: "Rank when people search 'best [your business] near me'",
  },
  {
    icon: Zap,
    title: "Core Web Vitals",
    description: "Optimized for Google's speed and interaction scores",
  },
  {
    icon: Smartphone,
    title: "Mobile SEO",
    description: "Designed mobile-first, because Google ranks mobile-first",
  },
  {
    icon: MapPin,
    title: "Google Business",
    description: "We help you set up and optimize your Google Business Profile",
  },
];

export function SEOSection() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current >= 98) {
          setScore(98);
          clearInterval(interval);
        } else {
          setScore(current);
        }
      }, 20);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-10 md:py-14 bg-surface-light dark:bg-surface-dark overflow-hidden flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6 md:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-2 md:mb-4"
          >
            SEO & Performance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-display font-bold"
          >
            We Build Websites Google Loves
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          <div className="relative flex justify-center">
            <div className="w-full max-w-[280px] md:max-w-[340px] aspect-square rounded-full border-8 border-primary-light/10 dark:border-primary-dark/10 flex items-center justify-center relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-emerald-500"
              >
                {score}
              </motion.div>
              <div className="absolute bottom-1/4 text-sm md:text-xl font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">
                Performance
              </div>
              {/* Circular progress SVG could go here */}
            </div>
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-2">{pillar.title}</h4>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
