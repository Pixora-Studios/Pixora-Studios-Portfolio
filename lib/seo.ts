import { Metadata } from "next";

export function constructMetadata({
  title = "Pixora Studios | Website Development Company in Bhubaneswar",
  description = "Pixora Studios builds professional, SEO-optimized websites for clinics, cafes, restaurants, gyms, salons and local businesses in Bhubaneswar and Odisha.",
  image = "/og-default.jpg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
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
      images: [image],
      creator: "@debidutta",
    },
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL("https://pixorastudios.com"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
