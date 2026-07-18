"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Plus,
  Minus,
  Globe,
  Layout,
  Smartphone,
  Cpu,
  Workflow,
  Sparkles,
  Layers,
  Database,
  Mail,
  Zap
} from "lucide-react";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { PageTransition } from "@/components/shared/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";

// Mapping icons for capabilities grid
const capabilityIcons = {
  Websites: Globe,
  Dashboards: Layout,
  "Custom Software": Database,
  "Digital Menus": Smartphone,
  "Ordering Experiences": Zap,
  "Booking Workflows": Workflow,
  "Mobile Products": Layers,
  Automation: Cpu,
  Integrations: Mail,
};

const capabilities = [
  { name: "Websites", desc: "High-performance, custom digital presences designed to convert." },
  { name: "Dashboards", desc: "Centralized data views built to track and optimize your operations." },
  { name: "Custom Software", desc: "Custom-built applications tailored to your exact business operations." },
  { name: "Digital Menus", desc: "Contactless, fast-loading digital dining menus for food businesses." },
  { name: "Ordering Experiences", desc: "Frictionless digital shopping and ordering flows for customers." },
  { name: "Booking Workflows", desc: "Automated reservation and appointment engines that run 24/7." },
  { name: "Mobile Products", desc: "Native and web-based applications built for on-the-go utility." },
  { name: "Automation", desc: "Automating repetitive daily tasks so your team can focus on growth." },
  { name: "Integrations", desc: "Seamlessly connecting your website, booking system, and internal tools." }
];

const faqs = [
  {
    q: "What does Pixora Studios build?",
    a: "We build custom websites, interactive digital customer experiences (like reservation systems and digital menus), and custom business software (like dashboards and internal systems). Everything we build is tailored around a specific business problem, rather than forcing you into a standard template."
  },
  {
    q: "Does Pixora only build websites?",
    a: "No. While we build high-performance websites, we also design and develop custom software, automated booking workflows, QR menu systems, custom web apps, and system integrations. We build whatever digital tool is needed to solve your operational or customer challenges."
  },
  {
    q: "Can Pixora build a custom business system?",
    a: "Yes. We build custom dashboards, internal tools, and management systems that align with how your team already operates, helping you track data and manage workflows without the overhead of generic software."
  },
  {
    q: "Can Pixora build restaurant digital experiences?",
    a: "Yes. We create complete digital systems for dining venues, including contactless QR menus, direct commission-free reservation engines, and customer engagement platforms."
  },
  {
    q: "What is included in a digital experience?",
    a: "It depends on your needs, but it typically includes custom user interface (UI/UX) design, fast frontend development, database integrations, analytics tracking, and secure backend operations."
  },
  {
    q: "Can Pixora work on a project if I am not sure what technology I need?",
    a: "Absolutely. You do not need to know the stack or vocabulary. You bring the business problem or target goal, and we will figure out the right technical direction and build it for you."
  },
  {
    q: "Does Pixora build custom dashboards?",
    a: "Yes. We design and develop custom analytics and management dashboards that pull data from your existing tools or custom databases to help you visualize operations."
  },
  {
    q: "Can Pixora integrate with existing business tools?",
    a: "Yes. We connect your custom builds with third-party services, APIs, CRMs, payment gateways, and communication channels like WhatsApp or email notifications."
  },
  {
    q: "Does Pixora work with businesses outside Bhubaneswar?",
    a: "Yes. We are proud to be based in Bhubaneswar, Odisha, but we work with clients across India and globally through remote collaboration."
  },
  {
    q: "How do I start a project with Pixora?",
    a: "Simply get in touch with us through our contact page. Tell us about your business, the problem you want to solve, or the idea you have, and we will set up a quick call to plan the next steps."
  }
];

