import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WorkShowcase } from "@/components/home/WorkShowcase";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { SEOSection } from "@/components/home/SEOSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageTransition } from "@/components/shared/PageTransition";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Website Development Company in Bhubaneswar | Pixora Studios",
  description: "We build custom websites for clinics, cafes, restaurants, gyms and local businesses in Bhubaneswar, Odisha. SEO-optimized, mobile-first, conversion-focused.",
});

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <WhyChooseUs />
      <WorkShowcase />
      <IndustriesGrid />
      <ServicesOverview />
      <ProcessTimeline />
      <ComparisonSection />
      <Testimonials />
      <TechStack />
      <SEOSection />
      <FAQSection />
      <FinalCTA />
    </PageTransition>
  );
}
