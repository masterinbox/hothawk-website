import { createMetadata } from "@/lib/seo";
import { Card } from "@/components/ui/card";
import { StatusPill } from "@/components/ui/status-pill";

export const metadata = createMetadata({
  title: "Public Status",
  description: "Public service status and incident history for HotHawk systems.",
  path: "/status",
});

export default function StatusPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold">System Status</h1>
      <p className="mt-3 text-slate-300">All systems are currently operational.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card className="flex items-center justify-between"><span>API</span><StatusPill status="operational" /></Card>
        <Card className="flex items-center justify-between"><span>Checks Engine</span><StatusPill status="operational" /></Card>
        <Card className="flex items-center justify-between"><span>Alert Delivery</span><StatusPill status="operational" /></Card>
        <Card className="flex items-center justify-between"><span>Status Pages</span><StatusPill status="operational" /></Card>
      </div>
    </section>
  );
}

