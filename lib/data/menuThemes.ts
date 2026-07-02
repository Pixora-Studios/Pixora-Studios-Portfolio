import type { CSSProperties } from "react";

export type MenuThemeLayout = "card" | "divider";

export interface MenuTheme {
  id: string;
  fontClass: string;
  screenBg: string;
  /** Optional inline background pattern layered under the content (paper grain, vignette, stripes...). */
  screenPattern?: CSSProperties;
  headingColor: string;
  subTextColor: string;
  logoBg: string;
  logoText: string;
  logoRadius: string;
  openBadgeBg: string;
  openBadgeText: string;
  ratingBg: string;
  ratingText: string;
  searchBg: string;
  searchTextColor: string;
  searchIconColor: string;
  searchRadius: string;
  chipActiveBg: string;
  chipActiveText: string;
  chipInactiveBg: string;
  chipInactiveText: string;
  chipRadius: string;
  layout: MenuThemeLayout;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  cardRadius: string;
  cardGap: string;
  thumbRadius: string;
  nameColor: string;
  descColor: string;
  priceColor: string;
  priceFontClass: string;
  vegColor: string;
  nonVegColor: string;
  dividerColor?: string;
  /** Small ornamental glyph used between divider rows on decorative themes. Empty string = none. */
  ornament?: string;
  accentGlow?: boolean;
}

