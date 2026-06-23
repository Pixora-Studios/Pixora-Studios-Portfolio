"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        ctx!.fillStyle = "rgba(108, 99, 255, 0.2)";
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const headline = "We Build Websites That Bring Customers.";
  const words = headline.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-dark/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-dark/40 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-primary-light dark:text-primary-dark font-mono text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            <span>Bhubaneswar&apos;s Trusted Web Agency</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "inline-block mr-[0.2em]",
                  word === "Customers." && "text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary"
                )}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mb-12"
          >
            Helping Clinics, Cafes, Restaurants, Gyms, Salons & Local Brands Build
            a Professional Online Presence That Actually Converts.
          </motion.p>

          <div className="flex flex-wrap gap-6 items-center">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg hover:scale-105 transition-transform inline-block cta-button"
              >
                Book Free Consultation
              </Link>
            </MagneticButton>
            <Link
              href="/portfolio"
              className="group flex items-center space-x-2 text-lg font-bold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-sm text-text-muted-light dark:text-text-muted-dark flex items-center space-x-2"
          >
            <span>🔒 No contracts. No hidden fees. Real results.</span>
          </motion.p>
        </div>

        <div className="md:col-span-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 perspective-1000"
          >
            <div className="bg-surface-light dark:bg-surface-dark p-2 rounded-2xl border border-border-light dark:border-border-dark shadow-2xl shadow-primary-dark/20 animate-float">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
                {/* Mockup Screen Content */}
                <div className="absolute inset-0 flex items-center justify-center text-text-muted-dark italic">
                  Project Showcases Loading...
                </div>
              </div>
            </div>
          </motion.div>
          <div className="absolute -inset-4 bg-primary-dark/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-text-muted-dark" />
      </motion.div>
    </section>
  );
}
