/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using a custom domain (clayseifert.com), remove the basePath below
  // If deploying to username.github.io/clayseifert.com, keep it
  basePath: process.env.NODE_ENV === 'production' ? '/clayseifert.com' : '',
}

module.exports = nextConfig

