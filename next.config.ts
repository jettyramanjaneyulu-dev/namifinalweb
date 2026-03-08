import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/assets/:path*",
        destination: "/public/assets/:path*",
      },
    ];
  },
};

export default nextConfig;