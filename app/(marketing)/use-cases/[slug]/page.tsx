import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { useCaseSlugs } from "@/data/pages";
import { MarketingHero, GenericSection, RelatedLinks } from "@/components/marketing/page-templates";
import { Card } from "@/components/ui/card";
import { CtaStrip } from "@/components/marketing/cta-strip";

export async function generateStaticParams() {
  return useCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!useCaseSlugs.includes(params.slug)) return {};
  return createMetadata({
    title: `Use case: ${params.slug.replace(/-/g, " ")}`,
    description: `How ${params.slug.replace(/-/g, " ")} teams use HotHawk for uptime and infrastructure monitoring.`,
    path: `/use-cases/${params.slug}`,
  });
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  if (!useCaseSlugs.includes(params.slug)) notFound();
  const name = params.slug.replace(/-/g, " ");
  const profile = {
    "indie-hackers": "Small products with lean operations and zero tolerance for silent downtime.",
    agencies: "Multiple client properties with different SLAs and reporting cadences.",
    "devops-teams": "Infrastructure owners responsible for reliability and incident response.",
    ecommerce: "Revenue-sensitive storefronts where checkout and availability must stay stable.",
    "saas-companies": "Always-on apps that require clear monitor ownership and release confidence.",
    "it-consultants": "Consulting teams that need unified visibility across managed systems.",
    "multi-site-monitoring": "Operations across many domains and endpoints from one dashboard.",
    "client-reporting": "Teams who need clear status narratives and reliable historical records.",
  }[params.slug]!;
  return (
    <>
      <MarketingHero
        title={`HotHawk for ${name}`}
        description={profile}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/use-cases/devops-teams", label: "Use Cases" },
          { href: `/use-cases/${params.slug}`, label: name },
        ]}
      />
      <GenericSection
        title="Common pain points"
        bullets={["Blind spots in uptime checks", "Delayed incident visibility", "No central place for SSL and DNS risk"]}
      />
      <GenericSection
        title="Why HotHawk helps"
        bullets={["Unified monitor views", "Actionable alerting", "Status updates for stakeholders"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-100">Expected outcomes</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card><p className="font-medium">Faster detection</p><p className="mt-2 text-sm text-slate-300">Cut time-to-awareness with region-based checks and concise alert context.</p></Card>
          <Card><p className="font-medium">Better communication</p><p className="mt-2 text-sm text-slate-300">Use timeline notes and status updates to keep teams aligned during incidents.</p></Card>
          <Card><p className="font-medium">Lower operational overhead</p><p className="mt-2 text-sm text-slate-300">Consolidate SSL, DNS, domain, and uptime visibility into one workspace.</p></Card>
        </div>
      </section>
      <RelatedLinks links={[{ href: "/features", label: "Feature set" }, { href: "/pricing", label: "Plans" }]} />
      <CtaStrip />
    </>
  );
}

