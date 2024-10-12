import withMDX from "@next/mdx";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.iyed.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withMDX()(nextConfig);
