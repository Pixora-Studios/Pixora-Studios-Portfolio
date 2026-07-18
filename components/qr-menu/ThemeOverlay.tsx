"use client";

import type { MenuDesign } from "@/lib/data/qrMenuData";

export function ThemeOverlay({ design, visible }: { design: MenuDesign; visible: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-1 bottom-1 rounded-[1.6rem] px-2 py-3 pt-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
      }}
    >
      <h4 className="text-white text-[10px] font-bold leading-tight mb-0.5">{design.tagline}</h4>
      <p className="text-white/70 text-[8px] leading-snug mb-1">{design.description}</p>
      <p className="text-white/50 text-[7px] italic">{design.perfectFor}</p>
    </div>
  );
}