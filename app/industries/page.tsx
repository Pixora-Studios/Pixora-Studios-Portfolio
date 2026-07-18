import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import Link from "next/link";
import { industries } from "@/lib/data/industries";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Bespoke Digital Solutions for Local Industries | Pixora Studios",
  description: "Explore custom high-performance websites and digital experiences built around specific industry verticals in Bhubaneswar, Odisha.",
  canonical: "/industries",
});

// Let's construct slugs for the industries
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/-+/g, "-"); // collapse dashes
};

export default function IndustriesHubPage() {
  // Let's expand the 15 existing ones with the new ones specified:
  // Schools/Coaching (which maps to Coaching Centers or is new), Logistics & Service Marketplaces, Local E-commerce, Hotels/PGs.
  // The existing list has: Dental Clinics, Cafes, Restaurants, Gyms, Salons, Coaching Centers, Real Estate, Event Organizers, Hotels, Clubs, Travel Agencies, Pharmacies, Interior Designers, Personal Brands, General Clinics.
  // Let's add: Logistics & Service Marketplaces, Local E-commerce, Hotels/PGs, Schools & Coaching (or merge it).
  const extendedIndustries = [
    { name: "Restaurants", icon: "🍽" },
    { name: "Dental Clinics", icon: "🦷" },
    { name: "Gyms", icon: "💪" },
    { name: "Salons", icon: "💇" },
    { name: "Hotels & PGs", icon: "🏨" },
    { name: "Schools & Coaching", icon: "🎓" },
    { name: "Real Estate", icon: "🏠" },
    { name: "Cafes", icon: "☕" },
    { name: "Logistics & Marketplaces", icon: "🚚" },
    { name: "Local E-commerce", icon: "🛒" },
    { name: "Event Organizers", icon: "🎉" },
    { name: "Clubs & Lounges", icon: "🎵" },
    { name: "Travel Agencies", icon: "✈️" },
    { name: "Pharmacies", icon: "💊" },
    { name: "Interior Designers", icon: "🎨" },
    { name: "Personal Brands", icon: "✨" },
    { name: "General Clinics", icon: "🏥" }
  ];

  return (
    <PageTransition>
      <div className="pt-24 md:pt-28 pb-16 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-16 text-center max-w-4xl pt-8">
          <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-widest block mb-3">
            Industry Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
            Bespoke Digital Solutions Per Industry
          </h1>
          <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto leading-relaxed">
            Every business sector operates differently. Browse our tailored industry-specific landing assets and find the exact web solution mapped to your operations.
          </p>
        </section>

        {/* TILES GRID */}
        <section className="container mx-auto px-6 max-w-5xl mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {extendedIndustries.map((ind, i) => {
              const slug = slugify(ind.name);

              return (
                <Link
                  key={ind.name}
                  href={`/industries/${slug}`}
                  className="group p-5 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary-light/40 dark:hover:border-primary-dark/40 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl mb-4 block select-none">{ind.icon}</span>
                    <h2 className="text-sm font-display font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                      {ind.name}
                    </h2>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-light dark:border-border-dark/40 flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-text-muted-light dark:text-text-muted-dark">
                      Explore Vertical
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted-light group-hover:text-primary-light dark:group-hover:text-primary-dark group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
