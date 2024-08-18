/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "anjik-public.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
