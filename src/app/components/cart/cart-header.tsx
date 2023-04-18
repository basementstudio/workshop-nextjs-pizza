import Image from 'next/image'

const CartHeader = ({ closeTrigger }: { closeTrigger?: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col">
      <div className="flex h-16 items-center justify-between bg-cream px-4 font-display sm:h-36 sm:px-12">
        <p className="text-4xl font-black text-black sm:text-5xl">YOUR CART</p>
        {closeTrigger}
      </div>

      <Image
        className="absolute -bottom-1 z-10 sm:-bottom-[9px] sm:mx-10 sm:w-[760px]"
        src="/primitives/cart-hr.svg"
        height={18}
        width={764}
        alt=""
        loading="eager"
      />
    </div>
  )
}

export default CartHeader
