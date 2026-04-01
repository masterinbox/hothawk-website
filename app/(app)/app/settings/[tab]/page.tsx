import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

const tabs = ["profile", "notifications", "api", "workspace"];

export default function SettingsTab({ params }: { params: { tab: string } }) {
  if (!tabs.includes(params.tab)) notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold capitalize">Settings: {params.tab}</h1>
      <Card>
        <p className="text-slate-300">
          UI-only settings form for {params.tab}. Add backend persistence in a later phase.
        </p>
      </Card>
    </div>
  );
}

