"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  UtensilsCrossed,
  QrCode,
  LayoutDashboard,
  Smartphone,
  Bot,
  Code2,
  Lightbulb,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Mail,
  MapPin,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import Link from "next/link";
import { PageTransition } from "@/components/shared/PageTransition";
import { JsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

// ────────────────────────────────────────────────────────────
// DATA
// ────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  {
    id: "website",
    label: "Website",
    icon: Globe,
    hint: "Tell us about your business and the goals you have for your website.",
  },
  {
    id: "restaurant",
    label: "Restaurant Digital Experience",
    icon: UtensilsCrossed,
    hint: "Tell us about your restaurant, outlets, and the experience you want to build.",
  },
  {
    id: "qr-menu",
    label: "QR Menu / Ordering",
    icon: QrCode,
    hint: "Tell us about your current menu setup and what you want to digitize.",
  },
  {
    id: "business-software",
    label: "Business Software",
    icon: LayoutDashboard,
    hint: "Tell us about your workflow and what you need to manage or automate.",
  },
  {
    id: "mobile-app",
    label: "Mobile App",
    icon: Smartphone,
    hint: "Tell us about your users and what they should be able to do in the app.",
  },
  {
    id: "ai-automation",
    label: "AI / Automation",
    icon: Bot,
    hint: "Tell us what repetitive tasks or processes you would like to improve.",
  },
  {
    id: "custom-software",
    label: "Custom Software",
    icon: Code2,
    hint: "Describe the problem you are trying to solve as clearly as you can.",
  },
  {
    id: "idea",
    label: "I Have an Idea",
    icon: Lightbulb,
    hint: "Share your idea and what you are hoping it will help you achieve.",
  },
] as const;

const CAPABILITIES = [
  {
    title: "Custom Websites",
    desc: "Websites designed to turn attention into action.",
    icon: Globe,
  },
  {
    title: "Restaurant Experiences",
    desc: "Digital menus, ordering workflows and restaurant-facing systems.",
    icon: UtensilsCrossed,
  },
  {
    title: "Business Software",
    desc: "Dashboards, workflows and custom tools for how your business operates.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile Products",
    desc: "Mobile experiences built around your users and use case.",
    icon: Smartphone,
  },
  {
    title: "AI & Automation",
    desc: "Reduce repetitive work and explore smarter digital workflows.",
    icon: Bot,
  },
  {
    title: "Custom Builds",
    desc: "If you can clearly describe the problem, we can explore the solution.",
    icon: Code2,
  },
];

const CONVERSATION_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "We learn about your business, users and goals.",
  },
  {
    num: "02",
    title: "Shape",
    desc: "We help turn the idea into a clearer digital solution.",
  },
  {
    num: "03",
    title: "Build",
    desc: "If Pixora is the right fit, we plan and build it with you.",
  },
];

const RIGHT_PANEL_STEPS = [
  {
    num: "01",
    title: "Tell us the idea",
    desc: "Share what you are trying to build or fix.",
  },
  {
    num: "02",
    title: "We understand the problem",
    desc: "We look at your goals, workflow and business context.",
  },
  {
    num: "03",
    title: "We figure out the next step",
    desc: "You get a clearer direction before we talk about building.",
  },
];

