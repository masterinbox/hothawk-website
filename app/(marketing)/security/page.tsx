import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Security",
  description:
    "How HotHawk approaches security for infrastructure monitoring: encryption, access control, and responsible disclosure.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-50">Security at HotHawk</h1>
      <p className="mt-4 text-slate-300">
        HotHawk is built for teams that care about reliability. We apply sensible security practices for a cloud monitoring
        product and publish how to report vulnerabilities responsibly.
      </p>

      <div className="mt-10 space-y-4">
        <Card>
          <h2 className="font-medium text-slate-100">Encryption and transport</h2>
          <p className="mt-2 text-sm text-slate-300">
            Data in transit is protected using industry-standard TLS. Internal service communication follows least-privilege
            patterns appropriate to our architecture.
          </p>
        </Card>
        <Card>
          <h2 className="font-medium text-slate-100">Access control</h2>
          <p className="mt-2 text-sm text-slate-300">
            Workspaces support role-based access so monitors, incidents, and settings are only visible to authorized members.
            Audit-style activity visibility is designed for operational accountability.
          </p>
        </Card>
        <Card>
          <h2 className="font-medium text-slate-100">Data handling</h2>
          <p className="mt-2 text-sm text-slate-300">
            We collect the minimum data needed to run checks, deliver alerts, and improve reliability. Details are described in
            our{" "}
            <Link href="/legal/privacy-policy" className="text-sky-400 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </Card>
        <Card>
          <h2 className="font-medium text-slate-100">Responsible disclosure</h2>
          <p className="mt-2 text-sm text-slate-300">
            If you believe you have found a security issue, contact{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-400 hover:underline">
              {siteConfig.contactEmail}
            </a>{" "}
            with a clear description and reproduction steps. We ask that you avoid public disclosure until we have had a
            reasonable time to respond. See also our{" "}
            <Link href="/legal/security-disclosure" className="text-sky-400 hover:underline">
              security disclosure policy
            </Link>
            .
          </p>
        </Card>
      </div>
    </div>
  );
}
