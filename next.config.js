/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: '/og.png', destination: '/og' }];
  },
}

module.exports = nextConfig

