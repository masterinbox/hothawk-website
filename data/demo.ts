export type Monitor = {
  id: string;
  name: string;
  type: "uptime" | "ssl" | "dns" | "ip" | "keyword" | "heartbeat";
  target: string;
  status: "operational" | "degraded" | "down";
  frequency: string;
  regions: number;
  uptime: string;
  responseMs: number;
  lastChecked: string;
};

export const monitors: Monitor[] = [
  {
    id: "m_01",
    name: "Checkout API",
    type: "uptime",
    target: "https://checkout.lumena.shop/health",
    status: "operational",
    frequency: "30s",
    regions: 8,
    uptime: "99.98%",
    responseMs: 212,
    lastChecked: "17s ago",
  },
  {
    id: "m_02",
    name: "Northstar Public API",
    type: "ip",
    target: "203.0.113.44",
    status: "degraded",
    frequency: "60s",
    regions: 6,
    uptime: "99.82%",
    responseMs: 384,
    lastChecked: "42s ago",
  },
  {
    id: "m_03",
    name: "Docs Cluster",
    type: "dns",
    target: "docs.rivermesh.dev",
    status: "operational",
    frequency: "2m",
    regions: 5,
    uptime: "99.95%",
    responseMs: 147,
    lastChecked: "1m ago",
  },
];

export const incidents = [
  {
    id: "inc_912",
    title: "Elevated latency in eu-west checks",
    severity: "medium",
    monitor: "Checkout API",
    startedAt: "2026-03-15 14:12 UTC",
    endedAt: "2026-03-15 14:41 UTC",
    status: "resolved",
  },
  {
    id: "inc_913",
    title: "DNS propagation mismatch detected",
    severity: "low",
    monitor: "Docs Cluster",
    startedAt: "2026-03-16 03:19 UTC",
    endedAt: "2026-03-16 04:08 UTC",
    status: "resolved",
  },
];

export const blogPosts = [
  {
    slug: "monitor-ssl-expiration",
    title: "How to monitor SSL expiration before it hurts uptime",
    excerpt: "A practical SSL monitoring workflow for small teams.",
    date: "2026-03-10",
  },
  {
    slug: "dns-failures-real-world",
    title: "DNS issues that silently take sites down",
    excerpt: "Where DNS breaks and how to detect it earlier.",
    date: "2026-03-08",
  },
];

export const docsArticles = [
  { slug: "getting-started", title: "Getting started" },
  { slug: "first-monitor", title: "Creating your first monitor" },
  { slug: "incidents", title: "Understanding incidents" },
  { slug: "alerts", title: "Alerting basics" },
  { slug: "status-pages", title: "Status pages" },
  { slug: "team-settings", title: "Team settings" },
  { slug: "api-overview", title: "API overview" },
];

