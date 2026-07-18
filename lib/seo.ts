import type { Metadata } from "next";

const defaultDescription =
  "Pixora Studios builds high-performance, SEO-optimized websites, booking systems, and Digital QR Menus for local businesses in Bhubaneswar, Odisha.";

export function constructMetadata({
  title,
  description = defaultDescription,
  image,
  canonical = "/",
  noIndex = false,
  keywords,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const ogImage =
    image ||
    `/api/og?title=${encodeURIComponent(title || "Pixora Studios")}&description=${encodeURIComponent(description)}`;

  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `https://pixorastudios.com${canonical}`;

  return {
    ...(title ? { title } : {}),
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    authors: [{ name: "Pixora Studios", url: "https://pixorastudios.com" }],
    category: "technology",
    openGraph: {
      title: title || "Pixora Studios",
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || "Pixora Studios",
        },
      ],
      type: "website",
      locale: "en_IN",
      siteName: "Pixora Studios",
      url: fullCanonical,
    },
    twitter: {
      card: "summary_large_image",
      title: title || "Pixora Studios",
      description,
      images: [ogImage],
      creator: "@pixorastudios",
      site: "@pixorastudios",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
    metadataBase: new URL("https://pixorastudios.com"),
    alternates: {
      canonical: fullCanonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
