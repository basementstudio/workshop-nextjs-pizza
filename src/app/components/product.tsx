'use client'

import Image from 'next/image'

import { isDev } from '~/lib/constants'
import { ProductFragment } from '~/shopify/sdk-gen/fragments'
import { useProductFormHelper } from '~/shopify/storefront-hooks'

import { SizeButton } from './size-btn'

export const Product = ({ data }: { data: ProductFragment }) => {
  const {
    optionsToSelect,
    selectedOptions,
    handleSelectOption,
    selectedVariant
  } = useProductFormHelper(data)

  const sizeVariants = optionsToSelect.filter(({ name }) => name === 'Size')[0]
    ?.values

  const isAdding = false // hook loading state to a real interaction

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!selectedVariant || !data.availableForSale) return
        // todo: add to cart!
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
      <div className="absolute left-24 z-10 w-20 sm:left-48 sm:top-4 md:w-36">
        <div className="ellipse items-center justify-center border border-black bg-pink py-1 text-center font-black text-black sm:border-2 md:h-[64px] md:w-[144px] md:pt-1 md:text-base">
          <p>${data.priceRange.minVariantPrice.amount}</p>
        </div>
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
            <label className="pointer-events-none absolute -bottom-0 left-0 opacity-0 md:left-1/2">
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
            className="flex h-6 items-center justify-center rounded-full border border-cream bg-teal px-2 text-center font-display text-[16px] font-bold leading-trim text-black transition-colors ease-in disabled:bg-black disabled:text-cream sm:h-10 sm:text-2xl md:w-52 md:px-4 xl:h-12 xl:border-2 xl:text-base better-hover:hover:bg-black better-hover:hover:text-cream"
          >
            {isAdding ? 'ADDING...' : 'ADD TO CART'}
          </button>
        </div>
      </div>
    </form>
  )
}

const SoldOut = () => (
  <div className="absolute inset-0 z-50 grid cursor-not-allowed place-items-center rounded-xl bg-black/70 md:rounded-3xl">
    <p className="grid h-[77px] w-[174px] place-items-center rounded-[99%] border border-solid border-black bg-cream text-base font-bold uppercase text-black sm:h-[155px] sm:w-[348px] sm:text-product">
      Sold Out
    </p>
  </div>
)
