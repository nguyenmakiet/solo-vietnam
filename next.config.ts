import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['leaflet', 'react-leaflet'],
  // apex -> www redirect is handled at the Vercel platform level (Settings -> Domains)
  // Do NOT re-add a redirects() block here - it will fight Vercel's redirect and cause ERR_TOO_MANY_REDIRECTS
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;