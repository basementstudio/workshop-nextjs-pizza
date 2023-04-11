import Image from 'next/image'

import CartAddButton from '../components/cart-btn-add'
import Grid from '../components/grid'
import Product from '../components/product'
import SizeButton from '../components/size-btn'

export default function Shop() {
  return (
    <div>
      <section className="relative z-30 w-full border-t-2 border-black bg-cream">
        {/* <section className="w-full border-t-2 border-black bg-[url('/bg.svg')] bg-center bg-repeat"> */}

        <div className="relative z-10 m-auto grid max-w-7xl grid-cols-2 gap-5 bg-transparent pt-24">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>

        <Grid />
      </section>
    </div>
  )
}
