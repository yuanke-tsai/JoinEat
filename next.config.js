/** @type {import('next').NextConfig} */
const nextConfig = {};

const redirects = async () => [
  {
    source: "/login",
    has: [
      {
        type: "cookie",
        key: "access_token",
      },
    ],
    permanent: false,
    destination: "/",
  },
  {
    source: "/",
    missing: [{ type: "cookie", key: "access_token" }],
    permanent: false,
    destination: "/login",
  },
  {
    source: "/users/:id",
    missing: [{ type: "cookie", key: "access_token" }],
    permanent: false,
    destination: "/login",
  },
];

module.exports = {
  redirects,
  nextConfig,
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.54.3.89",
      },
    ],
  },
};
