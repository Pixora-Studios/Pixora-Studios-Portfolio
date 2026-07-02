"use client";

import dynamic from "next/dynamic";
import { PageTransition } from "@/components/shared/PageTransition";
import { QRHero } from "@/components/qr-menu/QRHero";
import { QRHowItWorks } from "@/components/qr-menu/QRHowItWorks";
import { QRPricing } from "@/components/qr-menu/QRPricing";

// Dynamically import below-the-fold sections for performance
const QRDesignShowcase = dynamic(() => import("@/components/qr-menu/QRDesignShowcase").then(mod => mod.QRDesignShowcase), { ssr: false });
const QRStandsShowcase = dynamic(() => import("@/components/qr-menu/QRStandsShowcase").then(mod => mod.QRStandsShowcase), { ssr: false });
const QRMenuCTA = dynamic(() => import("@/components/qr-menu/QRMenuCTA").then(mod => mod.QRMenuCTA), { ssr: false });

export function QRMenuClient() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <QRHero />
        <QRHowItWorks />
        <QRPricing />
        <QRDesignShowcase />
        {/* <QRStandsShowcase /> */}
        <QRMenuCTA />
      </div>
    </PageTransition>
  );
}
