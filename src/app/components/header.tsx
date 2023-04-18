import { Cart } from './cart'
import { Logo } from './logo'

export const Header = async () => {
  return (
    <header className="fixed top-0 z-50 min-w-full bg-cream">
      <div className="m-auto max-w-7xl">
        <nav className="mx-4 flex h-16 max-w-7xl items-center justify-between bg-cream font-display text-base font-bold text-black sm:mx-8 sm:h-24 md:mx-16 lg:mx-12 xl:mx-auto">
          <Logo />
          <Cart />
        </nav>
      </div>
    </header>
  )
}
