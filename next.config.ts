import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow a production check while the live-editing preview stays available.
  distDir: process.env.NEXT_BUILD_DIR || ".next",
};

export default nextConfig;
