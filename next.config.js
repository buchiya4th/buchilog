// tslint:disable-next-line:no-var-requires
const path = require("path")
const generateSiteMap = require('./utils/generateSiteMap')

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  env: {
    DOMAIN: process.env.DOMAIN
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
