import Image from 'next/image'

export default function CartHeader({
  closeTrigger
}: {
  closeTrigger?: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col">
      <div className="flex h-36 items-center justify-between bg-cream px-12 font-display">
        <p className="text-5xl font-black text-black">YOUR CART</p>

        {closeTrigger}
      </div>

      <Image
        className="absolute -bottom-[9px] z-10 ml-10 w-[760px]"
        src="/primitives/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
    </div>
  )
}
