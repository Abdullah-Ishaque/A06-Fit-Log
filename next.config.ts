import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
