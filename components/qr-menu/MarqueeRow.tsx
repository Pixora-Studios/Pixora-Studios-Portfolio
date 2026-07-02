"use client";

import type { ReactNode } from "react";

interface MarqueeRowProps {
  children: ReactNode;
  /** Seconds for one full 0% -> -50% pass. The content itself must already be duplicated x2. */
  durationSec?: number;
  paused?: boolean;
  className?: string;
}

/**
 * Renders `children` (expected to already be [...items, ...items]) in a flex row
 * animated with a single CSS keyframe from translateX(0) to translateX(-50%),
 * linear, infinite. Because it's a plain CSS animation (not JS-driven state),
 * it can never stutter, jump, or visibly reset — the browser compositor just
 * keeps running the same loop, and pausing/resuming via animation-play-state
 * never causes a snap back to the start.
 */
export function MarqueeRow({ children, durationSec = 60, paused = false, className = "" }: MarqueeRowProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max"
        style={{
          animation: `pixora-marquee ${durationSec}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {children}
      </div>
      <style jsx global>{`
        @keyframes pixora-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pixora-marquee-track {
            animation-play-state: paused !important;
          }
        }
      `}</style>
    </div>
  );
}