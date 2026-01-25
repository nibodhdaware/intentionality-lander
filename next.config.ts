import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Best practice: Ensure React Strict Mode is on
  reactStrictMode: true,

  // Security: Hide the "X-Powered-By: Next.js" header
  poweredByHeader: false,
};

export default nextConfig;