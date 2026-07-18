"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Globe, 
  Cpu, 
  Layers, 
  Workflow, 
  Terminal, 
  Search, 
  CheckCircle2, 
  AlertCircle,
  Activity,
  ArrowRight
} from "lucide-react";

// --- HERO VISUAL ---
export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { label: "Website", desc: "Digital Presence", icon: Globe, x: 220, y: 50 },
    { label: "Digital Experience", desc: "Interaction", icon: Layers, x: 220, y: 130 },
    { label: "Custom System", desc: "Operations", icon: Cpu, x: 220, y: 210 },
  ];

  return (
    <div className="relative w-full max-w-[480px] h-[280px] rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-md p-6 overflow-hidden shadow-xl flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-60 -z-10" />

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 260" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Connection Line 1 */}
        <motion.path
          d="M 60 130 Q 120 90 200 60"
          stroke={activeNode === 1 ? "url(#primary-gradient)" : "var(--border)"}
          strokeWidth={activeNode === 1 ? "2.5" : "1.5"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="transition-colors duration-500"
          strokeDasharray={activeNode === 1 ? "5 5" : "none"}
        />
        {/* Connection Line 2 */}
        <motion.path
          d="M 60 130 H 200"
          stroke={activeNode === 2 ? "url(#primary-gradient)" : "var(--border)"}
          strokeWidth={activeNode === 2 ? "2.5" : "1.5"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="transition-colors duration-500"
          strokeDasharray={activeNode === 2 ? "5 5" : "none"}
        />
        {/* Connection Line 3 */}
        <motion.path
          d="M 60 130 Q 120 170 200 200"
          stroke={activeNode === 3 ? "url(#primary-gradient)" : "var(--border)"}
          strokeWidth={activeNode === 3 ? "2.5" : "1.5"}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          className="transition-colors duration-500"
          strokeDasharray={activeNode === 3 ? "5 5" : "none"}
        />

        {/* Gradients definitions */}
        <defs>
          <linearGradient id="primary-gradient" x1="60" y1="130" x2="200" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      <div className="relative w-full h-full flex justify-between items-center px-4">
        {/* Left Side: Business Problem */}
        <motion.div
          animate={{
            scale: activeNode === 0 ? [1, 1.05, 1] : 1,
            borderColor: activeNode === 0 ? "var(--primary)" : "var(--border)"
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 rounded-2xl border bg-white dark:bg-black/50 flex flex-col items-center justify-center p-3 shadow-md z-10"
        >
          <div className="w-8 h-8 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center mb-2">
            <AlertCircle className="w-4.5 h-4.5 text-red-500" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-center text-text-primary-light dark:text-text-primary-dark">
            Business Problem
          </span>
        </motion.div>

        {/* Right Side Stack: Website, Experience, Custom System */}
        <div className="flex flex-col gap-5 z-10">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            const isActive = activeNode === i + 1;
            return (
              <motion.div
                key={node.label}
                animate={{
                  x: isActive ? 4 : 0,
                  scale: isActive ? 1.02 : 1,
                  borderColor: isActive ? "var(--primary)" : "var(--border)",
                  boxShadow: isActive ? "0 4px 20px var(--shadow)" : "none"
                }}
                className={`w-44 px-3.5 py-2.5 rounded-xl border bg-white dark:bg-black/50 flex items-center gap-3 transition-colors duration-300`}
              >
                <div className={`p-2 rounded-lg ${isActive ? "bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark" : "bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark"}`}>
                  <Icon className="w-4.5 h-4.5 shrink-0" />
                </div>
                <div className="text-left leading-tight">
                  <h4 className="text-[11px] font-extrabold text-text-primary-light dark:text-text-primary-dark">{node.label}</h4>
                  <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">{node.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- PROBLEM TRANSFORMATION VISUAL ---
export function ProblemTransformationVisual() {
  const [isMerged, setIsMerged] = useState<boolean>(false);

  return (
    <div 
      className="relative w-full max-w-[480px] h-[300px] rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-md p-6 overflow-hidden flex flex-col justify-between cursor-pointer group shadow-xl"
      onMouseEnter={() => setIsMerged(true)}
      onMouseLeave={() => setIsMerged(false)}
      onClick={() => setIsMerged(!isMerged)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10" />

      {/* Header Info */}
      <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-text-muted-light dark:text-text-muted-dark border-b border-border-light dark:border-border-dark/50 pb-3">
        <span>SYSTEM TRANSFORMER v1.0</span>
        <span className="flex items-center gap-1.5 text-primary-light dark:text-primary-dark">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          {isMerged ? "SYSTEM ACTIVE" : "ISSUES SCATTERED"}
        </span>
      </div>

      {/* Cards Area */}
      <div className="relative flex-1 flex items-center justify-center py-4">
        {/* Problem Stack or Reorganized Solution */}
        {!isMerged ? (
          <div className="relative w-full h-full flex flex-col justify-center items-center gap-3">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-64 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/5 text-left flex items-center gap-3 shadow-sm"
            >
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <div>
                <h5 className="text-[11px] font-bold text-text-primary-light dark:text-text-primary-dark">Manual Work</h5>
                <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">Wasting 10+ hours weekly on admin tasks</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-64 px-4 py-3 rounded-xl border border-orange-500/20 bg-orange-500/5 text-left flex items-center gap-3 shadow-sm"
            >
              <AlertCircle className="w-4 h-4 text-orange-500 shrink-0" />
              <div>
                <h5 className="text-[11px] font-bold text-text-primary-light dark:text-text-primary-dark">Disconnected Tools</h5>
                <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">Spreadsheets and apps don&apos;t sync</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-64 px-4 py-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5 text-left flex items-center gap-3 shadow-sm"
            >
              <AlertCircle className="w-4 h-4 text-yellow-500 shrink-0" />
              <div>
                <h5 className="text-[11px] font-bold text-text-primary-light dark:text-text-primary-dark">Customer Friction</h5>
                <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">No simple online discovery or bookings</p>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-72 p-5 rounded-2xl border border-primary-light dark:border-primary-dark bg-white dark:bg-black flex flex-col justify-center gap-3 shadow-2xl relative"
          >
            {/* Glowing Accent */}
            <div className="absolute inset-0 bg-primary-light/5 dark:bg-primary-dark/5 rounded-2xl pointer-events-none" />
            <div className="flex items-center gap-3.5 border-b border-border-light dark:border-border-dark/50 pb-3">
              <div className="p-2 bg-gradient-light dark:bg-gradient-primary rounded-lg text-white">
                <Workflow className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <h5 className="text-xs font-extrabold text-text-primary-light dark:text-text-primary-dark">One Better Digital System</h5>
                <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">Integrated Pixora Engine</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] text-text-primary-light dark:text-text-primary-dark font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                <span>Automated Workflows & Integrations</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-text-primary-light dark:text-text-primary-dark font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                <span>Synchronized Central Operations</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-text-primary-light dark:text-text-primary-dark font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                <span>Frictionless Customer Booking Interface</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Action Prompt */}
      <span className="text-[9px] font-mono tracking-wider text-text-muted-light dark:text-text-muted-dark text-center uppercase">
        {isMerged ? "Hover away to reset" : "Hover or click to optimize system"}
      </span>
    </div>
  );
}

// --- WHY PIXORA EXISTS PIPELINE VISUAL ---
export function ExistsPipelineVisual() {
  const steps = [
    { label: "PROBLEM", icon: AlertCircle, color: "text-red-500 bg-red-500/10" },
    { label: "UNDERSTAND", icon: Search, color: "text-primary-light dark:text-primary-dark bg-primary-light/10 dark:bg-primary-dark/10" },
    { label: "BUILD", icon: Terminal, color: "text-secondary-light dark:text-secondary-dark bg-secondary-light/10 dark:bg-secondary-dark/10" },
    { label: "USEFUL SYSTEM", icon: CheckCircle2, color: "text-green-500 bg-green-500/10" },
  ];

  return (
    <div className="relative w-full max-w-[520px] rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-md p-6 overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10" />

      {/* Horizontal Pipeline (desktop/tablet style) */}
      <div className="hidden sm:flex items-center justify-between relative py-6">
        {/* Progress pipeline connector line */}
        <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-border-light dark:bg-border-dark/30 -translate-y-1/2 -z-10" />
        <motion.div
          animate={{ left: ["10%", "90%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-12 w-2 h-2 rounded-full bg-primary-light dark:bg-primary-dark shadow-[0_0_10px_var(--primary)] -translate-y-1/2 -z-10"
        />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex flex-col items-center gap-3 relative z-10 w-24">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.color} border border-border-light dark:border-border-dark shadow-md`}
              >
                <Icon className="w-5 h-5" />
              </motion.div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-text-primary-light dark:text-text-primary-dark text-center">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Vertical timeline stack for mobile screens */}
      <div className="flex sm:hidden flex-col gap-6 relative py-4 pl-8">
        <div className="absolute left-[23px] top-[16px] bottom-[16px] w-[2px] bg-border-light dark:bg-border-dark/30" />
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-4 relative">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.color} border border-border-light dark:border-border-dark shadow-sm relative z-10`}>
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-wider text-text-primary-light dark:text-text-primary-dark">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- LAYERED BUILD VISUAL ---
export function LayeredBuildVisual() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const layers = [
    { label: "WEBSITES", desc: "Digital Foundation", details: "Brand • Customers • Goals", color: "from-blue-500/10 to-indigo-500/10 border-blue-500/20" },
    { label: "DIGITAL EXPERIENCES", desc: "Customer Interaction", details: "Discovery • Action • Portals", color: "from-indigo-500/10 to-purple-500/10 border-indigo-500/20" },
    { label: "CUSTOM SYSTEMS", desc: "Business Operations", details: "Dashboards • Workflows • Custom Tools", color: "from-purple-500/10 to-pink-500/10 border-purple-500/20" },
    { label: "CONNECTED WORKFLOWS", desc: "Automation Engine", details: "Integrations • Automated Syncs", color: "from-pink-500/10 to-rose-500/10 border-pink-500/20" },
  ];

  return (
    <div className="relative w-full max-w-[480px] min-h-[300px] flex flex-col justify-center gap-4 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/40 dark:bg-surface-dark/40 backdrop-blur-md p-6 shadow-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 -z-10" />

      {/* Layer stack */}
      <div className="flex flex-col gap-3.5 relative">
        {layers.map((layer, index) => {
          const isHovered = hoveredIdx === index;
          return (
            <motion.div
              key={layer.label}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              animate={{
                y: isHovered ? -3 : 0,
                scale: isHovered ? 1.015 : 1,
                borderColor: isHovered ? "var(--primary)" : "rgba(var(--primary-rgb), 0.1)",
                boxShadow: isHovered ? "0 8px 30px var(--shadow)" : "none",
              }}
              className={`w-full p-4 rounded-xl border bg-gradient-to-r ${layer.color} backdrop-blur-sm cursor-pointer transition-all duration-300 text-left`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] font-extrabold text-primary-light dark:text-primary-dark">
                    LEVEL 0{index + 1}
                  </span>
                  <h4 className="text-xs font-extrabold text-text-primary-light dark:text-text-primary-dark tracking-wide mt-0.5">
                    {layer.label}
                  </h4>
                  <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-1">
                    {layer.desc} — <span className="opacity-80 italic">{layer.details}</span>
                  </p>
                </div>
                <ArrowRight className={`w-4 h-4 text-text-muted-light dark:text-text-muted-dark transition-transform duration-300 ${isHovered ? "translate-x-1.5 text-primary-light dark:text-primary-dark" : ""}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
