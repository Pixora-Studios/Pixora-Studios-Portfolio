"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  Search, 
  Sparkles, 
  Calendar, 
  CheckCircle, 
  Compass 
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { MagneticButton } from "@/components/shared/MagneticButton";

// Custom type/interface
interface Project {
  slug: string;
  name: string;
  label: string;
  shortStatement: string;
  description: string;
  liveLink: string;
  detailLink: string;
  tags: string[];
}

const portfolioProjects: Project[] = [
  {
    slug: "bangalore-express",
    name: "Bangalore Express",
    label: "01 / RESTAURANT DIGITAL EXPERIENCE",
    shortStatement: "A restaurant experience built around discovery.",
    description: "From finding the restaurant to exploring the menu, the experience is designed to make the next customer action feel obvious. Optimized for local SEO and answer engines to bring foot traffic near KIIT.",
    liveLink: "https://bangalore-express.pixorastudios.com",
    detailLink: "/portfolio/bangalore-express",
    tags: ["Digital Menu", "Restaurant Discovery", "Reservation Inquiry", "AEO / Local Search"],
  },
  {
    slug: "sovereign",
    name: "SOVEREIGN",
    label: "02 / NIGHTLIFE DIGITAL EXPERIENCE",
    shortStatement: "A nightlife experience built around atmosphere.",
    description: "SOVEREIGN needed a digital presence that felt like the brand itself. Dark, controlled and intentionally different. Built with a premium, exclusive visual funnel and rituals showcase.",
    liveLink: "https://sovereign.pixorastudios.com",
    detailLink: "/portfolio/sovereign",
    tags: ["Premium Visual Identity", "Rituals Showcase", "Reservation Funnel", "Multi-page System"],
  }
];

