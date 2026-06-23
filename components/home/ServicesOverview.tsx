"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Calendar, Utensils, Zap, Search, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Website Design & Development",
    description: "Custom business websites built for your brand and your customers.",
    icon: Globe,
  },
  {
    title: "Appointment Booking Systems",
    description: "Let patients, clients, or customers book online. 24/7.",
    icon: Calendar,
  },
  {
    title: "Restaurant & Table Booking Systems",
    description: "Accept reservations directly. No third-party commissions.",
    icon: Utensils,
  },
  {
    title: "WhatsApp Automation & Lead Capture",
    description: "Turn your website into a lead machine.",
    icon: Zap,
  },
  {
    title: "SEO & Google Ranking",
    description: "Get found when local customers search for your services.",
    icon: Search,
  },
  {
    title: "Hosting, Maintenance & Support",
    description: "We handle the technical side. You focus on your business.",
    icon: ShieldCheck,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            What We Build For You
          </motion.h2>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                   <div className="w-16 h-16 rounded-2xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark mb-6">
                      <Icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h3>
                   <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 max-w-xl">
                      {service.description}
                   </p>
                   <Link href="/services" className="group inline-flex items-center space-x-2 font-bold text-primary-light dark:text-primary-dark">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                   </Link>
                </div>
                <div className="flex-1 w-full aspect-video glass rounded-3xl flex items-center justify-center text-text-muted-dark italic">
                   [Service Illustration/Mockup]
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
