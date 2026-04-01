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
  title: `${siteConfig.name} | Website Monitoring and Infrastructure Surveillance`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | Website Monitoring and Infrastructure Surveillance`,
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
        {children}
      </body>
    </html>
  );
}
