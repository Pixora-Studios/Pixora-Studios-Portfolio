import ServicesClient from "./ServicesClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Custom Digital Solutions & Software Services | Pixora Studios",
  description: "Pixora Studios builds custom websites, digital experiences and business systems around how your business works. Explore what we build.",
  canonical: "/services",
});

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pixorastudios.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://pixorastudios.com/services"
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ServicesClient />
    </>
  );
}
