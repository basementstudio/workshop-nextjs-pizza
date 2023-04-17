import Image from 'next/image'

export default function CartFooter({
  total,
  checkoutUrl
}: {
  total: number
  checkoutUrl: string
}) {
  return (
    <div className="relative">
      <Image
        className="absolute top-[-9px] z-30 ml-10 w-[760px]"
        src="/primitives/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
      <div className="flex h-36 w-[850px] items-center justify-between rounded-bl-3xl bg-cream px-12 font-display">
        <div className="text-5xl font-black text-black">TOTAL ${total}</div>
        <a
          target="_blank"
          rel="noopener"
          href={checkoutUrl}
          className="font-outline inline-block justify-center font-display text-5xl font-black tracking-widest text-pink drop-shadow-cart hover:text-teal"
        >
          CHECKOUT
        </a>
      </div>
    </div>
  )
}
