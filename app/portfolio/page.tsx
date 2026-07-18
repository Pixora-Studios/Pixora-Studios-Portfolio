import PortfolioClient from "./PortfolioClient";
import { constructMetadata } from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Portfolio & Case Studies | Pixora Studios",
  description:
    "Explore selected digital experiences built by Pixora Studios for businesses with very different problems, goals and audiences. From restaurant websites to premium nightlife brands.",
  canonical: "/portfolio",
  keywords: [
    "Pixora Studios portfolio",
    "web design case studies India",
    "restaurant website case study",
    "nightlife website design",
    "Next.js website portfolio Bhubaneswar",
  ],
});

export default function PortfolioPage() {
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
        name: "Portfolio",
        item: "https://pixorastudios.com/portfolio",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pixora Studios Portfolio",
    description:
      "Portfolio of custom web design and development projects by Pixora Studios.",
    url: "https://pixorastudios.com/portfolio",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://pixorastudios.com/portfolio/${project.slug}`,
      name: project.name,
      description: project.description,
      image: project.image,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <PortfolioClient />
    </>
  );
}
