export interface WebsitePricingTrack {
  id: string;
  name: string;
  startingPrice: string;
  description: string;
  features: string[];
  ctaLink: string;
}

export interface QRMenuTier {
  id: string;
  name: string;
  price: string;
  renewalPrice?: string;
  billingNote: string;
  includesBackend: boolean;
  extraButton: string;
  description: string;
  features: string[];
}

export interface ProductPricingCard {
  id: string;
  name: string;
  status: "live" | "coming-soon";
  priceRange: string;
  description: string;
  link?: string;
}

export const websiteTracks: WebsitePricingTrack[] = [
  {
    id: "clinicTrack",
    name: "Clinics, Salons & Services",
    startingPrice: "₹5,999",
    description: "High-performance websites tailored for dental clinics, general physicians, beauty salons, gyms, and local service providers.",
    features: [
      "Custom UI/UX Design",
      "Mobile-First Responsive Layout",
      "Core SEO Optimization",
      "Google Maps & Contact Integration",
      "Optional Booking System Add-on"
    ],
    ctaLink: "/contact?source=clinic-website"
  },
  {
    id: "restaurantTrack",
    name: "Restaurants & Hospitality",
    startingPrice: "₹15,000",
    description: "Premium digital experiences for dining venues, cafes, lounges, hotels, and pg accommodations with direct customer interaction.",
    features: [
      "High-Fidelity Visual Theme",
      "Contactless QR Menu Integration",
      "Table Booking & Reservation Form",
      "Zero Third-Party Commission System",
      "SMS or WhatsApp Alerts Integration"
    ],
    ctaLink: "/contact?source=restaurant-website"
  }
];

export const qrMenuTiers: QRMenuTier[] = [
  {
    id: "view-only",
    name: "View Only",
    price: "[PRICE TBD]",
    billingNote: "one-time setup",
    includesBackend: false,
    extraButton: "Google Review button",
    description: "Browse menu, no ordering. Perfect for cafes and lounges wanting digital hygiene.",
    features: [
      "Contactless QR Scan",
      "Stunning Custom Digital Menu",
      "Google Review Integration",
      "Instant Menu Updates"
    ]
  },
  {
    id: "bundled",
    name: "View + Update (bundled)",
    price: "₹999",
    billingNote: "one-time setup",
    includesBackend: false,
    extraButton: "Google Review button",
    description: "Menu editable in the same admin panel as your main website. Streamlined setup.",
    features: [
      "All View Only Features",
      "Integrated Website Admin Panel",
      "No Coding Required to Edit Prices",
      "Priority Theme Setup"
    ]
  },
  {
    id: "standalone",
    name: "Standalone QR + Admin",
    price: "₹1,499",
    renewalPrice: "₹999",
    billingNote: "first year",
    includesBackend: true,
    extraButton: "Google Review button",
    description: "Your own dedicated admin dashboard to update menu and manage orders. No third-party system needed.",
    features: [
      "Standalone Admin Dashboard",
      "Order Management Panel",
      "Instant Menu & Pricing Control",
      "Analytics & Visitor Traffic Insights",
      "First Year Hosting Included"
    ]
  },
  {
    id: "order-payment",
    name: "QR + Order + Payment",
    price: "[PRICE TBD]",
    billingNote: "per year",
    includesBackend: true,
    extraButton: "Waiter Call button",
    description: "Full end-to-end ordering and secure payment backend. Turn every table into an automated checkout.",
    features: [
      "Digital Table Ordering",
      "UPI & Credit Card Payment Gateway",
      "Waiter Notification Desk",
      "Instant Kitchen Ticket Generation"
    ]
  },
  {
    id: "pos-integration",
    name: "QR + POS Integration",
    price: "[PRICE TBD]",
    billingNote: "per year",
    includesBackend: true, // partial
    extraButton: "Waiter Call + Google Review",
    description: "Direct orders and payment handled by standard POS (like Petpooja). Panel scoped to waiter-call & reviews.",
    features: [
      "Seamless Petpooja / POS Sync",
      "Waiter Call Routing",
      "Google Review Funnel",
      "Unified Kitchen Print Integration"
    ]
  },
  {
    id: "tv-addon",
    name: "+ Android TV Add-on",
    price: "[PRICE TBD]",
    billingNote: "one-time or addon",
    includesBackend: true,
    extraButton: "N/A",
    description: "Live order-status screen for display in the kitchen, counter, or customer waiting area.",
    features: [
      "Real-time Order Status Board",
      "Kitchen Queue Display",
      "Compatible with Android Smart TVs",
      "Self-updating status tickets"
    ]
  }
];

export const bundlePricing = {
  restaurantWebAndAdmin: "[PRICE TBD]"
};

export const productsList: ProductPricingCard[] = [
  {
    id: "qr-menu",
    name: "Digital QR Menu",
    status: "live",
    priceRange: "₹999 — ₹1,499+",
    description: "Contactless digital menu and order management workflows for smart dining venues.",
    link: "/products/qr-menu"
  },
  {
    id: "gym-mgmt",
    name: "Gym Management Software",
    status: "coming-soon",
    priceRange: "[PRICE TBD]",
    description: "Member management, subscription tracking, and attendance system for fitness clubs."
  },
  {
    id: "school-soft",
    name: "School & Coaching Software",
    status: "coming-soon",
    priceRange: "[PRICE TBD]",
    description: "Fee records, student progress tracking, and batch scheduling made painless."
  }
];
