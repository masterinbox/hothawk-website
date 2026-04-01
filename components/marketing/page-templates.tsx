import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Sparkline } from "@/components/ui/sparkline";

export function MarketingHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description: string;
  breadcrumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {breadcrumbs && breadcrumbs.length > 0 ? <Breadcrumbs items={breadcrumbs} /> : null}
        <p className="mb-4 text-sm text-sky-300">Monitor what matters.</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-slate-300">{description}</p>
        <div className="mt-8 flex gap-3">
          <Button href="/signup">Start Free</Button>
          <Button href="/app/overview" variant="secondary">
            View Demo
          </Button>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          <Card>
            <p className="text-xs text-slate-400">Uptime trend</p>
            <Sparkline points={[99, 99, 100, 100, 99, 100, 100]} className="mt-2 h-8 w-full text-emerald-300" />
          </Card>
          <Card>
            <p className="text-xs text-slate-400">Latency trend</p>
            <Sparkline points={[230, 240, 225, 250, 235, 220, 228]} className="mt-2 h-8 w-full text-sky-300" />
          </Card>
          <Card>
            <p className="text-xs text-slate-400">Region checks</p>
            <div className="mt-2 flex flex-wrap gap-1 text-xs">
              {["us-east", "us-west", "eu-west", "ap-south"].map((r) => (
                <span key={r} className="rounded border border-slate-700 px-2 py-0.5 text-slate-300">
                  {r}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function GenericSection({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-semibold text-slate-100">{title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {bullets.map((item) => (
          <Card key={item}>
            <p className="text-slate-300">{item}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function RelatedLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12">
      <h3 className="mb-4 text-lg font-semibold text-slate-100">Related pages</h3>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-md border border-slate-800 px-3 py-2 text-sm text-slate-300 hover:bg-slate-900">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

