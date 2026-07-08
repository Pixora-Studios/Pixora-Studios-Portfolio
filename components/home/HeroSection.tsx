"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, MoreHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

interface CardConfig {
  id: string;
  label: string;
  heading: string;
  image: string;
  theme: "light" | "dark";
  top: string;
  left: string;
  width: string;
  rotate: number;
  glowColor: string;
  exitX: number;
  exitY: number;
  exitScale: number;
  scrollRange: [number, number];
}

function FloatingCard({
  card,
  index,
  scrollYProgress,
  shouldReduceMotion
}: {
  card: CardConfig;
  index: number;
  scrollYProgress: any;
  shouldReduceMotion: boolean | null;
}) {
  const xExit = useTransform(scrollYProgress, card.scrollRange, [0, card.exitX]);
  const yExit = useTransform(scrollYProgress, card.scrollRange, [0, card.exitY]);
  const scaleExit = useTransform(scrollYProgress, card.scrollRange, [1, card.exitScale]);
  const opacityExit = useTransform(scrollYProgress, card.scrollRange, [1, 0]);
  const rotateExit = useTransform(scrollYProgress, card.scrollRange, [card.rotate, card.id === "dental" ? 0 : card.rotate]);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 60, rotate: card.rotate - 5, scale: 0.85 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotate: card.rotate, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: 0.4 + index * 0.12,
      }}
      style={{
        position: "absolute",
        top: card.top,
        left: card.left,
        width: card.width,
        x: shouldReduceMotion ? 0 : xExit,
        y: shouldReduceMotion ? 0 : yExit,
        scale: shouldReduceMotion ? 1 : scaleExit,
        rotate: shouldReduceMotion ? card.rotate : rotateExit,
        opacity: opacityExit,
        zIndex: 10 + index,
        willChange: "transform",
      }}
      className="group"
    >
      {/* Static Deep Glow (Performance Optimized: no filter animations) */}
      <div
        className="absolute inset-0 -z-10 blur-[70px] opacity-25 rounded-full pointer-events-none"
        style={{ backgroundColor: card.glowColor }}
      />

      {/* Idle Float Wrapper */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4.5 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
        className="relative"
        style={{ willChange: "transform" }}
      >
        {/* Badge */}
        <div className="absolute -top-3 -left-2 z-20 px-2.5 py-1 rounded-full bg-surface-dark border border-white/10 shadow-lg flex items-center space-x-1 whitespace-nowrap">
          <span className="text-[10px] font-mono font-bold text-primary-dark">
            {card.label}
          </span>
        </div>

        {/* Browser Mockup */}
        <div
          className={cn(
            "rounded-[16px] overflow-hidden border shadow-xl transition-all duration-500",
            card.theme === "dark"
              ? "bg-[#0D0D14] border-white/10"
              : "bg-white border-black/10",
            "group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* Top Bar */}
          <div className={cn(
            "flex items-center justify-between px-3 py-1.5 border-b",
            card.theme === "dark" ? "border-white/5 bg-white/5" : "border-black/5 bg-black/5"
          )}>
            <div className="flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
              <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
              <div className="w-2 h-2 rounded-full bg-[#28C840]" />
            </div>
            {index % 2 === 0 && (
              <MoreHorizontal className={cn(
                "w-3 h-3",
                card.theme === "dark" ? "text-white/20" : "text-black/20"
              )} />
            )}
          </div>

          {/* Content Image */}
          <div className={cn(
            "relative",
            card.id === "qr-menu" ? "aspect-[3/4]" : "aspect-[4/3]"
          )}>
            <Image
              src={card.image}
              alt={card.heading}
              fill
              sizes="(max-width: 1280px) 100vw, 300px"
              className="object-cover"
              priority={index < 2}
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-2.5 left-3 right-3">
              <p className="text-[9px] font-mono text-white/50 mb-0.5 uppercase tracking-wider">
                Live Preview
              </p>
              <h3 className="text-[13px] font-bold text-white leading-[1.15]">
                {card.heading}
              </h3>
              {index === 1 && (
                <p className="text-[9px] text-white/40 mt-1">Our Specials →</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldReduceMotion]);

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

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const cards: CardConfig[] = [
    {
      id: "dental",
      label: "✦ Dental Clinic",
      heading: "Healthy Smiles, Every Day",
      image: "/mock/dental.jpg",
      theme: "dark",
      top: "5%",
      left: "2%",
      width: "230px",
      rotate: -5,
      glowColor: "rgba(108, 99, 255, 0.3)", // primary-dark
      exitX: -50,
      exitY: -200,
      exitScale: 1.1,
      scrollRange: [0, 0.25],
    },
    {
      id: "cafe",
      label: "✦ Cafe Website",
      heading: "Good Coffee, Great Moments",
      image: "/mock/cafe.jpg",
      theme: "light",
      top: "10%",
      left: "54%",
      width: "225px",
      rotate: 4,
      glowColor: "rgba(254, 188, 46, 0.3)", // warm amber
      exitX: 200,
      exitY: -50,
      exitScale: 1,
      scrollRange: [0.15, 0.4],
    },
    {
      id: "restaurant",
      label: "✦ Restaurant",
      heading: "Taste the Tradition",
      image: "/mock/restaurant.jpg",
      theme: "dark",
      top: "34%",
      left: "0%",
      width: "235px",
      rotate: -3,
      glowColor: "rgba(255, 95, 87, 0.3)", // warm red/amber
      exitX: -200,
      exitY: 50,
      exitScale: 1,
      scrollRange: [0.3, 0.55],
    },
    {
      id: "gym",
      label: "✦ Fitness Club",
      heading: "Push Your Limits",
      image: "/mock/gym.jpg",
      theme: "dark",
      top: "39%",
      left: "58%",
      width: "220px",
      rotate: 6,
      glowColor: "rgba(167, 139, 250, 0.3)", // secondary-dark
      exitX: 200,
      exitY: 100,
      exitScale: 1,
      scrollRange: [0.45, 0.7],
    },
    {
      id: "qr-menu",
      label: "✦ Digital QR Menu",
      heading: "Scan. Order. Enjoy.",
      image: "/mock/qr-phone.jpg",
      theme: "dark",
      top: "62%",
      left: "26%",
      width: "175px",
      rotate: 2,
      glowColor: "rgba(108, 99, 255, 0.4)", // primary-dark
      exitX: 0,
      exitY: 80,
      exitScale: 1.2,
      scrollRange: [0.6, 0.85],
    },
  ];

  return (
    <section
      ref={targetRef}
      className="relative min-h-screen flex items-center pt-20 overflow-x-hidden bg-background-light dark:bg-background-dark"
    >
      <motion.canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0]) }}
      />
      {/* Ambient background effects — decorative only */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ opacity: backgroundOpacity }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-dark/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-dark/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </motion.div>

      <div className="container mx-auto px-6 grid xl:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          className="flex flex-col items-start w-full xl:col-span-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-primary-light dark:text-primary-dark font-mono text-xs uppercase tracking-widest mb-6"
          >
            <span>✦ Bhubaneswar → Internet</span>
            <span aria-hidden="true" className="w-[1px] h-4 bg-primary-light dark:bg-primary-dark animate-blink" />
          </motion.div>

          <h1 className="text-[clamp(2.25rem,4.5vw,4.5rem)] font-display font-bold leading-[0.9] mb-6 tracking-tighter">
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

          {/* AEO: plain-language direct-answer line, present in initial HTML for AI/search crawlers */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark max-w-full xl:max-w-[400px] mb-10 leading-relaxed"
          >
            Pixora Studios designs and builds custom websites and Digital QR
            Menu systems for local businesses in Bhubaneswar, Odisha —
            cafes, clinics, restaurants, salons, and gyms. No templates.
            No fluff. Just something that works.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-8 mb-12">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-base hover:scale-105 transition-transform flex items-center group"
              >
                <span>Let&apos;s Build →</span>
              </Link>
            </MagneticButton>

            <Link
              href="/portfolio"
              className="relative py-2 text-base font-bold group"
            >
              <span>See our web design &amp; QR menu work</span>
              <span aria-hidden="true" className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-light dark:bg-primary-dark transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-x-3 gap-y-2 text-xs font-mono text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest items-center"
          >
            <span>✦ 15+ brands live</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>✦ MERN + Next.js</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>✦ Ships in 2–4 weeks</span>
          </motion.div>
        </motion.div>

        {/* Website Cluster Column */}
        <div className="relative xl:block hidden h-[700px] w-full self-center">
          {/* Decorative Background Elements */}
          <motion.svg
            viewBox="0 0 800 700"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0.2, 0]) }}
          >
            <path
              d="M 50,150 C 150,50 350,50 450,200 S 250,500 400,600 S 700,550 750,400"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-text-muted-dark"
            />
            <circle cx="150" cy="80" r="2" className="fill-primary-dark animate-pulse" />
            <circle cx="450" cy="180" r="1.5" className="fill-secondary-dark animate-pulse delay-300" />
            <circle cx="550" cy="350" r="2" className="fill-indigo-400 animate-pulse delay-700" />
          </motion.svg>

          {cards.map((card, index) => (
            <FloatingCard
              key={card.id}
              card={card}
              index={index}
              scrollYProgress={scrollYProgress}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-text-muted-dark opacity-50" />
      </motion.div>
    </section>
  );
}
