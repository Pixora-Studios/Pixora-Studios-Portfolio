import ServicesClient from "./ServicesClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Web Development Services | Booking Systems | SEO | Pixora Studios",
  description: "Custom website development, appointment booking systems, restaurant booking, WhatsApp integration, and SEO services for local businesses in Bhubaneswar.",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
