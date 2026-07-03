import AboutClient from "./AboutClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Pixora Studios | Web Agency in Bhubaneswar",
  description: "Learn about Pixora Studios and our mission to help local businesses in Bhubaneswar and Odisha thrive online with professional, fast websites.",
  canonical: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}
