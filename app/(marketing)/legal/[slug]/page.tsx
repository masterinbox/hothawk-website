import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { legalSlugs } from "@/data/pages";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { IndependenceNoticeFull } from "@/components/marketing/independence-notice";

const legalSections: Record<string, { heading: string; points: string[] }[]> = {
  "privacy-policy": [
    {
      heading: "Information we collect",
      points: [
        "Account and workspace identifiers you provide when signing up",
        "Configuration data for monitors (URLs, hostnames, check settings)",
        "Technical logs needed to operate checks, deliver alerts, and secure the service",
        "Support communications you send to us",
      ],
    },
    {
      heading: "How we use information",
      points: [
        "To provide monitoring, alerting, and dashboard features",
        "To maintain security, prevent abuse, and improve reliability",
        "To communicate about the service, billing, and policy updates where applicable",
      ],
    },
    {
      heading: "Cookies and similar technologies",
      points: [
        "Essential cookies for authentication and session security",
        "Optional analytics or preference cookies where enabled and disclosed",
      ],
    },
    {
      heading: "Retention",
      points: [
        "We retain data only as long as needed for the purposes above and as required by law",
        "Monitor history and incident records follow configurable workspace retention where available",
      ],
    },
    {
      heading: "Your rights",
      points: [
        "You may request access, correction, or deletion of personal data subject to legal exceptions",
        "Contact us using the address below for privacy requests",
      ],
    },
  ],
  terms: [
    {
      heading: "The service",
      points: [
        "HotHawk provides infrastructure monitoring and related tools subject to these terms and published product limits",
        "We may update the service to improve security, reliability, and features",
      ],
    },
    {
      heading: "Accounts and acceptable use",
      points: [
        "You are responsible for activity under your account and for keeping credentials secure",
        "You may not use HotHawk to attack, harass, or unlawfully surveil third parties",
        "You may not misuse the service to probe systems you are not authorized to monitor",
      ],
    },
    {
      heading: "Billing and cancellation",
      points: [
        "Paid plans are billed according to the pricing page and checkout terms in effect at purchase",
        "You may cancel or downgrade according to plan rules; access may end when the billing period ends",
      ],
    },
    {
      heading: "Disclaimers and limitation of liability",
      points: [
        "Monitoring provides signals, not guarantees; you remain responsible for your systems and incidents",
        "To the maximum extent permitted by law, liability is limited as set out in the full agreement",
      ],
    },
    {
      heading: "Intellectual property",
      points: ["HotHawk retains rights in the software, branding, and documentation", "You retain rights in your data"],
    },
  ],
  "cookie-policy": [
    {
      heading: "Essential cookies",
      points: ["Required for sign-in, session integrity, and security features"],
    },
    {
      heading: "Analytics cookies",
      points: ["Used in aggregate to understand product usage and improve performance"],
    },
    {
      heading: "Preference cookies",
      points: ["Remember UI and workspace preferences where applicable"],
    },
  ],
  "data-processing": [
    {
      heading: "Roles",
      points: [
        "Depending on context, HotHawk may act as a processor of customer-configured monitoring data",
        "HotHawk acts as a controller for account, billing, and service operation data where applicable",
      ],
    },
    {
      heading: "Subprocessors",
      points: ["We use vetted infrastructure and service providers listed in our Subprocessors page"],
    },
    {
      heading: "Security measures",
      points: ["We implement administrative, technical, and organizational measures appropriate to the service"],
    },
  ],
  "acceptable-use": [
    {
      heading: "Prohibited conduct",
      points: [
        "No probing or monitoring of systems without authorization",
        "No attempts to disrupt HotHawk or other infrastructure",
        "No use of the service for illegal activity or to violate third-party rights",
      ],
    },
  ],
  "security-disclosure": [
    {
      heading: "Reporting",
      points: [
        `Send reports to ${siteConfig.contactEmail} with enough detail to reproduce the issue`,
        "Allow reasonable time for investigation before public disclosure",
      ],
    },
    {
      heading: "Safe harbor",
      points: [
        "We will not pursue legal action for good-faith research that complies with this policy",
        "Do not access user data without authorization or degrade service for others",
      ],
    },
  ],
  subprocessors: [
    {
      heading: "Overview",
      points: [
        "HotHawk uses subprocessors to host the service, process payments where applicable, and operate support tooling",
        "Vendor names and regions may change; this table describes categories until a live register is published",
      ],
    },
  ],
};

export async function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!legalSlugs.includes(params.slug)) return {};
  const label = params.slug.replace(/-/g, " ");
  return createMetadata({
    title: label,
    description: `${label} for HotHawk infrastructure monitoring.`,
    path: `/legal/${params.slug}`,
  });
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  if (!legalSlugs.includes(params.slug)) notFound();
  const title = params.slug.replace(/-/g, " ");
  const sections = legalSections[params.slug] ?? [];
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/legal/privacy-policy", label: "Legal" },
          { href: `/legal/${params.slug}`, label: title },
        ]}
      />
      <h1 className="text-4xl font-semibold capitalize text-slate-50">{title}</h1>
      <p className="mt-3 text-sm text-slate-400">Effective date: {siteConfig.legal.effectiveDate}</p>

      <div className="mt-8 space-y-5">
        {sections.map((section) => (
          <Card key={section.heading}>
            <h2 className="font-medium text-slate-100">{section.heading}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {section.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </Card>
        ))}

        {params.slug === "subprocessors" ? (
          <Card>
            <h2 className="font-medium text-slate-100">Subprocessor categories</h2>
            <p className="mt-2 text-sm text-slate-400">
              Specific vendor names and regions are maintained as the live service matures. Categories below reflect typical
              roles.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="border-b border-slate-800 text-slate-400">
                  <tr>
                    <th className="py-2 pr-4">Category</th>
                    <th className="py-2 pr-4">Purpose</th>
                    <th className="py-2">Typical region</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-900">
                    <td className="py-2 pr-4">Cloud infrastructure</td>
                    <td className="py-2 pr-4">Application hosting and data storage</td>
                    <td className="py-2">Multi-region</td>
                  </tr>
                  <tr className="border-b border-slate-900">
                    <td className="py-2 pr-4">Payments</td>
                    <td className="py-2 pr-4">Billing and subscription management</td>
                    <td className="py-2">As required by processor</td>
                  </tr>
                  <tr className="border-b border-slate-900">
                    <td className="py-2 pr-4">Analytics</td>
                    <td className="py-2 pr-4">Product usage measurement</td>
                    <td className="py-2">US / EU</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Customer support</td>
                    <td className="py-2 pr-4">Helpdesk and communications tooling</td>
                    <td className="py-2">US / EU</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        ) : null}

        <Card>
          <h2 className="font-medium text-slate-100">Contact</h2>
          <p className="mt-2 text-sm text-slate-300">
            {siteConfig.legal.companyName} —{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-400 hover:underline">
              {siteConfig.contactEmail}
            </a>
          </p>
        </Card>

        <Card>
          <h2 className="font-medium text-slate-100">Independent product notice</h2>
          <div className="mt-3">
            <IndependenceNoticeFull />
          </div>
        </Card>

        <p className="text-xs text-slate-500">{siteConfig.independenceLegalLine}</p>
      </div>

      <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-400">
        {siteConfig.legal.governingLawSummary}
      </div>
    </article>
  );
}
