import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/demo";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${params.slug}`,
  });
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const body =
    post.slug === "monitor-ssl-expiration"
      ? [
          "SSL failures are rarely mysterious in hindsight—they are usually a missed renewal or an unexpected issuer rotation. HotHawk tracks certificate expiry with enough lead time that you can renew or automate before browsers and API clients start rejecting connections.",
          "Pair expiry alerts with issuer and chain visibility so you catch intermediate changes that break older clients. When an incident opens, attach timeline notes for security and platform teams so renewals do not happen in a silo.",
        ]
      : [
          "DNS is often the last place teams look, yet TTL and delegation issues can make a service unreachable for a subset of users while synthetic checks still pass elsewhere.",
          "Multi-region resolution checks help surface propagation gaps after cutovers. When you change a record or provider, cross-check answers across regions and watch for intermittent NXDOMAIN or unexpected CNAME chains.",
        ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-sky-300">Resources · {post.date}</p>
      <h1 className="mt-2 text-4xl font-semibold text-slate-50">{post.title}</h1>
      <p className="mt-4 text-lg text-slate-300">{post.excerpt}</p>
      <div className="mt-10 space-y-6 text-slate-300">
        {body.map((para, i) => (
          <p key={i} className="leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
