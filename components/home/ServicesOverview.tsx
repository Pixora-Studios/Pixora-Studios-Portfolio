"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Calendar, Utensils, Search, ShieldCheck, Palette, Mail, Smartphone } from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    description: "Custom websites built for your brand — fast, mobile-first, and made to convert.",
    icon: Globe,
    image: "https://images.pexels.com/photos/8128192/pexels-photo-8128192.jpeg",
  },
  {
    title: "Appointment Booking Systems",
    description: "Let your patients or clients book online, 24/7 — no calls, no friction.",
    icon: Calendar,
    image: "https://images.pexels.com/photos/4266932/pexels-photo-4266932.jpeg",
  },
  {
    title: "Restaurant & Table Booking Systems",
    description: "Accept reservations directly on your site. Zero third-party commissions.",
    icon: Utensils,
    image: "https://images.pexels.com/photos/16345589/pexels-photo-16345589.jpeg",
  },
  {
    title: "Email Notification & CRM Integration",
    description: "Instant appointment alerts and client notifications — no manual follow-up needed.",
    icon: Mail,
    image: "https://images.pexels.com/photos/8284722/pexels-photo-8284722.jpeg",
  },
  {
    title: "SEO & Google Ranking",
    description: "Get found when local customers search for your services. Show up. Stand out.",
    icon: Search,
    image: "https://images.pexels.com/photos/16629436/pexels-photo-16629436.jpeg",
  },
  {
    title: "Brand Identity & UI/UX Design",
    description: "Logos, color systems, and interfaces that make your business look like it means business.",
    icon: Palette,
    image: "https://images.pexels.com/photos/4463588/pexels-photo-4463588.jpeg",
  },
  {
    title: "Hosting, Maintenance & Support",
    description: "We handle the technical side so you never have to worry about downtime or updates.",
    icon: ShieldCheck,
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
  },
  {
    title: "Digital QR Menu",
    description: "Modern, contactless dining experiences for restaurants. Scan, browse, and order-ready.",
    icon: Smartphone,
    image: "https://images.pexels.com/photos/5932727/pexels-photo-5932727.jpeg",
    link: "/services/qr-menu",
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
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            What We Build For You
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="group h-full flex flex-col justify-between bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-primary-light/20 dark:hover:border-primary-dark/20 shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-bold mb-2 tracking-tight text-text-primary-light dark:text-text-primary-dark">
                      {service.title}
                    </h3>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.link || "/services"}
                    className="group/link inline-flex items-center space-x-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary-light dark:text-primary-dark hover:underline mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
