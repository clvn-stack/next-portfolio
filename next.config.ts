/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/next-portfolio',
  assetPrefix: '/next-portfolio/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
