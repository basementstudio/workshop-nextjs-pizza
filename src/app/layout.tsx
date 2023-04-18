import './css/global.scss'

import localFont from '@next/font/local'
import type { Metadata } from 'next'

import { siteURL } from '~/lib/constants'

import { Header } from './components/header'
import { Providers } from './providers'
import Footer from './sections/footer'

const nichrome = localFont({
  src: [
    {
      path: './fonts/MDNichrome-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: './fonts/MDNichrome-Bold.woff2',
      weight: '700',
      style: 'bold'
    },
    {
      path: './fonts/MDNichrome-Regular.woff2',
      weight: '400',
      style: 'regular'
    }
  ],
  preload: true,
  variable: '--font-nichrome'
})

export const metadata: Metadata = {
  title: 'Next.js & Pizza — a workshop by basement.studio',
  description:
    'Simple t-shirt shop project strongly spiced with basement.studio flavor for the Next.js & Pizza Workshop.',
  metadataBase: siteURL
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${nichrome.variable} bg-cream`}>
      <body className="bg-cream">
        <Providers>
          {/* @ts-expect-error rsc */}
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
