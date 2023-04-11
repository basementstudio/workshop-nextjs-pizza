import CartButton from './cart-btn'
import CartAddButton from './cart-btn-add'
import CartCloseButton from './cart-btn-close'
import Logo from './logo'
import SizeButton from './size-btn'

export default function Nav() {
  return (
    <div className=" z-50 top-0 fixed min-w-full bg-cream">
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
    </div>
  )
}
