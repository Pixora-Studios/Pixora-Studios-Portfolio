"use client";

import type { MenuDesign } from "@/lib/data/qrMenuData";

export function ThemeOverlay({ design, visible }: { design: MenuDesign; visible: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[1.8rem] p-4 pt-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}
    >
      <span className="inline-block text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/15 text-white mb-2">
        {design.styleTag}
      </span>
      <h4 className="text-white text-sm font-bold leading-tight mb-1">{design.tagline}</h4>
      <p className="text-white/70 text-[11px] leading-snug mb-1.5">{design.description}</p>
      <p className="text-white/50 text-[10px] italic">{design.perfectFor}</p>
    </div>
  );
}