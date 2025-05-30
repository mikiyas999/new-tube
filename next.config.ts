import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "5mjc8h44e6.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "image.mux.com",
      },
    ],
  },
  env: {
    CLERK_SIGNING_SECRET: process.env.CLERK_SIGNING_SECRET,
  },
};

export default nextConfig;
