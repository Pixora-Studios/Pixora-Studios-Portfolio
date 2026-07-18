"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, Minus, ArrowRight, User } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { 
  HeroVisual, 
  ProblemTransformationVisual, 
  ExistsPipelineVisual, 
  LayeredBuildVisual 
} from "@/components/about/AboutVisuals";

// FAQ Items
const faqs = [
  {
    q: "What is Pixora Studios?",
    a: "Pixora Studios is a digital solutions studio based in Bhubaneswar, Odisha. We design and build websites, interactive digital experiences, and custom systems tailored around how businesses work.",
  },
  {
    q: "What does Pixora Studios build?",
    a: "We build custom websites, interactive client portals, business operations dashboards, integrations, and automation systems, as well as ordering/menu systems tailored to specific business workflows.",
  },
  {
    q: "Is Pixora Studios only a website company?",
    a: "No. While we build premium websites, we also design and implement complex internal business tools, operational dashboards, database integrations, and customized systems that solve workflow bottlenecks.",
  },
  {
    q: "Can Pixora Studios build custom business systems?",
    a: "Yes. We analyze your specific business processes and engineer custom software, dashboards, and automated integrations to simplify, speed up, or automate your workflows.",
  },
  {
    q: "Where is Pixora Studios based?",
    a: "Pixora Studios is based in Bhubaneswar, Odisha, India, and works with local clients in Odisha and clients across India remotely.",
  },
];

// How We Think Principles
const principles = [
  {
    id: "01",
    title: "START WITH THE PROBLEM",
    description: "We do not begin with a technology stack. We begin with what needs to work better.",
  },
  {
    id: "02",
    title: "BUILD WHAT FITS",
    description: "Every business has a different workflow. We do not force every problem into the same template.",
  },
  {
    id: "03",
    title: "MAKE IT USEFUL",
    description: "A beautiful interface is only useful when it makes something clearer, faster or easier.",
  },
  {
    id: "04",
    title: "KEEP IT MOVING",
    description: "Digital products should improve as the business does.",
  },
];

// What We Build Categories
const categories = [
  {
    title: "WEBSITES",
    description: "Digital foundations built around your brand, customers and goals.",
  },
  {
    title: "DIGITAL EXPERIENCES",
    description: "Customer-facing experiences for discovery, interaction and action.",
  },
  {
    title: "CUSTOM SYSTEMS",
    description: "Dashboards, software and business tools built around real workflows.",
  },
  {
    title: "CONNECTED WORKFLOWS",
    description: "Integrations, automation and digital systems that work better together.",
  },
];

