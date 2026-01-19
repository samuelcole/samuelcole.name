import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  weight: ["300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelcole.name"),
  title: { default: "samuel cole", template: "%s | samuel cole" },
  description: "sam makes things. mostly websites.",
  openGraph: {
    title: "samuel cole",
    description: "sam makes things. mostly websites.",
    url: "https://samuelcole.name",
    siteName: "samuel cole",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "samuel cole",
    description: "sam makes things. mostly websites.",
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
      </body>
    </html>
  );
}
