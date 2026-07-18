import { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pixorastudios.com";
  const today = new Date("2026-07-19");

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // All 17 industry slugs + the fallback "clinics" slug that exists in industriesMap
  const industriesSlugs = [
    "restaurants",
    "dental-clinics",
    "gyms",
    "salons",
    "hotels-pgs",
    "schools-coaching",
    "real-estate",
    "cafes",
    "logistics-marketplaces",
    "local-e-commerce",
    "event-organizers",
    "clubs-lounges",
    "travel-agencies",
    "pharmacies",
    "interior-designers",
    "personal-brands",
    "general-clinics",
    "clinics", // also has a dedicated industriesMap entry
  ];

  const industryUrls = industriesSlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/qr-menu`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...industryUrls, ...projectUrls];
}
