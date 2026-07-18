/**
 * Project data model for the Pixora Studios public portfolio.
 *
 * APPROVED PROJECTS ONLY. Do not add projects without explicit approval.
 *
 * Adding a new project:
 *   1. Add a new entry to the `projects` array below.
 *   2. The Portfolio page, ItemList schema, and sitemap update automatically.
 *   3. Do not edit PortfolioClient.tsx, page.tsx layout, or any schema file manually.
 *
 * visualType controls the visual treatment rendered for the project card/panel.
 *   'restaurant' | 'nightlife' | 'standard'
 *   This is an internal presentation type — not exposed to users as a filter.
 */

export type VisualType = "restaurant" | "nightlife" | "standard";

export interface Project {
  id: number;
  slug: string;
  name: string;
  /** Short, capitalised industry label shown in the case study header. */
  industry: string;
  /**
   * One-line editorial label displayed as the project's category badge.
   * Format: "NN / INDUSTRY TYPE DESCRIPTOR"
   * Example: "01 / RESTAURANT DIGITAL EXPERIENCE"
   */
  label: string;
  /** Short punchy statement used as a pull-quote on the portfolio listing. */
  shortStatement: string;
  /** Full editorial description used in the portfolio listing and meta tags. */
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  image: string;
  link?: string;
  tech: string[];
  video?: string;
  /** Project tags displayed as "CORE SYSTEM CONCEPTS" chips in the listing. */
  tags: string[];
  /**
   * Internal presentation type. Maps to a reusable visual treatment.
   * Do not expose this to users as a category filter.
   */
  visualType: VisualType;
  updatedAt: string;
  gallery?: string[];
  aeo?: {
    built: string;
    solved: string;
    tech: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "bangalore-express",
    name: "Bangalore Express",
    industry: "Restaurant",
    label: "01 / RESTAURANT DIGITAL EXPERIENCE",
    shortStatement: "A restaurant experience built around discovery.",
    description:
      "From finding the restaurant to exploring the menu, the experience is designed to make the next customer action feel obvious. Optimized for local SEO and answer engines to bring foot traffic near KIIT.",
    challenge:
      "The restaurant needed to capture high-intent search and voice queries for KIIT-area students and families, standing out within Bhubaneswar's competitive student dining landscape.",
    solution:
      "We built a high-performance, local SEO-optimized, conversion-focused Next.js site featuring full AEO answer blocks, reservation inquiry systems, dynamic menus, and rich social proof.",
    features: [
      "Interactive Digital Menu System",
      "Table Reservation Inquiry Form",
      "AEO FAQ Answer Blocks",
      "Google Reviews Integration",
      "Customer Photo Gallery",
    ],
    tags: [
      "Digital Menu",
      "Restaurant Discovery",
      "Reservation Inquiry",
      "AEO / Local Search",
    ],
    visualType: "restaurant",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "AEO Schema"],
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
    updatedAt: "2026-05-15",
    link: "https://bangalore-express.pixorastudios.com",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2070&auto=format&fit=crop",
    ],
    aeo: {
      built:
        "Pixora Studios built a high-performance, responsive single-page marketing and informational website for Bangalore Express, a family restaurant and Chinese café near KIIT, Bhubaneswar. The platform features an interactive digital menu system, a table reservation inquiry form, integrated Google Reviews, and a customer photo gallery.",
      solved:
        "The website solved the client's lack of digital visibility in a highly competitive student and family dining area. By implementing speed-optimized page loading and local Search and Answer Engine Optimization (SEO/AEO), the platform helps Bangalore Express capture search and voice queries for dining options near the KIIT campus, transforming online interest into foot traffic and direct table reservations.",
      tech: "The platform was built using Next.js for server-side optimization, Tailwind CSS for custom styling, Framer Motion for smooth interface transitions, and custom schema-based AEO markup to ensure structured readability by AI engines and search crawlers.",
    },
  },
  {
    id: 2,
    slug: "sovereign",
    name: "SOVEREIGN",
    industry: "Nightclub",
    label: "02 / NIGHTLIFE DIGITAL EXPERIENCE",
    shortStatement: "A nightlife experience built around atmosphere.",
    description:
      "SOVEREIGN needed a digital presence that felt like the brand itself. Dark, controlled and intentionally different. Built with a premium, exclusive visual funnel and rituals showcase.",
    challenge:
      "As a premium nightlife brand, SOVEREIGN needed a digital presence that communicated exclusivity, mood, and luxury entirely through design, with minimal copy but a clear reservation funnel.",
    solution:
      "We developed a sophisticated, dark-luxe aesthetic multi-page Next.js site featuring a table reservation funnel, detailed menus, interactive galleries, weekly night rituals, and dark-themed layouts.",
    features: [
      "Dark-Luxe Visual Aesthetic",
      "Multi-page Architecture",
      "Table Reservation Funnel",
      "Weekly Night Rituals Showcase",
      "Premium Cocktail Menu",
      "Interactive FAQ Block",
    ],
    tags: [
      "Premium Visual Identity",
      "Rituals Showcase",
      "Reservation Funnel",
      "Multi-page System",
    ],
    visualType: "nightlife",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Multi-page Architecture"],
    image:
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2070&auto=format&fit=crop",
    updatedAt: "2026-04-20",
    link: "https://sovereign.pixorastudios.com",
    gallery: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2070&auto=format&fit=crop",
    ],
    aeo: {
      built:
        "Pixora Studios built a premium, dark-luxe multi-page brand website for SOVEREIGN, an exclusive lounge and nightclub located in Patia, Bhubaneswar. The website includes dedicated pages for their story, digital menus, weekly ritual schedules, interactive galleries, table reservation funnels, and a custom FAQ interface.",
      solved:
        "The website solved the challenge of establishing a premium, exclusive brand identity online. By relying on a sophisticated, dark-aesthetic design and minimal, high-impact copy, it communicates the venue's exclusive atmosphere and luxury mood, while establishing a direct, frictionless table booking and inquiry system that functions independently of third-party platforms.",
      tech: "The website was developed using Next.js with a multi-page dynamic architecture, Tailwind CSS for custom dark-mode styled layouts, Framer Motion for premium, subtle page-entry animations, and custom structured JSON-LD data for enhanced search listing previews.",
    },
  },
];


