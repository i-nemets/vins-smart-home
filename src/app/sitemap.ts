import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = [
    "/",
    "/uslugi",
    "/uslugi/umnyj-dom",
    "/uslugi/iot",
    "/uslugi/iiot",
    "/kejsy",
    "/blog",
    "/o-kompanii",
    "/kontakty",
    "/brif",
    "/kalkulyator",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    priority: route === "/" ? 1 : 0.7,
  }));
}


