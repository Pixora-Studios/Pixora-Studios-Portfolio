"use client";

import dynamic from "next/dynamic";
import { PageTransition } from "@/components/shared/PageTransition";
import { QRHero } from "@/components/qr-menu/QRHero";
import { QRProductPositioning } from "@/components/qr-menu/QRProductPositioning";

// Progressively load below-the-fold sections for performance
const QRCapabilities = dynamic(
  () => import("@/components/qr-menu/QRCapabilities").then((m) => m.QRCapabilities),
  { ssr: false }
);
const QRScanToService = dynamic(
  () => import("@/components/qr-menu/QRScanToService").then((m) => m.QRScanToService),
  { ssr: false }
);
const QRDashboardSection = dynamic(
  () => import("@/components/qr-menu/QRDashboardSection").then((m) => m.QRDashboardSection),
  { ssr: false }
);
const QRIntegrationStack = dynamic(
  () => import("@/components/qr-menu/QRIntegrationStack").then((m) => m.QRIntegrationStack),
  { ssr: false }
);
const QRBeforeAfter = dynamic(
  () => import("@/components/qr-menu/QRBeforeAfter").then((m) => m.QRBeforeAfter),
  { ssr: false }
);
const QRDesignShowcase = dynamic(
  () => import("@/components/qr-menu/QRDesignShowcase").then((m) => m.QRDesignShowcase),
  { ssr: false }
);
const QRSolutions = dynamic(
  () => import("@/components/qr-menu/QRSolutions").then((m) => m.QRSolutions),
  { ssr: false }
);
const QRMenuFAQ = dynamic(
  () => import("@/components/qr-menu/QRMenuFAQ").then((m) => m.QRMenuFAQ),
  { ssr: false }
);
const QRMenuCTA = dynamic(
  () => import("@/components/qr-menu/QRMenuCTA").then((m) => m.QRMenuCTA),
  { ssr: false }
);

export function QRMenuClient() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* 1. Hero — compact, product-oriented */}
        <QRHero />

        {/* 2. Product Positioning — "The QR Code Is Just the Beginning" */}
        <QRProductPositioning />

        {/* 3. Capabilities — bento grid */}
        <QRCapabilities />

        {/* 4. Scan-to-Service — interactive 6-step flow */}
        <QRScanToService />

        {/* 5. Dashboard — owner visibility section */}
        <QRDashboardSection />

        {/* 6. Integration Stack — "Built for Your Stack" */}
        <QRIntegrationStack />

        {/* 7. Before / After — operational comparison */}
        <QRBeforeAfter />

        {/* 8. Design Showcase — brand themes */}
        <QRDesignShowcase />

        {/* 9. Solutions — replaces rigid pricing */}
        <QRSolutions />

        {/* 10. FAQ — 12 questions, single FAQPage schema */}
        <QRMenuFAQ />

        {/* 11. Final CTA */}
        <QRMenuCTA />
      </div>
    </PageTransition>
  );
}
