const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const withBundleAnalyzer = require('@next/bundle-analyzer')

module.exports = (phase, { defaultConfig }) => {
  return withBundleAnalyzer({ enabled: phase !== PHASE_DEVELOPMENT_SERVER })(defaultConfig)
}
