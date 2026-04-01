import { notFound } from "next/navigation";
import { SimpleMarketingPage, simpleMetadata } from "@/components/marketing/simple-page";

const pages: Record<string, { title: string; description: string; bullets: string[] }> = {
  "book-demo": {
    title: "Book a HotHawk walkthrough",
    description:
      "See how HotHawk fits your uptime, SSL, DNS, and endpoint monitoring workflow. We walk through monitors, incidents, and alerting in a live-style product tour.",
    bullets: [
      "30-minute session tailored to your stack",
      "Monitor types: HTTP, SSL, DNS, IP, redirects, heartbeats",
      "Q&A on check frequency, regions, and alert routing",
    ],
  },
  customers: {
    title: "How teams use HotHawk",
    description:
      "HotHawk is used by teams that need dependable visibility into production endpoints, certificates, and DNS—without running a separate observability program.",
    bullets: [
      "Ecommerce teams protecting checkout and payment flows",
      "SaaS vendors monitoring APIs and public status",
      "Agencies consolidating client-site health in one workspace",
    ],
  },
  integrations: {
    title: "Integrations",
    description:
      "Route monitor and incident signals into the systems your team already uses. HotHawk supports common delivery patterns so on-call and platform teams stay aligned.",
    bullets: ["Webhooks for custom automation", "Chat and ticketing handoffs (where configured)", "API for workspace automation"],
  },
  careers: {
    title: "Careers",
    description:
      "We build calm, credible infrastructure software. If you care about reliability, clear UX, and honest product communication, we would like to hear from you.",
    bullets: ["Remote-friendly roles", "Small product team", "Focus on monitoring and developer experience"],
  },
  partners: {
    title: "Partners",
    description:
      "Partner with HotHawk to bring structured uptime and certificate monitoring to your customers or consulting practice.",
    bullets: ["Referral and implementation partners", "Co-marketing for complementary tooling", "Clear, independent brand positioning"],
  },
  changelog: {
    title: "Changelog",
    description: "Product updates for monitors, checks, alerting, and the HotHawk dashboard.",
    bullets: [
      "Region check coverage improvements",
      "SSL and DNS insight refinements",
      "Dashboard performance and navigation updates",
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = pages[params.slug];
  if (!page) return {};
  return simpleMetadata(page.title, page.description, `/${params.slug}`);
}

export default function FlatPage({ params }: { params: { slug: string } }) {
  const page = pages[params.slug];
  if (!page) notFound();
  return <SimpleMarketingPage title={page.title} description={page.description} bullets={page.bullets} />;
}
