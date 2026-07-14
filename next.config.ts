import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Redirect www → apex canonical domain (fixes "Page with redirect" GSC issue)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.pixorastudios.com" }],
        destination: "https://pixorastudios.com/:path*",
        permanent: true, // 308
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
