"use client";

import { memo } from "react";
import type { MenuTheme } from "@/lib/data/menuThemes";

// ─── Colour tokens per theme — all hardcoded so Tailwind purge never bites ──
const THEME_TOKENS: Record<string, {
  bg: string;
  bgPattern?: string;
  text: string;
  subText: string;
  muted: string;
  accent: string;
  accentText: string;
  logoBg: string;
  logoText: string;
  searchBg: string;
  searchBorder: string;
  chipActive: string;
  chipActiveText: string;
  chipInactive: string;
  chipInactiveText: string;
  cardBg: string;
  cardBorder: string;
  cardRadius: string;
  divider: string;
  layout: "card" | "divider";
  fontFamily: string;
  priceColor: string;
  openBadgeBg: string;
  openBadgeText: string;
  glow?: string;
}> = {
  minimal: {
    bg: "#FBFBFD",
    text: "#111111",
    subText: "#888888",
    muted: "#AAAAAA",
    accent: "#0071E3",
    accentText: "#ffffff",
    logoBg: "#111111",
    logoText: "#ffffff",
    searchBg: "#F0F0F3",
    searchBorder: "transparent",
    chipActive: "#111111",
    chipActiveText: "#ffffff",
    chipInactive: "#F0F0F3",
    chipInactiveText: "#888888",
    cardBg: "transparent",
    cardBorder: "transparent",
    cardRadius: "0px",
    divider: "#EEEEEE",
    layout: "divider",
    fontFamily: "'Inter', system-ui, sans-serif",
    priceColor: "#0071E3",
    openBadgeBg: "#E7F5EA",
    openBadgeText: "#1D8A3E",
  },
  editorial: {
    bg: "#FBF5EA",
    bgPattern: "radial-gradient(circle at 100% 0%, rgba(139,94,60,0.07), transparent 55%)",
    text: "#2B1D12",
    subText: "#9A8770",
    muted: "#A4907A",
    accent: "#8B5E3C",
    accentText: "#E8C77E",
    logoBg: "#2B1D12",
    logoText: "#E8C77E",
    searchBg: "#ffffff",
    searchBorder: "#E4D8C4",
    chipActive: "#2B1D12",
    chipActiveText: "#E8C77E",
    chipInactive: "transparent",
    chipInactiveText: "#8A7660",
    cardBg: "transparent",
    cardBorder: "transparent",
    cardRadius: "0px",
    divider: "#E4D8C4",
    layout: "divider",
    fontFamily: "Georgia, 'Times New Roman', serif",
    priceColor: "#8B5E3C",
    openBadgeBg: "transparent",
    openBadgeText: "#8B5E3C",
  },
  "dark-cinematic": {
    bg: "#0A0A0F",
    bgPattern: "radial-gradient(ellipse at 50% -10%, rgba(217,157,60,0.18), transparent 55%)",
    text: "#ffffff",
    subText: "rgba(255,255,255,0.4)",
    muted: "rgba(255,255,255,0.3)",
    accent: "#D99D3C",
    accentText: "#000000",
    logoBg: "linear-gradient(135deg, #F5C843, #E07020)",
    logoText: "#000000",
    searchBg: "rgba(255,255,255,0.06)",
    searchBorder: "rgba(255,255,255,0.12)",
    chipActive: "linear-gradient(90deg, #F5C843, #E07020)",
    chipActiveText: "#000000",
    chipInactive: "rgba(255,255,255,0.06)",
    chipInactiveText: "rgba(255,255,255,0.5)",
    cardBg: "rgba(255,255,255,0.04)",
    cardBorder: "rgba(255,255,255,0.10)",
    cardRadius: "12px",
    divider: "rgba(255,255,255,0.08)",
    layout: "card",
    fontFamily: "'Inter', system-ui, sans-serif",
    priceColor: "#D99D3C",
    openBadgeBg: "rgba(212,165,60,0.12)",
    openBadgeText: "#D99D3C",
    glow: "rgba(217,157,60,0.25)",
  },
  "playful-cafe": {
    bg: "#FFF6EC",
    bgPattern: "linear-gradient(180deg, #FFF6EC 0%, #FCEEDD 100%)",
    text: "#402E24",
    subText: "#B49A87",
    muted: "#C4A88F",
    accent: "#C96A3E",
    accentText: "#ffffff",
    logoBg: "linear-gradient(135deg, #E8935A, #C96A3E)",
    logoText: "#ffffff",
    searchBg: "#ffffff",
    searchBorder: "#F3DFC8",
    chipActive: "#C96A3E",
    chipActiveText: "#ffffff",
    chipInactive: "#ffffff",
    chipInactiveText: "#B49A87",
    cardBg: "#ffffff",
    cardBorder: "#F3DFC8",
    cardRadius: "16px",
    divider: "#F3DFC8",
    layout: "card",
    fontFamily: "'Inter', system-ui, sans-serif",
    priceColor: "#C96A3E",
    openBadgeBg: "#DCEEDA",
    openBadgeText: "#3B8A54",
  },
  "vintage-bistro": {
    bg: "#EDE1C4",
    bgPattern: "radial-gradient(circle at 15% 20%, rgba(120,95,50,0.10), transparent 40%), radial-gradient(circle at 85% 75%, rgba(120,95,50,0.10), transparent 45%)",
    text: "#3F3226",
    subText: "#8A7A5D",
    muted: "#7A6A52",
    accent: "#6B4A1E",
    accentText: "#EDE1C4",
    logoBg: "#3F3226",
    logoText: "#EDE1C4",
    searchBg: "#E4D7B4",
    searchBorder: "#B7A374",
    chipActive: "#3F3226",
    chipActiveText: "#EDE1C4",
    chipInactive: "transparent",
    chipInactiveText: "#7A6A52",
    cardBg: "transparent",
    cardBorder: "transparent",
    cardRadius: "0px",
    divider: "#B7A374",
    layout: "divider",
    fontFamily: "Georgia, 'Times New Roman', serif",
    priceColor: "#6B4A1E",
    openBadgeBg: "transparent",
    openBadgeText: "#3F3226",
  },
  "modern-grill": {
    bg: "#141414",
    bgPattern: "repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)",
    text: "#ffffff",
    subText: "rgba(255,255,255,0.4)",
    muted: "rgba(255,255,255,0.3)",
    accent: "#B5561F",
    accentText: "#ffffff",
    logoBg: "#B5561F",
    logoText: "#ffffff",
    searchBg: "rgba(255,255,255,0.05)",
    searchBorder: "rgba(255,255,255,0.10)",
    chipActive: "#B5561F",
    chipActiveText: "#ffffff",
    chipInactive: "rgba(255,255,255,0.05)",
    chipInactiveText: "rgba(255,255,255,0.5)",
    cardBg: "#1C1C1C",
    cardBorder: "#B5561F",
    cardRadius: "0px",
    divider: "rgba(255,255,255,0.08)",
    layout: "card",
    fontFamily: "'Inter', system-ui, sans-serif",
    priceColor: "#E08A4A",
    openBadgeBg: "rgba(181,86,31,0.15)",
    openBadgeText: "#E08A4A",
  },
};

