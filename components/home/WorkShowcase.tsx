"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { projects } from "@/lib/data/projects";
import Image from "next/image";

export function WorkShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const xOffset = useRef(0);
  const speed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Width of one set of cards (half the total track since cards are duplicated)
    const totalWidth = track.scrollWidth / 2;

    const onTick = () => {
      if (isPaused.current) return;
      xOffset.current += speed;
      if (xOffset.current >= totalWidth) {
        xOffset.current = 0; // seamless reset
      }
      gsap.set(track, { x: -xOffset.current });
    };

    gsap.ticker.add(onTick);

    return () => {
      gsap.ticker.remove(onTick);
    };
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  return (
    <section className="py-14 md:py-16 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight"
          >
            Real Projects. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto"
          >
            We don&apos;t just build websites — we build business tools that
            convert visitors into customers.
          </motion.p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex space-x-6 px-4 w-max"
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative flex-shrink-0 w-[320px] h-[220px] rounded-2xl overflow-hidden group/card transition-transform duration-300 hover:scale-[1.04] bg-surface-dark"
            >
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={project.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-300"
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-300"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-text-muted-dark italic text-xs">
                  [Project Preview]
                </div>
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-5 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                <span className="text-primary-dark font-mono text-[9px] uppercase tracking-widest mb-1.5 block">
                  {project.industry}
                </span>
                <h3 className="text-white text-lg font-display font-bold mb-3">
                  {project.name}
                </h3>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center space-x-2 text-white text-xs font-bold opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/portfolio"
          className="px-6 py-2.5 rounded-full border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark text-xs font-bold hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-all"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
