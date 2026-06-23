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
    <section ref={containerRef} className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            From Discovery to Launch in 2–4 Weeks
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Background Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border-light dark:bg-border-dark/30" />

          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-light via-secondary-light to-pink-500 dark:from-primary-dark dark:via-secondary-dark origin-top z-10"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Circle Indicator with Icon */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background-light dark:bg-background-dark border-2 border-primary-light dark:border-primary-dark flex items-center justify-center z-20 shadow-[0_0_20px_rgba(108,99,255,0.2)]">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-light dark:text-primary-dark" />
                    </div>

                    {/* Content Block */}
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`flex-1 md:w-1/2 ml-16 md:ml-0 ${
                        index % 2 === 0
                          ? "md:pl-32 lg:pl-48 md:text-left"
                          : "md:pr-32 lg:pr-48 md:text-right"
                      }`}
                    >
                      <div className="group relative glass p-8 rounded-3xl border border-white/10 hover:border-primary-light/50 dark:hover:border-primary-dark/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(108,99,255,0.05)]">
                        <span className="text-primary-light dark:text-primary-dark font-mono text-sm font-bold mb-3 block">Step 0{index + 1}</span>
                        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-base md:text-lg">
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
