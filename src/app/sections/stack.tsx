import Image from 'next/image'

const stack = [
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    logo: '/logos/next.svg',
    alt: 'logo nextjs'
  },
  {
    name: 'Typescript',
    url: 'https://www.typescriptlang.org/',
    logo: '/logos/ts.svg',
    alt: 'logo typescript'
  },
  {
    name: 'Vercel',
    url: 'https://vercel.com/',
    logo: '/logos/vercel.svg',
    alt: 'logo vercel'
  },
  {
    name: 'Shopify',
    url: 'https://www.shopify.com/',
    logo: '/logos/shopify.svg',
    alt: 'logo shopify'
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    logo: '/logos/tailwind.svg',
    alt: 'logo tailwindcss'
  }
]

export const Stack = () => {
  return (
    <section className="relative flex flex-col gap-12 rounded-extra bg-cream px-12 py-36 text-center font-display drop-shadow-section sm:px-12 md:py-48">
      <p className="m-auto max-w-[80vw] text-base font-bold uppercase leading-tight text-black sm:text-5xl md:max-w-3xl md:text-title">
        pizzas, tees & code: <br /> we have the best spices for everything
      </p>
      <p className="m-auto px-16 text-xl uppercase leading-tight text-black sm:text-3xl md:text-5xl">
        meet our stack for the best cooking
      </p>
      <div className="m-auto -mt-2 flex w-64 flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-16 lg:w-full">
        {stack.map(({ url, logo, alt }, idx) => (
          <a
            key={idx}
            className="-mr-2 p-2 transition-transform duration-300 ease-out better-hover:hover:scale-125"
            target="_blank"
            href={url}
            rel="noopener"
          >
            <Image
              className="h-8 w-8 sm:h-9 sm:w-9"
              src={logo}
              height={36}
              width={36}
              alt={alt}
            />
          </a>
        ))}
      </div>
      <Image
        className="absolute left-1/2 top-12 h-[80px] w-[110px] md:left-2/3 md:top-20 md:h-[156px] md:w-[218px]"
        src="/primitives/cap.svg"
        height={156}
        width={218}
        alt="cap"
      />
      <Image
        className="absolute left-10 top-72 h-[48px] w-[52px] md:left-24 md:top-[460px] md:h-[101px] md:w-[110px] xl:left-40 xl:top-48 xl:h-[400px] xl:w-[144px] "
        src="/primitives/pizza.svg"
        height={134}
        width={144}
        alt="pizza"
      />
      <Image
        className="absolute left-16 top-12 scale-75 sm:left-32 sm:top-20 sm:scale-100 xl:left-96 xl:top-24"
        src="/primitives/star-pink.svg"
        height={36}
        width={36}
        alt="pink star"
      />
      <Image
        className="absolute right-6 top-64 scale-75 sm:right-24 sm:scale-100 md:top-[600px] xl:right-[284px]"
        src="/primitives/star-teal.svg"
        height={32}
        width={32}
        alt="teal star"
      />
    </section>
  )
}
