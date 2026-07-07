"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone as WhatsApp } from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
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
          className="text-4xl md:text-7xl font-display font-bold mb-8"
        >
          Ready to Get More Customers Online?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto"
        >
          Join local businesses in Bhubaneswar and across Odisha who trust Pixora
          Studios.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          <MagneticButton>
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-white text-primary-dark font-bold text-xl hover:scale-105 transition-transform inline-block"
            >
              Book Free Consultation
            </Link>
          </MagneticButton>
          <Link
            href={`https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            className="px-10 py-5 rounded-full bg-emerald-600 text-white font-bold text-xl hover:scale-105 transition-transform flex items-center space-x-3"
          >
            <WhatsApp className="w-6 h-6" />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
