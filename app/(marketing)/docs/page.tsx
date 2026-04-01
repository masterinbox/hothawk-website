import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { docsArticles } from "@/data/docs";
import { Card } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Documentation",
  description:
    "Learn how to configure HotHawk monitors, incidents, alerts, status pages, teams, and the API for infrastructure monitoring.",
  path: "/docs",
});

const pillars = [
  {
    title: "Set up monitoring",
    body: "Create monitors for HTTP endpoints, SSL, DNS, redirects, and reachability. Tune intervals and regions to match risk.",
  },
  {
    title: "Understand incidents",
    body: "Incidents group failed checks, retries, and recovery. Use timelines to communicate impact and resolution.",
  },
  {
    title: "Configure alerting",
    body: "Route signals to webhooks and team channels. Apply quiet hours and escalation where your process requires it.",
  },
];

export default function DocsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-50">Documentation</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300">
        Guides for operating HotHawk day to day: from your first monitor through incidents, alerting, status pages, and team
        settings.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {pillars.map((p) => (
          <Card key={p.title} className="border-slate-800">
            <h2 className="font-medium text-slate-100">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{p.body}</p>
          </Card>
        ))}
      </div>

      <h2 className="mt-16 text-xl font-semibold text-slate-100">Guides</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {docsArticles.map((doc) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}`}>
            <Card className="h-full border-slate-800 transition hover:border-slate-600">
              <p className="font-medium text-slate-100">{doc.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{doc.description}</p>
              <p className="mt-3 text-sm font-medium text-sky-400">Read guide →</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
