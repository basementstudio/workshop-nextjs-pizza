import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className="-mt-8 h-[600px] bg-black">
        <div className="m-auto grid max-w-7xl grid-cols-4 items-start pt-40 font-display text-base uppercase text-cream">
          <div className="flex flex-col">
            <Image
              className="h-10"
              src="/logos/basement.svg"
              height={26}
              width={185}
              alt="logo basement"
            />
            <div className="pb-12 pt-[50px] leading-tight">
              our work is serious, <br /> we are not.
            </div>
            <Image
              src="/logos/next-pizza.svg"
              height={84}
              width={412}
              alt="logo nextjs and pizza"
            />
          </div>

          <div className="flex flex-col justify-end gap-6 text-right leading-tight">
            <div className="font-bold">
              bsmnt <br /> resources
            </div>
            <ul className="flex flex-col gap-2">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-6 text-right leading-tight">
            <div className="font-bold">
              our cool <br />
              storefronts
            </div>
            <ul className="flex flex-col gap-2">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-6 text-right leading-tight">
            <div className="font-bold">
              our <br /> socials
            </div>
            <ul className="flex flex-col gap-2">
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
