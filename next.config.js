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
];

module.exports = {
  redirects,
  nextConfig,
  eslint: { ignoreDuringBuilds: true },
};
