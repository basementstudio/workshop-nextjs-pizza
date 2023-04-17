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
      <div className="relative flex flex-row-reverse gap-4 rounded-xl border border-black bg-teal p-3 font-display drop-shadow-cart first:mt-5 last:mb-10 sm:gap-6 sm:rounded-extra sm:border-2 sm:p-6 sm:first:mt-10">
        <div className="flex flex-col gap-2 text-black sm:justify-between sm:gap-4">
          <div className="text-3xl font-black uppercase leading-trim sm:text-product md:w-80">
            <p>{data.merchandise.product.title}</p>
          </div>
          <div className="text-xs uppercase leading-tight text-black sm:text-2xl md:w-52">
            <p>{data.merchandise.product.description}</p>
          </div>
          <div className="flex h-6 items-center sm:h-12">
            <p className="text-xs font-bold sm:text-base">QUANTITY</p>
            <div className="ml-3 flex gap-2 sm:ml-6 sm:gap-3">
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
          <div className="flex h-6 text-xs sm:h-12 sm:text-base">
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
            <p className="ml-3 flex sm:ml-6">
              ${data.merchandise.product.priceRange.minVariantPrice.amount}
            </p>
          </div>
        </div>

        <div className="rounded-md bg-black sm:h-[160px] sm:rounded-3xl">
          <Image
            className="rounded-md sm:rounded-3xl"
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
