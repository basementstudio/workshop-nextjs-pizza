'use client'

import { useEffect } from 'react'

import { basementLog, isClient, isProd } from '~/lib/constants'
import { QueryClientProvider } from '~/shopify/storefront-hooks'

if (isProd && isClient) {
  // eslint-disable-next-line no-console
  console.log(basementLog)
}

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  // User is tabbing hook
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === `Tab`) {
        document.body.classList.add('user-is-tabbing')
      }
    }

    function handleMouseDown() {
      document.body.classList.remove('user-is-tabbing')
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return <QueryClientProvider>{children}</QueryClientProvider>
}
