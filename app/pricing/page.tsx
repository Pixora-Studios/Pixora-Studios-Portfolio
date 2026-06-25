import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";

export const metadata = constructMetadata({
  title: "Pricing | Straightforward Investment for Your Business",
  description: "Transparent pricing for custom website development. No monthly fees, just a one-time investment in a website designed to last.",
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
