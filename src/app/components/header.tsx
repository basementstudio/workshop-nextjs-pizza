import { CartFragment, cartFragment } from '~/shopify/sdk-gen/fragments'
import { storefront } from '~/shopify/sdk-gen/sdk'

import Cart from './cart'
import Logo from './logo'

export default async function Header() {
  /**
   * Comment this out because it would pass the whole page to a lambda, making the site slow.
   * We need to wait until this issue (https://github.com/vercel/next.js/issues/43690) is resolved
   * so that we can run this code at the edge keeping the site fast, and also pre-fetching the cart.
   */
  // const cookieStore = cookies()
  // const cookie = cookieStore.get(cartCookieKey)
  // const cartId = cookie?.value
  const cartId = ''

  let prefetchedCart: CartFragment | undefined = undefined
  if (cartId) {
    const { cart } = await storefront.query({
      cart: { __args: { id: cartId }, ...cartFragment }
    })
    prefetchedCart = cart
  }

  /* end of code to comment out */

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
