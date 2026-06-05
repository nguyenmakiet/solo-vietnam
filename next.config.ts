import type { NextConfig } from "next";

const nextConfig: NextConfig = {
transpilePackages: ["leaflet", "react-leaflet"],

turbopack: {
rules: {
"*.svg": {
loaders: ["@svgr/webpack"],
as: "*.js",
},
},
},

images: {
remotePatterns: [
{
protocol: "https",
hostname: "res.cloudinary.com",
},
],
},

async redirects() {
return [
{
source: "/provinces/ho-chi-minh",
destination: "/provinces/ho-chi-minh-city",
permanent: true,
},
{
source: "/destinations/ho-chi-minh",
destination: "/destinations/ho-chi-minh-city",
permanent: true,
},
];
},
};

export default nextConfig;
