import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. Required for GitHub Pages */
  output: "export",
  basePath: "/fitZone-gym",
  assetPrefix: "/fitZone-gym/",

  reactStrictMode: true,
  poweredByHeader: false,

  /* 2. Disable Image Optimization (IMPORTANT) */
  images: {
    unoptimized: true,
  },

  /* 3. Experimental Optimizations */
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "framer-motion",
      "clsx",
      "tailwind-merge",
    ],
  },

  /* 4. TypeScript & ESLint */
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
