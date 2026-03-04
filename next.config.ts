import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async function () {
    const redirects = [
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ]
    return redirects
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
};

export default nextConfig;
