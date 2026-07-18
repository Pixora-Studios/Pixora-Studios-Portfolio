"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Palette } from "lucide-react";
import { menuDesigns } from "@/lib/data/qrMenuData";
import { StaticPhonePreview } from "./StaticPhonePreview";
import { ThemeOverlay } from "./ThemeOverlay";

const CONTAINER_VARIANTS = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const PHONE_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// Label badge colors per styleTag
const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Minimal:         { bg: "#E5E7EB", color: "#374151" },
  Editorial:       { bg: "#FEF3C7", color: "#92400E" },
  "Dark Cinematic":{ bg: "#EDE9FE", color: "#5B21B6" },
  Playful:         { bg: "#FFEDD5", color: "#9A3412" },
  Vintage:         { bg: "#FEF9C3", color: "#713F12" },
  Modern:          { bg: "#FEE2E2", color: "#991B1B" },
};

export function QRDesignShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section ref={ref} className="py-10 lg:py-14 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-primary-dark" />
            <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">
              Design Themes
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-2">
                Your Brand, Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                  Look & Feel.
                </span>
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed max-w-lg">
                Fine dining, cafe, QSR — your digital menu should feel uniquely yours. Hover any theme to see the details.
              </p>
            </div>
            <p className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark shrink-0">
              6 themes available
            </p>
          </div>
        </motion.div>

        {/* Phone Grid — 6 col desktop, 3 col tablet, 2 col mobile */}
        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3"
        >
          {menuDesigns.map((design) => {
            const isHovered = hoveredId === design.id;
            const tag = TAG_COLORS[design.styleTag] ?? { bg: "#E5E7EB", color: "#374151" };

            return (
              <motion.div
                key={design.id}
                variants={PHONE_VARIANTS}
                className="flex flex-col items-center gap-2"
                onMouseEnter={() => setHoveredId(design.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Phone shell */}
                <div
                  className="relative w-full transition-all duration-300 ease-out cursor-pointer"
                  style={{
                    transform: isHovered ? "translateY(-10px) scale(1.04)" : "translateY(0) scale(1)",
                    filter: isHovered
                      ? "drop-shadow(0 20px 32px rgba(0,0,0,0.30))"
                      : "drop-shadow(0 6px 14px rgba(0,0,0,0.14))",
                  }}
                >
                  {/* Aspect ratio wrapper */}
                  <div className="relative w-full" style={{ paddingTop: "216.67%" /* 9:19.5 */ }}>
                    {/* Physical phone bezel */}
                    <div
                      className="absolute inset-0 rounded-[2.2rem] border-[4px] border-black bg-black overflow-hidden"
                      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset" }}
                    >
                      {/* Dynamic island */}
                      <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-10 h-[13px] bg-black rounded-full z-30" />

                      {/* Screen — uses inline-style preview, not Tailwind */}
                      <div className="absolute inset-0 rounded-[1.9rem] overflow-hidden">
                        <StaticPhonePreview themeId={design.id} />
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 rounded-[1.9rem] overflow-hidden">
                        <ThemeOverlay design={design} visible={isHovered} />
                      </div>
                    </div>

                    {/* Side buttons */}
                    <div className="absolute -left-[2px] top-[24%] w-[2px] h-4 bg-neutral-700 rounded-l-sm z-40" />
                    <div className="absolute -left-[2px] top-[32%] w-[2px] h-8 bg-neutral-700 rounded-l-sm z-40" />
                    <div className="absolute -right-[2px] top-[28%] w-[2px] h-10 bg-neutral-700 rounded-r-sm z-40" />
                  </div>
                </div>

                {/* Label */}
                <div
                  className="text-center w-full transition-opacity duration-300"
                  style={{ opacity: isHovered ? 1 : 0.8 }}
                >
                  <p className="text-xs font-bold truncate">{design.name}</p>
                  <span
                    className="inline-block mt-0.5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded"
                    style={{ background: tag.bg, color: tag.color }}
                  >
                    {design.styleTag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
