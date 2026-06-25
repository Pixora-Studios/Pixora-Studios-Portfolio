export interface Project {
  id: number;
  slug: string;
  name: string;
  industry: string;
  category: string;
  tech: string[];
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  image: string;
  video?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "prachis-dental-hub",
    name: "Prachi's Dental Hub",
    industry: "Dental Clinic",
    category: "Clinics",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
    description: "A premium digital presence for one of Bhubaneswar's leading dental clinics.",
    challenge: "The clinic relied entirely on word-of-mouth and had no way for new patients to find their services or location online.",
    solution: "We built a high-performance, SEO-optimized website that showcases their expertise and includes a direct WhatsApp booking integration.",
    features: [
      "Service-specific landing pages",
      "One-click WhatsApp appointment booking",
      "Google Maps integration",
      "Patient testimonial section",
    ],
    results: [
      "40% increase in monthly inquiries",
      "Page 1 ranking for 'Dental Clinic Bhubaneswar'",
      "Reduced front-desk booking time",
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    link: "https://prachisdentalhub.in",
  },
  {
    id: 2,
    slug: "pearl-32-dental",
    name: "Pearl 32 Dental",
    industry: "Dental Clinic",
    category: "Clinics",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description: "A complete appointment booking ecosystem for a multi-specialty clinic.",
    challenge: "Managing appointments manually led to scheduling conflicts and missed follow-ups.",
    solution: "Developed a custom booking system with an admin dashboard for the clinic staff to manage patient slots in real-time.",
    features: [
      "Real-time slot availability",
      "Automated appointment reminders",
      "Staff management dashboard",
      "Patient record history",
    ],
    results: [
      "Zero scheduling conflicts in 6 months",
      "50% reduction in no-show rates",
      "Streamlined patient onboarding",
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "monarchs-mug",
    name: "The Monarch's Mug",
    industry: "Cafe",
    category: "Cafes",
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    description: "A cinematic digital experience for a boutique specialty coffee house.",
    challenge: "The cafe needed a way to showcase its unique aesthetic and attract younger, tech-savvy customers.",
    solution: "A visually immersive website with smooth animations and a digital menu that feels as premium as their coffee.",
    features: [
      "Interactive digital menu",
      "Event promotion section",
      "Instagram feed integration",
      "Local SEO optimization",
    ],
    results: [
      "25% increase in weekend foot traffic",
      "Viral growth on local social media",
      "3x more website visits than competitors",
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "fitlife-gym",
    name: "FitLife Gym",
    industry: "Gym",
    category: "Gyms",
    tech: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    description: "High-energy membership portal for a premium fitness center.",
    challenge: "Prospects couldn't easily see membership plans or trainer profiles, leading to fewer sign-ups.",
    solution: "A fast, mobile-first site highlighting equipment, plans, and success stories with clear CTAs.",
    features: [
      "Membership plan comparison",
      "Trainer profile showcase",
      "Class schedule timetable",
      "BMI calculator integration",
    ],
    results: [
      "20% boost in online membership inquiries",
      "Reduced repetitive pricing calls",
      "Improved brand authority in the local area",
    ],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "spice-garden",
    name: "Spice Garden",
    industry: "Restaurant",
    category: "Restaurants",
    tech: ["Next.js", "MongoDB", "Express", "Tailwind"],
    description: "Table reservation and digital menu system for an authentic Odia restaurant.",
    challenge: "Third-party reservation apps were charging high commissions for every table booked.",
    solution: "An independent table booking system that allows the restaurant to manage reservations without extra fees.",
    features: [
      "Direct table booking engine",
      "Digital QR-code menu",
      "Admin order management",
      "Special offer banners",
    ],
    results: [
      "Saved ₹15,000+ per month in commission fees",
      "Built a direct customer database",
      "Improved weekend table turnover",
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "nextgen-coaching",
    name: "NextGen Coaching",
    industry: "Institute",
    category: "Institutes",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    description: "A lead-generation powerhouse for a competitive exam coaching center.",
    challenge: "The institute was struggling to capture leads from their offline marketing campaigns.",
    solution: "A conversion-focused site with lead magnets, course details, and an automated inquiry system.",
    features: [
      "Course-specific inquiry forms",
      "Downloadable study resources",
      "Success story carousels",
      "Integrated blog for SEO",
    ],
    results: [
      "50+ leads generated in the first month",
      "Higher conversion rate from Google Ads",
      "Established as a digital-first institute",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];
