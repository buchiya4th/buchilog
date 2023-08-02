// tslint:disable-next-line:no-var-requires
const path = require("path")
const generateSiteMap = require('./utils/generateSiteMap')
const withPlugins = require('next-compose-plugins')

// Plugins
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins(
  [ // Plugins
    [withBundleAnalyzer],
  ],
  {
  env: {
    DOMAIN: process.env.NEXT_PUBLIC_DOMAIN
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./")
    }

    if (isServer) {
      generateSiteMap
    }

    return config
  }
})
