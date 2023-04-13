import Image from 'next/image'

import CartAddButton from './cart-btn-add'
import SizeButton from './size-btn'

export default function Product() {
  return (
    <>
      <div className="relative flex flex-col gap-4 rounded-2xl border border-black bg-cream p-4 font-display drop-shadow-cart sm:p-6 md:gap-6 md:rounded-extra md:border-2 lg:mx-0 lg:w-full">
        <div className="flex justify-between">
          <div className="w-36 text-4xl font-black uppercase leading-trim text-black md:text-product lg:w-80">
            extra spicy tee
          </div>
          <div className="w-32 text-[16px] uppercase leading-tight text-black lg:w-52 lg:text-2xl">
            the best tee you ever had, made with the basement spices
          </div>
        </div>
        <div className="absolute left-24 z-10 w-20 font-black md:w-36 lg:left-48 lg:top-16">
          <div className="z-20 justify-center pt-1 text-center text-lg text-pink md:pt-4 md:text-base">
            PRICE
          </div>
          <Image
            className="absolute top-0 -z-10 "
            src="/primitives/ellipse.svg"
            height={64}
            width={144}
            alt=""
          />
        </div>
        <div className=" w-full rounded-xl bg-black md:rounded-3xl">
          <Image
            className="rounded-extra "
            src="/tees/tee-basement-studio.png"
            height={511}
            width={582}
            alt="tee basement"
          />
          <div className="flex h-12 items-center justify-between px-4 md:h-20 md:px-6 lg:h-24">
            <div className="flex gap-2 sm:gap-3 ">
              <SizeButton size={'S'} />
              <SizeButton size={'M'} selected={true} />
              <SizeButton size={'L'} />
              <SizeButton size={'XL'} />
            </div>
            <CartAddButton />
          </div>
        </div>
      </div>
    </>
  )
}
