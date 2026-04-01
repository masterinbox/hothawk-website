import { Button } from "@/components/ui/button";

export function CtaStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h3 className="text-xl font-semibold text-slate-100">Keep watch on uptime, SSL, DNS, and IP health.</h3>
        <p className="mt-2 text-sm text-slate-300">Start in minutes with monitor templates and alert defaults.</p>
        <div className="mt-4 flex gap-3">
          <Button href="/signup">Start Free</Button>
          <Button href="/docs/getting-started" variant="secondary">
            Read docs
          </Button>
        </div>
      </div>
    </section>
  );
}