export const menuThemes: Record<string, MenuTheme> = {
  // ─── Apple-inspired: near-white, hairline rules, a single restrained blue accent ───
  minimal: {
    id: "minimal",
    fontClass: "font-sans",
    screenBg: "bg-[#FBFBFD]",
    headingColor: "text-neutral-900",
    subTextColor: "text-neutral-400",
    logoBg: "bg-neutral-900",
    logoText: "text-white",
    logoRadius: "rounded-xl",
    openBadgeBg: "bg-[#E7F5EA]",
    openBadgeText: "text-[#1D8A3E]",
    ratingBg: "bg-transparent",
    ratingText: "text-neutral-900",
    searchBg: "bg-[#F0F0F3]",
    searchTextColor: "text-neutral-400",
    searchIconColor: "text-neutral-400",
    searchRadius: "rounded-xl",
    chipActiveBg: "bg-neutral-900",
    chipActiveText: "text-white",
    chipInactiveBg: "bg-[#F0F0F3]",
    chipInactiveText: "text-neutral-500",
    chipRadius: "rounded-full",
    layout: "divider",
    cardBg: "bg-transparent",
    cardBorder: "",
    cardShadow: "",
    cardRadius: "rounded-none",
    cardGap: "gap-0",
    thumbRadius: "rounded-[10px]",
    nameColor: "text-neutral-900",
    descColor: "text-neutral-400",
    priceColor: "text-[#0071E3]",
    priceFontClass: "font-semibold",
    vegColor: "border-green-500 bg-green-500",
    nonVegColor: "border-red-500 bg-red-500",
    dividerColor: "border-neutral-100",
  },

  // ─── Luxury magazine: cream page, hairline gold rule, serif masthead ───
  editorial: {
    id: "editorial",
    fontClass: "font-serif",
    screenBg: "bg-[#FBF5EA]",
    screenPattern: {
      backgroundImage: "radial-gradient(circle at 100% 0%, rgba(139,94,60,0.06), transparent 55%)",
    },
    headingColor: "text-[#2B1D12]",
    subTextColor: "text-[#9A8770]",
    logoBg: "bg-[#2B1D12]",
    logoText: "text-[#E8C77E]",
    logoRadius: "rounded-none",
    openBadgeBg: "bg-transparent border border-[#8B5E3C]/50",
    openBadgeText: "text-[#8B5E3C]",
    ratingBg: "bg-transparent",
    ratingText: "text-[#8B5E3C]",
    searchBg: "bg-white border border-[#E4D8C4]",
    searchTextColor: "text-[#A4907A]",
    searchIconColor: "text-[#A4907A]",
    searchRadius: "rounded-none",
    chipActiveBg: "bg-[#2B1D12]",
    chipActiveText: "text-[#E8C77E]",
    chipInactiveBg: "bg-transparent border border-[#D8C8AE]",
    chipInactiveText: "text-[#8A7660]",
    chipRadius: "rounded-none",
    layout: "divider",
    cardBg: "bg-transparent",
    cardBorder: "",
    cardShadow: "",
    cardRadius: "rounded-none",
    cardGap: "gap-0",
    thumbRadius: "rounded-none",
    nameColor: "text-[#2B1D12]",
    descColor: "text-[#A4907A]",
    priceColor: "text-[#8B5E3C]",
    priceFontClass: "font-semibold italic",
    vegColor: "border-green-700 bg-green-700",
    nonVegColor: "border-red-700 bg-red-700",
    dividerColor: "border-[#E4D8C4]",
    ornament: "✦",
  },

  // ─── Premium steakhouse: near-black, glass cards, amber sheen ───
  "dark-cinematic": {
    id: "dark-cinematic",
    fontClass: "font-sans",
    screenBg: "bg-[#0A0A0F]",
    screenPattern: {
      backgroundImage:
        "radial-gradient(ellipse at 50% -10%, rgba(217,157,60,0.16), transparent 55%), radial-gradient(ellipse at 100% 100%, rgba(217,157,60,0.08), transparent 60%)",
    },
    headingColor: "text-white",
    subTextColor: "text-white/40",
    logoBg: "bg-gradient-to-br from-amber-300 to-orange-600",
    logoText: "text-black",
    logoRadius: "rounded-full",
    openBadgeBg: "bg-amber-400/10 border border-amber-400/30",
    openBadgeText: "text-amber-400",
    ratingBg: "bg-white/5 border border-white/10",
    ratingText: "text-amber-400",
    searchBg: "bg-white/5 border border-white/10",
    searchTextColor: "text-white/30",
    searchIconColor: "text-white/30",
    searchRadius: "rounded-full",
    chipActiveBg: "bg-gradient-to-r from-amber-300 to-orange-500",
    chipActiveText: "text-black",
    chipInactiveBg: "bg-white/5 border border-white/10",
    chipInactiveText: "text-white/50",
    chipRadius: "rounded-full",
    layout: "card",
    cardBg: "bg-white/[0.04] backdrop-blur-md",
    cardBorder: "border border-white/10",
    cardShadow: "shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
    cardRadius: "rounded-2xl",
    cardGap: "gap-2",
    thumbRadius: "rounded-xl",
    nameColor: "text-white",
    descColor: "text-white/40",
    priceColor: "text-amber-400",
    priceFontClass: "font-bold",
    vegColor: "border-green-400 bg-green-400",
    nonVegColor: "border-red-400 bg-red-400",
    accentGlow: true,
  },

  // ─── Premium modern coffee app: warm pastel, bubbly cards, no neon ───
  "playful-cafe": {
    id: "playful-cafe",
    fontClass: "font-sans",
    screenBg: "bg-gradient-to-b from-[#FFF6EC] to-[#FCEEDD]",
    headingColor: "text-[#402E24]",
    subTextColor: "text-[#B49A87]",
    logoBg: "bg-gradient-to-br from-[#E8935A] to-[#C96A3E]",
    logoText: "text-white",
    logoRadius: "rounded-2xl",
    openBadgeBg: "bg-[#DCEEDA]",
    openBadgeText: "text-[#3B8A54]",
    ratingBg: "bg-[#FCE4C8]",
    ratingText: "text-[#B4652A]",
    searchBg: "bg-white",
    searchTextColor: "text-[#C4A88F]",
    searchIconColor: "text-[#D9A776]",
    searchRadius: "rounded-full",
    chipActiveBg: "bg-[#C96A3E]",
    chipActiveText: "text-white",
    chipInactiveBg: "bg-white",
    chipInactiveText: "text-[#B49A87]",
    chipRadius: "rounded-full",
    layout: "card",
    cardBg: "bg-white",
    cardBorder: "border border-[#F3DFC8]",
    cardShadow: "shadow-[0_10px_24px_rgba(201,106,62,0.12)]",
    cardRadius: "rounded-[1.75rem]",
    cardGap: "gap-2.5",
    thumbRadius: "rounded-[1.1rem]",
    nameColor: "text-[#402E24]",
    descColor: "text-[#B49A87]",
    priceColor: "text-[#C96A3E]",
    priceFontClass: "font-extrabold",
    vegColor: "border-green-500 bg-green-500",
    nonVegColor: "border-red-500 bg-red-500",
  },

  // ─── Classic European bistro: parchment, leather ink, ornamental dividers ───
  "vintage-bistro": {
    id: "vintage-bistro",
    fontClass: "font-serif",
    screenBg: "bg-[#EDE1C4]",
    screenPattern: {
      backgroundImage:
        "radial-gradient(circle at 15% 20%, rgba(120,95,50,0.10), transparent 40%), radial-gradient(circle at 85% 75%, rgba(120,95,50,0.10), transparent 45%), repeating-linear-gradient(0deg, rgba(80,60,20,0.025) 0px, rgba(80,60,20,0.025) 1px, transparent 1px, transparent 3px)",
    },
    headingColor: "text-[#3F3226]",
    subTextColor: "text-[#8A7A5D]",
    logoBg: "bg-[#3F3226]",
    logoText: "text-[#EDE1C4]",
    logoRadius: "rounded-full",
    openBadgeBg: "bg-transparent border border-[#3F3226]/50",
    openBadgeText: "text-[#3F3226]",
    ratingBg: "bg-transparent border border-[#3F3226]/50",
    ratingText: "text-[#3F3226]",
    searchBg: "bg-[#E4D7B4] border border-[#B7A374]",
    searchTextColor: "text-[#8A7A5D]",
    searchIconColor: "text-[#8A7A5D]",
    searchRadius: "rounded-none",
    chipActiveBg: "bg-[#3F3226]",
    chipActiveText: "text-[#EDE1C4]",
    chipInactiveBg: "bg-transparent border border-[#8A7A5D]/50",
    chipInactiveText: "text-[#7A6A52]",
    chipRadius: "rounded-none",
    layout: "divider",
    cardBg: "bg-transparent",
    cardBorder: "",
    cardShadow: "",
    cardRadius: "rounded-none",
    cardGap: "gap-0",
    thumbRadius: "rounded-full",
    nameColor: "text-[#3F3226]",
    descColor: "text-[#7A6A52]",
    priceColor: "text-[#6B4A1E]",
    priceFontClass: "font-bold",
    vegColor: "border-green-800 bg-green-800",
    nonVegColor: "border-red-800 bg-red-800",
    dividerColor: "border-[#B7A374]",
    ornament: "❦",
  },

  // ─── Luxury grill house: matte black, copper, sharp industrial edges ───
  "modern-grill": {
    id: "modern-grill",
    fontClass: "font-sans",
    screenBg: "bg-[#141414]",
    screenPattern: {
      backgroundImage: "repeating-linear-gradient(115deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 10px)",
    },
    headingColor: "text-white",
    subTextColor: "text-white/40",
    logoBg: "bg-[#B5561F]",
    logoText: "text-white",
    logoRadius: "rounded-none",
    openBadgeBg: "bg-[#B5561F]/15 border border-[#B5561F]/50",
    openBadgeText: "text-[#E08A4A]",
    ratingBg: "bg-white/5 border border-white/10",
    ratingText: "text-white",
    searchBg: "bg-white/5 border border-white/10",
    searchTextColor: "text-white/30",
    searchIconColor: "text-white/30",
    searchRadius: "rounded-none",
    chipActiveBg: "bg-[#B5561F]",
    chipActiveText: "text-white",
    chipInactiveBg: "bg-white/5 border border-white/10",
    chipInactiveText: "text-white/50",
    chipRadius: "rounded-none",
    layout: "card",
    cardBg: "bg-[#1C1C1C]",
    cardBorder: "border-l-2 border-[#B5561F] border-y border-r border-y-white/5 border-r-white/5",
    cardShadow: "shadow-[0_8px_20px_rgba(0,0,0,0.5)]",
    cardRadius: "rounded-none",
    cardGap: "gap-1.5",
    thumbRadius: "rounded-none",
    nameColor: "text-white",
    descColor: "text-white/40",
    priceColor: "text-[#E08A4A]",
    priceFontClass: "font-bold tracking-wide",
    vegColor: "border-green-400 bg-green-400",
    nonVegColor: "border-red-400 bg-red-400",
  },
};
