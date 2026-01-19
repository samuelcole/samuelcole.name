"use client";

import { track } from "@vercel/analytics/react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export default function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      onClick={() => track("External Link Clicked", { href })}
      target="_blank"
    >
      {children}
    </a>
  );
}
