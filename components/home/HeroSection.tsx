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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MagneticButton } from "@/components/shared/MagneticButton";

// Same category / menu data pattern as QRHero.tsx — trimmed for the smaller
// hero phone. Swap for real client data whenever.
const categories = ["Pizza", "Coffee", "Burger", "Desserts"];

const menuItems = [
  {
    name: "Farmhouse Pizza",
    desc: "Fresh vegetables with mozzarella",
    price: "₹299",
    veg: true,
    gradient: "from-orange-300 to-red-400",
  },
  {
    name: "Cold Brew Coffee",
    desc: "Smooth, bold, slow-steeped 18 hrs",
    price: "₹180",
    veg: true,
    gradient: "from-amber-200 to-yellow-400",
  },
  {
    name: "Classic Cheese Burger",
    desc: "Grilled patty, cheddar, house sauce",
    price: "₹249",
    veg: false,
    gradient: "from-red-300 to-orange-500",
  },
  {
    name: "Belgian Waffle",
    desc: "Maple syrup, vanilla ice cream",
    price: "₹220",
    veg: true,
    gradient: "from-yellow-200 to-orange-300",
  },
  {
    name: "Margherita Pizza",
    desc: "Basil, tomato, fresh mozzarella",
    price: "₹279",
    veg: true,
    gradient: "from-red-200 to-orange-400",
  },
  {
    name: "Caramel Latte",
    desc: "Espresso, steamed milk, caramel drizzle",
    price: "₹190",
    veg: true,
    gradient: "from-amber-300 to-orange-200",
  },
];

// ---------------------------------------------------------------------------
// Laptop screen alignment
// ---------------------------------------------------------------------------
// /public/images/laptop.png is a bezel-only mockup (background removed, and
// the screen area is transparent) so real content can sit "inside" it.
// These four numbers describe where the transparent screen cutout sits
// relative to the full image, as percentages. If the video doesn't line up
// perfectly with the bezel edges after you swap in the real footage, nudge
// these — they were eyeballed from the source PNG.
const LAPTOP_SCREEN = {
  top: "10.5%",
  left: "13%",
  width: "74%",
  height: "70%",
};

// Dummy placeholder clip — replace with the real client reel/demo video
// whenever it's ready. Nothing else needs to change.
const DUMMY_VIDEO_SRC =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

