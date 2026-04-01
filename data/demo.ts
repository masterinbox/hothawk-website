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

/** Illustrative monitor rows for UI demos — not live customer data. */
export const monitors: Monitor[] = [
  {
    id: "m_01",
    name: "API health",
    type: "uptime",
    target: "https://api.demo.hothawk.internal/health",
    status: "operational",
    frequency: "30s",
    regions: 8,
    uptime: "99.98%",
    responseMs: 212,
    lastChecked: "17s ago",
  },
  {
    id: "m_02",
    name: "Edge IP reachability",
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
    name: "Docs DNS",
    type: "dns",
    target: "docs.demo.hothawk.internal",
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
    monitor: "API health",
    startedAt: "2026-03-15 14:12 UTC",
    endedAt: "2026-03-15 14:41 UTC",
    status: "resolved",
  },
  {
    id: "inc_913",
    title: "DNS propagation mismatch detected",
    severity: "low",
    monitor: "Docs DNS",
    startedAt: "2026-03-16 03:19 UTC",
    endedAt: "2026-03-16 04:08 UTC",
    status: "resolved",
  },
];

export const blogPosts = [
  {
    slug: "monitor-ssl-expiration",
    title: "How to monitor SSL expiration before it hurts uptime",
    excerpt: "A practical workflow: expiry windows, issuer changes, and alert thresholds.",
    date: "2026-03-10",
  },
  {
    slug: "dns-failures-real-world",
    title: "DNS issues that silently take sites down",
    excerpt: "TTL drift, partial propagation, and how multi-region checks surface them earlier.",
    date: "2026-03-08",
  },
];

