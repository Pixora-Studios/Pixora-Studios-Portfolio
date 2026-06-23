"use client";

import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PageTransition } from "@/components/shared/PageTransition";

// Dynamically import heavy/animation-intensive components
const WorkShowcase = dynamic(() => import("@/components/home/WorkShowcase").then(mod => mod.WorkShowcase), { ssr: false });
const ProcessTimeline = dynamic(() => import("@/components/home/ProcessTimeline").then(mod => mod.ProcessTimeline), { ssr: false });
const Testimonials = dynamic(() => import("@/components/home/Testimonials").then(mod => mod.Testimonials), { ssr: false });
const TechStack = dynamic(() => import("@/components/home/TechStack").then(mod => mod.TechStack), { ssr: false });
const SEOSection = dynamic(() => import("@/components/home/SEOSection").then(mod => mod.SEOSection), { ssr: false });

export default function HomeClient() {
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
