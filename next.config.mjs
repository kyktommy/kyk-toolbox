const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? `/kyk-toolbox` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
}

export default nextConfig
