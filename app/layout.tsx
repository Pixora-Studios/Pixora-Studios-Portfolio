import type { Metadata } from "next";
import Script from "next/script";
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
  description: "Pixora Studios designs and builds premium websites, booking systems, and Digital QR Menus for restaurants, cafés, clinics, gyms, and local businesses in Bhubaneswar and across Odisha.",
  metadataBase: new URL("https://pixorastudios.com"),
  openGraph: {
    title: "Pixora Studios | Website Development Company in Bhubaneswar, Odisha",
    description: "Pixora Studios designs and builds premium websites, booking systems, and Digital QR Menus for restaurants, cafés, clinics, gyms, and local businesses in Bhubaneswar and Odisha.",
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
    description: "Premium websites, booking systems, and Digital QR Menus for local businesses in Bhubaneswar and Odisha.",
    creator: "@debidutta",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://pixorastudios.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
    ]
  };


  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Tag Manager */}
      <Script
        id="gtm-head"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K2S2GK3N');`,
        }}
      />
      {/* End Google Tag Manager */}
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-body`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2S2GK3N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd data={organizationSchema} />
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
