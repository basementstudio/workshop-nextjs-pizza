import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className="-mt-8 bg-black pb-32">
        <div className="m-auto flex flex-col items-center gap-16 pt-40 font-display text-base uppercase text-cream sm:grid sm:w-9/12 sm:items-start lg:max-w-7xl lg:grid-cols-4">
          <div className="flex flex-col items-center lg:items-start">
            <Image
              className="h-10"
              src="/logos/basement.svg"
              height={26}
              width={185}
              alt="logo basement"
            />
            <div className="pb-12 pt-[50px] text-center leading-tight lg:text-left">
              our work is serious, <br /> we are not.
            </div>
            <Image
              className="h-[48px] sm:h-[84px]"
              src="/logos/next-pizza.svg"
              height={84}
              width={412}
              alt="logo nextjs and pizza"
            />
          </div>

          <div className="flex flex-col justify-end gap-6 text-center leading-tight lg:text-right">
            <div className="font-bold text-teal">
              bsmnt <br /> resources
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://github.com/basementstudio/commerce-toolkit"
                  rel="noopener"
                >
                  TOOLKIT
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://github.com/basementstudio/workshop-nextjs-pizza"
                  rel="noopener"
                >
                  REPO
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://figma.com/"
                  rel="noopener"
                >
                  FIGMA
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-6 text-center leading-tight lg:text-right">
            <div className="font-bold text-teal">
              our cool <br />
              storefronts
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://foundry.basement.studio/"
                  rel="noopener"
                >
                  BASEMENT FOUNDRY
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://mrbeast.basement.studio/"
                  rel="noopener"
                >
                  MR BEAST
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://karljacobs.co/"
                  rel="noopener"
                >
                  KARL JACOBS
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://shopmrballen.com/"
                  rel="noopener"
                >
                  MR BALLEN
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://ranboo.fashion/"
                  rel="noopener"
                >
                  RANBOO
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-6 text-center leading-tight lg:text-right">
            <div className="font-bold text-teal">
              our <br /> socials
            </div>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://twitter.com/basementstudio"
                  rel="noopener"
                >
                  TWITTER
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://www.instagram.com/basementdotstudio"
                  rel="noopener"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://www.linkedin.com/company/basementstudio/"
                  rel="noopener"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://www.twitch.tv/basementdotstudio"
                  rel="noopener"
                >
                  TWITCH
                </a>
              </li>
              <li>
                <a
                  className="hover:text-pink"
                  target="_blank"
                  href="https://basement.studio/"
                  rel="noopener"
                >
                  WEBSITE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
