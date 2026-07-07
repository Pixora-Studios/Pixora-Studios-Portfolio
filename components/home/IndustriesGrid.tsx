"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "Dental Clinics", icon: "🦷" },
  { name: "Cafes", icon: "☕" },
  { name: "Restaurants", icon: "🍽" },
  { name: "Gyms", icon: "💪" },
  { name: "Salons", icon: "💇" },
  { name: "Coaching Centers", icon: "🎓" },
  { name: "Real Estate", icon: "🏠" },
  { name: "Event Organizers", icon: "🎉" },
  { name: "Hotels", icon: "🏨" },
  { name: "Clubs", icon: "🎵" },
  { name: "Travel Agencies", icon: "✈️" },
  { name: "Pharmacies", icon: "💊" },
  { name: "Interior Designers", icon: "🎨" },
  { name: "Personal Brands", icon: "✨" },
  { name: "General Clinics", icon: "🏥" }
];

export function IndustriesGrid() {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Industries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Every Business Deserves a Great Website
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                background: "var(--accent-gradient)",
                color: "white"
              }}
              className="px-6 py-4 rounded-xl glass cursor-default transition-all duration-300 font-display font-bold text-lg flex items-center gap-3"
            >
              <span>{industry.icon}</span>
              <span>{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
