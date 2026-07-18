import AboutClient from "./AboutClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Pixora Studios | Digital Solutions Studio",
  description: "Pixora Studios builds websites, digital experiences and custom systems around how businesses work. Learn about our approach and the people behind the studio.",
  canonical: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}
