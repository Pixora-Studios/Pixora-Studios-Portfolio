import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import { PricingHero } from "@/components/pricing/PricingHero";
import { StartingPoints } from "@/components/pricing/StartingPoints";
import { SolutionSelector } from "@/components/pricing/SolutionSelector";
import { CostFactors } from "@/components/pricing/CostFactors";
import { ScopingProcess } from "@/components/pricing/ScopingProcess";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingCTA } from "@/components/pricing/PricingCTA";

export const metadata = constructMetadata({
  title: "Pricing for Websites & Custom Digital Solutions | Pixora Studios",
  description: "Explore Pixora Studios pricing for custom websites, digital restaurant experiences and custom business systems. Transparent starting points and project-based scope.",
  canonical: "/pricing",
});

export default function PricingPage() {
  return (
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
  );
}
