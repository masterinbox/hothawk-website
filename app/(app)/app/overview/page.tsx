import { monitors, incidents } from "@/data/demo";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Sparkline } from "@/components/ui/sparkline";

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-400">Total monitors</p>
          <p className="mt-2 text-2xl font-bold">{monitors.length}</p>
          <Sparkline points={[3, 3, 4, 4, 5, 5, 6]} className="mt-3 h-8 w-28 text-sky-300" />
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Active incidents</p>
          <p className="mt-2 text-2xl font-bold">1</p>
          <Sparkline points={[4, 3, 2, 2, 1, 1, 1]} className="mt-3 h-8 w-28 text-amber-300" />
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Avg response time</p>
          <p className="mt-2 text-2xl font-bold">247ms</p>
          <Sparkline points={[230, 242, 255, 249, 261, 240, 247]} className="mt-3 h-8 w-28 text-emerald-300" />
        </Card>
      </div>
      <Card>
        <h2 className="font-medium">Active monitors</h2>
        <div className="mt-4 space-y-2">
          {monitors.map((m) => (
            <div key={m.id} className="flex items-center justify-between rounded-md border border-slate-800 p-3">
              <span>{m.name}</span>
              <StatusPill status={m.status} />
            </div>
          ))}
        </div>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="font-medium">SSL expiry warnings</h2>
          <div className="mt-3 space-y-2 text-sm">
            <div className="rounded-md border border-amber-500/30 bg-amber-500/10 p-2">api.northstar-app.com - 11 days remaining</div>
            <div className="rounded-md border border-slate-800 p-2">status.embercloud.io - 42 days remaining</div>
          </div>
        </Card>
        <Card>
          <h2 className="font-medium">DNS record health</h2>
          <div className="mt-3 grid gap-2 text-xs text-slate-300">
            <div className="rounded-md border border-slate-800 p-2">A: docs.rivermesh.dev {"->"} 203.0.113.44</div>
            <div className="rounded-md border border-slate-800 p-2">CNAME: status {"->"} status-host.provider</div>
            <div className="rounded-md border border-rose-500/30 bg-rose-500/10 p-2">TXT mismatch detected in one region</div>
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="font-medium">Incident timeline</h2>
        <div className="mt-4 space-y-2">
          {incidents.map((i) => (
            <div key={i.id} className="rounded-md border border-slate-800 p-3 text-sm text-slate-300">{i.title}</div>
          ))}
        </div>
      </Card>
    </div>
  );
}

