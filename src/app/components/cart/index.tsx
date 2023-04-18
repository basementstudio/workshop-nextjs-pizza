'use client'

import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import placeholderTeeImgSrc from '~/public/tees/tee-basement-studio.png'

import s from './cart.module.scss'
import { CartFooter } from './cart-footer'
import { CartHeader } from './cart-header'
import { CartProduct } from './cart-product'

const cartMock = {
  id: 'pizza',
  checkoutUrl: '#',
  lines: [
    {
      id: 'tee',
      quantity: 2,
      title: 'DARK BSMNT TEE',
      description: 'THE BEST TEE YOU EVER HAD, WITH THE BASEMENT SPICE TWIST.',
      size: 'L',
      cost: 5
    }
  ],
  totalCost: 5,
  totalQuantity: 2
}

export const Cart = () => {
  const emptyState = false

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <button className="flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold leading-trim drop-shadow-cart transition-colors ease-in md:h-12 md:px-4 md:text-base better-hover:hover:bg-cream">
          CART<span className="-mt-1 inline-block md:-mt-2">(</span>
          {cartMock.totalQuantity}
          <span className="-mt-1 inline-block md:-mt-2">)</span>
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
                <button className="flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold leading-trim text-black  drop-shadow-cart transition-colors ease-in md:h-12 md:px-4 md:text-base better-hover:hover:bg-cream">
                  CLOSE &nbsp; X
                </button>
              </RadixDialog.Close>
            }
          />
          <div className="relative flex flex-1 flex-col gap-4 overflow-y-auto px-5 sm:mx-12 sm:gap-6 sm:pl-0">
            {emptyState && (
              <div className="absolute inset-0 grid place-items-center text-black">
                <div className="text-center">
                  <p className="font-display text-[32px] uppercase leading-trim">
                    Your cart is empty
                  </p>
                  <RadixDialog.Close asChild>
                    <button
                      type="button"
                      className="font-outline font-display text-[48px] font-extrabold uppercase tracking-[0.04em] text-pink drop-shadow-cart transition-all ease-in-out better-hover:hover:translate-y-1 better-hover:hover:drop-shadow-none"
                    >
                      Add an item
                    </button>
                  </RadixDialog.Close>
                </div>
              </div>
            )}
            {cartMock.lines.map((line) => {
              return (
                <CartProduct
                  key={line.id}
                  data={{
                    quantity: line.quantity,
                    title: line.title,
                    description: line.description,
                    size: line.size,
                    cost: line.cost,
                    image: {
                      src: placeholderTeeImgSrc.src,
                      alt: 'dark bsmnt tee',
                      width: placeholderTeeImgSrc.width,
                      height: placeholderTeeImgSrc.height
                    }
                  }}
                />
              )
            })}
          </div>
          <CartFooter emptyState={emptyState} checkoutUrl={'#'} total={0} />
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}
