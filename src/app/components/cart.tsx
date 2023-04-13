import CartFooter from './cart-footer'
import CartHeader from './cart-header'
import CartProduct from './cart-product'

export default function Cart() {
  return (
    <div className="fixed top-0 z-50 h-screen w-screen bg-black/50">
      <div className="min-w-xl absolute right-0 h-screen rounded-bl-3xl border-l-2 border-black bg-cream">
        <CartHeader />
        <div className="mx-12 mt-12 flex flex-col gap-6">
          <CartProduct />
          <CartProduct />
        </div>
        <CartFooter />
      </div>
    </div>
  )
}
