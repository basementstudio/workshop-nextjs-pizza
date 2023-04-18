import Image from 'next/image'

import jbSvg from '~/public/jb.svg'

export const Hero = () => {
  return (
    <section className="bg-cream pb-9 pt-24 md:pb-12 md:pt-48">
      <h1 className="relative w-full text-center">
        <span className="relative block text-center font-display text-[16vw] font-black leading-trim text-black">
          SPICY SHOP FT.
        </span>

        <Image
          src={jbSvg}
          priority
          alt="julian benegas"
          className="pointer-events-none relative top-[-5vw] mx-auto block w-[80vw]"
        />
      </h1>
    </section>
  )
}
