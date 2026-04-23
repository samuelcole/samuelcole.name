import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  weight: ["300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samuelcole.name"),
  title: {
    default: "Samuel Cole — Founding Engineer & CTO",
    template: "%s | samuel cole",
  },
  description:
    "Samuel Cole — founding engineer and CTO at Lemontree (foodhelpline.org). Twenty years shipping at startups and non-profits, including ActBlue, Kickstarter, and Patch.",
  alternates: {
    canonical: "/",
    types: { "text/plain": "/llms.txt" },
  },
  openGraph: {
    title: "samuel cole",
    description:
      "Founding engineer and CTO. I make things from scratch — mostly websites.",
    url: "https://www.samuelcole.name",
    siteName: "samuel cole",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Samuel Cole — founding engineer & CTO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "samuel cole",
    description:
      "Founding engineer and CTO. I make things from scratch — mostly websites.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.variable}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
