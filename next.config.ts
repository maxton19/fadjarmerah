import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.dunianobi.com',
      },
      {
        protocol: 'https',
        hostname: 'media.sawa.vision',
      },
    ],
  },
};

export default nextConfig;