export default function AboutClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-16 overflow-hidden bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
        <JsonLd data={faqSchema} />

        {/* 1. HERO SECTION */}
        <section className="relative py-16 md:py-20 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-primary-light dark:text-primary-dark font-mono text-[11px] font-bold uppercase tracking-[0.3em] block mb-4"
                >
                  ABOUT PIXORASTUDIOS
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-5xl font-display font-bold leading-[1.15] mb-6 tracking-tight"
                >
                  We Build Digital Systems Around How Businesses Work.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg text-text-muted-light dark:text-text-muted-dark max-w-xl leading-relaxed"
                >
                  Pixora Studios builds websites, digital experiences and custom systems around real business problems.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center lg:justify-end"
              >
                <HeroVisual />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. WHAT IS PIXORASTUDIOS? */}
        <section className="py-20 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                  OUR ESSENCE
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
                  Not Just Another Website Studio.
                </h2>
                <div className="space-y-5 text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed max-w-xl">
                  <p>
                    Pixora Studios is a digital solutions studio based in Bhubaneswar, Odisha. We build websites, digital experiences and custom systems around how businesses actually work.
                  </p>
                  <p>
                    Sometimes that means a better digital presence. Sometimes it means a customer experience, dashboard or custom workflow. We start with the problem and figure out what should be built.
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ProblemTransformationVisual />
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY PIXORASTUDIOS EXISTS */}
        <section className="py-20 border-b border-border-light dark:border-border-dark/50 bg-white/30 dark:bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                  THE WHY
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">
                  Most Businesses Don&apos;t Need More Software.
                </h2>
                <p className="text-lg md:text-xl text-primary-light dark:text-primary-dark font-semibold leading-relaxed max-w-lg">
                  They need the right thing to work better.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ExistsPipelineVisual />
              </div>
            </div>
          </div>
        </section>

        {/* 4. HOW WE THINK */}
        <section className="py-20 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                PHILOSOPHY
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                How We Think
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {principles.map((principle, idx) => (
                <motion.div
                  key={principle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-primary-light dark:text-primary-dark tracking-wider block mb-4">
                      {principle.id} {"// PRINCIPLE"}
                    </span>
                    <h3 className="text-lg font-bold mb-3 tracking-wide text-text-primary-light dark:text-text-primary-dark">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHAT WE BUILD */}
        <section className="py-20 border-b border-border-light dark:border-border-dark/50 bg-white/30 dark:bg-white/[0.01]">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                  CAPABILITIES
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">
                  Different Problems. Different Builds.
                </h2>
                <p className="text-base text-text-muted-light dark:text-text-muted-dark max-w-xl leading-relaxed mb-8">
                  From digital presence to custom business systems, we build around what the business actually needs.
                </p>

                <div className="space-y-6">
                  {categories.map((cat) => (
                    <Link key={cat.title} href="/services" className="group block">
                      <div className="flex items-start justify-between border-b border-border-light dark:border-border-dark/30 pb-4">
                        <div className="pr-4">
                          <h4 className="text-sm font-bold tracking-wider text-text-primary-light dark:text-text-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-200">
                            {cat.title}
                          </h4>
                          <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">
                            {cat.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-text-muted-light dark:text-text-muted-dark group-hover:text-primary-light dark:group-hover:text-primary-dark group-hover:translate-x-1.5 transition-all shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <LayeredBuildVisual />
              </div>
            </div>
          </div>
        </section>

        {/* 6. BUILT BY DEBIDUTTA */}
        <section className="py-20 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                  FOUNDERSHIP
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
                  Built by Debidutta.
                </h2>
                <div className="space-y-5 text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed max-w-xl">
                  <p>
                    Pixora Studios is founder-led by Debidutta Acharya, a software engineer and builder based in Bhubaneswar, Odisha.
                  </p>
                  <p>
                    With a background in full-stack development, Debidutta started Pixora Studios to build practical digital solutions for businesses — not just another collection of websites.
                  </p>
                </div>
              </div>

              {/* Founder visual image slot with aspect ratio */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[32px] border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-hidden flex flex-col items-center justify-center p-6 shadow-xl text-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  
                  <div className="w-16 h-16 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mb-4 text-primary-light dark:text-primary-dark relative z-10">
                    <User className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark relative z-10">
                    Debidutta Acharya
                  </h4>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1.5 relative z-10 max-w-[200px]">
                    Software Engineer & Founder
                  </p>

                  <div className="absolute bottom-6 left-6 right-6 border border-dashed border-border-light dark:border-border-dark/60 rounded-xl p-2.5 bg-background-light/50 dark:bg-background-dark/50">
                    <span className="text-[10px] font-mono tracking-wider text-text-muted-light dark:text-text-muted-dark block">
                      FOUNDER PORTRAIT SLOT
                    </span>
                    <span className="text-[8px] text-text-muted-light/60 dark:text-text-muted-dark/60 block mt-1">
                      (Replace with founder image asset)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section className="py-20 border-b border-border-light dark:border-border-dark/50">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-[0.25em] block mb-3">
                QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-border-light dark:border-border-dark rounded-2xl overflow-hidden bg-surface-light dark:bg-surface-dark/50"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-light dark:hover:bg-surface-dark transition-colors duration-200"
                    >
                      <span className="text-base font-bold text-text-primary-light dark:text-text-primary-dark pr-4">{faq.q}</span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-primary-light dark:text-primary-dark shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-text-muted-light dark:text-text-muted-dark shrink-0" />
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed border-t border-border-light dark:border-border-dark/20 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-20 relative overflow-hidden bg-gradient-light dark:bg-gradient-primary">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,white,transparent)]" />
          </div>

          <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              Have a Business Problem Worth Solving?
            </h2>
            <p className="text-base md:text-lg mb-8 opacity-90 max-w-xl mx-auto leading-relaxed">
              Start with the problem. We can figure out the digital direction together.
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
