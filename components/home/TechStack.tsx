"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Code2,
  Layers,
  Database,
  Wind,
  Zap,
  Cloud,
  Globe,
  Terminal,
  Box,
  Cpu,
  Smartphone,
  Layout
} from "lucide-react";

const techStack = [
  { name: "React", icon: <Code2 className="w-5 h-5" /> },
  { name: "Next.js", icon: <Layers className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Smartphone className="w-5 h-5" /> },
  { name: "Node.js", icon: <Cpu className="w-5 h-5" /> },
  { name: "Express", icon: <Terminal className="w-5 h-5" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  { name: "Tailwind", icon: <Wind className="w-5 h-5" /> },
  { name: "Framer", icon: <Layout className="w-5 h-5" /> },
  { name: "GSAP", icon: <Zap className="w-5 h-5" /> },
  { name: "Cloudinary", icon: <Cloud className="w-5 h-5" /> },
  { name: "AWS", icon: <Globe className="w-5 h-5" /> },
  { name: "Vercel", icon: <Box className="w-5 h-5" /> },
];

export function TechStack() {
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const rings = orbitRef.current.querySelectorAll(".orbit-ring");
    rings.forEach((ring, index) => {
      const duration = 25 + index * 15;
      const direction = index % 2 === 0 ? 1 : -1;
      const startRotation = index * 40; // Avoid symmetry

      // Initial position
      gsap.set(ring, { rotation: startRotation });

      // Rotate the ring
      gsap.to(ring, {
        rotation: startRotation + (360 * direction),
        duration: duration,
        repeat: -1,
        ease: "none",
      });

      // Counter-rotate the items to keep them upright
      const items = ring.querySelectorAll(".tech-item");
      items.forEach((item, j) => {
        const inner = item.querySelector(".tech-icon-inner");
        const initialItemRotation = -(j * 90) - startRotation;

        gsap.set(inner, { rotation: initialItemRotation });

        gsap.to(inner, {
          rotation: initialItemRotation - (360 * direction),
          duration: duration,
          repeat: -1,
          ease: "none",
        });
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

        <div className="relative h-[750px] flex items-center justify-center" ref={orbitRef}>
          {/* Center Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-28 h-28 rounded-full bg-gradient-light dark:bg-gradient-primary p-[2px] z-20"
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
                width: `${250 + i * 200}px`,
                height: `${250 + i * 200}px`,
              }}
            >
              {techStack.slice(i * 4, (i + 1) * 4).map((tech, j) => (
                <div
                  key={tech.name}
                  className="absolute tech-item"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${j * 90}deg) translate(${(250 + i * 200) / 2}px)`,
                  }}
                >
                  <div className="flex flex-col items-center justify-center space-y-1.5 w-12 h-12 md:w-16 md:h-16 p-4 rounded-full glass border border-primary-light/20 dark:border-primary-dark/20 text-xs font-bold tech-icon-inner">
                    <span className="text-primary-light dark:text-primary-dark">{tech.icon}</span>
                    <span className="text-[10px] md:text-xs font-mono">{tech.name}</span>
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
