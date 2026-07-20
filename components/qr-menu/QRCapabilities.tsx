"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  QrCode,
  ShoppingCart,
  CreditCard,
  LayoutDashboard,
  Eye,
  Plug,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    id: "digital-menu",
    icon: QrCode,
    title: "Digital QR Menus",
    desc: "Give guests instant access to your menu through a fast, mobile-first experience. No app download, no friction.",
    tag: "Core",
    tagColor: "bg-violet-400/20 text-violet-400",
    size: "large",
  },
  {
    id: "ordering",
    icon: ShoppingCart,
    title: "Restaurant Ordering",
    desc: "Ordering flows designed around your dine-in, takeaway or restaurant workflow.",
    tag: "Built for",
    tagColor: "bg-blue-400/20 text-blue-400",
    size: "small",
  },
  {
    id: "payments",
    icon: CreditCard,
    title: "Payment Workflows",
    desc: "Connect payment experiences to the order journey where your business needs them.",
    tag: "Built for",
    tagColor: "bg-blue-400/20 text-blue-400",
    size: "small",
  },
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Owner Dashboard",
    desc: "Manage your digital experience and get visibility into restaurant activity from one place.",
    tag: "Upcoming",
    tagColor: "bg-amber-400/20 text-amber-400",
    size: "small",
  },
  {
    id: "visibility",
    icon: Eye,
    title: "Order Visibility",
    desc: "Keep customer and restaurant workflows connected with clearer order tracking.",
    tag: "Upcoming",
    tagColor: "bg-amber-400/20 text-amber-400",
    size: "small",
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Custom Integrations",
    desc: "Build around your existing systems instead of forcing your restaurant to start from zero.",
    tag: "Roadmap",
    tagColor: "bg-emerald-400/20 text-emerald-400",
    size: "small",
  },
];

function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark transition-all duration-300 group",
        isHovering ? "border-primary-dark/30 shadow-lg shadow-primary-dark/10" : "",
        className
      )}
    >
      {/* Spotlight */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(108,99,255,0.08), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

export function QRCapabilities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* 3-Icon Capability Feature Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 lg:mb-20">
          {[
            {
              id: "no-app",
              icon: "/images/products/qr-menu/no-app-download.png",
              title: "No app download",
              desc: "Guests scan and order straight from their browser"
            },
            {
              id: "instant-updates",
              icon: "/images/products/qr-menu/instant-menu-updates.png",
              title: "Instant menu updates",
              desc: "Change a price or item and it's live immediately"
            },
            {
              id: "pos",
              icon: "/images/products/qr-menu/pos-integration.png",
              title: "Works with your setup",
              desc: "Connects to Petpooja and other POS systems you already use"
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4 md:gap-0 p-5 md:p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light/60 dark:bg-surface-dark/60"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                loading="lazy"
                className="shrink-0 md:mb-4"
              />
              <div>
                <h3 className="font-display font-bold text-sm md:text-base mb-1 md:mb-1.5">{feature.title}</h3>
                <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Workflow className="w-4 h-4 text-primary-dark" />
            <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 max-w-2xl">
            Build the Restaurant Experience You Actually Need.
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl text-base leading-relaxed">
            Every restaurant runs differently. Pixora can be shaped around your workflow — from a simple digital menu to a connected ordering and restaurant operations experience.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="md:col-span-1 md:row-span-2"
          >
            <SpotlightCard className="h-full min-h-[280px] md:min-h-0 p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary-dark/10 flex items-center justify-center mb-5">
                  <QrCode className="w-6 h-6 text-primary-dark" />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-400/20 text-violet-400 uppercase tracking-wider mb-3 inline-block">
                  Core
                </span>
                <h3 className="font-display font-bold text-xl mb-3">
                  Digital QR Menus
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                  Give guests instant access to your menu through a fast, mobile-first experience. No app download, no friction — just scan and browse.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-light dark:border-border-dark">
                <p className="text-xs font-bold text-primary-dark font-mono uppercase tracking-wider">
                  Your restaurant workflow. Your way.
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 5 smaller cards */}
          {capabilities.slice(1).map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
            >
              <SpotlightCard className="p-5 h-full min-h-[140px]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 dark:bg-white/5 border border-border-light dark:border-border-dark flex items-center justify-center shrink-0">
                    <cap.icon className="w-4.5 h-4.5 text-text-muted-light dark:text-text-muted-dark group-hover:text-primary-dark transition-colors" style={{ width: "1.125rem", height: "1.125rem" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h3 className="font-display font-bold text-sm">{cap.title}</h3>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${cap.tagColor} uppercase tracking-wide shrink-0`}>
                        {cap.tag}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 mt-6 text-xs text-text-muted-light dark:text-text-muted-dark"
        >
          <span className="font-bold uppercase tracking-wider text-[10px]">Status:</span>
          {[
            { label: "Core", color: "bg-violet-400/20 text-violet-400" },
            { label: "Built for", color: "bg-blue-400/20 text-blue-400" },
            { label: "Upcoming", color: "bg-amber-400/20 text-amber-400" },
            { label: "Roadmap", color: "bg-emerald-400/20 text-emerald-400" },
          ].map((s) => (
            <span key={s.label} className={`px-2.5 py-0.5 rounded-full font-bold text-[9px] uppercase tracking-wider ${s.color}`}>
              {s.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
