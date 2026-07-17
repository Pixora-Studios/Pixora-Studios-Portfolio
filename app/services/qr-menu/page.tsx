import { constructMetadata } from "@/lib/seo";
import { QRMenuClient } from "./QRMenuClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Digital Restaurant Experience & QR Ordering Solutions | Pixora Studios",
  description:
    "Build a modern digital restaurant experience with QR menus, ordering workflows, payments, dashboards and flexible POS integrations designed around your restaurant.",
  canonical: "/services/qr-menu",
});

export default function QRMenuPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Restaurant Experience System",
    provider: {
      "@type": "Organization",
      name: "Pixora Studios",
      url: "https://pixorastudios.com",
    },
    serviceType: "Digital Restaurant Technology",
    description:
      "Pixora Studios designs and builds digital restaurant experience systems — from QR menus and ordering workflows to owner dashboards and flexible POS integrations.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: "https://pixorastudios.com/services/qr-menu",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pixorastudios.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://pixorastudios.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital Restaurant Experience",
        item: "https://pixorastudios.com/services/qr-menu",
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QRMenuClient />
    </>
  );
}
