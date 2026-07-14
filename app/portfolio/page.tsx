import PortfolioClient from "./PortfolioClient";
import { constructMetadata } from "@/lib/seo";
import { projects } from "@/lib/data/projects";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Our Work | Web Design Portfolio | Pixora Studios",
  description: "Explore our portfolio of custom websites for clinics, restaurants, and cafes in Bhubaneswar. Real results for real local businesses.",
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
