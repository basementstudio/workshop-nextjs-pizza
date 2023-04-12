import Image from 'next/image'

import SizeButton from './size-btn'

export default function CartProduct() {
  return (
    <>
      <div className="relative  flex flex-row-reverse gap-6 rounded-extra border-2 border-black bg-teal p-6 font-display drop-shadow-cart">
        <div className="flex flex-col justify-between gap-4 text-black">
          <div className="w-80 text-product font-black uppercase leading-trim ">
            extra spicy bsmnt tee
          </div>
          <div className="w-52 text-2xl uppercase leading-tight text-black">
            The best tee you ever had, with a basement spice twist.
          </div>
          <div className="flex h-12">
            <div className="text-base font-bold">QUANTITY</div>
            <div className="ml-6 flex gap-3 ">
              <SizeButton size={'-'} />
              <SizeButton size={'0'} />
              <SizeButton size={'+'} />
            </div>
          </div>
          <div className="flex h-12">
            <div className="text-base font-bold">SIZE</div>
            <div className="ml-6 flex gap-3">
              <SizeButton size={'S'} />
              <SizeButton size={'M'} selected={true} />
              <SizeButton size={'L'} />
              <SizeButton size={'XL'} />
            </div>
          </div>
          <div className="flex h-12 text-base ">
            <div className="font-bold">PRICE</div>
            <div className="ml-6 flex gap-3">$30</div>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-black">
          <Image
            className="rounded-extra"
            src="/tees/tee-basement-studio.png"
            height={348}
            width={348}
            alt="tee basement"
          />
        </div>
      </div>
    </>
  )
}
