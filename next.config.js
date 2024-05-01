/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig, // Merge the two objects
  env: {
    NEXT_PUBLIC_VIMEO_TOKEN: "870bd1b9ab9d7eb6cd066b9864ea37ae",
    NEXT_PUBLIC_SITE_PASSWORD: "Aish613!",
    // NEXT_PUBLIC_DOMAIN: "https://main.d2z866ovmu3pci.amplifyapp.com",
    NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
  },
};
