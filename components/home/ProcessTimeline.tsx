"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery Call",
    description: "We understand your business, goals, and target customers.",
    icon: "📞",
  },
  {
    title: "Design & Planning",
    description: "Wireframes, design system, and content structure.",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Full-stack development with daily progress updates.",
    icon: "💻",
  },
  {
    title: "Testing & Review",
    description: "Cross-device testing, performance check, your feedback round.",
    icon: "🧪",
  },
  {
    title: "Launch",
    description: "Go live with SEO setup, analytics, and a launch checklist.",
    icon: "🚀",
  },
  {
    title: "Ongoing Support",
    description: "Monthly maintenance, updates, and you can always reach us.",
    icon: "🛠",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-surface-light dark:bg-surface-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
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

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line SVG */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 hidden md:block">
            <svg
              ref={lineRef}
              width="4"
              height="100%"
              viewBox="0 0 4 100"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                ref={pathRef}
                d="M 2 0 L 2 100"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="4"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6C63FF" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background-light dark:bg-background-dark border-4 border-primary-light dark:border-primary-dark flex items-center justify-center z-10 hidden md:flex">
                  <span className="text-xl">{step.icon}</span>
                </div>

                <div className="flex-1 md:w-1/2 p-6">
                  <div className={`md:text-${index % 2 === 0 ? "left" : "right"}`}>
                    <span className="text-6xl mb-4 block md:hidden">{step.icon}</span>
                    <h3 className="text-2xl font-display font-bold mb-4">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
