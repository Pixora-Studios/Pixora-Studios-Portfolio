"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import {
  Rocket,
  PenTool,
  Briefcase,
  Smartphone,
  Utensils,
  Coffee,
  Stethoscope,
  Dumbbell,
  Flower2,
  Scissors,
  BedDouble,
} from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const statsList = [
  {
    icon: Rocket,
    value: "20+",
    label: "Projects Delivered",
  },
  {
    icon: PenTool,
    value: "100%",
    label: "Custom Designed",
  },
  {
    icon: Briefcase,
    value: "5+",
    label: "Industries Served",
  },
  {
    icon: Smartphone,
    value: "99%",
    label: "Mobile Friendly",
  },
];

const industriesList = [
  { name: "Restaurants", icon: Utensils },
  { name: "Cafés", icon: Coffee },
  { name: "Clinics", icon: Stethoscope },
  { name: "Gyms", icon: Dumbbell },
  { name: "Spas", icon: Flower2 },
  { name: "Salons", icon: Scissors },
  { name: "Hotels", icon: BedDouble },
];

function StatCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, numericValue, count, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function TrustBar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-8 lg:py-16 bg-white dark:bg-black border-t border-border-light dark:border-border-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Full-width premium panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-3xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 lg:p-8 xl:p-10 shadow-lg dark:shadow-2xl relative overflow-hidden group/panel"
        >
          {/* Subtle background glow effect in the container */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-light/[0.02] to-secondary-light/[0.02] dark:from-primary-dark/[0.01] dark:to-secondary-dark/[0.01]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-border-light/60 dark:divide-border-dark/60">
            
            {/* Left half: 4 Stats in a row */}
            <div className="pb-8 lg:pb-0 lg:pr-8 xl:pr-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-start">
              {statsList.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="flex flex-col items-start gap-3 p-4 rounded-2xl bg-black/[0.01] dark:bg-white/[0.01] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] border border-border-light/40 dark:border-border-dark/40 hover:border-primary-light/30 dark:hover:border-primary-dark/30 transition-all duration-300 group cursor-default shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] dark:shadow-none"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-light/10 to-secondary-light/10 dark:from-primary-dark/10 dark:to-secondary-dark/5 text-primary-light dark:text-primary-dark shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-2xl md:text-3.5xl font-display font-black text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary block tracking-tight">
                        <StatCounter value={stat.value} />
                      </span>
                      <span className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark leading-tight block uppercase tracking-wider mt-1.5 font-mono">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right half: Trusted by businesses label + 7 industries */}
            <div className="pt-8 lg:pt-0 lg:pl-8 xl:pl-10 text-left flex flex-col justify-center h-full">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-text-muted-light dark:text-text-muted-dark block">
                  Trusted by businesses across
                </span>
              </div>
              
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 mt-6">
                {industriesList.map((industry, idx) => {
                  const Icon = industry.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center gap-2.5 group cursor-default"
                    >
                      <div className="p-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark group-hover:bg-gradient-to-br group-hover:from-primary-light/10 group-hover:to-secondary-light/10 dark:group-hover:from-primary-dark/20 dark:group-hover:to-secondary-dark/10 group-hover:border-primary-light/40 dark:group-hover:border-primary-dark/40 group-hover:text-primary-light dark:group-hover:text-primary-dark group-hover:shadow-[0_8px_20px_-6px_rgba(108,99,255,0.15)] transition-all duration-300">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 shrink-0" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide text-text-muted-light dark:text-text-muted-dark text-center leading-none group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
                        {industry.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