// Menu items — static slice so every phone looks "full"
const ITEMS = [
  { name: "Grilled Salmon",       desc: "Herb crust, lemon butter",     price: "₹650", veg: false, bg: "linear-gradient(140deg,#F7A17A,#C6532F)" },
  { name: "Wood Fire Margherita", desc: "San Marzano, fresh basil",      price: "₹340", veg: true,  bg: "linear-gradient(150deg,#FFC24B,#D9600D)" },
  { name: "Smoky BBQ Burger",     desc: "Charred patty, house sauce",    price: "₹380", veg: false, bg: "#FBEBD4" },
  { name: "Cold Brew Coffee",     desc: "Smooth, bold, slow brewed",     price: "₹180", veg: true,  bg: "#F4E9DA" },
  { name: "Truffle Arancini",     desc: "Crispy risotto, truffle aioli", price: "₹320", veg: true,  bg: "radial-gradient(circle at 35% 30%,#F3C066,#B5691A)" },
];

const CATEGORIES = ["All", "Pizza", "Coffee", "Burger"];

function Thumb({ bg, veg }: { bg: string; veg: boolean }) {
  return (
    <div style={{
      width: 32, height: 32, minWidth: 32, minHeight: 32,
      borderRadius: 8, background: bg, flexShrink: 0,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", bottom: 3, right: 3,
        width: 7, height: 7, borderRadius: "50%",
        background: veg ? "#22c55e" : "#ef4444",
        border: "1.5px solid rgba(255,255,255,0.8)",
      }} />
    </div>
  );
}

