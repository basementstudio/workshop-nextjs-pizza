import Image from 'next/image'

export default function CartFooter() {
  return (
    <div className="relative">
      <Image
        className="absolute -top-[5px] z-30 w-[760px] sm:top-[-9px] sm:mx-10"
        src="/primitives/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
      <div className="flex h-16 items-center justify-between bg-cream px-4 font-display sm:h-36 sm:w-[850px] sm:rounded-bl-3xl sm:px-12">
        <div className="text-2xl font-black text-black sm:text-5xl">
          TOTAL $30
        </div>
        <button className="font-outline justify-center font-display text-2xl font-black tracking-widest text-pink drop-shadow-cart hover:text-teal sm:text-5xl">
          CHECKOUT
        </button>
      </div>
    </div>
  )
}
