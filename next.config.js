/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // This line was already present in your code
    images: {
      domains: ['i.dummyjson.com'], // Add this line
    },
  };
  
  module.exports = nextConfig;