import Image from 'next/image'

const resources = [
  {
    name: 'TOOLKIT',
    url: 'https://github.com/basementstudio/commerce-toolkit'
  },
  {
    name: 'REPO',
    url: 'https://github.com/basementstudio/workshop-nextjs-pizza'
  },
  {
    name: 'FIGMA',
    url: 'https://www.figma.com/file/apST1EGGxQ5E2FiTLAbzlM/Spicy-Shop---Next.js-%26-Pizza?node-id=0%3A1&t=HEBzqvtkL4wv4x1q-1'
  }
]

const storefronts = [
  {
    name: 'BASEMENT FOUNDRY',
    url: 'https://foundry.basement.studio/'
  },
  {
    name: 'MR BEAST',
    url: 'https://mrbeast.basement.studio/'
  },
  {
    name: 'KARL JACOBS',
    url: 'https://karljacobs.co/'
  },
  {
    name: 'MR BALLEN',
    url: 'https://shopmrballen.com/'
  },
  {
    name: 'RANBOO',
    url: 'https://ranboo.fashion/'
  }
]

const socials = [
  {
    name: 'TWITTER',
    url: 'https://twitter.com/basementstudio'
  },
  {
    name: 'INSTAGRAM',
    url: 'https://www.instagram.com/basementdotstudio'
  },
  {
    name: 'LINKEDIN',
    url: 'https://www.linkedin.com/company/basementstudio/'
  },
  {
    name: 'TWITCH',
    url: 'https://www.twitch.tv/basementdotstudio'
  },
  {
    name: 'WEBSITE',
    url: 'https://basement.studio/'
  }
]

const Footer = () => {
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
            <p className="pb-12 pt-[50px] text-center leading-tight lg:text-left">
              our work is serious, <br /> we are not.
            </p>
            <Image
              className="h-[48px] sm:h-[84px]"
              src="/logos/next-pizza.svg"
              height={84}
              width={412}
              alt="logo nextjs and pizza"
            />
          </div>

          <div className="flex flex-col justify-end gap-6 text-center leading-tight lg:text-right">
            <p className="font-bold text-teal">
              bsmnt <br /> resources
            </p>
            <ul className="flex flex-col gap-2">
              {resources.map(({ name, url }) => (
                <li key={name}>
                  <a
                    className="transition-colors ease-in better-hover:hover:text-pink"
                    target="_blank"
                    href={url}
                    rel="noopener"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-6 text-center leading-tight lg:text-right">
            <div className="font-bold text-teal">
              our cool <br />
              storefronts
            </div>
            <ul className="flex flex-col gap-2">
              {storefronts.map(({ name, url }) => (
                <li key={name}>
                  <a
                    className="transition-colors ease-in better-hover:hover:text-pink"
                    target="_blank"
                    href={url}
                    rel="noopener"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-6 text-center leading-tight lg:text-right">
            <div className="font-bold text-teal">
              our <br /> socials
            </div>
            <ul className="flex flex-col gap-2">
              {socials.map(({ name, url }) => (
                <li key={name}>
                  <a
                    className="transition-colors ease-in better-hover:hover:text-pink"
                    target="_blank"
                    href={url}
                    rel="noopener"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