export const StaticPhonePreview = memo(function StaticPhonePreview({ themeId }: { themeId: string }) {
  const tk = THEME_TOKENS[themeId];
  if (!tk) return null;

  const screenStyle: React.CSSProperties = {
    position: "absolute", inset: 0,
    background: tk.bgPattern
      ? `${tk.bgPattern}, ${tk.bg}`
      : tk.bg,
    display: "flex", flexDirection: "column",
    overflow: "hidden",
    fontFamily: tk.fontFamily,
  };

  return (
    <div style={screenStyle}>
      {/* Glow */}
      {tk.glow && (
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 50% -5%, ${tk.glow}, transparent 50%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Status bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "6px 12px 2px",
        fontSize: 7, fontWeight: 700, color: tk.text, flexShrink: 0,
      }}>
        <span>9:41</span>
        <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
          <svg width="9" height="7" viewBox="0 0 9 7" fill={tk.text} opacity={0.8}><rect x="0" y="3" width="2" height="4" rx="0.5"/><rect x="2.5" y="2" width="2" height="5" rx="0.5"/><rect x="5" y="1" width="2" height="6" rx="0.5"/><rect x="7.5" y="0" width="1.5" height="7" rx="0.5"/></svg>
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" stroke={tk.text} strokeWidth="1" opacity={0.8}><path d="M4.5 5.5 a3 3 0 0 1 0 0"/><path d="M2 3.5 a4 4 0 0 1 5 0"/><path d="M0.5 2 a5.8 5.8 0 0 1 8 0"/></svg>
          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" stroke={tk.text} strokeWidth="1" opacity={0.8}><rect x="0.5" y="0.5" width="10" height="6" rx="1"/><path d="M11 2v3c.8-.3 1.3-.8 1.3-1.5S11.8 2.3 11 2z"/><rect x="1.5" y="1.5" width="8" height="4" rx="0.5" fill={tk.text}/></svg>
        </span>
      </div>

      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 7,
        padding: "3px 10px 4px", flexShrink: 0,
      }}>
        <div style={{
          width: 28, height: 28, minWidth: 28, flexShrink: 0,
          background: tk.logoBg, color: tk.logoText,
          borderRadius: themeId === "minimal" ? 8 : themeId === "editorial" ? 0 : themeId === "dark-cinematic" ? 14 : themeId === "modern-grill" ? 0 : 10,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 10, fontWeight: 800,
        }}>B</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: tk.text, whiteSpace: "nowrap" }}>Birch Cafe</span>
            <span style={{
              fontSize: 6, fontWeight: 700, padding: "1px 4px",
              borderRadius: 99, background: tk.openBadgeBg, color: tk.openBadgeText,
              border: themeId === "editorial" || themeId === "vintage-bistro" ? `1px solid ${tk.openBadgeText}40` : undefined,
            }}>OPEN</span>
          </div>
          <div style={{ fontSize: 7, color: tk.subText }}>Cafe • Fine Dining</div>
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 2,
          fontSize: 7, color: tk.accent, fontWeight: 700,
        }}>
          <span style={{ fontSize: 8 }}>★</span> 4.8
        </div>
      </div>

      {/* Search */}
      <div style={{
        margin: "2px 10px", padding: "5px 8px",
        background: tk.searchBg,
        border: `1px solid ${tk.searchBorder}`,
        borderRadius: themeId === "minimal" || themeId === "dark-cinematic" || themeId === "playful-cafe" ? 99 : themeId === "editorial" || themeId === "vintage-bistro" || themeId === "modern-grill" ? 2 : 99,
        display: "flex", alignItems: "center", gap: 4, flexShrink: 0,
      }}>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke={tk.muted} strokeWidth="1.2">
          <circle cx="3.5" cy="3.5" r="2.5"/><path d="M5.5 5.5 L7 7"/>
        </svg>
        <span style={{ fontSize: 7, color: tk.muted }}>Search menu...</span>
      </div>

      {/* Category chips */}
      <div style={{
        display: "flex", gap: 4, padding: "3px 10px",
        flexShrink: 0, overflow: "hidden",
      }}>
        {CATEGORIES.map((cat, i) => (
          <span key={cat} style={{
            padding: "3px 7px", fontSize: 7, fontWeight: 700,
            background: i === 1 ? tk.chipActive : tk.chipInactive,
            color: i === 1 ? tk.chipActiveText : tk.chipInactiveText,
            borderRadius: themeId === "editorial" || themeId === "vintage-bistro" || themeId === "modern-grill" ? 2 : 99,
            border: (themeId === "editorial" || themeId === "vintage-bistro") && i !== 1 ? `1px solid ${tk.divider}` : undefined,
            whiteSpace: "nowrap", flexShrink: 0,
          }}>{cat}</span>
        ))}
      </div>

      {/* Divider line for editorial/minimal/vintage */}
      {tk.layout === "divider" && (
        <div style={{ height: 1, margin: "2px 10px", background: tk.divider, flexShrink: 0 }} />
      )}

      {/* Items */}
      <div style={{
        flex: 1, overflow: "hidden", padding: "4px 10px 6px",
        display: "flex", flexDirection: "column",
        gap: tk.layout === "card" ? 4 : 0,
      }}>
        {ITEMS.map((item, idx) => (
          <div key={item.name}>
            {tk.layout === "card" ? (
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "5px 6px",
                background: tk.cardBg,
                border: themeId === "modern-grill"
                  ? `1px solid rgba(255,255,255,0.06)`
                  : `1px solid ${tk.cardBorder}`,
                borderLeft: themeId === "modern-grill" ? `2px solid ${tk.accent}` : undefined,
                borderRadius: tk.cardRadius,
              }}>
                <Thumb bg={item.bg} veg={item.veg} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: tk.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</div>
                  <div style={{ fontSize: 7, color: tk.subText, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.desc}</div>
                </div>
                <div style={{ fontSize: 9, fontWeight: 800, color: tk.priceColor, flexShrink: 0 }}>{item.price}</div>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 0" }}>
                  <Thumb bg={item.bg} veg={item.veg} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 8, fontWeight: 700, color: tk.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</div>
                    <div style={{ fontSize: 7, color: tk.subText, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.desc}</div>
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 800, color: tk.priceColor, flexShrink: 0 }}>{item.price}</div>
                </div>
                {idx < ITEMS.length - 1 && (
                  <div style={{
                    height: 1, background: tk.divider,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {themeId === "editorial" && (
                      <span style={{ fontSize: 6, color: tk.subText, background: tk.bg, padding: "0 3px", marginTop: -0.5 }}>✦</span>
                    )}
                    {themeId === "vintage-bistro" && (
                      <span style={{ fontSize: 6, color: tk.subText, background: tk.bg, padding: "0 3px", marginTop: -0.5 }}>❦</span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
