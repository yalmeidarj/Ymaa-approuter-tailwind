const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  options: {
    providerImportSource: "@mdx-js/react",
  },
  reactStrictMode: true,
  swcMinify: true,
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

module.exports = withMDX(nextConfig);

// export default module.exports;
