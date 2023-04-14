'use client'

import type { CartFragment } from '~/shopify/sdk-gen/fragments'
import { useCartQuery } from '~/shopify/storefront-hooks'

export default function CartButton({
  prefetchedCart
}: {
  prefetchedCart: CartFragment | undefined
}) {
  const cartQuery = useCartQuery({
    queryOptions: { initialData: prefetchedCart }
  })

  return (
    <>
      <button className="flex h-12 items-center justify-end rounded-full border-2 border-black bg-pink px-4 py-2 leading-trim drop-shadow-cart">
        CART {cartQuery.data?.totalQuantity ?? 0}
      </button>
    </>
  )
}
