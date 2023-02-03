/**
 * @type {import('next').NextConfig}
 */
const path = require('path')

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
  /* config options here */
}

module.exports = nextConfig