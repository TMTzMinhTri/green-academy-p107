/**
 * @type {import('next').NextConfig}
 */
const path = require('path')

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  env: {
    API_DOMAIN: process.env.API_DOMAIN,
    WEB_SOCKET_DOMAIN: process.env.WEB_SOCKET_DOMAIN,
    CALLBACK_URL: process.env.CALLBACK_URL,
    SSO_ENDPOINT: process.env.SSO_ENDPOINT
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "dev.panel.hainong.vn",
      },
    ],
  },
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