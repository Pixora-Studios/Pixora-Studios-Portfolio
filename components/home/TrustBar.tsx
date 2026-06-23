"use client";

import { motion } from "framer-motion";

const industries = [
  "🏥 Clinics", "☕ Cafes", "🍽 Restaurants", "💪 Gyms", "💇 Salons",
  "🏠 Real Estate", "🎓 Institutes", "🦷 Dental Clinics", "🏨 Hotels", "🎪 Event Organizers"
];

const technologies = [
  "React", "Next.js", "MongoDB", "Node.js", "TypeScript", "Tailwind", "Framer Motion", "GSAP", "Prisma", "PostgreSQL"
];

export function TrustBar() {
  return (
    <div className="py-12 border-y border-border-light dark:border-border-dark overflow-hidden bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-mono text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest">
          Trusted by businesses across these industries
        </p>
      </div>

      <div className="flex flex-col space-y-12">
        {/* Industry Marquee */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap space-x-12 items-center"
          >
            {[...industries, ...industries].map((item, i) => (
              <span
                key={i}
                className="text-2xl md:text-4xl font-display font-bold text-text-primary-light/40 dark:text-text-primary-dark/40"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Tech Marquee */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex whitespace-nowrap space-x-16 items-center"
          >
            {[...technologies, ...technologies].map((item, i) => (
              <span
                key={i}
                className="text-lg md:text-xl font-mono text-primary-light dark:text-primary-dark opacity-60"
              >
                • {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
