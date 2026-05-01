import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['leaflet', 'react-leaflet'],
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "soloinvietnam.com" }],
        destination: "https://www.soloinvietnam.com/:path*",
        permanent: true,
      },
    ]
  },
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