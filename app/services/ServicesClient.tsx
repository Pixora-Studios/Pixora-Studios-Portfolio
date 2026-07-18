"use client";

import { useState } from "react";
import Link from "next/link";
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
  Zap,
  CheckCircle2,
  Lock,
  Search,
  Palette,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { projects } from "@/lib/data/projects";
import { PageTransition } from "@/components/shared/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  chips: string[];
  icon: any;
  slugId: string;
}

const buildAndDesignServices: ServiceItem[] = [
  {
    id: "websites",
    title: "Website Design & Development",
    description: "Custom UI/UX and super-fast, responsive web builds tailored for conversions, client trust, and flawless screen layouts.",
    chips: ["Custom UI/UX", "Next.js", "Tailwind CSS", "SEO Architecture", "Fast LCP Scores"],
    icon: Globe,
    slugId: "websites"
  },
  {
    id: "branding",
    title: "Brand Identity & Design",
    description: "High-fidelity modern brand identity packages, fully custom vector logos, strict typography scales, and elegant color systems.",
    chips: ["Logo Design", "Styleguides", "Typography Systems", "Color Palettes", "Marketing Assets"],
    icon: Palette,
    slugId: "branding"
  }
];

const runAndGrowServices: ServiceItem[] = [
  {
    id: "booking",
    title: "Appointment Booking Systems",
    description: "Automated direct booking engines that run 24/7. Minimize calendar friction and eliminate platform fees completely.",
    chips: ["Real-time Slots", "Calendar Sync", "WhatsApp Alerts", "Admin Dashboard"],
    icon: CalendarIcon,
    slugId: "booking"
  },
  {
    id: "seo",
    title: "SEO & Google Ranking",
    description: "Data-driven local search dominance. Optimization of technical crawls, structured rich schema layouts, and copy targeting.",
    chips: ["Local SEO", "JSON-LD Schemas", "Google Business Profile", "Content Mapping"],
    icon: Search,
    slugId: "seo"
  },
  {
    id: "hosting",
    title: "Hosting & Maintenance",
    description: "Secure, high-availability hosting management. Real-time scanning, automatic offsite backups, and monthly layout tune-ups.",
    chips: ["Cloud VPS", "Daily Backups", "Uptime Monitoring", "Core Updates", "Support SLA"],
    icon: ShieldCheck,
    slugId: "hosting"
  },
  {
    id: "pos-payment",
    title: "Payment Gateway & POS Integration",
    description: "Direct customer transactions and payment flows linked to your local register. Setup of POS terminals and order printers.",
    chips: ["UPI Gateway", "Stripe / Razorpay", "Petpooja POS Sync", "Kitchen Ticket Printers"],
    icon: CreditCard,
    slugId: "pos"
  }
];

function CalendarIcon(props: any) {
  return <Workflow {...props} />;
}

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

  return (
    <PageTransition>
      <JsonLd data={faqSchema} />
      <div className="pt-24 md:pt-28 pb-16 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-16 md:mb-20 text-center max-w-4xl pt-8">
          <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-widest block mb-3">
            WHAT PIXORA BUILDS
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
            Services Built Around Your Business.
          </h1>
          <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto leading-relaxed">
            We build custom digital assets that solve operational friction, capture local attention, and fuel real conversion.
          </p>
        </section>

        {/* SERVICES LISTING GROUPED BY FUNCTION */}
        <section className="container mx-auto px-6 space-y-20 mb-24 max-w-5xl">

          {/* GROUP 1: BUILD & DESIGN */}
          <div className="space-y-8">
            <div className="border-b border-border-light dark:border-border-dark/80 pb-3">
              <h2 className="text-xl md:text-2xl font-display font-bold tracking-tight">
                Build & Design
              </h2>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                Establish high-converting presence and branding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {buildAndDesignServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.slugId}
                    className="p-6 md:p-8 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-md hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark mb-4">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-bold mb-2">
                        {service.title}
                      </h3>

                      <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Tags/Chips row */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.chips.map((chip) => (
                          <span
                            key={chip}
                            className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-border-light/40 dark:bg-border-dark/40 border border-border-light/80 dark:border-border-dark/80 text-text-muted-light dark:text-text-muted-dark"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compact Labeled Visual Slot */}
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark/40">
                      <div className="text-[10px] font-mono p-3 rounded bg-surface-light/50 dark:bg-surface-dark/50 border border-dashed border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark text-center select-none">
                        {`{/* VISUAL SLOT: ${service.id} — custom illustration, add later */}`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GROUP 2: RUN & GROW */}
          <div className="space-y-8">
            <div className="border-b border-border-light dark:border-border-dark/80 pb-3">
              <h2 className="text-xl md:text-2xl font-display font-bold tracking-tight">
                Run & Grow
              </h2>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                Automate operations, accept payments, and drive customer traffic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {runAndGrowServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    id={service.slugId}
                    className="p-6 md:p-8 rounded-3xl border border-border-light dark:border-border-dark bg-surface-light/30 dark:bg-surface-dark/30 backdrop-blur-md hover:border-primary-light/40 dark:hover:border-primary-dark/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark mb-4">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-bold mb-2">
                        {service.title}
                      </h3>

                      <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Tags/Chips row */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.chips.map((chip) => (
                          <span
                            key={chip}
                            className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-border-light/40 dark:bg-border-dark/40 border border-border-light/80 dark:border-border-dark/80 text-text-muted-light dark:text-text-muted-dark"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Compact Labeled Visual Slot */}
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark/40">
                      <div className="text-[10px] font-mono p-3 rounded bg-surface-light/50 dark:bg-surface-dark/50 border border-dashed border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark text-center select-none">
                        {`{/* VISUAL SLOT: ${service.id} — custom illustration, add later */}`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* SECTION 5: REAL WORK */}
        <section className="container mx-auto px-6 mb-24 max-w-5xl">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
              Real Work We&apos;ve Developed
            </h2>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              No hypothetical stats or fake templates. Just real client projects built in Bhubaneswar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-light/40 dark:from-background-dark/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-primary-light dark:text-primary-dark uppercase mb-2 block">
                        {category}
                      </span>
                      <h3 className="text-xl font-display font-bold mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
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
        <section className="container mx-auto px-6 mb-24 max-w-4xl">
          <div className="max-w-3xl mb-12 text-center mx-auto">
            <span className="text-primary-light dark:text-primary-dark font-mono text-xs uppercase tracking-widest block mb-3 font-bold">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
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
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface-light/20 dark:hover:bg-surface-dark/20 transition-colors"
                >
                  <span className="text-sm md:text-base font-bold pr-4">{faq.q}</span>
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
                      <div className="px-6 pb-5 text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
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
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="rounded-3xl p-8 md:p-14 border border-border-light dark:border-border-dark bg-surface-light/20 dark:bg-surface-dark/20 backdrop-blur-md text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/5 via-transparent to-secondary-light/5 dark:from-primary-dark/5 dark:to-secondary-dark/5 pointer-events-none" />
            
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">
              Get a Custom Quote
            </h2>
            <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark mb-8 max-w-lg mx-auto leading-relaxed">
              Every custom design and development build starts with a scope assessment. Tell us what you want to achieve, and we&apos;ll design the plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 transition-transform text-center shadow-lg"
              >
                Book a Call
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-border-light dark:border-border-dark hover:border-primary-light dark:hover:border-primary-dark text-text-primary-light dark:text-text-primary-dark font-bold text-sm hover:bg-surface-light/40 dark:hover:bg-surface-dark/40 transition-colors text-center"
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
