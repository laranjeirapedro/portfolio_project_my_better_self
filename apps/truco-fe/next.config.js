/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@app/components", "@app/hooks"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};
