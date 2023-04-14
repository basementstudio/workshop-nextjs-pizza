import Cart from './cart'
import Logo from './logo'

export default function Header() {
  return (
    <header className=" fixed top-0 z-50 min-w-full bg-cream">
      <div className="m-auto max-w-7xl">
        <nav className="  flex h-24 w-full max-w-7xl items-center justify-between bg-cream font-display text-base font-bold text-black">
          <Logo />
          <div className="hidden gap-8 py-2 lg:flex">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>SHOP ALL</div>
          </div>
          <Cart />
        </nav>
      </div>
    </header>
  )
}
