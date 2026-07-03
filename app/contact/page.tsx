import ContactClient from "./ContactClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Us | Get a Free Website Quote | Pixora Studios",
  description: "Ready to grow your business? Contact Pixora Studios for a free consultation and quote for your next website project in Bhubaneswar.",
  canonical: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}
