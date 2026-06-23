"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const line1 = "Your Business,";
  const line2 = "But Make It";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Ambient background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-dark/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-dark/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-primary-light dark:text-primary-dark font-mono text-xs uppercase tracking-widest mb-8"
          >
            <span>✦ Bhubaneswar → Internet</span>
            <span className="w-[1px] h-4 bg-primary-light dark:bg-primary-dark animate-blink" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 tracking-tighter">
            <span className="block overflow-hidden">
              {line1.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {line2.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  className="inline-block mr-[0.2em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={itemVariants}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-[length:200%_auto] animate-gradient-flow"
              >
                Unforgettable.
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-[480px] mb-12 leading-relaxed"
          >
            We turn local businesses into brands people actually look up.
            No templates. No fluff. Just something that works.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-10 mb-16">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg hover:scale-105 transition-transform flex items-center group"
              >
                <span>Let&apos;s Build →</span>
              </Link>
            </MagneticButton>

            <Link
              href="/portfolio"
              className="relative py-2 text-lg font-bold group"
            >
              <span>See the work</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-3 text-xs font-mono text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest items-center"
          >
            <span>✦ 15+ brands live</span>
            <span className="opacity-40">·</span>
            <span>✦ MERN + Next.js</span>
            <span className="opacity-40">·</span>
            <span>✦ Ships in 2–4 weeks</span>
          </motion.div>
        </motion.div>

        {/* Mock Browser UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:block hidden"
        >
          <div className="rounded-2xl bg-[#0D0D14] border border-white/10 overflow-hidden shadow-2xl shadow-primary-dark/20">
            {/* Browser Top Bar */}
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-8 px-3 py-1 rounded bg-black/20 border border-white/5 text-[10px] text-white/40 font-mono text-center">
                pixorastudios.in/work
              </div>
            </div>
            {/* Browser Content */}
            <div className="aspect-[16/10] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-violet-900/40 to-rose-900/40 animate-gradient-bg" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-1/2 h-1/2 rounded-xl bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
                 </div>
              </div>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -inset-10 bg-primary-dark/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-text-muted-dark opacity-50" />
      </motion.div>
    </section>
  );
}
