"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function QRMenuCTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-background-light dark:bg-background-dark overflow-hidden relative">
      {/* Accent glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-dark/8 blur-[140px] rounded-full -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-dark/8 blur-[120px] rounded-full -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 leading-tight">
              Your Restaurant Is Already Digital.{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                Your Customer Experience Should Be Too.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Tell us how your restaurant works. We will help you figure out the digital experience that fits — whether that is a QR menu, a connected ordering flow, or a fully integrated restaurant experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20"
              >
                <span>Build With Pixora</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-text-muted-light dark:text-text-muted-dark" />
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Internal links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-10 text-xs text-text-muted-light dark:text-text-muted-dark"
          >
            {[
              { label: "View All Services", href: "/services" },
              { label: "See Our Work", href: "/portfolio" },
              { label: "Pricing Overview", href: "/pricing" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
