import packageJson from './package.json'

const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? `/${packageJson.name}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
}

export default nextConfig
