'use client'

import { QueryClientProvider } from '~/shopify/storefront-hooks'

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>
}
