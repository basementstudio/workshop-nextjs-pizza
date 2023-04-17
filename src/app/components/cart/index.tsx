'use client'

import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { CartFragment } from '~/shopify/sdk-gen/fragments'
import { useCartQuery, useCartOpenState } from '~/shopify/storefront-hooks'

import s from './cart.module.scss'
import CartFooter from './cart-footer'
import CartHeader from './cart-header'
import CartProduct from './cart-product'
import { CartLine } from '~/shopify/sdk-gen/generated'

export default function Cart({
  prefetchedCart
}: {
  prefetchedCart: CartFragment | undefined
}) {
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
        <button className="flex h-12 min-w-[146px] items-center justify-center rounded-full border-2 border-pink bg-black px-4 py-2 text-base font-bold leading-trim text-cream drop-shadow-close hover:bg-pink">
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
            'fixed right-0 top-0 z-50 flex h-screen w-[850px] flex-col rounded-bl-3xl border-l-2 border-black bg-cream'
          )}
        >
          <CartHeader
            closeTrigger={
              <RadixDialog.Close asChild>
                <button className="flex h-12 items-center justify-end rounded-full border-2 border-pink bg-black px-4 py-2 text-base font-bold leading-trim text-cream drop-shadow-close hover:bg-pink">
                  CLOSE &nbsp; X
                </button>
              </RadixDialog.Close>
            }
          />
          <div className="ml-12 mr-8 flex flex-1 flex-col gap-6 overflow-y-auto pr-4">
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
