"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Rocket,
  PenTool,
  Briefcase,
  Smartphone,
  Utensils,
  Coffee,
  Stethoscope,
  Dumbbell,
  Flower2,
  Scissors,
  BedDouble,
} from "lucide-react";

const statsList = [
  {
    icon: Rocket,
    value: "20+",
    label: "Projects Delivered",
  },
  {
    icon: PenTool,
    value: "100%",
    label: "Custom Designed",
  },
  {
    icon: Briefcase,
    value: "5+",
    label: "Industries Served",
  },
  {
    icon: Smartphone,
    value: "99%",
    label: "Mobile Friendly",
  },
];

const industriesList = [
  { name: "Restaurants", icon: Utensils },
  { name: "Cafés", icon: Coffee },
  { name: "Clinics", icon: Stethoscope },
  { name: "Gyms", icon: Dumbbell },
  { name: "Spas", icon: Flower2 },
  { name: "Salons", icon: Scissors },
  { name: "Hotels", icon: BedDouble },
];

export function TrustBar() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="w-full py-8 lg:py-12 bg-white dark:bg-black border-t border-border-light dark:border-border-dark overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Full-width premium panel */}
        <div className="rounded-3xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6 lg:p-8 xl:p-10 shadow-lg dark:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-border-light dark:divide-border-dark">
            
            {/* Left half: 4 Stats in a row */}
            <div className="pb-8 lg:pb-0 lg:pr-8 xl:pr-10 grid grid-cols-2 sm:grid-cols-4 gap-6 items-start">
              {statsList.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col items-start gap-2.5">
                    <div className="p-2.5 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-2xl md:text-3xl font-display font-extrabold text-text-primary-light dark:text-text-primary-dark block">
                        {stat.value}
                      </span>
                      <span className="text-[10px] font-bold text-text-muted-light dark:text-text-muted-dark leading-tight block uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right half: Trusted by businesses label + 7 industries */}
            <div className="pt-8 lg:pt-0 lg:pl-8 xl:pl-10 text-left flex flex-col justify-center h-full">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark block">
                Trusted by businesses across
              </span>
              
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-4 mt-6">
                {industriesList.map((industry, idx) => {
                  const Icon = industry.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                      <div className="p-2.5 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark group-hover:scale-105 group-hover:border-primary-light/40 dark:group-hover:border-primary-dark/40 transition-all duration-300">
                        <Icon className="w-5 h-5 text-primary-light dark:text-primary-dark shrink-0" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wide text-text-muted-light dark:text-text-muted-dark text-center leading-none">
                        {industry.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
