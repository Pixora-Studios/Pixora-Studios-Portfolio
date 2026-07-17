"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  QrCode,
  Search,
  Star,
  Wifi,
  SignalHigh,
  BatteryFull,
  TrendingUp,
  ShoppingBag,
  CreditCard,
  ChefHat,
  CheckCircle2,
} from "lucide-react";
import { MagneticButton } from "@/components/shared/MagneticButton";

const categories = ["All", "Pizza", "Coffee", "Burger", "Desserts"];

const menuItems = [
  { name: "Farmhouse Pizza", desc: "Fresh vegetables, mozzarella", price: "₹299", veg: true, gradient: "from-orange-300 to-red-400" },
  { name: "Cold Brew Coffee", desc: "Smooth, bold, slow-steeped", price: "₹180", veg: true, gradient: "from-amber-200 to-yellow-400" },
  { name: "Classic Cheese Burger", desc: "Grilled patty, cheddar, house sauce", price: "₹249", veg: false, gradient: "from-red-300 to-orange-500" },
  { name: "Belgian Waffle", desc: "Maple syrup, vanilla ice cream", price: "₹220", veg: true, gradient: "from-yellow-200 to-orange-300" },
  { name: "Margherita Pizza", desc: "Basil, tomato, fresh mozzarella", price: "₹279", veg: true, gradient: "from-red-200 to-orange-400" },
  { name: "Caramel Latte", desc: "Espresso, steamed milk, caramel", price: "₹190", veg: true, gradient: "from-amber-300 to-orange-200" },
];

