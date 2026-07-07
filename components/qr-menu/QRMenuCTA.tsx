"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function QRMenuCTA() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden relative">
      {/* Accent gradient */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-dark/10 blur-[128px] rounded-full" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-8"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">Guest Experience.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-muted-light dark:text-text-muted-dark mb-12 max-w-2xl mx-auto"
          >
            Ready to upgrade your restaurant with a modern, fast, and beautiful digital menu?
            Let&apos;s talk about your requirements and get you started.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="px-12 py-5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-xl hover:scale-105 transition-transform inline-flex items-center gap-3"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </MagneticButton>

            <Link
              href="/pricing"
              className="text-text-muted-light dark:text-text-muted-dark font-medium hover:text-text-primary-light dark:hover:text-text-primary-dark transition-colors"
            >
              View main website pricing →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
