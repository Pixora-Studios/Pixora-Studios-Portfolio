"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Stethoscope,
  Coffee,
  UtensilsCrossed,
  Dumbbell,
  QrCode
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";

interface PortfolioCardProps {
  badgeLabel: string;
  Icon: React.ComponentType<{ className?: string }>;
  headlineLines: string[];
  ctaText: string;
  top: number;
  left: number;
  width: number;
  baseRotate: number;
  zIndex: number;
  delay: number;
  imageUrl: string;
}

function PortfolioCard({
  badgeLabel,
  Icon,
  headlineLines,
  ctaText,
  top,
  left,
  width,
  baseRotate,
  zIndex,
  delay,
  imageUrl,
}: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth 3D tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  // Glare position springs (map from -0.5..0.5 to percentage strings)
  const glareLeft = useSpring(useTransform(x, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareTop = useSpring(useTransform(y, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareOpacity = useSpring(useMotionValue(0), springConfig);

  // Hover scale & Z translation
  const liftY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(useMotionValue(1), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    // Normalized value between -0.5 and 0.5
    const mouseX = (event.clientX - rect.left) / w - 0.5;
    const mouseY = (event.clientY - rect.top) / h - 0.5;

    x.set(mouseX);
    y.set(mouseY);
    glareOpacity.set(0.4); // Subtle glare opacity on hover
    liftY.set(-10); // Lift card slightly up
    scale.set(1.04); // Scale up slightly on hover
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
    liftY.set(0);
    scale.set(1);
  };

  const glareBg = useMotionTemplate`radial-gradient(circle 120px at ${glareLeft} ${glareTop}, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30, rotate: baseRotate }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: baseRotate }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute select-none origin-center"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        zIndex: zIndex,
        perspective: "1000px",
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl border border-white/10 bg-[#0F172A]/90 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] cursor-pointer overflow-visible group"
        style={{
          rotateX,
          rotateY,
          y: liftY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Floating pill badge above the top-left corner */}
        <div
          className="absolute -top-3.5 -left-3 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-[#0F172A]/95 border border-white/15 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:border-indigo-500/50"
          style={{ transform: "translateZ(30px)" }}
        >
          <Icon className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[10px] font-mono font-bold text-white tracking-wider uppercase">
            {badgeLabel}
          </span>
        </div>

        {/* Mock Browser chrome header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 bg-white/[0.03] rounded-t-2xl">
          <div className="flex space-x-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] opacity-80" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] opacity-80" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] opacity-80" />
          </div>
          <div className="w-8" />
        </div>

        {/* Card Body - full-bleed photo filling the card body, aspect ratio ~4:3 */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-2xl">
          <img
            src={imageUrl}
            alt={badgeLabel}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Dark gradient scrim from the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

          {/* Glare overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay"
            style={{
              background: glareBg,
              opacity: glareOpacity,
            }}
          />

          {/* Overlaid content at the bottom */}
          <div
            className="absolute bottom-0 inset-x-0 p-4 flex flex-col items-start gap-2 z-20"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="flex flex-col">
              {headlineLines.map((line, idx) => (
                <span key={idx} className="text-white text-base font-bold leading-tight drop-shadow-sm font-display">
                  {line}
                </span>
              ))}
            </div>

            {/* Pill-shaped CTA button */}
            <span className="mt-1 px-3 py-1 text-[10px] font-bold text-white bg-indigo-600/90 border border-indigo-500/30 rounded-full shadow-md hover:bg-indigo-500/90 transition-colors duration-200">
              {ctaText}
            </span>
          </div>
        </div>
      </motion.div>
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

  const cardsData = [
    {
      badgeLabel: "Dental Clinic",
      Icon: Stethoscope,
      headlineLines: ["Your Smile,", "Our Priority"],
      ctaText: "Book Now",
      top: 0,
      left: 190,
      width: 250,
      baseRotate: -4,
      zIndex: 10,
      delay: 0.1,
      imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    },
    {
      badgeLabel: "Cafe Website",
      Icon: Coffee,
      headlineLines: ["Good Coffee,", "Great Moments"],
      ctaText: "Our Specials",
      top: 95,
      left: 460,
      width: 250,
      baseRotate: 5,
      zIndex: 35,
      delay: 0.25,
      imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    },
    {
      badgeLabel: "Restaurant Website",
      Icon: UtensilsCrossed,
      headlineLines: ["Good Food,", "Great Taste"],
      ctaText: "Order Now",
      top: 240,
      left: 0,
      width: 250,
      baseRotate: -3,
      zIndex: 20,
      delay: 0.4,
      imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    },
    {
      badgeLabel: "Gym & Fitness",
      Icon: Dumbbell,
      headlineLines: ["Stronger", "Every Day."],
      ctaText: "Join Now",
      top: 325,
      left: 440,
      width: 250,
      baseRotate: 4,
      zIndex: 45,
      delay: 0.55,
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    },
    {
      badgeLabel: "QR Menu System",
      Icon: QrCode,
      headlineLines: ["Scan. Order.", "Enjoy."],
      ctaText: "Try Demo",
      top: 475,
      left: 175,
      width: 230,
      baseRotate: -2,
      zIndex: 55,
      delay: 0.7,
      imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    },
  ];

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

        {/* Right Side 3D Visual Cluster - Top Aligned, Fanned 3D Tilt Layout */}
        <div
          className="relative hidden lg:block h-[620px] w-[720px] lg:scale-[0.62] xl:scale-[0.78] 2xl:scale-[0.92] origin-top transition-transform duration-500 lg:self-start lg:-mt-12"
          style={{ perspective: "1500px" }}
        >
          {cardsData.map((card, idx) => (
            <PortfolioCard key={idx} {...card} />
          ))}
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
