"use client";

import { motion } from "framer-motion";
import { ChevronDown, MousePointer2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

interface VisualCardProps {
  className?: string;
  gradient: string;
  title: string;
  delay: number;
  rotation: { x: number; y: number; z: number };
  translate: { x: number; y: number; z: number };
}

function VisualCard({ gradient, title, delay, rotation, translate, className }: VisualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: translate.x, y: translate.y + 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: translate.x,
        y: translate.y,
        rotateX: rotation.x,
        rotateY: rotation.y,
        rotateZ: rotation.z,
      }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        z: translate.z + 50,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "absolute rounded-xl overflow-hidden border border-white/10 bg-[#0F172A]/80 backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] group",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        z: translate.z,
      }}
    >
      {/* Mock Browser Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.03]">
        <div className="flex space-x-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[8px] font-mono text-white/30 tracking-widest uppercase">{title}</div>
        <div className="w-8" />
      </div>

      {/* Content Area */}
      <div className={cn("relative aspect-[16/10] w-full overflow-hidden p-4", gradient)}>
        <div className="flex flex-col h-full space-y-3" style={{ transform: "translateZ(15px)" }}>
          <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden">
             <div className="absolute top-3 left-3 space-y-1.5">
                <div className="w-20 h-2 bg-white/20 rounded-full" />
                <div className="w-12 h-1.5 bg-white/10 rounded-full" />
             </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 bg-white/5 rounded-md border border-white/5" />
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="w-16 h-1.5 bg-white/10 rounded-full" />
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-slate-800 border border-white/10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative max-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Subtle Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-primary-dark/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          className="flex flex-col items-start z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="flex space-x-1">
               <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
               <div className="w-1.5 h-1.5 rounded-full bg-primary-dark" />
            </div>
            <span className="text-white/30 font-mono text-[9px] font-bold uppercase tracking-[0.4em]">
              Pixora Studios • {currentYear}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-display font-bold leading-[1.1] mb-6 tracking-tight text-white"
          >
            Your Business, <br />
            But Make It <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Unforgettable.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base text-white/40 max-w-[440px] mb-8 leading-relaxed font-body"
          >
            Pixora Studios designs and builds custom websites and Digital QR Menu systems for local businesses in Bhubaneswar, Odisha. Cafes, clinics, restaurants, salons, and gyms. No templates. No fluff. Just something that works.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all flex items-center group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <Link
              href="/portfolio"
              className="text-white font-semibold text-sm flex items-center group relative py-1"
            >
              <span>View Our Work</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side 3D Visual Cluster - Compact & Non-overlapping */}
        <div className="relative hidden lg:block h-[600px] w-full lg:scale-[0.7] xl:scale-[0.9] 2xl:scale-100 origin-center transition-transform duration-500" style={{ perspective: "2000px" }}>

          {/* Top Right */}
          <VisualCard
            title="System Architecture"
            gradient="bg-gradient-to-br from-slate-900 to-indigo-950"
            delay={0.4}
            rotation={{ x: 15, y: -25, z: 5 }}
            translate={{ x: 140, y: -180, z: -100 }}
            className="w-[280px] z-10"
          />

          {/* Top Left */}
          <VisualCard
            title="Interface Design"
            gradient="bg-gradient-to-br from-indigo-950 to-slate-900"
            delay={0.3}
            rotation={{ x: 15, y: -25, z: 5 }}
            translate={{ x: -160, y: -60, z: -50 }}
            className="w-[280px] z-20"
          />

          {/* Center Right */}
          <VisualCard
            title="User Experience"
            gradient="bg-gradient-to-br from-slate-900 to-indigo-900"
            delay={0.2}
            rotation={{ x: 15, y: -25, z: 5 }}
            translate={{ x: 140, y: 100, z: 50 }}
            className="w-[280px] z-30"
          />

          {/* Bottom Left */}
          <VisualCard
            title="Brand Experience"
            gradient="bg-gradient-to-br from-indigo-900 to-slate-950"
            delay={0.1}
            rotation={{ x: 15, y: -25, z: 5 }}
            translate={{ x: -160, y: 220, z: 150 }}
            className="w-[280px] z-40"
          />

          {/* Interactive Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-[15%] left-[0%] z-50 px-3 py-1.5 bg-indigo-600 rounded-lg shadow-lg border border-white/10 flex items-center gap-2"
          >
             <MousePointer2 className="w-3.5 h-3.5 text-white fill-white" />
             <span className="text-white font-mono text-[8px] font-bold uppercase tracking-wider">Fluid Motion</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
