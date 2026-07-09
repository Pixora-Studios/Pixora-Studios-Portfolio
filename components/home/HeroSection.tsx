"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
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
  defaultRotateX: number;
  defaultRotateY: number;
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
  defaultRotateX,
  defaultRotateY,
  zIndex,
  delay,
  imageUrl,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalize coordinates from -0.5 to 0.5
    const widthVal = rect.width;
    const heightVal = rect.height;
    const mouseX = (e.clientX - rect.left) / widthVal - 0.5;
    const mouseY = (e.clientY - rect.top) / heightVal - 0.5;

    setMousePos({ x: mouseX, y: mouseY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const springTransition = {
    type: "spring",
    stiffness: 150,
    damping: 20,
    mass: 0.6,
  };

  // Glare tracking template (using mousePos when hovered)
  const glareBg = `radial-gradient(circle 150px at ${(mousePos.x + 0.5) * 100}% ${(mousePos.y + 0.5) * 100}%, rgba(255, 255, 255, 0.22) 0%, transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute select-none"
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        zIndex: isHovered ? 99 : zIndex,
        perspective: "1500px",
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#1E293B] to-[#020617] backdrop-blur-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] cursor-pointer overflow-visible group"
        animate={{
          rotateX: isHovered ? -mousePos.y * 24 : defaultRotateX,
          rotateY: isHovered ? mousePos.x * 24 : defaultRotateY,
          rotateZ: isHovered ? 0 : baseRotate,
          y: isHovered ? -15 : 0,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={springTransition}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Floating pill badge above the top-left corner */}
        <div
          className="absolute -top-3.5 -left-3.5 z-50 flex items-center gap-1.5 px-3 py-1.5 bg-[#0A0A0F]/90 border border-white/15 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 group-hover:border-indigo-500/50"
          style={{ transform: "translateZ(30px)" }}
        >
          <Icon className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-[10px] font-mono font-bold text-white tracking-wider uppercase">
            {badgeLabel}
          </span>
        </div>

        {/* Mock Browser chrome header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-black/40 rounded-t-2xl">
          <div className="flex space-x-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56] shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.5)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.5)]" />
          </div>
          <div className="text-[9px] font-mono font-bold tracking-widest text-white/40 uppercase">
            {badgeLabel}
          </div>
          <div className="w-8" />
        </div>

        {/* Card Body - full-bleed photo filling the card body, aspect ratio ~4:3 */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-b-2xl">
          {/* Subtle glare/highlight overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              background: glareBg,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt={badgeLabel}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Dark gradient scrim from the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

          {/* Overlaid content at the bottom */}
          <div
            className="absolute bottom-0 inset-x-0 p-4 flex flex-col items-start gap-2.5 z-20"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="flex flex-col">
              {headlineLines.map((line, idx) => (
                <span key={idx} className="text-white text-[15px] font-bold leading-tight drop-shadow-md font-display">
                  {line}
                </span>
              ))}
            </div>

            {/* Pill-shaped CTA button with yellow hover/gold touch */}
            <span className="mt-1 px-3.5 py-1 text-[10px] font-bold text-white bg-indigo-600 border border-indigo-500/40 rounded-full shadow-lg group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-yellow-400 transition-all duration-300">
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
      defaultRotateX: 8,
      defaultRotateY: 10,
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
      defaultRotateX: 6,
      defaultRotateY: -12,
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
      defaultRotateX: -4,
      defaultRotateY: 12,
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
      defaultRotateX: -6,
      defaultRotateY: -10,
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
      defaultRotateX: -10,
      defaultRotateY: 5,
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
        <div className="relative hidden lg:block h-[620px] w-full lg:self-start lg:-mt-12 overflow-visible">
          <div
            className="absolute top-0 right-0 h-[620px] w-[720px] lg:scale-[0.62] xl:scale-[0.78] 2xl:scale-[0.92] origin-top-right transition-transform duration-500"
            style={{ perspective: "1500px" }}
          >
            {/* Decorative background dashed SVG connector path and glowing dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" viewBox="0 0 720 620" fill="none">
              <path
                d="M 190 100 Q 300 200 460 200 T 175 520"
                stroke="rgba(99, 102, 241, 0.3)"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
              />
              {/* Glowing dots along the path */}
              <circle cx="190" cy="100" r="4" fill="#818CF8" className="animate-ping" />
              <circle cx="190" cy="100" r="3" fill="#818CF8" />
              <circle cx="460" cy="200" r="4" fill="#818CF8" className="animate-ping" style={{ animationDelay: "1s" }} />
              <circle cx="460" cy="200" r="3" fill="#818CF8" />
              <circle cx="175" cy="520" r="4" fill="#818CF8" className="animate-ping" style={{ animationDelay: "2s" }} />
              <circle cx="175" cy="520" r="3" fill="#818CF8" />
            </svg>

            {/* Ambient decorative pulsing blobs */}
            <div className="absolute top-[20%] left-[30%] -z-10 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse pointer-events-none" style={{ animationDuration: "8s" }} />
            <div className="absolute bottom-[20%] right-[20%] -z-10 w-[250px] h-[250px] rounded-full bg-indigo-500/5 blur-[80px] animate-pulse pointer-events-none" style={{ animationDuration: "12s" }} />

            {cardsData.map((card, idx) => (
              <PortfolioCard key={idx} {...card} />
            ))}
          </div>
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
