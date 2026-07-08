"use client";

import { motion } from "framer-motion";
import { ChevronDown, Monitor, Smartphone, Layout, MousePointer2, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

interface VisualCardProps {
  className?: string;
  gradient: string;
  title: string;
  icon: React.ElementType;
  delay: number;
  rotation: { x: number; y: number; z: number };
}

function VisualCard({ gradient, title, icon: Icon, delay, rotation, className }: VisualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 50 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        rotateZ: rotation.z,
      }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        translateZ: 60,
        rotateX: rotation.x + 5,
        rotateY: rotation.y + 5,
        transition: { duration: 0.4 }
      }}
      className={cn(
        "absolute rounded-2xl overflow-hidden border border-white/10 bg-[#0F0F16]/80 backdrop-blur-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glassy Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Mock Browser Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-amber-500/40" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
        </div>
        <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">{title}</div>
        <div className="w-8" />
      </div>

      {/* Content Area with Gradient */}
      <div className={cn("relative aspect-[16/10] w-full overflow-hidden", gradient)}>
        {/* Animated Background Blob inside card */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 blur-[60px] rounded-full"
        />

        {/* Abstract UI Elements with Depth */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between" style={{ transform: "translateZ(50px)" }}>
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              <div className="w-40 h-4 bg-white/20 rounded-full" />
              <div className="w-24 h-2.5 bg-white/10 rounded-full" />
            </div>
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl">
              <Icon className="w-6 h-6 text-white/60" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group/item">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
                  <div className="w-full h-1.5 bg-white/20 rounded-full" />
                  <div className="w-2/3 h-1.5 bg-white/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="w-32 h-10 bg-white/10 rounded-full border border-white/10 flex items-center px-4">
              <div className="w-full h-1.5 bg-white/20 rounded-full" />
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#1A1A24] backdrop-blur-md" />
              ))}
            </div>
          </div>
        </div>

        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-60 pointer-events-none" />
      </div>

      {/* Edge Highlight */}
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </motion.div>
  );
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-[#020204]">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary-dark/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]" />

        {/* CSS Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-start z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 text-primary-dark font-mono text-[12px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-primary-dark" />
              <div className="w-2 h-2 rounded-full bg-primary-dark/40" />
              <div className="w-2 h-2 rounded-full bg-primary-dark/20" />
            </div>
            <span>Pixora Studios • {new Date().getFullYear()}</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3rem,7vw,6.5rem)] font-display font-bold leading-[0.9] mb-10 tracking-[-0.05em] text-white"
          >
            Your Business, <br />
            But Make It <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-indigo-400 to-blue-500 bg-[length:200%_auto] animate-gradient-flow">
              Unforgettable.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted-dark max-w-[540px] mb-12 leading-relaxed font-body"
          >
            We blend artistic vision with technical excellence to build
            digital products that redefine what&apos;s possible for
            forward-thinking brands.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 mb-16">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-10 py-5 rounded-full bg-primary-dark text-white font-bold text-lg hover:shadow-[0_20px_40px_-10px_rgba(108,99,255,0.5)] transition-all flex items-center group overflow-hidden relative"
              >
                <span className="relative z-10">Get Started Now</span>
                <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </MagneticButton>

            <Link
              href="/portfolio"
              className="text-white font-semibold text-lg hover:text-primary-dark transition-colors flex items-center group"
            >
              <span>View Our Work</span>
              <div className="ml-3 w-8 h-[2px] bg-white group-hover:w-12 group-hover:bg-primary-dark transition-all duration-300" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-12"
          >
            {[
              { label: "Vibe", value: "Modern" },
              { label: "Build", value: "Custom" },
              { label: "Focus", value: "Conversion" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-text-muted-dark uppercase tracking-widest">{stat.label}</span>
                <span className="text-base font-bold text-white/90">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side (3D Depth Cluster) */}
        <div className="relative hidden lg:block h-[1000px] w-full" style={{ perspective: "3000px", transformStyle: "preserve-3d" }}>
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 -z-10 pointer-events-none overflow-visible">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
                x: [0, 40, 0],
                y: [0, -40, 0]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-dark/10 rounded-full blur-[140px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
                x: [0, -50, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[120px]"
            />

            {/* Ambient SVG Grid Connectors */}
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 500 1000" fill="none">
              <motion.path
                d="M 400 50 Q 100 250 400 500 T 100 950"
                stroke="url(#hero-line-gradient)"
                strokeWidth="1"
                strokeDasharray="12 16"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary-dark)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--primary-dark)" stopOpacity="0.4" />
                  <stop offset="80%" stopColor="var(--primary-dark)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--primary-dark)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Card 1: Top Right - Shifted further right */}
          <VisualCard
            title="Brand Experience"
            icon={Layout}
            gradient="bg-gradient-to-br from-indigo-600/30 via-blue-600/30 to-indigo-900/40"
            delay={0.4}
            rotation={{ x: 12, y: -20, z: 2 }}
            className="w-[420px] top-[0%] -right-[5%] z-10"
          />

          {/* Card 2: Center Left - Shifted further left and slightly down to avoid overlap */}
          <VisualCard
            title="Digital Ecosystem"
            icon={Monitor}
            gradient="bg-gradient-to-br from-violet-600/30 via-fuchsia-600/30 to-purple-900/40"
            delay={0.6}
            rotation={{ x: 8, y: -25, z: -4 }}
            className="w-[420px] top-[35%] -left-[10%] z-20"
          />

          {/* Card 3: Bottom Right - Shifted further right and down */}
          <VisualCard
            title="Conversion Engine"
            icon={Smartphone}
            gradient="bg-gradient-to-br from-emerald-500/30 via-teal-600/30 to-blue-900/40"
            delay={0.8}
            rotation={{ x: 15, y: -18, z: 6 }}
            className="w-[420px] top-[70%] -right-[5%] z-30"
          />

          {/* Floating Performance Badges - Strategically placed to fill gaps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -15, 0]
            }}
            transition={{
              scale: { delay: 1.2, type: "spring", stiffness: 200 },
              opacity: { delay: 1.2 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-[20%] left-[20%] px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center space-x-3 z-40 shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[9px] font-bold text-white/60 uppercase tracking-[0.25em]">Response Time: 12ms</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, 15, 0]
            }}
            transition={{
              scale: { delay: 1.5, type: "spring", stiffness: 200 },
              opacity: { delay: 1.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="absolute bottom-[35%] right-[20%] px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center space-x-3 z-40 shadow-2xl"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-primary-dark" />
            <span className="text-[9px] font-bold text-white/60 uppercase tracking-[0.25em]">Accessibility: 100%</span>
          </motion.div>

          {/* Decorative Cursor */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 100 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [100, 250, 150, 50],
              y: [150, 450, 350, 250]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 0.9, 1]
            }}
            className="absolute z-50 pointer-events-none"
          >
            <MousePointer2 className="w-5 h-5 text-white fill-white/20 drop-shadow-lg" />
            <div className="ml-4 -mt-1 px-3 py-1.5 bg-primary-dark/90 backdrop-blur-md text-white text-[8px] font-bold rounded-lg shadow-2xl whitespace-nowrap border border-white/20 uppercase tracking-widest">
              Fluid Motion
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