export default function ServicesPage() {
  const [hoveredDirIdx, setHoveredDirIdx] = useState<number | null>(null);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Filter ONLY Bangalore Express and SOVEREIGN
  const realProjects = projects.filter(
    (p) => p.slug === "bangalore-express" || p.slug === "sovereign"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // SVGMotion line tracing setup
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut", delay: custom * 0.2 },
        opacity: { duration: 0.3, delay: custom * 0.2 }
      }
    })
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 100, delay: 1.2 + custom * 0.2 }
    })
  };

  return (
    <PageTransition>
      <JsonLd data={faqSchema} />
      <div className="pt-28 md:pt-36 pb-20 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-20 md:mb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-primary-light dark:text-primary-dark font-mono text-xs md:text-sm uppercase tracking-widest block font-bold">
                WHAT PIXORA BUILDS
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-2xl">
                Your Business Has a Problem. <br className="hidden md:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-primary">
                  We Build the Digital Fix.
                </span>
              </h1>
              <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark max-w-xl leading-relaxed">
                Websites, digital experiences and custom systems built around how your business actually works.
              </p>
            </div>

            {/* Hero SVG Animation */}
            <div className="lg:col-span-5 relative flex items-center justify-center py-6">
              <div className="absolute inset-0 bg-primary-light/5 dark:bg-primary-dark/5 blur-3xl rounded-full" />
              
              <svg
                viewBox="0 0 420 300"
                className="w-full max-w-[420px] h-auto overflow-visible relative z-10"
              >
                <defs>
                  <linearGradient id="svgLineGrad" x1="60" y1="150" x2="340" y2="150" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--primary, #5B52E8)" />
                    <stop offset="100%" stopColor="var(--secondary, #8B5CF6)" />
                  </linearGradient>
                </defs>

                {/* Connection Lines */}
                {/* To Websites */}
                <motion.path
                  d="M 60 150 C 180 150, 180 60, 280 60"
                  fill="none"
                  stroke="url(#svgLineGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={lineVariants}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                />
                {/* To Digital Experiences */}
                <motion.path
                  d="M 60 150 L 280 150"
                  fill="none"
                  stroke="url(#svgLineGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={lineVariants}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                />
                {/* To Custom Systems */}
                <motion.path
                  d="M 60 150 C 180 150, 180 240, 280 240"
                  fill="none"
                  stroke="url(#svgLineGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={lineVariants}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                />

                {/* Nodes */}
                {/* Center Problem Node */}
                <g>
                  <circle cx="60" cy="150" r="12" className="fill-primary-light dark:fill-primary-dark" />
                  <circle
                    cx="60"
                    cy="150"
                    r="24"
                    className="stroke-primary-light/30 dark:stroke-primary-dark/30 stroke-2 fill-none animate-pulse"
                  />
                  <text
                    x="60"
                    y="185"
                    textAnchor="middle"
                    className="text-[10px] font-mono font-bold fill-text-primary-light dark:fill-text-primary-dark tracking-wider"
                  >
                    PROBLEM
                  </text>
                </g>

                {/* Websites Solution Node */}
                <motion.g variants={nodeVariants} custom={1} initial="hidden" animate="visible">
                  <circle cx="280" cy="60" r="8" className="fill-secondary-light dark:fill-secondary-dark" />
                  <text
                    x="298"
                    y="64"
                    textAnchor="start"
                    className="text-xs md:text-sm font-display font-bold fill-text-primary-light dark:fill-text-primary-dark"
                  >
                    Websites
                  </text>
                </motion.g>

                {/* Digital Experiences Solution Node */}
                <motion.g variants={nodeVariants} custom={2} initial="hidden" animate="visible">
                  <circle cx="280" cy="150" r="8" className="fill-primary-light dark:fill-primary-dark" />
                  <text
                    x="298"
                    y="154"
                    textAnchor="start"
                    className="text-xs md:text-sm font-display font-bold fill-text-primary-light dark:fill-text-primary-dark"
                  >
                    Digital Experiences
                  </text>
                </motion.g>

                {/* Custom Systems Solution Node */}
                <motion.g variants={nodeVariants} custom={3} initial="hidden" animate="visible">
                  <circle cx="280" cy="240" r="8" className="fill-secondary-light dark:fill-secondary-dark" />
                  <text
                    x="298"
                    y="244"
                    textAnchor="start"
                    className="text-xs md:text-sm font-display font-bold fill-text-primary-light dark:fill-text-primary-dark"
                  >
                    Custom Systems
                  </text>
                </motion.g>
              </svg>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT WE BUILD */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Different Problems. Different Builds.
            </h2>
            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              Some businesses need a better digital front door. Others need a system that makes the work behind the scenes less painful.
            </p>
          </div>

          <div className="space-y-6">
            {services.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 md:p-8 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-md transition-all duration-300 hover:border-primary-light/50 dark:hover:border-primary-dark/50 hover:bg-surface-light/50 dark:hover:bg-surface-dark/50 group gap-6"
              >
                {/* Index & Name */}
                <div className="w-full lg:w-1/4 flex items-center gap-3 shrink-0">
                  <span className="text-sm font-mono text-primary-light dark:text-primary-dark font-bold">
                    {category.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-text-muted-light dark:text-text-muted-dark font-mono">
                    {category.id === "experiences" ? "Digital Experiences" : category.id === "systems" ? "Custom Systems" : category.id}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="w-full lg:w-1/2 space-y-2">
                  <h3 className="text-lg md:text-xl font-display font-bold group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Semantic tags */}
                <div className="w-full lg:w-1/4 flex flex-wrap gap-2 justify-start lg:justify-end shrink-0">
                  {category.semanticTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-border-light/40 dark:bg-border-dark/40 border border-border-light/80 dark:border-border-dark/80 text-text-muted-light dark:text-text-muted-dark group-hover:border-primary-light/20 dark:group-hover:border-primary-dark/20 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: SERVICE CAPABILITIES */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Built Around the Problem. Not a Service Menu.
            </h2>
            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-xl mx-auto">
              We do not force every business into the same stack or workflow. We figure out what needs to work better, then build from there.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilities.map((cap) => {
              const Icon = capabilityIcons[cap.name as keyof typeof capabilityIcons] || Sparkles;
              return (
                <motion.div
                  key={cap.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light/20 dark:bg-surface-dark/20 backdrop-blur-sm transition-all duration-300 hover:border-primary-light/35 dark:hover:border-primary-dark/35 hover:bg-surface-light/40 dark:hover:bg-surface-dark/40"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{cap.name}</h3>
                  <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: HOW TO CHOOSE THE RIGHT DIRECTION */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              You Don&apos;t Need to Know What to Call It Yet.
            </h2>
            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-xl mx-auto">
              Website? Dashboard? App? Custom system? Start with the problem. We can figure out the digital direction with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "I NEED A BETTER DIGITAL PRESENCE",
                description: "I want my business to look and work better online.",
                eyebrow: "01 — PRESENCE",
                icon: Globe,
              },
              {
                title: "I NEED A BETTER CUSTOMER EXPERIENCE",
                description: "I want customers to discover, interact or order more easily.",
                eyebrow: "02 — EXPERIENCE",
                icon: Smartphone,
              },
              {
                title: "I NEED A BETTER BUSINESS WORKFLOW",
                description: "I want my team to manage, automate or operate more efficiently.",
                eyebrow: "03 — WORKFLOW",
                icon: Cpu,
              },
            ].map((option, idx) => {
              const Icon = option.icon;
              const isDimmed = hoveredDirIdx !== null && hoveredDirIdx !== idx;
              return (
                <Link key={idx} href="/contact" className="block">
                  <motion.div
                    onHoverStart={() => setHoveredDirIdx(idx)}
                    onHoverEnd={() => setHoveredDirIdx(null)}
                    animate={{ opacity: isDimmed ? 0.45 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="h-full p-8 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/20 dark:bg-surface-dark/20 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-primary-light dark:hover:border-primary-dark hover:bg-surface-light/40 dark:hover:bg-surface-dark/40 cursor-pointer group"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark block mb-6">
                        {option.eyebrow}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-light dark:bg-gradient-primary p-[1px] mb-6">
                        <div className="w-full h-full rounded-[15px] bg-background-light dark:bg-background-dark flex items-center justify-center text-text-primary-light dark:text-text-primary-dark">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 leading-tight group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-200">
                        {option.title}
                      </h3>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        {option.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 font-mono text-xs font-bold text-primary-light dark:text-primary-dark">
                      <span>EXPLORE DIRECTION</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: REAL WORK */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              A Couple of Things We&apos;ve Actually Built.
            </h2>
            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark">
              No hypothetical stats, fake numbers, or unverified case studies. Just real software we developed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {realProjects.map((project) => {
              const isBangalore = project.slug === "bangalore-express";
              const category = isBangalore
                ? "Restaurant Digital Experience"
                : "Nightlife Digital Experience";
              const description = isBangalore
                ? "A digital restaurant experience built around discovery, menu access and the next customer action."
                : "A premium digital presence designed for a nightlife brand where visual identity does the heavy lifting.";

              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-md overflow-hidden group flex flex-col h-full"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden w-full bg-border-light dark:bg-border-dark">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light/40 dark:from-background-dark/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-primary-light dark:text-primary-dark uppercase mb-2 block">
                        {category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-display font-bold mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                        {description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 mt-auto">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center space-x-2 font-mono text-xs font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                      >
                        <span>READ CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 font-mono text-xs font-bold text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors ml-auto"
                        >
                          <span>VISIT LIVE SITE</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: FAQ ACCORDION */}
        <section className="container mx-auto px-6 mb-24 md:mb-32">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-primary-light dark:text-primary-dark font-mono text-xs md:text-sm uppercase tracking-widest block mb-4 font-bold">
              FAQ
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
              Common Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border-light dark:border-border-dark rounded-2xl overflow-hidden bg-surface-light/10 dark:bg-surface-dark/10 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-light/20 dark:hover:bg-surface-dark/20 transition-colors"
                >
                  <span className="text-base md:text-lg font-bold pr-4">{faq.q}</span>
                  {openFaqIdx === index ? (
                    <Minus className="w-4 h-4 text-primary-light dark:text-primary-dark shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-text-muted-dark shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIdx === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-16 border border-border-light dark:border-border-dark bg-surface-light/20 dark:bg-surface-dark/20 backdrop-blur-md text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/5 via-transparent to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5 pointer-events-none" />
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 leading-tight">
              Not Sure What You Need Yet?
            </h2>
            <p className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark mb-10 max-w-xl mx-auto leading-relaxed">
              That&apos;s okay. Start with the problem, the idea or the thing that is not working. We&apos;ll figure out the digital direction with you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm md:text-base hover:scale-105 transition-transform text-center shadow-lg"
              >
                Talk to Pixora
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark text-text-primary-light dark:text-text-primary-dark font-bold text-sm md:text-base hover:bg-surface-light/40 dark:hover:bg-surface-dark/40 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
