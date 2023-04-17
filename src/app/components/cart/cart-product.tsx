import Image from 'next/image'

import SizeButton from '../size-btn'

export default function CartProduct() {
  return (
    <>
      <div className="relative flex flex-row-reverse gap-4 rounded-xl border border-black bg-teal p-3 font-display drop-shadow-cart first:mt-5 last:mb-10 sm:gap-6 sm:rounded-extra sm:border-2 sm:p-6 sm:first:mt-10">
        <div className="flex flex-col gap-2 text-black sm:justify-between sm:gap-4">
          <div className=" text-3xl font-black uppercase leading-trim sm:text-product md:w-80">
            <p>extra spicy bsmnt tee</p>
          </div>
          <div className=" text-xs uppercase leading-tight text-black sm:text-2xl md:w-52">
            <p>The best tee you ever had, with a basement spice twist.</p>
          </div>
          <div className="flex h-6 items-center sm:h-12">
            <p className="text-xs font-bold sm:text-base">QUANTITY</p>
            <div className="ml-3 flex gap-2 sm:ml-6 sm:gap-3 ">
              <SizeButton size={'-'} />
              <SizeButton size={'0'} />
              <SizeButton size={'+'} />
            </div>
          </div>

          <div className="flex h-6 text-xs sm:h-12 sm:text-base ">
            <p className="font-bold">PRICE</p>
            <p className="ml-3 flex sm:ml-6">$30</p>
          </div>
        </div>

        <div className="rounded-md bg-black sm:h-[160px] sm:rounded-3xl">
          <Image
            className="rounded-md sm:rounded-3xl "
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
