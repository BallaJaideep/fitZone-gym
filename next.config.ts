// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* 1. Standard Output (Removes the sub-directory lock) */
//   // We remove 'output: export', 'basePath', and 'assetPrefix' for local development
  
//   reactStrictMode: true,
//   poweredByHeader: false,

//   /* 2. Enable Image Optimization for Unsplash/Pexels */
//   images: {
//     formats: ["image/avif", "image/webp"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },

//   /* 3. Experimental Optimizations */
//   experimental: {
//     optimizePackageImports: [
//       "lucide-react",
//       "@radix-ui/react-icons",
//       "framer-motion",
//       "clsx",
//       "tailwind-merge",
//     ],
//   },

//   /* 4. TypeScript & ESLint */
//   typescript: {
//     ignoreBuildErrors: false,
//   },
//   eslint: {
//     ignoreDuringBuilds: false,
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Security & Stability */
  reactStrictMode: true,
  poweredByHeader: false,

  /* Image Configuration */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },

  /* Experimental Optimizations */
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "framer-motion",
      "clsx",
      "tailwind-merge",
    ],
  },

  /* TypeScript */
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
