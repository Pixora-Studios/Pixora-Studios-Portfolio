"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

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

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-x-hidden bg-background-light dark:bg-background-dark">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
      />
      {/* Ambient background effects — decorative only */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-dark/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-dark/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

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

        {/* Mock Browser UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative xl:block hidden max-w-[540px] justify-self-center"
        >
          <div className="rounded-2xl bg-[#0D0D14] border border-white/10 overflow-hidden shadow-2xl shadow-primary-dark/20">
            {/* Browser Top Bar */}
            <div className="flex items-center px-3 py-2 border-b border-white/5 bg-white/5">
              <div aria-hidden="true" className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 mx-8 px-2 py-1 rounded bg-black/20 border border-white/5 text-[10px] text-white/40 font-mono text-center">
                pixorastudios.com/services
              </div>
            </div>
            {/* Browser Content */}
            <div className="aspect-[16/10] relative overflow-hidden group">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                aria-label="Preview reel of a Pixora Studios website in the browser"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                Featured Reel
              </div>
            </div>
          </div>
          {/* Decorative Glow */}
          <div aria-hidden="true" className="absolute -inset-10 bg-primary-dark/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
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
