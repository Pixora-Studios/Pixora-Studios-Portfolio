import AboutClient from "./AboutClient";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "About Debidutta Acharya | Founder of Pixora Studios",
  description: "Debidutta Acharya is a full-stack developer and founder of Pixora Studios. He builds websites for local businesses in Bhubaneswar and across Odisha.",
});

export default function AboutPage() {
  return <AboutClient />;
}
