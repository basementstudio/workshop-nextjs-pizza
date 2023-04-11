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
          <Image src="/logos/next.svg" height={36} width={36} />
          <Image src="/logos/ts.svg" height={36} width={36} />
          <Image src="/logos/vercel.svg" height={36} width={36} />
          <Image src="/logos/shopify.svg" height={36} width={36} />
          <Image src="/logos/tailwind.svg" height={36} width={36} />
        </div>

        <div className="absolute inset-0 h-full w-screen">
          <Image
            className="relative left-2/3 top-16"
            src="/cap.svg"
            height={156}
            width={218}
          />
          <Image
            className="relative left-32 top-48"
            src="/pizza.svg"
            height={134}
            width={144}
          />
          <Image
            className="relative left-64 -top-24"
            src="/star-pink.svg"
            height={36}
            width={36}
          />
          <Image
            className="relative left-3/4 top-48"
            src="/star-teal.svg"
            height={32}
            width={32}
          />
        </div>
      </section>
    </>
  )
}
