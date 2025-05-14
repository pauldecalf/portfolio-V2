import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: {
    // Désactiver les vérifications ESLint lors de la construction
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Désactiver les vérifications TypeScript lors de la construction
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
