/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/next-portfolio' : '',
  assetPrefix: isProd ? '/next-portfolio/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