const dashboardStats = [
  { label: "Today's Orders", value: "24", icon: ShoppingBag, color: "text-violet-400", bg: "bg-violet-400/10" },
  { label: "Revenue", value: "₹8,640", icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { label: "Payments", value: "₹7,920", icon: CreditCard, color: "text-blue-400", bg: "bg-blue-400/10" },
  { label: "Menu Active", value: "48 items", icon: ChefHat, color: "text-amber-400", bg: "bg-amber-400/10" },
];

const recentOrders = [
  { table: "Table 4", item: "Farmhouse Pizza", status: "Ready", statusColor: "bg-emerald-400/20 text-emerald-400" },
  { table: "Table 7", item: "Cold Brew Coffee", status: "Preparing", statusColor: "bg-amber-400/20 text-amber-400" },
  { table: "Table 2", item: "Cheese Burger", status: "New", statusColor: "bg-violet-400/20 text-violet-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function QRHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-dark/10 blur-[140px] -z-10 rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary-dark/10 blur-[120px] -z-10 rounded-full" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <motion.div
            className="flex flex-col items-start z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-5">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-dark" />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-dark" />
              </div>
              <span className="text-text-muted-light dark:text-text-muted-dark font-mono text-[9px] font-bold uppercase tracking-[0.4em]">
                DIGITAL RESTAURANT EXPERIENCE SYSTEM
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.4rem,4.2vw,4.5rem)] font-display font-bold leading-[1.08] mb-5 tracking-tight text-text-primary-light dark:text-text-primary-dark"
            >
              Your Restaurant&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                Digital Front Door.
              </span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base text-text-muted-light dark:text-text-muted-dark max-w-[480px] mb-4 leading-relaxed font-body"
            >
              From the first scan to the final order, Pixora helps restaurants build a faster, smarter digital experience for guests and teams.
            </motion.p>

            {/* Secondary semantic paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-text-muted-light/80 dark:text-text-muted-dark/80 max-w-[480px] mb-8 leading-relaxed font-body border-l-2 border-primary-dark/30 pl-4"
            >
              Digital QR menus, restaurant ordering, payment workflows and flexible POS integrations — built around your workflow, not the other way around.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20"
                >
                  <span>Build Your Restaurant Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <Link
                href="#how-it-works"
                className="px-7 py-3.5 rounded-full border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold text-sm hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors flex items-center gap-2 group"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 text-text-muted-light dark:text-text-muted-dark font-mono text-[9px] font-bold uppercase tracking-wider"
            >
              {[
                "No App Download",
                "Instant Updates",
                "Mobile First",
                "Custom Integrations",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-text-muted-light/30 dark:text-text-muted-dark/30">•</span>}
                  <CheckCircle2 className="w-3 h-3 text-primary-light dark:text-primary-dark shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Product Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Outer container — fixed height to prevent overflow */}
            <div className="relative w-full max-w-[480px] h-[460px] sm:h-[500px]">

              {/* ── Phone Mockup ── */}
              <div className="absolute left-0 top-0 bottom-0 flex items-center">
                <div className="relative">
                  {/* Side buttons */}
                  <div className="absolute -left-[3px] top-24 w-[3px] h-6 bg-neutral-800 rounded-l-sm" />
                  <div className="absolute -left-[3px] top-32 w-[3px] h-9 bg-neutral-800 rounded-l-sm" />
                  <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-neutral-800 rounded-r-sm" />

                  <div className="relative w-[200px] h-[410px] bg-black rounded-[2.5rem] border-[8px] border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />

                    {/* Screen */}
                    <div className="absolute inset-0 bg-[#FFFBF6] flex flex-col">
                      {/* Status bar */}
                      <div className="flex items-center justify-between px-3 pt-2 pb-1 text-[8px] font-semibold text-neutral-900 shrink-0">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <SignalHigh className="w-2.5 h-2.5" />
                          <Wifi className="w-2.5 h-2.5" />
                          <BatteryFull className="w-3 h-3" />
                        </div>
                      </div>

                      {/* Restaurant header */}
                      <div className="px-2.5 pt-1 space-y-2 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white font-display font-bold text-[10px] shadow-md shadow-orange-500/30 shrink-0">
                            B
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1">
                              <span className="text-[9px] font-bold text-neutral-900 truncate">Bistro One</span>
                              <span className="px-1 py-0.5 rounded-full bg-green-100 text-green-600 text-[5px] font-bold uppercase tracking-wide shrink-0">Open</span>
                            </div>
                            <p className="text-[6.5px] text-neutral-400 truncate">Cafe • Pizza • Coffee</p>
                          </div>
                          <div className="flex items-center gap-0.5 px-1 py-0.5 rounded-full bg-orange-50 shrink-0">
                            <Star className="w-2.5 h-2.5 fill-orange-400 text-orange-400" />
                            <span className="text-[6.5px] font-bold text-neutral-700">4.8</span>
                          </div>
                        </div>
                        {/* Search */}
                        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-neutral-100">
                          <Search className="w-2.5 h-2.5 text-neutral-400" />
                          <span className="text-[7px] text-neutral-400">Search menu...</span>
                        </div>
                        {/* Categories */}
                        <div className="flex gap-1 overflow-hidden">
                          {categories.map((cat, i) => (
                            <span
                              key={cat}
                              className={`shrink-0 px-2 py-0.5 rounded-full text-[6.5px] font-bold whitespace-nowrap ${
                                i === 0 ? "bg-orange-500 text-white" : "bg-neutral-100 text-neutral-500"
                              }`}
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Scrolling menu list */}
                      <div className="relative flex-1 overflow-hidden mt-2 px-2.5 pb-1">
                        <div className="absolute inset-x-2.5 top-0 h-4 bg-gradient-to-b from-[#FFFBF6] to-transparent z-10 pointer-events-none" />
                        <div className="absolute inset-x-2.5 bottom-0 h-4 bg-gradient-to-t from-[#FFFBF6] to-transparent z-10 pointer-events-none" />
                        <motion.div
                          animate={{ y: ["0%", "-50%"] }}
                          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                          style={{ willChange: "transform" }}
                          className="flex flex-col"
                        >
                          {[...menuItems, ...menuItems].map((item, i) => (
                            <div
                              key={`${item.name}-${i}`}
                              className="flex items-center gap-1.5 p-1 rounded-lg bg-white shadow-sm shadow-neutral-200/60 border border-neutral-100 shrink-0 mb-1.5"
                            >
                              <div className={`w-7 h-7 rounded-md bg-gradient-to-br ${item.gradient} shrink-0`} />
                              <div className="flex-1 min-w-0">
                                <span className="text-[7px] font-bold text-neutral-900 truncate block">{item.name}</span>
                                <span className="text-[6px] text-neutral-400 truncate block">{item.desc}</span>
                              </div>
                              <span className="text-[7px] font-extrabold text-neutral-900 shrink-0">{item.price}</span>
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      {/* Cart button */}
                      <div className="px-2.5 pb-2.5 pt-1 bg-[#FFFBF6] border-t border-neutral-100/50 shrink-0">
                        <button className="w-full py-1.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-[7.5px] shadow-sm">
                          View Cart (2 items) →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── QR Scan Badge ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute left-[155px] top-[30px] glass p-2.5 rounded-2xl border border-white/20 shadow-xl backdrop-blur-xl flex flex-col items-center gap-1.5 z-20"
              >
                <div className="bg-white rounded-xl p-1 shadow-inner">
                  <QrCode className="w-8 h-8 text-black" strokeWidth={1.8} />
                </div>
                <span className="text-[7px] font-bold text-center leading-tight text-text-primary-dark whitespace-nowrap">
                  Scan to View
                </span>
              </motion.div>

              {/* ── Dashboard Card ── */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-4 w-[210px] glass rounded-2xl border border-white/10 dark:border-white/10 shadow-2xl overflow-hidden"
              >
                {/* Dashboard header */}
                <div className="px-3 py-2.5 border-b border-white/5 dark:border-white/5 bg-white/5 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold text-text-primary-light dark:text-text-primary-dark uppercase tracking-wider">Restaurant Dashboard</span>
                    <span className="text-[6px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400">Live</span>
                  </div>
                  <p className="text-[6.5px] text-text-muted-light dark:text-text-muted-dark mt-0.5">Today • Bistro One</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-1.5 p-2.5">
                  {dashboardStats.map((stat) => (
                    <div key={stat.label} className="bg-white/5 dark:bg-white/5 rounded-xl p-2">
                      <div className={`w-5 h-5 rounded-lg ${stat.bg} flex items-center justify-center mb-1.5`}>
                        <stat.icon className={`w-3 h-3 ${stat.color}`} />
                      </div>
                      <p className={`text-[9px] font-extrabold ${stat.color}`}>{stat.value}</p>
                      <p className="text-[6px] text-text-muted-light dark:text-text-muted-dark leading-tight mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Recent orders */}
                <div className="px-2.5 pb-2.5">
                  <p className="text-[6.5px] font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark mb-1.5">Recent Orders</p>
                  <div className="space-y-1">
                    {recentOrders.map((order) => (
                      <div key={order.table} className="flex items-center justify-between bg-white/5 dark:bg-white/5 rounded-lg px-2 py-1.5">
                        <div>
                          <p className="text-[7px] font-bold text-text-primary-light dark:text-text-primary-dark">{order.table}</p>
                          <p className="text-[6px] text-text-muted-light dark:text-text-muted-dark truncate max-w-[90px]">{order.item}</p>
                        </div>
                        <span className={`text-[5.5px] font-bold px-1.5 py-0.5 rounded-full ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concept label */}
                <div className="px-2.5 pb-2 text-center">
                  <span className="text-[5.5px] text-text-muted-light/60 dark:text-text-muted-dark/60 font-mono uppercase tracking-wider">
                    Dashboard Preview — Product Concept
                  </span>
                </div>
              </motion.div>

              {/* ── Animated connector dots ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute left-[200px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10"
              >
                {[0, 0.2, 0.4].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 rounded-full bg-primary-dark/60"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1.5, delay, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
