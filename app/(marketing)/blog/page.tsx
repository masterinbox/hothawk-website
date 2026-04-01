import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { blogPosts } from "@/data/demo";
import { Card } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Blog",
  description: "Monitoring insights and practical guides for uptime, SSL, DNS, and incident response.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold">HotHawk Blog</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full">
              <p className="text-sm text-slate-400">{post.date}</p>
              <p className="mt-1 font-medium">{post.title}</p>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

