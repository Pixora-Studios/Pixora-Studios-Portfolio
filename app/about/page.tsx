import AboutClient from "./AboutClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "About Pixora Studios | Digital Solutions Studio in Bhubaneswar",
  description:
    "Pixora Studios builds websites, digital experiences and custom systems around how businesses work. Learn about our approach and the people behind the studio.",
  canonical: "/about",
  keywords: [
    "about Pixora Studios",
    "web design studio Bhubaneswar",
    "digital agency Odisha",
    "custom digital solutions studio",
    "web development team Bhubaneswar",
  ],
});

export default function AboutPage() {
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
        name: "About",
        item: "https://pixorastudios.com/about",
      },
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "About Pixora Studios",
    url: "https://pixorastudios.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "Pixora Studios",
      url: "https://pixorastudios.com",
      description:
        "Pixora Studios is a web design and digital solutions studio based in Bhubaneswar, Odisha. We build high-performance custom websites, booking systems, and digital tools for local businesses.",
      foundingLocation: {
        "@type": "Place",
        name: "Bhubaneswar, Odisha, India",
      },
      areaServed: [
        { "@type": "City", name: "Bhubaneswar" },
        { "@type": "AdministrativeArea", name: "Odisha" },
      ],
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={profilePageSchema} />
      <AboutClient />
    </>
  );
}
