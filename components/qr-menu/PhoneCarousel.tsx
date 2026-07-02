"use client";

import { useState, memo, useRef } from "react";
import { useInView } from "framer-motion";
import { menuDesigns, menuPreviewItems, menuPreviewCategories } from "@/lib/data/qrMenuData";
import { menuThemes } from "@/lib/data/menuThemes";
import { MenuPreviewScreen, PhoneFrame } from "./MenuPreviewParts";
import { ThemeOverlay } from "./ThemeOverlay";
import { MarqueeRow } from "./MarqueeRow";

// Subtle, alternating idle tilt so the row doesn't look like a rigid grid.
const IDLE_ROTATIONS = [-2, 1, -1, 2, -1.5, 1.5];

// A full pass across the belt at a calm, unhurried pace.
const ROW_DURATION_SEC = 55;

/**
 * Extracted into a memoized component to prevent the entire marquee from re-rendering
 * when only one phone is hovered. Also uses boxShadow instead of filter: drop-shadow
 * because filter effects are significantly more expensive for the GPU to paint.
 */
const PhoneItem = memo(function PhoneItem({
  design,
  index,
  isHovered,
  setHoveredKey,
}: {
  design: typeof menuDesigns[0];
  index: number;
  isHovered: boolean;
  setHoveredKey: (key: string | null) => void;
}) {
  const theme = menuThemes[design.id];
  if (!theme) return null;

  const uniqueKey = `${design.id}-${index}`;
  const idleRotation = IDLE_ROTATIONS[index % IDLE_ROTATIONS.length];

  return (
    <div
      className="relative shrink-0 cursor-pointer"
      style={{ width: 210 }}
      onMouseEnter={() => setHoveredKey(uniqueKey)}
      onMouseLeave={() => setHoveredKey(null)}
    >
      <div
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: isHovered
            ? "translateY(-18px) scale(1.06) rotate(0deg)"
            : `translateY(0px) scale(1) rotate(${idleRotation}deg)`,
          // Using boxShadow instead of filter: drop-shadow for better performance
          boxShadow: isHovered
            ? "0 30px 45px -12px rgba(0,0,0,0.35)"
            : "0 16px 24px -8px rgba(0,0,0,0.18)",
          borderRadius: "2.4rem", // Match the PhoneFrame border radius for correct shadow clipping
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
});

export function PhoneCarousel() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Pause the marquee if it's out of view to save CPU/GPU
  const isInView = useInView(containerRef, { amount: 0.1 });

  // Duplicated so the marquee can loop seamlessly from -50% back to 0%.
  const beltDesigns = [...menuDesigns, ...menuDesigns];

  return (
    <div ref={containerRef}>
      <MarqueeRow
        durationSec={ROW_DURATION_SEC}
        paused={hoveredKey !== null || !isInView}
        className="py-10"
      >
        <div className="flex items-center gap-14 md:gap-20 px-7 md:px-10">
          {beltDesigns.map((design, index) => (
            <PhoneItem
              key={`${design.id}-${index}`}
              design={design}
              index={index}
              isHovered={hoveredKey === `${design.id}-${index}`}
              setHoveredKey={setHoveredKey}
            />
          ))}
        </div>
      </MarqueeRow>
    </div>
  );
}
