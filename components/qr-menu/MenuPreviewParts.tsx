"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Search, Star, SignalHigh, Wifi, BatteryFull } from "lucide-react";
import type { MenuTheme } from "@/lib/data/menuThemes";
import type { MenuPreviewItem } from "@/lib/data/qrMenuData";
import { FoodThumbnail } from "./FoodThumbnail";

export function PhoneFrame({
  children,
  glow,
}: {
  children: React.ReactNode;
  glow?: boolean;
}) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {glow && (
        <div className="absolute inset-6 rounded-[3rem] bg-amber-400/20 blur-2xl -z-10" />
      )}

      {/* Side buttons — outside the bezel, like a real device */}
      <div className="absolute -left-[2px] top-[26%] w-[2px] h-6 bg-neutral-700 rounded-l-sm z-40" />
      <div className="absolute -left-[2px] top-[34%] w-[2px] h-10 bg-neutral-700 rounded-l-sm z-40" />
      <div className="absolute -right-[2px] top-[30%] w-[2px] h-14 bg-neutral-700 rounded-r-sm z-40" />

      <div className="relative w-full max-w-[210px] aspect-[9/19.5] bg-black rounded-[2.4rem] border-[5px] border-black shadow-[0_25px_50px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
        {/* Dynamic Island */}
        <div className="absolute top-[7px] left-1/2 -translate-x-1/2 w-14 h-[18px] bg-black rounded-full z-30 flex items-center justify-end pr-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
        </div>
        {/* Screen */}
        <div className="absolute inset-0 rounded-[2rem] overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

function StatusBar({ textClass }: { textClass: string }) {
  return (
    <div className={`flex items-center justify-between px-4 pt-2 pb-0.5 text-[8px] font-semibold shrink-0 ${textClass}`}>
      <span>9:41</span>
      <div className="flex items-center gap-0.5">
        <SignalHigh className="w-2.5 h-2.5" />
        <Wifi className="w-2.5 h-2.5" />
        <BatteryFull className="w-3 h-3" />
      </div>
    </div>
  );
}

export function MenuHeader({ theme }: { theme: MenuTheme }) {
  return (
    <div className="flex items-center gap-2 px-3 shrink-0">
      <div
        className={`w-8 h-8 flex items-center justify-center text-xs font-bold shrink-0 ${theme.logoBg} ${theme.logoText} ${theme.logoRadius}`}
        style={{ minWidth: 32, minHeight: 32 }}
      >
        B
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <h3 className={`text-[10px] font-bold truncate ${theme.headingColor} ${theme.fontClass}`}>Birch Cafe</h3>
          <span
            className={`px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-wide shrink-0 rounded-full ${theme.openBadgeBg} ${theme.openBadgeText}`}
          >
            Open
          </span>
        </div>
        <p className={`text-[7px] truncate ${theme.subTextColor}`}>Cafe • Fine Dining</p>
      </div>
      <div className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded-full shrink-0 ${theme.ratingBg}`}>
        <Star className={`w-2 h-2 fill-current ${theme.ratingText}`} />
        <span className={`text-[7px] font-bold ${theme.ratingText}`}>4.8</span>
      </div>
    </div>
  );
}

export function SearchBar({ theme }: { theme: MenuTheme }) {
  return (
    <div className={`flex items-center gap-1.5 mx-3 px-2.5 py-1.5 shrink-0 ${theme.searchRadius} ${theme.searchBg}`}>
      <Search className={`w-2.5 h-2.5 shrink-0 ${theme.searchIconColor}`} />
      <span className={`text-[8px] ${theme.searchTextColor}`}>Search menu...</span>
    </div>
  );
}

export function CategoryTabs({ theme, categories }: { theme: MenuTheme; categories: string[] }) {
  return (
    <div className="flex gap-1.5 px-3 overflow-hidden shrink-0">
      {categories.map((cat, i) => (
        <span
          key={cat}
          className={`shrink-0 px-2.5 py-1 text-[7px] font-bold whitespace-nowrap ${theme.chipRadius} ${
            i === 1 ? `${theme.chipActiveBg} ${theme.chipActiveText}` : `${theme.chipInactiveBg} ${theme.chipInactiveText}`
          }`}
        >
          {cat}
        </span>
      ))}
    </div>
  );
}

function VegDot({ theme, veg }: { theme: MenuTheme; veg: boolean }) {
  const [borderClass, bgClass] = (veg ? theme.vegColor : theme.nonVegColor).split(" ");
  return (
    <span
      className={`rounded-sm border flex items-center justify-center shrink-0 ${borderClass}`}
      style={{ width: 8, height: 8, minWidth: 8, minHeight: 8 }}
    >
      <span className={`rounded-full ${bgClass}`} style={{ width: 2, height: 2 }} />
    </span>
  );
}

export const MenuCard = memo(function MenuCard({
  item,
  theme,
  isLast,
}: {
  item: MenuPreviewItem;
  theme: MenuTheme;
  isLast: boolean;
}) {
  if (theme.layout === "divider") {
    return (
      <div>
        <div className="flex items-center gap-2 py-2">
          <FoodThumbnail kind={item.thumb} tone={item.tone} size={36} radiusClass={theme.thumbRadius} className="shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <VegDot theme={theme} veg={item.veg} />
              <h4 className={`text-[9px] font-semibold truncate ${theme.nameColor} ${theme.fontClass}`}>{item.name}</h4>
            </div>
            <p className={`text-[7px] truncate mt-0.5 ${theme.descColor}`}>{item.desc}</p>
          </div>
          <p className={`text-[9px] shrink-0 ${theme.priceColor} ${theme.priceFontClass}`}>{item.price}</p>
        </div>
        {!isLast &&
          (theme.ornament ? (
            <div className="flex items-center gap-2">
              <span className={`flex-1 border-t ${theme.dividerColor ?? "border-neutral-200"}`} />
              <span className={`text-[7px] shrink-0 ${theme.subTextColor}`}>{theme.ornament}</span>
              <span className={`flex-1 border-t ${theme.dividerColor ?? "border-neutral-200"}`} />
            </div>
          ) : (
            <div className={`border-t ${theme.dividerColor ?? "border-neutral-200"}`} />
          ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 p-1.5 shrink-0 ${theme.cardBg} ${theme.cardBorder} ${theme.cardShadow} ${theme.cardRadius}`}>
      <FoodThumbnail kind={item.thumb} tone={item.tone} size={36} radiusClass={theme.thumbRadius} className="shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <VegDot theme={theme} veg={item.veg} />
          <h4 className={`text-[9px] font-bold truncate ${theme.nameColor} ${theme.fontClass}`}>{item.name}</h4>
        </div>
        <p className={`text-[7px] truncate mt-0.5 ${theme.descColor}`}>{item.desc}</p>
      </div>
      <p className={`text-[9px] shrink-0 ${theme.priceColor} ${theme.priceFontClass}`}>{item.price}</p>
    </div>
  );
});

