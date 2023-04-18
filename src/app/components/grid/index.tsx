import Image from 'next/image'

const Grid = () => {
  return (
    <>
      <Image
        className="absolute -top-[10px] -ml-[9px] hidden  h-[18px] w-screen items-center justify-center sm:block"
        src="/primitives/hr.svg"
        height={18}
        width={1920}
        alt="hr"
        loading="eager"
        priority
      />
      <Image
        className="absolute -top-[10px] h-[18px] w-screen items-center justify-center sm:hidden"
        src="/primitives/cart-hr.svg"
        height={18}
        width={500}
        alt="hr"
        loading="eager"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 h-[90%] bg-[url('/primitives/grid-bg.svg')] bg-[length:113px_113px] bg-center bg-repeat sm:h-[80%]  sm:bg-[length:416px_416px]">
        <div className="h-full"></div>
        <Image
          className="relative -top-[9px] -ml-[9px] hidden h-[18px] w-screen  sm:block"
          src="/primitives/hr.svg"
          height={18}
          width={1900}
          alt="hr"
          loading="eager"
        />
        <Image
          className="relative -top-[9px]  h-[18px] w-screen items-center justify-center sm:hidden "
          src="/primitives/cart-hr.svg"
          height={18}
          width={500}
          alt="hr"
          loading="eager"
        />
      </div>
    </>
  )
}

export default Grid
