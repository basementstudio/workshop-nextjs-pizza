import Image from 'next/image'

export default function CartFooter() {
  return (
    <div className=" absolute bottom-0">
      <Image
        className="relative top-[9px] z-30 ml-10 w-[760px]"
        src="/el/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
      <div className="flex h-36 w-[850px] items-center justify-between rounded-bl-3xl bg-cream px-12 font-display">
        <div className="text-5xl font-black text-black">TOTAL $30</div>
        <button className="font-outline justify-center font-display text-5xl font-black tracking-widest text-pink drop-shadow-cart hover:text-teal">
          CHECKOUT
        </button>
      </div>
    </div>
  )
}
