"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Coffee, UtensilsCrossed, Dumbbell, Scissors,
  GraduationCap, Building2, CalendarDays, BedDouble, Music2,
  Plane, SmilePlus, Pill, Sofa, UserCircle
} from "lucide-react";
import {
  SiReact, SiNextdotjs, SiMongodb, SiNodedotjs, SiTypescript,
  SiTailwindcss, SiFramer, SiGreensock, SiPostgresql, SiPrisma,
  SiExpress, SiCloudinary
} from "react-icons/si";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const industries = [
  { name: "Clinics", icon: Stethoscope },
  { name: "Cafes", icon: Coffee },
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Gyms", icon: Dumbbell },
  { name: "Salons", icon: Scissors },
  { name: "Coaching Centers", icon: GraduationCap },
  { name: "Real Estate", icon: Building2 },
  { name: "Event Organizers", icon: CalendarDays },
  { name: "Hotels", icon: BedDouble },
  { name: "Clubs", icon: Music2 },
  { name: "Travel Agencies", icon: Plane },
  { name: "Dental Clinics", icon: SmilePlus },
  { name: "Pharmacies", icon: Pill },
  { name: "Interior Designers", icon: Sofa },
  { name: "Personal Brands", icon: UserCircle },
];

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "theme" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#BB4BEC" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "theme" },
  { name: "Express", icon: SiExpress, color: "theme" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
];

export function TrustBar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="py-16 border-y border-border-light dark:border-border-dark overflow-hidden bg-surface-light dark:bg-surface-dark w-full">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark uppercase tracking-[0.2em]">
          Trusted by businesses across these industries
        </p>
      </div>

      <div className="flex flex-col space-y-12">
        {/* Industry Marquee */}
        <div className="relative flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="flex whitespace-nowrap items-center overflow-visible"
          >
            {[...industries, ...industries].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mx-8">
                <item.icon className="w-6 h-6 text-primary-light dark:text-primary-dark flex-shrink-0" />
                <span className="text-xl md:text-2xl font-display font-bold text-text-primary-light dark:text-text-primary-dark whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Marquee */}
        <div className="relative flex overflow-hidden w-full">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex whitespace-nowrap items-center overflow-visible"
          >
            {[...technologies, ...technologies].map((item, i) => (
              <div key={i} className="flex items-center gap-3 mx-10">
                <item.icon
                  className={`w-5 h-5 flex-shrink-0 ${item.color === "theme" ? "text-text-primary-light dark:text-text-primary-dark" : ""}`}
                  style={{ color: item.color !== "theme" ? item.color : undefined }}
                />
                <span className="text-sm font-mono font-medium text-text-primary-light dark:text-text-primary-dark whitespace-nowrap uppercase tracking-widest">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
