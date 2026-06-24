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
  { name: "React", icon: <Code2 className="w-5 h-5" />, desc: "The library for web and native user interfaces." },
  { name: "Next.js", icon: <Layers className="w-5 h-5" />, desc: "The React framework for the web." },
  { name: "TypeScript", icon: <Smartphone className="w-5 h-5" />, desc: "JavaScript with syntax for types." },
  { name: "Node.js", icon: <Cpu className="w-5 h-5" />, desc: "Cross-platform JavaScript runtime environment." },
  { name: "Express", icon: <Terminal className="w-5 h-5" />, desc: "Fast, unopinionated, minimalist web framework." },
  { name: "MongoDB", icon: <Database className="w-5 h-5" />, desc: "The document database for modern applications." },
  { name: "Tailwind", icon: <Wind className="w-5 h-5" />, desc: "A utility-first CSS framework." },
  { name: "Framer", icon: <Layout className="w-5 h-5" />, desc: "Motion library for React." },
  { name: "GSAP", icon: <Zap className="w-5 h-5" />, desc: "Professional-grade JavaScript animation." },
  { name: "Cloudinary", icon: <Cloud className="w-5 h-5" />, desc: "Image and video management at scale." },
  { name: "AWS", icon: <Globe className="w-5 h-5" />, desc: "Cloud computing services from Amazon." },
  { name: "Vercel", icon: <Box className="w-5 h-5" />, desc: "Platform for frontend developers." },
];

import { useState } from "react";

export function TechStack() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<{ name: string; desc: string } | null>(null);

  useEffect(() => {
    if (!orbitRef.current) return;

    const ctx = gsap.context(() => {
      const rings = orbitRef.current!.querySelectorAll(".orbit-ring");
      const timelines: gsap.core.Timeline[] = [];

      rings.forEach((ring, index) => {
        const duration = 25 + index * 15;
        const direction = index % 2 === 0 ? 1 : -1;
        const startRotation = index * 40;

        const ringTl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
        timelines.push(ringTl);
        gsap.set(ring, { rotation: startRotation });

        ringTl.to(ring, {
          rotation: startRotation + (360 * direction),
          duration: duration,
        });

        const items = ring.querySelectorAll(".tech-item");
        items.forEach((item, j) => {
          const inner = item.querySelector(".tech-icon-inner");
          const initialItemRotation = -(j * 90) - startRotation;

          gsap.set(inner, { rotation: initialItemRotation });

          ringTl.to(inner, {
            rotation: initialItemRotation - (360 * direction),
            duration: duration,
          }, 0);

          // Add hover logic
          const iconWrapper = item.querySelector(".tech-icon-wrapper");
          iconWrapper?.addEventListener("mouseenter", () => {
            timelines.forEach(tl => tl.pause());
          });
          iconWrapper?.addEventListener("mouseleave", () => {
            timelines.forEach(tl => tl.play());
          });
        });
      });
    });

    return () => ctx.revert();
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
                  <div className="tech-icon-inner relative">
                    <div
                      className="tech-icon-wrapper flex flex-col items-center justify-center space-y-1.5 w-14 h-14 md:w-20 md:h-20 p-4 rounded-full glass border border-primary-light/20 dark:border-primary-dark/20 text-xs font-bold cursor-pointer transition-all hover:scale-110 hover:border-primary-light dark:hover:border-primary-dark"
                      onMouseEnter={() => setHoveredTech({ name: tech.name, desc: tech.desc })}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      <span className="text-primary-light dark:text-primary-dark">{tech.icon}</span>
                      <span className="text-[10px] md:text-xs font-mono">{tech.name}</span>
                    </div>

                    {/* Tooltip */}
                    {hoveredTech?.name === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 glass rounded-2xl z-50 pointer-events-none"
                      >
                        <p className="font-bold text-sm mb-1">{tech.name}</p>
                        <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark leading-tight">{tech.desc}</p>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white/10" />
                      </motion.div>
                    )}
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
