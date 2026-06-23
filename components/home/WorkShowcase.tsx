"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "Prachi's Dental Hub",
    industry: "Dental Clinic",
    video: "/videos/project-1.mp4",
  },
  {
    name: "Pearl 32 Dental",
    industry: "Dental Clinic",
    video: "/videos/project-2.mp4",
  },
  {
    name: "Aroma Cafe",
    industry: "Cafe",
    video: "/videos/project-3.mp4",
  },
  {
    name: "FitLife Gym",
    industry: "Gym",
    video: "/videos/project-4.mp4",
  },
  {
    name: "Spice Garden",
    industry: "Restaurant",
    video: "/videos/project-5.mp4",
  },
  {
    name: "NextGen Coaching",
    industry: "Institute",
    video: "/videos/project-6.mp4",
  },
];

export function WorkShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Real Projects. Real Results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto"
          >
            We don&apos;t just build websites — we build business tools that
            convert visitors into customers.
          </motion.p>
        </div>
      </div>

      <div
        className="relative flex overflow-x-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex space-x-8 px-4"
        >
          {[...projects, ...projects].map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[380px] h-[260px] rounded-2xl overflow-hidden group/card"
            >
              <div className="absolute inset-0 bg-surface-dark flex items-center justify-center text-text-muted-dark italic text-sm">
                [Project Preview]
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                <span className="text-primary-dark font-mono text-[10px] uppercase tracking-widest mb-2 block">
                  {project.industry}
                </span>
                <h3 className="text-white text-xl font-display font-bold mb-4">
                  {project.name}
                </h3>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center space-x-2 text-white text-sm font-bold opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/portfolio"
          className="px-8 py-3 rounded-full border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark font-bold hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-all"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
