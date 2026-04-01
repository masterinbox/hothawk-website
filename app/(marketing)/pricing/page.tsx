import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { PricingPlans } from "@/components/marketing/pricing-plans";
export const metadata = createMetadata({
  title: "Pricing",
  description:
    "HotHawk plans for website uptime, SSL, DNS, and endpoint monitoring. Simple tiers by monitors, check frequency, and seats.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-50">Pricing</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Every plan includes core uptime checks, incident timelines, and workspace controls. Higher tiers add faster intervals,
        more monitors, collaboration seats, status pages, and API access. Exact limits ship with the product and may evolve as
        we improve the platform.
      </p>
      <div className="mt-10">
        <PricingPlans />
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-medium text-slate-100">Plan overview</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>- Starter: essentials for a single owner or tiny team</li>
            <li>- Pro: production teams with status pages and richer checks</li>
            <li>- Scale: higher volume, API automation, and more seats</li>
          </ul>
        </Card>
        <Card>
          <h2 className="font-medium text-slate-100">FAQs</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-300">
            <li>
              <span className="font-medium text-slate-200">What counts as a monitor?</span> Each target you track—URL, API,
              SSL, DNS zone, IP, or heartbeat—typically counts as one monitor.
            </li>
            <li>
              <span className="font-medium text-slate-200">Can I change plans later?</span> Yes. Upgrade or downgrade according
              to the terms in your account.
            </li>
          </ul>
        </Card>
      </div>

      <Card className="mt-10">
        <h2 className="font-medium text-slate-100">Need a custom enterprise footprint?</h2>
        <p className="mt-2 text-sm text-slate-300">
          For large monitor counts, dedicated review of compliance needs, or bespoke alerting workflows, contact us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-400 hover:underline">
            {siteConfig.contactEmail}
          </a>{" "}
          with your requirements.
        </p>
      </Card>
    </section>
  );
}
