import { createMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

export const metadata = createMetadata({
  title: "System status",
  description: "Current availability of HotHawk platform components and recent incident history.",
  path: "/status",
});

const components = [
  { name: "API", detail: "REST and workspace API" },
  { name: "Check execution", detail: "Synthetic monitors and regional runners" },
  { name: "Alert delivery", detail: "Webhooks and notification pipelines" },
  { name: "Status pages", detail: "Public status page rendering" },
];

const past = [
  { range: "Last 90 days", uptime: "99.99%", note: "Platform-wide availability target" },
  { range: "Last 30 days", uptime: "100%", note: "No customer-impacting platform incidents" },
];

export default function StatusPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-50">System status</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        HotHawk operates monitoring infrastructure across multiple components. This page reflects the health of the HotHawk
        service itself—not your individual monitors.
      </p>
      <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        All systems operational
      </div>

      <h2 className="mt-12 text-lg font-semibold text-slate-100">Components</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {components.map((c) => (
          <Card key={c.name} className="flex items-start justify-between gap-4 border-slate-800">
            <div>
              <p className="font-medium text-slate-100">{c.name}</p>
              <p className="mt-1 text-sm text-slate-500">{c.detail}</p>
            </div>
            <StatusPill status="operational" />
          </Card>
        ))}
      </div>

      <h2 className="mt-12 text-lg font-semibold text-slate-100">Uptime summary</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {past.map((row) => (
          <Card key={row.range} className="border-slate-800">
            <p className="text-sm text-slate-500">{row.range}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-100">{row.uptime}</p>
            <p className="mt-2 text-sm text-slate-400">{row.note}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-12 text-lg font-semibold text-slate-100">Recent incidents</h2>
      <Card className="mt-4 border-slate-800">
        <p className="text-sm text-slate-400">No active incidents. Historical events will appear here when they occur.</p>
      </Card>
    </section>
  );
}
