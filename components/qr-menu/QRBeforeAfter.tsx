"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, CheckCircle2, BookOpen, Layers, ArrowLeftRight } from "lucide-react";

const before = [
  { text: "Printed menus go outdated the moment prices change" },
  { text: "Customer experience is disconnected from the restaurant's operations" },
  { text: "Orders move between systems manually — calls, notes, handoffs" },
  { text: "Restaurant owners lack a clear, central digital view" },
];

const after = [
  { text: "Digital menu experience — update instantly from any device" },
  { text: "Flexible customer journeys connected to your restaurant workflow" },
  { text: "Connected ordering and payment flows built around how you operate" },
  { text: "Restaurant-ready digital layer with owner visibility and control" },
];

export function QRBeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowLeftRight className="w-4 h-4 text-primary-dark" />
            <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">The Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Because Restaurant Operations Are{" "}
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
              Already Complicated.
            </span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-base leading-relaxed">
            Adding a digital layer to a restaurant should reduce complexity, not add to it.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl bg-red-400/10 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="font-display font-bold text-base">Before</h3>
            </div>
            <div className="space-y-4">
              {before.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.09, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-red-400/10 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-red-400" />
                  </div>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-primary-dark/20 bg-primary-dark/5 dark:bg-primary-dark/10 p-6 relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-dark/10 blur-[60px] rounded-full -z-0" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-xl bg-emerald-400/10 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-base">With Pixora</h3>
              </div>
              <div className="space-y-4">
                {after.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.09, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
