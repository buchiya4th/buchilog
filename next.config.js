// tslint:disable-next-line:no-var-requires
const path = require("path")
const generateSiteMap = require('./utils/generateSiteMap')

module.exports = {
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
}
