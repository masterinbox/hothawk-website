export default function AppLoading() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-48 animate-pulse rounded bg-slate-800" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-24 animate-pulse rounded-xl bg-slate-900" />
        <div className="h-24 animate-pulse rounded-xl bg-slate-900" />
        <div className="h-24 animate-pulse rounded-xl bg-slate-900" />
      </div>
    </div>
  );
}

