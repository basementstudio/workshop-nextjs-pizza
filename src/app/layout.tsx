import './css/global.scss'

import { Neonderthaw } from '@next/font/google'
import localFont from '@next/font/local'
import type { Metadata } from 'next'

import Header from './components/header'
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
  title: 'Next JS & Pizza Workshop',
  description: 'to do'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nichrome.variable} ${neon.variable}`}>
      <body className="bg-cream">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
