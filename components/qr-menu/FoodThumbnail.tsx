"use client";

import type { CSSProperties } from "react";
import type { FoodKind } from "@/lib/data/qrMenuData";

interface FoodThumbnailProps {
  kind: FoodKind;
  tone?: "a" | "b";
  /** px size of the (square) thumbnail box. */
  size?: number;
  /** Tailwind radius class, e.g. theme.thumbRadius ("rounded-xl", "rounded-none", ...). */
  radiusClass?: string;
  className?: string;
}

/**
 * Every value here is an inline style, on purpose: the old implementation relied on
 * Tailwind gradient utility classes for the thumbnail fill, and on certain themes
 * (light gradients on light backgrounds, or edge-case flex shrinking) the box would
 * render at ~0 opacity or ~0 width and "disappear". Inline styles + a hard pixel
 * floor (width/height/minWidth/minHeight + flexShrink: 0) make that impossible:
 * the box always has adequate size and this color, full stop.
 */
export function FoodThumbnail({ kind, tone = "a", size = 36, radiusClass = "rounded-xl", className = "" }: FoodThumbnailProps) {
  const wrapperStyle: CSSProperties = {
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    flexShrink: 0,
    position: "relative",
    overflow: "hidden",
    display: "block",
  };

  return (
    <div className={`${radiusClass} ${className}`} style={wrapperStyle}>
      <FoodArt kind={kind} tone={tone} />
    </div>
  );
}

function FoodArt({ kind, tone }: { kind: FoodKind; tone: "a" | "b" }) {
  switch (kind) {
    case "pizza":
      return <PizzaArt />;
    case "coffee":
      return <CoffeeArt tone={tone} />;
    case "fish":
      return <FishArt />;
    case "burger":
      return <BurgerArt tone={tone} />;
    case "dessert":
      return <DessertArt tone={tone} />;
    case "waffle":
      return <WaffleArt />;
    case "mojito":
      return <MojitoArt />;
    case "toast":
      return <ToastArt />;
    case "arancini":
      return <AranciniArt />;
    default:
      return null;
  }
}

const full: CSSProperties = { position: "absolute", inset: 0 };
const abs = (style: CSSProperties): CSSProperties => ({ position: "absolute", ...style });

function PizzaArt() {
  return (
    <div style={{ ...full, background: "linear-gradient(150deg,#FFC24B 0%,#F08A24 55%,#D9600D 100%)" }}>
      {/* crust arc */}
      <div style={abs({ top: -6, left: -6, right: -6, height: 16, borderRadius: "50%", background: "#F4A94B" })} />
      {/* cheese dots */}
      <div style={abs({ top: "38%", left: "28%", width: "16%", height: "16%", borderRadius: "50%", background: "#FFE29A" })} />
      <div style={abs({ top: "58%", left: "55%", width: "13%", height: "13%", borderRadius: "50%", background: "#FFE29A" })} />
      <div style={abs({ top: "30%", left: "62%", width: "11%", height: "11%", borderRadius: "50%", background: "#FFE29A" })} />
      {/* basil */}
      <div style={abs({ top: "62%", left: "30%", width: "14%", height: "9%", borderRadius: "40% 60% 60% 40%", background: "#5B8C3E", transform: "rotate(20deg)" })} />
      <div style={abs({ top: "22%", left: "45%", width: "12%", height: "8%", borderRadius: "40% 60% 60% 40%", background: "#5B8C3E", transform: "rotate(-15deg)" })} />
    </div>
  );
}

function CoffeeArt({ tone }: { tone: "a" | "b" }) {
  const cup = tone === "a" ? "#4A2E23" : "#C88B4A";
  const rim = tone === "a" ? "#6B4A38" : "#E8B87A";
  return (
    <div style={{ ...full, background: tone === "a" ? "#F4E9DA" : "#FFF3E1" }}>
      <div style={abs({ top: "22%", left: "14%", right: "14%", bottom: "10%", borderRadius: "0 0 45% 45%", background: cup })} />
      <div style={abs({ top: "18%", left: "10%", right: "10%", height: "18%", borderRadius: "50%", background: rim })} />
      {/* cream swirl */}
      <div style={abs({ top: "28%", left: "30%", width: "40%", height: "22%", borderRadius: "50%", background: "rgba(255,255,255,0.55)", filter: "blur(1px)" })} />
      {/* handle */}
      <div style={abs({ top: "48%", right: "2%", width: "16%", height: "26%", border: `3px solid ${cup}`, borderLeft: "none", borderRadius: "0 40% 40% 0" })} />
    </div>
  );
}

function FishArt() {
  return (
    <div style={{ ...full, background: "linear-gradient(140deg,#F7A17A 0%,#E8724B 60%,#C6532F 100%)" }}>
      <div
        style={abs({
          inset: "12%",
          borderRadius: "40%",
          background: "repeating-linear-gradient(48deg, rgba(60,20,10,0.28) 0px, rgba(60,20,10,0.28) 3px, transparent 3px, transparent 8px)",
        })}
      />
      {/* lemon */}
      <div style={abs({ top: "10%", right: "8%", width: "26%", height: "26%", borderRadius: "50%", background: "#F5D74E", border: "2px solid #E8C22A" })} />
    </div>
  );
}

