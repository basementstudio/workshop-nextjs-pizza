import Image from 'next/image'

import SizeButton from '../size-btn'

export default function CartProduct() {
  return (
    <>
      <div className="relative flex flex-row-reverse gap-6 rounded-extra border-2 border-black bg-teal p-6 font-display drop-shadow-cart first:mt-10 last:mb-10">
        <div className="flex flex-col justify-between gap-4 text-black">
          <div className="w-80 text-product font-black uppercase leading-trim">
            <p>extra spicy bsmnt tee</p>
          </div>
          <div className="w-52 text-2xl uppercase leading-tight text-black">
            <p>The best tee you ever had, with a basement spice twist.</p>
          </div>
          <div className="flex h-12">
            <p className="text-base font-bold">QUANTITY</p>
            <div className="ml-6 flex gap-3 ">
              <SizeButton size={'-'} />
              <SizeButton size={'0'} />
              <SizeButton size={'+'} />
            </div>
          </div>
          <div className="flex h-12">
            <p className="text-base font-bold">SIZE</p>
            <div className="ml-6 flex gap-3">
              <SizeButton size={'S'} />
              <SizeButton size={'M'} selected={true} />
              <SizeButton size={'L'} />
              <SizeButton size={'XL'} />
            </div>
          </div>
          <div className="flex h-12 text-base ">
            <p className="font-bold">PRICE</p>
            <p className="ml-6 flex gap-3">$30</p>
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
