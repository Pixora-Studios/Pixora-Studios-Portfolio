export interface Service {
  id: number;
  title: string;
  problem: string;
  solution: string;
  description: string;
  benefits: string[];
  included: string[];
  icon: string;
  image?: string;
  link?: string;
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
    image: "https://images.pexels.com/photos/8128192/pexels-photo-8128192.jpeg",
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
    image: "https://images.pexels.com/photos/4266932/pexels-photo-4266932.jpeg",
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
    image: "https://images.pexels.com/photos/16345589/pexels-photo-16345589.jpeg",
  },
  {
    id: 4,
    title: "Email Notification & CRM Integration",
    problem: "Manual follow-ups slow your business down.",
    solution: "Keep your clients informed instantly with smart email and CRM automations that save time and improve response rates.",
    description: "Automated notifications and CRM workflows that keep every appointment and lead moving smoothly.",
    benefits: ["Instant communication", "Fewer missed follow-ups", "Better client retention", "More organized operations"],
    included: ["Email Automation", "CRM Setup", "Appointment Alerts", "Lead Tracking"],
    icon: "📧",
    image: "https://images.pexels.com/photos/8284722/pexels-photo-8284722.jpeg",
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
    image: "https://images.pexels.com/photos/16629436/pexels-photo-16629436.jpeg",
  },
  {
    id: 6,
    title: "Brand Identity & UI/UX Design",
    problem: "Your visual identity should work as hard as your business.",
    solution: "We create thoughtful brand systems and interfaces that make your business feel polished, memorable, and trustworthy.",
    description: "Clean, modern design systems for logos, visuals, and user experiences that support growth.",
    benefits: ["Stronger brand presence", "More polished user experience", "Higher trust and credibility", "Consistent visual direction"],
    included: ["Logo & Brand Direction", "Color & Typography Systems", "UI/UX Design", "Design Mockups"],
    icon: "🎨",
    image: "https://images.pexels.com/photos/4463588/pexels-photo-4463588.jpeg",
  },
  {
    id: 7,
    title: "Hosting, Maintenance & Support",
    problem: "Don't let technical debt slow you down.",
    solution: "We handle the technical side—hosting, security, and updates—so you can focus 100% on growing your business.",
    description: "We handle the technical side. You focus on your business with our monthly support plans.",
    benefits: ["99.9% Uptime guarantee", "Priority support", "Regular security audits", "Monthly content updates"],
    included: ["Fast Managed Hosting", "SSL Certificate", "Daily Backups", "Technical Support"],
    icon: "🛠",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
  },
  {
    id: 8,
    title: "Digital QR Menu",
    problem: "Frictionless dining starts with a scan.",
    solution: "A fast, mobile-optimized digital menu that requires no app download. Perfect for restaurants, cafes, and bars.",
    description: "Modern digital menus with instant updates for restaurants and cafes.",
    benefits: ["No app download required", "Instant menu updates", "Mobile-optimized UI", "Eco-friendly solution"],
    included: ["Digital Menu Software", "Custom Design Skin", "QR Code Generation", "Analytics Dashboard"],
    icon: "📱",
    image: "https://images.pexels.com/photos/5932727/pexels-photo-5932727.jpeg",
    link: "/services/qr-menu",
  },
];
