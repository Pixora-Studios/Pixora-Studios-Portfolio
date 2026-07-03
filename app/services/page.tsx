import ServicesClient from "./ServicesClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Web Design & Development Services | Pixora Studios",
  description: "Professional web development services in Bhubaneswar: Custom business websites, booking systems, WhatsApp integration, and SEO optimization for Odisha businesses.",
  canonical: "/services",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
