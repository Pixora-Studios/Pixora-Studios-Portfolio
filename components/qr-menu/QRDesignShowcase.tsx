"use client";

import { motion } from "framer-motion";
import { menuDesigns } from "@/lib/data/qrMenuData";

export function QRDesignShowcase() {
  return (
    <section className="py-24 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Crafted for Your Brand</h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Our software comes with professionally designed skins to match your restaurant&apos;s vibe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden glass border border-white/10 mb-6 p-4">
                {/* Mock Phone Frame */}
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative"
                  style={{ backgroundColor: design.previewColor }}
                >
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-black/5 mx-auto mb-4" />
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="space-y-1 opacity-20">
                          <div className="h-2 w-3/4 bg-black rounded" />
                          <div className="h-1 w-1/2 bg-black rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                   <p className="text-white text-sm font-medium leading-relaxed">
                     {design.description}
                   </p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{design.name}</h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark border border-primary-light/20 dark:border-primary-dark/20">
                    {design.styleTag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
