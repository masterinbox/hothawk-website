import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { featureSlugs } from "@/data/pages";
import { MarketingHero, GenericSection, RelatedLinks } from "@/components/marketing/page-templates";
import { Card } from "@/components/ui/card";
import { CtaStrip } from "@/components/marketing/cta-strip";

export async function generateStaticParams() {
  return featureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!featureSlugs.includes(params.slug)) return {};
  const name = params.slug.replace(/-/g, " ");
  return createMetadata({
    title: `${name} feature`,
    description: `Learn how HotHawk handles ${name} with practical monitoring workflows.`,
    path: `/features/${params.slug}`,
  });
}

export default function FeatureDetail({ params }: { params: { slug: string } }) {
  if (!featureSlugs.includes(params.slug)) notFound();
  const title = params.slug.replace(/-/g, " ");
  return (
    <>
      <MarketingHero
        title={title}
        description={`Use HotHawk to monitor ${title} with clean dashboards, incident visibility, and reliable region checks.`}
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/features", label: "Features" },
          { href: `/features/${params.slug}`, label: title },
        ]}
      />
      <GenericSection
        title="How it works"
        bullets={[
          "Configure target and check frequency",
          "Run checks across selected regions",
          "Receive alerts and incident updates",
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-100">Operational detail blocks</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card><p className="font-medium">Detection logic</p><p className="mt-2 text-sm text-slate-300">Thresholds and retries reduce noisy alerts while keeping issue detection fast.</p></Card>
          <Card><p className="font-medium">Region visibility</p><p className="mt-2 text-sm text-slate-300">Each check includes region badges and timing snapshots for rapid triage.</p></Card>
          <Card><p className="font-medium">Incident context</p><p className="mt-2 text-sm text-slate-300">Timeline entries capture start, impact, and recovery notes.</p></Card>
        </div>
      </section>
      <GenericSection
        title="Benefits"
        bullets={[
          "Faster issue detection",
          "Clear operational visibility",
          "Low-noise alerts for small teams",
        ]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-100">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          <Card><p className="font-medium">How quickly are issues detected?</p><p className="mt-2 text-sm text-slate-300">Detection speed depends on check frequency and retry configuration for this monitor type.</p></Card>
          <Card><p className="font-medium">Can I view historical performance?</p><p className="mt-2 text-sm text-slate-300">Yes. Each monitor includes trend views, incident history, and region-level check outcomes.</p></Card>
        </div>
      </section>
      <RelatedLinks
        links={[
          { href: "/features", label: "All features" },
          { href: "/pricing", label: "Pricing" },
          { href: "/docs/getting-started", label: "Docs" },
        ]}
      />
      <CtaStrip />
    </>
  );
}

