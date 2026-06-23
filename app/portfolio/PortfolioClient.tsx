"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { PageTransition } from "@/components/shared/PageTransition";
import { cn } from "@/lib/utils";

const categories = ["All", "Clinics", "Cafes", "Restaurants", "Gyms", "Institutes", "Others"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Work That Speaks For Itself.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-muted-light dark:text-text-muted-dark"
            >
              Real websites built for real businesses. Every project is built with
              performance, design, and conversions in mind.
            </motion.p>
          </div>
        </section>

        {/* Filter Bar */}
        <div className="sticky top-20 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-6 border-y border-border-light dark:border-border-dark mb-12">
          <div className="container mx-auto px-6 flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  activeCategory === category
                    ? "bg-gradient-light dark:bg-gradient-primary text-white"
                    : "bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <section className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <Link href={`/portfolio/${project.slug}`}>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-6 py-3 rounded-full bg-white text-black font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Case Study
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-primary-light dark:text-primary-dark font-mono text-xs uppercase tracking-widest">
                        {project.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-[10px] font-mono text-text-muted-dark"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
