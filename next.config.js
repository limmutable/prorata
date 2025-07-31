/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL || 'http://localhost:1337'
  }
}

module.exports = nextConfig