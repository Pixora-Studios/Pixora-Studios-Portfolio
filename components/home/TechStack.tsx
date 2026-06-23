"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "JS" },
  { name: "Express", icon: "EX" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Framer", icon: "FM" },
  { name: "GSAP", icon: "G" },
  { name: "Cloudinary", icon: "☁️" },
  { name: "AWS", icon: "A" },
  { name: "Vercel", icon: "V" },
];

export function TechStack() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const rings = orbitRef.current.querySelectorAll(".orbit-ring");
    rings.forEach((ring, index) => {
      gsap.to(ring, {
        rotate: 360,
        duration: 20 + index * 10,
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Built With Modern Technology
          </motion.h2>
        </div>

        <div className="relative h-[600px] flex items-center justify-center" ref={orbitRef}>
          {/* Center Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full bg-gradient-light dark:bg-gradient-primary p-[2px] z-20"
          >
            <div className="w-full h-full rounded-full bg-background-light dark:bg-background-dark flex items-center justify-center text-center p-4">
              <span className="font-display font-bold text-sm">Pixora Studios</span>
            </div>
          </motion.div>

          {/* Orbital Rings */}
          {[1, 2, 3].map((ring, i) => (
            <div
              key={ring}
              className={`absolute border border-primary-light/10 dark:border-primary-dark/10 rounded-full orbit-ring`}
              style={{
                width: `${250 + i * 150}px`,
                height: `${250 + i * 150}px`,
              }}
            >
              {techStack.slice(i * 4, (i + 1) * 4).map((tech, j) => (
                <div
                  key={tech.name}
                  className="absolute p-3 rounded-full glass border border-primary-light/20 dark:border-primary-dark/20 text-xs font-bold"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${j * 90}deg) translate(${
                      (250 + i * 150) / 2
                    }px) rotate(-${j * 90}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <span>{tech.icon}</span>
                    <span className="hidden md:inline">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
