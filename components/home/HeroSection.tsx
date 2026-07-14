"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  QrCode,
  Search,
  Star,
  Wifi,
  SignalHigh,
  BatteryFull,
  Palette,
  Smartphone,
  Zap,
  Ban,
  TrendingUp,
  Rocket,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const categories = ["Pizza", "Coffee", "Burger", "Desserts"];

const menuItems = [
  {
    name: "Margherita Pizza",
    desc: "Fresh tomatoes, mozzarella, basil",
    price: "₹249",
    veg: true,
    gradient: "from-red-200 to-orange-400",
  },
  {
    name: "Farmhouse Pizza",
    desc: "Fresh vegetables, olives, cheese",
    price: "₹299",
    veg: true,
    gradient: "from-orange-300 to-red-400",
  },
  {
    name: "Cold Brew Coffee",
    desc: "Smooth, bold & refreshing",
    price: "₹180",
    veg: true,
    gradient: "from-amber-200 to-yellow-400",
  },
  {
    name: "Classic Cheese Burger",
    desc: "Juicy patty, cheese, salad",
    price: "₹249",
    veg: false,
    gradient: "from-red-300 to-orange-500",
  },
];

const LAPTOP_SCREEN = {
  top: "13%",
  left: "13%",
  width: "73.5%",
  height: "70%",
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const laptopY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const laptopRotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const laptopScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.8], [1, 0]);

  const qrY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const qrOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white dark:bg-black"
    >
      {/* Subtle Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary-dark/10 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-secondary-dark/10 dark:bg-primary-dark/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
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
              <div className="w-1.5 h-1.5 rounded-full bg-primary-dark" />
              <div className="w-1.5 h-1.5 rounded-full bg-secondary-dark" />
            </div>
            <span className="text-text-muted-light dark:text-text-muted-dark font-mono text-[9px] font-bold uppercase tracking-[0.4em]">
              CUSTOM WEBSITE DEVELOPMENT • DIGITAL QR MENU • BHUBANESWAR
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-display font-bold leading-[1.1] mb-6 tracking-tight text-text-primary-light dark:text-text-primary-dark"
          >
            Websites That Turn <br />
            Visitors Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
              Customers.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base text-text-muted-light dark:text-text-muted-dark max-w-[460px] mb-8 leading-relaxed font-body"
          >
            We design premium websites and Digital QR Menu solutions for restaurants, cafés, clinics, spas, gyms, and local businesses in Bhubaneswar, Odisha and across India — built to attract customers, build trust, and grow your business.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
            <MagneticButton>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 transition-transform flex items-center group shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors flex items-center group"
            >
              <span>View Our Portfolio</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Minimal Inline Trust-Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 mt-10 text-text-muted-light dark:text-text-muted-dark font-mono text-[10px] font-bold uppercase tracking-wider"
          >
            <div className="flex items-center gap-1.5">
              <Palette className="w-[14px] h-[14px] text-primary-light dark:text-primary-dark shrink-0" />
              <span>Custom Design</span>
            </div>
            <span className="text-text-muted-light/30 dark:text-text-muted-dark/30">•</span>
            <div className="flex items-center gap-1.5">
              <Search className="w-[14px] h-[14px] text-primary-light dark:text-primary-dark shrink-0" />
              <span>SEO Optimized</span>
            </div>
            <span className="text-text-muted-light/30 dark:text-text-muted-dark/30">•</span>
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-[14px] h-[14px] text-primary-light dark:text-primary-dark shrink-0" />
              <span>Mobile First</span>
            </div>
            <span className="text-text-muted-light/30 dark:text-text-muted-dark/30">•</span>
            <div className="flex items-center gap-1.5">
              <Zap className="w-[14px] h-[14px] text-primary-light dark:text-primary-dark shrink-0" />
              <span>Fast Loading</span>
            </div>
            <span className="text-text-muted-light/30 dark:text-text-muted-dark/30">•</span>
            <div className="flex items-center gap-1.5">
              <Ban className="w-[14px] h-[14px] text-primary-light dark:text-primary-dark shrink-0" />
              <span>No Templates</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Visual - Laptop & Phone Composition (Responsive) */}
        <div className="relative h-[300px] sm:h-[420px] lg:h-[500px] w-full overflow-visible flex items-center justify-center lg:justify-end mt-12 lg:mt-0 z-10">
          <div className="absolute top-0 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0 h-[500px] w-[660px] scale-[0.45] min-[375px]:scale-[0.52] min-[420px]:scale-[0.6] sm:scale-[0.75] md:scale-[0.85] lg:scale-[0.68] xl:scale-[0.82] 2xl:scale-100 origin-top lg:origin-top-right">
            {/* Ambient glow behind the mockups */}
            <div className="absolute top-[15%] right-[15%] -z-10 w-[320px] h-[320px] rounded-full bg-primary-dark/10 dark:bg-indigo-500/10 blur-[100px] pointer-events-none" />

            {/* ---------- Laptop mockup (Taste House website inside the screen) ---------- */}
            <motion.div
              style={{
                y: laptopY,
                scale: laptopScale,
                opacity: laptopOpacity,
                rotateX: laptopRotateX,
                transformPerspective: 1000,
              }}
              className="absolute top-[40px] left-[20px] w-[580px] z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative w-full aspect-[1519/1036]">
                  {/* Styled Webpage mockup sitting inside the screen cutout */}
                  <div
                    className="absolute overflow-hidden rounded-[2px]"
                    style={{
                      top: LAPTOP_SCREEN.top,
                      left: LAPTOP_SCREEN.left,
                      width: LAPTOP_SCREEN.width,
                      height: LAPTOP_SCREEN.height,
                    }}
                  >
                    <video
                      className="w-full h-full object-cover bg-black"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src="/videos/hero-demo.mp4" type="video/mp4" />
                    </video>
                  </div>

                  {/* Bezel Overlay */}
                  <Image
                    src="/images/laptop.png"
                    alt="Laptop mockup frame"
                    fill
                    priority
                    className="pointer-events-none select-none object-contain"
                    sizes="580px"
                  />
                </div>
              </motion.div>

              {/* Three Badge Chips below laptop base */}
              <div className="absolute top-[420px] left-[18px] w-full grid grid-cols-3 gap-3">
                {/* Google Rating Chip */}
                <div className="glass px-3 py-2.5 rounded-xl border border-primary-light/10 dark:border-white/10 flex items-center gap-3 shadow-md">
                  <div className="shrink-0 bg-white/10 p-1 rounded-lg flex items-center justify-center">
                    <GoogleIcon />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="flex gap-0.5 text-amber-500 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-[10px] font-bold text-text-primary-light dark:text-text-primary-dark">5.0 Rating</p>
                    <p className="text-[8px] text-text-muted-light dark:text-text-muted-dark font-medium">On Google</p>
                  </div>
                </div>

                {/* Performance Score Chip */}
                <div className="glass px-3 py-2.5 rounded-xl border border-primary-light/10 dark:border-white/10 flex items-center gap-3 shadow-md">
                  <div className="shrink-0 bg-primary-light/10 dark:bg-primary-dark/10 p-2 rounded-lg flex items-center justify-center text-primary-light dark:text-primary-dark">
                    <Rocket className="w-4 h-4 text-primary-light dark:text-primary-dark" />
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-bold text-text-primary-light dark:text-text-primary-dark">98/100</p>
                    <p className="text-[8px] text-text-muted-light dark:text-text-muted-dark font-medium">Performance Score</p>
                  </div>
                </div>

                {/* SEO Ready Chip */}
                <div className="glass px-3 py-2.5 rounded-xl border border-primary-light/10 dark:border-white/10 flex items-center gap-3 shadow-md col-span-2">
                  <div className="shrink-0 bg-primary-light/10 dark:bg-primary-dark/10 p-2 rounded-lg flex items-center justify-center text-primary-light dark:text-primary-dark">
                    <Shield className="w-4 h-4 text-primary-light dark:text-primary-dark" />
                  </div>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] font-bold text-text-primary-light dark:text-text-primary-dark">SEO Ready</p>
                    <p className="text-[8px] text-text-muted-light dark:text-text-muted-dark font-medium">Structured Data & Schema</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ---------- Mobile mockup, overlapping the laptop's bottom-right corner ---------- */}
            <motion.div
              style={{ y: phoneY, rotate: phoneRotate, opacity: phoneOpacity }}
              className="absolute top-[190px] right-[20px] w-[200px] z-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  {/* Side buttons */}
                  <div className="absolute -left-[3px] top-20 w-[3px] h-5 bg-neutral-800 rounded-l-sm" />
                  <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-neutral-800 rounded-l-sm" />
                  <div className="absolute -right-[3px] top-24 w-[3px] h-11 bg-neutral-800 rounded-r-sm" />

                  <div className="relative w-[200px] h-[410px] bg-black rounded-[2.25rem] border-[8px] border-black shadow-[0_35px_70px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />

                    {/* Screen — intentionally fixed cream tone, matches QR menu demo */}
                    <div className="absolute inset-0 bg-[#FFFBF6] flex flex-col justify-between">
                      {/* Status bar */}
                      <div className="flex items-center justify-between px-3 pt-2 pb-1 text-[8px] font-semibold text-neutral-900 shrink-0">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <SignalHigh className="w-2.5 h-2.5" />
                          <Wifi className="w-2.5 h-2.5" />
                          <BatteryFull className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="px-2.5 pt-1 space-y-2 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-display font-bold text-[10px] shadow-md shadow-orange-500/30 shrink-0">
                            B
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <div className="flex items-center gap-1">
                              <h3 className="text-[9px] font-bold text-neutral-900 truncate">Your Cafe</h3>
                              <span className="px-1 py-0.5 rounded-full bg-green-100 text-green-600 text-[5px] font-bold uppercase tracking-wide shrink-0">
                                Open
                              </span>
                            </div>
                            <p className="text-[6.5px] text-neutral-400 truncate">Cafe • Snacks • Coffee</p>
                          </div>
                          <div className="flex items-center gap-0.5 px-1 py-0.5 rounded-full bg-orange-50 shrink-0">
                            <Star className="w-2.5 h-2.5 fill-orange-400 text-orange-400" />
                            <span className="text-[6.5px] font-bold text-neutral-700">4.8</span>
                          </div>
                        </div>

                        {/* Search bar */}
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-100 text-left">
                          <Search className="w-2.5 h-2.5 text-neutral-400" />
                          <span className="text-[7px] text-neutral-400">Search menu...</span>
                        </div>

                        {/* Category chips */}
                        <div className="flex gap-1 overflow-hidden">
                          {categories.map((cat, i) => (
                            <span
                              key={cat}
                              className={`shrink-0 px-2 py-0.5 rounded-full text-[6.5px] font-bold whitespace-nowrap ${i === 0
                                ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                                : "bg-neutral-100 text-neutral-500"
                                }`}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Auto-scrolling menu viewport */}
                      <div className="relative flex-1 overflow-hidden mt-2 px-2.5 pb-1">
                        <div className="absolute inset-x-2.5 top-0 h-4 bg-gradient-to-b from-[#FFFBF6] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-x-2.5 bottom-0 h-4 bg-gradient-to-t from-[#FFFBF6] to-transparent z-10 pointer-events-none" />

                        <motion.div
                          animate={{ y: ["0%", "-50%"] }}
                          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                          style={{ willChange: "transform" }}
                          className="flex flex-col"
                        >
                          {[...menuItems, ...menuItems].map((item, i) => (
                            <div
                              key={`${item.name}-${i}`}
                              className="flex items-center gap-1.5 p-1 rounded-lg bg-white shadow-sm shadow-neutral-200/60 border border-neutral-100 shrink-0 text-left mb-1.5"
                            >
                              <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${item.gradient} shrink-0`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                  <span
                                    className={`w-1.5 h-1.5 rounded-sm border flex items-center justify-center shrink-0 ${item.veg ? "border-green-500" : "border-red-500"
                                      }`}
                                  >
                                    <span className={`w-0.5 h-0.5 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`} />
                                  </span>
                                  <h4 className="text-[7px] font-bold text-neutral-900 truncate">{item.name}</h4>
                                </div>
                                <p className="text-[6px] text-neutral-400 truncate mt-0.5">{item.desc}</p>
                              </div>
                              <p className="text-[7px] font-extrabold text-neutral-900 shrink-0">{item.price}</p>
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      {/* View Cart Button */}
                      <div className="px-2.5 pb-2.5 pt-1.5 bg-[#FFFBF6] border-t border-neutral-100/50 shrink-0">
                        <button className="w-full py-1 rounded bg-amber-500 text-white font-bold text-[7.5px] shadow-sm shadow-amber-500/30">
                          View Cart (2)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR badge floating off the phone's top-right edge */}
              <motion.div
                style={{ y: qrY, opacity: qrOpacity }}
                className="absolute -right-6 top-[70px] glass p-2 rounded-2xl border border-primary-light/10 dark:border-white/10 shadow-2xl backdrop-blur-xl z-30 flex flex-col items-center gap-1.5"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="bg-white rounded-xl p-1 shadow-inner"
                >
                  <QrCode className="w-9 h-9 text-black" strokeWidth={1.8} />
                </motion.div>
                <span className="text-[7.5px] font-bold text-center leading-normal text-white">
                  Scan to View<br />Our Menu
                </span>
              </motion.div>
            </motion.div>

            {/* Floating Badge (More Customers) */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-[5px] left-[340px] z-30 glass px-4 py-2.5 rounded-2xl border border-primary-light/10 dark:border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[11px] font-bold text-text-primary-light dark:text-text-primary-dark">More Customers</p>
                <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">High Converting Websites</p>
              </div>
            </motion.div>


          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2 }}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-text-primary-light dark:text-text-primary-dark animate-bounce" />
      </motion.div>
    </section>
  );
}

