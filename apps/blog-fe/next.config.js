/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@app/components', '@app/hooks', '@app/types'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ],
  },
};
