"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Calendar, Utensils, Search, ShieldCheck, Palette, Mail } from "lucide-react";

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
                <div className="flex-1 w-full aspect-video glass rounded-3xl overflow-hidden border border-primary-light/10 dark:border-primary-dark/10">
                  {service.image ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={service.image}
                        alt={`${service.title} preview`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted-dark italic">
                      [Service Illustration/Mockup]
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
