// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "api.producthunt.com",
      "github.githubassets.com",
      "styles.redditmedia.com",
      "user-images.githubusercontent.com",
      "upload.wikimedia.org",
      "github.com",
      "d1g2o751bxy91o.cloudfront.net"
    ],
  },
};

module.exports = withContentlayer(nextConfig);
