import { Metadata } from "next";

export function constructMetadata({
  title = "Pixora Studios | Website Development Company in Bhubaneswar",
  description = "Pixora Studios builds professional, SEO-optimized websites for clinics, cafes, restaurants, gyms, salons and local businesses in Bhubaneswar and Odisha.",
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const ogImage = image || `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

  return {
    title,
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
    },
    metadataBase: new URL("https://pixorastudios.in"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
