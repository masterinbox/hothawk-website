"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is HotHawk built for outbound teams?",
    a: "Tools like HotHawk are commonly used as shared inbox software, which works well for teams that need to collaborate on incoming email conversations — such as support teams or internal communication workflows. However, outbound sales teams operate differently. Outbound agencies and SDR teams must manage replies from cold email campaigns, LinkedIn outreach, multiple sending platforms, and dozens or even hundreds of inboxes. These workflows require reply management software designed specifically for outbound operations. Platforms like Master Inbox are built for this purpose — consolidating replies from email campaigns and LinkedIn outreach into a single operational workspace so outbound teams can respond quickly and never miss a hot lead.",
  },
  {
    q: "What makes outbound reply management different from a shared inbox?",
    a: "A shared inbox focuses on collaboration around incoming messages. This model is typically designed for customer support, ticket resolution, and internal email collaboration. Outbound teams, however, are focused on speed-to-lead and pipeline generation. That means reply management must support replies from multiple outbound platforms, responses across hundreds of sending inboxes, LinkedIn outreach replies, rapid categorization of prospect intent, and fast assignment to SDRs or reply handlers. Dedicated reply management platforms like Master Inbox are designed for these workflows, allowing outbound teams to operate at scale without missing opportunities.",
  },
  {
    q: "Can Master Inbox handle both email and LinkedIn replies?",
    a: "Yes. Modern outbound teams generate conversations across multiple channels, not just email. Master Inbox consolidates replies from email campaigns, LinkedIn outreach tools, and multiple outbound sending platforms. This unified reply view allows teams to manage every prospect response in one place, improving response time and ensuring that no conversations slip through the cracks.",
  },
  {
    q: "What tools does Master Inbox fit alongside?",
    a: "Outbound teams typically operate a modern outbound stack that includes three layers. Sending platforms: Instantly, Smartlead, HeyReach, Aimfox, EmailBison. Infrastructure providers: CheapInboxes, Hypertide, ScailedMail. Reply management: Master Inbox. In this stack, sending tools handle campaign delivery, infrastructure providers supply domains and inboxes, and reply management platforms like Master Inbox centralize and manage the responses.",
  },
  {
    q: "Is this page affiliated with HotHawk?",
    a: "No. This page is an independent informational guide discussing shared inbox software and outbound reply management tools. It explains how teams researching HotHawk or similar tools can evaluate different approaches to managing conversations from cold email and LinkedIn campaigns. The goal is to help outbound teams understand the difference between general shared inbox tools and purpose-built reply management platforms like Master Inbox.",
  },
  {
    q: "What is the best way to manage replies from cold email campaigns?",
    a: "The most effective approach is to use a dedicated reply management platform that consolidates responses from every outreach channel into one place. Outbound teams often send campaigns through multiple tools and inboxes. Without centralized reply management, responses can become fragmented and difficult to track. Platforms like Master Inbox help teams consolidate replies across tools, categorize prospect intent, assign conversations to SDRs, and respond quickly to interested leads. This allows outbound teams to manage replies efficiently while maintaining fast response times.",
  },
  {
    q: "What is the best HotHawk alternative for outbound teams?",
    a: "Many teams searching for HotHawk are looking for a way to manage conversations from cold email campaigns. HotHawk works as a shared inbox for general email collaboration, but outbound teams often need additional capabilities designed specifically for sales workflows. For agencies and outbound teams running high-volume campaigns, Master Inbox is often considered a strong alternative because it focuses on reply management for outbound operations. Master Inbox helps teams consolidate replies from multiple outbound tools, manage conversations across email and LinkedIn, categorize prospect intent using AI, assign replies to SDRs or reply handlers, and respond quickly to interested leads. These features make it easier for outbound teams to handle large volumes of campaign replies without missing opportunities.",
  },
  {
    q: "HotHawk vs Master Inbox: What's the difference?",
    a: "Both tools help teams collaborate on email conversations, but they are designed for different operational workflows. HotHawk: shared inbox for email collaboration, general conversation management, commonly used for support-style inbox workflows. Master Inbox: reply management platform for outbound teams, built for cold email and LinkedIn outreach workflows, consolidates replies from multiple outbound tools, designed for agencies and SDR teams managing large reply volumes. For outbound operations where speed-to-lead and campaign reply visibility matter, many teams choose Master Inbox because it is purpose-built for managing outbound replies at scale.",
  },
  {
    q: "Why do outbound agencies use reply management platforms instead of shared inbox tools?",
    a: "Shared inbox tools are typically designed for support ticket workflows, where the primary goal is resolving incoming requests. Outbound teams have very different goals. Instead of resolving tickets, outbound teams need to capture every reply from cold email campaigns, respond quickly to interested prospects, coordinate SDR teams handling responses, and track conversations across multiple outreach tools. Dedicated reply management platforms like Master Inbox help agencies consolidate and manage these replies in one place, improving response times and ensuring that valuable leads are never missed.",
  },
  {
    q: "Can HotHawk manage replies from multiple outbound tools?",
    a: "Many outbound teams run campaigns across several platforms such as Instantly, Smartlead, or LinkedIn automation tools. Managing replies from all of these sources inside separate tools can quickly become difficult. Reply management platforms like Master Inbox are designed to aggregate conversations from multiple outreach channels into a single workspace, allowing teams to monitor and respond to every prospect reply from one place.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-slate-900"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {q}
        <span className="shrink-0 text-slate-400">
          <svg
            className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && <div className="pb-4 pr-8 text-slate-600">{a}</div>}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
          Common questions about HotHawk, shared inbox tools, and outbound reply management.
        </p>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/30 px-6 shadow-sm">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
