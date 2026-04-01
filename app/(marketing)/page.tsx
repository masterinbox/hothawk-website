import { Activity, ShieldCheck, Globe, Server } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { monitors, incidents } from "@/data/demo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { Sparkline } from "@/components/ui/sparkline";
import { CtaStrip } from "@/components/marketing/cta-strip";
import { IndependenceNoticeShort } from "@/components/marketing/independence-notice";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Infrastructure monitoring and reliability",
  description:
    "HotHawk monitors website and API uptime, SSL certificates, DNS health, redirects, and endpoint latency—so your team sees issues before users do.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-medium text-sky-300">Monitor what matters.</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl lg:text-[2.75rem] lg:leading-tight">
                Know when your internet-facing systems break.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                HotHawk is infrastructure monitoring for teams that need clear uptime, SSL, DNS, redirect, and API checks—without
                a heavyweight stack. Run checks from multiple regions, see incidents in context, and keep stakeholders informed.
              </p>
              <ul className="mt-8 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                <li className="flex gap-2"><span className="text-sky-400">—</span> Website and API uptime</li>
                <li className="flex gap-2"><span className="text-sky-400">—</span> SSL expiry and issuer tracking</li>
                <li className="flex gap-2"><span className="text-sky-400">—</span> DNS and redirect visibility</li>
                <li className="flex gap-2"><span className="text-sky-400">—</span> Latency and reachability trends</li>
                <li className="flex gap-2"><span className="text-sky-400">—</span> Incident awareness and timelines</li>
                <li className="flex gap-2"><span className="text-sky-400">—</span> One dashboard for health signals</li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/signup">Start Free</Button>
                <Button href="/app/overview" variant="secondary">
                  View demo
                </Button>
                <Button href="/pricing" variant="ghost">
                  Pricing
                </Button>
                <Button href="/docs" variant="ghost">
                  Docs
                </Button>
              </div>
            </div>
            <Card className="border-slate-800 bg-slate-900/40">
              <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h2 className="font-medium text-slate-100">Workspace overview</h2>
                  <p className="text-xs text-slate-500">Illustrative data</p>
                </div>
                <StatusPill status="operational" />
              </div>
              <div className="space-y-3">
                {monitors.map((m) => (
                  <div key={m.id} className="flex items-center justify-between rounded-lg border border-slate-800/80 p-3">
                    <div>
                      <p className="text-sm font-medium text-slate-100">{m.name}</p>
                      <p className="text-xs text-slate-500">{m.target}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-200">{m.responseMs}ms</p>
                      <p className="text-xs text-slate-500">{m.regions} regions</p>
                    </div>
                  </div>
                ))}
              </div>
              <Sparkline points={[220, 235, 210, 248, 230, 218, 225]} className="mt-4 h-10 w-full text-sky-400/90" />
            </Card>
          </div>
          <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/30 p-4 md:p-5">
            <IndependenceNoticeShort className="text-slate-400 md:text-sm" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-slate-50">What we monitor</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          HotHawk focuses on signals that predict customer-visible failure: availability, certificates, DNS correctness,
          redirects, and response behavior.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-slate-800">
            <Activity className="mb-3 h-5 w-5 text-sky-400" />
            <h3 className="font-medium text-slate-100">Uptime and APIs</h3>
            <p className="mt-2 text-sm text-slate-400">HTTP checks, status codes, and response-time trends for web and API endpoints.</p>
          </Card>
          <Card className="border-slate-800">
            <ShieldCheck className="mb-3 h-5 w-5 text-sky-400" />
            <h3 className="font-medium text-slate-100">SSL and headers</h3>
            <p className="mt-2 text-sm text-slate-400">Expiry windows, issuer changes, and baseline security header visibility.</p>
          </Card>
          <Card className="border-slate-800">
            <Globe className="mb-3 h-5 w-5 text-sky-400" />
            <h3 className="font-medium text-slate-100">DNS and domains</h3>
            <p className="mt-2 text-sm text-slate-400">Record resolution, propagation drift, and redirect chain audits.</p>
          </Card>
          <Card className="border-slate-800">
            <Server className="mb-3 h-5 w-5 text-sky-400" />
            <h3 className="font-medium text-slate-100">Reachability</h3>
            <p className="mt-2 text-sm text-slate-400">IP and path checks with regional context for ambiguous outages.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-50">Monitoring types</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {["HTTP / HTTPS endpoints", "SSL certificate lifecycle", "DNS (A, CNAME, MX, TXT)", "Redirect chains", "Keyword and content checks", "Heartbeat endpoints"].map((item) => (
            <Card key={item} className="border-slate-800 py-4">
              <p className="text-sm font-medium text-slate-200">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-50">Why teams use HotHawk</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card className="border-slate-800">
            <p className="font-medium text-slate-100">Fewer blind spots</p>
            <p className="mt-2 text-sm text-slate-400">One place for uptime, certificates, and DNS—instead of scattered scripts.</p>
          </Card>
          <Card className="border-slate-800">
            <p className="font-medium text-slate-100">Alerts with context</p>
            <p className="mt-2 text-sm text-slate-400">Incidents tie to regions, timelines, and monitor configuration.</p>
          </Card>
          <Card className="border-slate-800">
            <p className="font-medium text-slate-100">Credible communication</p>
            <p className="mt-2 text-sm text-slate-400">Status views help explain impact without overpromising.</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-50">How alerts work</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          You define check intervals and regions. When thresholds fail, HotHawk opens an incident, routes notifications through
          your chosen channels, and preserves a timeline for post-incident review.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Webhooks", "Chat integrations", "On-call rotations", "Quiet hours"].map((c) => (
            <span key={c} className="rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs text-slate-300">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-50">Use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="border-slate-800">
            <h3 className="font-medium text-slate-100">Ecommerce checkout</h3>
            <p className="mt-2 text-sm text-slate-400">Watch payment and cart endpoints with tight intervals and regional coverage.</p>
          </Card>
          <Card className="border-slate-800">
            <h3 className="font-medium text-slate-100">SSL expiry prevention</h3>
            <p className="mt-2 text-sm text-slate-400">Advance warnings before certificates strand traffic or break API clients.</p>
          </Card>
          <Card className="border-slate-800">
            <h3 className="font-medium text-slate-100">DNS change visibility</h3>
            <p className="mt-2 text-sm text-slate-400">Catch record drift and propagation issues after releases or provider changes.</p>
          </Card>
          <Card className="border-slate-800">
            <h3 className="font-medium text-slate-100">Agency client monitoring</h3>
            <p className="mt-2 text-sm text-slate-400">Consolidate many properties with clear per-client separation in the workspace.</p>
          </Card>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          <Link href="/use-cases/devops-teams" className="text-sky-400 hover:underline">
            Browse all use cases
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-50">Status and incidents</h2>
        <p className="mt-3 text-slate-400">
          See how service health is communicated externally and how recent incidents read inside the product.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-slate-300">Recent incident timeline</h3>
            <div className="mt-4 space-y-3">
              {incidents.map((i) => (
                <Card key={i.id} className="border-slate-800">
                  <p className="font-medium text-slate-100">{i.title}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {i.monitor} · {i.startedAt} – {i.endedAt}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-slate-800">
            <h3 className="text-sm font-medium text-slate-300">Public status preview</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-slate-800 px-3 py-2 text-sm">
                <span>Core API</span>
                <StatusPill status="operational" />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800 px-3 py-2 text-sm">
                <span>Check execution</span>
                <StatusPill status="operational" />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800 px-3 py-2 text-sm">
                <span>Notifications</span>
                <StatusPill status="operational" />
              </div>
            </div>
            <Link href="/status" className="mt-4 inline-block text-sm text-sky-400 hover:underline">
              View public status page
            </Link>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-50">Frequently asked questions</h2>
        <div className="mt-6 space-y-3">
          <Card className="border-slate-800">
            <p className="font-medium text-slate-100">Is HotHawk only for large enterprises?</p>
            <p className="mt-2 text-sm text-slate-400">
              No. It is built for teams that want serious monitoring without unnecessary complexity—whether you run one product
              or many client sites.
            </p>
          </Card>
          <Card className="border-slate-800">
            <p className="font-medium text-slate-100">Can I monitor APIs and static sites together?</p>
            <p className="mt-2 text-sm text-slate-400">
              Yes. Mix HTTP checks, SSL tracking, DNS monitors, and other types in the same workspace.
            </p>
          </Card>
          <Card className="border-slate-800">
            <p className="font-medium text-slate-100">How does HotHawk relate to other brands?</p>
            <p className="mt-2 text-sm text-slate-400">
              HotHawk is an independent product focused on infrastructure monitoring and reliability. This website and service are
              not affiliated with, endorsed by, or connected to any other company that may use a similar name.
            </p>
          </Card>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
