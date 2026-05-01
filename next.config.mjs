/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "/training-programmes",
        permanent: true,
      },
    ];
  },
  // output: "export",
  // distDir: "dist",
};

export default nextConfig;
