import './css/global.scss'

import { Neonderthaw } from '@next/font/google'
import localFont from '@next/font/local'
import type { Metadata } from 'next'

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
  variable: '--font-nichrome'
})

const neon = Neonderthaw({
  subsets: ['latin'],
  variable: '--font-neon',
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Next.js & Pizza — a workshop by basement.studio',
  description:
    'Simple t-shirt shop project strongly spiced with basement.studio flavor for the Next.js & Pizza Workshop.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${nichrome.variable} ${neon.variable}`}>
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
