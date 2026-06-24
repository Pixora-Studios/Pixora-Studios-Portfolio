"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone as WhatsApp,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Github,
  CheckCircle2,
  Loader2,
  ArrowRight
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { cn } from "@/lib/utils";

const businessTypes = [
  "Clinic", "Cafe", "Restaurant", "Gym", "Salon", "Coaching Center", "Real Estate", "Other"
];

const budgetRanges = [
  "₹20k - ₹40k", "₹40k - ₹70k", "₹70k - ₹1.5L", "₹1.5L+"
];

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    businessType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.businessName) newErrors.businessName = "Business name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
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
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setIsSuccess(true);
        setSubmitError(null);
      } else {
        setSubmitError(data?.error || "Unable to send your message right now.");
      }
    } catch (error) {
      console.error("Submission failed", error);
      setSubmitError("Unable to send your message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field: string) => {
    const newErrors = validate();
    if (newErrors[field]) {
      setErrors({ ...errors, [field]: newErrors[field] });
    } else {
      const { [field]: _, ...rest } = errors;
      setErrors(rest);
    }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-6"
            >
              Let&apos;s Build Something Together.
            </motion.h1>
            <p className="text-xl text-text-muted-light dark:text-text-muted-dark">
              Tell us about your business and we&apos;ll get back within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <a
                  href={`https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="group flex items-center space-x-4 p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white relative z-10">
                    <WhatsApp className="w-6 h-6" />
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
                  </div>
                  <div className="relative z-10">
                    <span className="block text-sm text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">WhatsApp</span>
                    <span className="text-lg font-bold">Message us instantly</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-6 rounded-3xl glass border border-border-light dark:border-border-dark">
                  <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm text-text-muted-dark font-bold uppercase tracking-widest">Email</span>
                    <span className="text-lg font-bold">hello@pixorastudios.in</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 rounded-3xl glass border border-border-light dark:border-border-dark">
                  <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm text-text-muted-dark font-bold uppercase tracking-widest">Location</span>
                    <span className="text-lg font-bold">Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl glass border border-border-light dark:border-border-dark aspect-video flex items-center justify-center italic text-text-muted-dark">
                 [Google Maps Embed]
              </div>

              <div className="flex space-x-4">
                 {[Linkedin, Instagram, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all">
                       <Icon className="w-5 h-5" />
                    </a>
                 ))}
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-3">
              <div className="glass p-8 md:p-12 rounded-[40px] border border-border-light dark:border-border-dark">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                      <h2 className="text-3xl font-display font-bold mb-4">Request Sent!</h2>
                      <p className="text-text-muted-light dark:text-text-muted-dark">
                        Thank you for reaching out. We&apos;ll be in touch within 24 hours.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-8 text-primary-light dark:text-primary-dark font-bold underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <FloatingInput
                          label="Your Name *"
                          value={formData.name}
                          error={errors.name}
                          onChange={(v: string) => setFormData({ ...formData, name: v })}
                          onBlur={() => handleBlur("name")}
                        />
                        <FloatingInput
                          label="Business Name *"
                          value={formData.businessName}
                          error={errors.businessName}
                          onChange={(v: string) => setFormData({ ...formData, businessName: v })}
                          onBlur={() => handleBlur("businessName")}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group">
                          <label className={cn(
                            "absolute left-4 transition-all duration-200 pointer-events-none",
                            formData.phone ? "-top-6 text-xs text-primary-light dark:text-primary-dark font-bold" : "top-4 text-text-muted-dark"
                          )}>
                            Phone Number *
                          </label>
                          <div className="flex items-center border-b border-border-light dark:border-border-dark group-focus-within:border-primary-light dark:group-focus-within:border-primary-dark transition-colors pt-4 pb-2">
                            <span className="text-text-muted-dark mr-2">+91</span>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              onBlur={() => handleBlur("phone")}
                              className="w-full bg-transparent outline-none"
                            />
                          </div>
                          <ErrorSlideIn error={errors.phone} />
                        </div>
                        <FloatingInput
                          label="Email Address *"
                          type="email"
                          value={formData.email}
                          error={errors.email}
                          onChange={(v: string) => setFormData({ ...formData, email: v })}
                          onBlur={() => handleBlur("email")}
                        />
                      </div>
                      {submitError && (
                        <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
                          {submitError}
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-muted-dark">Business Type</label>
                            <select
                              className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-2 outline-none appearance-none"
                              value={formData.businessType}
                              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                            >
                               <option value="" className="bg-surface-light dark:bg-surface-dark">Select type</option>
                               {businessTypes.map(t => <option key={t} value={t} className="bg-surface-light dark:bg-surface-dark">{t}</option>)}
                            </select>
                         </div>
                         <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-text-muted-dark">Budget Range</label>
                            <select
                               className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-2 outline-none appearance-none"
                               value={formData.budget}
                               onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            >
                               <option value="" className="bg-surface-light dark:bg-surface-dark">Select budget</option>
                               {budgetRanges.map(t => <option key={t} value={t} className="bg-surface-light dark:bg-surface-dark">{t}</option>)}
                            </select>
                         </div>
                      </div>
                      <FloatingInput
                        label="Message / Project Description *"
                        textarea
                        value={formData.message}
                        error={errors.message}
                        onChange={(v: string) => setFormData({ ...formData, message: v })}
                        onBlur={() => handleBlur("message")}
                      />
                      <button
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg flex items-center justify-center space-x-3 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                      >
                        {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                          <>
                            <span>Send My Request</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <section className="mt-32 text-center p-12 rounded-[40px] glass border border-border-light dark:border-border-dark">
             <h3 className="text-2xl font-display font-bold mb-6">Or book a free 15-min discovery call directly</h3>
             <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden bg-surface-dark/50 flex items-center justify-center italic text-text-muted-dark">
                [Calendly Embed]
             </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}

function FloatingInput({
  label,
  value,
  onChange,
  onBlur,
  error,
  textarea = false,
  type = "text"
}: any) {
  const [isFocused, setIsFocused] = useState(false);
  const active = isFocused || value;

  return (
    <div className="relative group">
      <label className={cn(
        "absolute left-0 transition-all duration-200 pointer-events-none",
        active ? "-top-6 text-xs text-primary-light dark:text-primary-dark font-bold" : "top-4 text-text-muted-dark"
      )}>
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => { setIsFocused(false); onBlur?.(); }}
          className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-4 outline-none group-focus-within:border-primary-light dark:group-focus-within:border-primary-dark transition-colors resize-none h-32"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => { setIsFocused(false); onBlur?.(); }}
          className="w-full bg-transparent border-b border-border-light dark:border-border-dark py-4 outline-none group-focus-within:border-primary-light dark:group-focus-within:border-primary-dark transition-colors"
        />
      )}
      <ErrorSlideIn error={error} />
    </div>
  );
}

function ErrorSlideIn({ error }: { error?: string }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 top-full pt-1 text-xs text-red-500 font-medium"
        >
          {error}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
