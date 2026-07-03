import { constructMetadata } from "@/lib/seo";
import { QRMenuClient } from "./QRMenuClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Digital QR Menu for Restaurants & Cafes",
  description: "Boost your restaurant's efficiency with a contactless digital QR menu. Instant updates, mobile-optimized, and no app download required.",
  canonical: "/services/qr-menu",
});

export default function QRMenuPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Pixora Digital QR Menu",
    "operatingSystem": "Web-based",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "999",
      "priceCurrency": "INR"
    },
    "description": "A contactless, mobile-optimized digital menu solution for restaurants and cafes with instant update capabilities."
  };

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Digital QR Menu",
        "item": "https://pixorastudios.com/services/qr-menu"
      }
    ]
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <QRMenuClient />
    </>
  );
}
