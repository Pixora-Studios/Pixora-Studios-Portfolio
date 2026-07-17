"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShoppingBag,
  TrendingUp,
  CreditCard,
  ChefHat,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

function useCountUp(target: number, inView: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

const recentOrders = [
  { id: "#1042", table: "Table 4", item: "Farmhouse Pizza + Cold Brew", amount: "₹479", status: "Ready", Icon: CheckCircle2, statusColor: "text-emerald-400", statusBg: "bg-emerald-400/10" },
  { id: "#1041", table: "Table 7", item: "Cheese Burger + Latte", amount: "₹439", status: "Preparing", Icon: Loader2, statusColor: "text-amber-400", statusBg: "bg-amber-400/10" },
  { id: "#1040", table: "Table 2", item: "Belgian Waffle", amount: "₹220", status: "New", Icon: AlertCircle, statusColor: "text-violet-400", statusBg: "bg-violet-400/10" },
  { id: "#1039", table: "Take Away", item: "Margherita + Mojito", amount: "₹429", status: "Done", Icon: CheckCircle2, statusColor: "text-emerald-400/60", statusBg: "bg-emerald-400/5" },
];

// Simple SVG sparkline
function Sparkline() {
  const points = [20, 45, 30, 60, 40, 75, 55, 80, 65, 90, 70, 88];
  const h = 40;
  const w = 120;
  const pts = points.map((p, i) => `${(i / (points.length - 1)) * w},${h - (p / 100) * h}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="opacity-60">
      <polyline points={pts} stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QRDashboardSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const orders = useCountUp(24, inView);
  const revenue = useCountUp(8640, inView, 1500);
  const payments = useCountUp(7920, inView, 1400);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-primary-dark" />
              <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">Owner Dashboard</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
              Your Guests See the Menu.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                You See the Bigger Picture.
              </span>
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed mb-6">
              A digital restaurant experience should not stop at the QR code. Pixora is designed to give restaurant owners a clearer way to manage and understand the digital side of their business.
            </p>

            <div className="space-y-3">
              {[
                { icon: ShoppingBag, label: "Track orders as they come in" },
                { icon: CreditCard, label: "Monitor payment activity" },
                { icon: ChefHat, label: "Control your digital menu instantly" },
                { icon: Clock, label: "Get visibility into restaurant activity" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-text-muted-light dark:text-text-muted-dark">
                  <div className="w-7 h-7 rounded-lg bg-primary-dark/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary-dark" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/40">

              {/* Dashboard header bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm">
                <div>
                  <p className="font-display font-bold text-sm">Restaurant Overview</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Today · Bistro One</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                  <span className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark bg-surface-dark/5 dark:bg-surface-light/5 px-2 py-0.5 rounded-lg">
                    Dashboard Preview — Product Concept
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <motion.div variants={cardVariants} className="grid grid-cols-3 gap-px bg-border-light dark:bg-border-dark">
                {[
                  { label: "Orders Today", value: orders, suffix: "", Icon: ShoppingBag, color: "text-violet-400", bg: "bg-violet-400/10" },
                  { label: "Revenue", value: revenue, suffix: "₹", Icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                  { label: "Payments", value: payments, suffix: "₹", Icon: CreditCard, color: "text-blue-400", bg: "bg-blue-400/10" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-surface-light dark:bg-surface-dark flex flex-col gap-2">
                    <div className={`w-8 h-8 rounded-xl ${stat.bg} flex items-center justify-center`}>
                      <stat.Icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <p className={`font-display font-extrabold text-lg ${stat.color}`}>
                      {stat.suffix}{stat.value.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark font-medium">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Chart row */}
              <motion.div variants={cardVariants} className="px-5 py-4 border-b border-border-light dark:border-border-dark">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold">Revenue Today</p>
                  <span className="text-[10px] text-emerald-400 font-bold">↑ 12% vs yesterday</span>
                </div>
                <Sparkline />
              </motion.div>

              {/* Orders list */}
              <motion.div variants={cardVariants} className="p-5">
                <p className="text-xs font-bold mb-3 text-text-muted-light dark:text-text-muted-dark uppercase tracking-wider">Recent Orders</p>
                <div className="space-y-2">
                  {recentOrders.map((order, i) => (
                    <motion.div
                      key={order.id}
                      variants={cardVariants}
                      className="flex items-center justify-between p-3 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-7 h-7 rounded-lg ${order.statusBg} flex items-center justify-center shrink-0`}>
                          <order.Icon className={`w-3.5 h-3.5 ${order.statusColor}`} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold truncate">{order.id} · {order.table}</p>
                          <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark truncate">{order.item}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-bold">{order.amount}</span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${order.statusBg} ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Active menu badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 glass px-4 py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-400/10 flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold">Active Menu</p>
                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark">48 items · Updated 2h ago</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
