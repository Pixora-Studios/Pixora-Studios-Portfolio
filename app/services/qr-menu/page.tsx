import { constructMetadata } from "@/lib/seo";
import { QRMenuClient } from "./QRMenuClient";

export const metadata = constructMetadata({
  title: "Digital QR Menu Service | Contactless Dining | Pixora Studios",
  description: "Fast, mobile-optimized digital QR menus for restaurants and cafes. Instant updates and no app download required.",
});

export default function QRMenuPage() {
  return <QRMenuClient />;
}
