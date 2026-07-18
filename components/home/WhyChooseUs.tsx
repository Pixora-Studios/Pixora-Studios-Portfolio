"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Smartphone,
  Search,
  Lock,
  MessageSquare,
  Calendar,
  Utensils,
  LayoutDashboard,
} from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

const features = [
  {
    icon: Zap,
    title: "⚡ Fast Websites",
    description: "Under 2 second load time. Your visitors won't wait.",
  },
  {
    icon: Smartphone,
    title: "📱 Mobile First",
    description: "70% of your customers browse on phones. We design for them.",
  },
  {
    icon: Search,
    title: "📈 SEO Built-In",
    description: "Rank on Google. Get found by customers searching for you.",
  },
  {
    icon: Lock,
    title: "🔒 Secure & Reliable",
    description: "SSL, security headers, and 99.9% uptime guaranteed.",
  },
  {
    icon: MessageSquare,
    title: "💬 WhatsApp Integration",
    description: "Turn website visitors into WhatsApp leads instantly.",
  },
  {
    icon: Calendar,
    title: "📅 Booking Systems",
    description: "Let customers book appointments directly from your website.",
  },
  {
    icon: Utensils,
    title: "🍽 Table Reservations",
    description: "Built for cafes and restaurants. No third-party fees.",
  },
  {
    icon: LayoutDashboard,
    title: "📊 Admin Dashboard",
    description: "Manage bookings, leads, and content yourself. No tech skills needed.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-14 md:py-16 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3"
          >
            Our Edge
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Why Local Businesses Choose Us
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:shadow-primary-light/5 dark:hover:shadow-primary-dark/10 border-transparent hover:border-primary-light/20 dark:hover:border-primary-dark/20 p-5">
                  <div className="mb-4 inline-flex p-2.5 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark group-hover:rotate-[12deg] transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
