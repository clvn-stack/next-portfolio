/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Export static HTML for GitHub Pages
  images: {
    unoptimized: true, // Needed if using next/image
  },
  basePath: '/next-portfolio', // Replace with your repo name
  assetPrefix: '/next-portfolio/', // Same as basePath
  eslint: {
    ignoreDuringBuilds: true, // 🚀 Ignore ESLint errors/warnings during build
  },
};

module.exports = nextConfig;