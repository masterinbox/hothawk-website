import Link from "next/link";
import { monitors } from "@/data/demo";
import { StatusPill } from "@/components/ui/status-pill";
import { Card } from "@/components/ui/card";

export default function MonitorsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Monitors</h1>
      <Card className="mt-4 overflow-x-auto p-0">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-800 bg-slate-900">
            <tr>
              <th className="px-4 py-3">Name</th><th>Type</th><th>Target</th><th>Status</th><th>Uptime</th>
            </tr>
          </thead>
          <tbody>
            {monitors.map((m) => (
              <tr key={m.id} className="border-b border-slate-900 last:border-0">
                <td className="px-4 py-3"><Link href={`/app/monitors/${m.id}`} className="text-sky-300">{m.name}</Link></td>
                <td>{m.type}</td>
                <td>{m.target}</td>
                <td><StatusPill status={m.status} /></td>
                <td>{m.uptime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

