export interface QRPricingPlan {
  id: string;
  name: string;
  price: number;
  renewalPrice?: number;
  billingNote: string;
  requiresWebsite: boolean;
  features: string[];
}

export interface MenuDesign {
  id: string;
  name: string;
  styleTag: "Minimal" | "Editorial" | "Dark Cinematic" | "Playful" | "Vintage" | "Modern";
  description: string;
  previewColor: string; // Used for dummy mockup
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
    previewColor: "#F8F8FF",
  },
  {
    id: "editorial",
    name: "Editorial",
    styleTag: "Editorial",
    description: "Magazine-style layout with bold headlines.",
    previewColor: "#FFF5E6",
  },
  {
    id: "dark-cinematic",
    name: "Dark Cinematic",
    styleTag: "Dark Cinematic",
    description: "High-contrast dark theme for premium lounges.",
    previewColor: "#0A0A0F",
  },
  {
    id: "playful-cafe",
    name: "Playful Cafe",
    styleTag: "Playful",
    description: "Vibrant colors and friendly rounded fonts.",
    previewColor: "#FFEDEB",
  },
  {
    id: "vintage-bistro",
    name: "Vintage Bistro",
    styleTag: "Vintage",
    description: "Classic serif fonts and parchment textures.",
    previewColor: "#F4EBD0",
  },
  {
    id: "modern-grill",
    name: "Modern Grill",
    styleTag: "Modern",
    description: "Sleek, tech-forward look with neon accents.",
    previewColor: "#1A1A1A",
  },
];

export const qrStands: QRStand[] = [
  {
    id: "clear-crystal",
    name: "Clear Crystal",
    material: "acrylic",
    price: 349,
  },
  {
    id: "frost-block",
    name: "Frost Block",
    material: "acrylic",
    price: 399,
  },
  {
    id: "noir-stand",
    name: "Noir Stand",
    material: "acrylic",
    price: 449,
  },
  {
    id: "azure-base",
    name: "Azure Base",
    material: "acrylic",
    price: 499,
  },
  {
    id: "brushed-gold",
    name: "Brushed Gold",
    material: "metallic",
    price: 799,
  },
  {
    id: "titanium-slim",
    name: "Titanium Slim",
    material: "metallic",
    price: 849,
  },
  {
    id: "copper-loop",
    name: "Copper Loop",
    material: "metallic",
    price: 899,
  },
  {
    id: "steel-wedge",
    name: "Steel Wedge",
    material: "metallic",
    price: 749,
  },
];

export const standBundles: StandBundle[] = [
  {
    id: "set-4",
    label: "Set of 4",
    quantity: 4,
    bundlePrice: 1249,
    note: "Perfect for small cafes",
  },
  {
    id: "set-6",
    label: "Set of 6",
    quantity: 6,
    bundlePrice: 1799,
    note: "Our most popular choice",
  },
  {
    id: "set-10",
    label: "Set of 10",
    quantity: 10,
    bundlePrice: 2899,
    note: "Best value for restaurants",
  },
];
