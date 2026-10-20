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
// Fewer srcset widths = fewer Cloudinary transformation variants per image.
// Drops 750, 1080, 2048 and 3840 from the defaults; nothing asks for more than 1920.
// imageSizes stays at the default (32-384) so the homepage strip's "0vw" trick
// still resolves to the smallest candidate.
deviceSizes: [640, 828, 1200, 1920],
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
{
// Renamed: Ha Giang is the place, the loop is the ride through it
source: "/destinations/ha-giang-loop",
destination: "/destinations/ha-giang",
permanent: true,
},
{
// Ba Na Hills merged into Da Nang (its locations moved there)
source: "/destinations/ba-na-hills",
destination: "/destinations/da-nang",
permanent: true,
},
{
// Renamed: the destination is the Mui Ne beach strip, Phan Thiet is the city next to it
source: "/destinations/phan-thiet",
destination: "/destinations/mui-ne",
permanent: true,
},
{
source: "/destinations/thai-nguyen",
destination: "/provinces/thai-nguyen",
permanent: true,
},
{
source: "/destinations/kon-tum",
destination: "/provinces/kon-tum",
permanent: true,
},
{
source: "/locations/ben-tre-coconut-village",
destination: "/locations/phoenix-unicorn-islands-my-tho",
permanent: true,
},
];
},
};

export default nextConfig;
