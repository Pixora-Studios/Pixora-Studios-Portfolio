"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone as WhatsApp } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function FinalCTA() {
  return (
    <section className="py-14 md:py-16 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-light dark:bg-gradient-primary" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white,transparent)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
        >
          Ready to Get More Customers Online?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto"
        >
          Join local businesses in Bhubaneswar and across Odisha who trust Pixora
          Studios.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <Link
              href="/contact"
              className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-primary-dark font-bold text-base md:text-lg hover:scale-105 transition-transform inline-block"
            >
              Book Free Consultation
            </Link>
          </MagneticButton>
          <Link
            href={`https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-emerald-600 text-white font-bold text-base md:text-lg hover:scale-105 transition-transform flex items-center space-x-3"
          >
            <WhatsApp className="w-5 h-5 md:w-6 md:h-6" />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
