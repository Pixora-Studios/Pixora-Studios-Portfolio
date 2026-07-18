import ServicesClient from "./ServicesClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Custom Digital Solutions & Software Services | Pixora Studios",
  description:
    "Pixora Studios builds custom websites, digital experiences and business systems around how your business works. Explore what we build for restaurants, clinics, gyms and more.",
  canonical: "/services",
  keywords: [
    "custom website development Bhubaneswar",
    "web design services Odisha",
    "restaurant website design",
    "clinic website design Bhubaneswar",
    "booking system development",
    "local SEO services Odisha",
    "digital solutions Bhubaneswar",
  ],
});

export default function ServicesPage() {
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
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pixora Studios Custom Services",
    description:
      "Bespoke digital solutions and custom web development services by Pixora Studios.",
    url: "https://pixorastudios.com/services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Website Design & Development",
        url: "https://pixorastudios.com/services",
        description:
          "High-converting, responsive custom websites. Clinics track from ₹5,999; Restaurants track from ₹15,000.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Appointment & Booking Systems",
        url: "https://pixorastudios.com/services",
        description:
          "Frictionless reservation and appointment workflows with real-time calendars.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Brand Identity & UI/UX Design",
        url: "https://pixorastudios.com/services",
        description:
          "Logos, styled assets, and typography guidelines for digital-first businesses.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Local SEO & Google Ranking",
        url: "https://pixorastudios.com/services",
        description:
          "Technical optimization, Google Maps targeting, and schema markup for local discovery.",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceListSchema} />
      <ServicesClient />
    </>
  );
}
