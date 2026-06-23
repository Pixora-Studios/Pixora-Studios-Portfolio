"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { label: "Projects Delivered", value: 15, suffix: "+" },
  { label: "Mobile Responsive", value: 100, suffix: "%" },
  { label: "Avg. Lead Increase", value: 3, suffix: "x" },
  { label: "Client Satisfaction", value: 5, suffix: "★" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section className="py-12 min-h-[calc(100vh-64px)] flex items-center bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full md:w-[45%]"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary-light/20 dark:border-primary-dark/20 shadow-2xl">
              <div className="aspect-[4/5] bg-surface-dark relative w-full h-full max-h-[calc(100vh-120px)] object-cover object-top">
                 <div className="absolute inset-0 flex items-center justify-center text-text-muted-dark">
                    [Founder Photo]
                 </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-light/10 dark:bg-primary-dark/10 -z-10 rounded-2xl" />

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["15+ Projects", "MERN Expert", "SEO Focused"].map((badge) => (
                <div
                  key={badge}
                  className="px-2 py-1.5 rounded-full glass text-center text-[10px] font-bold uppercase tracking-wider"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-[55%]"
          >
            <span className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest mb-2 block">
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 leading-tight">
              Built by a Developer Who Understands Your Business.
            </h2>
            <p className="text-sm lg:text-base text-text-muted-light dark:text-text-muted-dark mb-6 line-clamp-4">
              Hi, I&apos;m Debidutta Acharya — founder of Pixora Studios, full-stack
              developer, and digital growth partner for local businesses. I build
              websites that don&apos;t just look good — they generate leads, build
              trust, and bring real customers through the door. I&apos;ve built
              websites using the MERN stack, Next.js, TypeScript, MongoDB,
              Tailwind CSS, and modern animation libraries, with a strong focus
              on SEO, performance, and real business results.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center space-x-2 font-bold text-base"
            >
              <span className="relative">
                Learn My Full Story
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-light dark:bg-primary-dark scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
