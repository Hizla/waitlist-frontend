/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://hizla.io/api/:path*",
      },
    ];
  },
};

export default nextConfig;
