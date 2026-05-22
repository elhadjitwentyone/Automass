/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'sc04.alicdn.com'],
    unoptimized: true,
  },
}

export default nextConfig
