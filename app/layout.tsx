import type { Metadata } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { LenisProvider } from "@/components/shared/LenisProvider";
import { MotionConfig } from "framer-motion";

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
    template: "%s | Pixora Studios — Web Development Bhubaneswar",
    default: "Pixora Studios | Website Development Company in Bhubaneswar, Odisha",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixora Studios",
    "description": "Web development agency in Bhubaneswar...",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Debidutta Acharya"
    },
    "url": "https://pixorastudios.com",
    "sameAs": [
      "https://linkedin.com/in/debidutta",
      "https://instagram.com/pixorastudios"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-body`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
