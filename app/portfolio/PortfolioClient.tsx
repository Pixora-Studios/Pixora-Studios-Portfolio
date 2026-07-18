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
  Compass,
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { projects, type Project, type VisualType } from "@/lib/data/projects";

// ==================================================
// VISUAL TREATMENT SYSTEM
// Maps `visualType` → reusable visual configuration.
// Add a new visual type here when a new industry needs
// a distinct treatment. Do NOT create per-slug branches.
// ==================================================

interface VisualConfig {
  accentColor: string;        // Tailwind colour name (amber, purple, sky, …)
  heroTagLabel: string;
  heroIcon: React.ReactNode;
  heroBgClass: string;
  heroBorderClass: string;
  heroHoverBgClass: string;
  labelClass: string;
  tagBorderClass: string;
  tagBgClass: string;
  tagTextClass: string;
  ctaBgClass: string;
  ctaHoverBgClass: string;
  dotBgClass: string;
  heroCenterMockup: React.ReactNode;
}

function getVisualConfig(
  visualType: VisualType,
  isHovered: boolean
): VisualConfig {
  switch (visualType) {
    case "restaurant":
      return {
        accentColor: "amber",
        heroTagLabel: "RESTAURANT / DISCOVERY",
        heroIcon: (
          <Compass
            className={`w-5 h-5 text-amber-500 transition-transform duration-500 ${
              isHovered ? "rotate-45 scale-110" : ""
            }`}
          />
        ),
        heroBgClass:
          "bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.1)_1px,transparent_1px)] [background-size:20px_20px]",
        heroBorderClass: "border-border-light dark:border-border-dark",
        heroHoverBgClass: "bg-amber-500/5 dark:bg-amber-500/[0.03]",
        labelClass:
          "font-mono text-[10px] uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-md",
        tagBorderClass: "border-amber-500/20",
        tagBgClass: "bg-amber-500/5",
        tagTextClass: "text-amber-700 dark:text-amber-400",
        ctaBgClass: "bg-amber-500",
        ctaHoverBgClass: "hover:bg-amber-600",
        dotBgClass: "bg-amber-500",
        heroCenterMockup: (
          <div className="w-full max-w-[280px] p-4 rounded-xl border border-amber-500/20 bg-surface-light/80 dark:bg-surface-dark/80 shadow-md transform scale-95 md:scale-100">
            <div className="flex items-center gap-2 border-b border-border-light dark:border-border-dark pb-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="h-2 w-20 bg-text-muted-light/20 dark:bg-text-muted-dark/20 rounded" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-full bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
              <div className="h-3 w-[85%] bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
              <div className="h-6 w-1/3 bg-amber-500/20 dark:bg-amber-400/20 rounded mt-1 flex items-center justify-center">
                <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                  MENU ITEMS
                </span>
              </div>
            </div>
          </div>
        ),
      };

    case "nightlife":
      return {
        accentColor: "purple",
        heroTagLabel: "NIGHTLIFE / ATMOSPHERE",
        heroIcon: (
          <Sparkles
            className={`w-5 h-5 text-primary-light dark:text-primary-dark transition-transform duration-500 ${
              isHovered ? "scale-125 rotate-12" : ""
            }`}
          />
        ),
        heroBgClass:
          "bg-[radial-gradient(circle_at_1px_1px,rgba(108,99,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]",
        heroBorderClass: "border-border-light dark:border-border-dark",
        heroHoverBgClass: "bg-primary-dark/5 dark:bg-primary-dark/[0.03]",
        labelClass:
          "font-mono text-[10px] uppercase tracking-widest text-primary-light dark:text-primary-dark font-bold bg-primary-light/10 dark:bg-primary-dark/10 px-2.5 py-1 rounded-md",
        tagBorderClass: "border-purple-500/20",
        tagBgClass: "bg-purple-500/5",
        tagTextClass: "text-purple-700 dark:text-purple-400",
        ctaBgClass: "bg-purple-600",
        ctaHoverBgClass: "hover:bg-purple-700",
        dotBgClass: "bg-purple-500",
        heroCenterMockup: (
          <div className="w-full max-w-[280px] p-4 rounded-xl border border-primary-light/20 dark:border-primary-dark/20 bg-surface-light/80 dark:bg-surface-dark/80 shadow-md transform scale-95 md:scale-100">
            <div className="flex items-center justify-between border-b border-border-light dark:border-border-dark pb-2 mb-2">
              <div className="h-2 w-16 bg-text-muted-light/20 dark:bg-text-muted-dark/20 rounded" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary-light dark:bg-primary-dark animate-pulse" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-1/2 bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
              <div className="h-6 w-full bg-primary-light/20 dark:bg-primary-dark/20 rounded mt-1 flex items-center justify-center">
                <span className="text-[9px] font-mono text-primary-light dark:text-primary-dark font-bold">
                  RESERVATION FUNNEL
                </span>
              </div>
            </div>
          </div>
        ),
      };

    default: // "standard"
      return {
        accentColor: "sky",
        heroTagLabel: "DIGITAL EXPERIENCE",
        heroIcon: (
          <Compass
            className={`w-5 h-5 text-sky-500 transition-transform duration-500 ${
              isHovered ? "rotate-45 scale-110" : ""
            }`}
          />
        ),
        heroBgClass:
          "bg-[radial-gradient(circle_at_1px_1px,rgba(14,165,233,0.1)_1px,transparent_1px)] [background-size:20px_20px]",
        heroBorderClass: "border-border-light dark:border-border-dark",
        heroHoverBgClass: "bg-sky-500/5 dark:bg-sky-500/[0.03]",
        labelClass:
          "font-mono text-[10px] uppercase tracking-widest text-sky-600 dark:text-sky-400 font-bold bg-sky-500/10 px-2.5 py-1 rounded-md",
        tagBorderClass: "border-sky-500/20",
        tagBgClass: "bg-sky-500/5",
        tagTextClass: "text-sky-700 dark:text-sky-400",
        ctaBgClass: "bg-sky-600",
        ctaHoverBgClass: "hover:bg-sky-700",
        dotBgClass: "bg-sky-500",
        heroCenterMockup: (
          <div className="w-full max-w-[280px] p-4 rounded-xl border border-sky-500/20 bg-surface-light/80 dark:bg-surface-dark/80 shadow-md transform scale-95 md:scale-100">
            <div className="flex items-center gap-2 border-b border-border-light dark:border-border-dark pb-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
              <div className="h-2 w-20 bg-text-muted-light/20 dark:bg-text-muted-dark/20 rounded" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-full bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
              <div className="h-3 w-[85%] bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
            </div>
          </div>
        ),
      };
  }
}

