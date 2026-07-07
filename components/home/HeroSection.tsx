"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { useScrollFrameSequence } from "@/hooks/useScrollFrameSequence";

const TOTAL_FRAMES = 180;
const PATH = "/images/hero-images";
const FILE_NAME_PATTERN = (index: number) =>
  `ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const motionPreference = useReducedMotion();
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (motionPreference) {
      setShouldReduceMotion(true);
    }
  }, [motionPreference]);

  // Prevent pinning logic when reduced motion is preferred
  const containerHeight = !mounted || !shouldReduceMotion ? 'h-[300vh]' : 'h-auto';
  const stickyClass = !mounted || !shouldReduceMotion ? 'sticky' : 'relative';

  useScrollFrameSequence({
    canvasRef,
    containerRef,
    totalFrames: TOTAL_FRAMES,
    path: PATH,
    fileNamePattern: FILE_NAME_PATTERN,
    disabled: shouldReduceMotion,
  });

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
    <div
      ref={containerRef}
      className={`relative ${containerHeight}`}
    >
      <div className={`${stickyClass} top-0 h-screen w-full overflow-hidden flex items-end bg-background-dark pb-24 md:pb-32`}>
        {/* Layer 0: Canvas Background */}
        {mounted && !shouldReduceMotion ? (
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${PATH}/${FILE_NAME_PATTERN(180)})` }}
          />
        )}

        {/* Layer 1: Dark Gradient Overlay */}
        {/* Stronger bottom-up gradient that fades out by the midpoint to ensure text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-[5]" />

        {/* Subtle left-to-right gradient to anchor the text content */}
        <div className="absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-background-dark/40 to-transparent z-[5]" />

        {/* Layer 2: Content */}
        <div className="container relative mx-auto px-6 z-10">
          <motion.div
            className="flex flex-col items-start w-full max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 text-primary-dark font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4 md:mb-6"
            >
              <span>✦ Bhubaneswar → Internet</span>
              <span aria-hidden="true" className="w-[1px] h-3 md:h-4 bg-primary-dark animate-blink" />
            </motion.div>

            <h1 className="text-[clamp(2rem,7vw,4.5rem)] font-display font-bold leading-[0.95] mb-4 md:mb-6 tracking-tighter text-white">
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
              className="text-sm md:text-lg text-text-muted-dark max-w-full md:max-w-xl mb-8 md:mb-10 leading-relaxed"
            >
              Pixora Studios designs and builds custom websites and Digital QR
              Menu systems for local businesses in Bhubaneswar, Odisha —
              cafes, clinics, restaurants, salons, and gyms. No templates.
              No fluff. Just something that works.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 md:mb-12">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-primary text-white font-bold text-sm md:text-base hover:scale-105 transition-transform flex items-center group"
                >
                  <span className="font-semibold">Let&apos;s Build</span>
                  <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>

              <Link
                href="/portfolio"
                className="relative py-2 text-sm md:text-base font-bold text-white group"
              >
                <span>See our web design &amp; QR menu work</span>
                <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-dark transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-x-3 gap-y-2 text-[10px] md:text-xs font-mono text-text-muted-dark uppercase tracking-widest items-center"
            >
              <span>✦ 15+ brands live</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>✦ MERN + Next.js</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>✦ Ships in 2–4 weeks</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-text-muted-dark opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
