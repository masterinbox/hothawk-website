import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: `${siteConfig.name} | Infrastructure monitoring and reliability`,
  description: siteConfig.description,
  keywords: [
    "HotHawk",
    "infrastructure monitoring",
    "uptime monitoring",
    "SSL monitoring",
    "DNS monitoring",
    "API monitoring",
    "website monitoring",
    "endpoint monitoring",
    "incident monitoring",
  ],
  openGraph: {
    title: `${siteConfig.name} | Infrastructure monitoring and reliability`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Infrastructure monitoring and reliability`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen bg-slate-950 font-sans antialiased text-slate-100">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: siteConfig.name,
                  url: siteConfig.domain,
                  description: siteConfig.description,
                },
                {
                  "@type": "SoftwareApplication",
                  name: siteConfig.name,
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Web",
                  description: siteConfig.description,
                  url: siteConfig.domain,
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
