import Image from 'next/image'

const Stack = () => {
  return (
    <section className="relative flex flex-col gap-12 rounded-extra bg-cream py-36 text-center font-display drop-shadow-section md:py-48">
      <p className="m-auto max-w-[842px] text-base font-bold uppercase leading-tight text-black md:text-title">
        pizzas, tees & code: <br /> we have the best spices for everything
      </p>
      <p className="m-auto w-40 text-xl uppercase leading-tight text-black md:w-1/2 md:text-5xl lg:w-full">
        meet our stack for the best cooking
      </p>
      <div className="m-auto flex w-64 flex-wrap items-center justify-center gap-x-16 gap-y-8 md:gap-16 lg:w-full">
        <a
          className="ease-in-out hover:scale-110"
          target="_blank"
          href="https://nextjs.com/"
          rel="noopener"
        >
          <Image
            className="h-8 w-8"
            src="/logos/next.svg"
            height={36}
            width={36}
            alt="logo nextjs"
          />
        </a>
        <Image
          className="h-8 w-8 "
          src="/logos/ts.svg"
          height={36}
          width={36}
          alt="logo typescript"
        />
        <Image
          className="h-8 w-8 "
          src="/logos/vercel.svg"
          height={36}
          width={36}
          alt="logo vercel"
        />
        <Image
          className="h-8 w-8 "
          src="/logos/shopify.svg"
          height={36}
          width={36}
          alt="logo shopify"
        />
        <Image
          className="h-8 w-8"
          src="/logos/tailwind.svg"
          height={36}
          width={36}
          alt="logo tailwindcss"
        />
      </div>
      <Image
        className="absolute left-1/2 top-12 h-[80px] w-[110px] md:left-2/3 md:h-[156px] md:w-[218px]"
        src="/primitives/cap.svg"
        height={156}
        width={218}
        alt="cap"
      />
      <Image
        className="absolute left-10 top-36 h-[48px] w-[52px] md:left-24 md:top-96 md:h-[101px] md:w-[110px] xl:left-80 xl:top-48 xl:h-[134px] xl:w-[144px] "
        src="/primitives/pizza.svg"
        height={134}
        width={144}
        alt="pizza"
      />
      <Image
        className="absolute -top-12 left-16 md:-top-48 md:left-64 xl:left-96 xl:top-24"
        src="/primitives/star-pink.svg"
        height={36}
        width={36}
        alt="pink star"
      />
      <Image
        className="absolute left-3/4 top-24 md:top-96 xl:top-48"
        src="/primitives/star-teal.svg"
        height={32}
        width={32}
        alt="teal star"
      />
    </section>
  )
}

export default Stack
