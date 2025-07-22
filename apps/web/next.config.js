/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ["@repo/ui", "@repo/hooks", "@repo/lib"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig