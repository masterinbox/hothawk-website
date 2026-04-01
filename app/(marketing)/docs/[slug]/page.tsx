import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { docsArticles } from "@/data/demo";

const docBodies: Record<string, string[]> = {
  "getting-started": [
    "Create a workspace, invite teammates with the right roles, and pick a default region set for checks. HotHawk is designed so your first monitors ship in minutes—not days.",
    "Start with one high-value HTTP monitor and one SSL monitor on the same hostname. That pairing catches both availability and certificate risk early.",
  ],
  "first-monitor": [
    "Choose the monitor type that matches your target: HTTP for endpoints, SSL for certificate lifecycle, DNS for record correctness, or IP for raw reachability.",
    "Set an interval that balances sensitivity with noise. Tighter intervals are for revenue paths; looser intervals suit internal documentation sites.",
  ],
  incidents: [
    "Incidents aggregate failing checks, retries, and recovery signals. Each incident should tell you what broke, where it was observed, and when it normalized.",
    "Use timeline notes for handoffs between platform and application teams. Clear notes reduce duplicate work during firefighting.",
  ],
  alerts: [
    "Alerts should answer: what failed, which monitor, which regions, and what to check next. HotHawk routes through webhooks and team channels you configure.",
    "Quiet hours and escalation policies help prevent fatigue while keeping critical paths covered.",
  ],
  "status-pages": [
    "Public status pages translate internal incident state into customer-appropriate language. Keep components aligned with real architecture—not marketing labels.",
    "Uptime badges and historical incident lists build trust when they match the checks you actually run.",
  ],
  "team-settings": [
    "Separate workspace roles for administrators, operators, and read-only stakeholders. Least privilege keeps monitoring data available without risky configuration access.",
    "Review member lists periodically, especially after reorganizations or vendor changes.",
  ],
  "api-overview": [
    "The HotHawk API is intended for automation: creating monitors, pulling incident history, and integrating with internal tooling.",
    "Store API credentials in secret managers, rotate keys on a schedule, and scope automation accounts narrowly.",
  ],
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = docsArticles.find((d) => d.slug === params.slug);
  if (!doc) return {};
  return createMetadata({
    title: doc.title,
    description: `${doc.title} — HotHawk infrastructure monitoring documentation.`,
    path: `/docs/${params.slug}`,
  });
}

export default function DocDetail({ params }: { params: { slug: string } }) {
  const doc = docsArticles.find((d) => d.slug === params.slug);
  if (!doc) notFound();
  const paragraphs = docBodies[params.slug] ?? [
    `This guide covers ${doc.title.toLowerCase()} in HotHawk. Configure monitors and alerts to match your reliability targets.`,
  ];
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-sky-300">Documentation</p>
      <h1 className="mt-2 text-4xl font-semibold text-slate-50">{doc.title}</h1>
      <div className="mt-8 space-y-5 text-slate-300">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
