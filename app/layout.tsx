import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { MotionConfig } from "framer-motion";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Pixora Studios",
    default: "Pixora Studios | Website Development Company in Bhubaneswar",
  },
  description: "Pixora Studios builds professional, SEO-optimized websites for clinics, cafes, restaurants, gyms, salons and local businesses in Bhubaneswar and across Odisha.",
  metadataBase: new URL("https://pixorastudios.com"),
  openGraph: {
    title: "Pixora Studios | Website Development Company in Bhubaneswar, Odisha",
    description: "Pixora Studios builds professional, SEO-optimized websites for local businesses in Bhubaneswar and Odisha.",
    url: "https://pixorastudios.com",
    siteName: "Pixora Studios",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Pixora Studios - Web Development Bhubaneswar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixora Studios | Website Development Company in Bhubaneswar, Odisha",
    description: "Professional websites for local businesses in Bhubaneswar and Odisha.",
    creator: "@debidutta",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://pixorastudios.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixora Studios",
    "url": "https://pixorastudios.com",
    "logo": "https://pixorastudios.com/images/square-logo.png",
    "sameAs": [
      "https://linkedin.com/in/debidutta",
      "https://instagram.com/pixorastudios"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixora Studios",
    "image": "https://pixorastudios.com/api/og",
    "@id": "https://pixorastudios.com",
    "url": "https://pixorastudios.com",
    "telephone": "+91" + (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhubaneswar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.2961,
      "longitude": 85.8245
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Bhubaneswar"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Odisha"
      },
      {
        "@type": "AdministrativeArea",
        "name": "India"
      }
    ],
    "knowsAbout": [
      "Custom Website Development",
      "Digital QR Menu",
      "SEO",
      "Restaurants",
      "Cafés",
      "Clinics",
      "Gyms",
      "Spas",
      "Salons",
      "Hotels"
    ],
    "priceRange": "₹₹"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-body`}
        suppressHydrationWarning
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionConfig reducedMotion="user">
            <LenisProvider>
              <CustomCursor />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </LenisProvider>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
