import { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pixorastudios.com";

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project.updatedAt),
  }));

  const industriesSlugs = [
    "restaurants",
    "clinics",
    "gyms",
    "salons",
    "hotels-pgs",
    "schools-coaching",
    "real-estate"
  ];

  const industryUrls = industriesSlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date("2026-07-16")
  }));

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/products/qr-menu`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-16"),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-07-16"),
    },
  ];

  return [...staticPages, ...industryUrls, ...projectUrls];
}
