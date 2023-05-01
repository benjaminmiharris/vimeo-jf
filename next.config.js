/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig, // Merge the two objects
  env: {
    VIMEO_TOKEN: "e0422dee75d6639713b5eea531b8a41a",
  },
};
