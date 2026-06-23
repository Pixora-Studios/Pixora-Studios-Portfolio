"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
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
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-display font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-light dark:bg-gradient-primary">
              Pixora
            </span>
            <span className="text-text-muted-light dark:text-text-muted-dark">
              Studios
            </span>
          </span>
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
            className="text-text-primary-light dark:text-text-primary-dark"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full h-screen bg-background-light dark:bg-background-dark p-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-display font-bold hover:text-primary-light dark:hover:text-primary-dark"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white text-lg font-bold"
                >
                  Book a Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
