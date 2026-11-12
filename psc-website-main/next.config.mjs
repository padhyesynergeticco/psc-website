/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // The Products page is now Offerings > Financial Services; keep old links working.
  async redirects() {
    return [
      { source: '/products', destination: '/offerings/financial-services', permanent: true },
      { source: '/offerings', destination: '/offerings/financial-services', permanent: false },
    ]
  },
}

export default nextConfig
