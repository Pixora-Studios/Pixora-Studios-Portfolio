import HomeClient from "./HomeClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Website Development Company in Bhubaneswar",
  description: "Pixora Studios builds high-performance, SEO-optimized websites for local businesses in Bhubaneswar, Odisha. Specializing in clinics, restaurants, and cafes.",
  canonical: "/",
});

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design and Development",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Pixora Studios",
      "url": "https://pixorastudios.com"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Odisha"
    },
    "description": "Custom website development for local businesses in Bhubaneswar, including clinics, restaurants, and cafes."
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <HomeClient />
    </>
  );
}
