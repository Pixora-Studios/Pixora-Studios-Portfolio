export interface QRPricingPlan {
  id: string;
  name: string;
  price: number;
  renewalPrice?: number;
  billingNote: string;
  requiresWebsite: boolean;
  features: string[];
}

// The visual "kind" a FoodThumbnail should render as a pure-CSS illustration.
export type FoodKind =
  | "arancini"
  | "coffee"
  | "fish"
  | "pizza"
  | "burger"
  | "dessert"
  | "waffle"
  | "mojito"
  | "toast";

export interface MenuDesign {
  id: string;
  name: string;
  styleTag: "Minimal" | "Editorial" | "Dark Cinematic" | "Playful" | "Vintage" | "Modern";
  description: string;
  /** Short punchy line shown large on the hover overlay. */
  tagline: string;
  /** "Perfect for ..." line shown on the hover overlay. */
  perfectFor: string;
  /** How long one full auto-scroll loop takes inside the phone. Every theme is different on purpose. */
  scrollDurationSec: number;
  previewColor: string; // Legacy fallback color, kept for backward compatibility
}

export interface QRStand {
  id: string;
  name: string;
  material: "acrylic" | "metallic";
  price: number;
}

export interface StandBundle {
  id: string;
  label: string;
  quantity: number;
  bundlePrice: number;
  note?: string;
}

export interface MenuPreviewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  veg: boolean;
  category: string;
  /** Which CSS food illustration to render for this item. */
  thumb: FoodKind;
  /** Palette variant so two items of the same kind (e.g. two coffees) don't look identical. */
  tone?: "a" | "b";
}

export const qrPricingPlans: QRPricingPlan[] = [
  {
    id: "bundled",
    name: "Bundled with Website",
    price: 999,
    billingNote: "one-time",
    requiresWebsite: true,
    features: [
      "Unlimited menu items",
      "Instant updates",
      "No app download needed",
      "Basic analytics",
    ],
  },
  {
    id: "standalone",
    name: "QR Menu Only",
    price: 1499,
    renewalPrice: 999,
    billingNote: "first year",
    requiresWebsite: false,
    features: [
      "Unlimited menu items",
      "Instant updates",
      "No app download needed",
      "Advanced analytics",
      "Priority support",
    ],
  },
];

export const menuDesigns: MenuDesign[] = [
  {
    id: "minimal",
    name: "Minimal",
    styleTag: "Minimal",
    description: "Clean typography and lots of white space.",
    tagline: "Effortless simplicity",
    perfectFor: "Perfect for modern cafes & bakeries",
    scrollDurationSec: 24,
    previewColor: "#F8F8FF",
  },
  {
    id: "editorial",
    name: "Editorial",
    styleTag: "Editorial",
    description: "Magazine-style layout with bold headlines.",
    tagline: "Editorial elegance",
    perfectFor: "Perfect for fine dining & wine bars",
    scrollDurationSec: 30,
    previewColor: "#FFF5E6",
  },
  {
    id: "dark-cinematic",
    name: "Dark Cinematic",
    styleTag: "Dark Cinematic",
    description: "High-contrast dark theme for premium lounges.",
    tagline: "Cinematic indulgence",
    perfectFor: "Perfect for lounges & steakhouses",
    scrollDurationSec: 20,
    previewColor: "#0A0A0F",
  },
  {
    id: "playful-cafe",
    name: "Playful Cafe",
    styleTag: "Playful",
    description: "Warm pastels and friendly rounded shapes.",
    tagline: "Warm & inviting",
    perfectFor: "Perfect for coffee shops & bakeries",
    scrollDurationSec: 28,
    previewColor: "#FFEDEB",
  },
  {
    id: "vintage-bistro",
    name: "Vintage Bistro",
    styleTag: "Vintage",
    description: "Classic serif fonts and parchment textures.",
    tagline: "Timeless tradition",
    perfectFor: "Perfect for classic bistros & trattorias",
    scrollDurationSec: 34,
    previewColor: "#F4EBD0",
  },
  {
    id: "modern-grill",
    name: "Modern Grill",
    styleTag: "Modern",
    description: "Sleek, industrial look with copper accents.",
    tagline: "Bold & industrial",
    perfectFor: "Perfect for grill houses & steak bars",
    scrollDurationSec: 22,
    previewColor: "#1A1A1A",
  },
];

