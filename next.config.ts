import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:["i.ibb.co"]
  },
  typescript: {
    ignoreBuildErrors: true, // Disable type checking during build
  },
};

export default nextConfig;
