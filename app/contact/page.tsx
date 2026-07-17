import ContactClient from "./ContactClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Contact Pixora Studios | Build Your Digital Solution",
  description:
    "Have an idea, business problem or digital project? Talk to Pixora Studios about custom websites, software, restaurant systems and digital solutions. Based in Bhubaneswar.",
  canonical: "/contact",
});

export default function ContactPage() {
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
        name: "Contact",
        item: "https://pixorastudios.com/contact",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactClient />
    </>
  );
}
