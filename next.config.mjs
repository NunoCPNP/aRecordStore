/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.discogs.com",
      },
    ],
  },
};

export default nextConfig;
