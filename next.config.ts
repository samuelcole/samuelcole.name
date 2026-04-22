import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  headers: async () => [
    {
      source: "/:path*.md",
      headers: [
        {
          key: "Content-Type",
          value: "text/markdown; charset=utf-8",
        },
      ],
    },
  ],
};

export default nextConfig;