export function HeroSection() {
  const currentYear = new Date().getFullYear();

  // ← CHANGED: ref + scroll progress for the whole hero section, used to
  // drive the laptop/phone/QR exit animation below.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // ← CHANGED: Laptop tilts back, drifts up, scales down slightly, and
  // fades out as the user scrolls down through the hero.
  const laptopY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const laptopRotateX = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const laptopScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // ← CHANGED: Phone slides down and rotates away, fading slightly later
  // than the laptop for a staggered parallax feel.
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const phoneOpacity = useTransform(scrollYProgress, [0.1, 0.8], [1, 0]);

  // ← CHANGED: QR badge drifts further/faster than the phone (extra
  // parallax layer) on top of its existing infinite float loop.
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
      ref={sectionRef} // ← CHANGED: added ref for scroll tracking
      className="relative max-h-[100vh] flex items-center pt-24 pb-12 overflow-hidden bg-black"
    >
      {/* Subtle Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-primary-dark/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
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

        {/* Right Side Visual - Laptop (image mockup + video) + phone overlapping its right edge */}
        {/* Fixed-size canvas positioned with explicit coordinates, then scaled
            down responsively. Matches the Figma layout: laptop dominant,
            phone overlapping its bottom-right corner rather than sitting
            beside it. Both mockups render perfectly upright at rest — no
            tilt — and now animate out on scroll (see transforms above). */}
        <div className="relative hidden lg:block h-[500px] w-full overflow-visible">
          <div className="absolute top-0 right-0 h-[500px] w-[660px] lg:scale-[0.68] xl:scale-[0.82] 2xl:scale-100 origin-top-right">
            {/* Ambient glow behind the mockups */}
            <div className="absolute top-[15%] right-[15%] -z-10 w-[320px] h-[320px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

            {/* ---------- Laptop mockup (image + video inside the screen) ---------- */}
            {/* ← CHANGED: outer wrapper now owns positioning + scroll-linked
                style transforms (y/scale/opacity/rotateX). Inner wrapper
                keeps the original on-load entrance animation untouched. */}
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
                {/* Aspect-ratio box matching the laptop.png artwork (adjust
                    if the source PNG's proportions differ) */}
                <div className="relative w-full aspect-[1519/1036]">
                  {/* Video, sitting inside the transparent screen cutout */}
                  <div
                    className="absolute overflow-hidden rounded-[2px] bg-black"
                    style={{
                      top: LAPTOP_SCREEN.top,
                      left: LAPTOP_SCREEN.left,
                      width: LAPTOP_SCREEN.width,
                      height: LAPTOP_SCREEN.height,
                    }}
                  >
                    <video
                      className="w-full h-full object-cover"
                      src={DUMMY_VIDEO_SRC}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  {/* Laptop bezel/base artwork on top — background + screen
                      area are transparent in the PNG, so the video shows
                      through the cutout above */}
                  <Image
                    src="/images/laptop.png"
                    alt="Laptop mockup"
                    fill
                    priority
                    className="pointer-events-none select-none object-contain"
                    sizes="580px"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ---------- Mobile mockup, overlapping the laptop's bottom-right corner ---------- */}
            {/* ← CHANGED: outer wrapper now owns positioning + scroll-linked
                style transforms (y/rotate/opacity). Inner wrapper keeps the
                original on-load entrance animation untouched. */}
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

                    {/* Screen */}
                    <div className="absolute inset-0 bg-[#FFFBF6] flex flex-col">
                      {/* Status bar */}
                      <div className="flex items-center justify-between px-3 pt-2 pb-1 text-[8px] font-semibold text-neutral-900">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <SignalHigh className="w-2.5 h-2.5" />
                          <Wifi className="w-2.5 h-2.5" />
                          <BatteryFull className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Static header section */}
                      <div className="px-2.5 pt-1 space-y-2">
                        <div className="flex items-center gap-1.5">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-display font-bold text-[10px] shadow-md shadow-orange-500/30 shrink-0">
                            B
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <h3 className="text-[9px] font-bold text-neutral-900 truncate">Your Cafe</h3>
                              <span className="px-1 py-0.5 rounded-full bg-green-100 text-green-600 text-[5px] font-bold uppercase tracking-wide shrink-0">
                                Open
                              </span>
                            </div>
                            <p className="text-[6.5px] text-neutral-400 truncate">Cafe • Snacks • Coffee</p>
                          </div>
                          <div className="flex items-center gap-0.5 px-1 py-0.5 rounded-full bg-orange-50 shrink-0">
                            <Star className="w-2 h-2 fill-orange-400 text-orange-400" />
                            <span className="text-[6.5px] font-bold text-neutral-700">4.8</span>
                          </div>
                        </div>

                        {/* Search bar */}
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-100">
                          <Search className="w-2.5 h-2.5 text-neutral-400" />
                          <span className="text-[7px] text-neutral-400">Search menu...</span>
                        </div>

                        {/* Category chips */}
                        <div className="flex gap-1 overflow-hidden">
                          {categories.map((cat, i) => (
                            <span
                              key={cat}
                              className={`shrink-0 px-2 py-0.5 rounded-full text-[6.5px] font-bold whitespace-nowrap ${
                                i === 0
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
                      <div className="relative flex-1 overflow-hidden mt-2 px-2.5 pb-2.5">
                        <div className="absolute inset-x-2.5 top-0 h-4 bg-gradient-to-b from-[#FFFBF6] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-x-2.5 bottom-0 h-4 bg-gradient-to-t from-[#FFFBF6] to-transparent z-10 pointer-events-none" />

                        <motion.div
                          animate={{ y: ["0%", "-50%"] }}
                          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                          className="flex flex-col gap-1.5"
                        >
                          {[...menuItems, ...menuItems].map((item, i) => (
                            <div
                              key={`${item.name}-${i}`}
                              className="flex items-center gap-1.5 p-1 rounded-lg bg-white shadow-sm shadow-neutral-200/60 border border-neutral-100 shrink-0"
                            >
                              <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${item.gradient} shrink-0`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1">
                                  <span
                                    className={`w-1.5 h-1.5 rounded-sm border flex items-center justify-center shrink-0 ${
                                      item.veg ? "border-green-500" : "border-red-500"
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
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR badge floating off the phone's top-right edge */}
              {/* ← CHANGED: outer motion.div carries the scroll-linked parallax
                  (y/opacity); inner motion.div keeps the original infinite
                  float loop untouched. */}
              <motion.div
                style={{ y: qrY, opacity: qrOpacity }}
                className="absolute -right-8 top-6 glass p-2.5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl z-30"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="bg-white rounded-xl p-1 shadow-inner"
                >
                  <QrCode className="w-12 h-12 text-black" strokeWidth={1.6} />
                </motion.div>
              </motion.div>
            </motion.div>
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
