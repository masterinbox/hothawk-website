import { Activity, ShieldCheck, Globe, BellRing } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { monitors, incidents } from "@/data/demo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { Sparkline } from "@/components/ui/sparkline";
import { CtaStrip } from "@/components/marketing/cta-strip";

export const metadata = createMetadata({
  title: "HotHawk Monitoring Platform",
  description:
    "Spot issues before users do. Monitor website uptime, SSL, DNS, and IP health with a calm, modern infrastructure surveillance platform.",
  path: "/",
});

const features = [
  "Website uptime and endpoint checks",
  "SSL certificate expiry and issuer tracking",
  "DNS, domain, and redirect visibility",
  "IP reachability and latency trends",
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm text-sky-300">Website, IP, and infrastructure surveillance made simple.</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              Spot issues before users do.
            </h1>
            <p className="mt-5 max-w-xl text-slate-300">
              HotHawk helps teams monitor uptime, SSL, DNS, domain health, and incidents from one clean dashboard.
            </p>
            <div className="mt-8 flex gap-3">
              <Button href="/signup">Start Free</Button>
              <Button href="/app/overview" variant="secondary">
                View Demo
              </Button>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-slate-300">
              {features.map((f) => (
                <li key={f}>- {f}</li>
              ))}
            </ul>
          </div>
          <Card className="border-slate-700">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-medium">Live monitor snapshot</h2>
              <StatusPill status="operational" />
            </div>
            <div className="space-y-3">
              {monitors.map((m) => (
                <div key={m.id} className="flex items-center justify-between rounded-lg border border-slate-800 p-3">
                  <div>
                    <p className="text-sm font-medium text-slate-100">{m.name}</p>
                    <p className="text-xs text-slate-400">{m.target}</p>
                  </div>
                  <p className="text-sm text-slate-300">{m.responseMs}ms</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="rounded border border-slate-700 px-2 py-1">Trusted by: Northstar Labs</span>
          <span className="rounded border border-slate-700 px-2 py-1">Rivermesh Cloud</span>
          <span className="rounded border border-slate-700 px-2 py-1">Lumena Commerce</span>
          <span className="rounded border border-slate-700 px-2 py-1">Ember Systems</span>
        </div>
        <h2 className="text-2xl font-semibold">Monitoring categories</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Card><Activity className="mb-2 h-4 w-4 text-sky-300" />Uptime and response time</Card>
          <Card><ShieldCheck className="mb-2 h-4 w-4 text-sky-300" />SSL and security headers</Card>
          <Card><Globe className="mb-2 h-4 w-4 text-sky-300" />DNS and domain health</Card>
          <Card><BellRing className="mb-2 h-4 w-4 text-sky-300" />Alert routing and incidents</Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <h2 className="text-2xl font-semibold">How HotHawk works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card><p className="font-medium">1. Add targets</p><p className="mt-2 text-sm text-slate-300">Add URLs, domains, IPs, or heartbeat endpoints in minutes.</p></Card>
          <Card><p className="font-medium">2. Run checks globally</p><p className="mt-2 text-sm text-slate-300">Monitor from multiple regions with configurable intervals.</p></Card>
          <Card><p className="font-medium">3. Respond with context</p><p className="mt-2 text-sm text-slate-300">Use incident timelines, status notes, and monitor logs for triage.</p></Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <h2 className="text-2xl font-semibold">Recent incident timeline</h2>
        <div className="mt-6 space-y-3">
          {incidents.map((i) => (
            <Card key={i.id}>
              <p className="font-medium">{i.title}</p>
              <p className="mt-1 text-sm text-slate-400">
                {i.monitor} - {i.startedAt} to {i.endedAt}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <h2 className="text-2xl font-semibold">Platform evidence</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm text-slate-400">Latency sparkline</p>
            <Sparkline points={[220, 240, 215, 260, 235, 228, 230]} className="mt-3 h-10 w-full text-sky-300" />
          </Card>
          <Card>
            <p className="text-sm text-slate-400">SSL expiry warnings</p>
            <div className="mt-3 space-y-2 text-xs text-slate-300">
              <div className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1">api.northstar-app.com - 11d</div>
              <div className="rounded border border-slate-700 px-2 py-1">checkout.lumena.shop - 36d</div>
            </div>
          </Card>
          <Card>
            <p className="text-sm text-slate-400">Public status preview</p>
            <div className="mt-3 space-y-2 text-xs text-slate-300">
              <div className="flex items-center justify-between rounded border border-slate-700 px-2 py-1"><span>API</span><StatusPill status="operational" /></div>
              <div className="flex items-center justify-between rounded border border-slate-700 px-2 py-1"><span>Checks Engine</span><StatusPill status="operational" /></div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14">
        <h2 className="text-2xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          <Card><p className="font-medium">Can HotHawk monitor both websites and infrastructure?</p><p className="mt-2 text-sm text-slate-300">Yes. You can monitor URLs, endpoints, domains, SSL certificates, DNS, and IP health in one workspace.</p></Card>
          <Card><p className="font-medium">Does it support region-based checks?</p><p className="mt-2 text-sm text-slate-300">Yes. Each monitor can be checked from selected regions to expose geography-specific issues.</p></Card>
          <Card><p className="font-medium">Can teams publish service health publicly?</p><p className="mt-2 text-sm text-slate-300">Yes. Status pages and incident logs are built for stakeholder communication.</p></Card>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}

