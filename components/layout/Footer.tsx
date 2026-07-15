import Link from "next/link";
import { Linkedin, Instagram, Phone as WhatsApp } from "lucide-react";

const footerLinks = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
  ],
  services: [
    { name: "Web Design", href: "/services" },
    { name: "QR Menu", href: "/services/qr-menu" },
    { name: "Booking Systems", href: "/services" },
    { name: "SEO Optimization", href: "/services" },
  ],
  industries: [
    { name: "Clinics", href: "/#industries" },
    { name: "Restaurants", href: "/#industries" },
    { name: "Gyms", href: "/#industries" },
  ],
  connect: [
    { name: "LinkedIn", href: "https://linkedin.com/in/debidutta", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com/pixorastudios", icon: Instagram },
    { name: "WhatsApp", href: `https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, icon: WhatsApp },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#111118] text-white pt-24 pb-12 overflow-hidden border-t border-white/5" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-4xl">
            Let&apos;s Build Something That Grows Your Business.
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-primary text-white font-bold hover:scale-105 transition-transform"
            >
              Book Consultation
            </Link>
            <Link
              href={`https://wa.me/+91${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:scale-105 transition-transform flex items-center space-x-2"
              aria-label="Contact us on WhatsApp"
            >
              <WhatsApp className="w-5 h-5" aria-hidden="true" />
              <span>WhatsApp Now</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/10 pt-12">
          <div>
            <h4 className="font-display font-bold mb-6">About</h4>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted-dark hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted-dark hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-6">Industries</h4>
            <ul className="space-y-4">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted-dark hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-6">Connect</h4>
            <div className="flex space-x-4">
              {footerLinks.connect.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label={`Visit our ${link.name} profile`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-text-muted-dark text-sm">
          <p>© {new Date().getFullYear()} Pixora Studios. All rights reserved.</p>
          <p>Made with ❤️ in Bhubaneswar</p>
        </div>
      </div>
    </footer>
  );
}