function BurgerArt({ tone }: { tone: "a" | "b" }) {
  const patty = tone === "a" ? "#5A3220" : "#8A5A2E";
  return (
    <div style={{ ...full, background: "#FBEBD4" }}>
      <div style={abs({ top: "10%", left: "10%", right: "10%", height: "22%", borderRadius: "50% 50% 20% 20%", background: "#E8A94A" })} />
      <div style={abs({ top: "34%", left: "8%", right: "8%", height: "16%", borderRadius: "4px", background: patty })} />
      <div style={abs({ top: "52%", left: "8%", right: "8%", height: "10%", borderRadius: "10px", background: "#7DAA4C" })} />
      <div style={abs({ top: "64%", left: "10%", right: "10%", bottom: "12%", borderRadius: "20% 20% 40% 40%", background: "#F0C877" })} />
      {/* sesame */}
      <div style={abs({ top: "14%", left: "30%", width: "6%", height: "6%", borderRadius: "50%", background: "#FFF3D6" })} />
      <div style={abs({ top: "17%", left: "55%", width: "5%", height: "5%", borderRadius: "50%", background: "#FFF3D6" })} />
    </div>
  );
}

function DessertArt({ tone }: { tone: "a" | "b" }) {
  const base = tone === "a" ? "#3B2418" : "#5A2E1E";
  return (
    <div style={{ ...full, background: "#F6E7D2" }}>
      <div style={abs({ inset: "10%", borderRadius: "50%", background: base })} />
      <div style={abs({ top: "18%", left: "22%", width: "34%", height: "20%", borderRadius: "50%", background: "rgba(255,255,255,0.85)" })} />
      <div style={abs({ bottom: "20%", right: "22%", width: "16%", height: "16%", borderRadius: "50%", background: "#C8304A" })} />
    </div>
  );
}

function WaffleArt() {
  return (
    <div style={{ ...full, background: "#E8A63E" }}>
      <div
        style={abs({
          inset: "8%",
          borderRadius: "6px",
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(120,70,10,0.35) 0px, rgba(120,70,10,0.35) 2px, transparent 2px, transparent 22%), repeating-linear-gradient(90deg, rgba(120,70,10,0.35) 0px, rgba(120,70,10,0.35) 2px, transparent 2px, transparent 22%)",
          background: "#F0B85A",
        })}
      />
      <div style={abs({ top: "10%", left: "14%", width: "44%", height: "22%", borderRadius: "50%", background: "rgba(255,255,255,0.8)" })} />
    </div>
  );
}

function MojitoArt() {
  return (
    <div style={{ ...full, background: "#EFF7EA" }}>
      <div
        style={abs({
          top: "8%",
          left: "22%",
          right: "22%",
          bottom: "10%",
          background: "linear-gradient(180deg,#9FD98C 0%,#5FAE55 100%)",
          clipPath: "polygon(15% 0%, 85% 0%, 70% 100%, 30% 100%)",
        })}
      />
      <div style={abs({ top: "-6%", left: "48%", width: "6%", height: "55%", background: "#F5F5F5", borderRadius: "3px", transform: "rotate(12deg)" })} />
      <div style={abs({ top: "26%", left: "38%", width: "10%", height: "10%", borderRadius: "50%", background: "#3F7A3A" })} />
      <div style={abs({ top: "42%", left: "54%", width: "8%", height: "8%", borderRadius: "50%", background: "#3F7A3A" })} />
    </div>
  );
}

function ToastArt() {
  return (
    <div style={{ ...full, background: "#F1D9A8" }}>
      <div style={abs({ inset: "8%", borderRadius: "10px", background: "#E3B96C" })} />
      <div style={abs({ top: "22%", left: "14%", right: "14%", bottom: "26%", borderRadius: "50% 50% 40% 40%", background: "#6B8C3E" })} />
      <div style={abs({ top: "34%", left: "28%", width: "8%", height: "8%", borderRadius: "50%", background: "#C6402E" })} />
      <div style={abs({ top: "50%", left: "52%", width: "7%", height: "7%", borderRadius: "50%", background: "#C6402E" })} />
    </div>
  );
}

function AranciniArt() {
  return (
    <div style={{ ...full, background: "radial-gradient(circle at 35% 30%, #F3C066 0%, #D98A2E 60%, #B5691A 100%)" }}>
      <div style={abs({ top: "20%", left: "55%", width: "10%", height: "10%", borderRadius: "50%", background: "rgba(80,45,10,0.4)" })} />
      <div style={abs({ top: "55%", left: "30%", width: "8%", height: "8%", borderRadius: "50%", background: "rgba(80,45,10,0.4)" })} />
      <div style={abs({ top: "40%", left: "62%", width: "7%", height: "7%", borderRadius: "50%", background: "rgba(80,45,10,0.35)" })} />
      <div style={abs({ top: "68%", left: "55%", width: "16%", height: "9%", borderRadius: "40% 60% 60% 40%", background: "#5B8C3E", transform: "rotate(-10deg)" })} />
    </div>
  );
}
