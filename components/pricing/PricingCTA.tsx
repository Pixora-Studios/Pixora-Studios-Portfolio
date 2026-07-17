"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, PhoneCall } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function PricingCTA() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918249685324"; // Fallback to a valid Odisha/Bhubaneswar format if unset

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark/50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">
            Not Sure What Your Project Needs Yet?
          </h2>
          
          <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-12 max-w-xl mx-auto leading-relaxed">
            That is exactly what the first conversation is for. Tell us what you are trying to build, and we will help you figure out the right direction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2.5 shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start a Project</span>
              </Link>
            </MagneticButton>

            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#25D366]" />
              <span>Contact Pixora</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
