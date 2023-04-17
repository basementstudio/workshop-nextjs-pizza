'use client'

import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import { useToggleState } from '~/hooks/use-toggle-state'

import s from './cart.module.scss'
import CartFooter from './cart-footer'
import CartHeader from './cart-header'
import CartProduct from './cart-product'

const Cart = () => {
  const { isOn, handleOn, handleOff } = useToggleState()
  return (
    <RadixDialog.Root open={isOn}>
      <RadixDialog.Trigger asChild>
        <button
          onClick={handleOn}
          className="flex h-8 items-center justify-end rounded-full border-2 border-black bg-pink px-2 py-2 text-xl font-bold  leading-trim drop-shadow-cart hover:bg-cream md:h-12 md:px-4 md:text-base "
        >
          CART 0
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
              <button
                onClick={handleOff}
                className="flex h-8 items-center justify-end rounded-full border border-pink bg-black px-2 text-xl font-bold  leading-trim drop-shadow-cart hover:bg-cream sm:border-2 md:h-12 md:px-4 md:text-base"
              >
                CLOSE &nbsp; X
              </button>
            }
          />
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 sm:mx-12 sm:gap-6">
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </div>
          <CartFooter />
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Cart
