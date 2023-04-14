import CartButton from './cart-btn'
import Logo from './logo'

export default function Header() {
  return (
    <header className=" fixed top-0 z-50 min-w-full bg-cream">
      <div className="m-auto max-w-7xl">
        <nav className="  flex h-24 w-full max-w-7xl items-center justify-between bg-cream font-display text-base font-bold text-black">
          <Logo />
          <div className="flex gap-8 py-2">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>SHOP ALL</div>
          </div>
          <CartButton />
        </nav>
      </div>
    </header>
  )
}
