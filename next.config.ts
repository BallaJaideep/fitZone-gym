import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. Security & Stability */
  reactStrictMode: true, // Catches common bugs early in development
  poweredByHeader: false, // Security: Hides that you are using Next.js from attackers

  /* 2. Image Optimization (Fixes your Unsplash Error) */
  images: {
    formats: ["image/avif", "image/webp"], // Optimizes for modern browsers
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Adding support for common fitness image CDNs
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  /* 3. Turbopack / Experimental Features */
  experimental: {
    // Optimizes package imports for faster dev/build times
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "framer-motion",
      "clsx",
      "tailwind-merge",
    ],
  },

  /* 4. Typescript & Linting */
  typescript: {
    // Set to true if you want to allow production builds even with TS errors
    ignoreBuildErrors: false, 
  },
  eslint: {
    // Runs ESLint during builds to ensure code quality
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;