import { constructMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/shared/PageTransition";
import Link from "next/link";
import { productsList } from "@/lib/pricing-data";
import { ArrowRight, Sparkles, Smartphone, ShieldAlert } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Business Software Products & Managed Tools | Pixora Studios",
  description:
    "Explore fixed, tiered, repeatable digital offerings by Pixora Studios. Ready-to-use business tools including Digital QR Menu and upcoming platforms.",
  canonical: "/products",
  keywords: [
    "digital QR menu India",
    "contactless menu system",
    "restaurant management software",
    "gym management software India",
    "school management software",
    "SaaS products Bhubaneswar",
    "business software tools Odisha",
  ],
});

export default function ProductsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pixorastudios.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://pixorastudios.com/products",
      },
    ],
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pixora Studios Products",
    description:
      "Repeatable, tiered business software products by Pixora Studios.",
    url: "https://pixorastudios.com/products",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Digital QR Menu System",
        url: "https://pixorastudios.com/products/qr-menu",
        description:
          "Contactless QR menus, online ordering, waiter-call routing, and POS integrations for restaurants, hotels, lounges, and cafes.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gym Management Software",
        description:
          "Subscriptions, member logs, and attendance tracking platform. Coming soon.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "School & Coaching Software",
        description:
          "Fee schedules, program registrations, and student rosters platform. Coming soon.",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productListSchema} />
      <PageTransition>
        <div className="pt-24 md:pt-28 pb-16 min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
          {/* HERO SECTION */}
          <section className="container mx-auto px-6 mb-16 text-center max-w-4xl pt-8">
            <span className="text-primary-light dark:text-primary-dark font-mono text-[10px] font-bold uppercase tracking-widest block mb-3">
              Pixora Products
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
              Repeatable Tools. Pick a Plan & Go.
            </h1>
            <p className="text-sm md:text-base text-text-muted-light dark:text-text-muted-dark max-w-xl mx-auto leading-relaxed">
              Ready-to-use business software, not bespoke custom development builds. Standardized pricing tiers designed for speed and reliability.
            </p>
          </section>

          {/* PRODUCTS LIST GRID */}
          <section className="container mx-auto px-6 max-w-5xl mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productsList.map((product) => {
                const isLive = product.status === "live";

                return (
                  <div
                    key={product.id}
                    className={`p-6 md:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                      isLive
                        ? "bg-surface-light dark:bg-surface-dark border-border-light dark:border-border-dark hover:border-primary-light/40 dark:hover:border-primary-dark/40 hover:-translate-y-1 shadow-sm"
                        : "bg-surface-light/30 dark:bg-surface-dark/30 border-border-light/50 dark:border-border-dark/50 opacity-75"
                    }`}
                  >
                    <div>
                      {/* Header with status tag */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary-light dark:text-primary-dark">
                          <Smartphone className="w-5 h-5" />
                        </div>
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                          isLive
                            ? "bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark border border-primary-light/20 dark:border-primary-dark/20"
                            : "bg-border-light dark:bg-border-dark text-text-muted-light dark:text-text-muted-dark"
                        }`}>
                          {isLive ? "LIVE PRODUCT" : "COMING SOON"}
                        </span>
                      </div>

                      <h2 className="text-lg md:text-xl font-display font-bold mb-2">
                        {product.name}
                      </h2>

                      <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Price Range block */}
                      <div className="mb-6">
                        <span className="text-[10px] font-mono uppercase text-text-muted-light dark:text-text-muted-dark block mb-0.5">
                          Plan pricing
                        </span>
                        <span className="text-lg font-display font-bold text-primary-light dark:text-primary-dark">
                          {product.priceRange}
                        </span>
                      </div>
                    </div>

                    {/* Compact Visual Slot */}
                    <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark/40 mb-6">
                      <div className="text-[9px] font-mono p-2.5 rounded bg-surface-light/50 dark:bg-surface-dark/50 border border-dashed border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark text-center select-none">
                        {`{/* VISUAL SLOT: ${product.id} — custom dashboard preview */}`}
                      </div>
                    </div>

                    {/* CTA or status */}
                    {isLive && product.link ? (
                      <Link
                        href={product.link}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-light dark:bg-gradient-primary text-white text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <span>Explore Product Tiers</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <div className="text-center py-3 px-4 rounded-xl border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark text-xs font-semibold cursor-not-allowed bg-border-light/20 dark:bg-border-dark/20">
                        Coming Soon
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* COMPARISON CTA SECTION */}
          <section className="container mx-auto px-6 max-w-4xl">
            <div className="rounded-3xl p-8 md:p-12 border border-border-light dark:border-border-dark bg-surface-light/20 dark:bg-surface-dark/20 backdrop-blur-md text-center relative overflow-hidden">
              <h2 className="text-xl md:text-2xl font-display font-bold mb-3 leading-tight">
                Looking for Custom Web Design Instead?
              </h2>
              <p className="text-xs md:text-sm text-text-muted-light dark:text-text-muted-dark mb-6 max-w-lg mx-auto leading-relaxed">
                If your business requirements are bespoke or you need a custom-built website with dedicated integrations, our Services model is exactly what you need.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-border-light dark:bg-border-dark border border-border-light dark:border-border-dark text-xs font-bold hover:bg-surface-light/40 dark:hover:bg-surface-dark/40 transition-all"
                >
                  View Services Suite
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-light dark:bg-gradient-primary text-white text-xs font-bold hover:scale-105 transition-transform"
                >
                  Discuss a Custom Build
                </Link>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </>
  );
}
