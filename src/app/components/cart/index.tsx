'use client'

import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { CartFragment } from '~/shopify/sdk-gen/fragments'
import { useCartOpenState, useCartQuery } from '~/shopify/storefront-hooks'

import s from './cart.module.scss'
import CartFooter from './cart-footer'
import CartHeader from './cart-header'
import CartProduct from './cart-product'

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
        <button className="flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl  leading-trim drop-shadow-cart hover:bg-cream md:h-12 md:px-4 md:text-base ">
          CART {cartQuery.data?.totalQuantity ?? 0}
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
            {/* {cartQuery.data?.lines.nodes.map((line) =>
              console.log(lines)
              // <CartProduct key={line.id} data={line} />
            )} */}
          </div>
          <CartFooter total={cartQuery.data?.cost.subtotalAmount.amount}/>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