export function MenuPreviewScreen({
  theme,
  items,
  categories,
  scrollDurationSec = 26,
}: {
  theme: MenuTheme;
  items: MenuPreviewItem[];
  categories: string[];
  /** Full loop duration for the auto-scroll — pass a different number per theme so each phone feels alive. */
  scrollDurationSec?: number;
}) {
  // Reduced number of items (from 12 to 6) and then duplicated to significantly lower DOM node count per phone.
  // In a marquee with ~15 phones, this saves ~180 DOM nodes.
  const previewItems = items.slice(0, 6);
  const loopItems = [...previewItems, ...previewItems];

  return (
    <div className={`absolute inset-0 flex flex-col gap-2 pt-1 pb-2 ${theme.screenBg}`} style={theme.screenPattern}>
      <StatusBar textClass={theme.headingColor} />
      <MenuHeader theme={theme} />
      <SearchBar theme={theme} />
      <CategoryTabs theme={theme} categories={categories} />
      <div className="relative flex-1 overflow-hidden px-3">
        {/* Fade masks */}
        <div
          className={`absolute inset-x-3 top-0 h-4 z-10 pointer-events-none ${theme.screenBg}`}
          style={{ ...theme.screenPattern, WebkitMaskImage: "linear-gradient(to bottom, black, transparent)", maskImage: "linear-gradient(to bottom, black, transparent)" }}
        />
        <div
          className={`absolute inset-x-3 bottom-0 h-4 z-10 pointer-events-none ${theme.screenBg}`}
          style={{ ...theme.screenPattern, WebkitMaskImage: "linear-gradient(to top, black, transparent)", maskImage: "linear-gradient(to top, black, transparent)" }}
        />

        {/* CSS-based vertical marquee for better performance than motion.div */}
        <div
          className={`flex flex-col ${theme.cardGap}`}
          style={{
            animation: `pixora-menu-vertical-scroll ${scrollDurationSec}s linear infinite`,
            willChange: "transform",
          }}
        >
          {loopItems.map((item, i) => (
            <MenuCard key={`${item.id}-${i}`} item={item} theme={theme} isLast={i === loopItems.length - 1} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes pixora-menu-vertical-scroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
