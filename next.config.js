/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images-jp.amazon.com', 's3.us-west-2.amazonaws.com'],
  },
  sassOptions: {
    prependData: `
      $MAIN_COLOR: #2d3748;
    `,
  },
};

module.exports = nextConfig;
