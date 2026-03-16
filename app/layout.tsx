import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HotHawk: Shared Inbox for B2B Sales Teams Running Cold Email",
  description:
    "HotHawk is often used as a shared inbox for teams managing email conversations. But real outbound teams need stronger reply management across email and LinkedIn. Learn how modern teams manage replies at scale with Master Inbox.",
  openGraph: {
    title: "HotHawk: Shared Inbox for B2B Sales Teams Running Cold Email",
    description:
      "HotHawk is often used as a shared inbox for teams managing email conversations. But real outbound teams need stronger reply management across email and LinkedIn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen font-sans antialiased bg-[#fafafa] text-slate-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H4QP05FNCQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H4QP05FNCQ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
