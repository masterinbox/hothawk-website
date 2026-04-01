import { notFound } from "next/navigation";
import { SimpleMarketingPage, simpleMetadata } from "@/components/marketing/simple-page";

const pages: Record<string, { title: string; description: string; bullets: string[] }> = {
  about: {
    title: "About HotHawk",
    description: "HotHawk is built for teams that need clear infrastructure visibility without enterprise bloat.",
    bullets: ["Fast setup", "Calm dashboards", "Monitoring focused product direction"],
  },
  contact: {
    title: "Contact",
    description: "Reach our team for product, support, security, and partnership questions.",
    bullets: ["Support portal access", "Privacy request portal", "Billing request portal"],
  },
  "book-demo": {
    title: "Book a HotHawk Demo",
    description: "See website, SSL, DNS, and IP monitoring workflows with sample infrastructure data.",
    bullets: ["25-minute session", "Use-case walkthrough", "Q&A with product specialist"],
  },
  customers: {
    title: "Customer Stories",
    description: "How teams use HotHawk to catch outages and reduce incident blind spots.",
    bullets: ["B2C commerce platform", "Global software vendor", "Independent hosting provider"],
  },
  integrations: {
    title: "Integrations",
    description: "Send incident and monitor alerts to the channels your team already uses.",
    bullets: ["Slack and webhooks", "Ops chat tooling", "Ticketing handoff patterns"],
  },
  security: {
    title: "Security",
    description: "Security controls designed for practical monitoring workflows and accountable team operations.",
    bullets: ["Encryption in transit", "Role-based access direction", "Responsible disclosure policy"],
  },
  careers: {
    title: "Careers",
    description: "Join us to build monitoring software that helps teams detect issues early.",
    bullets: ["Remote-friendly", "Product-focused engineering", "Small, high-ownership team"],
  },
  partners: {
    title: "Partners",
    description: "Partner with HotHawk to help teams improve uptime and infrastructure awareness.",
    bullets: ["Referral model", "Co-marketing opportunities", "Implementation partners"],
  },
  changelog: {
    title: "Changelog",
    description: "Track updates across monitor types, alerting rules, and status page improvements.",
    bullets: ["Region checks", "SSL warning improvements", "Dashboard performance updates"],
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

