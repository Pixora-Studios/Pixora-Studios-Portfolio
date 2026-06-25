"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Github, Phone as WhatsApp } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md border-b border-border-light dark:border-border-dark"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center space-x-1 group relative z-50">
          <Image
            src="/images/logo.png"
            alt="Pixora Studios Logo"
            width={150}
            height={40}
            className="h-8 w-auto dark:invert transition-all"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark"
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-light dark:bg-gradient-primary"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-gradient-light dark:bg-gradient-primary text-white text-sm font-semibold hover:scale-105 transition-transform"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-text-primary-light dark:bg-white rounded-full transition-colors"
            />
            <motion.span
              animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-8 h-0.5 bg-text-primary-light dark:bg-white rounded-full transition-colors"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-text-primary-light dark:bg-white rounded-full transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl z-40 md:hidden flex flex-col"
          >
            <div className="container mx-auto px-6 pt-32 pb-12 flex flex-col h-full">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-end space-x-4"
                    >
                      <span className="text-primary-light/40 dark:text-primary-dark/40 font-mono text-sm mb-2">
                        0{index + 1}
                      </span>
                      <span className="text-5xl font-display font-bold hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-auto pt-12 border-t border-border-light dark:border-border-dark flex flex-col space-y-8"
              >
                <div>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm uppercase tracking-widest mb-4">
                    Get in touch
                  </p>
                  <a
                    href="mailto:hello@pixorastudios.in"
                    className="text-2xl font-display font-bold hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    hello@pixorastudios.in
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-6">
                    {[
                      { icon: Linkedin, href: "#" },
                      { icon: Instagram, href: "#" },
                      { icon: Github, href: "#" },
                      { icon: WhatsApp, href: "#" },
                    ].map((social, i) => (
                      <Link
                        key={i}
                        href={social.href}
                        className="text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                      >
                        <social.icon className="w-6 h-6" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
