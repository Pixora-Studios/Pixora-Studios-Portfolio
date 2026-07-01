"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data/services";
import { PageTransition } from "@/components/shared/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = horizontalSectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const pin = gsap.fromTo(
      section,
      { x: 0 },
      {
        x: `-${100 * (services.length - 1)}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          end: () => `+=${section.offsetWidth}`,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <PageTransition>
      <div className="pt-32 min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24 overflow-hidden">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[1.1]"
            >
              {"Everything Your Business Website Needs.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl"
            >
              We don&apos;t just build websites — we build business tools that convert visitors into customers.
            </motion.p>
          </div>
        </section>

        {/* Horizontal Scroll Panels */}
        <div className="overflow-x-hidden" ref={triggerRef}>
          <div
            ref={horizontalSectionRef}
            className="flex h-screen items-center"
            style={{ width: `${services.length * 100}vw` }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className="w-[100vw] h-full flex items-center justify-center px-6 pt-20"
              >
                <div className="container mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="space-y-6 lg:space-y-8">
                    <span className="text-5xl lg:text-6xl">{service.icon}</span>
                    <div>
                      <h3 className="text-primary-light dark:text-primary-dark font-mono text-xs lg:text-sm uppercase tracking-widest mb-2">
                        {service.problem}
                      </h3>
                      <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg lg:text-xl text-text-muted-light dark:text-text-muted-dark max-w-xl">
                      {service.solution}
                    </p>
                    <div className="space-y-4">
                      <h4 className="font-bold uppercase text-[10px] lg:text-xs tracking-widest opacity-70">What&apos;s Included:</h4>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-center space-x-2 text-xs lg:text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-light dark:bg-primary-dark shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.link || "/contact"}
                      className="inline-flex items-center space-x-3 px-6 lg:px-8 py-3 lg:py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-sm lg:text-base transition-transform hover:scale-105"
                    >
                      <span>{service.link ? "Learn More" : "Get Started"}</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </Link>
                  </div>
                  <div className="hidden md:flex relative aspect-square max-h-[60vh] w-full glass rounded-[40px] overflow-hidden border border-primary-light/10 dark:border-primary-dark/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-transparent dark:from-primary-dark/10" />
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={`${service.title} preview`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    ) : (
                      <span className="relative z-10 text-center px-8 text-sm lg:text-base italic text-text-muted-dark">
                        [Illustration for {service.title}]
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Continuation */}
        <section className="py-24 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Ready to Grow?
             </h2>
             <p className="text-xl text-text-muted-light dark:text-text-muted-dark mb-12 max-w-2xl mx-auto">
                Every business is unique. We provide custom quotes based on your specific needs, features, and goals.
             </p>
             <Link
                href="/contact"
                className="px-12 py-5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-xl hover:scale-105 transition-transform inline-block"
             >
                Get a Custom Quote
             </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
