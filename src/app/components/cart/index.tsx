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
  const emptyState = cartQuery.data?.lines.edges.length === 0

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
        <button className="flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold leading-trim drop-shadow-cart  transition-colors ease-in hover:bg-cream md:h-12 md:px-4 md:text-base">
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
            'fixed right-0 top-0 z-50 flex h-[100dvh] w-full flex-col border-black bg-cream sm:rounded-bl-3xl sm:border-l-2 md:w-[850px]'
          )}
        >
          <CartHeader
            closeTrigger={
              <RadixDialog.Close asChild>
                <button className="flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold leading-trim text-black  drop-shadow-cart transition-colors ease-in hover:bg-cream md:h-12 md:px-4 md:text-base">
                  CLOSE &nbsp; X
                </button>
              </RadixDialog.Close>
            }
          />
          <div className="relative flex flex-1 flex-col gap-4 overflow-y-auto px-5 sm:mx-12 sm:gap-6">
            {emptyState && (
              <div className="absolute inset-0 grid place-items-center text-black">
                <div className="text-center">
                  <p className="font-display text-[32px] uppercase leading-trim">
                    Your cart is empty
                  </p>
                  <button
                    onClick={cartOpenState.close}
                    className="font-outline font-display text-[48px] font-extrabold uppercase tracking-[0.04em] text-pink drop-shadow-cart"
                  >
                    Add an item
                  </button>
                </div>
              </div>
            )}
            {cartQuery.data?.lines.edges.map(({ node: line }) => (
              <CartProduct key={line.id} data={line as CartLine} />
            ))}
          </div>
          <CartFooter
            emptyState={emptyState}
            checkoutUrl={cartQuery.data?.checkoutUrl}
            total={cartQuery.data?.cost.subtotalAmount.amount}
          />
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Cart
