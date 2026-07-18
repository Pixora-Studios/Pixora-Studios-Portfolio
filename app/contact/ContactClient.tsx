"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Phone as WhatsApp } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  { id: "Website", label: "Website" },
  { id: "Digital Experience", label: "Digital Experience" },
  { id: "Custom Software", label: "Custom Software" },
  { id: "Business System", label: "Business System" },
  { id: "Mobile App", label: "Mobile App" },
  { id: "AI / Automation", label: "AI / Automation" },
  { id: "Not Sure Yet", label: "Not Sure Yet" },
] as const;

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) {
      e.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      e.email = "Work email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = "Please enter a valid work email address.";
    }
    if (!formData.businessName.trim()) {
      e.businessName = "Business / company is required.";
    }
    if (!formData.projectType) {
      e.projectType = "Please select what we can help you build.";
    }
    if (!formData.message.trim()) {
      e.message = "Please tell us about your project.";
    }
    return e;
  };

  const handleBlur = (field: keyof typeof formData) => {
    const validationErrors = validate();
    if (validationErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validationErrors[field] }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus the first invalid field for accessibility
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(`contact-${firstErrorField}`);
      element?.focus();
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
          // Backwards compatibility/unused fields in backend
          phone: formData.phone,
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

  return (
    <PageTransition>
      <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center animate-fade-in">
        {/* Background ambient glows */}
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-dark/[0.05] dark:bg-primary-dark/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-secondary-dark/[0.04] dark:bg-secondary-dark/[0.02] rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 max-w-xl">
          {/* Hero */}
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-primary-light dark:text-primary-dark block mb-3">
              START A PROJECT
            </span>
            <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight tracking-tight text-text-primary-light dark:text-text-primary-dark mb-4">
              Let&apos;s Build Something That Moves Your Business Forward.
            </h1>
            <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-md mx-auto">
              Have an idea, a business problem or something that needs to work better? Tell us about it.
            </p>
          </div>

          {/* Form container */}
          <div className="glass rounded-3xl p-6 md:p-8 border border-border-light dark:border-border-dark shadow-xl relative">
            <div aria-live="polite" className="sr-only">
              {isSuccess
                ? "Message received. Thanks for reaching out. We'll take a look and get back to you."
                : submitError
                ? `Submission error: ${submitError}`
                : ""}
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h2 className="text-lg font-display font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
                    Message received.
                  </h2>
                  <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-xs mx-auto">
                    Thanks for reaching out. We&apos;ll take a look and get back to you.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-4"
                >
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    >
                      Name
                      <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onBlur={() => handleBlur("name")}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl border bg-surface-light/50 dark:bg-surface-dark/50 text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-all duration-200",
                        "focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/10 dark:focus:ring-primary-dark/10",
                        errors.name ? "border-red-500/50" : "border-border-light dark:border-border-dark"
                      )}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Work Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    >
                      Work email
                      <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl border bg-surface-light/50 dark:bg-surface-dark/50 text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-all duration-200",
                        "focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/10 dark:focus:ring-primary-dark/10",
                        errors.email ? "border-red-500/50" : "border-border-light dark:border-border-dark"
                      )}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone number field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    >
                      Phone number (optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl border bg-surface-light/50 dark:bg-surface-dark/50 text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-all duration-200",
                        "focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/10 dark:focus:ring-primary-dark/10",
                        "border-border-light dark:border-border-dark"
                      )}
                      placeholder="e.g., +1 234 567 890"
                    />
                  </div>

                  {/* Business / Company field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-businessName"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    >
                      Business / company
                      <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-businessName"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.businessName}
                      aria-describedby={errors.businessName ? "contact-businessName-error" : undefined}
                      value={formData.businessName}
                      onChange={(e) => handleChange("businessName", e.target.value)}
                      onBlur={() => handleBlur("businessName")}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl border bg-surface-light/50 dark:bg-surface-dark/50 text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-all duration-200",
                        "focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/10 dark:focus:ring-primary-dark/10",
                        errors.businessName ? "border-red-500/50" : "border-border-light dark:border-border-dark"
                      )}
                    />
                    {errors.businessName && (
                      <p id="contact-businessName-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.businessName}
                      </p>
                    )}
                  </div>

                  {/* What can we help you build? (dropdown) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-projectType"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    >
                      What can we help you build?
                      <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="contact-projectType"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.projectType}
                        aria-describedby={errors.projectType ? "contact-projectType-error" : undefined}
                        value={formData.projectType}
                        onChange={(e) => handleChange("projectType", e.target.value)}
                        onBlur={() => handleBlur("projectType")}
                        className={cn(
                          "w-full px-4 py-2.5 rounded-xl border bg-surface-light/50 dark:bg-surface-dark/50 text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-all duration-200 appearance-none cursor-pointer",
                          "focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/10 dark:focus:ring-primary-dark/10",
                          errors.projectType ? "border-red-500/50" : "border-border-light dark:border-border-dark"
                        )}
                      >
                        <option value="" disabled className="text-text-muted-light dark:text-text-muted-dark bg-background-light dark:bg-background-dark">
                          Select an option
                        </option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type.id} value={type.id} className="bg-background-light dark:bg-background-dark">
                            {type.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted-light dark:text-text-muted-dark" aria-hidden="true">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    {errors.projectType && (
                      <p id="contact-projectType-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  {/* Tell us about your project (textarea) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark"
                    >
                      Tell us about your project
                      <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={cn(
                        "w-full px-4 py-2.5 rounded-xl border bg-surface-light/50 dark:bg-surface-dark/50 text-sm text-text-primary-light dark:text-text-primary-dark outline-none transition-all duration-200 resize-none",
                        "focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/10 dark:focus:ring-primary-dark/10",
                        errors.message ? "border-red-500/50" : "border-border-light dark:border-border-dark"
                      )}
                      placeholder="Describe what you want to build or what problem you're trying to solve..."
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-xs text-red-500 font-medium" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submission error feedback */}
                  {submitError && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-600 dark:text-red-400" role="alert">
                      {submitError}
                    </div>
                  )}

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3.5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2",
                      "hover:scale-[1.01] active:scale-95 disabled:opacity-60 disabled:hover:scale-100 disabled:pointer-events-none"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Start a Conversation →</span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Minimal Contact details below the form card */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
            <a
              href="mailto:hello@pixorastudios.com"
              className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>hello@pixorastudios.com</span>
            </a>
            {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER && (
              <>
                <span className="hidden sm:inline text-border-light dark:text-border-dark">|</span>
                <a
                  href={`https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark hover:text-emerald-500 transition-colors"
                  aria-label="Contact us on WhatsApp"
                >
                  <WhatsApp className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
