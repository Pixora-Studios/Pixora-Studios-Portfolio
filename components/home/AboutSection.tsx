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
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-primary-light/20 dark:border-primary-dark/20 shadow-2xl">
              <div className="aspect-[4/5] bg-surface-dark relative">
                 <div className="absolute inset-0 flex items-center justify-center text-text-muted-dark">
                    [Founder Photo]
                 </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-light/10 dark:bg-primary-dark/10 -z-10 rounded-2xl" />

            <div className="mt-8 grid grid-cols-3 gap-4">
              {["15+ Projects", "MERN Expert", "SEO Focused"].map((badge) => (
                <div
                  key={badge}
                  className="px-4 py-2 rounded-full glass text-center text-xs font-bold uppercase tracking-wider"
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
          >
            <span className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest mb-4 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Built by a Developer Who Understands Your Business.
            </h2>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12">
              Hi, I&apos;m Debidutta Acharya — founder of Pixora Studios, full-stack
              developer, and digital growth partner for local businesses. I build
              websites that don&apos;t just look good — they generate leads, build
              trust, and bring real customers through the door. I&apos;ve built
              websites using the MERN stack, Next.js, TypeScript, MongoDB,
              Tailwind CSS, and modern animation libraries, with a strong focus
              on SEO, performance, and real business results.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-display font-bold text-primary-light dark:text-primary-dark mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center space-x-2 font-bold text-lg"
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
