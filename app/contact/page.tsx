import ContactClient from "./ContactClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact Pixora Studios | Get a Free Website Quote",
  description: "Get in touch with Pixora Studios for a free website consultation. We serve businesses in Bhubaneswar, Odisha and across India.",
});

export default function ContactPage() {
  return <ContactClient />;
}
