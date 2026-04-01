import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { featureSlugs, useCaseSlugs, legalSlugs } from "@/data/pages";
import { blogPosts, docsArticles } from "@/data/demo";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/pricing",
  "/security",
  "/status",
  "/docs",
  "/features",
  "/blog",
  "/login",
  "/signup",
  "/forgot-password",
  "/book-demo",
  "/customers",
  "/integrations",
  "/careers",
  "/partners",
  "/changelog",
  "/app/overview",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const lastModified = new Date(siteConfig.legal.effectiveDate);

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  for (const slug of featureSlugs) {
    entries.push({ url: `${base}/features/${slug}`, lastModified, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const slug of useCaseSlugs) {
    entries.push({ url: `${base}/use-cases/${slug}`, lastModified, changeFrequency: "monthly", priority: 0.6 });
  }
  for (const slug of legalSlugs) {
    entries.push({ url: `${base}/legal/${slug}`, lastModified, changeFrequency: "yearly", priority: 0.4 });
  }
  for (const post of blogPosts) {
    entries.push({ url: `${base}/blog/${post.slug}`, lastModified, changeFrequency: "monthly", priority: 0.5 });
  }
  for (const doc of docsArticles) {
    entries.push({ url: `${base}/docs/${doc.slug}`, lastModified, changeFrequency: "monthly", priority: 0.55 });
  }

  return entries;
}
