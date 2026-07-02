"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  QrCode,
  Search,
  Star,
  Wifi,
  SignalHigh,
  BatteryFull,
} from "lucide-react";

const categories = ["Pizza", "Coffee", "Burger", "Desserts", "Drinks", "Breakfast"];

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
  {
    name: "Grilled Chicken Burger",
    desc: "Smoky grilled chicken, lettuce, mayo",
    price: "₹269",
    veg: false,
    gradient: "from-orange-400 to-red-300",
  },
  {
    name: "Choco Lava Cake",
    desc: "Warm molten centre, vanilla scoop",
    price: "₹210",
    veg: true,
    gradient: "from-red-300 to-amber-500",
  },
  {
    name: "Fresh Orange Mojito",
    desc: "Zesty citrus, mint, soda",
    price: "₹150",
    veg: true,
    gradient: "from-yellow-300 to-orange-400",
  },
  {
    name: "Avocado Toast",
    desc: "Sourdough, smashed avocado, chili flakes",
    price: "₹230",
    veg: true,
    gradient: "from-yellow-100 to-green-300",
  },
];

export function QRHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-dark/20 blur-[128px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-dark/20 blur-[128px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span>Now Testing / New Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
            >
              Contactless, Instant, <br />
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">No-App</span> Digital Menu.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-lg"
            >
              Scan a QR code to view and order. A fast, mobile-optimized experience for your customers without the friction of app downloads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold text-center hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Phone Mockup */}
            <div className="relative">
              {/* Side buttons */}
              <div className="absolute -left-[3px] top-28 w-[3px] h-7 bg-neutral-800 rounded-l-sm" />
              <div className="absolute -left-[3px] top-40 w-[3px] h-11 bg-neutral-800 rounded-l-sm" />
              <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-neutral-800 rounded-r-sm" />

              <div className="relative w-64 h-[520px] bg-black rounded-[3rem] border-[10px] border-black shadow-[0_35px_70px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />

                {/* Screen */}
                <div className="absolute inset-0 bg-[#FFFBF6] flex flex-col">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-[10px] font-semibold text-neutral-900">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <SignalHigh className="w-3 h-3" />
                      <Wifi className="w-3 h-3" />
                      <BatteryFull className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Static header section */}
                  <div className="px-3 pt-1.5 space-y-2.5">
                    {/* Restaurant header */}
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-md shadow-orange-500/30 shrink-0">
                        B
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="text-[11px] font-bold text-neutral-900 truncate">Your Cafe</h3>
                          <span className="px-1.5 py-0.5 rounded-full bg-green-100 text-green-600 text-[6px] font-bold uppercase tracking-wide shrink-0">
                            Open
                          </span>
                        </div>
                        <p className="text-[8px] text-neutral-400 truncate">Cafe • Snacks • Coffee</p>
                      </div>
                      <div className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-orange-50 shrink-0">
                        <Star className="w-2.5 h-2.5 fill-orange-400 text-orange-400" />
                        <span className="text-[8px] font-bold text-neutral-700">4.8</span>
                      </div>
                    </div>

                    {/* Search bar */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-neutral-100">
                      <Search className="w-3 h-3 text-neutral-400" />
                      <span className="text-[9px] text-neutral-400">Search menu...</span>
                    </div>

                    {/* Category chips */}
                    <div className="flex gap-1.5 overflow-hidden">
                      {categories.map((cat, i) => (
                        <span
                          key={cat}
                          className={`shrink-0 px-2.5 py-1 rounded-full text-[8px] font-bold whitespace-nowrap ${
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
                  <div className="relative flex-1 overflow-hidden mt-2.5 px-3 pb-3">
                    <div className="absolute inset-x-3 top-0 h-5 bg-gradient-to-b from-[#FFFBF6] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-3 bottom-0 h-5 bg-gradient-to-t from-[#FFFBF6] to-transparent z-10 pointer-events-none" />

                    <motion.div
                      animate={{ y: ["0%", "-50%"] }}
                      transition={{ duration: 26, ease: "linear", repeat: Infinity }}
                      className="flex flex-col gap-2"
                    >
                      {[...menuItems, ...menuItems].map((item, i) => (
                        <div
                          key={`${item.name}-${i}`}
                          className="flex items-center gap-2 p-1.5 rounded-xl bg-white shadow-sm shadow-neutral-200/60 border border-neutral-100 shrink-0"
                        >
                          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${item.gradient} shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span
                                className={`w-2 h-2 rounded-sm border flex items-center justify-center shrink-0 ${
                                  item.veg ? "border-green-500" : "border-red-500"
                                }`}
                              >
                                <span className={`w-0.5 h-0.5 rounded-full ${item.veg ? "bg-green-500" : "bg-red-500"}`} />
                              </span>
                              <h4 className="text-[9px] font-bold text-neutral-900 truncate">{item.name}</h4>
                            </div>
                            <p className="text-[7px] text-neutral-400 truncate mt-0.5">{item.desc}</p>
                          </div>
                          <p className="text-[9px] font-extrabold text-neutral-900 shrink-0">{item.price}</p>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Floating Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass p-5 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl"
            >
              <div className="bg-white rounded-2xl mb-3 shadow-inner">
                <QrCode className="w-24 h-24 text-black" strokeWidth={1.6} />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-primary-dark">Scan to View</p>
              </div>
            </motion.div>

            {/* Feature badge */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-8 bottom-1/4 glass px-5 py-3.5 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3 backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-dark/20 flex items-center justify-center text-primary-dark shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[14px] font-bold text-text-primary-dark uppercase tracking-wide">Ultra Fast</p>
                <p className="text-[13px] text-text-muted-dark">No App Needed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
