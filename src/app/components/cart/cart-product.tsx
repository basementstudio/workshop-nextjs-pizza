'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useCallback } from 'react'

export const CartProduct = ({
  data
}: {
  data: {
    title: string
    description: string
    size: string
    quantity: number
    cost: number
    image: {
      src: string
      alt: string
      width: number | undefined
      height: number | undefined
    }
  }
}) => {
  const isAdding = false
  const isRemoving = false

  const handleAdd = useCallback(async () => {
    // todo
  }, [])

  const handleRemoveLineItem = useCallback(async () => {
    // todo
  }, [])

  const handleRemove = useCallback(async () => {
    if (data.quantity === 1) {
      // todo removeAll
    } else {
      // todo one
    }
  }, [data.quantity])

  return (
    <div
      className={clsx(
        isRemoving && 'opacity-50',
        'flex w-full flex-row-reverse justify-end gap-3 rounded-xl border border-black bg-teal p-3 font-display drop-shadow-cart transition-opacity ease-in first:mt-5 last:mb-10 sm:gap-6 sm:rounded-extra sm:border-2 sm:p-6 sm:first:mt-10'
      )}
    >
      <div className="flex w-[60%] flex-col gap-2 text-black  sm:justify-between ">
        <div className="text-3xl font-black uppercase leading-trim sm:text-product">
          <p>{data.title}</p>
        </div>
        <div className="text-xs uppercase leading-none text-black sm:text-2xl sm:leading-tight md:w-full">
          <p>{data.description}</p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex h-6 items-center sm:h-12">
            <p className="text-xs font-bold sm:text-base">QUANTITY</p>
            <div className="ml-3 flex gap-2 sm:ml-6 sm:gap-3">
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-teal text-center font-display text-[16px] leading-trim text-black transition-colors ease-in disabled:opacity-70 sm:h-10 sm:w-10 sm:text-2xl xl:h-12  xl:w-12 xl:border-2 xl:text-base better-hover:hover:bg-cream"
                onClick={handleRemove}
                disabled={isAdding}
              >
                -
              </button>
              {isAdding ? (
                <TailSpinSvg className="h-6 w-6 sm:h-[48px] sm:w-[48px]" />
              ) : (
                <p className="relative flex h-6 w-6 items-center justify-center rounded-full border border-black bg-cream text-center font-display text-[16px] leading-trim text-black aria-selected:text-black sm:h-10 sm:w-10 sm:text-2xl  xl:h-12 xl:w-12 xl:border-2 xl:text-base">
                  {data.quantity}
                </p>
              )}
              <button
                className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-teal text-center font-display text-[16px] leading-trim text-black transition-colors ease-in disabled:opacity-70 sm:h-10 sm:w-10 sm:text-2xl xl:h-12  xl:w-12 xl:border-2 xl:text-base better-hover:hover:bg-cream"
                onClick={handleAdd}
                disabled={isAdding}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex h-6 items-center text-xs sm:h-12 sm:text-base">
            <p className="text-xs font-bold sm:text-base">SIZE</p>
            <div className="ml-3 flex gap-3 sm:ml-6">
              <p className="flex h-6 w-6 items-center justify-center rounded-full border border-black bg-cream text-center font-display text-[16px] leading-trim text-black aria-selected:text-black sm:h-10 sm:w-10 sm:text-2xl  xl:h-12 xl:w-12 xl:border-2 xl:text-base">
                {data.size}
              </p>
            </div>
          </div>
          <div className="flex h-6 items-center justify-center text-xs leading-trim sm:h-12 sm:text-base">
            <p className="font-bold">PRICE</p>
            <p className="ml-3 flex sm:ml-6">${data.cost}</p>

            <button
              onClick={handleRemoveLineItem}
              className="ml-auto flex font-bold uppercase transition-opacity ease-in better-hover:hover:opacity-60"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="h-[160px] w-[160px] rounded-md bg-black sm:w-[55%] sm:rounded-3xl">
        <Image
          className="rounded-md sm:rounded-3xl"
          src={data.image.src}
          height={data.image.height}
          width={data.image.width}
          alt={data.image.alt ?? data.title}
        />
      </div>
    </div>
  )
}

const TailSpinSvg = ({ className }: { className: string }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient
        x1="8.042%"
        y1="0%"
        x2="65.682%"
        y2="23.865%"
        id="a-tail-spin"
      >
        <stop stopColor="#000" stopOpacity="0" offset="0%" />
        <stop stopColor="#000" stopOpacity=".631" offset="63.146%" />
        <stop stopColor="#000" offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)">
        <path
          d="M36 18c0-9.94-8.06-18-18-18"
          id="Oval-2"
          stroke="url(#a-tail-spin)"
          strokeWidth="2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
        <circle fill="#000" cx="36" cy="18" r="1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </g>
  </svg>
)
