"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";

const testimonials = [
  {
    name: "Dr. Sandeep Kumar",
    business: "Pearl 32 Dental",
    industry: "Dental Clinic",
    text: "Pixora Studios transformed our clinic's online presence. The booking system they built has reduced our front-desk calls by 40%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rajesh Mohanty",
    business: "Aroma Cafe",
    industry: "Cafe",
    text: "Our new website is beautiful and works perfectly on mobile. We've seen a significant increase in new customers finding us through Google Search.",
    rating: 5,
  },
  {
    name: "Sonia Sharma",
    business: "FitLife Gym",
    industry: "Gym",
    text: "The team at Pixora Studios is incredibly professional. They delivered our gym's website in just 3 weeks, and the SEO results have been amazing.",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="p-8 md:p-12 text-center">
                  <div className="flex justify-center space-x-1 mb-8">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl italic text-text-primary-light dark:text-text-primary-dark mb-8 leading-relaxed">
                    &quot;{testimonials[activeIndex].text}&quot;
                  </p>
                  <div>
                    <h4 className="text-lg font-display font-bold">{testimonials[activeIndex].name}</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      {testimonials[activeIndex].business} • {testimonials[activeIndex].industry}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>
            <div className="flex space-x-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeIndex ? "bg-primary-light dark:bg-primary-dark w-8" : "bg-border-light dark:bg-border-dark"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-primary-light dark:hover:bg-primary-dark hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
