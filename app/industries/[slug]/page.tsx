import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArrowRight, Sparkles } from "lucide-react";
import { websiteTracks } from "@/lib/pricing-data";

interface IndustryData {
  title: string;
  slug: string;
  h1: string;
  icon: string;
  description: string;
  vertical: string; // Clinics track, Restaurants track, or Custom
  relevantServices: string[];
}

const industriesMap: Record<string, IndustryData> = {
  "restaurants": {
    title: "Restaurant Website Design",
    slug: "restaurants",
    h1: "Restaurant Website & QR Menu Design in Bhubaneswar",
    icon: "🍽",
    description: "Accept table bookings, showcase rich menus, and process orders on your own direct platform. Zero third-party commissions.",
    vertical: "Restaurants & Hospitality",
    relevantServices: ["Contactless QR Menu", "Commission-Free Booking", "SMS/WhatsApp Alerts", "Local SEO Optimization"]
  },
  "clinics": {
    title: "Clinic Website Design",
    slug: "clinics",
    h1: "Clinic & Healthcare Website Design in Bhubaneswar",
    icon: "🦷",
    description: "Build clinical trust online. Let patients read verification reviews, check doctors' credentials, and schedule real-time slots seamlessly.",
    vertical: "Clinics, Salons & Services",
    relevantServices: ["Doctor Calendars", " Patient Review Funnels", "Core Speed Tuning", "Google Maps Integration"]
  },
  "gyms": {
    title: "Gym Website Design",
    slug: "gyms",
    h1: "Gym & Fitness Club Website Design in Bhubaneswar",
    icon: "💪",
    description: "Convert online traffic into active members. Display class timetables, premium amenities, member stories, and easy membership plans.",
    vertical: "Clinics, Salons & Services",
    relevantServices: ["Subscription Tiers", "Class Timetables", "Member Reviews", "Trainer Showcases"]
  },
  "salons": {
    title: "Salon Website Design",
    slug: "salons",
    h1: "Salon & Beauty Spa Website Design in Bhubaneswar",
    icon: "💇",
    description: "Keep your styling chairs filled. Showcase service menus, pricing sheets, stylist portfolios, and accept instant desk bookings.",
    vertical: "Clinics, Salons & Services",
    relevantServices: ["Visual Portfolio Grids", "Stylist Calendars", "Service Tiers", "Automated Booking Alerts"]
  },
  "hotels-pgs": {
    title: "Hotel & PG Website Design",
    slug: "hotels-pgs",
    h1: "Hotel & PG Accommodations Website Design in Bhubaneswar",
    icon: "🏨",
    description: "Increase direct reservations for hotel rooms or PG stays. Highlight room amenities, pricing tiers, local maps, and contactless QR checklists.",
    vertical: "Restaurants & Hospitality",
    relevantServices: ["Direct Room Reservation", "Amenity Checklist Sheets", "Contactless QR Guest Checklists", "Google Review Funnels"]
  },
  "schools-coaching": {
    title: "School & Coaching Center Website Design",
    slug: "schools-coaching",
    h1: "Schools & Coaching Center Website Design in Bhubaneswar",
    icon: "🎓",
    description: "Drive enrollments for batches and programs. Showcase curriculum, teacher credentials, previous results, and easy contact pipelines.",
    vertical: "Clinics, Salons & Services",
    relevantServices: ["Batch Scheduling Pages", "Faculties Directories", "Fee Enquiry Channels", "Google Search Optimization"]
  },
  "real-estate": {
    title: "Real Estate Website Design",
    slug: "real-estate",
    h1: "Real Estate Property Website Design in Bhubaneswar",
    icon: "🏠",
    description: "Capture qualified buyer leads. Exhibit dynamic property maps, unit plans, pricing tracks, and high-fidelity project visuals.",
    vertical: "Clinics, Salons & Services",
    relevantServices: ["Lead Capture Funnels", "Property Feature Lists", "Interactive Google Maps", "Support SLA Plans"]
  }
};

