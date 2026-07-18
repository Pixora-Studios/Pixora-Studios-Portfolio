"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Calendar, Search, ShieldCheck, Palette } from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    description: "Custom websites built for your brand — fast, mobile-first, and made to convert.",
    icon: Globe,
    link: "/services#websites",
  },
  {
    title: "Appointment Booking Systems",
    description: "Let your patients or clients book online 24/7 with zero friction.",
    icon: Calendar,
    link: "/services#booking",
  },
  {
    title: "Brand Identity & UI/UX Design",
    description: "Logos, color systems, and designs that build trust and capture attention.",
    icon: Palette,
    link: "/services#branding",
  },
  {
    title: "SEO & Google Ranking",
    description: "Show up where local customers are searching. Rank higher, win clients.",
    icon: Search,
    link: "/services#seo",
  },
  {
    title: "Hosting, Maintenance & Support",
    description: "We manage security, speed, and updates so you can focus on growth.",
    icon: ShieldCheck,
    link: "/services#hosting",
  },
  {
    title: "See All Services",
    description: "Explore our complete range of design, integration, and systems capabilities.",
    icon: ArrowRight,
    link: "/services",
    isAction: true,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-14 md:py-16 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Services, Built Around Your Business
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAction = service.isAction;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={service.link}>
                  <div className={`group h-full flex flex-col justify-between border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg shadow-sm ${
                    isAction
                      ? "bg-primary-light/5 dark:bg-primary-dark/5 border-primary-light/20 dark:border-primary-dark/20 hover:border-primary-light dark:hover:border-primary-dark"
                      : "bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:border-primary-light/20 dark:hover:border-primary-dark/20"
                  }`}>
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform ${
                        isAction
                          ? "bg-primary-light dark:bg-primary-dark text-white"
                          : "bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-display font-bold mb-2 tracking-tight text-text-primary-light dark:text-text-primary-dark">
                        {service.title}
                      </h3>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="group/link inline-flex items-center space-x-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary-light dark:text-primary-dark hover:underline mt-auto">
                      <span>{isAction ? "View Service Suite" : "Explore"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
