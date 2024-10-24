import '@/app/globals.css'

import type { Metadata, Viewport } from 'next'

import { baseMetadata } from '@/lib/metadata'

export const metadata: Metadata = baseMetadata

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body>{children}</body>
    </html>
  )
}
