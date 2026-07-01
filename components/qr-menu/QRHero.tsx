"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, QrCode } from "lucide-react";

export function QRHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-dark/20 blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-dark/20 blur-[128px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span>Now Testing / New Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              Contactless, Instant, <br />
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">No-App</span> Digital Menu.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-lg"
            >
              Scan a QR code to view and order. A fast, mobile-optimized experience for your customers without the friction of app downloads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold text-center hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Phone Mockup */}
            <div className="relative w-64 h-[520px] bg-background-dark rounded-[3rem] border-[8px] border-surface-dark shadow-2xl overflow-hidden">
              {/* Menu content placeholder */}
              <div className="absolute inset-0 bg-[#F8F8FF] p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-surface-dark mx-auto mb-6" />
                <div className="h-4 w-2/3 bg-surface-dark/10 rounded mx-auto" />
                <div className="space-y-3 pt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-surface-dark/5">
                      <div className="space-y-1">
                        <div className="h-3 w-24 bg-surface-dark/20 rounded" />
                        <div className="h-2 w-16 bg-surface-dark/10 rounded" />
                      </div>
                      <div className="h-3 w-8 bg-surface-dark/20 rounded" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6 h-10 rounded-full bg-primary-dark/10 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-primary-dark">
                  View Full Menu
                </div>
              </div>
            </div>

            {/* QR Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass p-4 rounded-2xl border border-white/20 shadow-xl"
            >
              <div className="bg-white p-2 rounded-lg mb-2">
                <QrCode className="w-12 h-12 text-black" />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase text-text-primary-dark">Scan to View</p>
              </div>
            </motion.div>

            {/* Feature badge */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 bottom-1/4 glass px-4 py-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary-dark/20 flex items-center justify-center text-primary-dark">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-text-primary-dark uppercase">Ultra Fast</p>
                <p className="text-[8px] text-text-muted-dark italic">No App Needed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
