import PortfolioClient from "./PortfolioClient";
import { constructMetadata } from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Portfolio & Case Studies | Pixora Studios",
  description: "Explore selected digital experiences built by Pixora Studios for businesses with very different problems, goals and audiences.",
  canonical: "/portfolio",
});

export default function PortfolioPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Pixora Studios Portfolio",
    "description": "Portfolio of custom web design and development projects by Pixora Studios.",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://pixorastudios.com/portfolio/${project.slug}`,
      "name": project.name,
      "description": project.description,
      "image": project.image
    }))
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <PortfolioClient />
    </>
  );
}
