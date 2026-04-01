/** HotHawk brand and contact. Keep corporate/legal fields minimal until finalized. */
export const siteConfig = {
  name: "HotHawk",
  domain: "https://hothawk.com",
  contactEmail: "hello@hothawk.com",
  tagline: "Monitor what matters.",
  description:
    "Infrastructure monitoring and reliability for teams that need clear uptime, SSL, DNS, domain, and endpoint visibility without enterprise bloat.",

  /** Exact short non-affiliation statement (hero / site chrome). */
  independenceShort:
    "HotHawk is an independent product focused on infrastructure monitoring and reliability. This website and service are not affiliated with, endorsed by, or connected to any other company that may use a similar name.",

  /** Exact full independent product notice (About, Legal). */
  independenceFull: `HotHawk is an independently developed software product focused on website, infrastructure, and uptime monitoring. The platform provides tools for tracking availability, SSL health, DNS performance, and system reliability from a single interface.

The HotHawk name is used as a standalone brand and is not associated with any other company, product, or service.

This website is not affiliated with, endorsed by, or connected to any third party that may use a similar or identical name in a different industry or category.

HotHawk is operated as an independent project with its own product direction, branding, and use case, focused exclusively on infrastructure monitoring and reliability tooling.`,

  /** Optional legal clarification for footer / legal index. */
  independenceLegalLine:
    "Any reference to other companies or products, if present, is for informational purposes only and does not imply affiliation, sponsorship, or endorsement.",

  /** Footer one-liner. */
  footerIndependenceNote:
    "HotHawk is an independent infrastructure monitoring product and is not affiliated with any third party using a similar name.",

  legal: {
    companyName: "HotHawk",
    effectiveDate: "2026-04-01",
    /** Soft wording until counsel finalizes jurisdiction. */
    governingLawSummary: "Governing law and dispute resolution are described in our Terms of Service.",
  },
};

export const navLinks = [
  { href: "/", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/use-cases/devops-teams", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/security", label: "Security" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
