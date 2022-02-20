/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
  images: {
    domains: ['images-jp.amazon.com'],
  },
  sassOptions: {
    prependData: `
      $MAIN_COLOR: #2d3748;
    `,
  },
}

module.exports = nextConfig
