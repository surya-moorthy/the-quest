import { build } from "velite";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Only run Velite in server builds
    if (isServer) {
      build(); // Run velite build directly
    }
    return config;
  },
};

export default nextConfig;
