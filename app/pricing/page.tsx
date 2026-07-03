import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";

export const metadata = constructMetadata({
  title: "Website Development Pricing | Pixora Studios",
  description: "Transparent, one-time investment pricing for custom websites. No monthly retainers. Best value for local businesses in Bhubaneswar and Odisha.",
  canonical: "/pricing",
});

export default function PricingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <PricingHero />
        <PricingCards />
        <PricingFAQ />
        <PricingCTA />
      </div>
    </PageTransition>
  );
}
