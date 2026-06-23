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

  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelinePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!timelinePathRef.current) return;
    const path = timelinePathRef.current;
    const pathLength = path.getTotalLength();

    gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: timelineContainerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });
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

        {/* Timeline */}
        <section className="py-24 bg-surface-light dark:bg-surface-dark mb-32" ref={timelineContainerRef}>
          <div className="container mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold">The Journey So Far</h2>
          </div>
          <div className="max-w-4xl mx-auto relative px-6">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-border-light dark:bg-border-dark hidden md:block" />
            <svg className="absolute left-6 md:left-1/2 top-0 h-full w-1 hidden md:block" style={{ transform: 'translateX(-50%)' }}>
              <path ref={timelinePathRef} d="M 0 0 L 0 5000" fill="none" stroke="var(--primary)" strokeWidth="4" />
            </svg>

            <div className="space-y-16">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
                >
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark -translate-x-1.5 md:-translate-x-2 z-10 top-0 hidden md:block" />
                  <div className="flex-1 md:w-1/2 md:px-12">
                     <span className="text-4xl font-display font-bold text-primary-light dark:text-primary-dark mb-2 block">{item.year}</span>
                     <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                     <p className="text-text-muted-light dark:text-text-muted-dark">{item.desc}</p>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
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
