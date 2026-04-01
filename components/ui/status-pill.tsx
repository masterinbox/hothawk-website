import { cn } from "@/lib/utils";

const styles = {
  operational: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  degraded: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  down: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

export function StatusPill({
  status,
}: {
  status: "operational" | "degraded" | "down";
}) {
  return (
    <span className={cn("rounded-full border px-2.5 py-1 text-xs font-medium capitalize", styles[status])}>
      {status}
    </span>
  );
}

