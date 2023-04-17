import Image from 'next/image'
import { useCallback } from 'react'

import {
  CartLine,
} from '~/shopify/sdk-gen/generated'
import {
  useRemoveLineItemsFromCartMutation,
  useUpdateLineItemsInCartMutation
} from '~/shopify/storefront-hooks'

export default function CartProduct({ data }: { data: CartLine }) {
  const { mutate: onRemoveLineItems, isLoading: isRemoving } =
    useRemoveLineItemsFromCartMutation()
  const { mutate: onUpdateLineItem, isLoading: isUpdating } =
    useUpdateLineItemsInCartMutation()

  const handleAdd = useCallback(async () => {
    onUpdateLineItem([{ merchandiseId: data.id, quantity: data.quantity + 1 }])
  }, [data.id, data.quantity, onUpdateLineItem])

  const handleRemoveLineItem = useCallback(async () => {
    onRemoveLineItems([data.id])
  }, [data.id, onRemoveLineItems])

  const handleRemove = useCallback(async () => {
    if (data.quantity === 1) {
      return await handleRemoveLineItem()
    } else {
      onUpdateLineItem([
        { merchandiseId: data.id, quantity: data.quantity - 1 }
      ])
    }
  }, [data.id, data.quantity, handleRemoveLineItem, onUpdateLineItem])

  return (
    <>
      <div className="relative flex flex-row-reverse gap-6 rounded-extra border-2 border-black bg-teal p-6 font-display drop-shadow-cart first:mt-10 last:mb-10">
        <div className="flex flex-col justify-between gap-4 text-black">
          <div className="w-80 text-product font-black uppercase leading-trim">
            <p>{data.merchandise.product.title}</p>
          </div>
          <div className="w-52 text-2xl uppercase leading-tight text-black">
            <p>{data.merchandise.product.description}</p>
          </div>
          <div className="flex h-12">
            <p className="text-base font-bold">QUANTITY</p>
            <div className="ml-6 flex gap-3 ">
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full border border-cream bg-black text-center font-display text-[16px] leading-trim text-cream hover:bg-teal disabled:opacity-70 aria-selected:bg-teal aria-selected:text-black sm:h-10 sm:w-10 sm:text-2xl  xl:h-12 xl:w-12 xl:border-2 xl:text-base"
                onClick={handleRemove}
                disabled={isUpdating || isRemoving}
              >
                -
              </button>
              <p className="flex h-6 w-6 items-center justify-center rounded-full border border-cream bg-black text-center font-display text-[16px] leading-trim text-cream aria-selected:text-black sm:h-10 sm:w-10 sm:text-2xl  xl:h-12 xl:w-12 xl:border-2 xl:text-base">
                {data.quantity}
              </p>
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full border border-cream bg-black text-center font-display text-[16px] leading-trim text-cream hover:bg-teal disabled:opacity-70 aria-selected:bg-teal aria-selected:text-black sm:h-10 sm:w-10 sm:text-2xl  xl:h-12 xl:w-12 xl:border-2 xl:text-base"
                onClick={handleAdd}
                disabled={isUpdating || isRemoving}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex h-12">
            <p className="text-base font-bold">SIZE</p>
            <div className="ml-6 flex gap-3">
              {data.merchandise.selectedOptions.map(
                (option, idx) =>
                  option.name === 'Size' && (
                    <p
                      key={idx}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-cream bg-black text-center font-display text-[16px] leading-trim text-cream sm:h-10 sm:w-10 sm:text-2xl xl:h-12 xl:w-12 xl:border-2 xl:text-base"
                    >
                      {option.value}
                    </p>
                  )
              )}
            </div>
          </div>
          <div className="flex h-12 text-base ">
            <p className="font-bold">PRICE</p>
            <p className="ml-6 flex gap-3">
              ${data.merchandise.product.priceRange.minVariantPrice.amount}
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-black">
          <Image
            className="rounded-extra"
            src={data.merchandise.image?.url}
            height={data.merchandise.image?.height}
            width={data.merchandise.image?.width}
            alt={data.merchandise.image?.altText ?? ''}
          />
        </div>
      </div>
    </>
  )
}