const FAQS = [
  {
    q: "What does Pixora Studios build?",
    a: "Pixora Studios builds custom digital solutions including websites, restaurant digital systems, QR menus, business software, mobile applications, and AI and automation tools. We work from the problem first and figure out the right solution with you.",
  },
  {
    q: "Can I contact Pixora if I only have an idea?",
    a: "Yes. You do not need a brief, a specification, or a budget breakdown to start a conversation. Share what you are thinking about and we will work through it together.",
  },
  {
    q: "Do I need a technical specification before contacting Pixora?",
    a: "No. The first conversation is about understanding your business, your users, and what you need. We help shape the direction before we talk about building anything.",
  },
  {
    q: "Can Pixora build a custom website for my business?",
    a: "Yes. We build custom websites tailored to the specific goals and workflows of your business. We do not use generic templates.",
  },
  {
    q: "Can Pixora build restaurant digital systems?",
    a: "Yes. We build restaurant digital experiences including digital menus, QR ordering systems, and restaurant-facing operational tools.",
  },
  {
    q: "Can Pixora build custom business software?",
    a: "Yes. We build dashboards, custom workflows, business management tools, and software tailored to how your business actually operates.",
  },
  {
    q: "Does Pixora work with businesses outside Bhubaneswar?",
    a: "Yes. Pixora Studios is based in Bhubaneswar, Odisha and works with businesses remotely. The first conversation can happen over a call, chat, or email.",
  },
  {
    q: "How does the first conversation work?",
    a: "You share what you are trying to build or fix. We ask questions to understand your business context and goals. We then figure out what the right next step looks like.",
  },
  {
    q: "How long does it take to start a project?",
    a: "After the initial conversation and alignment on direction, most projects begin within one to two weeks. The timeline depends on the complexity of what you need.",
  },
  {
    q: "Can Pixora work with my existing software or workflow?",
    a: "Yes. Many projects involve integrating with or improving existing systems. Share what you currently use and we can assess what is possible.",
  },
];

// ────────────────────────────────────────────────────────────
// HERO VISUAL — lightweight SVG node diagram
// ────────────────────────────────────────────────────────────

