import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

const sections = [
  "incidents",
  "alerts",
  "status-pages",
  "domains",
  "ssl",
  "ip-checks",
  "dns",
  "team",
  "billing",
  "settings",
];

export default function AppSection({ params }: { params: { section: string } }) {
  if (!sections.includes(params.section)) notFound();
  const title = params.section.replace(/-/g, " ");
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold capitalize">{title}</h1>
      <Card>
        <p className="text-slate-300">
          Frontend demo module for {title}. This section is ready for API-connected data and actions.
        </p>
      </Card>
    </div>
  );
}

