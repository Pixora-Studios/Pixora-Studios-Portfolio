import HomeClient from "./HomeClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Website Development Company in Bhubaneswar | Pixora Studios",
  description:
    "Pixora Studios builds high-performance, SEO-optimized websites for local businesses in Bhubaneswar, Odisha. Specializing in clinics, restaurants, cafes, gyms, salons and booking systems.",
  canonical: "/",
  keywords: [
    "website development company Bhubaneswar",
    "web design Odisha",
    "local business website Bhubaneswar",
    "restaurant website design Bhubaneswar",
    "clinic website design Odisha",
    "SEO optimized website Bhubaneswar",
    "Pixora Studios",
  ],
});

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design and Development",
    provider: {
      "@type": "LocalBusiness",
      name: "Pixora Studios",
      url: "https://pixorastudios.com",
      telephone: "+91 8455018992",
      email: "hello@pixorastudios.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Patia",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751024",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "AdministrativeArea", name: "Odisha" },
    ],
    description:
      "Custom website development for local businesses in Bhubaneswar, including clinics, restaurants, cafes, gyms, and salons.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "5999",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Pixora Studios do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pixora Studios is a web design and development studio based in Bhubaneswar, Odisha. We build high-performance, SEO-optimized websites, booking systems, Digital QR Menus, and custom digital solutions for local businesses.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website cost at Pixora Studios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website pricing at Pixora Studios starts from ₹5,999 for clinic and service businesses, and from ₹15,000 for restaurant and hospitality websites. All projects are scoped based on your specific requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Does Pixora Studios work with businesses outside Bhubaneswar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. While our primary market is Bhubaneswar and Odisha, we work with businesses across India. Our remote-first workflow means we can deliver the same quality anywhere.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <HomeClient />
    </>
  );
}