export default function PortfolioClient() {
  const [hoveredHeroSide, setHoveredHeroSide] = useState<"left" | "right" | null>(null);
  const [sovereignAfterDark, setSovereignAfterDark] = useState(false);

  return (
    <PageTransition>
      <div className="pt-28 pb-16 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
        
        {/* ==================================================
            1. COMPACT HERO
            ================================================== */}
        <section className="relative py-12 md:py-16 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Header Content */}
            <div className="max-w-3xl mb-12">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-light dark:text-primary-dark font-mono text-[11px] font-bold uppercase tracking-[0.3em] block mb-3"
              >
                SELECTED WORK
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-bold leading-[1.15] tracking-tight mb-5"
              >
                Built for the Real World.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl leading-relaxed"
              >
                Two projects. Two very different businesses. One idea: the digital experience should fit the business.
              </motion.p>
            </div>

            {/* Split Visual Concept */}
            <div className="relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-border-light dark:border-border-dark flex flex-col md:flex-row bg-surface-light dark:bg-surface-dark">
              
              {/* Left Side: Bangalore Express (Warm Orange/Amber theme) */}
              <div 
                className={`relative flex-1 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out border-b md:border-b-0 md:border-r border-border-light dark:border-border-dark overflow-hidden ${
                  hoveredHeroSide === "left" ? "md:flex-[1.4] bg-amber-500/5 dark:bg-amber-500/[0.03]" : hoveredHeroSide === "right" ? "md:flex-[0.6] opacity-40" : ""
                }`}
                onMouseEnter={() => setHoveredHeroSide("left")}
                onMouseLeave={() => setHoveredHeroSide(null)}
              >
                {/* Visual Grid Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-md">
                    RESTAURANT / DISCOVERY
                  </span>
                  <Compass className={`w-5 h-5 text-amber-500 transition-transform duration-500 ${hoveredHeroSide === "left" ? "rotate-45 scale-110" : ""}`} />
                </div>

                {/* Abstract Visual Center */}
                <div className="relative z-10 my-4 flex items-center justify-center pointer-events-none">
                  <div className="w-full max-w-[280px] p-4 rounded-xl border border-amber-500/20 bg-surface-light/80 dark:bg-surface-dark/80 shadow-md transform transition-all duration-500 scale-95 md:scale-100">
                    <div className="flex items-center gap-2 border-b border-border-light dark:border-border-dark pb-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="h-2 w-20 bg-text-muted-light/20 dark:bg-text-muted-dark/20 rounded" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-3 w-full bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
                      <div className="h-3 w-[85%] bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
                      <div className="h-6 w-1/3 bg-amber-500/20 dark:bg-amber-400/20 rounded mt-1 flex items-center justify-center">
                        <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 font-bold">MENU ITEMS</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
                    BANGALORE EXPRESS
                  </h3>
                  <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark mt-1 block">
                    Tailored around search discovery
                  </span>
                </div>
              </div>

              {/* Right Side: SOVEREIGN (Dark Purple/Vibrant theme) */}
              <div 
                className={`relative flex-1 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out overflow-hidden ${
                  hoveredHeroSide === "right" ? "md:flex-[1.4] bg-primary-dark/5 dark:bg-primary-dark/[0.03]" : hoveredHeroSide === "left" ? "md:flex-[0.6] opacity-40" : ""
                }`}
                onMouseEnter={() => setHoveredHeroSide("right")}
                onMouseLeave={() => setHoveredHeroSide(null)}
              >
                {/* Visual Grid Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(108,99,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />

                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-light dark:text-primary-dark font-bold bg-primary-light/10 dark:bg-primary-dark/10 px-2.5 py-1 rounded-md">
                    NIGHTLIFE / ATMOSPHERE
                  </span>
                  <Sparkles className={`w-5 h-5 text-primary-light dark:text-primary-dark transition-transform duration-500 ${hoveredHeroSide === "right" ? "scale-125 rotate-12" : ""}`} />
                </div>

                {/* Abstract Visual Center */}
                <div className="relative z-10 my-4 flex items-center justify-center pointer-events-none">
                  <div className="w-full max-w-[280px] p-4 rounded-xl border border-primary-light/20 dark:border-primary-dark/20 bg-surface-light/80 dark:bg-surface-dark/80 shadow-md transform transition-all duration-500 scale-95 md:scale-100">
                    <div className="flex items-center justify-between border-b border-border-light dark:border-border-dark pb-2 mb-2">
                      <div className="h-2 w-16 bg-text-muted-light/20 dark:bg-text-muted-dark/20 rounded" />
                      <div className="w-2.5 h-2.5 rounded-full bg-primary-light dark:bg-primary-dark animate-pulse" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-3 w-1/2 bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
                      <div className="h-6 w-full bg-primary-light/20 dark:bg-primary-dark/20 rounded mt-1 flex items-center justify-center">
                        <span className="text-[9px] font-mono text-primary-light dark:text-primary-dark font-bold">RESERVATION FUNNEL</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
                    SOVEREIGN
                  </h3>
                  <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark mt-1 block">
                    Tailored around brand exclusivity
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            2. PROJECT EXPERIENCE (EDITORIAL CASE STUDIES)
            ================================================== */}
        <section className="py-20 md:py-28 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl space-y-24 md:space-y-36">

            {/* Bangalore Express Case Study */}
            <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Left Column: Context */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-full uppercase block w-fit">
                  {portfolioProjects[0].label}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  {portfolioProjects[0].name}
                </h2>
                
                <p className="text-lg md:text-xl font-semibold text-text-primary-light dark:text-text-primary-dark leading-snug">
                  &ldquo;{portfolioProjects[0].shortStatement}&rdquo;
                </p>
                
                <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {portfolioProjects[0].description}
                </p>

                {/* Built Concepts tags */}
                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark block mb-2.5">
                    CORE SYSTEM CONCEPTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {portfolioProjects[0].tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-mono px-3 py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/5 text-amber-700 dark:text-amber-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a 
                    href={portfolioProjects[0].liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <span>Explore Bangalore Express</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <Link 
                    href={portfolioProjects[0].detailLink}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-text-muted-light dark:text-text-muted-dark hover:text-amber-500 dark:hover:text-amber-400 border-b border-dashed border-border-light dark:border-border-dark hover:border-amber-500 dark:hover:border-amber-400 py-1 transition-all"
                  >
                    <span>Read Case Study Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Composition */}
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[4/3] rounded-3xl border border-amber-500/10 dark:border-amber-500/20 bg-gradient-to-br from-amber-500/[0.03] to-amber-500/[0.08] p-6 flex flex-col justify-between overflow-hidden group shadow-lg">
                  {/* Visual Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

                  {/* Panel 1: Search discovery card mockup */}
                  <div className="relative z-10 w-full max-w-[420px] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-md self-start transform group-hover:translate-x-1.5 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-3 bg-background-light dark:bg-background-dark/50 px-3 py-2 rounded-xl border border-border-light dark:border-border-dark">
                      <Search className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="text-[11px] font-mono text-text-muted-light dark:text-text-muted-dark overflow-hidden whitespace-nowrap text-ellipsis">
                        best restaurant near kiit campus bhubaneswar
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-amber-500/5 border border-amber-500/15 p-2.5 rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white text-xs font-bold font-mono">
                        B
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark">Bangalore Express</h4>
                          <CheckCircle className="w-3 h-3 text-amber-500 fill-amber-500/10" />
                        </div>
                        <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5">Family restaurant near KIIT, Patia</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[9px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded">AEO Answer Block</span>
                          <span className="text-[8px] font-mono text-text-muted-light dark:text-text-muted-dark">Structured schema loaded</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panel 2: Floating Digital Menu card */}
                  <div className="relative z-10 w-full max-w-[280px] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-lg self-end mt-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    <span className="text-[9px] font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase font-bold block mb-2">DIGITAL MENU UNIT</span>
                    
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center border-b border-border-light dark:border-border-dark/40 pb-2">
                        <div>
                          <p className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark">Hakka Noodles</p>
                          <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">Chinese Specialty</p>
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">₹180</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark">Interactive reservation query link</span>
                        </div>
                        <div className="w-10 h-4 bg-amber-500/15 rounded flex items-center justify-center">
                          <span className="text-[8px] font-mono font-bold text-amber-600 dark:text-amber-400">BOOK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SOVEREIGN Case Study */}
            <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
              {/* Left Column: Visual Composition */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div 
                  className={`relative w-full aspect-[4/3] rounded-3xl border transition-colors duration-500 p-6 flex flex-col justify-between overflow-hidden shadow-lg group ${
                    sovereignAfterDark 
                      ? "border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-pink-950/20" 
                      : "border-border-light dark:border-border-dark bg-gradient-to-br from-surface-light dark:from-surface-dark to-border-light/10 dark:to-border-dark/10"
                  }`}
                >
                  {/* Grid layout */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(167,139,250,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
                  
                  {/* Mouse position / Ambient light glow */}
                  <div className={`absolute -bottom-10 -left-10 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
                    sovereignAfterDark ? "bg-purple-600/20 opacity-100" : "bg-purple-600/5 opacity-40"
                  }`} />
                  
                  {/* Interactive toggle block for "After Dark" Mode */}
                  <div className="relative z-10 self-end flex items-center gap-2.5 bg-surface-light/80 dark:bg-surface-dark/80 border border-border-light dark:border-border-dark px-3 py-2 rounded-xl shadow-md">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase font-bold">ATMOSPHERE</span>
                      <span className="text-[10px] font-bold text-text-primary-light dark:text-text-primary-dark">
                        {sovereignAfterDark ? "After Dark Active" : "Daylight Mode"}
                      </span>
                    </div>
                    <button 
                      onClick={() => setSovereignAfterDark(!sovereignAfterDark)}
                      className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${sovereignAfterDark ? "bg-purple-600" : "bg-text-muted-light/30 dark:bg-text-muted-dark/30"}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${sovereignAfterDark ? "translate-x-4" : "translate-x-0"}`} />
                    </button>
                  </div>

                  {/* Elegant Layered typography mockup */}
                  <div className="relative z-10 my-4 text-center select-none pointer-events-none">
                    <h3 className={`text-5xl md:text-6xl font-display font-bold tracking-widest leading-none transition-all duration-700 uppercase ${
                      sovereignAfterDark ? "text-purple-400/90 glow-purple" : "text-text-primary-light/20 dark:text-text-primary-dark/20"
                    }`}>
                      SOV
                    </h3>
                    <p className={`text-[10px] font-mono uppercase tracking-[0.4em] mt-2 transition-colors duration-500 ${
                      sovereignAfterDark ? "text-pink-400" : "text-text-muted-light dark:text-text-muted-dark"
                    }`}>
                      Exclusivity & Mood
                    </p>
                  </div>

                  {/* Reservation slot details mockup */}
                  <div className="relative z-10 w-full max-w-[340px] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-lg self-start transform group-hover:translate-y-[4px] transition-transform duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold">VIP RESERVATION BLOCK</span>
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark p-2 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-purple-500" />
                          <span className="text-[10px] font-mono text-text-primary-light dark:text-text-primary-dark">Friday Night Rituals</span>
                        </div>
                        <span className="text-[9px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded">9:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-[9px] text-text-muted-light dark:text-text-muted-dark">Atmosphere-first routing system</span>
                        <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400">Request VIP Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Context */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-purple-600 dark:text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full uppercase block w-fit">
                  {portfolioProjects[1].label}
                </span>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  {portfolioProjects[1].name}
                </h2>
                
                <p className="text-lg md:text-xl font-semibold text-text-primary-light dark:text-text-primary-dark leading-snug">
                  &ldquo;{portfolioProjects[1].shortStatement}&rdquo;
                </p>
                
                <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {portfolioProjects[1].description}
                </p>

                {/* Built Concepts tags */}
                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark block mb-2.5">
                    CORE SYSTEM CONCEPTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {portfolioProjects[1].tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-mono px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-500/5 text-purple-700 dark:text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a 
                    href={portfolioProjects[1].liveLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <span>Explore SOVEREIGN</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <Link 
                    href={portfolioProjects[1].detailLink}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-text-muted-light dark:text-text-muted-dark hover:text-purple-500 dark:hover:text-purple-400 border-b border-dashed border-border-light dark:border-border-dark hover:border-purple-500 dark:hover:border-purple-400 py-1 transition-all"
                  >
                    <span>Read Case Study Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================================================
            3. HOW WE THINK ABOUT A BUILD
            ================================================== */}
        <section className="py-20 md:py-28 border-b border-border-light dark:border-border-dark/50 bg-white/30 dark:bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                STUDIO METHODOLOGY
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Different Business. Different Direction.
              </h2>
              <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We do not start every project from the same template. The business changes the problem. The problem changes what should be built.
              </p>
            </div>

            {/* Architecture Pathways */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 relative">
              
              {/* Visual Pipeline connection line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-0 opacity-15">
                <div className="w-[1px] h-[350px] bg-dashed border-l border-border-light dark:border-border-dark" />
              </div>

              {/* Bangalore Express Pipeline */}
              <div className="relative z-10 p-6 md:p-8 rounded-3xl border border-amber-500/10 dark:border-amber-500/20 bg-surface-light dark:bg-surface-dark shadow-sm">
                <div className="flex items-center gap-2 mb-6 border-b border-border-light dark:border-border-dark pb-4">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div>
                    <h3 className="text-base font-bold font-display">Bangalore Express</h3>
                    <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark">PROBLEM-SOLVING PIPELINE</span>
                  </div>
                </div>

                {/* Pipeline steps */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-mono text-xs font-bold text-amber-600 dark:text-amber-400 shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">BANGALORE EXPRESS</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">Family restaurant near KIIT campus requesting high local search volume</p>
                    </div>
                  </div>

                  {/* Vector Arrow */}
                  <div className="w-8 flex justify-center py-0.5">
                    <div className="w-[2px] h-4 bg-amber-500/30" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-mono text-xs font-bold text-amber-600 dark:text-amber-400 shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">DISCOVERY</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">Local SEO, Schema markup, and Answer Engine Optimization (AEO) integration</p>
                    </div>
                  </div>

                  {/* Vector Arrow */}
                  <div className="w-8 flex justify-center py-0.5">
                    <div className="w-[2px] h-4 bg-amber-500/30" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center font-mono text-xs font-bold text-amber-600 dark:text-amber-400 shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">DIGITAL MENU</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">High-speed, interactive menu interface that works flawlessly on mobile browsers</p>
                    </div>
                  </div>

                  {/* Vector Arrow */}
                  <div className="w-8 flex justify-center py-0.5">
                    <div className="w-[2px] h-4 bg-amber-500/30" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center font-mono text-xs font-bold text-amber-700 dark:text-amber-400 shrink-0 border border-amber-500">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-amber-700 dark:text-amber-400">CUSTOMER ACTION</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">Physical restaurant visits and table reservation inquiries via the site funnel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOVEREIGN Pipeline */}
              <div className="relative z-10 p-6 md:p-8 rounded-3xl border border-purple-500/10 dark:border-purple-500/20 bg-surface-light dark:bg-surface-dark shadow-sm">
                <div className="flex items-center gap-2 mb-6 border-b border-border-light dark:border-border-dark pb-4">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <div>
                    <h3 className="text-base font-bold font-display">SOVEREIGN</h3>
                    <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark">PROBLEM-SOLVING PIPELINE</span>
                  </div>
                </div>

                {/* Pipeline steps */}
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-mono text-xs font-bold text-purple-600 dark:text-purple-400 shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">SOVEREIGN</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">Premium nightlife venue in Patia, requesting high-exclusivity brand design</p>
                    </div>
                  </div>

                  {/* Vector Arrow */}
                  <div className="w-8 flex justify-center py-0.5">
                    <div className="w-[2px] h-4 bg-purple-500/30" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-mono text-xs font-bold text-purple-600 dark:text-purple-400 shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">ATMOSPHERE</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">A custom dark-mode aesthetic layout mirroring the actual physical space vibe</p>
                    </div>
                  </div>

                  {/* Vector Arrow */}
                  <div className="w-8 flex justify-center py-0.5">
                    <div className="w-[2px] h-4 bg-purple-500/30" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-mono text-xs font-bold text-purple-600 dark:text-purple-400 shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">BRAND EXPERIENCE</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">Exposing weekly nightlife rituals and drink menu schedules through layouts</p>
                    </div>
                  </div>

                  {/* Vector Arrow */}
                  <div className="w-8 flex justify-center py-0.5">
                    <div className="w-[2px] h-4 bg-purple-500/30" />
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center font-mono text-xs font-bold text-purple-700 dark:text-purple-400 shrink-0 border border-purple-500">
                      04
                    </div>
                    <div>
                      <h4 className="text-sm font-bold tracking-wide uppercase text-purple-700 dark:text-purple-400">RESERVATION INTENT</h4>
                      <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">Capture premium table booking inquiries directly via a frictionless web funnel</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            4. FINAL CTA
            ================================================== */}
        <section className="py-20 relative overflow-hidden bg-gradient-light dark:bg-gradient-primary">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white,transparent)]" />
          </div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              Your Business Probably Needs Its Own Direction.
            </h2>
            <p className="text-base md:text-lg mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
              Tell us what you are building, fixing or trying to make better.
            </p>

            <div className="flex justify-center">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-white text-primary-dark hover:text-primary-light font-bold text-sm hover:scale-105 transition-all inline-block shadow-lg"
                >
                  Talk to Pixora Studios
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
