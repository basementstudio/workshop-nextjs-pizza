import { cookies } from 'next/dist/client/components/headers'

import { CartFragment, cartFragment } from '~/shopify/sdk-gen/fragments'
import { storefront } from '~/shopify/sdk-gen/sdk'
import { cartCookieKey } from '~/shopify/storefront-hooks/cart-cookie-key'

import Cart from './cart'
import Logo from './logo'

export default async function Header() {
  const cookieStore = cookies()
  const cookie = cookieStore.get(cartCookieKey)
  const cartId = cookie?.value

  let prefetchedCart: CartFragment | undefined = undefined
  if (cartId) {
    const { cart } = await storefront.query({
      cart: { __args: { id: cartId }, ...cartFragment }
    })
    prefetchedCart = cart
  }

  return (
    <header className="fixed top-0 z-50 min-w-full bg-cream">
      <div className="m-auto max-w-7xl">
        <nav className="flex h-24 w-full max-w-7xl items-center justify-between bg-cream font-display text-base font-bold text-black">
          <Logo />
          <div className="hidden gap-8 py-2 lg:flex">
            <div>HOME</div>
            <div>ABOUT</div>
            <div>SHOP ALL</div>
          </div>
          <Cart prefetchedCart={prefetchedCart} />
        </nav>
      </div>
    </header>
  )
}