function HeroVisual() {
  const nodes = [
    { label: "Idea", cx: 52, cy: 48 },
    { label: "Design", cx: 228, cy: 48 },
    { label: "Build", cx: 228, cy: 152 },
    { label: "Launch", cx: 52, cy: 152 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      className="relative w-[260px] mx-auto select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 280 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <defs>
          <linearGradient id="hv-lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="hv-centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="50%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#EC4899" />
          </radialGradient>
          <filter id="hv-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines from center to each node */}
        {nodes.map((node, i) => (
          <motion.line
            key={i}
            x1={140}
            y1={100}
            x2={node.cx}
            y2={node.cy}
            stroke="url(#hv-lineGrad)"
            strokeWidth="1.5"
            strokeDasharray="5 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
          />
        ))}

        {/* Outer ring */}
        <motion.circle
          cx={140}
          cy={100}
          r={36}
          stroke="url(#hv-lineGrad)"
          strokeWidth="1"
          strokeDasharray="4 6"
          fill="none"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.35, rotate: 360 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          }}
          style={{ transformOrigin: "140px 100px" }}
        />

        {/* Center node */}
        <motion.circle
          cx={140}
          cy={100}
          r={28}
          fill="url(#hv-centerGrad)"
          filter="url(#hv-glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 220, damping: 15 }}
          style={{ transformOrigin: "140px 100px" }}
        />

        {/* Center label */}
        <motion.text
          x={140}
          y={97}
          textAnchor="middle"
          fill="white"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="var(--font-syne), sans-serif"
          letterSpacing="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          PIXORA
        </motion.text>
        <motion.text
          x={140}
          y={107}
          textAnchor="middle"
          fill="rgba(255,255,255,0.65)"
          fontSize="5.5"
          fontFamily="var(--font-jetbrains-mono), monospace"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          STUDIOS
        </motion.text>

        {/* Satellite nodes */}
        {nodes.map((node, i) => (
          <g key={node.label}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={20}
              fill="#0A0A0F"
              stroke="url(#hv-lineGrad)"
              strokeWidth="1.2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.5 + i * 0.12,
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
            <motion.text
              x={node.cx}
              y={node.cy + 3.5}
              textAnchor="middle"
              fill="#A78BFA"
              fontSize="6.5"
              fontWeight="600"
              fontFamily="var(--font-jetbrains-mono), monospace"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 + i * 0.12 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Ambient glow beneath visual */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-16 bg-primary-dark/30 blur-2xl rounded-full pointer-events-none" />
    </motion.div>
  );
}

// ────────────────────────────────────────────────────────────
// FORM FIELD — accessible, visible label
// ────────────────────────────────────────────────────────────

function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark"
      >
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-red-500 ml-0.5">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        autoComplete={autoComplete}
        className={cn(
          "w-full px-4 py-3 rounded-xl border bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-colors focus:border-primary-light dark:focus:border-primary-dark placeholder:text-text-muted-light/50 dark:placeholder:text-text-muted-dark/50",
          error
            ? "border-red-400/70"
            : "border-border-light dark:border-border-dark"
        )}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="text-xs text-red-500"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────────────────

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleProjectTypeSelect = (typeId: string) => {
    const newId = formData.projectType === typeId ? "" : typeId;
    setFormData((prev) => ({ ...prev, projectType: newId }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Your name is required.";
    if (!formData.email.trim()) {
      e.email = "Work email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!formData.businessName.trim())
      e.businessName = "Business or company name is required.";
    if (!formData.message.trim())
      e.message = "Please tell us about your project.";
    return e;
  };

  const handleBlur = (field: string) => {
    const allErrors = validate();
    if (allErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: allErrors[field] }));
    } else {
      setErrors((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [field]: _removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessName: formData.businessName,
          projectType: formData.projectType,
          message: formData.message,
          // Legacy API fields — kept for backward compatibility
          phone: "",
          businessType: formData.projectType,
          budget: "",
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setIsSuccess(true);
        setSubmitError(null);
      } else {
        setSubmitError(
          data?.error ?? "Unable to send your message right now. Please try again."
        );
      }
    } catch {
      setSubmitError("Unable to send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedType = PROJECT_TYPES.find((t) => t.id === formData.projectType);

  // ── FAQPage JSON-LD (BreadcrumbList is emitted server-side in page.tsx)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <PageTransition>
      <JsonLd data={faqSchema} />

      {/* ══════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Ambient background glows */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-[8%] w-[520px] h-[520px] bg-primary-dark/[0.07] rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-[4%] w-[340px] h-[340px] bg-secondary-dark/[0.06] rounded-full blur-[90px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 xl:gap-16 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-gradient-to-r from-primary-dark to-secondary-dark" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                  Start a Project with Pixora
                </span>
              </div>

              {/* H1 — exactly one per page */}
              <h1 className="text-[clamp(1.85rem,3.8vw,2.85rem)] font-display font-bold leading-[1.1] tracking-tight text-text-primary-light dark:text-text-primary-dark mb-5">
                Let&apos;s Build Something That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                  Moves Your Business Forward.
                </span>
              </h1>

              <p className="text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-[500px] mb-8">
                Tell us what you&apos;re building, what is not working, or what
                you wish your business could do better. We will figure out the
                right digital solution with you.
              </p>

              {/* Process signals */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                    No specs needed. Start with the idea.
                  </span>
                </div>
                <a
                  href="mailto:hello@pixorastudios.com"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary-dark/50 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary-light dark:text-primary-dark shrink-0" />
                  <span className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium">
                    hello@pixorastudios.com
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Right — node visual (desktop only) */}
            <div className="hidden lg:flex items-center justify-center">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          2. PROJECT TYPE SELECTOR
      ══════════════════════════════════════════════════════ */}
      <section
        id="project-type"
        className="py-12 bg-surface-light dark:bg-surface-dark"
        aria-labelledby="project-type-heading"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7"
          >
            <h2
              id="project-type-heading"
              className="text-2xl md:text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2"
            >
              What Are You Building?
            </h2>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              Not sure what to call it yet? That&apos;s okay. Start with what
              you need.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            role="group"
            aria-label="Project type — select one"
          >
            {PROJECT_TYPES.map((type, i) => {
              const Icon = type.icon;
              const isSelected = formData.projectType === type.id;

              return (
                <motion.button
                  key={type.id}
                  id={`project-type-${type.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => handleProjectTypeSelect(type.id)}
                  aria-pressed={isSelected}
                  className={cn(
                    "relative p-4 rounded-2xl border text-left transition-all duration-200 group overflow-hidden",
                    isSelected
                      ? "border-primary-dark bg-primary-dark/10 dark:bg-primary-dark/[0.14]"
                      : "border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark hover:border-primary-dark/40 hover:bg-surface-light/80 dark:hover:bg-surface-dark/80"
                  )}
                >
                  {/* Gradient border overlay when selected */}
                  {isSelected && (
                    <motion.div
                      layoutId="selector-active-ring"
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(#111118, #111118) padding-box, linear-gradient(135deg, #6C63FF, #A78BFA, #EC4899) border-box",
                        border: "1.5px solid transparent",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col gap-2.5">
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        isSelected
                          ? "bg-primary-dark/20 text-primary-dark"
                          : "bg-border-light dark:bg-border-dark text-text-muted-light dark:text-text-muted-dark group-hover:text-primary-light dark:group-hover:text-primary-dark"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span
                      className={cn(
                        "text-xs font-semibold leading-tight",
                        isSelected
                          ? "text-text-primary-light dark:text-text-primary-dark"
                          : "text-text-muted-light dark:text-text-muted-dark"
                      )}
                    >
                      {type.label}
                    </span>

                    {/* Active check */}
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-primary-dark flex items-center justify-center"
                      >
                        <Check className="w-2.5 h-2.5 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          3. CONTACT FORM + DIRECT CONTACT
      ══════════════════════════════════════════════════════ */}
      <section
        id="contact-form"
        className="py-16"
        aria-labelledby="form-section-heading"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 xl:gap-14 items-start">

            {/* ── LEFT: form ── */}
            <div>
              <div className="glass rounded-3xl p-8 md:p-10 border border-border-light dark:border-border-dark">
                {/* Aria live region for submission feedback */}
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                  {isSuccess
                    ? "Your message has been sent. We will be in touch soon."
                    : submitError
                    ? `Submission error: ${submitError}`
                    : ""}
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    /* Success state */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-10"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 14,
                          delay: 0.1,
                        }}
                        className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-5"
                      >
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </motion.div>
                      <h2 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
                        Message Received
                      </h2>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-7 max-w-xs mx-auto leading-relaxed">
                        We&apos;ve received your message. No automated
                        responses — a real person will read it and be in touch.
                      </p>
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            name: "",
                            email: "",
                            businessName: "",
                            projectType: "",
                            message: "",
                          });
                          setErrors({});
                        }}
                        className="text-sm font-semibold text-primary-light dark:text-primary-dark hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    /* Form */
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit}
                      noValidate
                      aria-label="Project enquiry form"
                    >
                      <h2
                        id="form-section-heading"
                        className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-6"
                      >
                        Start a Conversation
                      </h2>

                      <div className="space-y-5">
                        {/* Row: Name + Email */}
                        <div className="grid sm:grid-cols-2 gap-5">
                          <FormField
                            id="contact-name"
                            label="Your name"
                            required
                            value={formData.name}
                            onChange={(v) =>
                              setFormData((p) => ({ ...p, name: v }))
                            }
                            onBlur={() => handleBlur("name")}
                            error={errors.name}
                            autoComplete="name"
                          />
                          <FormField
                            id="contact-email"
                            label="Work email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(v) =>
                              setFormData((p) => ({ ...p, email: v }))
                            }
                            onBlur={() => handleBlur("email")}
                            error={errors.email}
                            autoComplete="email"
                          />
                        </div>

                        {/* Business name */}
                        <FormField
                          id="contact-business"
                          label="Business or company"
                          required
                          value={formData.businessName}
                          onChange={(v) =>
                            setFormData((p) => ({ ...p, businessName: v }))
                          }
                          onBlur={() => handleBlur("businessName")}
                          error={errors.businessName}
                          autoComplete="organization"
                        />

                        {/* Project type — synced with selector */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-project-type"
                            className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark"
                          >
                            What are you building?
                            {formData.projectType && (
                              <span className="ml-2 text-primary-light dark:text-primary-dark text-xs font-mono opacity-80">
                                ← selected above
                              </span>
                            )}
                          </label>
                          <div className="relative">
                            <select
                              id="contact-project-type"
                              value={formData.projectType}
                              onChange={(e) =>
                                setFormData((p) => ({
                                  ...p,
                                  projectType: e.target.value,
                                }))
                              }
                              className="w-full px-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors appearance-none cursor-pointer"
                            >
                              <option
                                value=""
                                className="bg-surface-light dark:bg-surface-dark"
                              >
                                Select project type (optional)
                              </option>
                              {PROJECT_TYPES.map((t) => (
                                <option
                                  key={t.id}
                                  value={t.id}
                                  className="bg-surface-light dark:bg-surface-dark"
                                >
                                  {t.label}
                                </option>
                              ))}
                            </select>
                            <div
                              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted-dark"
                              aria-hidden="true"
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                              >
                                <path
                                  d="M2 4l4 4 4-4"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Message / project details */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="contact-message"
                            className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark"
                          >
                            Tell us a little about your project
                            <span aria-hidden="true" className="text-red-500 ml-0.5">
                              *
                            </span>
                            <span className="sr-only"> (required)</span>
                          </label>

                          {/* Contextual hint based on selected project type */}
                          <AnimatePresence>
                            {selectedType && (
                              <motion.p
                                key={selectedType.id}
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="text-xs text-text-muted-light dark:text-text-muted-dark italic"
                              >
                                {selectedType.hint}
                              </motion.p>
                            )}
                          </AnimatePresence>

                          <textarea
                            id="contact-message"
                            value={formData.message}
                            onChange={(e) =>
                              setFormData((p) => ({
                                ...p,
                                message: e.target.value,
                              }))
                            }
                            onBlur={() => handleBlur("message")}
                            rows={5}
                            required
                            aria-required="true"
                            aria-invalid={!!errors.message}
                            aria-describedby={
                              errors.message
                                ? "contact-message-error"
                                : undefined
                            }
                            placeholder="Describe what you are trying to build, fix, or improve..."
                            className={cn(
                              "w-full px-4 py-3 rounded-xl border bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-primary-light dark:focus:border-primary-dark transition-colors resize-none placeholder:text-text-muted-light/50 dark:placeholder:text-text-muted-dark/50",
                              errors.message
                                ? "border-red-400/70"
                                : "border-border-light dark:border-border-dark"
                            )}
                          />
                          <AnimatePresence>
                            {errors.message && (
                              <motion.p
                                id="contact-message-error"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.18 }}
                                className="text-xs text-red-500"
                                role="alert"
                              >
                                {errors.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* API error */}
                        <AnimatePresence>
                          {submitError && (
                            <motion.div
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300"
                              role="alert"
                            >
                              {submitError}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          id="contact-submit-btn"
                          className="w-full py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm flex items-center justify-center gap-2.5 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100 shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/20"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Start a Conversation</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── RIGHT: not sure + contact ── */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                  Not Sure Where to Start?
                </h2>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-6 leading-relaxed">
                  That&apos;s exactly what the first conversation is for. You do
                  not need a perfect brief or a technical specification.
                </p>

                <div className="space-y-3">
                  {RIGHT_PANEL_STEPS.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex gap-4 p-4 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark"
                    >
                      <span className="font-mono text-[11px] font-bold text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary shrink-0 pt-0.5 leading-tight">
                        {step.num}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mb-0.5">
                          {step.title}
                        </p>
                        <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Direct contact */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-3"
              >
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-text-muted-light dark:text-text-muted-dark">
                  Direct Contact
                </p>

                <a
                  href="mailto:hello@pixorastudios.com"
                  className="flex items-center gap-3.5 p-4 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary-dark/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-dark/10 flex items-center justify-center text-primary-dark shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase font-mono tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                      hello@pixorastudios.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                  <div className="w-9 h-9 rounded-lg bg-primary-dark/10 flex items-center justify-center text-primary-dark shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark uppercase font-mono tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                      Bhubaneswar, Odisha
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4. HOW THE CONVERSATION WORKS
      ══════════════════════════════════════════════════════ */}
      <section
        className="py-16 bg-surface-light dark:bg-surface-dark"
        aria-labelledby="conversation-heading"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary block mb-3">
              The Process
            </span>
            <h2
              id="conversation-heading"
              className="text-2xl md:text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark"
            >
              Good Products Start With Better Questions.
            </h2>
          </motion.div>

          <div className="relative">
            {/* Horizontal connector line on desktop */}
            <div
              className="hidden md:block absolute top-8 left-[calc(16.666%+32px)] right-[calc(16.666%+32px)] h-px"
              style={{
                background:
                  "linear-gradient(to right, #6C63FF40, #A78BFA40, #EC489940)",
              }}
              aria-hidden="true"
            />

            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {CONVERSATION_STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-start md:items-center text-left md:text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-light dark:bg-gradient-primary flex items-center justify-center mb-5 shrink-0 shadow-lg shadow-primary-light/20 dark:shadow-primary-dark/25">
                    <span className="font-mono text-sm font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          5. WHAT CAN PIXORA HELP BUILD
      ══════════════════════════════════════════════════════ */}
      <section className="py-16" aria-labelledby="capabilities-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-9"
          >
            <h2
              id="capabilities-heading"
              className="text-2xl md:text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-3"
            >
              From a Website to a Full Digital System.
            </h2>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark max-w-lg leading-relaxed">
              Some projects start with a simple website. Others start with a
              problem that needs a custom system. We work from the problem first.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="p-6 rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark hover:border-primary-dark/40 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-dark/10 flex items-center justify-center text-primary-dark mb-4 group-hover:bg-primary-dark/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          6. LOCATION / SERVICE AREA
      ══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center gap-6 p-7 md:p-8 rounded-3xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-light dark:bg-gradient-primary flex items-center justify-center shrink-0 shadow-md shadow-primary-light/20 dark:shadow-primary-dark/25">
              <MapPin className="w-5 h-5 text-white" />
            </div>

            <div className="flex-1">
              <h2 className="text-base md:text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-1">
                Built in Bhubaneswar. Built for Businesses Anywhere.
              </h2>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-lg">
                Pixora Studios is based in Bhubaneswar, Odisha and works with
                businesses looking to build better digital experiences. Projects
                happen over calls, messages, and clear documentation — location
                is not a barrier.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:hello@pixorastudios.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white text-sm font-semibold hover:scale-105 active:scale-95 transition-transform shadow-md shadow-primary-light/15 dark:shadow-primary-dark/20"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-16" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary block mb-3">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="text-2xl md:text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark"
            >
              Common Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035, duration: 0.4 }}
                className="border border-border-light dark:border-border-dark rounded-2xl overflow-hidden"
              >
                <button
                  id={`faq-btn-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
                >
                  <span className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark pr-4 leading-snug">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <Minus className="w-4 h-4 text-primary-light dark:text-primary-dark shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-text-muted-dark shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8. FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 relative overflow-hidden" aria-labelledby="cta-heading">
        {/* Subtle gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.07] dark:opacity-[0.1]"
            style={{
              background:
                "linear-gradient(to right, #6C63FF, #A78BFA, #EC4899)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(108,99,255,0.12),transparent_65%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary block mb-4">
              Start Here
            </span>

            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-4"
            >
              Have an Idea?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
                Let&apos;s See Where It Goes.
              </span>
            </h2>

            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-9 max-w-sm mx-auto leading-relaxed">
              You do not need to have everything figured out. Start with the
              problem, the idea or the goal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact-form"
                className="px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 shadow-lg shadow-primary-light/25 dark:shadow-primary-dark/25"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold text-sm hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
              >
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
