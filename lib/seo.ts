import type { Metadata } from "next";

export function constructMetadata({
  title,
  description = "Pixora Studios builds professional, SEO-optimized websites for clinics, cafes, restaurants, gyms, salons and local businesses in Bhubaneswar and Odisha.",
  image,
  canonical = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const ogImage = image || `/api/og?title=${encodeURIComponent(title || "Pixora Studios")}&description=${encodeURIComponent(description)}`;

  return {
    ...(title ? { title } : {}),
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
        },
      ],
      type: "website",
      locale: "en_IN",
      siteName: "Pixora Studios",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@debidutta",
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL("https://pixorastudios.com"),
    alternates: {
      canonical: canonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
