import ContactClient from "./ContactClient";
import { constructMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Contact Pixora Studios | Start a Digital Project in Bhubaneswar",
  description:
    "Have an idea, business problem or digital project? Talk to Pixora Studios about building the right digital solution for your business in Bhubaneswar, Odisha.",
  canonical: "/contact",
  keywords: [
    "contact Pixora Studios",
    "hire web developer Bhubaneswar",
    "web design inquiry Odisha",
    "start website project India",
    "digital agency contact Bhubaneswar",
  ],
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

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Pixora Studios",
    url: "https://pixorastudios.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Pixora Studios",
      url: "https://pixorastudios.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8455018992",
        email: "hello@pixorastudios.com",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Odia"],
      },
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPointSchema} />
      <ContactClient />
    </>
  );
}
