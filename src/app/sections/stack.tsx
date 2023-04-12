import Image from 'next/image'

export default function Stack() {
  return (
    <>
      <section className="flex flex-col gap-12 rounded-extra bg-cream py-48 text-center font-display drop-shadow-section">
        <div className="m-auto max-w-[842px] text-title font-bold uppercase leading-tight text-black">
          pizzas, tees & code: <br /> we have the best spices for everything
        </div>
        <div className=" m-auto text-5xl uppercase text-black">
          meet our stack for the best cooking
        </div>
        <div className="flex items-center justify-center gap-16">
          <Image
            src="/logos/next.svg"
            height={36}
            width={36}
            alt="logo nextjs"
          />
          <Image
            src="/logos/ts.svg"
            height={36}
            width={36}
            alt="logo typescript"
          />
          <Image
            src="/logos/vercel.svg"
            height={36}
            width={36}
            alt="logo vercel"
          />
          <Image
            src="/logos/shopify.svg"
            height={36}
            width={36}
            alt="logo shopify"
          />
          <Image
            src="/logos/tailwind.svg"
            height={36}
            width={36}
            alt="logo tailwindcss"
          />
        </div>

        <div className="absolute inset-0 h-full">
          <Image
            className="relative left-2/3 top-16"
            src="/cap.svg"
            height={156}
            width={218}
            alt="cap"
          />
          <Image
            className="relative left-32 top-48"
            src="/pizza.svg"
            height={134}
            width={144}
            alt="pizza"
          />
          <Image
            className="relative -top-24 left-64"
            src="/star-pink.svg"
            height={36}
            width={36}
            alt="pink star"
          />
          <Image
            className="relative left-3/4 top-48"
            src="/star-teal.svg"
            height={32}
            width={32}
            alt="teal star"
          />
        </div>
      </section>
    </>
  )
}
