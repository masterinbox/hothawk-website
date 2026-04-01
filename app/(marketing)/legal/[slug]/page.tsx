import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { legalSlugs } from "@/data/pages";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

const legalSections: Record<string, { heading: string; points: string[] }[]> = {
  "privacy-policy": [
    { heading: "Data collected", points: ["Account identifiers", "Usage telemetry", "Service diagnostics"] },
    { heading: "Retention", points: ["Operational logs retained for security and stability review", "Retention windows vary by data class"] },
    { heading: "User rights", points: ["Access, correction, and deletion requests", "Regional rights honored where applicable"] },
  ],
  terms: [
    { heading: "Service use", points: ["Use the service lawfully", "Do not abuse monitoring infrastructure"] },
    { heading: "Billing", points: ["Plan terms and renewals", "Cancellation and downgrade handling"] },
    { heading: "Liability", points: ["Service provided as-is", "Limitations described in full agreement"] },
  ],
  "cookie-policy": [
    { heading: "Essential cookies", points: ["Authentication and session integrity"] },
    { heading: "Analytics cookies", points: ["Aggregate usage trends for product quality"] },
    { heading: "Preference cookies", points: ["Workspace and UI preferences"] },
  ],
  "data-processing": [
    { heading: "Processing scope", points: ["Controller/processor roles defined by service context"] },
    { heading: "Subprocessors", points: ["See subprocessor register for current vendors"] },
    { heading: "Security", points: ["Controls for access, transmission, and auditability"] },
  ],
  "acceptable-use": [
    { heading: "Prohibited behavior", points: ["No attacks", "No credential abuse", "No illegal surveillance activity"] },
  ],
  "security-disclosure": [
    { heading: "Responsible disclosure", points: ["Report issues privately", "Provide reproducible details", "Respect safe-harbor boundaries"] },
  ],
  subprocessors: [
    { heading: "Vendors", points: ["Hosting provider (placeholder)", "Analytics provider (placeholder)", "Payment provider (placeholder)", "Support platform (placeholder)"] },
  ],
};

export async function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!legalSlugs.includes(params.slug)) return {};
  return createMetadata({
    title: params.slug.replace(/-/g, " "),
    description: `Legal information for ${params.slug.replace(/-/g, " ")}.`,
    path: `/legal/${params.slug}`,
  });
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  if (!legalSlugs.includes(params.slug)) notFound();
  const title = params.slug.replace(/-/g, " ");
  const sections = legalSections[params.slug] ?? [];
  return (
    <article className="mx-auto max-w-5xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/legal/privacy-policy", label: "Legal" },
          { href: `/legal/${params.slug}`, label: title },
        ]}
      />
      <h1 className="text-4xl font-semibold capitalize">{title}</h1>
      <p className="mt-3 text-sm text-slate-400">Effective date: {siteConfig.legal.effectiveDate}</p>
      <div className="mt-8 space-y-5">
        {sections.map((section) => (
          <Card key={section.heading}>
            <h2 className="font-medium">{section.heading}</h2>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              {section.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </Card>
        ))}
        {params.slug === "subprocessors" ? (
          <Card>
            <h2 className="font-medium">Subprocessor table</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-800">
                  <tr><th className="py-2">Vendor</th><th>Purpose</th><th>Region</th></tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-900"><td className="py-2">Hosting Provider (Placeholder)</td><td>Application hosting</td><td>US/EU</td></tr>
                  <tr className="border-b border-slate-900"><td className="py-2">Analytics Provider (Placeholder)</td><td>Usage analytics</td><td>US</td></tr>
                  <tr><td className="py-2">Support Platform (Placeholder)</td><td>Support operations</td><td>US</td></tr>
                </tbody>
              </table>
            </div>
          </Card>
        ) : null}
        <Card>
          <h2 className="font-medium">Contact details</h2>
          <p className="mt-2 text-sm text-slate-300">{siteConfig.legal.companyName} - {siteConfig.legal.address}</p>
          <p className="text-sm text-slate-300">Privacy contact: {siteConfig.legal.privacyChannel}</p>
          <p className="text-sm text-slate-300">Support contact: {siteConfig.legal.supportChannel}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-300">
            This legal content is a structured placeholder and requires formal review before production use.
          </p>
        </Card>
      </div>
      <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300">
        Governing law placeholder: {siteConfig.legal.governingLaw}
      </div>
    </article>
  );
}

