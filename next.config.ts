import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['leaflet', 'react-leaflet'],
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