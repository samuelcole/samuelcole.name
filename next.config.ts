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
  redirects: async () => [
    {
      source: "/resume/SamuelCole.pdf",
      destination: "/samuel-cole-resume.pdf",
      permanent: true,
    },
    {
      source: "/resume/SamuelCole-bw.pdf",
      destination: "/samuel-cole-resume-bw.pdf",
      permanent: true,
    },
  ],
};

export default nextConfig;
