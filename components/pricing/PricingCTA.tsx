"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone as WhatsApp } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function PricingCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Not sure where to start?
          </h2>
          <p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-12">
            Tell us a bit about your business. We&apos;ll look at what you have, what you need,
            and give you an honest recommendation.
          </p>

          <div className="flex flex-col items-center gap-6">
            <MagneticButton>
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full bg-[#25D366] text-white font-bold text-xl hover:scale-105 transition-transform flex items-center gap-3 shadow-lg shadow-emerald-500/20"
              >
                <WhatsApp className="w-6 h-6" />
                <span>Talk to Us on WhatsApp</span>
              </Link>
            </MagneticButton>

            <Link
              href="/contact"
              className="text-primary-light dark:text-primary-dark font-medium hover:underline flex items-center gap-2"
            >
              <span>Prefer email or a form?</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
