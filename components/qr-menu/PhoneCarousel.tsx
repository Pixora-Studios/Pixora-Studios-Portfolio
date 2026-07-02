"use client";

import { useState } from "react";
import { menuDesigns, menuPreviewItems, menuPreviewCategories } from "@/lib/data/qrMenuData";
import { menuThemes } from "@/lib/data/menuThemes";
import { MenuPreviewScreen, PhoneFrame } from "./MenuPreviewParts";
import { ThemeOverlay } from "./ThemeOverlay";
import { MarqueeRow } from "./MarqueeRow";

// Subtle, alternating idle tilt so the row doesn't look like a rigid grid.
const IDLE_ROTATIONS = [-2, 1, -1, 2, -1.5, 1.5];

// A full pass across the belt at a calm, unhurried pace.
const ROW_DURATION_SEC = 55;

export function PhoneCarousel() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Duplicated so the marquee can loop seamlessly from -50% back to 0%.
  const beltDesigns = [...menuDesigns, ...menuDesigns];

  return (
    <MarqueeRow durationSec={ROW_DURATION_SEC} paused={hoveredKey !== null} className="py-10">
      <div className="flex items-center gap-14 md:gap-20 px-7 md:px-10">
        {beltDesigns.map((design, index) => {
          const theme = menuThemes[design.id];
          if (!theme) return null;

          const uniqueKey = `${design.id}-${index}`;
          const isHovered = hoveredKey === uniqueKey;
          const idleRotation = IDLE_ROTATIONS[index % IDLE_ROTATIONS.length];

          return (
            <div
              key={uniqueKey}
              className="relative shrink-0 cursor-pointer"
              style={{ width: 210 }}
              onMouseEnter={() => setHoveredKey(uniqueKey)}
              onMouseLeave={() => setHoveredKey((k) => (k === uniqueKey ? null : k))}
            >
              <div
                className="relative transition-all duration-300 ease-out"
                style={{
                  transform: isHovered
                    ? "translateY(-18px) scale(1.06) rotate(0deg)"
                    : `translateY(0px) scale(1) rotate(${idleRotation}deg)`,
                  filter: isHovered
                    ? "drop-shadow(0 30px 45px rgba(0,0,0,0.35))"
                    : "drop-shadow(0 16px 24px rgba(0,0,0,0.18))",
                }}
              >
                <div className="relative aspect-[9/19.5]">
                  <PhoneFrame glow={theme.accentGlow}>
                    <MenuPreviewScreen
                      theme={theme}
                      items={menuPreviewItems}
                      categories={menuPreviewCategories}
                      scrollDurationSec={design.scrollDurationSec}
                    />
                  </PhoneFrame>
                  <ThemeOverlay design={design} visible={isHovered} />
                </div>
              </div>

              <div
                className="text-center mt-4 transition-opacity duration-300"
                style={{ opacity: isHovered ? 1 : 0.7 }}
              >
                <p className="text-sm font-bold">{design.name}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark">
                  {design.styleTag}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </MarqueeRow>
  );
}
