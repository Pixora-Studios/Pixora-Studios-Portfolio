import PortfolioClient from "./PortfolioClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Work | Web Design Portfolio | Pixora Studios",
  description: "Explore our portfolio of custom websites for clinics, restaurants, and cafes in Bhubaneswar. Real results for real local businesses.",
  canonical: "/portfolio",
});

export default function PortfolioPage() {
  return <PortfolioClient />;
}
