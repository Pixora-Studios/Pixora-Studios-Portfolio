import PortfolioClient from "./PortfolioClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Our Work | Website Portfolio | Pixora Studios",
  description: "See websites we've built for dental clinics, cafes, restaurants, gyms, and local businesses across Odisha.",
});

export default function PortfolioPage() {
  return <PortfolioClient />;
}
