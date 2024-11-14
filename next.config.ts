import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'media.licdn.com',
    },
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
  }],
},
};
export default nextConfig;