// Generate static params for the 7 key industries
export function generateStaticParams() {
  return Object.keys(industriesMap).map((key) => ({
    slug: key
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = industriesMap[params.slug];
  if (!data) return {};

  return constructMetadata({
    title: `${data.title} in Bhubaneswar | Pixora Studios`,
    description: `Professional, SEO-optimized ${data.title} and digital setup in Bhubaneswar, Odisha. Custom local layouts under ₹${data.vertical.includes("Restaurants") ? "15,000" : "5,999"}.`,
    canonical: `/industries/${data.slug}`,
  });
}

export default async function IndustryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = industriesMap[params.slug];

  if (!data) {
    // If industry slug isn't part of the 7 custom ones, render dynamic template fallback
    const titleFriendly = params.slug
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    const fallbackData: IndustryData = {
      title: `${titleFriendly} Website Design`,
      slug: params.slug,
      h1: `${titleFriendly} Website Design & Setup in Bhubaneswar`,
      icon: "✨",
      description: `Tailor-made digital presence and website builds optimized for ${titleFriendly.toLowerCase()} operations. Build trust and convert local searches into customers.`,
      vertical: "Clinics, Salons & Services",
      relevantServices: ["Custom Core UI/UX", "Local SEO Maps", "Fast Screen Speeds", "Contact Enquiries"]
    };
    return renderPageContent(fallbackData);
  }

  return renderPageContent(data);
}

function renderPageContent(data: IndustryData) {
  const isHospitality = data.vertical.includes("Restaurants");
  const startingPrice = isHospitality ? "₹15,000" : "₹5,999";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixora Studios",
    "image": "https://pixorastudios.com/images/logo.png",
    "telephone": "+91 8455018992",
    "email": "hello@pixorastudios.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Patia",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Organized",
      "postalCode": "751024",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.3533",
      "longitude": "85.8266"
    },
    "url": `https://pixorastudios.com/industries/${data.slug}`,
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${data.title} Services`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pixora Studios",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhubaneswar",
        "addressRegion": "Odisha"
      }
    },
    "serviceType": "Web Design & Development",
    "description": data.description,
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Bhubaneswar"
    }
  };

  return (
    <PageTransition>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <div className="pt-24 md:pt-28 pb-16 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
        <div className="container mx-auto px-6 max-w-4xl pt-8">

          {/* Breadcrumb back */}
          <div className="mb-6">
            <Link
              href="/industries"
              className="text-xs font-mono font-semibold text-primary-light dark:text-primary-dark hover:underline"
            >
              ← All Industries
            </Link>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center mb-12">

            {/* Content Column */}
            <div className="md:col-span-8 space-y-4">
              <span className="text-3xl select-none block mb-2">{data.icon}</span>
              <h1 className="text-2xl md:text-3xl font-display font-black leading-tight text-text-primary-light dark:text-text-primary-dark">
                {data.h1}
              </h1>
              <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-xl">
                {data.description}
              </p>
            </div>

            {/* Empty Visual Slot Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[220px] aspect-square rounded-2xl border border-dashed border-border-light dark:border-border-dark bg-surface-light/50 dark:bg-surface-dark/50 flex items-center justify-center p-4">
                <div className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark text-center select-none">
                  {`{/* VISUAL: ${data.slug} — custom illustration, add later */}`}
                </div>
              </div>
            </div>

          </div>

          {/* WHAT YOU GET SECTION */}
          <div className="p-6 md:p-8 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-md mb-8">
            <h2 className="text-lg font-display font-bold mb-4">What You Get</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {data.relevantServices.map((service) => (
                <div key={service} className="flex items-center gap-2 text-xs md:text-sm text-text-primary-light/90 dark:text-text-primary-dark/90">
                  <span className="w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border-light dark:border-border-dark/30 pt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark block">Starting Investment</span>
                <span className="text-xl font-display font-bold text-primary-light dark:text-primary-dark">
                  from {startingPrice}
                </span>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-light dark:bg-gradient-primary text-white text-xs font-bold hover:scale-105 transition-transform"
              >
                <span>Discuss Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CLOSING TAG/SEO BODY COPY GUARDRAIL (<150 words) */}
          <div className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
            Our specialized web development and digital solutions in Bhubaneswar are engineered precisely to rank higher on local Google maps, load instantly under 1.5s, and offer frictionless pathways for the next customer action. Let us map out a customized digital solution that fuels local business growth.
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
