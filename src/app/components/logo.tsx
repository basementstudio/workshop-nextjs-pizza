import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'} aria-label="go home">
      <Image
        className="h-5 w-32 sm:h-8 sm:w-[212px]"
        src="/logos/header-logo.svg"
        height={32}
        width={212}
        alt="logo nextjs & pizza"
        priority
      />
    </Link>
  )
}
