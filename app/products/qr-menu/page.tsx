import { constructMetadata } from "@/lib/seo";
import { QRMenuClient } from "./QRMenuClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Digital Restaurant Experience & QR Ordering Solutions | Pixora Studios",
  description:
    "Build a modern digital restaurant experience with QR menus, ordering workflows, payments, dashboards and flexible POS integrations designed around your restaurant.",
  canonical: "/products/qr-menu",
  keywords: [
    "digital QR menu India",
    "contactless menu restaurant",
    "QR code menu system",
    "restaurant ordering system India",
    "digital menu Bhubaneswar",
    "POS integration restaurant",
    "online menu ordering Odisha",
  ],
});

export default function QRMenuPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Digital QR Menu System",
    image: "https://pixorastudios.com/images/logo.png",
    description: "Contactless QR menus, online ordering workflows, waiter-call routing, payment integrations, and POS synchronization for hospitality venues.",
    brand: {
      "@type": "Brand",
      name: "Pixora Studios"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "999",
      highPrice: "1499",
      offerCount: "6"
    }
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
        name: "Products",
        item: "https://pixorastudios.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Digital QR Menu",
        item: "https://pixorastudios.com/products/qr-menu",
      },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QRMenuClient />
    </>
  );
}
