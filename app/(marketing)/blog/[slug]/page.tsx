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
  return (
    <article className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm text-sky-300">Resources</p>
      <h1 className="mt-2 text-4xl font-semibold">{post.title}</h1>
      <p className="mt-4 text-slate-300">
        {post.excerpt} This placeholder article layout is ready for CMS or MDX integration.
      </p>
    </article>
  );
}

