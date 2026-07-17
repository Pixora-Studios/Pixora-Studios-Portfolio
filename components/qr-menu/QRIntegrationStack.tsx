"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plug, Server, Boxes } from "lucide-react";

const integrations = [
  { name: "Petpooja", category: "POS", status: "Upcoming" },
  { name: "Odoo", category: "ERP / POS", status: "Roadmap" },
  { name: "Square", category: "POS / Payments", status: "Roadmap" },
  { name: "LimeTray", category: "Restaurant Tech", status: "Upcoming" },
  { name: "Oracle MICROS", category: "POS", status: "Roadmap" },
  { name: "Lightspeed", category: "POS", status: "Roadmap" },
  { name: "POSist", category: "Restaurant POS", status: "Upcoming" },
  { name: "More Systems", category: "Custom integrations", status: "Talk to us" },
];

const statusColors: Record<string, string> = {
  "Upcoming": "bg-amber-400/15 text-amber-400 border-amber-400/20",
  "Roadmap": "bg-blue-400/15 text-blue-400 border-blue-400/20",
  "Talk to us": "bg-primary-dark/15 text-primary-dark border-primary-dark/20",
};

// SVG beam line animation
function BeamLine({ index, total }: { index: number; total: number }) {
  const angle = (index / total) * 360;
  const rad = (angle * Math.PI) / 180;
  const cx = 100;
  const cy = 100;
  const r = 72;
  const x2 = cx + r * Math.cos(rad);
  const y2 = cy + r * Math.sin(rad);

  return (
    <motion.line
      x1={cx}
      y1={cy}
      x2={x2}
      y2={y2}
      stroke="url(#beam-gradient)"
      strokeWidth="1"
      strokeDasharray="4 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.5 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.6 }}
    />
  );
}

export function QRIntegrationStack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plug className="w-4 h-4 text-primary-dark" />
            <span className="text-primary-dark font-mono text-xs font-bold uppercase tracking-widest">Integration Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Your Restaurant Already Has a Stack.{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
              We Build Around It.
            </span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto text-base leading-relaxed">
            From independent restaurants to growing chains, Pixora is being built with integration flexibility in mind. We are not asking your restaurant to replace everything — we can build the digital layer that connects to the way you already operate.
          </p>
        </motion.div>

        {/* Center node + cards layout */}
        <div className="max-w-5xl mx-auto">

          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl bg-gradient-light dark:bg-gradient-primary p-px shadow-2xl shadow-primary-dark/20">
                <div className="w-full h-full rounded-3xl bg-surface-light dark:bg-surface-dark flex items-center justify-center">
                  <Boxes className="w-10 h-10 text-primary-dark" />
                </div>
              </div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-primary-dark/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              />
            </div>
            <p className="mt-3 font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">Pixora Digital Experience</p>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Integration-ready architecture</p>
          </motion.div>

          {/* Connecting visual (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center justify-center gap-4 mb-6 text-xs font-mono text-text-muted-light/50 dark:text-text-muted-dark/50"
          >
            {["POS", "PAYMENTS", "ORDERS", "RESTAURANT SYSTEMS"].map((tag, i) => (
              <div key={tag} className="flex items-center gap-4">
                {i > 0 && <span>·</span>}
                <span className="font-bold tracking-widest">{tag}</span>
              </div>
            ))}
          </motion.div>

          {/* Integration cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                className="rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark p-4 hover:border-primary-dark/30 hover:shadow-md hover:shadow-primary-dark/5 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark flex items-center justify-center">
                    <Server className="w-4 h-4 text-text-muted-light dark:text-text-muted-dark group-hover:text-primary-dark transition-colors" />
                  </div>
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full border ${statusColors[integration.status] || statusColors["Roadmap"]}`}>
                    {integration.status}
                  </span>
                </div>
                <p className="font-display font-bold text-sm text-text-primary-light dark:text-text-primary-dark">{integration.name}</p>
                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5">{integration.category}</p>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center text-xs text-text-muted-light/60 dark:text-text-muted-dark/60 mt-6 max-w-xl mx-auto"
          >
            Integration status reflects Pixora&apos;s current roadmap direction. No third-party integrations listed above are currently live unless explicitly confirmed. Contact us to discuss custom integration possibilities for your restaurant stack.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
