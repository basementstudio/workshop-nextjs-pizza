'use client'

import Image from 'next/image'
import { useCallback } from 'react'

import { isDev } from '~/lib/constants'
import { ProductFragment } from '~/shopify/sdk-gen/fragments'
import {
  useAddLineItemsToCartMutation,
  useCartOpenState,
  useProductFormHelper
} from '~/shopify/storefront-hooks'

import SizeButton from './size-btn'

const Product = ({ data }: { data: ProductFragment }) => {
  const {
    optionsToSelect,
    selectedOptions,
    handleSelectOption,
    selectedVariant
  } = useProductFormHelper(data)
  const { mutate: handleAddToCart, isLoading: isAdding } =
    useAddLineItemsToCartMutation()
  const openCart = useCartOpenState().open

  const sizeVariants = optionsToSelect.filter(({ name }) => name === 'Size')[0]
    ?.values

  const onAddToCart = useCallback(async () => {
    if (!selectedVariant || !data.availableForSale) return
    handleAddToCart([{ merchandiseId: selectedVariant?.id, quantity: 1 }], {
      onSuccess() {
        openCart()
      }
    })
  }, [handleAddToCart, openCart, selectedVariant])

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onAddToCart()
      }}
      className="relative flex flex-col gap-4 rounded-2xl border border-black bg-cream p-4 font-display drop-shadow-cart sm:p-6 md:gap-6 md:rounded-extra md:border-2 lg:mx-0 lg:w-full"
    >
      <div className="flex justify-between">
        <div className="w-36 text-4xl font-black uppercase leading-trim text-black md:text-product lg:w-80">
          <p>{data.title}</p>
        </div>
        <div className="w-32 text-[16px] uppercase leading-tight text-black lg:w-52 lg:text-2xl">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="absolute left-24 z-10 w-20 font-black md:w-36 lg:left-48 lg:top-16">
        <div className="z-20 justify-center pt-1 text-center text-lg text-pink md:pt-4 md:text-base">
          <p>${data.priceRange.minVariantPrice.amount}</p>
        </div>
        <Image
          className="absolute top-0 -z-10"
          src="/primitives/ellipse.svg"
          height={64}
          width={144}
          alt=""
        />
      </div>
      <div className="relative w-full overflow-hidden rounded-xl bg-black md:rounded-3xl">
        {!data.availableForSale && <SoldOut />}
        {data.images.edges[0]?.node.url && (
          <Image
            className="rounded-extra "
            src={data.images.edges[0]?.node.url}
            height={data.images.edges[0]?.node.height}
            width={data.images.edges[0]?.node.width}
            alt={data.images.edges[0]?.node.altText ?? ''}
          />
        )}
        <div className="flex h-12 items-center justify-between px-4 md:h-20 md:px-6 lg:h-24">
          <div className="relative flex gap-2 sm:gap-3 ">
            {sizeVariants?.map((opt, idx) => {
              return (
                <SizeButton
                  key={idx}
                  size={opt.value}
                  onClick={() => handleSelectOption('Size', opt.value)}
                  selected={selectedOptions.Size === opt.value}
                  disabled={opt.disabled}
                />
              )
            })}
            <label className="pointer-events-none absolute -bottom-0 left-1/2 opacity-0">
              <span className="sr-only">Size</span>
              <input
                tabIndex={-1}
                name="size"
                value={selectedOptions.Size}
                required={true}
                readOnly={isDev} // for that annoying warning
                className="bg-transparent"
              />
            </label>
          </div>
          <button
            disabled={isAdding}
            className="flex h-6 items-center justify-center rounded-full border border-cream bg-teal px-2 text-center font-display text-[16px] font-bold leading-trim text-black hover:bg-black hover:text-cream disabled:bg-black disabled:text-cream sm:h-10 sm:text-2xl md:w-52 md:px-4 xl:h-12 xl:border-2 xl:text-base"
          >
            {isAdding ? 'ADDING...' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </form>
  )
}

const SoldOut = () => (
  <div className="absolute inset-0 z-50 grid cursor-not-allowed place-items-center bg-black/70">
    <p className="grid h-[155px] w-[348px] place-items-center rounded-[99%] border border-solid border-black bg-cream text-[64px] font-bold uppercase text-black">
      Sold Out
    </p>
  </div>
)

export default Product
