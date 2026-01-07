/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/tanush-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tanush-portfolio' : '',
}

export default nextConfig