"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Phone, Palette, Laptop, Beaker, Rocket, Settings } from "lucide-react";

const steps = [
  {
    title: "Discovery Call",
    description: "We understand your business, goals, and target customers.",
    icon: Phone,
  },
  {
    title: "Design & Planning",
    description: "Wireframes, design system, and content structure.",
    icon: Palette,
  },
  {
    title: "Development",
    description: "Full-stack development with daily progress updates.",
    icon: Laptop,
  },
  {
    title: "Testing & Review",
    description: "Cross-device testing, performance check, your feedback round.",
    icon: Beaker,
  },
  {
    title: "Launch",
    description: "Go live with SEO setup, analytics, and a launch checklist.",
    icon: Rocket,
  },
  {
    title: "Ongoing Support",
    description: "Monthly maintenance, updates, and you can always reach us.",
    icon: Settings,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-14 md:py-16 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            From Discovery to Launch in 2–4 Weeks
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Background Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border-light dark:bg-border-dark/30" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-light via-secondary-light to-pink-500 dark:from-primary-dark dark:via-secondary-dark origin-top z-10"
          />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${isEven ? "" : "md:flex-row-reverse"}`}>
                    {/* Circle Indicator with Icon */}
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full bg-background-light dark:bg-background-dark border-2 border-primary-light dark:border-primary-dark flex items-center justify-center z-20 shadow-[0_0_15px_rgba(108,99,255,0.15)]">
                      <Icon className="w-4.5 h-4.5 text-primary-light dark:text-primary-dark" />
                    </div>

                    {/* Content Block */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      className={`flex-1 md:w-1/2 ml-14 md:ml-0 ${
                        isEven
                          ? "md:pr-16 lg:pr-24 md:text-right"
                          : "md:pl-16 lg:pl-24 md:text-left"
                      }`}
                    >
                      <div className="group relative glass p-5 rounded-2xl border border-white/10 hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all duration-300 hover:shadow-lg">
                        <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold mb-1.5 block">Step 0{index + 1}</span>
                        <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-xs">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>

                    {/* Spacer for Desktop */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
