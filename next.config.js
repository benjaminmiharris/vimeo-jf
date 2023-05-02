/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig, // Merge the two objects
  env: {
    VIMEO_TOKEN: "e0422dee75d6639713b5eea531b8a41a",
    NEXT_PUBLIC_BASE_URL: "https://main.d2z866ovmu3pci.amplifyapp.com",
  },
};
