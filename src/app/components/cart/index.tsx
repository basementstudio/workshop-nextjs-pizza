'use client'

import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { CartFragment } from '~/shopify/sdk-gen/fragments'
import { CartLine } from '~/shopify/sdk-gen/generated'
import { useCartOpenState, useCartQuery } from '~/shopify/storefront-hooks'

import s from './cart.module.scss'
import CartFooter from './cart-footer'
import CartHeader from './cart-header'
import CartProduct from './cart-product'

const Cart = ({
  prefetchedCart
}: {
  prefetchedCart: CartFragment | undefined
}) => {
  const cartOpenState = useCartOpenState()
  const cartQuery = useCartQuery({
    queryOptions: { initialData: prefetchedCart }
  })

  return (
    <RadixDialog.Root
      open={cartOpenState.isOpen}
      onOpenChange={(isOpen) => {
        if (isOpen) {
          cartOpenState.open()
        } else {
          cartOpenState.close()
        }
      }}
    >
      <RadixDialog.Trigger asChild>
        <button className="flex transition-colors ease-in h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold  leading-trim drop-shadow-cart hover:bg-cream md:h-12 md:px-4 md:text-base">
          CART<span className="-mt-2 inline-block">(</span>
          {cartQuery.data?.totalQuantity ?? 0}
          <span className="-mt-2 inline-block">)</span>
        </button>
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay
          className={clsx(s.overlay, 'fixed inset-0 z-50 bg-black/50')}
        />
        <RadixDialog.Content
          className={clsx(
            s.content,
            'fixed right-0 top-0 z-50 flex h-screen w-full flex-col border-black bg-cream sm:rounded-bl-3xl sm:border-l-2 md:w-[850px]'
          )}
        >
          <CartHeader
            closeTrigger={
              <RadixDialog.Close asChild>
                <button className="transition-colors ease-in flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold  leading-trim text-black drop-shadow-cart hover:bg-cream md:h-12 md:px-4 md:text-base">
                  CLOSE &nbsp; X
                </button>
              </RadixDialog.Close>
            }
          />
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 sm:mx-12 sm:gap-6">
            {cartQuery.data?.lines.edges.map(({ node: line }) => (
              <CartProduct key={line.id} data={line as CartLine} />
            ))}
          </div>
          <CartFooter
            checkoutUrl={cartQuery.data?.checkoutUrl}
            total={cartQuery.data?.cost.subtotalAmount.amount}
          />
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Cart
