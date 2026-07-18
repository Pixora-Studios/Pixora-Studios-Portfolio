import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import { PricingHero } from "@/components/pricing/PricingHero";
import { StartingPoints } from "@/components/pricing/StartingPoints";
import { SolutionSelector } from "@/components/pricing/SolutionSelector";
import { CostFactors } from "@/components/pricing/CostFactors";
import { ScopingProcess } from "@/components/pricing/ScopingProcess";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Pricing for Websites & Custom Digital Solutions | Pixora Studios",
  description:
    "Explore Pixora Studios pricing for custom websites, digital restaurant experiences and custom business systems. Transparent starting points and project-based scope.",
  canonical: "/pricing",
  keywords: [
    "website pricing Bhubaneswar",
    "web design cost Odisha",
    "restaurant website price India",
    "clinic website cost",
    "affordable web development Bhubaneswar",
    "digital QR menu pricing",
  ],
});

export default function PricingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pixorastudios.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pricing",
        item: "https://pixorastudios.com/pricing",
      },
    ],
  };

  const priceSpecSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pixora Studios Pricing",
    url: "https://pixorastudios.com/pricing",
    description:
      "Transparent pricing for custom web development and digital solutions by Pixora Studios.",
    mainEntity: {
      "@type": "ItemList",
      name: "Website Pricing Tracks",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Clinics & Services Track",
          description:
            "Custom websites for clinics, salons, gyms, and service businesses. Starting from ₹5,999.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Restaurants & Hospitality Track",
          description:
            "Digital restaurant experiences with QR menus, ordering, and booking. Starting from ₹15,000.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital QR Menu Product",
          description:
            "Standalone contactless QR menu system. Bundled at ₹999, Standalone at ₹1,499.",
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={priceSpecSchema} />
      <PageTransition>
        <div className="min-h-screen">
          <PricingHero />
          <StartingPoints />
          <SolutionSelector />
          <CostFactors />
          <ScopingProcess />
          <PricingFAQ />
          <PricingCTA />
        </div>
      </PageTransition>
    </>
  );
}
