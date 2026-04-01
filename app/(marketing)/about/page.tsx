import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { IndependenceNoticeFull } from "@/components/marketing/independence-notice";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "About HotHawk",
  description:
    "HotHawk is independent infrastructure monitoring software for uptime, SSL, DNS, domains, endpoints, and incident awareness.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-sky-300">About</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-50">Infrastructure monitoring without the noise.</h1>
      <p className="mt-6 text-lg text-slate-300">
        HotHawk helps engineering and operations teams monitor website and API uptime, SSL certificates, DNS records, redirects,
        and endpoint health from a single, calm dashboard. When something degrades, you see it early—with enough context to
        respond before customers feel it.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-100">What HotHawk tracks</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>Website and API availability, latency, and reachability</li>
          <li>SSL certificate validity, issuer, and expiry windows</li>
          <li>DNS resolution health and meaningful record changes</li>
          <li>Domain and redirect chain visibility</li>
          <li>Incident timelines and status communication</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-100">Who it is for</h2>
        <p className="mt-4 text-slate-300">
          Platform teams, DevOps and SRE groups, internal IT, digital agencies managing client properties, SaaS vendors, and
          ecommerce operators who need dependable monitoring without a heavyweight enterprise stack.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-100">Problems we focus on</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Card><p className="text-sm text-slate-300">Certificates expiring unnoticed</p></Card>
          <Card><p className="text-sm text-slate-300">DNS or redirect drift after releases</p></Card>
          <Card><p className="text-sm text-slate-300">Slow or partial outages seen too late</p></Card>
          <Card><p className="text-sm text-slate-300">Fragmented tools and noisy alerts</p></Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-100">Independent product notice</h2>
        <Card className="mt-4">
          <IndependenceNoticeFull />
        </Card>
      </section>

      <section className="mt-12 rounded-lg border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-400">
        <p>{siteConfig.independenceLegalLine}</p>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/signup">Start Free</Button>
        <Button href="/docs" variant="secondary">
          Documentation
        </Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </article>
  );
}
