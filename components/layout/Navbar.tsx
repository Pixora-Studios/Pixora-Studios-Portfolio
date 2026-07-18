"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface DropdownItem {
  name: string;
  href: string;
  desc?: string;
  tag?: string;
}

interface NavLinkItem {
  name: string;
  href?: string;
  dropdownItems?: DropdownItem[];
}

const servicesDropdown: DropdownItem[] = [
  { name: "Websites", href: "/services#websites", desc: "Custom builds made to convert" },
  { name: "Booking Systems", href: "/services#booking", desc: "Frictionless appointments 24/7" },
  { name: "Branding & UI/UX", href: "/services#branding", desc: "Stunning, memorable visual identity" },
  { name: "SEO & Google Ranking", href: "/services#seo", desc: "Get found when customers search" },
  { name: "Hosting & Maintenance", href: "/services#hosting", desc: "Zero-hassle tech, security & updates" },
];

const productsDropdown: DropdownItem[] = [
  { name: "QR Menu", href: "/products/qr-menu", desc: "Live contactless dining system" },
  { name: "Gym Management", href: "#", desc: "Subscriptions & attendance tracker", tag: "Coming Soon" },
  { name: "School Software", href: "#", desc: "Fee records & scheduling engine", tag: "Coming Soon" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "products" | null>(null);

  // Mobile accordions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns when path changes
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  return (
    <nav
      ref={dropdownRef}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "py-4 bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md border-b border-border-light dark:border-border-dark"
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-1 group">
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
        <div className="hidden md:flex items-center space-x-8 relative">
          <Link
            href="/"
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
              pathname === "/" ? "text-primary-light dark:text-primary-dark" : "text-text-primary-light dark:text-text-primary-dark"
            )}
          >
            Home
            {pathname === "/" && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-light dark:bg-gradient-primary"
              />
            )}
          </Link>

          {/* Services Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              onMouseEnter={() => setActiveDropdown("services")}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
                pathname.startsWith("/services") ? "text-primary-light dark:text-primary-dark font-semibold" : "text-text-primary-light dark:text-text-primary-dark"
              )}
            >
              <span>Services</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "services" && "rotate-180")} />
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-xl z-50"
                >
                  <div className="flex flex-col space-y-1">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors group"
                      >
                        <span className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                          {item.name}
                        </span>
                        {item.desc && (
                          <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5">
                            {item.desc}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Products Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              onMouseEnter={() => setActiveDropdown("products")}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
                pathname.startsWith("/products") ? "text-primary-light dark:text-primary-dark font-semibold" : "text-text-primary-light dark:text-text-primary-dark"
              )}
            >
              <span>Products</span>
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "products" && "rotate-180")} />
            </button>

            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute top-full left-0 mt-3 w-64 rounded-2xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 shadow-xl z-50"
                >
                  <div className="flex flex-col space-y-1">
                    {productsDropdown.map((item) => {
                      const isComingSoon = item.tag === "Coming Soon";
                      return isComingSoon ? (
                        <div
                          key={item.name}
                          className="flex flex-col p-2.5 rounded-xl opacity-60 cursor-not-allowed"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark">
                              {item.name}
                            </span>
                            <span className="text-[9px] font-mono font-bold bg-border-light dark:bg-border-dark text-text-muted-light dark:text-text-muted-dark px-1.5 py-0.5 rounded">
                              {item.tag}
                            </span>
                          </div>
                          {item.desc && (
                            <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5">
                              {item.desc}
                            </span>
                          )}
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex flex-col p-2.5 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors group"
                        >
                          <span className="text-xs font-bold text-text-primary-light dark:text-text-primary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                            {item.name}
                          </span>
                          {item.desc && (
                            <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark mt-0.5">
                              {item.desc}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
              pathname.startsWith("/industries") ? "text-primary-light dark:text-primary-dark" : "text-text-primary-light dark:text-text-primary-dark"
            )}
          >
            Industries
            {pathname.startsWith("/industries") && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-light dark:bg-gradient-primary"
              />
            )}
          </Link>

          <Link
            href="/portfolio"
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
              pathname.startsWith("/portfolio") ? "text-primary-light dark:text-primary-dark" : "text-text-primary-light dark:text-text-primary-dark"
            )}
          >
            Portfolio
            {pathname.startsWith("/portfolio") && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-light dark:bg-gradient-primary"
              />
            )}
          </Link>

          <Link
            href="/pricing"
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
              pathname === "/pricing" ? "text-primary-light dark:text-primary-dark" : "text-text-primary-light dark:text-text-primary-dark"
            )}
          >
            Pricing
            {pathname === "/pricing" && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-light dark:bg-gradient-primary"
              />
            )}
          </Link>

          <Link
            href="/about"
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
              pathname === "/about" ? "text-primary-light dark:text-primary-dark" : "text-text-primary-light dark:text-text-primary-dark"
            )}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={cn(
              "relative text-sm font-medium transition-colors hover:text-primary-light dark:hover:text-primary-dark",
              pathname === "/contact" ? "text-primary-light dark:text-primary-dark" : "text-text-primary-light dark:text-text-primary-dark"
            )}
          >
            Contact
          </Link>
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
        <div className="md:hidden flex items-center space-x-4 z-50 relative">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="text-text-primary-light dark:text-text-primary-dark"
          >
            {isOpen ? <X className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
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
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl p-6 md:hidden z-40 overflow-y-auto"
            id="mobile-nav"
          >
            <div className="flex flex-col space-y-6 mt-24">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark"
                >
                  <span>Services</span>
                  <ChevronDown className={cn("w-6 h-6 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col space-y-3 border-l border-border-light dark:border-border-dark"
                    >
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark"
                >
                  <span>Products</span>
                  <ChevronDown className={cn("w-6 h-6 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 mt-2 flex flex-col space-y-3 border-l border-border-light dark:border-border-dark"
                    >
                      {productsDropdown.map((item) => (
                        item.tag === "Coming Soon" ? (
                          <div
                            key={item.name}
                            className="text-lg font-medium text-text-muted-light dark:text-text-muted-dark opacity-50 flex items-center gap-2"
                          >
                            <span>{item.name}</span>
                            <span className="text-[9px] font-mono font-bold bg-border-light dark:bg-border-dark px-1 py-0.5 rounded">
                              Coming Soon
                            </span>
                          </div>
                        ) : (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark"
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/industries"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark"
              >
                Industries
              </Link>

              <Link
                href="/portfolio"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark"
              >
                Portfolio
              </Link>

              <Link
                href="/pricing"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark hover:text-primary-light dark:hover:text-primary-dark"
              >
                Contact
              </Link>

              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block w-full px-8 py-4 rounded-full bg-gradient-light dark:bg-gradient-primary text-white text-lg font-bold text-center"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
