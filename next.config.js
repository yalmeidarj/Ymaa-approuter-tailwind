/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ymaa.blob.core.windows.net",
        pathname: "/newcontainer/**",
      },
      {
        protocol: "https",
        hostname: "ymaa.blob.core.windows.net",
        pathname: "/blog-images/**",
      },
      {
        protocol: "https",
        hostname: "ymaa.blob.core.windows.net",
        pathname: "/ymaa-clients/**",
      },
    ],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
