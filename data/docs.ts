export type DocCalloutVariant = "tip" | "note" | "warning";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h2" | "h3"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "ul"; items: string[] }
  | { type: "callout"; variant: DocCalloutVariant; title?: string; text: string }
  | { type: "code"; language?: string; code: string };

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  blocks: DocBlock[];
};

const pages: DocPage[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description:
      "Set up your workspace, invite teammates, and place your first checks so HotHawk reflects how you run production.",
    blocks: [
      {
        type: "p",
        text: "This guide walks you from an empty workspace to a monitoring setup you can explain to leadership: what is watched, how failures surface, and who gets notified.",
      },
      { type: "h2", text: "Before you begin" },
      {
        type: "ul",
        items: [
          "A HotHawk account with permission to create monitors and manage workspace settings.",
          "The URLs, hostnames, or IPs you intend to check (staging is fine for practice).",
          "A rough list of who should receive alerts (roles matter more than headcount).",
        ],
      },
      { type: "h2", text: "Create your workspace" },
      {
        type: "steps",
        items: [
          "Sign in and open Workspace settings. Confirm the workspace display name and default timezone; incident timestamps and quiet hours respect this choice.",
          "Under Regions (or equivalent check geography), enable the locations that best match your user base. You can add more later—start with two regions minimum so single-region blips do not page you.",
          "Save changes and return to the dashboard. You should see an empty monitors list or onboarding prompts.",
        ],
      },
      { type: "h2", text: "Invite your team" },
      {
        type: "steps",
        items: [
          "Open Team or Members, then invite colleagues by email.",
          "Assign roles that match responsibility: administrators for billing and integrations, operators for monitors and incidents, read-only for stakeholders who need visibility without change access.",
          "Ask each person to confirm notification channels (email, webhook destination, or chat) so the first real alert is not their first login.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Keep at least two people able to acknowledge incidents. On-call coverage breaks when only one account can mute or escalate.",
      },
      { type: "h2", text: "Place your first meaningful checks" },
      {
        type: "steps",
        items: [
          "Create one HTTP monitor on a path you care about—often /health or /ready—using the interval your SLO can tolerate.",
          "Add an SSL monitor on the same hostname so certificate expiry and chain issues surface before browsers do.",
          "Open the monitor detail view and run a manual check. Confirm latency and status match what you expect from your own curl or browser test.",
        ],
      },
      { type: "h2", text: "Next steps" },
      {
        type: "p",
        text: "Configure alert destinations in Alerting basics, then read Understanding incidents so your team agrees on what “open” and “resolved” mean before the first outage.",
      },
    ],
  },
  {
    slug: "first-monitor",
    title: "Creating your first monitor",
    description: "Choose a monitor type, set targets and intervals, validate behavior, and avoid common false-positive traps.",
    blocks: [
      {
        type: "p",
        text: "Monitors are the unit of observation in HotHawk. The right type and settings reduce noise while still catching real customer impact.",
      },
      { type: "h2", text: "Pick the monitor type" },
      {
        type: "ul",
        items: [
          "HTTP / uptime — response code, timing, and optional keyword or body checks for web APIs and sites.",
          "SSL / TLS — certificate expiry, issuer changes, and handshake health for public hostnames.",
          "DNS — record resolution and propagation against expected answers.",
          "IP / reachability — ICMP or TCP connectivity to addresses or load balancers.",
          "Heartbeat — inverted checks for jobs and cron that must signal success on a schedule.",
        ],
      },
      { type: "h2", text: "Create an HTTP monitor" },
      {
        type: "steps",
        items: [
          "Open Monitors → New monitor → HTTP (or Uptime).",
          "Enter the full URL, including scheme. Prefer HTTPS for anything user-facing.",
          "Set expected status codes (for example 200, or 200–399 if redirects are valid).",
          "Choose an interval. Shorter intervals increase sensitivity and cost; match revenue paths first.",
          "Select regions that reflect where users connect. Multi-region failure is a stronger signal than a single edge glitch.",
          "Optional: add a response-time threshold or keyword assertion if a 200 OK with an error page would otherwise look healthy.",
          "Save and wait for the first scheduled run, or trigger a manual check from the monitor detail page.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        text: "If your endpoint requires authentication, use a dedicated synthetic user or signed URL with narrow scope. Never paste production passwords into monitor configuration shared broadly.",
      },
      { type: "h2", text: "Create an SSL monitor" },
      {
        type: "steps",
        items: [
          "New monitor → SSL / certificate.",
          "Enter the hostname (no path). HotHawk validates the chain presented to clients.",
          "Set an expiry warning window—commonly 14–30 days for public certs, longer for internal CAs if renewal is automated.",
          "Align regions with where clients terminate TLS (often the same as your HTTP monitor).",
        ],
      },
      { type: "h2", text: "Validate and tune" },
      {
        type: "steps",
        items: [
          "Review two or three successful runs: status, timing percentiles if shown, and any redirect chain.",
          "Induce a controlled failure in staging (wrong DNS, stopped service) and confirm the monitor transitions to failing within the expected window.",
          "Adjust retries and thresholds if flaky dependencies or CDN edge variance cause spurious alerts.",
        ],
      },
    ],
  },
  {
    slug: "incidents",
    title: "Understanding incidents",
    description: "How incidents open, accumulate evidence, resolve, and feed status pages and customer communication.",
    blocks: [
      {
        type: "p",
        text: "An incident is the operational story of a problem: what broke, where it was seen, what changed, and when service returned to normal. HotHawk groups related monitor failures to reduce duplicate tickets.",
      },
      { type: "h2", text: "When an incident opens" },
      {
        type: "steps",
        items: [
          "A monitor crosses from healthy to failing according to your thresholds and retry policy.",
          "HotHawk correlates failures—often by target, dependency, or tag—into one incident instead of one alert per region.",
          "Notifications fire based on your alert rules (channel, severity, quiet hours).",
        ],
      },
      { type: "h2", text: "Incident lifecycle" },
      {
        type: "ul",
        items: [
          "Open — failure condition is active or retries have not yet recovered.",
          "Acknowledged — someone owns the response; repeat pages may be suppressed or summarized.",
          "Resolved — checks are healthy again for a sustained period you configure.",
        ],
      },
      { type: "h2", text: "Use the timeline effectively" },
      {
        type: "steps",
        items: [
          "Open the incident and read the automated timeline: first failure, retries, regional scope, recovery.",
          "Add human notes at decision points: “Confirmed DB failover,” “Rollback complete,” “Vendor ETA 14:30 UTC.”",
          "Link runbooks or tickets in notes so the next responder does not repeat discovery work.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Agree on vocabulary: “degraded” vs “down,” when to page, and who closes incidents. Consistency makes post-incident reviews honest and comparable.",
      },
      { type: "h2", text: "Post-incident habits" },
      {
        type: "p",
        text: "After resolution, skim whether monitor thresholds or regions should change. Chronic borderline failures usually mean the check is too strict or the dependency needs hardening—not more alerts.",
      },
    ],
  },
  {
    slug: "alerts",
    title: "Alerting basics",
    description: "Connect webhooks and channels, set quiet hours, and keep alerts actionable for on-call engineers.",
    blocks: [
      {
        type: "p",
        text: "Alerts turn monitor and incident state into messages people actually see. Good routing answers: what failed, which service, how severe, and what to try first.",
      },
      { type: "h2", text: "Add a notification destination" },
      {
        type: "steps",
        items: [
          "Open Alerting or Integrations in workspace settings.",
          "Create a destination: webhook URL, email list, or supported chat integration.",
          "Name destinations clearly (“#platform-oncall”, “Billing API pages”) so rules stay readable a year later.",
          "Send a test notification and confirm it arrives with the expected formatting.",
        ],
      },
      { type: "h2", text: "Attach rules to monitors or tags" },
      {
        type: "steps",
        items: [
          "Define which incidents trigger which destinations—often by monitor tag (production, critical) or by severity.",
          "Route high-severity incidents to paging channels; route informational checks to email digests or low-priority rooms.",
          "Avoid sending every region’s first failure as a separate page; prefer aggregated incident notifications when your plan supports them.",
        ],
      },
      { type: "h2", text: "Quiet hours and escalation" },
      {
        type: "steps",
        items: [
          "Configure quiet hours for non-critical monitors in your default timezone.",
          "Document exceptions: payment flows and auth may stay loud overnight.",
          "If you use escalation, set delays that allow the first responder to acknowledge before the next tier is paged.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Alert fatigue trains teams to ignore channels. If a destination fires more than a few times a week without action, tune the monitor or demote the route.",
      },
    ],
  },
  {
    slug: "status-pages",
    title: "Status pages",
    description: "Map components to real checks, publish incidents customers should see, and keep history aligned with monitoring.",
    blocks: [
      {
        type: "p",
        text: "A public status page is a promise: what you measure is what you show. HotHawk helps you reflect component health and incident history without manual copy-paste every outage.",
      },
      { type: "h2", text: "Design components honestly" },
      {
        type: "steps",
        items: [
          "List customer-visible capabilities: API, dashboard, webhooks, regional edges—not internal job queues unless customers depend on them.",
          "Create one status component per independently failing surface, or group tightly coupled pieces if they always fail together.",
          "Link each component to the monitors that best represent user experience, not only a marketing homepage.",
        ],
      },
      { type: "h2", text: "Publish during an incident" },
      {
        type: "steps",
        items: [
          "When an incident opens, open the status page editor and start from the incident summary—severity, scope, start time.",
          "Write customer-facing language: impact (“login delays”), workarounds if any, and avoid blaming unnamed third parties unless policy allows.",
          "Update on a steady cadence until resolved; stale pages erode trust faster than brief silence.",
        ],
      },
      {
        type: "callout",
        variant: "note",
        text: "Green across the board while Twitter is loud is worse than a yellow component with a short, accurate update.",
      },
      { type: "h2", text: "Historical credibility" },
      {
        type: "p",
        text: "Keep past incidents visible with accurate timestamps. Teams that scrub history lose the benefit of status pages as an accountability and sales artifact.",
      },
    ],
  },
  {
    slug: "team-settings",
    title: "Team settings",
    description: "Manage members, roles, audit access, and housekeeping so your workspace stays secure as you grow.",
    blocks: [
      {
        type: "p",
        text: "Workspace settings are where monitoring meets governance: who can change checks, who sees incidents, and how credentials are scoped.",
      },
      { type: "h2", text: "Roles and least privilege" },
      {
        type: "steps",
        items: [
          "Review the role matrix: admin, operator, billing, read-only (names may vary by plan).",
          "Grant admin only to people who integrate billing, SSO, or API keys.",
          "Give operators monitor and incident permissions without account deletion or billing.",
          "Use read-only for leadership, support leads, or auditors who need dashboards but not configuration.",
        ],
      },
      { type: "h2", text: "Onboarding and offboarding" },
      {
        type: "steps",
        items: [
          "For each new hire who needs HotHawk, assign the smallest role that fits their job.",
          "Remove or downgrade access on the last day; rotate API keys if that person had automation credentials.",
          "Quarterly, export or review the member list against your HR or IdP roster.",
        ],
      },
      {
        type: "callout",
        variant: "tip",
        text: "Pair SSO or SCIM (when available) with a documented break-glass admin account stored in your secret manager.",
      },
      { type: "h2", text: "Workspace hygiene" },
      {
        type: "ul",
        items: [
          "Rename monitors and tags when services are deprecated so old names do not appear in new incidents.",
          "Archive or delete unused webhooks to avoid messages to abandoned channels.",
          "Document who owns the HotHawk workspace in your internal service catalog.",
        ],
      },
    ],
  },
  {
    slug: "api-overview",
    title: "API overview",
    description: "Authenticate safely, perform common automation tasks, and handle errors when integrating HotHawk with internal tooling.",
    blocks: [
      {
        type: "p",
        text: "The HotHawk API is for automation: provision monitors from infrastructure-as-code, pull incident history into ticketing, or build internal dashboards. Treat keys like production secrets.",
      },
      { type: "h2", text: "Authentication" },
      {
        type: "steps",
        items: [
          "Open Workspace settings → API or Developer, then create a key with a descriptive label (for example, terraform-prod).",
          "Store the key in a secret manager; never commit it to git or paste it into shared documents.",
          "Send the key as a Bearer token (or as documented for your API version) on every request over HTTPS.",
        ],
      },
      { type: "h2", text: "Common operations" },
      {
        type: "ul",
        items: [
          "List or create monitors with the same fields you use in the UI: type, target URL or host, interval, regions.",
          "Fetch open incidents and updates for correlation with on-call tools.",
          "Update monitor tags or pause checks during maintenance windows.",
        ],
      },
      {
        type: "callout",
        variant: "warning",
        text: "Rate limits and pagination apply. Batch reads where possible and backoff on 429 responses so automation does not amplify an outage.",
      },
      { type: "h2", text: "Example: list monitors" },
      {
        type: "p",
        text: "Replace the placeholder host and token with values from your workspace. Refer to the official API reference for the current path and schema.",
      },
      {
        type: "code",
        language: "bash",
        code: `curl -sS https://api.hothawk.example/v1/monitors \\
  -H "Authorization: Bearer $HOTHAWK_API_TOKEN" \\
  -H "Accept: application/json"`,
      },
      { type: "h2", text: "Error handling" },
      {
        type: "steps",
        items: [
          "Treat 4xx responses as programmer or configuration errors: fix the payload or permissions.",
          "Retry 5xx and network errors with exponential backoff and a maximum attempt count.",
          "Log request IDs when the API returns them so support can trace failures.",
        ],
      },
    ],
  },
];

export const docsPages: DocPage[] = pages;

/** Nav, index, and sitemap — slug, title, short summary. */
export const docsArticles = pages.map(({ slug, title, description }) => ({
  slug,
  title,
  description,
}));

export function getDocBySlug(slug: string): DocPage | undefined {
  return pages.find((p) => p.slug === slug);
}
