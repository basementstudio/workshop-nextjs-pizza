import Image from 'next/image'

import CartAddButton from './cart-btn-add'
import SizeButton from './size-btn'

export default function Product() {
  return (
    <>
      <div className="relative flex w-full flex-col gap-6 rounded-extra border-2 border-black bg-cream p-6 font-display drop-shadow-cart">
        <div className="flex justify-between">
          <div className="w-80 text-product font-black uppercase leading-trim text-black">
            extra spicy bsmnt tee
          </div>
          <div className="w-52 text-2xl uppercase leading-tight text-black">
            The best tee you ever had, with a basement spice twist.
          </div>
        </div>
        <div className="absolute left-48 top-16 z-10 w-36 text-base font-black">
          <div className="z-20 justify-center pt-2 text-center text-pink">
            PRICE
          </div>
          <Image
            className="absolute top-0 -z-10 "
            src="/el/ellipse.svg"
            height={64}
            width={144}
            alt=""
          />
        </div>
        <div className="w-full rounded-3xl bg-black">
          <Image
            className="rounded-extra"
            src="/tees/tee-basement-studio.png"
            height={511}
            width={582}
            alt="tee basement"
          />
          <div className="flex h-24 items-center justify-between px-6">
            <div className="flex gap-3 ">
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
