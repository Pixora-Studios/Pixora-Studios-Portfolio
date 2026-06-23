export interface Service {
  id: number;
  title: string;
  problem: string;
  solution: string;
  description: string;
  benefits: string[];
  included: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Website Design & Development",
    problem: "Your business deserves more than a template.",
    solution: "We build custom, high-performance websites that reflect your brand's unique identity and convert visitors into customers.",
    description: "Custom business websites built for your brand and your customers using modern tech like Next.js and Tailwind CSS.",
    benefits: ["Unique brand identity", "Ultra-fast load times", "Conversion-optimized layout", "Fully mobile responsive"],
    included: ["Custom UI/UX Design", "Frontend & Backend Development", "Basic SEO Setup", "Contact Form Integration"],
    icon: "🌐",
  },
  {
    id: 2,
    title: "Appointment Booking Systems",
    problem: "Your receptionist can't take calls 24/7. Your website can.",
    solution: "Let patients, clients, or customers book online anytime, anywhere, reducing manual work and increasing efficiency.",
    description: "Automated booking systems that work for you while you sleep. Perfect for clinics and salons.",
    benefits: ["24/7 Availability", "Zero double-bookings", "Automated reminders", "Staff management"],
    included: ["Calendar Integration", "Real-time Slot Checking", "Email/WhatsApp Alerts", "Admin Dashboard"],
    icon: "📅",
  },
  {
    id: 3,
    title: "Restaurant & Table Booking Systems",
    problem: "Stop paying third-party commissions.",
    solution: "Accept reservations directly on your website. Take full control of your customer data and increase your profit margins.",
    description: "Built for cafes and restaurants. No third-party fees, just more direct customers.",
    benefits: ["Save on commission fees", "Direct customer database", "Manage floor capacity", "Digital menu integration"],
    included: ["Table Reservation Engine", "QR Code Menus", "Special Offer Management", "Reservation Tracking"],
    icon: "🍽",
  },
  {
    id: 4,
    title: "WhatsApp Automation & Lead Capture",
    problem: "Don't let visitors leave without saying hello.",
    solution: "Turn your website into a lead machine with seamless WhatsApp integration and automated capture flows.",
    description: "Turn website visitors into WhatsApp leads instantly with smart capture tools.",
    benefits: ["Instant communication", "Higher lead conversion", "Automated follow-ups", "Seamless user experience"],
    included: ["WhatsApp Click-to-Chat", "Lead Magnet Popups", "CRM Integration", "Auto-responder Setup"],
    icon: "💬",
  },
  {
    id: 5,
    title: "SEO & Google Ranking",
    problem: "If you're not on Page 1, you're invisible.",
    solution: "We optimize your site for local search so you're the first thing customers see when they search for your services.",
    description: "Get found when local customers search for your services with our local-first SEO strategy.",
    benefits: ["Rank for local keywords", "Drive organic traffic", "Build local authority", "Long-term growth"],
    included: ["Keyword Research", "On-page Optimization", "GMB Management", "Performance Monitoring"],
    icon: "🔍",
  },
  {
    id: 6,
    title: "Hosting, Maintenance & Support",
    problem: "Don't let technical debt slow you down.",
    solution: "We handle the technical side—hosting, security, and updates—so you can focus 100% on growing your business.",
    description: "We handle the technical side. You focus on your business with our monthly support plans.",
    benefits: ["99.9% Uptime guarantee", "Priority support", "Regular security audits", "Monthly content updates"],
    included: ["Fast Managed Hosting", "SSL Certificate", "Daily Backups", "Technical Support"],
    icon: "🛠",
  },
];
