import HomeClient from "./HomeClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Website Development Company in Bhubaneswar | Pixora Studios",
  description: "We build custom websites for clinics, cafes, restaurants, gyms and local businesses in Bhubaneswar, Odisha. SEO-optimized, mobile-first, conversion-focused.",
});

export default function Home() {
  return <HomeClient />;
}
