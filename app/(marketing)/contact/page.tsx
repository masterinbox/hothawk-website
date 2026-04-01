import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact HotHawk for product questions, support, and security reports.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-50">Contact HotHawk</h1>
      <p className="mt-4 text-slate-300">
        For general inquiries, billing, privacy requests, and security disclosures, reach us at{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-400 underline hover:text-sky-300">
          {siteConfig.contactEmail}
        </a>
        . We respond during business hours and prioritize security-related reports.
      </p>

      <Card className="mt-8">
        <h2 className="font-medium text-slate-100">Send a message</h2>
        <p className="mt-2 text-sm text-slate-400">
          In-product message delivery is enabled as your workspace is configured. Until then, use the address above.
        </p>
        <form className="mt-4 space-y-3">
          <input
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm"
            placeholder="Name"
            aria-label="Name"
          />
          <textarea
            className="min-h-[120px] w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm"
            placeholder="How can we help?"
            aria-label="Message"
          />
          <a
            href={`mailto:${siteConfig.contactEmail}?subject=HotHawk%20inquiry`}
            className={cn(
              "inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
            )}
          >
            Open mail client
          </a>
        </form>
      </Card>

      <p className="mt-8 text-xs text-slate-500">{siteConfig.footerIndependenceNote}</p>
    </div>
  );
}
