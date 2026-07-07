"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PageTransition } from "@/components/shared/PageTransition";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    title: "The Beginning",
    content: "My journey started with a deep fascination for how things work on the internet. During my B.Tech in Computer Science, I spent nights solving over 200+ problems on GeeksForGeeks and 50+ on LeetCode, honing my logic and problem-solving skills.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "The Realization",
    content: "While visiting local cafes and clinics in Bhubaneswar, I noticed a huge gap: many amazing local businesses had zero online presence or outdated websites that didn't work on mobile. I realized I could use my skills to help these businesses grow.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Pixora Studios",
    content: "I founded Pixora Studios to be more than just a dev agency. We are growth partners. I delivered 15+ real client projects, each one focused on solving a specific business problem—be it manual bookings or lack of Google visibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    title: "The Mission",
    content: "Every local business deserves a website that works as hard as they do. My goal is to build digital tools that bring customers through your door, automate your repetitive tasks, and build your brand's credibility.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
];

const timeline = [
  { year: "2020", title: "B.Tech CSE Started", desc: "Deep dived into algorithms and web tech." },
  { year: "2021", title: "NASSCOM Internship", desc: "Worked at Eduskills Foundation." },
  { year: "2022", title: "Freelancing Era", desc: "Delivered first 5 client websites." },
  { year: "2023", title: "Champion Coder", desc: "Won regional coding competition." },
  { year: "2024", title: "Pixora Studios", desc: "Launched full-scale digital agency." },
];

const skills = [
  { name: "Frontend (Next.js/React)", level: 95 },
  { name: "Backend (Node/MongoDB)", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "SEO & Optimization", level: 92 },
];

export default function AboutPage() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const horizontalTriggerRef = useRef<HTMLDivElement>(null);
  const horizontalTimelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!horizontalTriggerRef.current || !horizontalTimelineRef.current) return;

    const ctx = gsap.context(() => {
      const totalWidth = horizontalTimelineRef.current!.scrollWidth;
      const xMove = -(totalWidth - window.innerWidth + window.innerWidth * 0.2);

      gsap.to(horizontalTimelineRef.current, {
        x: xMove,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalTriggerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });

    // Refresh scrolltrigger for Lenis
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 overflow-hidden">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative" ref={photoRef}>
              <motion.div style={{ y: photoY }} className="relative z-10 aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-surface-dark">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Debidutta Acharya - Founder of Pixora Studios"
                  fill
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+pVPQAIXAM6XFoy9wAAAABJRU5ErkJggg=="
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <div className="absolute -inset-10 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-[100px] -z-10" />
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight"
              >
                I Build Websites. Businesses Build Success.
              </motion.h1>
              <p className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-xl">
                Hi, I&apos;m Debidutta Acharya. I specialize in building high-conversion websites for local businesses who are ready to scale.
              </p>
            </div>
          </div>
        </section>

        {/* Story Chapters */}
        <section className="container mx-auto px-6 mb-32 space-y-32">
          {chapters.map((chapter, index) => (
            <div key={chapter.title} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1">
                <span className="text-primary-light dark:text-primary-dark font-mono text-sm uppercase tracking-widest mb-4 block">Chapter 0{index + 1}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{chapter.title}</h2>
                <p className="text-lg text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  {chapter.content}
                </p>
              </div>
              <div className="flex-1 w-full aspect-video rounded-3xl overflow-hidden glass">
                 <Image src={chapter.image} alt={chapter.title} width={800} height={450} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </section>

        {/* Timeline (Horizontal GSAP) */}
        <section ref={horizontalTriggerRef} className="bg-surface-light dark:bg-surface-dark py-20 overflow-hidden mb-32 min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-6 mb-12">
            <h2 className="text-4xl md:text-7xl font-display font-bold">The Journey So Far</h2>
          </div>

          <div ref={horizontalTimelineRef} className="flex items-center space-x-0 relative min-w-max px-[10vw] h-[500px]">
             {/* Progress Line */}
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-border-light dark:bg-border-dark/30 -translate-y-1/2 z-0" />

             {timeline.map((item, i) => (
               <div key={i} className="relative flex flex-col items-center justify-center w-[400px] lg:w-[600px] h-[500px]">
                  {/* Dot */}
                  <div className="w-6 h-6 rounded-full bg-primary-light dark:bg-primary-dark shadow-[0_0_20px_rgba(108,99,255,0.8)] border-4 border-background-light dark:border-background-dark z-10" />

                  <motion.div
                    initial={{ opacity: 0, y: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`absolute ${i % 2 === 0 ? 'bottom-[calc(50%+30px)]' : 'top-[calc(50%+30px)]'} w-full text-center px-12`}
                  >
                     <span className="text-5xl lg:text-8xl font-display font-bold text-primary-light/10 dark:text-primary-dark/10 block leading-none mb-2">
                        {item.year}
                     </span>
                     <div className="bg-white dark:bg-white/5 backdrop-blur-xl p-6 rounded-[28px] border border-primary-light/10 dark:border-white/10 shadow-xl inline-block text-left max-w-sm">
                        <h3 className="text-xl lg:text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                           {item.desc}
                        </p>
                     </div>
                  </motion.div>

                  {/* Vertical Connector Line */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-primary-light/30 dark:bg-primary-dark/30 h-10 ${i % 2 === 0 ? 'bottom-1/2' : 'top-1/2'}`} />
               </div>
             ))}
          </div>
        </section>

        {/* Skills */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Specialized Expertise</h2>
              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold">{skill.name}</span>
                      <span className="text-primary-light dark:text-primary-dark">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-border-light dark:bg-border-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-light dark:bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "Champion Coder", value: "Competition Winner", icon: "🏆" },
                { title: "Problems Solved", value: "250+ GFG/LeetCode", icon: "📚" },
                { title: "Delivered", value: "15+ Websites", icon: "🚀" },
              ].map((card) => (
                <div key={card.title} className="glass p-8 rounded-3xl flex items-center space-x-6">
                  <span className="text-5xl">{card.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold">{card.title}</h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Quote */}
        <section className="py-32 bg-background-light dark:bg-background-dark text-center">
          <div className="container mx-auto px-6 max-w-4xl">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="relative"
             >
                <span className="text-9xl font-serif absolute -top-16 -left-8 opacity-10">“</span>
                <h2 className="text-3xl md:text-5xl font-display italic leading-relaxed mb-12">
                  Pixora Studios exists because every local business deserves a digital presence that competes. Not someday — today.
                </h2>
                <Link
                  href="/contact"
                  className="px-10 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white font-bold text-lg hover:scale-105 transition-transform inline-block"
                >
                  Let&apos;s Work Together
                </Link>
             </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
