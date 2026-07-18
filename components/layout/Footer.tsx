import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Github, MapPin, Mail } from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const buildLinks = [
  { name: "Websites", href: "/services" },
  { name: "Digital Experiences", href: "/services" },
  { name: "Custom Systems", href: "/services" },
  { name: "Mobile & Product Builds", href: "/services" },
  { name: "AI & Automation", href: "/services" },
];

// ---------------------------------------------------------------------------
// Social link helper — read from environment, never hardcoded
// ---------------------------------------------------------------------------

function getSocialLinks() {
  const raw = [
    {
      id: "instagram",
      label: "Instagram",
      url: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
      Icon: Instagram,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
      Icon: Linkedin,
    },
    {
      id: "github",
      label: "GitHub",
      url: process.env.NEXT_PUBLIC_SOCIAL_GITHUB,
      Icon: Github,
    },
  ];

  // Only return entries that have a non-empty, non-whitespace URL
  return raw.filter((s) => s.url && s.url.trim() !== "");
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Footer() {
  const socialLinks = getSocialLinks();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0D0D16] border-t border-white/[0.06] text-white"
      role="contentinfo"
    >
      {/* ── Main grid ─────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1.2fr] gap-10 lg:gap-14">

          {/* 1. Brand Block */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Pixora Studios — home">
              <Image
                src="/images/logo.png"
                alt="Pixora Studios"
                width={130}
                height={34}
                className="h-7 w-auto dark:invert"
                priority={false}
              />
            </Link>

            <p className="text-sm text-[#8B8BA8] leading-relaxed max-w-[260px]">
              Digital systems for businesses that want to work better.
            </p>

            <p className="flex items-center gap-1.5 text-xs text-[#6B6B8A]">
              <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              Bhubaneswar, Odisha · India
            </p>
          </div>

          {/* 2. Explore (navigation) */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B6B8A] mb-5">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A0A0BC] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 3. Build */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B6B8A] mb-5">
              Build
            </h3>
            <ul className="space-y-3">
              {buildLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0A0BC] hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6B6B8A] mb-5">
              Connect
            </h3>

            {/* Email */}
            <a
              href="mailto:hello@pixorastudios.com"
              className="inline-flex items-center gap-2 text-sm text-[#A0A0BC] hover:text-white transition-colors duration-200 mb-6 group"
              aria-label="Send us an email at hello@pixorastudios.com"
            >
              <Mail className="w-3.5 h-3.5 shrink-0 text-[#6C63FF] group-hover:text-white transition-colors duration-200" aria-hidden="true" />
              hello@pixorastudios.com
            </a>

            {/* Social links — only rendered when env var is set */}
            {socialLinks.length > 0 && (
              <div className="flex flex-col gap-3 mt-1">
                {socialLinks.map(({ id, label, url, Icon }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pixora Studios on ${label}`}
                    className="inline-flex items-center gap-2.5 text-sm text-[#A0A0BC] hover:text-white transition-colors duration-200 group"
                  >
                    <Icon
                      className="w-4 h-4 shrink-0 text-[#6B6B8A] group-hover:text-[#A78BFA] transition-colors duration-200"
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.05]">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B6B8A]">
            © {currentYear} Pixora Studios. All rights reserved.
          </p>

          {/* No privacy/terms pages exist — omitted per spec */}
          <p className="text-xs text-[#6B6B8A]">
            Built with care in Bhubaneswar, Odisha.
          </p>
        </div>
      </div>
    </footer>
  );
}
