import Image from 'next/image'

export const CartHeader = ({
  closeTrigger
}: {
  closeTrigger?: React.ReactNode
}) => {
  return (
    <div className="relative flex flex-col px-4 sm:px-10">
      <div className="flex h-16 items-center justify-between bg-cream font-display sm:h-36">
        <p className="text-4xl font-black text-black sm:text-5xl">YOUR CART</p>
        {closeTrigger}
      </div>

      <Image
        className="absolute -bottom-1 z-10 max-w-[92%] sm:-bottom-[9px]"
        src="/primitives/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
    </div>
  )
}
