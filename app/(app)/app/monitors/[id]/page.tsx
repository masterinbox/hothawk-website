import { notFound } from "next/navigation";
import { monitors, incidents } from "@/data/demo";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";
import { Sparkline } from "@/components/ui/sparkline";

export default function MonitorDetail({ params }: { params: { id: string } }) {
  const monitor = monitors.find((m) => m.id === params.id);
  if (!monitor) notFound();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{monitor.name}</h1>
        <StatusPill status={monitor.status} />
      </div>
      <Card>
        <p className="text-sm text-slate-400">Target</p>
        <p className="mt-1">{monitor.target}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm text-slate-400">Uptime trend (24h)</p>
          <Sparkline points={[99, 99, 100, 100, 99, 100, 100]} className="mt-3 h-10 w-full text-emerald-300" />
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Latency trend (24h)</p>
          <Sparkline points={[210, 220, 205, 240, 230, 215, 212]} className="mt-3 h-10 w-full text-sky-300" />
        </Card>
      </div>
      <Card>
        <p className="text-sm text-slate-400">Check regions</p>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          {["us-east", "us-west", "eu-west", "ap-south"].map((r) => (
            <span key={r} className="rounded border border-slate-700 px-2 py-1">{r}</span>
          ))}
        </div>
      </Card>
      <Card>
        <p className="text-sm text-slate-400">Recent incidents</p>
        <div className="mt-2 space-y-2 text-sm">
          {incidents.map((i) => (
            <div key={i.id} className="rounded-md border border-slate-800 p-2">{i.title}</div>
          ))}
        </div>
      </Card>
    </div>
  );
}

