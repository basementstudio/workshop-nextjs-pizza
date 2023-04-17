import Image from 'next/image'
import { Fragment } from 'react'

const Grid = () => {
  const row = 2
  const num = 3
  return (
    <div>
      <Image
        className="absolute -top-[10px] hidden h-[18px] w-screen items-center justify-center"
        src="/primitives/hr.svg"
        height={18}
        width={1920}
        alt=""
        loading="eager"
      />
      <Image
        className="absolute -top-[10px] h-[18px] w-screen items-center justify-center"
        src="/primitives/cart-hr.svg"
        height={18}
        width={1920}
        alt=""
        loading="eager"
      />
      <div className="absolute inset-0 -z-10">
        {[...Array(row)].map((_, i) => (
          <div key={i} className="flex w-full flex-wrap">
            {[...Array(num)].map((_, i) => (
              <Fragment key={i}>
                <span className=" box-outline aspect-square w-2/12  bg-teal" />
                <span className=" box-outline aspect-square w-2/12 bg-cream" />
              </Fragment>
            ))}
            {[...Array(num)].map((_, i) => (
              <Fragment key={i}>
                <span className=" box-outline aspect-square w-2/12 bg-cream" />
                <span className=" box-outline aspect-square w-2/12  bg-teal" />
              </Fragment>
            ))}
          </div>
        ))}
        <Image
          className="relative -top-[9px] hidden h-[18px] w-screen items-center justify-center"
          src="/primitives/hr.svg"
          height={18}
          width={1920}
          alt=""
          loading="eager"
        />
        <Image
          className="relative -top-[9px] h-[18px] w-screen items-center justify-center"
          src="/primitives/cart-hr.svg"
          height={18}
          width={1920}
          alt=""
          loading="eager"
        />
      </div>
    </div>
  )
}

export default Grid
