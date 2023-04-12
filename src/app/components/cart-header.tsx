import Image from 'next/image'

import CartCloseButton from './cart-btn-close'

export default function CartHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex h-36 items-center justify-between bg-cream px-12 font-display">
        <div className="text-5xl font-black text-black">YOUR CART</div>
        <CartCloseButton />
      </div>

      <Image
        className="relative -top-[9px] ml-10 w-[760px]"
        src="/el/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
    </div>
  )
}