// ==================================================
// HERO SPLIT PANEL (one panel per project, data-driven)
// ==================================================

interface HeroPanelProps {
  project: Project;
  index: number;
  totalCount: number;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
}

function HeroPanel({
  project,
  index,
  totalCount,
  hoveredIndex,
  onHover,
}: HeroPanelProps) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
  const config = getVisualConfig(project.visualType, isHovered);
  const isNotLast = index < totalCount - 1;

  return (
    <div
      className={`relative flex-1 p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out overflow-hidden ${
        isNotLast
          ? "border-b md:border-b-0 md:border-r border-border-light dark:border-border-dark"
          : ""
      } ${isHovered ? `md:flex-[1.4] ${config.heroHoverBgClass}` : ""} ${
        isOtherHovered ? "md:flex-[0.6] opacity-40" : ""
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Dot grid */}
      <div
        className={`absolute inset-0 ${config.heroBgClass} opacity-70 pointer-events-none`}
      />

      <div className="relative z-10 flex justify-between items-start">
        <span className={config.labelClass}>{config.heroTagLabel}</span>
        {config.heroIcon}
      </div>

      <div className="relative z-10 my-4 flex items-center justify-center pointer-events-none">
        {config.heroCenterMockup}
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-display font-bold tracking-tight text-text-primary-light dark:text-text-primary-dark">
          {project.name}
        </h3>
        <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark mt-1 block">
          {project.shortStatement}
        </span>
      </div>
    </div>
  );
}

// ==================================================
// PROJECT EDITORIAL CARD (one card per project, data-driven)
// ==================================================

interface ProjectEditorialCardProps {
  project: Project;
  index: number;
}

function ProjectEditorialCard({ project, index }: ProjectEditorialCardProps) {
  const config = getVisualConfig(project.visualType, false);
  const isEven = index % 2 === 0;

  return (
    <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-center">
      {/* Context column */}
      <div
        className={`lg:col-span-5 space-y-6 ${
          isEven ? "" : "order-1 lg:order-2"
        }`}
      >
        <span
          className={`text-[10px] font-mono font-bold tracking-[0.25em] px-3 py-1.5 rounded-full uppercase block w-fit ${config.tagTextClass} ${config.tagBgClass} ${config.tagBorderClass} border`}
        >
          {project.label}
        </span>

        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
          {project.name}
        </h2>

        <p className="text-lg md:text-xl font-semibold text-text-primary-light dark:text-text-primary-dark leading-snug">
          &ldquo;{project.shortStatement}&rdquo;
        </p>

        <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
          {project.description}
        </p>

        {/* Core system concepts chips */}
        <div className="pt-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark block mb-2.5">
            CORE SYSTEM CONCEPTS
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${config.tagBorderClass} ${config.tagBgClass} ${config.tagTextClass}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full ${config.ctaBgClass} ${config.ctaHoverBgClass} text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200`}
            >
              <span>Explore {project.name}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <Link
            href={`/portfolio/${project.slug}`}
            className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold text-text-muted-light dark:text-text-muted-dark ${config.tagTextClass.replace("text-", "hover:text-")} border-b border-dashed border-border-light dark:border-border-dark py-1 transition-all`}
          >
            <span>Read Case Study Details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Visual composition column */}
      <div
        className={`lg:col-span-7 ${isEven ? "" : "order-2 lg:order-1"}`}
      >
        <ProjectVisualPanel project={project} />
      </div>
    </div>
  );
}

// ==================================================
// PROJECT VISUAL PANEL
// Maps visualType → reusable visual treatment.
// Add new cases here when a new visual type is needed.
// ==================================================

function ProjectVisualPanel({ project }: { project: Project }) {
  const [afterDarkActive, setAfterDarkActive] = useState(false);

  switch (project.visualType) {
    case "restaurant":
      return (
        <div className="relative w-full aspect-[4/3] rounded-3xl border border-amber-500/10 dark:border-amber-500/20 bg-gradient-to-br from-amber-500/[0.03] to-amber-500/[0.08] p-6 flex flex-col justify-between overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(245,158,11,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          {/* Search discovery mockup */}
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
                  <h4 className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark">
                    Bangalore Express
                  </h4>
                  <CheckCircle className="w-3 h-3 text-amber-500 fill-amber-500/10" />
                </div>
                <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5">
                  Family restaurant near KIIT, Patia
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[9px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-1.5 py-0.5 rounded">
                    AEO Answer Block
                  </span>
                  <span className="text-[8px] font-mono text-text-muted-light dark:text-text-muted-dark">
                    Structured schema loaded
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Digital menu mockup */}
          <div className="relative z-10 w-full max-w-[280px] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-lg self-end mt-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
            <span className="text-[9px] font-mono tracking-widest text-amber-600 dark:text-amber-400 uppercase font-bold block mb-2">
              DIGITAL MENU UNIT
            </span>
            <div className="space-y-2.5">
              <div className="flex justify-between items-center border-b border-border-light dark:border-border-dark/40 pb-2">
                <div>
                  <p className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark">
                    Hakka Noodles
                  </p>
                  <p className="text-[9px] text-text-muted-light dark:text-text-muted-dark">
                    Chinese Specialty
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                  ₹180
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-[9px] font-mono text-text-muted-light dark:text-text-muted-dark">
                    Interactive reservation query link
                  </span>
                </div>
                <div className="w-10 h-4 bg-amber-500/15 rounded flex items-center justify-center">
                  <span className="text-[8px] font-mono font-bold text-amber-600 dark:text-amber-400">
                    BOOK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "nightlife":
      return (
        <div
          className={`relative w-full aspect-[4/3] rounded-3xl border transition-colors duration-500 p-6 flex flex-col justify-between overflow-hidden shadow-lg group ${
            afterDarkActive
              ? "border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-pink-950/20"
              : "border-border-light dark:border-border-dark bg-gradient-to-br from-surface-light dark:from-surface-dark to-border-light/10 dark:to-border-dark/10"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(167,139,250,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <div
            className={`absolute -bottom-10 -left-10 w-52 h-52 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
              afterDarkActive
                ? "bg-purple-600/20 opacity-100"
                : "bg-purple-600/5 opacity-40"
            }`}
          />

          {/* Atmosphere toggle */}
          <div className="relative z-10 self-end flex items-center gap-2.5 bg-surface-light/80 dark:bg-surface-dark/80 border border-border-light dark:border-border-dark px-3 py-2 rounded-xl shadow-md">
            <div className="flex flex-col">
              <span className="text-[9px] font-mono tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase font-bold">
                ATMOSPHERE
              </span>
              <span className="text-[10px] font-bold text-text-primary-light dark:text-text-primary-dark">
                {afterDarkActive ? "After Dark Active" : "Daylight Mode"}
              </span>
            </div>
            <button
              onClick={() => setAfterDarkActive(!afterDarkActive)}
              className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 ${
                afterDarkActive
                  ? "bg-purple-600"
                  : "bg-text-muted-light/30 dark:bg-text-muted-dark/30"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  afterDarkActive ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Typographic branding mockup */}
          <div className="relative z-10 my-4 text-center select-none pointer-events-none">
            <h3
              className={`text-5xl md:text-6xl font-display font-bold tracking-widest leading-none transition-all duration-700 uppercase ${
                afterDarkActive
                  ? "text-purple-400/90 glow-purple"
                  : "text-text-primary-light/20 dark:text-text-primary-dark/20"
              }`}
            >
              SOV
            </h3>
            <p
              className={`text-[10px] font-mono uppercase tracking-[0.4em] mt-2 transition-colors duration-500 ${
                afterDarkActive
                  ? "text-pink-400"
                  : "text-text-muted-light dark:text-text-muted-dark"
              }`}
            >
              Exclusivity &amp; Mood
            </p>
          </div>

          {/* Reservation slot mockup */}
          <div className="relative z-10 w-full max-w-[340px] bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-lg self-start transform group-hover:translate-y-[4px] transition-transform duration-300">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[9px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 font-bold">
                VIP RESERVATION BLOCK
              </span>
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <div className="space-y-2">
              <div className="bg-background-light dark:bg-background-dark/50 border border-border-light dark:border-border-dark p-2 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" />
                  <span className="text-[10px] font-mono text-text-primary-light dark:text-text-primary-dark">
                    Friday Night Rituals
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded">
                  9:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-[9px] text-text-muted-light dark:text-text-muted-dark">
                  Atmosphere-first routing system
                </span>
                <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400">
                  Request VIP Access
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    default: // "standard"
      return (
        <div className="relative w-full aspect-[4/3] rounded-3xl border border-sky-500/10 dark:border-sky-500/20 bg-gradient-to-br from-sky-500/[0.03] to-sky-500/[0.08] p-6 flex flex-col justify-between overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <div className="relative z-10 self-start bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-md w-full max-w-[360px] transform group-hover:translate-x-1.5 transition-transform duration-300">
            <div className="h-3 w-3/4 bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded mb-2" />
            <div className="h-3 w-1/2 bg-text-muted-light/10 dark:bg-text-muted-dark/10 rounded" />
          </div>
          <div className="relative z-10 self-end bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-2xl p-4 shadow-lg w-full max-w-[280px] mt-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-3 w-full bg-sky-500/10 rounded mb-2" />
            <div className="h-6 w-1/2 bg-sky-500/20 rounded flex items-center justify-center">
              <span className="text-[9px] font-mono text-sky-600 dark:text-sky-400 font-bold">
                LIVE SYSTEM
              </span>
            </div>
          </div>
        </div>
      );
  }
}

// ==================================================
// MAIN PORTFOLIO CLIENT
// All rendering is driven from the shared `projects` data.
// Adding a project to projects.ts automatically renders it here.
// ==================================================

export default function PortfolioClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="pt-28 pb-16 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">

        {/* ==================================================
            1. COMPACT HERO — data-driven split panels
            ================================================== */}
        <section className="relative py-12 md:py-16 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl">
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
                {projects.length === 1
                  ? "One project. One business. One idea: the digital experience should fit the business."
                  : `${projects.length} projects. ${projects.length} very different businesses. One idea: the digital experience should fit the business.`}
              </motion.p>
            </div>

            {/* Split hero panels rendered from project data */}
            <div className="relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-border-light dark:border-border-dark flex flex-col md:flex-row bg-surface-light dark:bg-surface-dark">
              {projects.map((project, index) => (
                <HeroPanel
                  key={project.slug}
                  project={project}
                  index={index}
                  totalCount={projects.length}
                  hoveredIndex={hoveredIndex}
                  onHover={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            2. PROJECT EDITORIAL CASE STUDIES — data-driven
            ================================================== */}
        <section className="py-20 md:py-28 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl space-y-24 md:space-y-36">
            {projects.map((project, index) => (
              <ProjectEditorialCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* ==================================================
            3. HOW WE THINK ABOUT A BUILD — data-driven
            ================================================== */}
        <section className="py-20 md:py-28 border-b border-border-light dark:border-border-dark/50 bg-white/30 dark:bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                STUDIO METHODOLOGY
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                Different Business. Different Direction.
              </h2>
              <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                We do not start every project from the same template. The
                business changes the problem. The problem changes what should
                be built.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 relative">
              {/* Vertical divider (decorative) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-0 opacity-15">
                <div className="w-[1px] h-[350px] bg-dashed border-l border-border-light dark:border-border-dark" />
              </div>

              {projects.map((project) => {
                const config = getVisualConfig(project.visualType, false);
                return (
                  <div
                    key={project.slug}
                    className={`relative z-10 p-6 md:p-8 rounded-3xl border bg-surface-light dark:bg-surface-dark shadow-sm ${config.tagBorderClass}`}
                  >
                    <div className="flex items-center gap-2 mb-6 border-b border-border-light dark:border-border-dark pb-4">
                      <div className={`w-3 h-3 rounded-full ${config.dotBgClass}`} />
                      <div>
                        <h3 className="text-base font-bold font-display">
                          {project.name}
                        </h3>
                        <span className="text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark">
                          PROBLEM-SOLVING PIPELINE
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Step 1: The client & context */}
                      <div className="flex gap-4">
                        <div
                          className={`w-8 h-8 rounded-full ${config.tagBgClass} border ${config.tagBorderClass} flex items-center justify-center font-mono text-xs font-bold ${config.tagTextClass} shrink-0`}
                        >
                          01
                        </div>
                        <div>
                          <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">
                            {project.name}
                          </h4>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            {project.challenge.split(".")[0]}.
                          </p>
                        </div>
                      </div>

                      <div className="w-8 flex justify-center py-0.5">
                        <div className={`w-[2px] h-4 ${config.dotBgClass}/30`} />
                      </div>

                      {/* Step 2: The strategic direction */}
                      <div className="flex gap-4">
                        <div
                          className={`w-8 h-8 rounded-full ${config.tagBgClass} border ${config.tagBorderClass} flex items-center justify-center font-mono text-xs font-bold ${config.tagTextClass} shrink-0`}
                        >
                          02
                        </div>
                        <div>
                          <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">
                            DIRECTION
                          </h4>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            {project.solution.split(".")[0]}.
                          </p>
                        </div>
                      </div>

                      <div className="w-8 flex justify-center py-0.5">
                        <div className={`w-[2px] h-4 ${config.dotBgClass}/30`} />
                      </div>

                      {/* Step 3: Key feature built */}
                      <div className="flex gap-4">
                        <div
                          className={`w-8 h-8 rounded-full ${config.tagBgClass} border ${config.tagBorderClass} flex items-center justify-center font-mono text-xs font-bold ${config.tagTextClass} shrink-0`}
                        >
                          03
                        </div>
                        <div>
                          <h4 className="text-sm font-bold tracking-wide uppercase text-text-primary-light dark:text-text-primary-dark">
                            {project.features[0].toUpperCase()}
                          </h4>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            {project.features[1]} and {project.features[2].toLowerCase()} built into the system.
                          </p>
                        </div>
                      </div>

                      <div className="w-8 flex justify-center py-0.5">
                        <div className={`w-[2px] h-4 ${config.dotBgClass}/30`} />
                      </div>

                      {/* Step 4: Outcome */}
                      <div className="flex gap-4">
                        <div
                          className={`w-8 h-8 rounded-full ${config.tagBgClass}/20 flex items-center justify-center font-mono text-xs font-bold ${config.tagTextClass} shrink-0 border ${config.dotBgClass.replace("bg-", "border-")}`}
                        >
                          04
                        </div>
                        <div>
                          <h4 className={`text-sm font-bold tracking-wide uppercase ${config.tagTextClass}`}>
                            CUSTOMER ACTION
                          </h4>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            {project.tags[project.tags.length - 1]} — the designed outcome of the system.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