export const qrStands: QRStand[] = [
  { id: "clear-crystal", name: "Clear Crystal", material: "acrylic", price: 349 },
  { id: "frost-block", name: "Frost Block", material: "acrylic", price: 399 },
  { id: "noir-stand", name: "Noir Stand", material: "acrylic", price: 449 },
  { id: "azure-base", name: "Azure Base", material: "acrylic", price: 499 },
  { id: "brushed-gold", name: "Brushed Gold", material: "metallic", price: 799 },
  { id: "titanium-slim", name: "Titanium Slim", material: "metallic", price: 849 },
  { id: "copper-loop", name: "Copper Loop", material: "metallic", price: 899 },
  { id: "steel-wedge", name: "Steel Wedge", material: "metallic", price: 749 },
];

export const standBundles: StandBundle[] = [
  { id: "set-4", label: "Set of 4", quantity: 4, bundlePrice: 1249, note: "Perfect for small cafes" },
  { id: "set-6", label: "Set of 6", quantity: 6, bundlePrice: 1799, note: "Our most popular choice" },
  { id: "set-10", label: "Set of 10", quantity: 10, bundlePrice: 2899, note: "Best value for restaurants" },
];

// Shared menu content used to populate every themed phone preview.
// The same data renders differently in each theme via MenuPreviewParts.
export const menuPreviewCategories: string[] = ["All", "Pizza", "Coffee", "Burger", "Dessert"];

// 12 items so the auto-scroll inside each phone feels like a real, living menu.
export const menuPreviewItems: MenuPreviewItem[] = [
  {
    id: "arancini",
    name: "Truffle Arancini",
    desc: "Crispy risotto balls, truffle aioli",
    price: "₹320",
    veg: true,
    category: "All",
    thumb: "arancini",
  },
  {
    id: "cold-brew",
    name: "Cold Brew Coffee",
    desc: "Smooth, bold, slow brewed",
    price: "₹180",
    veg: true,
    category: "Coffee",
    thumb: "coffee",
    tone: "a",
  },
  {
    id: "salmon",
    name: "Grilled Salmon",
    desc: "Herb crust, lemon butter glaze",
    price: "₹650",
    veg: false,
    category: "All",
    thumb: "fish",
  },
  {
    id: "margherita",
    name: "Wood Fired Margherita",
    desc: "San Marzano tomato, fresh basil",
    price: "₹340",
    veg: true,
    category: "Pizza",
    thumb: "pizza",
  },
  {
    id: "bbq-burger",
    name: "Smoky BBQ Burger",
    desc: "Charred patty, house BBQ sauce",
    price: "₹380",
    veg: false,
    category: "Burger",
    thumb: "burger",
    tone: "a",
  },
  {
    id: "choc-tart",
    name: "Dark Chocolate Tart",
    desc: "Sea salt, hazelnut crumble",
    price: "₹260",
    veg: true,
    category: "Dessert",
    thumb: "dessert",
    tone: "a",
  },
  {
    id: "waffle",
    name: "Belgian Waffle",
    desc: "Maple syrup, vanilla ice cream",
    price: "₹220",
    veg: true,
    category: "Dessert",
    thumb: "waffle",
  },
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    desc: "Espresso, steamed milk, caramel drizzle",
    price: "₹190",
    veg: true,
    category: "Coffee",
    thumb: "coffee",
    tone: "b",
  },
  {
    id: "chicken-burger",
    name: "Grilled Chicken Burger",
    desc: "Smoky grilled chicken, lettuce, mayo",
    price: "₹269",
    veg: false,
    category: "Burger",
    thumb: "burger",
    tone: "b",
  },
  {
    id: "lava-cake",
    name: "Choco Lava Cake",
    desc: "Warm molten centre, vanilla scoop",
    price: "₹210",
    veg: true,
    category: "Dessert",
    thumb: "dessert",
    tone: "b",
  },
  {
    id: "mojito",
    name: "Fresh Orange Mojito",
    desc: "Zesty citrus, mint, soda",
    price: "₹150",
    veg: true,
    category: "All",
    thumb: "mojito",
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    desc: "Sourdough, smashed avocado, chili flakes",
    price: "₹230",
    veg: true,
    category: "All",
    thumb: "toast",
  },
];
