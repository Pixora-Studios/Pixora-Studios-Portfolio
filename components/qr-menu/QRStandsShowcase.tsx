"use client";

import { motion } from "framer-motion";
import { qrStands, standBundles } from "@/lib/data/qrMenuData";
import { GlassCard } from "@/components/shared/GlassCard";
import { ArrowRight, QrCode } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function QRStandsShowcase() {
  const [activeMaterial, setActiveMaterial] = useState<"all" | "acrylic" | "metallic">("all");

  const filteredStands = activeMaterial === "all"
    ? qrStands
    : qrStands.filter(s => s.material === activeMaterial);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Premium QR Stands</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Beautifully crafted physical stands to match your restaurant&apos;s aesthetic. Available in high-grade acrylic and metallic finishes.
          </p>
        </div>

        {/* Material Filter */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-full bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex items-center">
            {["all", "acrylic", "metallic"].map((material) => (
              <button
                key={material}
                onClick={() => setActiveMaterial(material as any)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all",
                  activeMaterial === material
                    ? "bg-primary-light dark:bg-primary-dark text-white shadow-lg"
                    : "text-text-muted-light dark:text-text-muted-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
                )}
              >
                {material}
              </button>
            ))}
          </div>
        </div>

        {/* Stands Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredStands.map((stand, index) => (
            <motion.div
              key={stand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard className="p-4 flex flex-col h-full border-transparent hover:border-primary-light/10">
                <div className="aspect-square rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark mb-4 flex items-center justify-center relative overflow-hidden group">
                  {/* Dummy SVG Representation */}
                  <div className={cn(
                    "w-24 h-32 rounded-lg border-2 border-primary-light/20 dark:border-primary-dark/20 flex flex-col items-center justify-center p-4",
                    stand.material === "metallic" ? "bg-gradient-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900" : "bg-white/10"
                  )}>
                    <QrCode className="w-8 h-8 opacity-20" />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-surface-light/80 dark:bg-surface-dark/80 text-[8px] font-bold uppercase tracking-widest border border-border-light dark:border-border-dark">
                    {stand.material}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-sm lg:text-base mb-1">{stand.name}</h3>
                  <p className="text-yellow-400 font-display font-bold">₹{stand.price}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bundles Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border-primary-light/20 dark:border-primary-dark/20 bg-primary-light/5 dark:bg-primary-dark/5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-display font-bold">Order in Bundles & Save</h4>
                <p className="text-text-muted-light dark:text-text-muted-dark">
                  Need multiple stands for your tables? Choose a bundle and save up to 15% vs individual pricing.
                </p>
              </div>
              <div className="grid gap-4 w-full lg:w-auto">
                {standBundles.map((bundle) => (
                  <div
                    key={bundle.id}
                    className="flex items-center justify-between gap-8 p-4 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark"
                  >
                    <div>
                      <p className="font-bold text-sm">{bundle.label}</p>
                      {bundle.note && <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark italic">{bundle.note}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-yellow-400 font-display font-bold text-lg">₹{bundle.bundlePrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border-light/10 dark:border-border-dark/10 text-center">
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6">
                Note: Stands are sold separately from the QR software subscription.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary-light dark:text-primary-dark font-bold hover:underline"
              >
                <span>Ask about custom stand designs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
