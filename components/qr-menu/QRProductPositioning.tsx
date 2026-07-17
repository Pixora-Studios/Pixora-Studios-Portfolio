"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, Layers, BarChart3 } from "lucide-react";

const nodes = [
  {
    id: "customer",
    icon: Smartphone,
    label: "Customer",
    desc: "Scan, browse and interact",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  {
    id: "pixora",
    icon: Layers,
    label: "Pixora Digital Experience",
    desc: "Menus, orders and payments",
    color: "text-primary-dark",
    bg: "bg-primary-dark/10",
    border: "border-primary-dark/20",
    highlight: true,
  },
  {
    id: "restaurant",
    icon: BarChart3,
    label: "Restaurant Operations",
    desc: "Dashboard, data and integrations",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
];

export function QRProductPositioning() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            The QR Code Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
              Just the Beginning.
            </span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-base leading-relaxed">
            Your guests see a QR code. Your restaurant gets a complete digital experience. Pixora helps connect the customer-facing journey with the systems and workflows that keep your restaurant moving.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop: horizontal flow */}
          <div className="hidden md:flex items-center justify-between gap-0">
            {nodes.map((node, i) => (
              <div key={node.id} className="flex items-center flex-1 last:flex-none">
                {/* Node card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`flex-1 flex flex-col items-center text-center p-6 rounded-2xl border ${node.border} ${
                    node.highlight
                      ? "bg-primary-dark/5 dark:bg-primary-dark/10 shadow-lg shadow-primary-dark/10"
                      : "bg-surface-light/60 dark:bg-surface-dark/60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${node.bg} flex items-center justify-center mb-4`}>
                    <node.icon className={`w-6 h-6 ${node.color}`} />
                  </div>
                  <h3 className={`font-display font-bold text-sm mb-1.5 ${node.highlight ? "text-primary-dark" : ""}`}>
                    {node.label}
                  </h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {node.desc}
                  </p>
                </motion.div>

                {/* Connector */}
                {i < nodes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: "easeOut" }}
                    className="w-16 flex-none flex items-center justify-center relative"
                    style={{ transformOrigin: "left" }}
                  >
                    <div className="w-full h-px bg-gradient-to-r from-border-light to-border-light dark:from-border-dark dark:to-border-dark relative">
                      {/* Animated bead */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-dark"
                        animate={inView ? { x: ["0%", "600%", "0%"] } : {}}
                        transition={{ delay: i * 0.15 + 0.8, duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        style={{ left: 0 }}
                      />
                    </div>
                    <span className="absolute text-[9px] font-bold text-text-muted-light/50 dark:text-text-muted-dark/50 -top-4 whitespace-nowrap">→</span>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="flex md:hidden flex-col gap-0">
            {nodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border ${node.border} ${
                    node.highlight ? "bg-primary-dark/5 dark:bg-primary-dark/10" : "bg-surface-light/60 dark:bg-surface-dark/60"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl ${node.bg} flex items-center justify-center shrink-0`}>
                    <node.icon className={`w-5 h-5 ${node.color}`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-sm mb-1 ${node.highlight ? "text-primary-dark" : ""}`}>
                      {node.label}
                    </h3>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{node.desc}</p>
                  </div>
                </motion.div>
                {i < nodes.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                    className="w-px h-6 bg-border-light dark:bg-border-dark"
                    style={{ transformOrigin: "top" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
